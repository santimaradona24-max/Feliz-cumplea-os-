import"./modulepreload-polyfill-P2Xu9kJm.js";var e=Uint8Array,t=Uint16Array,n=Int32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(e,r){for(var i=new t(31),a=0;a<31;++a)i[a]=r+=1<<e[a-1];for(var o=new n(i[30]),a=1;a<30;++a)for(var s=i[a];s<i[a+1];++s)o[s]=s-i[a]<<5|a;return{b:i,r:o}},s=o(r,2),c=s.b,l=s.r;c[28]=258,l[258]=28;for(var u=o(i,0),d=u.b,f=u.r,p=new t(32768),m=0;m<32768;++m){var h=(m&43690)>>1|(m&21845)<<1;h=(h&52428)>>2|(h&13107)<<2,h=(h&61680)>>4|(h&3855)<<4,p[m]=((h&65280)>>8|(h&255)<<8)>>1}for(var g=(function(e,n,r){for(var i=e.length,a=0,o=new t(n);a<i;++a)e[a]&&++o[e[a]-1];var s=new t(n);for(a=1;a<n;++a)s[a]=s[a-1]+o[a-1]<<1;var c;if(r){c=new t(1<<n);var l=15-n;for(a=0;a<i;++a)if(e[a])for(var u=a<<4|e[a],d=n-e[a],f=s[e[a]-1]++<<d,m=f|(1<<d)-1;f<=m;++f)c[p[f]>>l]=u}else for(c=new t(i),a=0;a<i;++a)e[a]&&(c[a]=p[s[e[a]-1]++]>>15-e[a]);return c}),_=new e(288),m=0;m<144;++m)_[m]=8;for(var m=144;m<256;++m)_[m]=9;for(var m=256;m<280;++m)_[m]=7;for(var m=280;m<288;++m)_[m]=8;for(var v=new e(32),m=0;m<32;++m)v[m]=5;var y=g(_,9,0),b=g(_,9,1),x=g(v,5,0),S=g(v,5,1),C=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},w=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},T=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},E=function(e){return(e+7)/8|0},D=function(t,n,r){return(n==null||n<0)&&(n=0),(r==null||r>t.length)&&(r=t.length),new e(t.subarray(n,r))},O=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],k=function(e,t,n){var r=Error(t||O[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,k),!n)throw r;return r},A=function(t,n,o,s){var l=t.length,u=s?s.length:0;if(!l||n.f&&!n.l)return o||new e(0);var f=!o,p=f||n.i!=2,m=n.i;f&&(o=new e(l*3));var h=function(t){var n=o.length;if(t>n){var r=new e(Math.max(n*2,t));r.set(o),o=r}},_=n.f||0,v=n.p||0,y=n.b||0,x=n.l,O=n.d,A=n.m,j=n.n,ee=l*8;do{if(!x){_=w(t,v,1);var M=w(t,v+1,3);if(v+=3,!M){var N=E(v)+4,te=t[N-4]|t[N-3]<<8,ne=N+te;if(ne>l){m&&k(0);break}p&&h(y+te),o.set(t.subarray(N,ne),y),n.b=y+=te,n.p=v=ne*8,n.f=_;continue}if(M==1)x=b,O=S,A=9,j=5;else if(M==2){var re=w(t,v,31)+257,ie=w(t,v+10,15)+4,ae=re+w(t,v+5,31)+1;v+=14;for(var oe=new e(ae),P=new e(19),se=0;se<ie;++se)P[a[se]]=w(t,v+se*3,7);v+=ie*3;for(var F=C(P),ce=(1<<F)-1,le=g(P,F,1),se=0;se<ae;){var ue=le[w(t,v,ce)];v+=ue&15;var N=ue>>4;if(N<16)oe[se++]=N;else{var de=0,fe=0;for(N==16?(fe=3+w(t,v,3),v+=2,de=oe[se-1]):N==17?(fe=3+w(t,v,7),v+=3):N==18&&(fe=11+w(t,v,127),v+=7);fe--;)oe[se++]=de}}var pe=oe.subarray(0,re),me=oe.subarray(re);A=C(pe),j=C(me),x=g(pe,A,1),O=g(me,j,1)}else k(1);if(v>ee){m&&k(0);break}}p&&h(y+131072);for(var he=(1<<A)-1,ge=(1<<j)-1,_e=v;;_e=v){var de=x[T(t,v)&he],ve=de>>4;if(v+=de&15,v>ee){m&&k(0);break}if(de||k(2),ve<256)o[y++]=ve;else if(ve==256){_e=v,x=null;break}else{var ye=ve-254;if(ve>264){var se=ve-257,be=r[se];ye=w(t,v,(1<<be)-1)+c[se],v+=be}var xe=O[T(t,v)&ge],I=xe>>4;xe||k(3),v+=xe&15;var me=d[I];if(I>3){var be=i[I];me+=T(t,v)&(1<<be)-1,v+=be}if(v>ee){m&&k(0);break}p&&h(y+131072);var Se=y+ye;if(y<me){var Ce=u-me,we=Math.min(me,Se);for(Ce+y<0&&k(3);y<we;++y)o[y]=s[Ce+y]}for(;y<Se;++y)o[y]=o[y-me]}}n.l=x,n.p=_e,n.b=y,n.f=_,x&&(_=1,n.m=A,n.d=O,n.n=j)}while(!_);return y!=o.length&&f?D(o,0,y):o.subarray(0,y)},j=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},ee=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},M=function(n,r){for(var i=[],a=0;a<n.length;++a)n[a]&&i.push({s:a,f:n[a]});var o=i.length,s=i.slice();if(!o)return{t:oe,l:0};if(o==1){var c=new e(i[0].s+1);return c[i[0].s]=1,{t:c,l:1}}i.sort(function(e,t){return e.f-t.f}),i.push({s:-1,f:25001});var l=i[0],u=i[1],d=0,f=1,p=2;for(i[0]={s:-1,f:l.f+u.f,l,r:u};f!=o-1;)l=i[i[d].f<i[p].f?d++:p++],u=i[d!=f&&i[d].f<i[p].f?d++:p++],i[f++]={s:-1,f:l.f+u.f,l,r:u};for(var m=s[0].s,a=1;a<o;++a)s[a].s>m&&(m=s[a].s);var h=new t(m+1),g=N(i[f-1],h,0);if(g>r){var a=0,_=0,v=g-r,y=1<<v;for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});a<o;++a){var b=s[a].s;if(h[b]>r)_+=y-(1<<g-h[b]),h[b]=r;else break}for(_>>=v;_>0;){var x=s[a].s;h[x]<r?_-=1<<r-h[x]++-1:++a}for(;a>=0&&_;--a){var S=s[a].s;h[S]==r&&(--h[S],++_)}g=r}return{t:new e(h),l:g}},N=function(e,t,n){return e.s==-1?Math.max(N(e.l,t,n+1),N(e.r,t,n+1)):t[e.s]=n},te=function(e){for(var n=e.length;n&&!e[--n];);for(var r=new t(++n),i=0,a=e[0],o=1,s=function(e){r[i++]=e},c=1;c<=n;++c)if(e[c]==a&&c!=n)++o;else{if(!a&&o>2){for(;o>138;o-=138)s(32754);o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(a),--o;o>6;o-=6)s(8304);o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(a);o=1,a=e[c]}return{c:r.subarray(0,i),n}},ne=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},re=function(e,t,n){var r=n.length,i=E(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},ie=function(e,n,o,s,c,l,u,d,f,p,m){j(n,m++,o),++c[256];for(var h=M(c,15),b=h.t,S=h.l,C=M(l,15),w=C.t,T=C.l,E=te(b),D=E.c,O=E.n,k=te(w),A=k.c,N=k.n,ie=new t(19),ae=0;ae<D.length;++ae)++ie[D[ae]&31];for(var ae=0;ae<A.length;++ae)++ie[A[ae]&31];for(var oe=M(ie,7),P=oe.t,se=oe.l,F=19;F>4&&!P[a[F-1]];--F);var ce=p+5<<3,le=ne(c,_)+ne(l,v)+u,ue=ne(c,b)+ne(l,w)+u+14+3*F+ne(ie,P)+2*ie[16]+3*ie[17]+7*ie[18];if(f>=0&&ce<=le&&ce<=ue)return re(n,m,e.subarray(f,f+p));var de,fe,pe,me;if(j(n,m,1+(ue<le)),m+=2,ue<le){de=g(b,S,0),fe=b,pe=g(w,T,0),me=w;var he=g(P,se,0);j(n,m,O-257),j(n,m+5,N-1),j(n,m+10,F-4),m+=14;for(var ae=0;ae<F;++ae)j(n,m+3*ae,P[a[ae]]);m+=3*F;for(var ge=[D,A],_e=0;_e<2;++_e)for(var ve=ge[_e],ae=0;ae<ve.length;++ae){var ye=ve[ae]&31;j(n,m,he[ye]),m+=P[ye],ye>15&&(j(n,m,ve[ae]>>5&127),m+=ve[ae]>>12)}}else de=y,fe=_,pe=x,me=v;for(var ae=0;ae<d;++ae){var be=s[ae];if(be>255){var ye=be>>18&31;ee(n,m,de[ye+257]),m+=fe[ye+257],ye>7&&(j(n,m,be>>23&31),m+=r[ye]);var xe=be&31;ee(n,m,pe[xe]),m+=me[xe],xe>3&&(ee(n,m,be>>5&8191),m+=i[xe])}else ee(n,m,de[be]),m+=fe[be]}return ee(n,m,de[256]),m+fe[256]},ae=new n([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),oe=new e(0),P=function(a,o,s,c,u,d){var p=d.z||a.length,m=new e(c+p+5*(1+Math.ceil(p/7e3))+u),h=m.subarray(c,m.length-u),g=d.l,_=(d.r||0)&7;if(o){_&&(h[0]=d.r>>3);for(var v=ae[o-1],y=v>>13,b=v&8191,x=(1<<s)-1,S=d.p||new t(32768),C=d.h||new t(x+1),w=Math.ceil(s/3),T=2*w,O=function(e){return(a[e]^a[e+1]<<w^a[e+2]<<T)&x},k=new n(25e3),A=new t(288),j=new t(32),ee=0,M=0,N=d.i||0,te=0,ne=d.w||0,oe=0;N+2<p;++N){var P=O(N),se=N&32767,F=C[P];if(S[se]=F,C[P]=se,ne<=N){var ce=p-N;if((ee>7e3||te>24576)&&(ce>423||!g)){_=ie(a,h,0,k,A,j,M,te,oe,N-oe,_),te=ee=M=0,oe=N;for(var le=0;le<286;++le)A[le]=0;for(var le=0;le<30;++le)j[le]=0}var ue=2,de=0,fe=b,pe=se-F&32767;if(ce>2&&P==O(N-pe))for(var me=Math.min(y,ce)-1,he=Math.min(32767,N),ge=Math.min(258,ce);pe<=he&&--fe&&se!=F;){if(a[N+ue]==a[N+ue-pe]){for(var _e=0;_e<ge&&a[N+_e]==a[N+_e-pe];++_e);if(_e>ue){if(ue=_e,de=pe,_e>me)break;for(var ve=Math.min(pe,_e-2),ye=0,le=0;le<ve;++le){var be=N-pe+le&32767,xe=be-S[be]&32767;xe>ye&&(ye=xe,F=be)}}}se=F,F=S[se],pe+=se-F&32767}if(de){k[te++]=268435456|l[ue]<<18|f[de];var I=l[ue]&31,Se=f[de]&31;M+=r[I]+i[Se],++A[257+I],++j[Se],ne=N+ue,++ee}else k[te++]=a[N],++A[a[N]]}}for(N=Math.max(N,ne);N<p;++N)k[te++]=a[N],++A[a[N]];_=ie(a,h,g,k,A,j,M,te,oe,N-oe,_),g||(d.r=_&7|h[_/8|0]<<3,_-=7,d.h=C,d.p=S,d.i=N,d.w=ne)}else{for(var N=d.w||0;N<p+g;N+=65535){var Ce=N+65535;Ce>=p&&(h[_/8|0]=g,Ce=p),_=re(h,_+1,a.subarray(N,Ce))}d.i=p}return D(m,0,c+E(_)+u)},se=function(){var e=1,t=0;return{p:function(n){for(var r=e,i=t,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,t=i},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},F=function(t,n,r,i,a){if(!a&&(a={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),s=new e(o.length+t.length);s.set(o),s.set(t,o.length),t=s,a.w=o.length}return P(t,n.level==null?6:n.level,n.mem==null?a.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+n.mem,r,i,a)},ce=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},le=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&k(6,`invalid gzip data`);var t=e[3],n=10;t&4&&(n+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},ue=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},de=function(e,t){var n=t.level,r=n==0?0:n<6?1:n==9?3:2;if(e[0]=120,e[1]=r<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var i=se();i.p(t.dictionary),ce(e,2,i.d())}};function fe(e,t){return F(e,t||{},0,0)}function pe(e,t){return A(e,{i:2},t&&t.out,t&&t.dictionary)}function me(t,n){var r=le(t);return r+8>t.length&&k(6,`invalid gzip data`),A(t.subarray(r,-8),{i:2},n&&n.out||new e(ue(t)),n&&n.dictionary)}function he(e,t){t||={};var n=se();n.p(e);var r=F(e,t,t.dictionary?6:2,4);return de(r,t),ce(r,r.length-4,n.d()),r}var ge=typeof TextEncoder<`u`&&new TextEncoder,_e=typeof TextDecoder<`u`&&new TextDecoder;try{_e.decode(oe,{stream:!0})}catch{}var ve=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:D(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function ye(t,n){if(n){for(var r=new e(t.length),i=0;i<t.length;++i)r[i]=t.charCodeAt(i);return r}if(ge)return ge.encode(t);for(var a=t.length,o=new e(t.length+(t.length>>1)),s=0,c=function(e){o[s++]=e},i=0;i<a;++i){if(s+5>o.length){var l=new e(s+8+(a-i<<1));l.set(o),o=l}var u=t.charCodeAt(i);u<128||n?c(u):u<2048?(c(192|u>>6),c(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|t.charCodeAt(++i)&1023,c(240|u>>18),c(128|u>>12&63),c(128|u>>6&63),c(128|u&63)):(c(224|u>>12),c(128|u>>6&63),c(128|u&63))}return D(o,0,s)}function be(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(_e)return _e.decode(e);var i=ve(e),a=i.s,n=i.r;return n.length&&k(8),a}var xe={Float32Array,Uint32Array,Uint16Array,Int16Array,Uint8Array},I=827344973;function Se(e){let t=e[0]===31&&e[1]===139?me(e):e,n=new DataView(t.buffer,t.byteOffset,t.byteLength);if(n.getUint32(0,!0)!==I)throw Error(`Not an asset pack`);let r=n.getUint32(4,!0),i=JSON.parse(new TextDecoder().decode(t.subarray(8,8+r))),a=t.slice(8+r),o={};for(let e of i.arrays)o[e.name]=new xe[e.type](a.buffer,e.offset,e.length);return{meta:i.meta,arrays:o}}function Ce(e){if(e.meta.format!==2)return e;let t=e.arrays,n=t.xlo.length,r=[new Int16Array(n),new Int16Array(n),new Int16Array(n)],i=[[t.xlo,t.xhi],[t.ylo,t.yhi],[t.zlo,t.zhi]];for(let[t,n]of Object.values(e.meta.targets))for(let e=0;e<3;e++){let[a,o]=i[e],s=r[e],c=0;for(let e=t;e<t+n;e++)c=c+(a[e]|o[e]<<8)&65535,s[e]=c<<16>>16}return{meta:e.meta,arrays:{idx:e.arrays.idx,dx:r[0],dy:r[1],dz:r[2]}}}function we(e=`./assets/`){return{async read(t){let n=await fetch(e+t);if(!n.ok)throw Error(`Failed to load ${t}: ${n.status}`);return new Uint8Array(await n.arrayBuffer())},url:t=>e+t}}var L=class{source;catalog;base;targets;proxies=new Map;textures=new Map;generated=new Map;blobUrls=new Map;registerTexture(e,t){this.generated.set(e,t)}hasTexture(e){return this.generated.has(e)}peekTexture(e){return this.generated.get(e)}generatedNames(){return[...this.generated.keys()]}constructor(e){this.source=e}async init(){let[e,t,n]=await Promise.all([this.source.read(`catalog.json`),this.source.read(`base.pack`),this.source.read(`targets.pack`)]);return this.catalog=JSON.parse(new TextDecoder().decode(e)),this.base=Se(t),this.targets=Ce(Se(n)),this}async initCatalog(){return this.catalog=JSON.parse(new TextDecoder().decode(await this.source.read(`catalog.json`))),this}proxy(e){let t=this.proxies.get(e);return t||this.proxies.set(e,t=this.source.read(e).then(e=>Se(e))),t}texture(e){let t=this.generated.get(e);if(t)return Promise.resolve(t);let n=this.textures.get(e);return n||this.textures.set(e,n=this.source.read(`textures/${e}`)),n}textureUrl(e){let t=this.generated.get(e);if(t){let n=this.blobUrls.get(e);return n||(n=URL.createObjectURL(new Blob([t],{type:e.endsWith(`.png`)?`image/png`:`image/jpeg`})),this.blobUrls.set(e,n)),n}return this.source.url?this.source.url(`textures/${e}`):e}};function Te(e,t,n,r){let i=[...e.entries()].filter(([,e])=>e>1e-6).sort((e,t)=>t[1]-e[1]).slice(0,4),a=i.reduce((e,[,t])=>e+t,0)||1;for(let e=0;e<4;e++)t[r+e]=i[e]?.[0]??0,n[r+e]=i[e]?i[e][1]/a:0}function R(e,t){let n=new Uint16Array(t.length*4),r=new Float32Array(t.length*4),i=new Map;return t.forEach((t,a)=>{i.clear();for(let n of t.v)for(let r=0;r<4;r++){let a=e.j[n*4+r],o=e.w[n*4+r]*t.f;o&&i.set(a,(i.get(a)??0)+o)}Te(i,n,r,a*4)}),{j:n,w:r}}function Ee(e){let t=e.positions.length/3,n=e.faceSizes.length,r=new Uint32Array(n);for(let t=0,i=0;t<n;t++)r[t]=i,i+=e.faceSizes[t];let i=new Map,a=[],o=[],s=[],c=[],l=new Uint32Array(e.faceVerts.length);for(let u=0;u<n;u++){let n=r[u],d=e.faceSizes[u];for(let r=0;r<d;r++){let f=e.faceVerts[n+r],p=e.faceVerts[n+(r+1)%d],m=f<p?f*t+p:p*t+f,h=i.get(m);h===void 0?(h=a.length,i.set(m,h),a.push(f),o.push(p),s.push(u),c.push(-1)):c[h]=u,l[n+r]=h}}let u=a.length,d=i=>{let l=new Float32Array(n*3);for(let t=0;t<n;t++){let n=r[t],a=e.faceSizes[t];for(let r=0;r<a;r++)for(let o=0;o<3;o++)l[t*3+o]+=i[e.faceVerts[n+r]*3+o]/a}let d=new Float32Array(u*3);for(let e=0;e<u;e++){let t=a[e],n=o[e],r=s[e],u=c[e];for(let a=0;a<3;a++){let o=(i[t*3+a]+i[n*3+a])/2;d[e*3+a]=u<0?o:(i[t*3+a]+i[n*3+a]+l[r*3+a]+l[u*3+a])/4}}let f=new Float32Array(t*3),p=new Uint32Array(t),m=new Float32Array(t*3),h=new Uint32Array(t),g=new Float32Array(t*3),_=new Uint32Array(t);for(let t=0;t<n;t++){let n=r[t],i=e.faceSizes[t];for(let r=0;r<i;r++){let i=e.faceVerts[n+r];p[i]++;for(let e=0;e<3;e++)f[i*3+e]+=l[t*3+e]}}for(let e=0;e<u;e++){let t=a[e],n=o[e];for(let[r,a]of[[t,n],[n,t]]){h[r]++;for(let e=0;e<3;e++)m[r*3+e]+=(i[r*3+e]+i[a*3+e])/2;if(c[e]<0){_[r]++;for(let e=0;e<3;e++)g[r*3+e]+=i[a*3+e]}}}let v=new Float32Array(t*3);for(let e=0;e<t;e++)for(let t=0;t<3;t++){let n=i[e*3+t];if(_[e]===2)v[e*3+t]=(6*n+g[e*3+t])/8;else if(_[e]>0||h[e]<3)v[e*3+t]=n;else{let r=h[e],i=f[e*3+t]/p[e],a=m[e*3+t]/r;v[e*3+t]=(i+2*a+(r-3)*n)/r}}let y=new Float32Array((t+u+n)*3);return y.set(v,0),y.set(d,t*3),y.set(l,(t+u)*3),y},f=d(e.positions),p=[],m=new Map,h=(e,t)=>{let n=`${Math.round(e*1e6)},${Math.round(t*1e6)}`,r=m.get(n);return r===void 0&&(r=p.length/2,p.push(e,t),m.set(n,r)),r},g=e.uvs,_=[],v=[];for(let i=0;i<n;i++){let n=r[i],a=e.faceSizes[i],o=0,s=0;for(let t=0;t<a;t++)o+=g[e.faceUVs[n+t]*2]/a,s+=g[e.faceUVs[n+t]*2+1]/a;let c=h(o,s),d=t+u+i;for(let r=0;r<a;r++){let i=(r+a-1)%a,o=(r+1)%a,s=e.faceUVs[n+r],u=e.faceUVs[n+i],f=e.faceUVs[n+o],p=g[s*2],m=g[s*2+1];_.push(e.faceVerts[n+r],t+l[n+r],d,t+l[n+i]),v.push(h(p,m),h((p+g[f*2])/2,(m+g[f*2+1])/2),c,h((p+g[u*2])/2,(m+g[u*2+1])/2))}}let y;if(e.skin){let i=[];for(let e=0;e<t;e++)i.push({v:[e],f:1});for(let e=0;e<u;e++)i.push({v:[a[e],o[e]],f:.5});for(let t=0;t<n;t++){let n=e.faceSizes[t];i.push({v:[...e.faceVerts.subarray(r[t],r[t]+n)],f:1/n})}y=R(e.skin,i)}return{skin:y,positions:f,morphs:e.morphs?.map(d),faceSizes:new Uint8Array(_.length/4).fill(4),faceVerts:Uint32Array.from(_),faceUVs:Uint32Array.from(v),uvs:Float32Array.from(p)}}function De(e,t){let n=e.length;if(n===1)return()=>t[0];let r=[],i=[];for(let a=0;a<n-1;a++)r[a]=e[a+1]-e[a],i[a]=(t[a+1]-t[a])/r[a];let a=Array(n);a[0]=i[0],a[n-1]=i[n-2];for(let e=1;e<n-1;e++)if(i[e-1]*i[e]<=0)a[e]=0;else{let t=2*r[e]+r[e-1],n=r[e]+2*r[e-1];a[e]=(t+n)/(t/i[e-1]+n/i[e])}return i=>{if(i<=e[0])return t[0];if(i>=e[n-1])return t[n-1];let o=0;for(;o<n-2&&i>e[o+1];)o++;let s=(i-e[o])/r[o],c=s*s,l=c*s;return(2*l-3*c+1)*t[o]+(l-2*c+s)*r[o]*a[o]+(-2*l+3*c)*t[o+1]+(l-c)*r[o]*a[o+1]}}function Oe(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var z={head:0,neck:1,torso:2,hips:3,upperarm:4,lowerarm:5,hand:6,upperleg:7,lowerleg:8,foot:9},B=e=>e*.1;z.upperarm,z.lowerarm,z.hand,z.upperleg,z.lowerleg,z.foot;function ke(e,t,n){let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)}function Ae(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a,l=e=>e*e*(3-2*e),u=l(o),d=l(s),f=l(c),p=(e,t,n)=>e+(t-e)*n,m=(e,t,n)=>ke(r+e,i+t,a+n);return p(p(p(m(0,0,0),m(1,0,0),u),p(m(0,1,0),m(1,1,0),u),d),p(p(m(0,0,1),m(1,0,1),u),p(m(0,1,1),m(1,1,1),u),d),f)}var je=class{data=[];keys=new Map;add(e,t){let n=`${Math.round(e*1e5)},${Math.round(t*1e5)}`,r=this.keys.get(n);return r===void 0&&(r=this.data.length/2,this.data.push(e,t),this.keys.set(n,r)),r}},Me={[z.torso]:.95,[z.hips]:.95,[z.neck]:.4,[z.head]:.6,[z.upperarm]:.32,[z.lowerarm]:.26,[z.hand]:.2,[z.upperleg]:.55,[z.lowerleg]:.36,[z.foot]:.25},Ne={[z.upperarm]:.3,[z.lowerarm]:.26,[z.hand]:.18,[z.upperleg]:.45,[z.lowerleg]:.42,[z.foot]:.2};function Pe(e,t,n){let r=e.info[t],i=Math.max(1,Math.round((Me[r.region]??.5)/n));return[(r.theta/(2*Math.PI)+.5)%1*i,(r.region in Ne?-r.t*Ne[r.region]:e.coords[t*3+1]*.1)/n]}function Fe(e,t,n){let r=e.length/4,i=new Uint8Array(r);for(let n=0;n<r;n++){let r=0;for(let i=0;i<4;i++)r+=t[e[n*4+i]];i[n]=+(r>=3)}let a=new Map;for(let t=0;t<r;t++)for(let r=0;r<4;r++){let i=e[t*4+r],o=e[t*4+(r+1)%4],s=i<o?i*n+o:o*n+i,c=a.get(s);c?c.push(t):a.set(s,[t])}let o=t=>{let r=[];for(let i=0;i<4;i++){let o=e[t*4+i],s=e[t*4+(i+1)%4];for(let e of a.get(o<s?o*n+s:s*n+o))e!==t&&r.push(e)}return r};for(let e=0;e<2;e++)for(let e=0;e<r;e++)if(!i[e]){let t=o(e);t.length>=3&&t.filter(e=>i[e]).length>=t.length-1&&(i[e]=2)}let s=new Uint8Array(r);for(let e=0;e<r;e++){if(!i[e]||s[e])continue;let t=[e];s[e]=1;for(let e=0;e<t.length;e++)for(let n of o(t[e]))i[n]&&!s[n]&&(s[n]=1,t.push(n));if(t.length<20)for(let e of t)i[e]=0}return i}function Ie(e,t,n){let r=e.regions.length,i=new Uint8Array(r);for(let t=0;t<r;t++)e.regions[t]!==255&&n.covers(e.info[t],e.p(t))&&(i[t]=1);let a=Fe(t,i,r),o=[];for(let e=0;e<a.length;e++)a[e]&&o.push(e*4);if(!o.length)return null;let s=n.tile??.25,c=new Map,l=[],u=[],d=e.normals,f=e.coords,p=t=>typeof n.offset==`number`?n.offset:n.offset(e.info[t],e.p(t)),m=e=>{let t=c.get(e);if(t===void 0){t=l.length/3,c.set(e,t),u.push(e);let n=p(e);l.push(f[e*3]+d[e*3]*n,f[e*3+1]+d[e*3+1]*n,f[e*3+2]+d[e*3+2]*n)}return t},h=new je,g=[],_=[],v=[],y=new Map,b=(e,t)=>e<t?e*r+t:t*r+e;for(let n of o){let r=[t[n],t[n+1],t[n+2],t[n+3]],i=r.map(t=>Pe(e,t,s)),a=Math.max(...i.map(e=>Math.ceil(e[0])));if(Math.max(...i.map(e=>e[0]))-Math.min(...i.map(e=>e[0]))>a/2)for(let e of i)e[0]<a/2&&(e[0]+=a);g.push(4);for(let e=0;e<4;e++){_.push(m(r[e])),v.push(h.add(i[e][0],i[e][1]));let t=b(r[e],r[(e+1)%4]);y.set(t,(y.get(t)??0)+1)}}if(n.relax){let e=new Map;for(let n of o)for(let r=0;r<4;r++){let i=c.get(t[n+r]),a=c.get(t[n+(r+1)%4]);e.has(i)||e.set(i,new Set),e.has(a)||e.set(a,new Set),e.get(i).add(a),e.get(a).add(i)}let r=new Set;for(let e of o)for(let n=0;n<4;n++){let i=t[e+n],a=t[e+(n+1)%4];y.get(b(i,a))===1&&(r.add(c.get(i)),r.add(c.get(a)))}for(let t=0;t<n.relax;t++){let t=l.slice();for(let[n,i]of e){if(r.has(n))continue;let e=0,a=0,o=0;for(let t of i)e+=l[t*3],a+=l[t*3+1],o+=l[t*3+2];let s=i.size;t[n*3]=l[n*3]*.5+e/s*.5,t[n*3+1]=l[n*3+1]*.5+a/s*.5,t[n*3+2]=l[n*3+2]*.5+o/s*.5}for(let e=0;e<l.length;e++)l[e]=t[e]}}let x=new Map;for(let e of o)for(let n=0;n<4;n++){let r=t[e+n],i=t[e+(n+1)%4];if(y.get(b(r,i))===1)for(let[e,t]of[[r,i],[i,r]]){let n=x.get(e);n?n.push(t):x.set(e,[t])}}let S=new Map;for(let e of x.keys()){let t=c.get(e);S.set(e,[l[t*3],l[t*3+1],l[t*3+2]])}for(let e=0;e<24;e++){let e=new Map;for(let[t,n]of x){let r=S.get(t);if(n.length!==2){e.set(t,r);continue}let i=S.get(n[0]),a=S.get(n[1]);e.set(t,[r[0]*.5+(i[0]+a[0])*.25,r[1]*.5+(i[1]+a[1])*.25,r[2]*.5+(i[2]+a[2])*.25])}for(let[t,n]of e)S.set(t,n)}let C=new Map;for(let[e,t]of S){let n=c.get(e);C.set(e,[t[0]-l[n*3],t[1]-l[n*3+1],t[2]-l[n*3+2]]),l[n*3]=t[0],l[n*3+1]=t[1],l[n*3+2]=t[2]}let w=new Map,T=e=>{let t=w.get(e);if(t===void 0){t=l.length/3,w.set(e,t),u.push(e);let n=Math.min(p(e)*.15,.01),r=C.get(e)??[0,0,0];l.push(f[e*3]+d[e*3]*n+r[0],f[e*3+1]+d[e*3+1]*n+r[1],f[e*3+2]+d[e*3+2]*n+r[2])}return t};for(let n of o)for(let r=0;r<4;r++){let i=t[n+r],a=t[n+(r+1)%4];if(y.get(b(i,a))!==1)continue;let[o,c]=Pe(e,i,s),[l,u]=Pe(e,a,s);g.push(4),_.push(m(a),m(i),T(i),T(a)),v.push(h.add(l,u),h.add(o,c),h.add(o,c+.02),h.add(l,u+.02))}return{mesh:{positions:Float32Array.from(l),faceSizes:Uint8Array.from(g),faceVerts:Uint32Array.from(_),faceUVs:Uint32Array.from(v),uvs:Float32Array.from(h.data),ref:Int32Array.from(u)},covered:a}}var V={add:(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],sub:(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],scale:(e,t)=>[e[0]*t,e[1]*t,e[2]*t],madd:(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],dot:(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],cross:(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],len:e=>Math.hypot(e[0],e[1],e[2]),norm:e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},lerp:(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]};function Le(e){let t=V.norm(e.normal),n=e.ref??[0,0,1];Math.abs(V.dot(n,t))>.95&&(n=[1,0,0]);let r=V.norm(V.sub(n,V.scale(t,V.dot(n,t))));return{n:t,u:r,w:V.cross(t,r)}}function Re(e){let t=[...e].sort((e,t)=>e[0]-t[0]||e[1]-t[1]);if(t.length<3)return t;let n=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),r=[],i=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}for(let e=t.length-1;e>=0;e--){let r=t[e];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}return r.slice(0,-1).concat(i.slice(0,-1))}function ze(e,t,n){let{n:r,u:i,w:a}=Le(t),o=[];for(let s of e){let e=V.sub(s,t.origin);Math.abs(V.dot(e,r))<=n.slab&&o.push([V.dot(e,i),V.dot(e,a)])}if(o.length<3)return null;let s=Re(o),c=0,l=0;for(let e of s)c+=e[0]/s.length,l+=e[1]/s.length;n.centreShift&&(c+=n.centreShift[0],l+=n.centreShift[1]);let u=[],[d,f]=n.arc??[-Math.PI,Math.PI],p=n.arc?n.samples+1:n.samples;for(let e=0;e<p;e++){let r=d+(f-d)*e/n.samples,o=Math.cos(r),p=Math.sin(r),m=0;for(let e=0;e<s.length;e++){let[t,n]=s[e],[r,i]=s[(e+1)%s.length],a=r-t,u=i-n,d=o*u-p*a;if(Math.abs(d)<1e-12)continue;let f=((t-c)*u-(n-l)*a)/d,h=((t-c)*p-(n-l)*o)/d;f>0&&h>=-1e-6&&h<=1+1e-6&&(m=Math.max(m,f))}m+=typeof n.offset==`number`?n.offset:n.offset(r);let h=c+o*m,g=l+p*m;u.push(V.add(V.add(t.origin,V.scale(i,h)),V.scale(a,g)))}return u}function Be(e,t){let n=e.length,r=e[0].length,i=[];for(let t of e)for(let e of t)i.push(...e);let a=new je,o=[],s=[],c=[],l=t.uRepeats??Math.max(1,Math.round((e=>{let n=0;for(let r=0;r<e.length-+!t.closedAround;r++)n+=V.len(V.sub(e[(r+1)%e.length],e[r]));return n})(e[0])*.1/(t.tileU??.25))),u=[0];for(let r=1;r<n;r++)u.push(u[r-1]+V.len(V.sub(e[r][0],e[r-1][0]))*.1/(t.tileV??.25));t.closedAcross&&u.push(u[n-1]+V.len(V.sub(e[0][0],e[n-1][0]))*.1/(t.tileV??.25));let d=t.closedAround?r:r-1,f=t.closedAcross?n:n-1;for(let e=0;e<f;e++){let t=(e+1)%n;for(let n=0;n<d;n++){let i=(n+1)%r,f=n/d*l,p=(n+1)/d*l;o.push(4),s.push(e*r+n,e*r+i,t*r+i,t*r+n),c.push(a.add(f,u[e]),a.add(p,u[e]),a.add(p,u[e+1]),a.add(f,u[e+1]))}}return{positions:Float32Array.from(i),faceSizes:Uint8Array.from(o),faceVerts:Uint32Array.from(s),faceUVs:Uint32Array.from(c),uvs:Float32Array.from(a.data)}}function Ve(e,t){let n=0,r=e.positions;for(let i=0,a=0;i<e.faceSizes.length;i++){let o=e.faceSizes[i],s=e.faceVerts[a]*3,c=e.faceVerts[a+1]*3,l=e.faceVerts[a+2]*3,u=[r[c]-r[s],r[c+1]-r[s+1],r[c+2]-r[s+2]],d=[r[l]-r[s],r[l+1]-r[s+1],r[l+2]-r[s+2]];n+=V.dot(V.cross(u,d),[r[s]-t[0],r[s+1]-t[1],r[s+2]-t[2]]),a+=o}if(n>=0)return e;let i=new Uint32Array(e.faceVerts.length),a=new Uint32Array(e.faceUVs.length);for(let t=0,n=0;t<e.faceSizes.length;t++){let r=e.faceSizes[t];for(let t=0;t<r;t++)i[n+t]=e.faceVerts[n+r-1-t],a[n+t]=e.faceUVs[n+r-1-t];n+=r}return{...e,faceVerts:i,faceUVs:a}}function H(e){let t=e.filter(e=>!!e&&e.faceSizes.length>0);if(!t.length)return null;let n=[],r=[],i=[],a=[],o=[],s=[];for(let e of t){let t=n.length/3,c=r.length/2;for(let t=0;t<e.positions.length/3;t++)s.push(e.ref?e.ref[t]:-1);for(let t of e.positions)n.push(t);for(let t of e.uvs)r.push(t);for(let t of e.faceSizes)i.push(t);for(let n of e.faceVerts)a.push(n+t);for(let t of e.faceUVs)o.push(t+c)}return{positions:Float32Array.from(n),faceSizes:Uint8Array.from(i),faceVerts:Uint32Array.from(a),faceUVs:Uint32Array.from(o),uvs:Float32Array.from(r),ref:s.some(e=>e>=0)?Int32Array.from(s):void 0}}function He(e,t,n,r,i,a){let o=V.norm(t.normal),s=a.steps??2,c=(r,i)=>ze(e,{...t,origin:V.madd(t.origin,o,(r-.5)*n)},{slab:a.slab??Math.max(n/s,.12),samples:a.samples,offset:i,arc:a.arc}),l=[],u=[];for(let e=0;e<=s;e++){let t=e/s,n=c(t,i+r),a=c(t,i);if(!n||!a)return null;l.push(n),u.push(a)}return Ve(Be([...l,...u.reverse()],{closedAround:!a.arc,closedAcross:!0,tileU:a.tileU,uRepeats:a.uRepeats,tileV:.05}),t.origin)}function Ue(e,t){let n=new Float32Array(e.length);for(let r=0;r<e.length;r+=3){let[i,a,o]=[e[r],e[r+1],e[r+2]];for(let e=0;e<3;e++)n[r+e]=t.o[e]+t.x[e]*i+t.y[e]*a+t.z[e]*o}return n}function We(e,t,n){let r=V.norm(t),i=V.norm(V.cross(n,r));return{o:e,x:i,y:V.cross(r,i),z:r}}function Ge(e,t,n,r=8,i=5){let a=[];for(let e=0;e<=i;e++){let n=e/i*Math.PI;for(let e=0;e<r;e++){let i=e/r*Math.PI*2;a.push(Math.sin(n)*Math.cos(i)*t[0],Math.cos(n)*t[1],Math.sin(n)*Math.sin(i)*t[2])}}let o=[],s=[];for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=(t+1)%r;o.push(4),s.push(e*r+t,(e+1)*r+t,(e+1)*r+n,e*r+n)}return{positions:Ue(a,e),faceSizes:Uint8Array.from(o),faceVerts:Uint32Array.from(s),faceUVs:new Uint32Array(s.length),uvs:Float32Array.from(n)}}function Ke(e,t,n=1){let r=1+.3*n,i=[-1,1],a=[];for(let e of i)for(let n of i)for(let o of i)a.push(e*t[0]*r,n*t[1]*r,o*t[2]*r);let o=(e,t,n)=>e*4+t*2+n,s=[[o(0,0,1),o(1,0,1),o(1,1,1),o(0,1,1)],[o(1,0,0),o(0,0,0),o(0,1,0),o(1,1,0)],[o(1,0,1),o(1,0,0),o(1,1,0),o(1,1,1)],[o(0,0,0),o(0,0,1),o(0,1,1),o(0,1,0)],[o(0,1,1),o(1,1,1),o(1,1,0),o(0,1,0)],[o(0,0,0),o(1,0,0),o(1,0,1),o(0,0,1)]],c={positions:Float32Array.from(a),faceSizes:new Uint8Array(6).fill(4),faceVerts:Uint32Array.from(s.flat()),faceUVs:Uint32Array.from(s.flatMap(()=>[0,1,2,3])),uvs:Float32Array.from([0,0,1,0,1,1,0,1])};for(let e=0;e<n;e++)c=Ee(c);return{...c,positions:Ue([...c.positions],e)}}function qe(e,t,n,r,i,a=1,o=3){let s=[],c=[],l=[],u=[],d=[];for(let l=0;l<=o;l++){let u=l/o,d=V.madd(e,t,r*u),f=i/2*(1-(1-a)*u);s.push(...V.madd(d,n,-f),...V.madd(d,n,f)),c.push(0,u,1,u)}for(let e=0;e<o;e++)l.push(4),u.push(e*2,e*2+1,e*2+3,e*2+2),d.push(e*2,e*2+1,e*2+3,e*2+2);return{positions:Float32Array.from(s),faceSizes:Uint8Array.from(l),faceVerts:Uint32Array.from(u),faceUVs:Uint32Array.from(d),uvs:Float32Array.from(c)}}function Je(e,t,n){let r=[],i=e.length,a=n?i:i-1,o=0;for(let t=0;t<a;t++)r.push(V.len(V.sub(e[(t+1)%i],e[t]))),o+=r[t];let s=Math.max(1,Math.floor(o/t)),c=[],l=0,u=0;for(let t=0;t<s;t++){let n=o/s*t;for(;l<a-1&&u+r[l]<n;)u+=r[l++];let d=r[l]>0?(n-u)/r[l]:0,f=e[l],p=e[(l+1)%i];c.push({p:V.lerp(f,p,d),tangent:V.norm(V.sub(p,f)),i:t})}return c}function Ye(e,t,n,r=5){let i=[],a=e.length;for(let o=0;o<a;o++){let s=e[n?(o-1+a)%a:Math.max(0,o-1)],c=e[n?(o+1)%a:Math.min(a-1,o+1)],l=V.norm(V.sub(c,s)),u=V.norm(V.cross(l,Math.abs(l[1])<.9?[0,1,0]:[1,0,0])),d=V.cross(l,u),f=[];for(let n=0;n<r;n++){let i=n/r*Math.PI*2;f.push(V.add(e[o],V.add(V.scale(u,Math.cos(i)*t),V.scale(d,Math.sin(i)*t))))}i.push(f)}return n&&i.push(i[0]),Be(i,{closedAround:!0,uRepeats:1,tileV:.05})}var Xe=[`none`,`rifle`,`pistol`,`sword`,`knife`],Ze={none:`None`,rifle:`Assault rifle`,pistol:`Pistol`,sword:`Sword`,knife:`Combat knife`},Qe=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function $e(e){let t=4294967295;for(let n of e)t=Qe[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function et(e,t,n,r){let i=r?4:3,a=new Uint8Array((e*i+1)*t);for(let o=0;o<t;o++){let t=o*(e*i+1)+1;if(r)a.set(n.subarray(o*e*4,(o+1)*e*4),t);else for(let r=0;r<e;r++)for(let i=0;i<3;i++)a[t+r*3+i]=n[(o*e+r)*4+i]}return a}function tt(e,t,n,r){let i=(e,t)=>{let n=new Uint8Array(12+t.length),r=new DataView(n.buffer);r.setUint32(0,t.length);for(let t=0;t<4;t++)n[4+t]=e.charCodeAt(t);return n.set(t,8),r.setUint32(8+t.length,$e(n.subarray(4,8+t.length))),n},a=new Uint8Array(13),o=new DataView(a.buffer);o.setUint32(0,e),o.setUint32(4,t),a[8]=8,a[9]=n?6:2;let s=[new Uint8Array([137,80,78,71,13,10,26,10]),i(`IHDR`,a),i(`IDAT`,r),i(`IEND`,new Uint8Array)],c=new Uint8Array(s.reduce((e,t)=>e+t.length,0)),l=0;for(let e of s)c.set(e,l),l+=e.length;return c}function nt(e,t,n,r,i=6){return tt(e,t,r,he(et(e,t,n,r),{level:i}))}function rt(e,t,n){let r=e*374761393+t*668265263+n*2147483647|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}var it=new Map;function at(e,t){let n=e*100003+t,r=it.get(n);if(!r){r=new Float32Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++)r[n*e+i]=rt(i,n,t);it.set(n,r)}return r}function ot(e,t,n,r){let i=at(n,r),a=e*n,o=t*n,s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c;l=l*l*(3-2*l),u=u*u*(3-2*u);let d=(s%n+n)%n,f=(c%n+n)%n,p=(d+1)%n,m=(f+1)%n,h=i[f*n+d]+(i[f*n+p]-i[f*n+d])*l;return h+(i[m*n+d]+(i[m*n+p]-i[m*n+d])*l-h)*u}function st(e,t,n,r,i=4){let a=0,o=.5,s=0;for(let c=0;c<i;c++)a+=ot(e,t,n<<c,r+c*17)*o,s+=o,o*=.5;return a/s}var ct=e=>{let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]},lt=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],ut=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],dt=e=>e-Math.floor(e);function ft(e,t,n,r=0){let i=new Uint8Array(e*e*4),a=r?new Float32Array(e*e):null;for(let n=0;n<e;n++)for(let r=0;r<e;r++){let o=t((r+.5)/e,(n+.5)/e),s=(n*e+r)*4;i[s]=Math.max(0,Math.min(255,o.c[0])),i[s+1]=Math.max(0,Math.min(255,o.c[1])),i[s+2]=Math.max(0,Math.min(255,o.c[2])),i[s+3]=Math.round(Math.max(0,Math.min(1,o.a??1))*255),a&&(a[n*e+r]=o.h??0)}let o;if(a){let t=new Uint8Array(e*e*4),n=(t,n)=>a[(n+e)%e*e+(t+e)%e];for(let i=0;i<e;i++)for(let a=0;a<e;a++){let o=(n(a+1,i)-n(a-1,i))*r,s=(n(a,i+1)-n(a,i-1))*r,c=Math.hypot(o,s,1),l=(i*e+a)*4;t[l]=(-o/c*.5+.5)*255,t[l+1]=(s/c*.5+.5)*255,t[l+2]=(1/c*.5+.5)*255,t[l+3]=255}o=nt(e,e,t,!1)}return{color:nt(e,e,i,n),normal:o,alpha:n}}var pt=(e,t,n=96)=>{let r=Math.sin(e*Math.PI*2*n),i=Math.sin(t*Math.PI*2*n);return(r*.5+.5)*(dt(t*n)<.5?1:.6)+(i*.5+.5)*(dt(e*n)<.5?.6:1)},mt=[`solid`,`khaki`,`camo`,`kente`,`asooke`,`ankara`,`adire`,`adire_panel`,`shuka`,`leather`,`hide`,`leopard`,`techwear`,`tattered`],ht=512;function gt(e,t,n,r=1){let i=ct(t),a=ct(n);switch(e){case`solid`:case`khaki`:return ft(ht,(t,n)=>{let a=st(t,n,8,r),o=pt(t,n,e===`khaki`?128:96);return{c:ut(i,.88+.16*a+.04*o),h:o*.6+a}},!1,2.5);case`camo`:{let e=[i,a,lt(i,[40,34,24],.55),lt(a,[200,190,150],.35)];return ft(ht,(t,n)=>{let i=st(t,n,4,r,3),a=st(t+.37,n+.11,5,r+9,3),o=i>.58?2:a>.57?3:+(i<.42),s=pt(t,n,128);return{c:ut(e[o],.92+.08*s),h:s}},!1,2)}case`kente`:{let e=[222,170,40],t=i,n=a,r=[25,22,20];return ft(ht,(i,a)=>{let o=Math.floor(i*8),s=dt(i*8),c=Math.floor(a*8),l=dt(a*8),u;if(s<.06||s>.94)u=r;else if((o+c)%2==0){let i=Math.floor(s*9);u=[e,t,e,n,e,r,e,t,e][i]}else{let i=(o*3+c)%3;u=i===0?(Math.floor(s*6)+Math.floor(l*6))%2?e:n:i===1?Math.abs(dt(l*3+Math.abs(s-.5))-.5)<.18?r:e:l<.25||l>.75?t:Math.floor(l*12)%2?e:r}let d=pt(i,a,160);return{c:ut(u,.85+.15*d),h:d}},!1,3)}case`asooke`:{let e=[210,190,140];return ft(ht,(t,n)=>{let r=dt(t*10),o=dt(t*120)<.18,s=r<.03||r>.97?ut(i,.55):o?a:i;Math.floor(n*24)%6==0&&dt(t*40)<.5&&(s=e);let c=pt(t,n,140);return{c:ut(s,.82+.18*c),h:c*1.2}},!1,3)}case`ankara`:{let e=lt(i,[250,240,220],.75),t=[20,20,30];return ft(ht,(n,o)=>{let s=Math.floor(o*4),c=dt(n*4+s%2*.5),l=dt(o*4),u=Math.hypot(c-.5,l-.5),d=i;if(u<.42){let n=Math.floor(u*14);d=[a,e,t,a,e,i][n%6]}else Math.hypot(dt(c*2)-.5,dt(l*2)-.5)<.12&&(d=e);let f=st(n,o,32,r,2)>.62?.85:1;return{c:ut(d,f),h:pt(n,o,128)*.5}},!1,1.5)}case`shuka`:{let e=lt(a,[10,10,30],.3);return ft(ht,(t,n)=>{let r=e=>{let t=dt(e*3);return t<.08?1:t>.2&&t<.24?.6:t>.5&&t<.53?.4:0},a=r(t),o=r(n),s=i;(a||o)&&(s=lt(i,e,Math.min(1,(a+o)*.7)));let c=pt(t,n,110);return{c:ut(s,.86+.14*c),h:c}},!1,2.5)}case`leather`:return ft(ht,(e,t)=>{let n=st(e,t,64,r,3),a=st(e,t,6,r+5,3),o=dt(t*8)<.012&&dt(e*40)<.5||dt(e*4)<.006&&dt(t*40)<.5;return{c:ut(i,(.72+.45*a)*(.92+.12*n)*(o?.6:1)),h:n*.8+a*.5+(o?-.6:0)}},!1,2.5);case`hide`:{let e=[236,226,206];return ft(ht,(t,n)=>{let o=st(t,n,4,r,4),s=st(t*3,n*.6,48,r+3,2);return{c:ut(o>.56?lt(i,a,st(t,n,8,r+1,2)):e,.85+.25*s),h:s}},!1,1.5)}case`leopard`:{let e=[214,160,74],t=[40,28,18];return ft(ht,(n,i)=>{let a=9,o=9,s=Math.floor(n*7),c=Math.floor(i*7);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let l=s+t,u=c+e,d=(l%7+7)%7,f=(u%7+7)%7,p=(l+.2+.6*rt(d,f,r))/7,m=(u+.2+.6*rt(d,f,r+1))/7,h=Math.hypot(n-p,i-m)*7;h<a?[o,a]=[a,h]:h<o&&(o=h)}let l=a>.18&&a<.32,u=st(n*2,i*.5,64,r+2,2);return{c:ut(l?t:a<.18?lt(e,[160,100,40],.6):e,.85+.25*u),h:u}},!1,1.2)}case`fur`:return ft(256,(e,t)=>{let n=ot(e,.5,64,r),a=.65+.35*ot(e,.2,32,r+4),o=t<a?1-(t/a)**6:0;return{c:ut(i,.75+.35*n),a:o*(.55+.6*n)}},!0);case`techwear`:return ft(ht,(e,t)=>{let n=dt(e*3)<.008||dt(t*2.5)<.008,a=st(e,t,16,r,3),o=pt(e,t,200);return{c:ut(i,(.9+.15*a)*(n?.55:1)),h:o*.4+(n?-1:0)}},!1,2.5);case`molle`:return ft(ht,(e,t)=>{let n=dt(t*10),r=n>.15&&n<.45,a=r&&dt(e*12)<.08,o=pt(e,t,150);return{c:ut(i,(r?.82:1)*(a?.7:1)*(.9+.1*o)),h:+!!r+o*.3}},!1,2);case`tattered`:{let e=[70,55,40];return ft(ht,(t,n)=>{let a=st(t,n,6,r,4),o=st(t,n,10,r+7,3),s=pt(t,n,96);return{c:lt(ut(i,.85+.2*s),e,Math.max(0,a-.45)*1.6),a:o>.68?0:1,h:s+a}},!0,2.5)}case`adire`:case`adire_panel`:{let t=lt(a,i,.25),n=ut(i,.5),o=(e,t)=>{let n=st(e,t,3,r+11,3),i=st(e+.31,t+.17,3,r+23,3);return st(e+.6*(n-.5),t+.6*(i-.5),5,r+5,3)*16},s=1/ht;return ft(ht,(r,a)=>{let c=o(r,a),l=Math.hypot(o(r+s,a)-c,o(r,a+s)-c)/s||1,u=Math.abs(dt(c)-.5)/l,d=.0032,f=u<d?lt(t,[235,245,255],Math.max(0,1-u/d)*.35):u<d*2?n:i,p=u<d?1:u<d*2?-.3:0;if(e===`adire_panel`){let e=Math.min(r,1-r,1-a);e<.05&&(f=e<.012||e>.04?ut(i,.35):dt((r+a)*40)<.3?lt(t,[200,200,200],.4):ut(i,.5),p=e<.012?-.5:.4)}let m=pt(r,a,140);return{c:ut(f,.9+.1*m),h:p+m*.3}},!1,2.5)}case`beadbands`:{let e=[[230,30,30],[245,245,240],[30,80,200],[250,170,20],[30,140,60],[245,245,240],[20,20,20]];return ft(256,(t,n)=>{let r=Math.floor(n*14),i=dt(t*64),a=dt(n*14),o=Math.hypot(i-.5,(a-.5)*1.6),s=e[r%e.length];return{c:ut(s,o<.45?1.05-o*.6:.5),h:1-o}},!1,2)}}}function _t(e){let t=e.length,n=new Uint8Array(t*4*4*4);for(let r=0;r<4;r++)for(let i=0;i<t*4;i++){let a=ct(e[Math.floor(i/4)]);n.set([a[0],a[1],a[2],255],(r*t*4+i)*4)}return{color:nt(t*4,4,n,!1),alpha:!1}}function vt(e,t){let n=ct(e),r=ct(t);return ft(128,(e,t)=>{let i=(e-.5)*2,a=Math.sin(Math.min(1,t*1.05)*Math.PI)*.95*(t<.15?t/.15:1),o=Math.abs(i)<a,s=Math.abs(i)<.04,c=.8+.2*Math.sin((t*60+Math.abs(i)*18)*Math.PI);return{c:s?[235,230,220]:ut(t>.7?r:n,c),a:o||s?1:0}},!0)}var yt=[{id:`buzz`,name:`Buzz cut`},{id:`mohawk`,name:`Punk mohawk`},{id:`cornrows`,name:`Cornrows`},{id:`box_braids`,name:`Box braids`}],bt=e=>yt.some(t=>t.id===e),xt=[`none`,`stubble`,`mustache`,`goatee`,`short_beard`,`full_beard`],St={none:`Clean shaven`,stubble:`Stubble`,mustache:`Mustache`,goatee:`Goatee`,short_beard:`Short beard`,full_beard:`Full beard`};De([0,.5,.85,1.1,1.25,1.45,1.7,2,2.4,Math.PI],[8.02,7.98,7.82,7.5,7.22,7.4,7.42,7.15,6.86,6.72]),De([0,.15,.25,.4,.55,.68,.76],[6.88,6.87,6.84,6.86,6.95,7.15,7.3]);var Ct=[`none`,`studs`,`small_hoops`,`big_hoops`],wt={none:`None`,studs:`Studs`,small_hoops:`Small hoops`,big_hoops:`Big hoops`},Tt=[`armband_l`,`sleeve_r`,`forearm_l`,`chest`,`back`,`face_marks`],Et={armband_l:`Tribal armband (left arm)`,sleeve_r:`Full sleeve (right arm)`,forearm_l:`Forearm bands (left)`,chest:`Chest piece`,back:`Back piece`,face_marks:`Face marks (Yoruba-style cheek lines)`};function Dt(e,t,n=0){let r=[e[0],...e,e[e.length-1]],i=[],a=e.length-1;for(let e=0;e<a;e++)for(let o=0;o<8+ +(e===a-1);o++){let s=o/8,[c,l,u,d]=[r[e],r[e+1],r[e+2],r[e+3]],f=e=>.5*(2*l[e]+(-c[e]+u[e])*s+(2*c[e]-5*l[e]+4*u[e]-d[e])*s*s+(-c[e]+3*l[e]-3*u[e]+d[e])*s*s*s),p=(e+s)/a,m=(t+(n-t)*p)*Math.min(1,.55+p*3);i.push([f(0),f(1),m])}let o=Math.max(t,n),s=i.map(e=>e[0]),c=i.map(e=>e[1]);return{pts:i,box:[Math.min(...s)-o,Math.min(...c)-o,Math.max(...s)+o,Math.max(...c)+o]}}Dt([[.12,4.95],[.45,5.1],[.85,5.12],[1.2,4.98],[1.38,4.72]],.1),Dt([[.22,4.78],[.55,4.84],[.9,4.74],[1.12,4.52]],.08),Dt([[.5,5.06],[.58,5.2],[.56,5.3]],.06),Dt([[.12,4.95],[.14,4.76],[.26,4.62]],.07),Dt([[.08,5.42],[.5,5.58],[1,5.48],[1.36,5.18]],.11),Dt([[.08,5.02],[.55,5.16],[1,4.98],[1.24,4.6]],.1),Dt([[.08,4.62],[.45,4.66],[.78,4.42],[.88,4.1]],.09),Dt([[0,5.7],[0,4.7],[0,3.8]],.05),[6.96,6.9,6.84].map(e=>Dt([[.36,e],[.44,e-.012],[.52,e-.028]],.014,.01)),[{name:`eyeBlinkLeft`,units:[[`eye-left-closure`,1]]},{name:`eyeBlinkRight`,units:[[`eye-right-closure`,1]]},{name:`eyeWideLeft`,units:[[`eye-left-opened-up`,1]]},{name:`eyeWideRight`,units:[[`eye-right-opened-up`,1]]},{name:`eyeSquintLeft`,units:[[`eye-left-slit`,1]]},{name:`eyeSquintRight`,units:[[`eye-right-slit`,1]]},{name:`browDownLeft`,units:[[`eyebrows-left-down`,1]]},{name:`browDownRight`,units:[[`eyebrows-right-down`,1]]},{name:`browInnerUp`,units:[[`eyebrows-left-inner-up`,1],[`eyebrows-right-inner-up`,1]]},{name:`browOuterUpLeft`,units:[[`eyebrows-left-extern-up`,1]]},{name:`browOuterUpRight`,units:[[`eyebrows-right-extern-up`,1]]},{name:`jawOpen`,units:[[`mouth-open`,1]]},{name:`mouthSmile`,units:[[`mouth-corner-puller`,1]]},{name:`mouthFrown`,units:[[`mouth-depression`,1]]},{name:`mouthPucker`,units:[[`mouth-pursing`,1]]},{name:`mouthPress`,units:[[`mouth-compression`,1]]},{name:`mouthStretch`,units:[[`mouth-retraction`,1]]},{name:`noseSneerLeft`,units:[[`nose-left-elevation`,1]]},{name:`noseSneerRight`,units:[[`nose-right-elevation`,1]]},{name:`mouthUpperUp`,units:[[`mouth-part-later`,1]]}].map(e=>e.name);var Ot=[`neutral`,`happy`,`laughing`,`angry`,`sad`,`crying`,`surprised`,`afraid`,`determined`],kt={neutral:`Neutral`,happy:`Happy`,laughing:`Laughing`,angry:`Angry`,sad:`Sad`,crying:`Crying`,surprised:`Surprised`,afraid:`Afraid`,determined:`Determined`},At=[`low`,`medium`,`high`],jt={name:`character`,seed:1,gender:1,age:.5,muscle:.6,weight:.5,height:.5,proportions:.7,african:.1,asian:.1,caucasian:.8,breastSize:.5,breastFirmness:.5,intimateType:`auto`,intimateSize:1,intimateForm:.5,intimateTint:`#ffffff`,pubicHair:!0,pubicHairAmount:.55,pubicHairLength:1,pubicHairColor:`#34251f`,modifiers:{},skin:`auto`,skinTint:`#ffffff`,eyes:`brownlight`,eyebrows:`eyebrow001`,eyelashes:`eyelashes01`,hair:`short02`,hairTint:`#ffffff`,hairColor:`#2a1e16`,facialHair:`none`,beardColor:`#241a13`,tattoos:[],tattooInk:`#1c2128`,earrings:`none`,earringMetal:`gold`,outfit:`male_casualsuit01`,top:`none`,bottom:`none`,underwear:!0,accessories:[],garmentStyles:{},shoes:`shoes01`,hat:`none`,outfitTint:`#ffffff`,detail:`medium`,rig:`game`,faceBones:!0,restPose:`A`,animations:!0,weapon:`none`,expression:`neutral`,faceShapes:!0,teeth:`teeth_base`,tongue:!0};function Mt(e){return e<.1875?1+e/.1875*10:e<.5?11+(e-.1875)/.3125*14:25+(e-.5)/.5*65}function Nt(e){return e<11?(e-1)/10*.1875:e<25?.1875+(e-11)/14*.3125:.5+(e-25)/65*.5}var Pt={"Athletic man":{},"Athletic woman":{gender:0,muscle:.6,weight:.45,height:.55,african:.15,asian:.15,caucasian:.7,breastSize:.55,hair:`ponytail01`,outfit:`female_sportsuit01`,shoes:`shoes03`,eyebrows:`eyebrow010`,eyelashes:`eyelashes02`,eyes:`green`},Businesswoman:{gender:0,age:.6,muscle:.45,weight:.5,height:.6,hair:`bob02`,outfit:`female_elegantsuit01`,shoes:`shoes02`,eyebrows:`eyebrow011`,eyelashes:`eyelashes03`,african:.8,asian:.1,caucasian:.1},"Heavy brute":{gender:1,age:.62,muscle:.95,weight:.85,height:.72,proportions:.4,african:.85,asian:.05,caucasian:.1,hair:`none`,outfit:`male_worksuit01`,shoes:`shoes04`,eyebrows:`eyebrow003`,facialHair:`full_beard`,beardColor:`#16110d`,modifiers:{"head/head-fat":.4,"chin/chin-width":.5,"neck/neck-scale-horiz":.5,"chin/chin-prominent":.4}},Elder:{gender:1,age:.95,muscle:.35,weight:.55,height:.4,hair:`short04`,outfit:`male_elegantsuit01`,shoes:`shoes02`,hat:`fedora01`,eyebrows:`eyebrow006`,african:.1,asian:.1,caucasian:.8,facialHair:`mustache`,beardColor:`#b9b2a8`},Teen:{gender:.1,age:.42,muscle:.45,weight:.4,height:.5,hair:`long01`,outfit:`female_casualsuit02`,shoes:`shoes03`,eyes:`lightblue`,african:.05,asian:.75,caucasian:.2},"The Adventurer":{gender:0,age:.52,muscle:.65,weight:.38,height:.58,proportions:.85,breastSize:.55,african:.05,asian:.05,caucasian:.9,hair:`braid01`,eyes:`brownlight`,eyebrows:`eyebrow010`,eyelashes:`eyelashes02`,outfit:`none`,top:`tank_top`,bottom:`cargo_shorts`,shoes:`combat_boots`,accessories:[`utility_belt`],garmentStyles:{tank_top:{pattern:`solid`,color:`#3b6f73`},cargo_shorts:{pattern:`khaki`,color:`#8f7a55`}}},"The Secret Agent":{gender:1,age:.6,muscle:.62,weight:.45,height:.5,proportions:.9,african:.05,asian:.05,caucasian:.9,hair:`short04`,eyes:`lightblue`,eyebrows:`eyebrow007`,outfit:`male_elegantsuit01`,shoes:`shoes02`,accessories:[`watch`]},"The Soldier":{gender:1,age:.55,muscle:.8,weight:.55,height:.5,african:.3,asian:.1,caucasian:.6,hair:`buzz`,facialHair:`stubble`,eyebrows:`eyebrow003`,outfit:`none`,top:`fatigue_shirt`,bottom:`fatigue_pants`,shoes:`combat_boots`,accessories:[`tactical_vest`,`helmet`,`belt`]},"The Cyberpunk Hacker":{gender:.15,age:.45,muscle:.45,weight:.35,height:.5,african:.05,asian:.85,caucasian:.1,hair:`bob02`,hairTint:`#d080ff`,eyes:`ice`,eyebrows:`eyebrow012`,eyelashes:`eyelashes03`,outfit:`none`,top:`techwear_jacket`,bottom:`techwear_pants`,shoes:`combat_boots`,accessories:[`visor`,`neon_accents`],earrings:`studs`,earringMetal:`silver`},"The Wasteland Survivor":{gender:.9,age:.62,muscle:.75,weight:.4,height:.5,proportions:.45,african:.15,asian:.1,caucasian:.75,hair:`mohawk`,facialHair:`short_beard`,tattoos:[`sleeve_r`],earrings:`small_hoops`,earringMetal:`silver`,eyebrows:`eyebrow005`,outfit:`none`,top:`tattered_shirt`,bottom:`tattered_pants`,shoes:`combat_boots`,accessories:[`leather_armor`,`goggles`,`arm_wraps`,`belt`,`crossed_straps`],modifiers:{"chin/chin-prominent":.3,"head/head-square":.3}},"The African Warrior":{gender:1,age:.55,muscle:1,weight:.55,height:.55,proportions:1,african:1,asian:0,caucasian:0,hair:`none`,eyebrows:`eyebrow003`,outfit:`none`,top:`none`,bottom:`loincloth`,underwear:!1,shoes:`none`,accessories:[],garmentStyles:{loincloth:{pattern:`adire`,color:`#13234f`,color2:`#3b9cff`}},modifiers:{"torso/torso-vshape":.15,"torso/torso-muscle-dorsi":.2,"torso/torso-muscle-pectoral":.45,"neck/neck-scale-horiz":.3,"armslegs/upperarm-muscle":.9,"armslegs/lowerarm-muscle":.8,"armslegs/upperarm-scale-horiz":.35,"armslegs/upperarm-scale-depth":.35,"armslegs/lowerarm-scale-horiz":.2,"armslegs/upperleg-muscle":.9,"armslegs/lowerleg-muscle":.85,"armslegs/upperleg-scale-depth":.1,"armslegs/lowerleg-scale-horiz":.15,"hip/hip-scale-horiz":-.35}},"The Yoruba Warrior":{gender:1,age:.55,muscle:.75,weight:.5,height:.48,african:1,asian:0,caucasian:0,hair:`none`,eyebrows:`eyebrow003`,outfit:`none`,top:`long_tunic`,bottom:`trousers`,shoes:`sandals`,tattoos:[`face_marks`],facialHair:`short_beard`,beardColor:`#120e0b`,tattooInk:`#1a1210`,accessories:[`crossed_straps`,`cowrie_necklace`,`cowrie_armbands`,`amulets`,`fila_cap`],garmentStyles:{long_tunic:{pattern:`asooke`,color:`#4b1d3f`,color2:`#d9b25f`},trousers:{pattern:`asooke`,color:`#4b1d3f`,color2:`#d9b25f`},fila_cap:{pattern:`asooke`,color:`#4b1d3f`,color2:`#d9b25f`}}},"The Maasai Warrior":{gender:1,age:.45,muscle:.6,weight:.3,height:.6,proportions:.8,african:1,asian:0,caucasian:0,hair:`none`,eyebrows:`eyebrow001`,outfit:`none`,top:`none`,bottom:`wrapper_knee`,shoes:`sandals`,accessories:[`shoulder_drape`,`bead_collar`,`bead_armbands`,`bead_headband`],garmentStyles:{wrapper_knee:{pattern:`shuka`,color:`#c81e1e`,color2:`#1a2a6a`},shoulder_drape:{pattern:`shuka`,color:`#c81e1e`,color2:`#1a2a6a`}}},"The Zulu Warrior":{gender:1,age:.5,muscle:.9,weight:.5,height:.5,african:1,asian:0,caucasian:0,hair:`none`,eyebrows:`eyebrow003`,outfit:`none`,top:`none`,bottom:`hide_aprons`,shoes:`none`,accessories:[`fur_bands`,`feather_headband`,`bead_necklace`],garmentStyles:{hide_aprons:{pattern:`hide`,color:`#5a3a22`,color2:`#1a1410`},feather_headband:{pattern:`leopard`}}},"The Dahomey Warrior":{gender:0,age:.5,muscle:.8,weight:.42,height:.5,proportions:.85,breastSize:.45,african:1,asian:0,caucasian:0,hair:`cornrows`,hairColor:`#17120f`,earrings:`small_hoops`,eyes:`brown`,eyebrows:`eyebrow011`,eyelashes:`eyelashes02`,outfit:`none`,top:`tunic`,bottom:`wrapper_knee`,shoes:`sandals`,accessories:[`waist_sash`,`amulet_bandolier`,`arm_guards`,`amulets`],garmentStyles:{tunic:{pattern:`asooke`,color:`#1f2f5c`,color2:`#c9a24a`},wrapper_knee:{pattern:`kente`,color:`#1d6b3a`,color2:`#a61b1b`},waist_sash:{pattern:`solid`,color:`#9b1c1c`}}},"The Police Officer (Nigeria)":{gender:1,age:.56,muscle:.62,weight:.55,height:.52,african:1,asian:0,caucasian:0,hair:`buzz`,facialHair:`stubble`,eyebrows:`eyebrow003`,outfit:`none`,top:`uniform_shirt`,bottom:`uniform_trousers`,shoes:`combat_boots`,accessories:[`beret`,`utility_belt`],garmentStyles:{uniform_shirt:{pattern:`solid`,color:`#141519`,color2:`#24262c`},uniform_shirt_long:{pattern:`solid`,color:`#141519`,color2:`#24262c`},uniform_trousers:{pattern:`solid`,color:`#141519`},beret:{pattern:`solid`,color:`#141519`,color2:`#c9ccd2`},utility_belt:{pattern:`leather`,color:`#111111`}}},"The FRSC Officer (Nigeria)":{gender:1,age:.52,muscle:.55,weight:.5,height:.55,african:1,asian:0,caucasian:0,hair:`buzz`,eyebrows:`eyebrow001`,outfit:`none`,top:`uniform_shirt`,bottom:`uniform_trousers`,shoes:`combat_boots`,accessories:[`beret`,`belt`],garmentStyles:{uniform_shirt:{pattern:`solid`,color:`#c9b48c`,color2:`#6a1b2a`},uniform_shirt_long:{pattern:`solid`,color:`#c9b48c`,color2:`#6a1b2a`},uniform_trousers:{pattern:`solid`,color:`#141519`},beret:{pattern:`solid`,color:`#6a1b2a`,color2:`#d4a845`},belt:{pattern:`leather`,color:`#111111`},reflective_vest:{pattern:`solid`,color:`#c6e82a`,color2:`#d9dee4`}}},Detective:{gender:.95,age:.65,muscle:.55,weight:.5,height:.55,african:.2,asian:.6,caucasian:.2,hair:`short01`,outfit:`male_casualsuit05`,hat:`fedora_cocked`,shoes:`shoes06`,eyes:`grey`,eyebrows:`eyebrow007`,facialHair:`stubble`,beardColor:`#1a1410`}},Ft=(e,t)=>t[Math.floor(e()*t.length)];function It(e,t,n=jt){let r=Oe(e),i=(e,t)=>e+(t-e)*r(),a=e=>(r()+r()+r()-1.5)*e,o=r()<.5,s=(e,t)=>e.filter(e=>!t||e.tags.some(e=>e.toLowerCase()===t)||!e.tags.some(e=>/^(male|female)$/i.test(e))).map(e=>e.id),c=[`bob01`,`bob02`,`braid01`,`long01`,`ponytail01`,`afro01`,`short02`],l=[`short01`,`short02`,`short03`,`short04`,`afro01`,`none`,`buzz`,`cornrows`,`box_braids`],u=[`#15100c`,`#241a13`,`#3b2a1d`,`#5a3e27`,`#7a5a38`,`#a8875c`],d=[`none`,`none`,`none`,`stubble`,`stubble`,`mustache`,`goatee`,`short_beard`,`full_beard`],f=[`armband_l`,`sleeve_r`,`forearm_l`,`chest`,`back`],p=[r()**3,r()**3,r()**3];p[Math.floor(r()*3)]+=1;let m=p[0]+p[1]+p[2],h={},g=t.sliders.filter(e=>/face|head|nose|mouth|eye|ear|chin|cheek|forehead/i.test(e.category+e.group)).flatMap(e=>e.sliders);for(let e=0;e<18&&g.length;e++){let e=Ft(r,g);h[e.id]=e.bipolar?Math.max(-1,Math.min(1,a(.55))):i(0,.5)}let _=s(t.outfits,o?`female`:`male`);return{...n,seed:e,gender:o?i(0,.15):i(.85,1),age:Nt(i(18,70)),muscle:i(.3,.9),weight:i(.3,.8),height:i(.3,.8),proportions:i(.4,.9),african:p[0]/m,asian:p[1]/m,caucasian:p[2]/m,breastSize:i(.3,.8),breastFirmness:i(.3,.8),modifiers:h,skin:`auto`,skinTint:`#ffffff`,eyes:Ft(r,t.eyes).id,eyebrows:Ft(r,t.eyebrows).id,eyelashes:Ft(r,t.eyelashes).id,hair:Ft(r,o?c:l),hairTint:`#ffffff`,hairColor:Ft(r,u),facialHair:o?`none`:Ft(r,d),beardColor:Ft(r,u),tattoos:r()<.2?[Ft(r,f)]:[],earrings:r()<(o?.5:.12)?Ft(r,[`studs`,`small_hoops`,`big_hoops`]):`none`,earringMetal:r()<.6?`gold`:`silver`,outfit:_.length?Ft(r,_):`none`,shoes:Ft(r,t.shoes).id,hat:r()<.15&&t.hats.length?Ft(r,t.hats).id:`none`,outfitTint:`#ffffff`}}function Lt(e,t=jt){let n=e&&typeof e==`object`?e:{},r={...t},i=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(n,Math.max(t,e)):r,a=(e,t,n=80)=>typeof e==`string`&&e.length<=n?e:t,o=(e,t)=>typeof e==`string`&&/^#[0-9a-fA-F]{6}$/.test(e)?e:t,s=(e,t,n)=>t.includes(e)?e:n;for(let e of[`gender`,`muscle`,`weight`,`height`,`proportions`,`african`,`asian`,`caucasian`,`breastSize`,`breastFirmness`])r[e]=i(n[e],0,1,t[e]);r.age=i(n.age,Nt(12),1,t.age),r.seed=Math.round(i(n.seed,0,1e9,t.seed));for(let e of[`name`,`skin`,`eyes`,`eyebrows`,`eyelashes`,`hair`,`outfit`,`top`,`bottom`,`shoes`,`hat`])r[e]=a(n[e],t[e]);for(let e of[`skinTint`,`hairTint`,`outfitTint`,`hairColor`,`beardColor`,`tattooInk`])r[e]=o(n[e],t[e]);typeof n.underwear==`boolean`&&(r.underwear=n.underwear),typeof n.faceBones==`boolean`&&(r.faceBones=n.faceBones),typeof n.animations==`boolean`&&(r.animations=n.animations),typeof n.faceShapes==`boolean`&&(r.faceShapes=n.faceShapes),typeof n.tongue==`boolean`&&(r.tongue=n.tongue),r.teeth=a(n.teeth,t.teeth,40),r.expression=s(n.expression,Ot,t.expression),r.detail=s(n.detail,At,t.detail),r.rig=s(n.rig,[`game`,`game_lite`,`full`,`none`],t.rig),r.restPose=s(n.restPose,[`A`,`T`],t.restPose),r.weapon=s(n.weapon,Xe,t.weapon),r.facialHair=s(n.facialHair,xt,t.facialHair),r.earrings=s(n.earrings,Ct,t.earrings),r.earringMetal=s(n.earringMetal,[`gold`,`silver`],t.earringMetal),r.tattoos=Array.isArray(n.tattoos)?[...new Set(n.tattoos.filter(e=>Tt.includes(e)))]:t.tattoos,r.accessories=Array.isArray(n.accessories)?n.accessories.filter(e=>typeof e==`string`&&e.length<=40).slice(0,40):t.accessories;let c={};if(n.modifiers&&typeof n.modifiers==`object`)for(let[e,t]of Object.entries(n.modifiers).slice(0,400))e.length<=80&&(c[e]=i(t,-1,1,0));r.modifiers=c;let l={};if(n.garmentStyles&&typeof n.garmentStyles==`object`)for(let[e,t]of Object.entries(n.garmentStyles).slice(0,60)){if(e.length>40||!t||typeof t!=`object`)continue;let n=t;l[e]={...typeof n.pattern==`string`&&n.pattern.length<=30?{pattern:n.pattern}:{},...typeof n.color==`string`&&/^#[0-9a-fA-F]{6}$/.test(n.color)?{color:n.color}:{},...typeof n.color2==`string`&&/^#[0-9a-fA-F]{6}$/.test(n.color2)?{color2:n.color2}:{}}}return r.garmentStyles=l,r}var Rt=[0,1,0],zt=[0,0,1],Bt=(e,t,n)=>Math.max(t,Math.min(n,e));function Vt(e,t){return e.L.hipY+t*(e.L.neckY-e.L.hipY)}function Ht(e,t){let n=[];for(let r=0;r<e.info.length;r++)e.regions[r]!==255&&t(e.info[r],r)&&n.push(e.p(r));return n}var Ut=e=>e.region===z.torso||e.region===z.hips,Wt=e=>Ut(e)||e.region===z.neck&&e.tt<1||e.region===z.upperarm&&e.t<.08&&e.tt>.78,Gt=e=>e.region===z.upperleg||e.region===z.lowerleg;function Kt(e,t,n={}){return{name:e,color:`#ffffff`,roughness:.85,metalness:0,map:t?.map,normalMap:t?.normalMap,alpha:t?.alpha?`mask`:`opaque`,doubleSided:!1,...n}}function qt(e,t,n,r={}){let i=`${n.pattern}_${n.color}_${n.color2}`;return Kt(t,e.texture(i,()=>gt(n.pattern,n.color,n.color2)),{roughness:n.pattern===`leather`?.55:n.pattern===`techwear`?.6:.88,...r})}var Jt=(e=`#5a3a22`)=>({pattern:`leather`,color:e,color2:`#000000`}),Yt={color:`#d9a441`,roughness:.32,metalness:.9},Xt={color:`#9aa1a8`,roughness:.35,metalness:.85};function Zt(e,t){return Ie(e.body,e.faceVerts,t)}function Qt(e,t,n,r=!0){let i=Zt(e,t);return i?[{mesh:i.mesh,material:n,hides:r&&n.alpha===`opaque`?i.covered:void 0,smooth:!0}]:[]}var $t=(e,t)=>({origin:[0,t,e.L.torsoZ],normal:Rt});function en(e,t){let n=e.length,r=(Math.round((t+Math.PI)/(2*Math.PI)*n)%n+n)%n,i=[0,0,0];for(let t of e)i=V.add(i,V.scale(t,1/n));let a=e[r],o=V.norm(V.sub(e[(r+1)%n],e[(r-1+n)%n]));return{p:a,out:V.norm(V.sub(a,i)),tan:o}}function tn(e,t,n,r,i,a,o=40,s={}){let c=Ht(e,e=>Ut(e)||Gt(e)),l=Math.max(3,Math.ceil((t-n)/B(3))),u=[],d=null;for(let s=0;s<=l;s++){let f=t+(n-t)*s/l,p=ze(c,$t(e,f),{slab:B(2.5),samples:o,offset:r+i*(t-f),arc:a});if(!p)return null;if(!d){d=[0,0,0];let t=ze(c,$t(e,f),{slab:B(2.5),samples:16,offset:0});for(let e of t)d=V.add(d,V.scale(e,1/t.length))}if(u.length){let e=u[u.length-1];for(let t=0;t<p.length;t++){let n=[p[t][0]-d[0],0,p[t][2]-d[2]],r=[e[t][0]-d[0],0,e[t][2]-d[2]],i=V.len(n),a=V.len(r);i<a&&(p[t]=[d[0]+n[0]/(i||1)*a,p[t][1],d[2]+n[2]/(i||1)*a])}}u.push(p)}return Ve(Be(u,{closedAround:!a,tileU:.3,tileV:s.tileV??.3,uRepeats:s.uRepeats}),[0,(t+n)/2,e.L.torsoZ])}function nn(e,t,n,r,i,a,o,s=.1){let[c,l]=e.axis(t,n),u=V.lerp(c,l,r);return He(e.verts(t,n).map(t=>e.p(t)),{origin:u,normal:V.sub(l,c)},i,a,o,{samples:20,tileU:s,slab:B(1.5)})}function rn(e,t,n,r,i,a=24){let[o,s]=e.axis(t,n);return{ring:ze(e.verts(t,n).map(t=>e.p(t)),{origin:V.lerp(o,s,r),normal:V.sub(s,o)},{slab:B(1.2),samples:a,offset:i}),dir:V.norm(V.sub(s,o))}}function an(e,t,n=.55){let r=e.joint(`neck01____head`),i=e.joint(`upperarm01${t>0?`.L`:`.R`}____head`),a=V.add(V.lerp(r,i,n),[0,B(4),0]),o=[-t*Math.abs(i[0])*.9,Vt(e,.15),e.L.torsoZ];return{origin:V.lerp(a,o,.5),normal:V.norm(V.cross(V.sub(a,o),zt))}}var on=(e,t)=>Ht(e,e=>Ut(e)||e.region===z.upperarm&&e.side===t&&e.t<.3);function sn(e,t,n,r,i,a){let o=[];for(let{p:s,tangent:c,i:l}of Je(e,n,t)){let e=We(s,V.norm(V.sub(s,a)),c),t=l%i+.5;o.push(Ge({o:e.o,x:e.y,y:e.x,z:e.z},r,[t/i,.5],6,4))}return H(o)}var cn=[`#d62828`,`#f4f1ea`,`#1d4fbf`,`#f2a516`,`#2a8c4a`,`#f4f1ea`,`#111111`];function ln(e,t,n){let r=e.body,i=B(2.2)/(r.L.neckY-r.L.hipY),a=Qt(e,{covers:e=>Ut(e)&&e.t>.2||e.region===z.neck&&e.t<1+i||e.region===z.upperarm&&(n||e.t<.58)||n&&e.region===z.lowerarm&&e.t<.93,offset:e=>B(1)+(!n&&e.region===z.upperarm?B(1.1)*Bt(e.t/.58,0,1):0),tile:.3,relax:3},qt(e,`Uniform shirt`,t)),o=a[0]?.mesh.positions??new Float32Array,s=[];for(let e=0;e<o.length;e+=3)s.push([o[e],o[e+1],o[e+2]]);let c=[],l=e=>{let t=null;for(let n of s)Math.abs(n[0]-e)<B(1.2)&&Math.abs(n[2]-r.L.torsoZ)<B(6)&&(!t||n[1]>t[1])&&(t=n);return t};for(let e of[1,-1]){let t=l(.45*r.L.shoulderX*e),n=l(.88*r.L.shoulderX*e);if(!t||!n)continue;let i=V.norm(V.sub(n,t)),a=V.norm(V.cross(zt,i));a[1]<0&&(a=V.scale(a,-1));let o=V.add(V.scale(V.add(t,n),.5),V.scale(a,B(.3)));c.push(Ke(We(o,a,i),[B(2.2),V.len(V.sub(n,t))/2,B(.25)],.5))}return[...a,...c.length?[{mesh:H(c),material:Kt(`Epaulettes`,null,{color:t.color2,roughness:.5,metalness:.3})}]:[]]}var un=[{id:`tank_top`,label:`Tank top`,slot:`top`,patterns:[`solid`,`khaki`,`camo`,`tattered`],color:`#3f6b5a`,color2:`#2a2a2a`,build:(e,t)=>{let n=e.body.L.shoulderX;return Qt(e,{covers:e=>Wt(e)&&e.tt>=.16&&(e.tt<.74||Math.abs(e.ax-.6*n)<.2*n),offset:B(.5),tile:.2,relax:4},qt(e,`Tank top`,t))}},{id:`fatigue_shirt`,label:`Fatigue shirt`,slot:`top`,patterns:[`camo`,`solid`,`khaki`],color:`#5b6b3a`,color2:`#8a7d55`,build:(e,t)=>{let n=B(2.5)/(e.body.L.neckY-e.body.L.hipY);return Qt(e,{covers:e=>Ut(e)&&e.t>.14||e.region===z.neck&&e.t<1+n||e.region===z.upperarm||e.region===z.lowerarm&&e.t<.93,offset:B(1),tile:.3,relax:3},qt(e,`Fatigue shirt`,t))}},{id:`uniform_shirt`,label:`Uniform shirt (short sleeves)`,slot:`top`,patterns:[`solid`,`khaki`,`camo`],color:`#16181d`,color2:`#2a2c31`,build:(e,t)=>ln(e,t,!1)},{id:`uniform_shirt_long`,label:`Uniform shirt (long sleeves)`,slot:`top`,patterns:[`solid`,`khaki`,`camo`],color:`#16181d`,color2:`#2a2c31`,build:(e,t)=>ln(e,t,!0)},{id:`techwear_jacket`,label:`Techwear jacket`,slot:`top`,patterns:[`techwear`,`solid`],color:`#1b1d22`,color2:`#00e5ff`,build:(e,t)=>{let n=B(5.5)/(e.body.L.neckY-e.body.L.hipY);return Qt(e,{covers:e=>Ut(e)&&e.t>.02||e.region===z.neck&&e.t<1+n||e.region===z.upperarm||e.region===z.lowerarm&&e.t<.97,offset:e=>B(1.3)+(Ut(e)?B(.8)*Bt(.5-e.t,0,.5):0),tile:.35},qt(e,`Techwear jacket`,t))}},{id:`tattered_shirt`,label:`Tattered shirt`,slot:`top`,patterns:[`tattered`,`solid`],color:`#8a7a5c`,color2:`#000000`,build:(e,t)=>Qt(e,{covers:(e,t)=>{let n=Ae(t[0]*4,t[1]*4,t[2]*4);return Wt(e)&&e.tt>.12+.12*n&&!(e.tt>.82&&Math.abs(e.tth)<.7&&e.ax<.4)||e.region===z.upperarm&&e.t<.3+.25*n},offset:B(.9),tile:.3},qt(e,`Tattered shirt`,t),!1).map(e=>({...e,material:{...e.material,doubleSided:!0}}))},{id:`tunic`,label:`Sleeveless tunic`,slot:`top`,patterns:[`asooke`,`kente`,`ankara`,`solid`,`leather`],color:`#2c3e7a`,color2:`#d9b25f`,build:(e,t)=>{let n=e.body,r=qt(e,`Tunic`,t),i=Zt(e,{covers:e=>Wt(e)&&e.tt>=.3&&!(e.tt>.86&&e.ax<.42*n.L.shoulderX)&&!(e.tt>.76&&e.ax>.8*n.L.shoulderX),offset:B(.9),tile:.25,relax:4}),a=n.joint(`lowerleg01.L____head`)[1],o=tn(n,Vt(n,.34),n.L.hipY-(n.L.hipY-a)*.45,B(1.4),.06);return[...i?[{mesh:i.mesh,material:r,hides:i.covered,smooth:!0}]:[],...o?[{mesh:o,material:{...r,doubleSided:!0}}]:[]]}},{id:`long_tunic`,label:`Woven tunic (buba)`,slot:`top`,patterns:[`asooke`,`kente`,`ankara`,`solid`],color:`#5a1e3c`,color2:`#e0c070`,build:(e,t)=>{let n=e.body,r=qt(e,`Woven tunic`,t),i=Zt(e,{covers:e=>Wt(e)&&e.tt>=.3&&!(e.tt>.86&&e.ax<.42*n.L.shoulderX)||e.region===z.upperarm||e.region===z.lowerarm&&e.t<.12,offset:e=>e.region===z.upperarm||e.region===z.lowerarm?B(1.8):B(1.4),tile:.25,relax:5}),a=n.joint(`lowerleg01.L____head`)[1],o=tn(n,Vt(n,.34),n.L.hipY-(n.L.hipY-a)*.7,B(1.9),.08);return[...i?[{mesh:i.mesh,material:r,hides:i.covered,smooth:!0}]:[],...o?[{mesh:o,material:{...r,doubleSided:!0}}]:[]]}},{id:`briefs`,label:`Briefs`,slot:`bottom`,patterns:[`solid`],color:`#3a3a3a`,color2:`#000000`,build:(e,t)=>Qt(e,{covers:e=>Ut(e)&&e.t<.12||e.region===z.upperleg&&e.t<.1,offset:B(.3),tile:.2},qt(e,`Briefs`,t))},{id:`cargo_shorts`,label:`Cargo shorts`,slot:`bottom`,patterns:[`khaki`,`camo`,`solid`],color:`#a8916a`,color2:`#6b5a3a`,build:(e,t)=>{let n=qt(e,`Cargo shorts`,t);return[...Qt(e,{covers:e=>Ut(e)&&e.t<.24||e.region===z.upperleg&&e.t<.55,offset:e=>B(.6)+(e.region===z.upperleg?B(1)*e.t:0),tile:.25},n),...mn(e,.4,n)]}},{id:`fatigue_pants`,label:`Fatigue pants`,slot:`bottom`,patterns:[`camo`,`khaki`,`solid`],color:`#5b6b3a`,color2:`#8a7d55`,build:(e,t)=>{let n=qt(e,`Fatigue pants`,t);return[...Qt(e,{covers:e=>Ut(e)&&e.t<.26||e.region===z.upperleg||e.region===z.lowerleg&&e.t<.85,offset:B(.9),tile:.3},n),...mn(e,.55,n)]}},{id:`uniform_trousers`,label:`Uniform trousers`,slot:`bottom`,patterns:[`solid`,`khaki`,`camo`],color:`#16181d`,color2:`#c9a24a`,build:(e,t)=>Qt(e,{covers:e=>Ut(e)&&e.t<.26||e.region===z.upperleg||e.region===z.lowerleg&&e.t<.9,offset:e=>B(.8)+(e.region===z.lowerleg?B(.6)*e.t:0),tile:.3},qt(e,`Uniform trousers`,t))},{id:`techwear_pants`,label:`Techwear pants`,slot:`bottom`,patterns:[`techwear`,`solid`],color:`#202228`,color2:`#00e5ff`,build:(e,t)=>{let n=qt(e,`Techwear pants`,t),r=e.body,i=H([1,-1].flatMap(e=>[nn(r,z.upperleg,e,.5,B(2.2),B(.35),B(1.1)),nn(r,z.upperleg,e,.62,B(2.2),B(.35),B(1.1))]));return[...Qt(e,{covers:e=>Ut(e)&&e.t<.26||e.region===z.upperleg||e.region===z.lowerleg&&e.t<.95,offset:B(.8),tile:.35},n),...i?[{mesh:i,material:Kt(`Straps`,e.texture(`leather_#151515`,()=>gt(`leather`,`#151515`,`#000000`)),{roughness:.5})}]:[]]}},{id:`tattered_pants`,label:`Tattered pants`,slot:`bottom`,patterns:[`tattered`,`solid`,`khaki`],color:`#6b5d48`,color2:`#000000`,build:(e,t)=>Qt(e,{covers:(e,t)=>Ut(e)&&e.t<.24||e.region===z.upperleg||e.region===z.lowerleg&&e.t<.55+.25*Ae(t[0]*5,t[1]*5,t[2]*5),offset:e=>B(.8)+(e.region===z.lowerleg?B(.8)*e.t:0),tile:.3},{...qt(e,`Tattered pants`,t),doubleSided:!0},!1)},{id:`trousers`,label:`Loose trousers (sokoto)`,slot:`bottom`,patterns:[`asooke`,`solid`,`ankara`,`kente`],color:`#5a1e3c`,color2:`#e0c070`,build:(e,t)=>Qt(e,{covers:e=>Ut(e)&&e.t<.26||e.region===z.upperleg||e.region===z.lowerleg&&e.t<.93,offset:e=>B(1)+(e.region===z.lowerleg?B(1.2)*e.t:e.region===z.upperleg?B(.6):0),tile:.25},qt(e,`Trousers`,t))},{id:`wrapper_long`,label:`Wrapper (ankle length)`,slot:`bottom`,patterns:[`ankara`,`kente`,`asooke`,`shuka`,`solid`],color:`#e05a1a`,color2:`#1d3f8f`,build:(e,t)=>fn(e,t,`long`)},{id:`wrapper_knee`,label:`Wrapper (knee length)`,slot:`bottom`,patterns:[`shuka`,`ankara`,`kente`,`asooke`,`solid`,`hide`],color:`#c81e1e`,color2:`#1a2a6a`,build:(e,t)=>fn(e,t,`knee`)},{id:`hide_aprons`,label:`Hide aprons (isinene & ibheshu)`,slot:`bottom`,patterns:[`hide`,`leopard`,`leather`],color:`#5a3a22`,color2:`#1a1410`,build:(e,t)=>{let n=e.body,r=n.joint(`lowerleg01.L____head`)[1],i=Vt(n,.2),a={...qt(e,`Hide aprons`,t),doubleSided:!0,roughness:.8},o=tn(n,i,n.L.hipY-(n.L.hipY-r)*.5,B(1.2),.04,[-.85,.85],16),s=tn(n,i,r+B(2),B(1.2),.05,[Math.PI-1.3,Math.PI+1.3],20),c=He(Ht(n,Ut),$t(n,i+B(1)),B(3),B(.5),B(1.2),{samples:40,tileU:.1});return[...o?[{mesh:o,material:a}]:[],...s?[{mesh:s,material:a}]:[],...c?[{mesh:c,material:qt(e,`Waist cord`,Jt(`#3a2414`))}]:[],...dn(e)]}},{id:`loincloth`,label:`Loincloth (front & back panels)`,slot:`bottom`,patterns:[`adire`,`kente`,`asooke`,`ankara`,`leather`,`hide`,`solid`],color:`#13234f`,color2:`#3b9cff`,build:(e,t)=>{let n=e.body,r=n.joint(`lowerleg01.L____head`)[1],i=Ht(n,Ut),a=Kt(`Loincloth trim`,e.texture(`solid_${t.color}_dark`,()=>gt(`solid`,`#0d1426`,`#000000`)),{roughness:.7}),o=Kt(`Loincloth stripe`,null,{color:`#d2692d`,roughness:.6}),s=t.pattern===`adire`?`adire_panel`:t.pattern,c=qt(e,`Loincloth`,t),l={...qt(e,`Loincloth panels`,{...t,pattern:s}),doubleSided:!0},u=(e,t,r,a)=>He(i,$t(n,Vt(n,e)),t,r,a,{samples:56,tileU:.18}),d=H([u(.3,B(3),B(1.5),B(1.1)),u(.135,B(2.4),B(1.3),B(1.2))]),f=u(.262,B(.7),B(.35),B(2.2)),p=u(.2,B(4.6),B(.9),B(1.4)),m=Vt(n,.15),h=(n.L.hipY-r)*.62+(m-n.L.hipY),g=m-(r+B(5)),_=tn(n,m,m-B(9),B(1.5),.06,[-1.35,1.35],30,{tileV:.3}),v=tn(n,m,m-h,B(2.3),.015,[-.4,.4],8,{uRepeats:1,tileV:h*.1}),y=tn(n,m,m-g,B(2),.035,[Math.PI-1.1,Math.PI+1.1],18,{uRepeats:1,tileV:g*.1}),b=ze(i,$t(n,Vt(n,.13)),{slab:B(2),samples:64,offset:B(2.4)}),x=[];if(b)for(let e of[1.45,1.75,-1.45,-1.75]){let t=en(b,e);x.push(qe(t.p,V.norm(V.add([0,-1,0],V.scale(t.out,.08))),t.tan,B(Math.abs(e)>1.6?40:34),B(3.2),.8,6))}return[...d?[{mesh:d,material:a}]:[],...f?[{mesh:f,material:o}]:[],...p?[{mesh:p,material:c}]:[],..._?[{mesh:_,material:{...c,name:`Loincloth hip panels`,color:`#7c86a0`,doubleSided:!0}}]:[],...v?[{mesh:v,material:l}]:[],...y?[{mesh:y,material:l}]:[],...x.length?[{mesh:H(x),material:{...a,doubleSided:!0}}]:[],...dn(e)]}},{id:`belt`,label:`Leather belt`,slot:`acc`,patterns:[`leather`],color:`#4a2f1a`,color2:`#000000`,build:(e,t)=>pn(e,t,B(4),!1)},{id:`utility_belt`,label:`Utility belt`,slot:`acc`,patterns:[`leather`,`khaki`],color:`#3d2b1c`,color2:`#000000`,build:(e,t)=>pn(e,t,B(5),!0)},{id:`waist_sash`,label:`Waist sash`,slot:`acc`,patterns:[`kente`,`asooke`,`solid`,`ankara`,`shuka`],color:`#b31b1b`,color2:`#f2c14e`,build:(e,t)=>{let n=e.body,r=Vt(n,.3),i={...qt(e,`Waist sash`,t),doubleSided:!0},a=B(1.6)+(e.layered.bottom||e.layered.top?B(1.2):0),o=He(Ht(n,Ut),$t(n,r),B(9),B(.6),a,{samples:48,tileU:.2,steps:3}),s=ze(Ht(n,Ut),$t(n,r-B(2)),{slab:B(2),samples:48,offset:a+B(.7)}),c=[];if(s){let e=en(s,1.35);for(let[t,n]of[[-.6,32],[.7,26]]){let r=V.madd(e.p,e.tan,B(t*4));c.push(qe(r,V.norm(V.add([0,-1,0],V.scale(e.out,.12))),e.tan,B(n),B(8),.85,6))}}return[...o?[{mesh:o,material:i}]:[],...c.length?[{mesh:H(c),material:i}]:[]]}},{id:`shoulder_drape`,label:`Shoulder drape (shuka)`,slot:`acc`,patterns:[`shuka`,`kente`,`ankara`,`solid`],color:`#c81e1e`,color2:`#1a2a6a`,build:(e,t)=>{let n=e.body,r=an(n,1,.75),i=on(n,1),a=[],o=B(1.6)+(e.layered.top?B(1.4):0);for(let e=0;e<=5;e++){let t=ze(i,{...r,origin:V.madd(r.origin,r.normal,(e/5-.5)*B(22))},{slab:B(2),samples:56,offset:o+B(.2)*e});t&&a.push(t)}return a.length<2?[]:[{mesh:Ve(Be(a,{closedAround:!0,tileU:.3,tileV:.3}),r.origin),material:{...qt(e,`Shoulder drape`,t),doubleSided:!0}}]}},{id:`crossed_straps`,label:`Crossed leather straps`,slot:`acc`,patterns:[`leather`],color:`#3d2414`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=B(1.1)+(e.layered.top?B(1.6):0),i=qt(e,`Crossed straps`,t),a=H([1,-1].map((e,t)=>He(on(n,e),an(n,e),B(4.5),B(.45),r+t*B(.5),{samples:56,tileU:.15})));return a?[{mesh:a,material:i}]:[]}},{id:`amulet_bandolier`,label:`Amulet bandolier`,slot:`acc`,patterns:[`leather`],color:`#4a2a14`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=B(.9)+(e.layered.top?B(1.1):0),i=an(n,-1),a=on(n,-1),o=He(a,i,B(3.5),B(.4),r,{samples:56,tileU:.15}),s=ze(a,i,{slab:B(1.5),samples:72,offset:r+B(1.1)}),c=[];if(s)for(let e of[-.9,-.55,-.2,.15,.5]){let t=en(s,e);c.push(Ke(We(t.p,t.out,t.tan),[B(1.4),B(1.9),B(.6)]))}let l=qt(e,`Amulet bandolier`,t);return[...o?[{mesh:o,material:l}]:[],...c.length?[{mesh:H(c),material:qt(e,`Amulets`,Jt(`#6b4426`))}]:[]]}},{id:`leather_armor`,label:`Leather armor`,slot:`acc`,patterns:[`leather`],color:`#5a3820`,color2:`#000000`,build:(e,t)=>{let n=e.layered.top?B(2.4):B(1.2),r=qt(e,`Leather armor`,t,{roughness:.5}),i=Zt(e,{covers:t=>Wt(t)&&t.tt>=.42&&(t.tt<.76||Math.abs(t.ax-.62*e.body.L.shoulderX)<.2*e.body.L.shoulderX),offset:n,tile:.25,relax:6}),a=Zt(e,{covers:e=>e.side>0&&(e.region===z.upperarm&&e.t<.42||e.region===z.torso&&e.t>.86&&Math.abs(e.theta)>.9&&Math.abs(e.theta)<2.2),offset:n+B(1.2),tile:.2});return[...i?[{mesh:i.mesh,material:r,hides:e.layered.top?void 0:i.covered,smooth:!0}]:[],...a?[{mesh:a.mesh,material:qt(e,`Pauldron`,Jt(`#3e2614`),{roughness:.45}),smooth:!0}]:[]]}},{id:`tactical_vest`,label:`Tactical vest`,slot:`acc`,patterns:[`molle`,`camo`,`solid`],color:`#5d5a3c`,color2:`#8a7d55`,build:(e,t)=>{let n=e.body,r=qt(e,`Tactical vest`,t,{roughness:.8}),i=Zt(e,{covers:e=>Wt(e)&&e.tt>=.2&&(e.tt<.76||Math.abs(e.ax-.62*n.L.shoulderX)<.2*n.L.shoulderX),offset:B(2.4),tile:.3,relax:8}),a=[];for(let[e,t]of[[.42,[-.5,0,.5]],[.32,[-1.5,1.5]]]){let r=ze(Ht(n,Ut),$t(n,Vt(n,e)),{slab:B(2.5),samples:64,offset:B(4.2)});if(r)for(let e of t){let t=en(r,e);a.push(Ke(We(t.p,t.out,Rt),[B(4.2),B(5.5),B(1.8)]))}}return[...i?[{mesh:i.mesh,material:r,smooth:!0}]:[],...a.length?[{mesh:H(a),material:r}]:[]]}},{id:`reflective_vest`,label:`Reflective vest (hi-vis)`,slot:`acc`,patterns:[`solid`],color:`#c6e82a`,color2:`#d9dee4`,build:(e,t)=>{let n=e.body,r=Zt(e,{covers:e=>Wt(e)&&e.tt>=.22&&(e.tt<.72||Math.abs(e.ax-.62*n.L.shoulderX)<.2*n.L.shoulderX),offset:B(1.8),tile:.3,relax:8}),i=Ht(n,Ut),a=[.4,.58].map(e=>He(i,$t(n,Vt(n,e)),B(4.5),B(.15),B(1.95),{samples:72,slab:B(2)}));return[...r?[{mesh:r.mesh,material:qt(e,`Reflective vest`,t,{roughness:.7}),smooth:!0}]:[],...a.some(Boolean)?[{mesh:H(a),material:Kt(`Reflective tape`,null,{color:t.color2,roughness:.25,metalness:.55})}]:[]]}},{id:`beret`,label:`Beret`,slot:`acc`,patterns:[`solid`],color:`#16181d`,color2:`#c9a24a`,build:(e,t)=>{let n=e.body,r=Zt(e,{covers:e=>e.region===z.head&&(Math.abs(e.theta)<1.1?e.t>.76:e.t>.64),offset:e=>B(.9)+B(2.6)*Bt((e.t-.72)*4,0,1)*(1-.55*Math.sin(e.theta)),tile:.2,relax:4}),i=Ht(n,e=>e.region===z.head),a=n.L.crownY-(n.L.crownY-n.L.chinY)*.27,o=He(i,{origin:[0,a,n.L.headZ],normal:Rt},B(1.4),B(.35),B(.7),{samples:48,slab:B(1.2)}),s=ze(i,{origin:[0,a+B(2.2),n.L.headZ],normal:Rt},{slab:B(1.5),samples:48,offset:B(1.4)}),c=s?Ke(We(en(s,.35).p,en(s,.35).out,Rt),[B(1.2),B(1.5),B(.3)],.6):null;return[...r?[{mesh:r.mesh,material:qt(e,`Beret`,t,{roughness:.95}),headwear:!0,smooth:!0}]:[],...o?[{mesh:o,material:Kt(`Beret rim`,null,{color:`#0e0e0e`,roughness:.5})}]:[],...c?[{mesh:c,material:Kt(`Badge`,null,{color:t.color2,roughness:.3,metalness:.85})}]:[]]}},{id:`bead_collar`,label:`Beaded collar`,slot:`acc`,patterns:[`beadbands`],color:`#d62828`,color2:`#1d4fbf`,build:e=>{let t=e.body,n=V.norm([0,1,.5]),r=[0,t.L.neckY-B(.5),t.L.torsoZ],i=Ht(t,e=>Ut(e)||e.region===z.neck&&e.t<1.15||e.region===z.upperarm&&e.t<.15),a=[];for(let e=0;e<=7;e++){let t=ze(i,{origin:V.madd(r,n,-e*B(1.5)),normal:n},{slab:B(1.2),samples:64,offset:B(.7)+e*B(.12)});t&&a.push(t)}if(a.length<2)return[];let o=e.texture(`beadbands`,()=>gt(`beadbands`,`#000000`,`#000000`));return[{mesh:Ve(Be(a,{closedAround:!0,uRepeats:3,tileV:.105}),r),material:Kt(`Beaded collar`,o,{roughness:.3,doubleSided:!0})}]}},{id:`bead_necklace`,label:`Bead necklaces`,slot:`acc`,patterns:[`solid`],color:`#d62828`,color2:`#f2a516`,build:e=>hn(e,`beads`)},{id:`cowrie_necklace`,label:`Cowrie-shell necklace`,slot:`acc`,patterns:[`solid`],color:`#efe6d2`,color2:`#3d2414`,build:e=>hn(e,`cowrie`)},{id:`amulets`,label:`Protective charms`,slot:`acc`,patterns:[`leather`],color:`#5a3820`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=V.norm([0,1,.65]),i=V.madd([0,n.L.neckY-B(.5),n.L.torsoZ],r,-B(9)),a=Ht(n,e=>Ut(e)||e.region===z.neck&&e.t<1.1),o=B(.6)+(e.layered.top?B(1.6):0),s=ze(a,{origin:i,normal:r},{slab:B(1.2),samples:64,offset:o});if(!s)return[];let c=[];for(let e of[-.35,0,.35]){let t=en(s,e);c.push(Ke(We(V.madd(V.madd(t.p,Rt,-B(2.2)),t.out,B(.6)),t.out,Rt),[B(1.5),B(2),B(.6)]))}let l=nn(n,z.upperarm,1,.3,B(1.6),B(.35),B(.3)),u=qt(e,`Charms`,t);return[{mesh:Ye(s,B(.18),!0),material:Kt(`Cord`,null,{color:`#2a1a10`,roughness:.8})},{mesh:H([...c,l]),material:u}]}},{id:`arm_cuffs`,label:`Brass arm cuffs`,slot:`acc`,patterns:[`solid`],color:`#d9a441`,color2:`#000000`,build:e=>{let t=e.body,n=H([1,-1].flatMap(e=>[nn(t,z.upperarm,e,.36,B(3.5),B(.35),B(.25)),nn(t,z.upperarm,e,.47,B(1.2),B(.35),B(.25)),nn(t,z.lowerarm,e,.86,B(5),B(.35),B(.3))]));return n?[{mesh:n,material:Kt(`Brass`,null,Yt)}]:[]}},{id:`bead_armbands`,label:`Beaded arm bands`,slot:`acc`,patterns:[`beadbands`],color:`#d62828`,color2:`#000000`,build:e=>{let t=e.body,n=e.texture(`beadbands`,()=>gt(`beadbands`,`#000000`,`#000000`)),r=H([1,-1].flatMap(e=>[nn(t,z.upperarm,e,.38,B(3),B(.5),B(.2),.06),nn(t,z.lowerarm,e,.9,B(3.5),B(.5),B(.25),.06)]));return r?[{mesh:r,material:Kt(`Beaded bands`,n,{roughness:.3})}]:[]}},{id:`cowrie_armbands`,label:`Cowrie arm bands`,slot:`acc`,patterns:[`solid`],color:`#efe6d2`,color2:`#000000`,build:e=>{let t=e.body,n=[];for(let e of[1,-1]){let{ring:r}=rn(t,z.upperarm,e,.38,B(.6),32),i=nn(t,z.upperarm,e,.38,B(1.4),B(.3),B(.2));if(i&&n.push(i),r){let i=t.joint(`upperarm01${e>0?`.L`:`.R`}____head`),a=sn(r,!0,B(1.8),[B(.9),B(.6),B(.45)],1,V.lerp(i,t.joint(`lowerarm01${e>0?`.L`:`.R`}____head`),.38));a&&n.push(a)}}return n.length?[{mesh:H(n),material:Kt(`Cowries`,null,{color:`#efe6d2`,roughness:.25})}]:[]}},{id:`arm_guards`,label:`Leather arm guards`,slot:`acc`,patterns:[`leather`],color:`#4a2c16`,color2:`#000000`,build:(e,t)=>Qt(e,{covers:e=>e.region===z.lowerarm&&e.t>.22&&e.t<.92,offset:B(.8)+(e.layered.top?B(1):0),tile:.12},qt(e,`Arm guards`,t,{roughness:.5}))},{id:`fur_bands`,label:`Fur arm & leg bands`,slot:`acc`,patterns:[`solid`],color:`#f2efe8`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=e.texture(`fur_${t.color}`,()=>gt(`fur`,t.color,t.color)),i=[],a=[];for(let e of[1,-1])for(let[t,r,o]of[[z.upperarm,.3,14],[z.lowerleg,.14,20]]){let s=nn(n,t,e,r,B(4),B(1.2),B(.4));s&&i.push(s);let{ring:c,dir:l}=rn(n,t,e,r,B(1.2),16);if(c)for(let{p:e,tangent:t}of Je(c,B(1.6),!0))a.push(qe(e,V.norm(V.add(l,[0,-.3,0])),t,B(o),B(3.2),.6,2))}let o=Kt(`Fur`,r,{roughness:.9,doubleSided:!0});return[...i.length?[{mesh:H(i),material:Kt(`Fur bands`,e.texture(`hide_white`,()=>gt(`hide`,`#e8e2d6`,`#d8d0c0`)),{roughness:.95})}]:[],...a.length?[{mesh:H(a),material:o}]:[]]}},{id:`feather_headband`,label:`Fur headband & feathers`,slot:`acc`,patterns:[`leopard`,`hide`,`leather`],color:`#c8902f`,color2:`#1a1410`,build:(e,t)=>{let n=e.body,r=Ht(n,e=>e.region===z.head),i={origin:[0,n.L.chinY+.7*(n.L.crownY-n.L.chinY),n.L.headZ],normal:V.norm([0,1,-.3])},a=He(r,i,B(4),B(1.1),B(.5),{samples:40,tileU:.15}),o=ze(r,i,{slab:B(1.2),samples:40,offset:B(2)}),s=[];if(o)for(let e of[1.25,-1.25,2.6]){let t=en(o,e),n=V.norm(V.add(V.add(Rt,V.scale(t.out,.35)),[0,0,-.55]));s.push(qe(V.madd(t.p,Rt,-B(1)),n,t.tan,B(17),B(7),.45,4))}return[...a?[{mesh:a,material:qt(e,`Headband`,t,{roughness:.9})}]:[],...s.length?[{mesh:H(s),material:Kt(`Feathers`,e.texture(`feather`,()=>vt(`#f4f1ea`,`#111111`)),{roughness:.8,doubleSided:!0})}]:[]]}},{id:`bead_headband`,label:`Beaded headband`,slot:`acc`,patterns:[`beadbands`],color:`#d62828`,color2:`#000000`,build:e=>{let t=e.body,n=He(Ht(t,e=>e.region===z.head),{origin:[0,t.L.chinY+.78*(t.L.crownY-t.L.chinY),t.L.headZ],normal:V.norm([0,1,-.15])},B(2.4),B(.5),B(.6),{samples:40,uRepeats:2});return n?[{mesh:n,material:Kt(`Beaded headband`,e.texture(`beadbands`,()=>gt(`beadbands`,`#000000`,`#000000`)),{roughness:.3})}]:[]}},{id:`fila_cap`,label:`Fila cap`,slot:`acc`,patterns:[`asooke`,`kente`,`ankara`,`solid`],color:`#5a1e3c`,color2:`#e0c070`,build:(e,t)=>{let n=Zt(e,{covers:e=>e.region===z.head&&(Math.abs(e.theta)<1.1?e.t>.74:e.t>.62),offset:e=>B(1.3)+B(3)*Bt((e.t-.8)*5,0,1)*(e.theta>0?1.2:.8),tile:.2});return n?[{mesh:n.mesh,material:qt(e,`Fila cap`,t),headwear:!0,smooth:!0}]:[]}},{id:`helmet`,label:`Combat helmet`,slot:`acc`,patterns:[`camo`,`solid`,`molle`],color:`#59603a`,color2:`#7d7a55`,build:(e,t)=>{let n=e.body,r=Zt(e,{covers:e=>e.region===z.head&&(Math.abs(e.theta)<1.2?e.t>.7:e.t>.5),offset:B(2.6),tile:.2}),i=He(Ht(n,e=>e.region===z.head),{origin:[0,(n.L.chinY+n.L.crownY)/2,n.L.headZ-B(1)],normal:zt},B(1.4),B(.25),B(.3),{samples:40,slab:B(1)});return[...r?[{mesh:r.mesh,material:qt(e,`Helmet`,t,{roughness:.75}),headwear:!0,smooth:!0}]:[],...i?[{mesh:i,material:Kt(`Chin strap`,null,{color:`#1e1e1a`,roughness:.7})}]:[]]}},{id:`visor`,label:`Holo visor`,slot:`acc`,patterns:[`solid`],color:`#00e5ff`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=Ht(n,e=>e.region===z.head),i=n.L.chinY+.56*(n.L.crownY-n.L.chinY),a=He(r,{origin:[0,i,n.L.headZ],normal:Rt},B(4.2),B(.25),B(1.8),{samples:28,arc:[-1.35,1.35],slab:B(2)}),o=He(r,{origin:[0,i+B(2.4),n.L.headZ],normal:Rt},B(.8),B(.5),B(1.9),{samples:36,slab:B(1.5)});return[...a?[{mesh:a,material:Kt(`Visor`,null,{color:t.color,emissive:t.color,roughness:.1,alpha:`blend`,opacity:.55,doubleSided:!0})}]:[],...o?[{mesh:o,material:Kt(`Visor frame`,null,{color:`#15171c`,roughness:.3,metalness:.6})}]:[]]}},{id:`neon_accents`,label:`Neon accents`,slot:`acc`,patterns:[`solid`],color:`#ff2bd6`,color2:`#00e5ff`,build:(e,t)=>{let n=e.body,r=e.layered.top?B(1.6):B(.3),i=H([1,-1].flatMap(e=>[nn(n,z.lowerarm,e,.88,B(.8),B(.3),r),nn(n,z.upperarm,e,.5,B(.8),B(.3),r)])),a=He(Ht(n,e=>Ut(e)||e.region===z.neck),{origin:[0,n.L.neckY+B(1),n.L.torsoZ],normal:V.norm([0,1,.35])},B(.8),B(.3),r+B(.6),{samples:40,slab:B(1.2)}),o=He(on(n,-1),an(n,-1,.4),B(.8),B(.3),r+B(.2),{samples:40,arc:[-1.2,1.2]});return[...i||a?[{mesh:H([i,a]),material:Kt(`Neon A`,null,{color:t.color,emissive:t.color,roughness:.3})}]:[],...o?[{mesh:o,material:Kt(`Neon B`,null,{color:t.color2,emissive:t.color2,roughness:.3})}]:[]]}},{id:`goggles`,label:`Goggles (on forehead)`,slot:`acc`,patterns:[`leather`],color:`#2e2116`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=Ht(n,e=>e.region===z.head),i={origin:[0,n.L.chinY+.8*(n.L.crownY-n.L.chinY),n.L.headZ],normal:V.norm([0,1,-.25])},a=He(r,i,B(2.4),B(.4),B(.9),{samples:40,tileU:.1}),o=ze(r,i,{slab:B(1.2),samples:64,offset:B(1.8)}),s=[],c=[];if(o)for(let e of[-.36,.36]){let t=en(o,e),n=V.norm(V.add(t.out,[0,.35,0]));s.push(Ke(We(t.p,n,Rt),[B(2.1),B(1.9),B(.9)])),c.push(Ge(We(V.madd(t.p,n,B(1)),n,Rt),[B(1.8),B(1.6),B(.4)],[.5,.5]))}return[...a?[{mesh:a,material:qt(e,`Goggle strap`,t)}]:[],...s.length?[{mesh:H(s),material:Kt(`Goggle frame`,null,{color:`#6b5a3a`,roughness:.4,metalness:.7})}]:[],...c.length?[{mesh:H(c),material:Kt(`Goggle lens`,null,{color:`#d98a2b`,roughness:.05,metalness:.2})}]:[]]}},{id:`arm_wraps`,label:`Cloth arm wraps`,slot:`acc`,patterns:[`tattered`,`solid`,`khaki`],color:`#b3a68a`,color2:`#000000`,build:(e,t)=>{let n=e.body,r=[];for(let e of[1,-1]){let[t,i]=n.axis(z.lowerarm,e),a=V.norm(V.sub(i,t)),o=V.norm(V.add(a,V.scale(zt,.3))),s=n.verts(z.lowerarm,e).map(e=>n.p(e)).concat(n.verts(z.hand,e).map(e=>n.p(e)));for(let e=0;e<6;e++){let n=He(s,{origin:V.lerp(t,i,.4+e*.11),normal:o},B(3),B(.25),B(.4)+e*B(.02),{samples:18,slab:B(1.2)});n&&r.push(n)}}return r.length?[{mesh:H(r),material:{...qt(e,`Arm wraps`,t),doubleSided:!0}}]:[]}},{id:`watch`,label:`Wrist watch`,slot:`acc`,patterns:[`solid`],color:`#1a1a1a`,color2:`#000000`,build:e=>{let t=e.body,n=nn(t,z.lowerarm,1,.95,B(1.8),B(.25),B(.15)),{ring:r}=rn(t,z.lowerarm,1,.95,B(.6),24);if(!r)return[];let i=r[0];for(let e of r)e[1]>i[1]&&(i=e);let[a,o]=t.axis(z.lowerarm,1),s=V.norm(V.sub(i,V.lerp(a,o,.95))),c=Ke(We(i,s,V.sub(o,a)),[B(1.7),B(1.7),B(.45)]);return[...n?[{mesh:n,material:Kt(`Watch strap`,null,{color:`#1a1a1a`,roughness:.5})}]:[],{mesh:c,material:Kt(`Watch`,null,Xt)}]}}];function dn(e){return e.underwear?un.find(e=>e.id===`briefs`).build(e,{pattern:`solid`,color:`#4a3424`,color2:`#000000`}):[]}function fn(e,t,n){let r=e.body,i=r.joint(`lowerleg01.L____head`)[1],a=r.joint(`foot.L____head`)[1],o=Vt(r,.34),s=n===`long`?a+(i-a)*.18:i-B(4),c=B(1.6)+(e.layered.bottom?B(1):0),l={...qt(e,`Wrapper`,t),doubleSided:!0},u=tn(r,o,s,c,.03),d=tn(r,o,s,c+B(.35),.03,[.1,1.15],14),f=He(Ht(r,Ut),$t(r,o-B(1.5)),B(4),B(1),c+B(.4),{samples:48,tileU:.3});return[...u?[{mesh:u,material:l}]:[],...d?[{mesh:d,material:l}]:[],...f?[{mesh:f,material:l}]:[],...dn(e)]}function pn(e,t,n,r){let i=e.body,a=Vt(i,.2),o=B(1.2)+(e.layered.bottom?B(.6):0),s=Ht(i,Ut),c=He(s,$t(i,a),n,B(.5),o,{samples:48,tileU:.1}),l=ze(s,$t(i,a),{slab:B(2),samples:64,offset:o+B(.5)}),u=c?[{mesh:c,material:qt(e,r?`Utility belt`:`Belt`,t,{roughness:.5})}]:[];if(l){let n=en(l,0);if(u.push({mesh:Ke(We(n.p,n.out,Rt),[B(2.6),B(2),B(.35)]),material:Kt(`Buckle`,null,Xt)}),r){let n=[-1,-1.7,1,1.7,Math.PI].map(e=>{let t=en(l,e);return Ke(We(V.madd(V.madd(t.p,t.out,B(1.2)),Rt,-B(1.5)),t.out,Rt),[B(3.2),B(4.2),B(1.6)])});u.push({mesh:H(n),material:qt(e,`Pouches`,t,{roughness:.6})})}}return u}function mn(e,t,n){let r=e.body,i=[];for(let e of[1,-1]){let{ring:n}=rn(r,z.upperleg,e,t,B(1.6),32);if(!n)continue;let a=n[0];for(let e of n)Math.abs(e[0])>Math.abs(a[0])&&(a=e);let[o,s]=r.axis(z.upperleg,e),c=V.norm([a[0]-V.lerp(o,s,t)[0],0,.15]);i.push(Ke(We(a,c,V.sub(o,s)),[B(5.5),B(7),B(1.4)]))}return i.length?[{mesh:H(i),material:n}]:[]}function hn(e,t){let n=e.body,r=V.norm([0,1,t===`beads`?.55:.7]),i=[0,n.L.neckY-B(.5),n.L.torsoZ],a=Ht(n,e=>Ut(e)||e.region===z.neck&&e.t<1.1||e.region===z.upperarm&&e.t<.1),o=B(.6)+(e.layered.top?B(1.6):0),s=[0,n.L.neckY-B(10),n.L.torsoZ],c=[],l=t===`beads`?[11,13.5,16]:[8.5];for(let e of l){let n=ze(a,{origin:V.madd(i,r,-B(e)),normal:r},{slab:B(1.2),samples:72,offset:o});if(!n)continue;let l=t===`beads`?sn(n,!0,B(.95),[B(.45),B(.45),B(.45)],cn.length,s):sn(n,!0,B(1.7),[B(.95),B(.62),B(.5)],1,s);l&&c.push(l)}let u=H(c);return u?t===`beads`?[{mesh:u,material:Kt(`Beads`,e.texture(`palette_maasai`,()=>_t(cn)),{roughness:.25})}]:[{mesh:u,material:Kt(`Cowries`,null,{color:`#efe6d2`,roughness:.25})}]:[]}var gn=new Map(un.map(e=>[e.id,e])),_n={game:`Game rig — Mixamo-compatible (65 bones + weapon socket)`,game_lite:`Game rig lite (25 bones + weapon socket, no fingers)`,full:`Full MakeHuman rig (163 bones + weapon socket, face)`,none:`No rig (static mesh)`},vn=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]];function yn(e,t){return[e[0]*t[0]+e[3]*t[1]+e[6]*t[2],e[1]*t[0]+e[4]*t[1]+e[7]*t[2],e[2]*t[0]+e[5]*t[1]+e[8]*t[2]]}function bn(e,t){let n=n=>yn(e,[t[n*3],t[n*3+1],t[n*3+2]]);return[...n(0),...n(1),...n(2)]}var xn=e=>[e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]];function Sn(e){let[t,n,r,i,a,o,s,c,l]=e,u=t+a+l,d;if(u>0){let e=Math.sqrt(u+1)*2;d=[(o-c)/e,(s-r)/e,(n-i)/e,.25*e]}else if(t>a&&t>l){let e=Math.sqrt(1+t-a-l)*2;d=[.25*e,(i+n)/e,(s+r)/e,(o-c)/e]}else if(a>l){let e=Math.sqrt(1+a-t-l)*2;d=[(i+n)/e,.25*e,(c+o)/e,(s-r)/e]}else{let e=Math.sqrt(1+l-t-a)*2;d=[(s+r)/e,(c+o)/e,.25*e,(n-i)/e]}let f=Math.hypot(...d);return d.map(e=>e/f)}function Cn(e,t){let n=e[t];if(n.parent<0)return{t:n.head,R:n.rot};let r=e[n.parent],i=xn(r.rot);return{t:yn(i,vn(n.head,r.head)),R:bn(i,n.rot)}}function wn(e,t){if(e!==`full`)return t;let n=t.startsWith(`Left`)?`.L`:t.startsWith(`Right`)?`.R`:``,r=t.replace(/^(Left|Right)/,``),i={Hips:`root`,Spine:`spine04`,Spine1:`spine03`,Spine2:`spine02`,Neck:`neck01`,Head:`head`,Shoulder:`clavicle`,Arm:`upperarm01`,ForeArm:`lowerarm01`,Hand:`wrist`,UpLeg:`upperleg01`,Leg:`lowerleg01`,Foot:`foot`,Eye:`eye`,Jaw:`jaw`},a=/^Hand(Thumb|Index|Middle|Ring|Pinky)(\d)$/.exec(r);return a?`finger${[`Thumb`,`Index`,`Middle`,`Ring`,`Pinky`].indexOf(a[1])+1}-${a[2]}${n}`:i[r]?i[r]+n:void 0}function Tn(e){let t=e.length;return n=>{let r=(n%1+1)%1*t,i=Math.floor(r),a=r-i,o=n=>e[((i+n)%t+t)%t],s=o(-1),c=o(0),l=o(1),u=o(2);return .5*(2*c+(-s+l)*a+(2*s-5*c+4*l-u)*a*a+(-s+3*c-3*l+u)*a*a*a)}}function En(e,t){return n=>{if(n<=e[0])return t[0];let r=e.length;if(n>=e[r-1])return t[r-1];let i=0;for(;n>e[i+1];)i++;let a=(n-e[i])/(e[i+1]-e[i]),o=a*a*(3-2*a);return t[i]+(t[i+1]-t[i])*o}}var Dn=e=>{let t=Math.max(0,Math.min(1,e));return t*t*t*(t*(t*6-15)+10)};function U(e,t,n,r){e[`Left${t}`]=n,e[`Right${t}`]=[r[0],-r[1],-r[2]]}function On(e,t=12){for(let n of[`Index`,`Middle`,`Ring`,`Pinky`])for(let r=1;r<=3;r++)U(e,`Hand${n}${r}`,[t*(r===1?.8:1.1),0,0],[t*(r===1?.8:1.1),0,0]);U(e,`HandThumb2`,[8,0,0],[8,0,0])}function kn(e,t=[`Left`,`Right`]){for(let n of t){for(let t of[`Index`,`Middle`,`Ring`,`Pinky`])e[`${n}Hand${t}1`]=[80,0,0],e[`${n}Hand${t}2`]=[100,0,0],e[`${n}Hand${t}3`]=[65,0,0];e[`${n}HandThumb2`]=[15,0,0],e[`${n}HandThumb3`]=[25,0,0]}}var An={Left:1,Right:1};function jn(e,t,n=!1,r=1){for(let i of[`Index`,`Middle`,`Ring`,`Pinky`]){let a=n&&i===`Index`;e[`${t}Hand${i}1`]=[(a?20:60)*r,0,0],e[`${t}Hand${i}2`]=[(a?25:80)*r,0,0],e[`${t}Hand${i}3`]=[(a?15:50)*r,0,0]}e[`${t}HandThumb2`]=[30*r,0,0],e[`${t}HandThumb3`]=[20*r,0,0]}var W=(e,t,n)=>[e,t,n],Mn=(e,t,n)=>W(e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n),Nn=(e,t)=>W(e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]),Pn=e=>{let t=Math.hypot(...e)||1;return W(e[0]/t,e[1]/t,e[2]/t)},Fn={thigh:[25,18,6,-8,-18,-8,12,24],knee:[-5,-15,-8,-5,-22,-58,-40,-10],foot:[15,0,0,-6,-20,-10,5,10],arm:[-18,-10,0,10,18,10,0,-10],elbow:[10,11,14,20,25,20,14,11],bob:[0,-.018,-.004,.012,0,-.018,-.004,.012],pelvisYaw:5,spineLean:3,armOut:2,legIn:5},In={thigh:[30,12,-10,-25,-5,35,55,42],knee:[-20,-42,-25,-18,-85,-110,-72,-35],foot:[10,0,-12,-30,-20,0,15,15],arm:[-32,-18,4,22,28,18,-4,-26],elbow:[72,74,80,86,88,84,78,74],bob:[0,-.04,-.015,.035,0,-.04,-.015,.035],pelvisYaw:9,spineLean:11,armOut:6,legIn:4};function Ln(e,t,n=!1){let r=n?1-t:t,i=e=>Tn(e),a=i(e.thigh),o=i(e.knee),s=i(e.foot),c=i(e.arm),l=i(e.elbow),u=i(e.bob),d={},f=r,p=r+.5;U(d,`UpLeg`,[a(f),0,-e.legIn],[a(p),0,-e.legIn]),U(d,`Leg`,[o(f),0,0],[o(p),0,0]),U(d,`Foot`,[s(f),0,e.legIn*.8],[s(p),0,e.legIn*.8]),U(d,`Arm`,[c(f),0,e.armOut],[c(p),0,e.armOut]),U(d,`ForeArm`,[l(f),0,0],[l(p),0,0]);let m=Math.sin(r*Math.PI*2)*e.pelvisYaw;return d.Hips=[0,-m,Math.sin(r*Math.PI*2+Math.PI/2)*2],d.Spine=[e.spineLean*.4*(n?-1:1),m*.6,0],d.Spine1=[e.spineLean*.4*(n?-1:1),m*.6,0],d.Spine2=[e.spineLean*.2,m*.2,0],d.Head=[-e.spineLean*.6,-m*.3,0],On(d,e===In?25:12),{bones:d,root:e===In?{y:u(r)}:{ground:!0}}}function Rn(e,t,n){let r=Math.max(1,Math.round(Math.abs(n)/45)),i=.55+Math.abs(n)/180*.85,a=n>0?`Left`:`Right`,o=n>0?`Right`:`Left`;return{id:e,name:t,category:`Turns`,duration:i,loop:!1,sample:e=>{let t=e/i,s=Dn((t-.05)/.85),c=Math.sin(Math.min(1,t/.6)*Math.PI),l={Spine1:[2,n*.06*c,0],Spine2:[0,n*.05*c,0],Head:[0,Math.max(-25,Math.min(25,n*.18*c)),0]},u=0,d={Left:0,Right:0};for(let e=0;e<r;e++){let n=.05+e/r*.85,i=.05+(e+1)/r*.85;if(t>n&&t<i){let r=Math.sin((t-n)/(i-n)*Math.PI);d[e%2==0?a:o]=r,u=-.012*r}}return U(l,`UpLeg`,[24*d.Left,0,0],[24*d.Right,0,0]),U(l,`Leg`,[-45*d.Left-4,0,0],[-45*d.Right-4,0,0]),U(l,`Foot`,[12*d.Left,0,0],[12*d.Right,0,0]),U(l,`Arm`,[6*d.Right,0,4],[6*d.Left,0,4]),U(l,`ForeArm`,[14,0,0],[14,0,0]),On(l,14),{bones:l,root:{yaw:n*s,y:u,ground:!0}}}}}function zn(e){let t=e?`Left`:`Right`,n=e?`Right`:`Left`;return{id:e?`strafe_left`:`strafe_right`,name:e?`Strafe left`:`Strafe right`,category:`Locomotion`,duration:.9,loop:!0,travel:[e?1.1:-1.1,0,0],sample:r=>{let i=r/.9,a={},o={[t]:{out:Tn([0,10,16,12,8,6,3,0])(i),thigh:Tn([0,10,8,0,0,0,0,0])(i),knee:Tn([-4,-28,-20,-6,-4,-4,-4,-4])(i)},[n]:{out:Tn([0,-2,-4,-5,-7,-2,3,2])(i),thigh:Tn([0,0,0,0,6,12,6,0])(i),knee:Tn([-4,-4,-4,-4,-8,-28,-20,-6])(i)}};return U(a,`UpLeg`,[o.Left.thigh,0,o.Left.out],[o.Right.thigh,0,o.Right.out]),U(a,`Leg`,[o.Left.knee,0,0],[o.Right.knee,0,0]),U(a,`Foot`,[-o.Left.knee*.3,0,-o.Left.out*.5],[-o.Right.knee*.3,0,-o.Right.out*.5]),U(a,`Arm`,[8,0,6],[8,0,6]),U(a,`ForeArm`,[25,0,0],[25,0,0]),a.Spine=[4,0,(e?-1:1)*2*Math.sin(i*Math.PI*2)],a.Head=[-2,0,0],On(a,14),{bones:a,root:{ground:!0}}}}}var Bn={id:`idle`,name:`Idle`,category:`Idle & stance`,duration:3.2,loop:!0,sample:e=>{let t=e/3.2*Math.PI*2,n={Spine:[1.2*Math.sin(t),0,0],Spine2:[1.5*Math.sin(t+.7),0,0],Hips:[0,0,1.5*Math.sin(t*.5)],Neck:[0,0,-.8*Math.sin(t*.5)],Head:[2*Math.sin(t+1),7*Math.sin(t*.5),0]};return U(n,`Arm`,[2*Math.sin(t),0,3+Math.sin(t)],[2*Math.sin(t+.4),0,3+Math.sin(t+.4)]),U(n,`ForeArm`,[12+2*Math.sin(t),0,0],[12+2*Math.sin(t+.4),0,0]),U(n,`Leg`,[-3,0,0],[-3,0,0]),U(n,`UpLeg`,[0,0,-3],[0,0,-3]),On(n,14),{bones:n,root:{x:.008*Math.sin(t*.5),y:.002*Math.sin(t),ground:!0}}}},Vn={id:`walk`,name:`Walk`,category:`Locomotion`,duration:1.1,loop:!0,travel:[0,0,1.35],sample:e=>Ln(Fn,e/1.1)},Hn={id:`run`,name:`Run`,category:`Locomotion`,duration:.72,loop:!0,travel:[0,0,3.6],sample:e=>Ln(In,e/.72)},Un={id:`walk_back`,name:`Walk backwards`,category:`Locomotion`,duration:1.25,loop:!0,travel:[0,0,-1],sample:e=>Ln({...Fn,arm:Fn.arm.map(e=>e*.6),spineLean:-4},e/1.25,!0)},Wn={id:`crouch`,name:`Crouch idle`,category:`Idle & stance`,duration:3,loop:!0,sample:e=>{let t=e/3*Math.PI*2,n={Spine:[20+Math.sin(t),0,0],Spine1:[8,0,0],Neck:[-10,0,0],Head:[-14,6*Math.sin(t*.5),0]};return U(n,`UpLeg`,[78,0,8],[78,0,8]),U(n,`Leg`,[-118,0,0],[-118,0,0]),U(n,`Foot`,[36,0,0],[36,0,0]),U(n,`Arm`,[32+Math.sin(t),0,8],[32+Math.sin(t+.5),0,8]),U(n,`ForeArm`,[55,0,0],[55,0,0]),On(n,20),{bones:n,root:{ground:!0}}}},Gn={id:`fall`,name:`Fall`,category:`Actions`,duration:1.9,loop:!1,sample:e=>{let t=[0,.25,.6,.85,1,1.9],n=n=>En(t,n)(e),r={Spine:[n([0,-5,-10,-4,-2,0]),0,0],Spine1:[n([0,-3,-8,-3,-1,0]),0,0],Neck:[n([0,8,18,10,4,-4]),0,0],Head:[n([0,5,12,6,0,-6]),n([0,0,0,10,12,15]),0]};return U(r,`UpLeg`,[n([0,25,45,22,14,8]),0,n([0,2,6,8,8,8])],[n([0,22,40,26,18,12]),0,n([0,2,5,10,10,10])]),U(r,`Leg`,[n([0,-45,-60,-25,-15,-10]),0,0],[n([0,-40,-55,-30,-22,-18]),0,0]),U(r,`Foot`,[n([0,10,5,-10,-15,-20]),0,0],[n([0,10,5,-10,-15,-18]),0,0]),U(r,`Arm`,[n([0,40,60,25,0,-8]),0,n([0,15,55,45,30,22])],[n([0,35,55,20,0,-6]),0,n([0,15,60,50,32,25])]),U(r,`ForeArm`,[n([0,20,35,20,10,6]),0,0],[n([0,20,30,22,12,8]),0,0]),On(r,n([12,20,30,20,18,18])),{bones:r,root:{drop:n([0,.15,.55,1,.96,1]),pitch:n([0,-5,-50,-88,-84,-88]),z:n([0,-.05,-.25,-.45,-.46,-.46]),floor:!0}}}},Kn={id:`jump`,name:`Jump`,category:`Actions`,duration:1.3,loop:!1,sample:e=>{let t=[0,.25,.4,.55,.75,.95,1.1,1.3],n=n=>En(t,n)(e),r={Spine:[n([0,22,-5,8,10,6,24,0]),0,0],Spine1:[n([0,8,-4,4,4,2,8,0]),0,0],Head:[n([0,-14,4,-4,-6,-2,-14,0]),0,0]};return U(r,`UpLeg`,[n([0,55,-5,40,35,20,58,0]),0,4],[n([0,55,-5,40,35,20,58,0]),0,4]),U(r,`Leg`,[n([-3,-85,0,-60,-50,-20,-88,-3]),0,0],[n([-3,-85,0,-60,-50,-20,-88,-3]),0,0]),U(r,`Foot`,[n([0,28,-35,-10,-10,0,30,0]),0,0],[n([0,28,-35,-10,-10,0,30,0]),0,0]),U(r,`Arm`,[n([0,-40,130,90,70,30,35,0]),0,n([4,8,10,20,20,10,8,4])],[n([0,-40,130,90,70,30,35,0]),0,n([4,8,10,20,20,10,8,4])]),U(r,`ForeArm`,[n([12,15,10,30,30,20,30,12]),0,0],[n([12,15,10,30,30,20,30,12]),0,0]),On(r,16),{bones:r,root:{ground:!0,lift:n([0,0,.06,.38,.3,0,0,0])}}}};function qn(e,t=0){e.Spine=[6+2*t,0,0],e.Spine1=[2,0,0],e.Head=[-4-2*t,0,0],U(e,`UpLeg`,[32+6*t,0,5],[26-4*t,0,5]),U(e,`Leg`,[-52-8*t,0,0],[-40+6*t,0,0]),U(e,`Foot`,[-14,0,0],[-10,0,0]),U(e,`Arm`,[70+10*t,0,22+6*t],[64-8*t,0,24-4*t]),U(e,`ForeArm`,[32,0,0],[28,0,0]),On(e,14)}var Jn={id:`jump_start`,name:`Jump start`,category:`Actions`,duration:.45,loop:!1,sample:e=>{let t=[0,.22,.36,.45],n=n=>En(t,n)(e),r={Spine:[n([0,24,-4,6]),0,0],Spine1:[n([0,8,-4,2]),0,0],Head:[n([0,-14,4,-4]),0,0]};return U(r,`UpLeg`,[n([0,58,-6,32]),0,4],[n([0,58,-6,26]),0,4]),U(r,`Leg`,[n([-3,-90,0,-52]),0,0],[n([-3,-90,0,-40]),0,0]),U(r,`Foot`,[n([0,30,-36,-14]),0,0],[n([0,30,-36,-10]),0,0]),U(r,`Arm`,[n([0,-42,120,70]),0,n([4,8,14,22])],[n([0,-42,120,64]),0,n([4,8,14,24])]),U(r,`ForeArm`,[n([12,15,12,32]),0,0],[n([12,15,12,28]),0,0]),On(r,16),{bones:r,root:{ground:!0,lift:n([0,0,.04,.1])}}}},Yn={id:`jump_air`,name:`Jump (in air)`,category:`Actions`,duration:.8,loop:!0,sample:e=>{let t=Math.sin(e/.8*Math.PI*2),n={};return qn(n,t*.5),{bones:n,root:{y:.1}}}},Xn={id:`jump_land`,name:`Jump land`,category:`Actions`,duration:.6,loop:!1,sample:e=>{let t=[0,.12,.3,.6],n=n=>En(t,n)(e),r={Spine:[n([6,26,12,0]),0,0],Spine1:[n([2,9,4,0]),0,0],Head:[n([-4,-14,-6,0]),0,0]};return U(r,`UpLeg`,[n([32,60,30,0]),0,n([5,6,4,0])],[n([26,60,30,0]),0,n([5,6,4,0])]),U(r,`Leg`,[n([-52,-92,-45,-3]),0,0],[n([-40,-92,-45,-3]),0,0]),U(r,`Foot`,[n([-14,32,14,0]),0,0],[n([-10,32,14,0]),0,0]),U(r,`Arm`,[n([70,34,14,0]),0,n([22,18,8,4])],[n([64,34,14,0]),0,n([24,18,8,4])]),U(r,`ForeArm`,[n([32,30,20,12]),0,0],[n([28,30,20,12]),0,0]),On(r,16),{bones:r,root:{ground:!0,lift:n([.04,0,0,0])}}}},Zn={id:`jump_running`,name:`Running jump`,category:`Actions`,duration:.9,loop:!1,travel:[0,0,3.6],sample:e=>{let t=[0,.12,.42,.68,.9],n=n=>En(t,n)(e),r={Spine:[n([10,14,4,16,10]),0,0],Spine1:[n([4,6,0,6,4]),n([0,4,0,-3,0]),0],Head:[n([-8,-10,-2,-10,-8]),0,0]};return U(r,`UpLeg`,[n([10,-18,-24,-6,10]),0,3],[n([10,70,52,24,10]),0,3]),U(r,`Leg`,[n([-30,-8,-40,-70,-30]),0,0],[n([-30,-95,-30,-22,-30]),0,0]),U(r,`Foot`,[n([0,-30,-10,10,0]),0,0],[n([0,10,0,18,0]),0,0]),U(r,`Arm`,[n([10,55,70,30,10]),0,n([6,12,20,10,6])],[n([10,-35,-20,20,10]),0,n([6,10,18,8,6])]),U(r,`ForeArm`,[n([60,70,45,60,60]),0,0],[n([60,40,30,70,60]),0,0]),On(r,20),{bones:r,root:{ground:!0,lift:n([0,.06,.34,.02,0])}}}},Qn={id:`punch`,name:`Punch`,category:`Actions`,duration:.9,loop:!1,sample:e=>{let t=[0,.25,.4,.55,.9],n=n=>En(t,n)(e),r={Hips:[0,n([0,-4,6,5,0]),0],Spine1:[6,n([0,-6,11,9,0]),0],Spine2:[0,n([0,-3,5,4,0]),0],Head:[-6,n([0,6,-12,-10,0]),0]};return U(r,`Arm`,[55,0,12],[n([55,55,86,84,55]),0,n([12,14,16,16,12])]),U(r,`ForeArm`,[120,0,0],[n([120,125,8,15,120]),0,0]),U(r,`UpLeg`,[14,0,4],[n([-6,-6,-10,-10,-6]),0,4]),U(r,`Leg`,[-20,0,0],[-8,0,0]),U(r,`Foot`,[6,0,0],[0,0,0]),kn(r),{bones:r,root:{ground:!0},thumbs:An}}},$n={id:`hit`,name:`Hit reaction`,category:`Actions`,duration:.8,loop:!1,sample:e=>{let t=[0,.1,.3,.8],n=n=>En(t,n)(e),r={Spine:[n([0,-18,-8,0]),0,0],Spine1:[n([0,-12,-5,0]),0,0],Neck:[n([0,-15,-5,0]),0,0],Head:[n([0,-20,5,0]),n([0,10,4,0]),0]};return U(r,`Arm`,[n([0,25,10,0]),0,n([3,22,10,3])],[n([0,20,8,0]),0,n([3,25,10,3])]),U(r,`ForeArm`,[n([12,40,22,12]),0,0],[n([12,35,20,12]),0,0]),U(r,`UpLeg`,[0,0,0],[n([0,-15,-10,0]),0,0]),U(r,`Leg`,[-3,0,0],[n([-3,-22,-10,-3]),0,0]),On(r,n([14,30,20,14])),{bones:r,root:{ground:!0,z:n([0,-.04,-.06,-.05])}}}},er={id:`wave`,name:`Wave`,category:`Emotes`,duration:1.6,loop:!0,sample:e=>{let t=e/1.6*Math.PI*2,n=Math.sin(t*2),r={Head:[0,-12,4],Neck:[0,-4,0],Spine1:[0,-6,-3],Spine2:[-2,0,-2]};return U(r,`Shoulder`,[0,0,0],[0,0,12]),U(r,`Arm`,[2,0,3],[0,0,0]),U(r,`ForeArm`,[12,0,0],[0,0,0]),U(r,`Hand`,[0,0,0],[0,0,0]),On(r,4),U(r,`HandThumb2`,[0,0,0],[0,0,0]),{bones:r,root:{ground:!0},ik:{Right:{pos:W(-.36-.05*n,.16,.06),pole:W(-.6,-1,-.2),dir:W(-.25*n,1,.05),palm:W(0,0,1)}}}}},tr={id:`cheer`,name:`Cheer`,category:`Emotes`,duration:1.2,loop:!0,sample:e=>{let t=e/1.2*2%1,n=Math.sin(Math.min(1,t/.35)*Math.PI*.5)*(t<.35?1:1-(t-.35)/.65),r=Math.max(0,Math.sin(t*Math.PI*2-.3)),i={Spine:[-5-3*n,0,0],Spine1:[-4-3*n,0,0],Spine2:[-3,0,0],Neck:[-8,0,0],Head:[-14-6*n,0,0]};U(i,`Shoulder`,[0,0,14+8*n],[0,0,14+8*n]),U(i,`UpLeg`,[10*(1-r),0,-2],[10*(1-r),0,-2]),U(i,`Leg`,[-18*(1-r)-4,0,0],[-18*(1-r)-4,0,0]),U(i,`Foot`,[8*(1-r)-12*r,0,0],[8*(1-r)-12*r,0,0]),kn(i);let a=.06+.24*n,o=.36-.04*n;return{bones:i,root:{ground:!0,lift:.06*r},thumbs:An,ik:{Left:{pos:W(o,a,.12),pole:W(1,-.5,-.4),dir:W(.1,1,.15),palm:W(-.3,0,1)},Right:{pos:W(-o,a,.12),pole:W(-1,-.5,-.4),dir:W(-.1,1,.15),palm:W(.3,0,1)}}}}},nr={id:`laugh`,name:`Laugh`,category:`Emotes`,duration:2.4,loop:!0,sample:e=>{let t=e/2.4*Math.PI*2,n=Math.abs(Math.sin(t*6)),r={Spine:[-4+4*n,0,0],Spine1:[-3+3*n,0,0],Spine2:[-2,0,0],Neck:[-6,0,0],Head:[-12+5*n,4*Math.sin(t),3*Math.sin(t)]};return U(r,`Shoulder`,[0,0,4+5*n],[0,0,4+5*n]),U(r,`Arm`,[8,0,6],[0,0,0]),U(r,`ForeArm`,[18,0,0],[0,0,0]),U(r,`UpLeg`,[4*n,0,-2],[4*n,0,-2]),U(r,`Leg`,[-6*n-3,0,0],[-6*n-3,0,0]),On(r,16),{bones:r,root:{ground:!0},ik:{Right:{pos:W(-.06,-.5+.01*n,.2),pole:W(-1,-.6,-.4),dir:W(1,-.2,.2),palm:W(0,0,-1)}}}}},rr={id:`cry`,name:`Cry`,category:`Emotes`,duration:3,loop:!0,sample:e=>{let t=e/3*Math.PI*2,n=Math.max(0,Math.sin(t*2))**2*.7+Math.max(0,Math.sin(t*4+1))**3*.3,r={Spine:[10+3*n,0,0],Spine1:[8-3*n,0,0],Spine2:[4-2*n,0,0],Neck:[16,0,0],Head:[14+4*n,3*Math.sin(t),0]};U(r,`Shoulder`,[0,0,6+7*n],[0,0,6+7*n]),U(r,`UpLeg`,[0,0,-2],[0,0,-2]),U(r,`Leg`,[-4,0,0],[-4,0,0]),On(r,10);let i=e=>({pos:W(.06*e,.03+.015*n,.2),pole:W(e,-1,-.2),dir:W(-.25*e,1,.15),palm:W(-.2*e,-.1,-1)});return{bones:r,root:{ground:!0},ik:{Left:i(1),Right:i(-1)}}}},ir={Right:{pos:W(-.13,-.19,.22),pole:W(-1,-.9,-.2),dir:W(.1,-.55,.83),palm:W(1,0,0)},Left:{pos:W(-.01,-.13,.5),pole:W(.4,-1,0),dir:W(-.35,.2,.91),palm:W(0,1,0),support:`rifle`}},ar={Right:{pos:W(-.15,-.36,.17),pole:W(-1,-.6,-.4),dir:W(.1,-.75,.65),palm:W(1,0,0)},Left:{pos:W(.03,-.42,.4),pole:W(.6,-1,0),dir:W(-.35,.05,.93),palm:W(0,1,0),support:`rifle`}},or={Right:{pos:W(-.17,-.42,.13),pole:W(-1,-.5,-.5),dir:W(.3,-.75,.55),palm:W(1,0,0)},Left:{pos:W(.12,-.2,.27),pole:W(.8,-1,0),dir:W(-.6,.35,.7),palm:W(0,1,0),support:`rifle`}};function sr(e,t,n=0){e.Spine1=[(t?4:2)+n,e.Spine1?.[1]??0,0],e.Spine2=[(t?3:1)+n*.5,e.Spine2?.[1]??0,0],e.Neck=[t?6:0,t?-6:0,0],e.Head=[t?10:4,t?-8:0,t?-4:0],jn(e,`Right`,!0),jn(e,`Left`)}function cr(e,t=!1){t?(U(e,`UpLeg`,[72,0,4],[65,0,2]),U(e,`Leg`,[-105,0,0],[-120,0,0]),U(e,`Foot`,[30,0,0],[40,0,0]),e.Spine=[16,0,0]):(U(e,`UpLeg`,[8,0,-1],[-6,0,0]),U(e,`Leg`,[-8,0,0],[-4,0,0]),U(e,`Foot`,[2,0,0],[0,0,0]))}var lr=(e,t=0)=>({Right:{...e.Right,pos:W(e.Right.pos[0],e.Right.pos[1]+t*.015,e.Right.pos[2]-t*.035)},Left:{...e.Left,pos:W(e.Left.pos[0],e.Left.pos[1]+t*.02,e.Left.pos[2]-t*.03)}});function ur(e,t,n,r,i,a,o,s=!1){return{id:e,name:t,category:`Shooter`,duration:n,loop:!0,travel:o,sample:e=>{let t=r(e),o={};if(t)for(let[e,n]of Object.entries(t.bones))/(UpLeg|Leg|Foot|ToeBase|Hips|Spine$)/.test(e)&&(o[e]=n);if(t||cr(o,s),s&&t){for(let e of[`Left`,`Right`])o[`${e}UpLeg`]=[(o[`${e}UpLeg`]?.[0]??0)*.5+62,0,4*(e===`Left`?1:-1)],o[`${e}Leg`]=[(o[`${e}Leg`]?.[0]??0)*.5-100,0,0],o[`${e}Foot`]=[(o[`${e}Foot`]?.[0]??0)*.5+28,0,0];o.Spine=[16,o.Spine?.[1]??0,0]}let c=o.Hips?.[1]??0;return o.Spine1=[0,-c*.6,0],o.Spine2=[0,-c*.4,0],sr(o,a,Math.sin(e/n*Math.PI*2)*+!t),{bones:o,root:t?{...t.root,ground:!0}:{ground:!0},ik:lr(i)}}}}var dr=()=>null,fr=(e,t,n=!1)=>r=>Ln(e,r/t,n),pr=e=>{let t=zn(e);return e=>t.sample(e)},mr={...Fn,arm:Fn.arm.map(()=>0),pelvisYaw:3},hr={...In,arm:In.arm.map(()=>0),pelvisYaw:5,spineLean:8},gr={...Fn,thigh:Fn.thigh.map(e=>e*.8),knee:Fn.knee.map(e=>e*.6),bob:Fn.bob.map(()=>0)},_r=e=>({id:e?`rifle_fire_auto`:`rifle_fire`,name:e?`Rifle fire (full auto)`:`Rifle fire (single)`,category:`Shooter`,duration:e?.4:.45,loop:e,sample:t=>{let n={};cr(n);let r=e?t%.1/.1:t/.45,i=e?Math.exp(-r*5)*.8:En([0,.04,.12,.45],[0,1,.35,0])(t);return sr(n,!0),n.Spine2=[3-3*i,0,0],n.Head=[10-3*i,-8,-4],{bones:n,root:{ground:!0},ik:lr(ir,i)}}}),vr={id:`rifle_reload`,name:`Rifle reload`,category:`Shooter`,duration:2.2,loop:!1,sample:e=>{let t={};cr(t),sr(t,!1);let n=[0,.3,.6,1,1.35,1.6,1.75,2.2],r=Mn(ar.Right.pos,W(-.13,-.3,.24),En([0,.3,1.9,2.2],[0,1,1,0])(e)),i=W(-.05,-.44,.3),a=W(.13,-.68,.1),o=W(-.04,-.36,.28),s=[ar.Left.pos,ar.Left.pos,i,a,i,o,ar.Left.pos,ar.Left.pos],c=W(En(n,s.map(e=>e[0]))(e),En(n,s.map(e=>e[1]))(e),En(n,s.map(e=>e[2]))(e));return t.Head=[En([0,.3,1.8,2.2],[4,22,22,4])(e),En([0,.3,1.8,2.2],[0,-10,-10,0])(e),0],jn(t,`Left`,!1,En([0,.5,.65,.9,1,1.6,1.75],[1,1,.3,.3,1,1,1])(e)),{bones:t,root:{ground:!0},ik:{Right:{...ar.Right,pos:r},Left:{pos:c,pole:W(.5,-1,-.2),dir:W(-.3,-.2,.9),palm:W(-.2,1,0)}}}}},yr={id:`throw_grenade`,name:`Throw grenade`,category:`Shooter`,duration:1.5,loop:!1,sample:e=>{let t=[0,.35,.7,.85,1.05,1.5],n=n=>En(t,n)(e),r={Hips:[0,n([0,-15,-25,10,20,0]),0],Spine1:[n([0,-5,-12,10,15,0]),n([0,-15,-25,15,20,0]),0],Head:[0,n([0,10,20,-10,-15,0]),0]};return U(r,`UpLeg`,[n([6,15,20,5,0,6]),0,0],[n([-4,-10,-15,10,15,-4]),0,0]),U(r,`Leg`,[n([-6,-10,-15,-20,-10,-6]),0,0],[n([-4,-20,-25,-5,-5,-4]),0,0]),U(r,`Arm`,[n([10,50,70,40,20,10]),0,n([4,20,25,10,5,4])],[n([0,-20,-40,110,60,0]),0,n([4,70,95,60,20,4])]),U(r,`ForeArm`,[n([12,20,20,15,15,12]),0,0],[n([12,90,120,20,30,12]),0,0]),U(r,`Shoulder`,[0,0,0],[0,0,n([0,8,15,10,0,0])]),On(r,14),r.RightHandIndex1=[n([14,70,70,10,10,14]),0,0],r.RightHandMiddle1=[n([14,70,70,10,10,14]),0,0],r.RightHandRing1=[n([14,70,70,10,10,14]),0,0],{bones:r,root:{ground:!0}}}},br={Right:{pos:W(-.05,-.14,.5),pole:W(-.6,-1,0),dir:W(.05,-.25,.97),palm:W(1,0,0)},Left:{pos:W(.03,-.17,.47),pole:W(.6,-1,0),dir:W(-.45,-.2,.87),palm:W(-.6,.4,.2)}},xr={Right:{pos:W(-.05,-.46,.3),pole:W(-.6,-1,0),dir:W(.05,-.75,.66),palm:W(1,0,0)},Left:{pos:W(.03,-.48,.27),pole:W(.6,-1,0),dir:W(-.45,-.6,.6),palm:W(-.6,.4,.2)}};function Sr(e,t){e.Spine1=[t?6:3,0,0],e.Neck=[t?6:0,0,0],e.Head=[6,0,0],jn(e,`Right`,!0),jn(e,`Left`)}var Cr=[{id:`pistol_idle`,name:`Pistol idle (low ready)`,category:`Shooter`,duration:3,loop:!0,sample:e=>{let t={};return cr(t),Sr(t,!1),t.Spine=[Math.sin(e/3*Math.PI*2),0,0],{bones:t,root:{ground:!0},ik:xr}}},{id:`pistol_aim`,name:`Pistol aim`,category:`Shooter`,duration:2.5,loop:!0,sample:e=>{let t={};return cr(t),Sr(t,!0),t.Spine=[.8*Math.sin(e/2.5*Math.PI*2),0,0],{bones:t,root:{ground:!0},ik:br}}},{id:`pistol_fire`,name:`Pistol fire`,category:`Shooter`,duration:.5,loop:!1,sample:e=>{let t={};cr(t),Sr(t,!0);let n=En([0,.04,.14,.5],[0,1,.3,0])(e),r=(e,t)=>({...e,pos:W(e.pos[0],e.pos[1]+.03*n,e.pos[2]-.02*n),dir:W(e.dir[0],e.dir[1]+t*n,e.dir[2])});return{bones:t,root:{ground:!0},ik:{Right:r(br.Right,.45),Left:r(br.Left,.3)}}}}],wr=[ur(`rifle_idle`,`Rifle idle (low ready)`,3,dr,ar,!1),ur(`rifle_aim`,`Rifle aim idle`,2.5,dr,ir,!0),_r(!1),_r(!0),vr,ur(`rifle_walk`,`Rifle walk (aiming)`,1.1,fr(mr,1.1),ir,!0,[0,0,1.3]),ur(`rifle_walk_back`,`Rifle walk back (aiming)`,1.25,fr(mr,1.25,!0),ir,!0,[0,0,-1]),ur(`rifle_strafe_left`,`Rifle strafe left (aiming)`,.9,pr(!0),ir,!0,[1.1,0,0]),ur(`rifle_strafe_right`,`Rifle strafe right (aiming)`,.9,pr(!1),ir,!0,[-1.1,0,0]),ur(`rifle_run`,`Rifle run`,.72,fr(hr,.72),ar,!1,[0,0,3.4]),ur(`rifle_sprint`,`Rifle sprint`,.62,fr({...hr,spineLean:16,thigh:In.thigh.map(e=>e*1.15)},.62),or,!1,[0,0,5.2]),ur(`rifle_crouch_aim`,`Crouch aim idle`,2.5,dr,ir,!0,void 0,!0),ur(`rifle_crouch_walk`,`Crouch walk (aiming)`,1.2,fr(gr,1.2),ir,!0,[0,0,.8],!0),yr];function Tr(e,t,n,r){let i=Pn(t),a=n[0]*i[0]+n[1]*i[1]+n[2]*i[2],o=Pn(W(n[0]-i[0]*a,n[1]-i[1]*a,n[2]-i[2]*a));return{pos:e,pole:r,dir:o,palm:Nn(i,o)}}function Er(e){U(e,`UpLeg`,[14,0,2],[-10,0,2]),U(e,`Leg`,[-22,0,0],[-10,0,0]),U(e,`Foot`,[6,0,0],[0,0,0]),e.Spine=[6,0,0],U(e,`Arm`,[35,0,15],[0,0,0]),U(e,`ForeArm`,[75,0,0],[0,0,0]),kn(e,[`Left`]),kn(e,[`Right`])}var Dr=[{id:`sword_idle`,name:`Sword idle (guard)`,category:`Actions`,duration:3,loop:!0,sample:e=>{let t={};Er(t);let n=Math.sin(e/3*Math.PI*2);return t.Spine1=[n,0,0],{bones:t,root:{ground:!0,lift:0},thumbs:An,ik:{Right:Tr(W(-.14,-.31+.01*n,.32),W(.05,.8,.6),W(0,-.6,.8),W(-1,-.8,-.3))}}}},{id:`sword_slash`,name:`Sword slash`,category:`Actions`,duration:1,loop:!1,sample:e=>{let t=[0,.3,.45,.6,1],n=n=>En(t,n)(e),r={};return Er(r),r.Hips=[0,n([0,-18,5,15,0]),0],r.Spine1=[n([0,-4,8,10,0]),n([0,-22,8,22,0]),0],r.Head=[0,n([0,12,0,-10,0]),0],{bones:r,root:{ground:!0},thumbs:An,ik:{Right:Tr(W(n([-.14,-.32,-.05,.16,-.14]),n([-.31,.12,-.2,-.5,-.31]),n([.32,.05,.45,.32,.32])),W(n([.05,-.3,.4,.6,.05]),n([.8,.6,-.1,-.5,.8]),n([.6,-.7,.9,.6,.6])),W(n([0,.3,.6,.5,0]),n([-.6,.6,-.5,-.6,-.6]),n([.8,.5,.2,-.2,.8])),W(-1,-.6,-.3))}}}},{id:`sword_block`,name:`Sword block`,category:`Actions`,duration:.8,loop:!1,sample:e=>{let t=t=>En([0,.2,.8],t)(e),n={};return Er(n),n.Spine1=[t([0,-6,-6]),0,0],n.Head=[t([0,-6,-6]),0,0],{bones:n,root:{ground:!0},thumbs:An,ik:{Right:Tr(W(t([-.14,-.2,-.2]),t([-.31,.14,.14]),t([.32,.28,.28])),W(t([.05,1,1]),t([.8,.15,.15]),t([.6,.05,.05])),W(0,1,.3),W(-1,-.4,-.3))}}}}],Or=(e,t)=>W(e[0]+t[0],e[1]+t[1],e[2]+t[2]),kr=(e,t)=>W(e[0]*t,e[1]*t,e[2]*t);function Ar(e,t=85,n=-85,r=4,i=6){U(e,`UpLeg`,[t,0,i],[t,0,i]),U(e,`Leg`,[n,0,0],[n,0,0]),U(e,`Foot`,[r,0,0],[r,0,0])}function jr(e,t,n,r){let i=n*Math.PI/180,a=W(0,Math.sin(i),-Math.cos(i)),o=W(0,Math.cos(i),Math.sin(i)),s=W(1,0,0),c=(n,i)=>{let c=n+r*Math.PI/180,l=Or(kr(s,Math.cos(c)),kr(o,Math.sin(c))),u=Or(kr(s,-Math.sin(c)),kr(o,Math.cos(c)));return{pos:Or(e,kr(l,t)),pole:W(i,-1,-.3),dir:Pn(Or(kr(u,.35*i),kr(a,-1))),palm:kr(l,-1)}};return{Left:c(0,1),Right:c(Math.PI,-1)}}var Mr={id:`drive_car`,name:`Drive car`,category:`Vehicles`,duration:4,loop:!0,sample:e=>{let t=e/4*Math.PI*2,n=14*Math.sin(t)+5*Math.sin(3*t+1),r={Spine:[-10,0,0],Spine1:[2,0,0],Spine2:[2,0,0],Neck:[4,0,0],Head:[6+Math.sin(t*2),6*Math.sin(t+.6)+.3*n,0]};return Ar(r,78,-72,2,7),U(r,`Leg`,[-80,0,0],[-62,0,0]),U(r,`Foot`,[6,0,0],[-6,0,0]),jn(r,`Left`),jn(r,`Right`),{bones:r,root:{ground:!0},thumbs:{Left:.5,Right:.5},ik:jr(W(0,-.34,.42),.18,28,n)}}},Nr={id:`sit_passenger`,name:`Sit (passenger)`,category:`Vehicles`,duration:6,loop:!0,sample:e=>{let t=e/6*Math.PI*2,n=22*Math.sin(t)*Math.max(0,Math.sin(t)),r={Spine:[-12+Math.sin(t*3)*.8,0,0],Spine1:[2,0,0],Spine2:[1.5*Math.sin(t*3),0,0],Neck:[2,.3*n,0],Head:[2,.7*n,2*Math.sin(t)]};Ar(r,86,-84,2,5),On(r,18);let i=(e,t)=>({pos:W(.15*e,-.5,.3+t),pole:W(e,-.6,-.5),dir:W(.05*e,-.25,1),palm:W(0,-1,0)});return{bones:r,root:{ground:!0},ik:{Left:i(1,.01*Math.sin(t*3)),Right:i(-1,.03)}}}},Pr={id:`ride_bicycle`,name:`Ride bicycle`,category:`Vehicles`,duration:1,loop:!0,sample:e=>{let t=e/1*Math.PI*2,n={Spine:[24,0,0],Spine1:[12,0,0],Spine2:[6,1.5*Math.sin(t),0],Neck:[-16,0,0],Head:[-20,0,0],Hips:[0,2*Math.sin(t),1.5*Math.sin(t)]},r=e=>{let t=Math.cos(e),n=Math.sin(e);return[[52+26*t+6*n,0,3],[-58-34*t+10*n,0,0],[6-14*n,0,0]]},[i,a,o]=r(t),[s,c,l]=r(t+Math.PI);U(n,`UpLeg`,i,s),U(n,`Leg`,a,c),U(n,`Foot`,o,l),jn(n,`Left`),jn(n,`Right`);let u=e=>({pos:W(.24*e,-.24+.006*Math.sin(2*t),.4),pole:W(e,-.8,-.3),dir:W(.25*e,-.25,1),palm:W(-.35*e,-1,0)});return{bones:n,root:{y:-.02+.006*Math.sin(2*t)},thumbs:{Left:.6,Right:.6},ik:{Left:u(1),Right:u(-1)}}}},Fr={id:`ride_motorcycle`,name:`Ride motorcycle`,category:`Vehicles`,duration:3,loop:!0,sample:e=>{let t=e/3*Math.PI*2,n=.003*Math.sin(e*2*Math.PI*12),r={Spine:[20,0,0],Spine1:[10,0,0],Spine2:[4,0,0],Neck:[-14,0,0],Head:[-16,5*Math.sin(t),0],Hips:[0,0,3*Math.sin(t)]};U(r,`UpLeg`,[58,0,14],[58,0,14]),U(r,`Leg`,[-92,0,0],[-92,0,0]),U(r,`Foot`,[18,0,0],[18,0,0]),jn(r,`Left`),jn(r,`Right`);let i=e=>({pos:W(.34*e,-.22,.38+.01*e*Math.sin(t)),pole:W(e,-.7,-.4),dir:W(.3*e,-.2,1),palm:W(-.3*e,-1,0)});return{bones:r,root:{y:-.16+n},thumbs:{Left:.6,Right:.6},ik:{Left:i(1),Right:i(-1)}}}},Ir={id:`ride_horse`,name:`Ride horse (trot)`,category:`Vehicles`,duration:.8,loop:!0,sample:e=>{let t=e/.8*Math.PI*2,n=Math.max(0,Math.sin(t)),r={Spine:[8+4*n,0,0],Spine1:[4,0,0],Neck:[-6,0,0],Head:[-6-3*n,0,0]};U(r,`UpLeg`,[42-12*n,0,26],[42-12*n,0,26]),U(r,`Leg`,[-62+22*n,0,0],[-62+22*n,0,0]),U(r,`Foot`,[16,0,0],[16,0,0]),kn(r);let i=e=>({pos:W(.09*e,-.42+.04*n,.34),pole:W(e,-1,-.4),dir:W(-.2*e,-.1,1),palm:W(-e,0,0)});return{bones:r,root:{y:.42+.1*n},thumbs:An,ik:{Left:i(1),Right:i(-1)}}}},Lr=e=>{let t=Tn(e.map(e=>e[0])),n=Tn(e.map(e=>e[1])),r=Tn(e.map(e=>e[2]));return e=>W(t(e),n(e),r(e))},Rr=[Mr,Nr,Pr,Fr,Ir,{id:`paddle_canoe`,name:`Paddle canoe`,category:`Vehicles`,duration:1.8,loop:!0,sample:e=>{let t=e/1.8,n=Lr([W(-.34,-.48,.46),W(-.34,-.52,.2),W(-.33,-.5,-.04),W(-.3,-.34,.1),W(-.32,-.36,.36)]),r=Lr([W(-.04,.04,.38),W(-.08,-.02,.3),W(-.12,-.06,.2),W(-.06,.06,.24),W(-.03,.08,.34)]),i=Tn([14,4,-10,-4,10])(t),a={Spine:[10,i*.4,0],Spine1:[6,i*.6,-3],Spine2:[4,0,0],Neck:[-6,-i*.6,0],Head:[-8,-i*.3,0]};return Ar(a,82,-104,12,10),kn(a),{bones:a,root:{ground:!0},thumbs:An,ik:{Right:{pos:n(t),pole:W(-1,-.6,-.5),dir:W(.5,.1,.85),palm:W(.6,0,-.5)},Left:{pos:r(t),pole:W(.6,-1,0),dir:W(-1,-.1,.3),palm:W(0,-.6,1)}}}}},{id:`paddle_kayak`,name:`Paddle kayak`,category:`Vehicles`,duration:1.6,loop:!0,sample:e=>{let t=e/1.6,[n,r]=(e=>{let t=e<.5?-1:1,n=e%.5/.5,r=.5-.5*Math.cos(n*Math.PI),i=W(.3*t,-.36,.48-.44*r),a=W(-.22*t,-.08+.04*Math.sin(n*Math.PI),.3+.14*r);return t<0?[a,i]:[i,a]})(t),i=16*Math.sin(t*Math.PI*2+Math.PI/2)*-1,a={Spine:[6,i*.4,0],Spine1:[4,i*.6,0],Neck:[0,-i*.5,0],Head:[-4,-i*.4,0]};return Ar(a,70,-32,6,10),kn(a),{bones:a,root:{ground:!0},thumbs:An,ik:{Left:{pos:n,pole:W(1,-.8,-.3),dir:W(-.2,0,1),palm:W(0,-1,0)},Right:{pos:r,pole:W(-1,-.8,-.3),dir:W(.2,0,1),palm:W(0,-1,0)}}}}},{id:`row_boat`,name:`Row boat`,category:`Vehicles`,duration:2.4,loop:!0,sample:e=>{let t=e/2.4,n=Tn([30,12,-16,-12,6,24])(t),r=e=>Lr([W(.3*e,-.42,.56),W(.28*e,-.34,.4),W(.26*e,-.36,.12),W(.27*e,-.46,.16),W(.29*e,-.5,.38),W(.3*e,-.47,.52)])(t),i={Spine:[n*.55,0,0],Spine1:[n*.3,0,0],Spine2:[n*.15,0,0],Neck:[-n*.4,0,0],Head:[-n*.3,0,0]};return Ar(i,74,-58,10,9),kn(i),{bones:i,root:{ground:!0},thumbs:An,ik:{Left:{pos:r(1),pole:W(1,-.6,-.6),dir:W(.15,0,1),palm:W(0,-1,0)},Right:{pos:r(-1),pole:W(-1,-.6,-.6),dir:W(-.15,0,1),palm:W(0,-1,0)}}}}},{id:`drive_boat`,name:`Drive boat (helm)`,category:`Vehicles`,duration:5,loop:!0,sample:e=>{let t=e/5*Math.PI*2,n=4*Math.sin(t)+1.5*Math.sin(2*t+1),r=22*Math.sin(t+.8),i={Hips:[0,0,n],Spine:[2,0,-n*.7],Spine1:[2,0,-n*.3],Neck:[0,0,-n*.2],Head:[-2,.25*r,0]};return U(i,`UpLeg`,[10,0,10],[10,0,10]),U(i,`Leg`,[-16+4*Math.sin(t),0,0],[-16-4*Math.sin(t),0,0]),U(i,`Foot`,[6,0,-6],[6,0,-6]),jn(i,`Left`),jn(i,`Right`),{bones:i,root:{ground:!0,x:.01*Math.sin(t)},thumbs:{Left:.5,Right:.5},ik:jr(W(0,-.3,.44),.2,35,r)}}}],zr=(e,t)=>n=>En(e,n)(t);function Br(e){return{id:`hit_${e}`,name:{front:`Hit from front`,back:`Hit from back`,left:`Hit from left`,right:`Hit from right`}[e],category:`Reactions`,duration:.8,loop:!1,sample:t=>{let n=zr([0,.1,.32,.8],t),r=n([0,1,.4,0]),i={},a=0,o=0;if(e===`front`||e===`back`){let t=e===`front`?-1:1;i.Spine=[16*t*r,0,0],i.Spine1=[10*t*r,0,0],i.Neck=[12*t*r,0,0],i.Head=[(e===`front`?-18:22)*r,8*r,0],U(i,`Arm`,[(e===`front`?24:-20)*r,0,3+18*r],[(e===`front`?20:-18)*r,0,3+20*r]),U(i,`ForeArm`,[12+28*r,0,0],[12+24*r,0,0]);let a=n([0,.6,1,0]);U(i,`UpLeg`,[0,0,0],[(e===`front`?-14:26)*a,0,0]),U(i,`Leg`,[-3,0,0],[-3-24*a,0,0]),o=n([0,.04,.07,.06])*t}else{let t=e===`left`?1:-1;i.Spine=[-4*r,-10*t*r,-10*t*r],i.Spine1=[-2*r,-8*t*r,-8*t*r],i.Neck=[0,-8*t*r,-10*t*r],i.Head=[-6*r,-18*t*r,-12*t*r];let o=[20*r,0,3+4*r],s=[8*r,0,3+28*r];e===`left`?U(i,`Arm`,o,s):U(i,`Arm`,s,o),U(i,`ForeArm`,[12+30*r,0,0],[12+30*r,0,0]);let c=n([0,.6,1,0]);e===`left`?U(i,`UpLeg`,[0,0,0],[0,0,12*c]):U(i,`UpLeg`,[0,0,12*c],[0,0,0]),a=-t*n([0,.04,.08,.07])}return On(i,14+16*r),{bones:i,root:{ground:!0,x:a,z:o}}}}}var Vr={drop:1,pitch:-88,z:-.46,spine:[-2,-1,-4,-6],upLeg:[8,12],leg:[-10,-16],foot:[-20,-18],arm:[-6,-4],armOut:[24,28],foreArm:[8,10]},Hr=[Br(`front`),Br(`back`),Br(`left`),Br(`right`),{id:`knockdown`,name:`Knockdown`,category:`Reactions`,duration:1.4,loop:!1,sample:e=>{let t=zr([0,.12,.4,.62,.74,.9,1.4],e),n={Spine:[t([0,-22,-16,-6,-10,-2,-2]),0,0],Spine1:[t([0,-14,-10,-4,-6,-1,-1]),0,0],Neck:[t([0,-14,10,18,4,-4,-4]),0,0],Head:[t([0,-24,8,16,0,-6,-6]),t([0,8,6,6,10,12,12]),0]};return U(n,`UpLeg`,[t([0,-6,30,48,20,8,8]),0,t([0,2,6,8,8,8,8])],[t([0,10,40,55,26,12,12]),0,t([0,2,6,10,10,10,10])]),U(n,`Leg`,[t([-3,-10,-40,-50,-20,-10,-10]),0,0],[t([-3,-30,-55,-55,-26,-16,-16]),0,0]),U(n,`Foot`,[t([0,0,10,0,-15,-20,-20]),0,0],[t([0,0,10,0,-15,-18,-18]),0,0]),U(n,`Arm`,[t([0,50,60,40,5,-6,-6]),0,t([3,20,50,55,35,24,24])],[t([0,45,55,38,5,-4,-4]),0,t([3,22,55,58,38,28,28])]),U(n,`ForeArm`,[t([12,40,30,20,12,8,8]),0,0],[t([12,36,28,20,12,10,10]),0,0]),On(n,t([14,34,28,20,18,18,18])),{bones:n,root:{drop:t([0,.05,.45,.9,1,.98,1]),pitch:t([0,-10,-45,-80,-92,-87,-88]),z:t([0,-.08,-.3,-.44,-.47,-.46,-.46]),floor:!0}}}},{id:`death_forward`,name:`Death (fall forward)`,category:`Reactions`,duration:1.7,loop:!1,sample:e=>{let t=[0,.2,.55,.8,.95,1.7],n=n=>En(t,n)(e),r={Spine:[n([0,15,20,5,0,0]),0,0],Spine1:[n([0,10,12,4,0,0]),0,0],Neck:[n([0,15,10,-10,-15,-20]),0,0],Head:[n([0,10,5,-10,-15,-10]),n([0,0,0,20,30,35]),0]};return U(r,`UpLeg`,[n([0,40,60,10,0,-2]),0,n([0,2,4,6,6,6])],[n([0,35,55,15,4,2]),0,n([0,2,4,8,8,8])]),U(r,`Leg`,[n([0,-60,-90,-30,-10,-6]),0,0],[n([0,-55,-80,-35,-15,-10]),0,0]),U(r,`Foot`,[n([0,10,20,-10,-30,-40]),0,0],[n([0,10,20,-10,-30,-35]),0,0]),U(r,`Arm`,[n([0,30,90,150,160,160]),0,n([3,10,25,24,22,20])],[n([0,25,85,145,155,155]),0,n([3,10,25,26,25,24])]),U(r,`ForeArm`,[n([12,30,40,30,20,20]),0,0],[n([12,25,35,30,25,20]),0,0]),On(r,n([14,30,20,15,15,15])),{bones:r,root:{drop:n([0,.2,.6,1,.97,1]),pitch:n([0,10,45,88,86,88]),z:n([0,.05,.2,.42,.44,.44]),floor:!0}}}},{id:`death_backward`,name:`Death (fall backward)`,category:`Reactions`,duration:1.8,loop:!1,sample:e=>{let t=zr([0,.25,.6,.85,1,1.8],e),n={Spine:[t([0,10,-8,-4,-2,-2]),0,0],Spine1:[t([0,6,-6,-2,-1,-1]),0,0],Neck:[t([0,12,12,0,-4,-6]),0,0],Head:[t([0,14,10,-2,-6,-8]),t([0,0,6,22,30,34]),0]};return U(n,`UpLeg`,[t([0,30,42,20,10,6]),0,t([0,2,6,8,10,10])],[t([0,26,38,22,14,12]),0,t([0,2,6,10,12,12])]),U(n,`Leg`,[t([0,-50,-60,-25,-12,-8]),0,0],[t([0,-45,-55,-30,-20,-18]),0,0]),U(n,`Foot`,[t([0,12,6,-10,-18,-22]),0,0],[t([0,12,6,-10,-16,-20]),0,0]),U(n,`Arm`,[t([0,15,20,10,-4,-8]),0,t([3,10,35,45,40,38])],[t([0,12,18,8,-2,-6]),0,t([3,10,38,48,44,42])]),U(n,`ForeArm`,[t([12,30,25,15,10,8]),0,0],[t([12,28,25,18,14,12]),0,0]),On(n,t([14,24,26,22,20,20])),{bones:n,root:{drop:t([0,.2,.62,1,.97,1]),pitch:t([0,-4,-45,-88,-86,-88]),z:t([0,-.04,-.24,-.44,-.46,-.46]),floor:!0}}}},{id:`get_up_face_up`,name:`Get up (from back)`,category:`Reactions`,duration:2.2,loop:!1,sample:e=>{let t=zr([0,.55,1,1.45,1.85,2.2],e),n=Vr,r={Spine:[t([n.spine[0],18,30,34,10,0]),0,0],Spine1:[t([n.spine[1],10,12,10,4,0]),0,0],Neck:[t([n.spine[2],0,-10,-16,-4,0]),0,0],Head:[t([n.spine[3],4,-10,-16,-4,0]),t([12,4,0,0,0,0]),0]};return U(r,`UpLeg`,[t([n.upLeg[0],80,120,100,30,0]),0,t([8,8,10,8,4,0])],[t([n.upLeg[1],82,118,98,30,0]),0,t([10,8,10,8,4,0])]),U(r,`Leg`,[t([n.leg[0],-6,-135,-120,-45,-3]),0,0],[t([n.leg[1],-8,-135,-120,-45,-3]),0,0]),U(r,`Foot`,[t([n.foot[0],-10,30,30,14,0]),0,0],[t([n.foot[1],-10,30,30,14,0]),0,0]),U(r,`Arm`,[t([n.arm[0],-40,20,45,20,0]),0,t([n.armOut[0],20,16,14,8,3])],[t([n.arm[1],-40,20,45,20,0]),0,t([n.armOut[1],20,16,14,8,3])]),U(r,`ForeArm`,[t([n.foreArm[0],6,25,35,20,12]),0,0],[t([n.foreArm[1],6,25,35,20,12]),0,0]),On(r,t([18,10,16,18,16,14])),{bones:r,root:{drop:t([n.drop,1,.92,.6,.15,0]),pitch:t([n.pitch,-12,8,6,2,0]),z:t([n.z,-.36,-.12,0,0,0]),floor:!0}}}},{id:`get_up_face_down`,name:`Get up (from front)`,category:`Reactions`,duration:2.2,loop:!1,sample:e=>{let t=zr([0,.5,.95,1.45,1.9,2.2],e),n={Spine:[t([0,-14,-6,6,4,0]),0,0],Spine1:[t([0,-8,-2,4,2,0]),0,0],Neck:[t([-20,-24,-16,-6,-2,0]),0,0],Head:[t([-10,-16,-10,-4,0,0]),t([35,6,0,0,0,0]),0]};return U(n,`UpLeg`,[t([-2,-4,50,100,25,0]),0,t([6,6,8,6,3,0])],[t([2,-2,50,30,15,0]),0,t([8,8,8,6,3,0])]),U(n,`Leg`,[t([-6,-8,-95,-100,-30,-3]),0,0],[t([-10,-10,-95,-105,-40,-3]),0,0]),U(n,`Foot`,[t([-40,-40,-30,20,8,0]),0,0],[t([-35,-35,-30,-30,6,0]),0,0]),U(n,`Arm`,[t([160,82,64,30,8,0]),0,t([20,14,10,8,4,3])],[t([155,82,64,34,10,0]),0,t([24,14,10,8,4,3])]),U(n,`ForeArm`,[t([20,6,6,25,20,12]),0,0],[t([20,6,6,25,20,12]),0,0]),On(n,t([15,6,6,14,14,14])),{bones:n,root:{drop:t([1,.86,.62,.45,.12,0]),pitch:t([88,66,52,18,6,0]),z:t([.44,.36,.2,.06,0,0]),floor:!0}}}}];function Ur(e,t){return(n,r)=>{let i={};for(let[a,o]of Object.entries(t))i[a]=En(e.map(e=>e*r),o)(n);return i}}var Wr=(e,t,n)=>({[e]:n,[t]:n}),Gr=e=>()=>e,Kr=Gr({eyeSquintLeft:.55,browDownLeft:.3,mouthPress:.15}),qr=Ur([0,.12,.4,1],{...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.9,.4,0]),...Wr(`browDownLeft`,`browDownRight`,[0,.5,.2,0]),mouthStretch:[0,.6,.25,0]}),Jr={punch:Ur([0,.22,.45,.65,1],{...Wr(`browDownLeft`,`browDownRight`,[0,.6,.8,.5,0]),...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.3,.45,.3,0]),...Wr(`noseSneerLeft`,`noseSneerRight`,[0,.2,.35,.2,0]),mouthPress:[0,.6,.8,.5,0]}),hit:qr,hit_front:qr,hit_back:qr,hit_left:qr,hit_right:qr,wave:Gr({mouthSmile:.7,eyeSquintLeft:.25,eyeSquintRight:.25,browOuterUpLeft:.2,browOuterUpRight:.2}),cheer:Gr({mouthSmile:.9,jawOpen:.4,eyeSquintLeft:.3,eyeSquintRight:.3}),laugh:(e,t)=>{let n=Math.abs(Math.sin(e/t*Math.PI*12));return{mouthSmile:1,jawOpen:.2+.35*n,mouthUpperUp:.3+.2*n,eyeSquintLeft:.6,eyeSquintRight:.6,browOuterUpLeft:.25,browOuterUpRight:.25}},cry:(e,t)=>{let n=e/t*Math.PI*2,r=Math.max(0,Math.sin(n*2))**2*.7+Math.max(0,Math.sin(n*4+1))**3*.3;return{browInnerUp:1,mouthFrown:.8,mouthStretch:.25+.3*r,jawOpen:.1+.2*r,eyeSquintLeft:.6,eyeSquintRight:.6}},jump_start:Ur([0,.45,.8,1],{mouthPress:[0,.6,.3,.1],...Wr(`browDownLeft`,`browDownRight`,[0,.4,.2,0])}),jump_running:Ur([0,.2,.8,1],{mouthPress:[.1,.5,.4,.1]}),fall:Ur([0,.13,.32,.53,1],{...Wr(`eyeWideLeft`,`eyeWideRight`,[0,.8,.6,0,0]),...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,0,0,.8,.2]),jawOpen:[0,.4,.5,.1,0]}),knockdown:Ur([0,.09,.29,.53,1],{...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.9,.6,.8,.3]),mouthStretch:[0,.6,.4,.5,.2],jawOpen:[0,.3,.2,.2,0]}),get_up_face_up:Ur([0,.25,.45,.66,.84,1],{...Wr(`eyeSquintLeft`,`eyeSquintRight`,[.3,.4,.5,.4,.1,0]),...Wr(`browDownLeft`,`browDownRight`,[0,.3,.5,.4,.1,0]),mouthStretch:[.2,0,0,0,0,0],mouthPress:[0,.4,.6,.5,.2,0]}),death_forward:Ur([0,.12,.32,.47,.56,1],{...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.9,.6,.2,0,0]),...Wr(`eyeBlinkLeft`,`eyeBlinkRight`,[0,0,.2,.6,.8,.8]),jawOpen:[0,.3,.3,.25,.25,.25]}),death_backward:Ur([0,.14,.33,.47,.56,1],{...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.9,.6,.2,0,0]),...Wr(`eyeBlinkLeft`,`eyeBlinkRight`,[0,0,.2,.6,.8,.8]),jawOpen:[0,.3,.3,.25,.25,.25]}),get_up_face_down:Ur([0,.23,.43,.66,.86,1],{...Wr(`eyeBlinkLeft`,`eyeBlinkRight`,[.8,.1,0,0,0,0]),...Wr(`browDownLeft`,`browDownRight`,[0,.3,.4,.3,.1,0]),jawOpen:[.25,0,0,0,0,0],mouthPress:[0,.5,.6,.4,.1,0]}),rifle_aim:Kr,rifle_fire:Kr,rifle_fire_auto:Gr({eyeSquintLeft:.65,eyeSquintRight:.25,browDownLeft:.4,browDownRight:.3,mouthPress:.35}),rifle_walk:Kr,rifle_walk_back:Kr,rifle_strafe_left:Kr,rifle_strafe_right:Kr,rifle_crouch_aim:Kr,rifle_crouch_walk:Kr,pistol_aim:Kr,pistol_fire:Kr,throw_grenade:Ur([0,.4,.6,1],{mouthPress:[0,.6,.6,0],...Wr(`browDownLeft`,`browDownRight`,[0,.4,.4,0])}),sword_idle:Gr({browDownLeft:.35,browDownRight:.35,mouthPress:.3}),sword_slash:Ur([0,.3,.5,1],{...Wr(`browDownLeft`,`browDownRight`,[.2,.7,.7,.2]),mouthPress:[.2,.7,.6,.2],...Wr(`noseSneerLeft`,`noseSneerRight`,[0,.3,.3,0])}),sword_block:Ur([0,.3,1],{...Wr(`browDownLeft`,`browDownRight`,[.2,.6,.3]),...Wr(`eyeSquintLeft`,`eyeSquintRight`,[0,.45,.2]),mouthPress:[.2,.5,.3]})};function Yr(e){return e.map(e=>{let t=Jr[e.id];return t?{...e,sample:n=>({...e.sample(n),face:t(n,e.duration)})}:e})}Object.keys(Jr);var Xr=Yr([Bn,Wn,Vn,Hn,Un,zn(!0),zn(!1),Kn,Jn,Yn,Xn,Zn,Gn,Qn,$n,...Hr,er,tr,nr,rr,Rn(`turn_left_45`,`Turn left 45°`,45),Rn(`turn_left_90`,`Turn left 90°`,90),Rn(`turn_right_45`,`Turn right 45°`,-45),Rn(`turn_right_90`,`Turn right 90°`,-90),Rn(`turn_360`,`Full turn 360°`,360),...Cr,...Dr,...wr,...Rr]),Zr=new Map(Xr.map(e=>[e.id,e])),Qr=[0,0,0,1];function $r(e,t){return[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]]}var ei=e=>[-e[0],-e[1],-e[2],e[3]];function ti(e,t){let n=Math.hypot(...e)||1,r=t*Math.PI/360,i=Math.sin(r)/n;return[e[0]*i,e[1]*i,e[2]*i,Math.cos(r)]}function ni(e,t){let n=$r($r(e,[t[0],t[1],t[2],0]),ei(e));return[n[0],n[1],n[2]]}function ri(e,t){let n=Math.hypot(...e),r=Math.hypot(...t),i=[e[0]/n,e[1]/n,e[2]/n],a=[t[0]/r,t[1]/r,t[2]/r],o=i[0]*a[0]+i[1]*a[1]+i[2]*a[2];if(o<-.99999)return ti(Math.abs(i[0])<.9?[0,-i[2],i[1]]:[-i[1],i[0],0],180);let s=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],c=[s[0],s[1],s[2],1+o],l=Math.hypot(...c);return[c[0]/l,c[1]/l,c[2]/l,c[3]/l]}var ii=.28,ai=e=>e<=0?0:e>=1?1:e*e*(3-2*e),oi=e=>e<0||e>ii?0:e<.07?ai(e/.07):e<.12?1:1-ai((e-.12)/.16),si=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function ci(e,t){if(t<1.8)return 0;for(let n=1.1;n+ii+.05<t;n+=3.4){let t=oi(e-n);if(t)return t}return 0}function li(e){let t=Math.floor(e/3.6);for(let n of[t-1,t]){let t=oi(e-(n*3.6+si(n,7)*1.6));if(t)return t}return 0}function ui(e){let t=Math.floor(e/1.6),n=e=>[(si(e,1)*2-1)*7,(si(e,2)*2-1)*3],r=ai((e-t*1.6)/.07),i=n(t-1),a=n(t);return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r]}function di(e,t){if(t<1.8)return[0,0];let n=(e,n)=>{let r=Math.sin(e*127.1+n*311.7+t*74.7)*43758.5453;return r-Math.floor(r)},r=e=>e<=0?0:e>=1?1:e*e*(3-2*e),i=t-.35,a=[0,0],o=[0,0],s=-1;for(let t=0,r=.6;r<i&&!(e<r);t++,r+=1.6)o=a,a=[(n(t,1)*2-1)*7,(n(t,2)*2-1)*3],s=r;if(e>=i&&([o,a,s]=[a,[0,0],i]),s<0)return[0,0];let c=r((e-s)/.07);return[o[0]+(a[0]-o[0])*c,o[1]+(a[1]-o[1])*c]}var fi=.12,pi=/^(Hips|Spine\d?|Neck|Head|(Left|Right)(Shoulder|Arm|ForeArm|Hand|UpLeg|Leg|Foot|ToeBase))$/,mi=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],hi=.16,gi=.42,_i=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],vi=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),yi=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},bi=class{rig;face;restLocal;restOffset;flexAxis;palmLocal=new Map;idx=new Map;feet;restFootY;restWorld;animRest;names;scale;socket;fits=new Map;constructor(e,t){this.rig=e,this.face=t;let n=e.bones;this.restWorld=n.map(e=>Sn(e.rot)),this.restLocal=n.map((e,t)=>e.parent<0?this.restWorld[t]:$r(ei(this.restWorld[e.parent]),this.restWorld[t]));let r=[`Hips`,`Spine`,`Spine1`,`Spine2`,`Neck`,`Head`,`Jaw`,...[`Left`,`Right`].flatMap(e=>[`Eye`,`Shoulder`,`Arm`,`ForeArm`,`Hand`,`UpLeg`,`Leg`,`Foot`,`ToeBase`,...[`Thumb`,`Index`,`Middle`,`Ring`,`Pinky`].flatMap(e=>[1,2,3].map(t=>`Hand${e}${t}`))].map(t=>e+t))],i=new Map;for(let t of r){let n=wn(e.type,t);n&&i.set(n,t)}this.names=n.map(e=>i.get(e.name)??null),this.animRest=[...this.restWorld];let a=n.map(()=>null),o=e=>{let t=n[e];return[t.tail[0]-t.head[0],t.tail[1]-t.head[1],t.tail[2]-t.head[2]]},s=new Map;n.forEach((e,t)=>{let n=this.names[t],r=e.parent>=0?a[e.parent]:null;if(n===`LeftArm`||n===`RightArm`){let e=[(n===`LeftArm`?1:-1)*Math.sin(10*Math.PI/180),-Math.cos(10*Math.PI/180),.04];s.set(n,e),a[t]=ri(o(t),e)}else if(n===`LeftForeArm`||n===`RightForeArm`){let e=s.get(n===`LeftForeArm`?`LeftArm`:`RightArm`),i=r??Qr;if(e){let n=ni(i,o(t)),r=[e[0],e[1],e[2]+.18];a[t]=$r(ri(n,r),i)}else a[t]=r}else a[t]=r;a[t]&&(this.animRest[t]=$r(a[t],this.restWorld[t]))});let c=0;for(let e of n)c=Math.max(c,e.head[1],e.tail[1]);this.scale=c/1.8,this.restOffset=n.map(e=>e.parent<0?e.head:ni(ei(this.restWorld[e.parent]),[e.head[0]-n[e.parent].head[0],e.head[1]-n[e.parent].head[1],e.head[2]-n[e.parent].head[2]])),this.names.forEach((e,t)=>e&&this.idx.set(e,t)),this.flexAxis=n.map(()=>null);for(let e of[`Left`,`Right`]){let t=this.idx.get(`${e}Hand`),r=this.idx.get(`${e}HandIndex1`),i=this.idx.get(`${e}HandPinky1`),o=this.idx.get(`${e}HandThumb3`);if(t===void 0||r===void 0||i===void 0||o===void 0)continue;let s=n[t].head,c=n[r].head,l=n[i].head,u=n[o].tail,d=[c[0]-s[0],c[1]-s[1],c[2]-s[2]],f=[l[0]-s[0],l[1]-s[1],l[2]-s[2]],p=[d[1]*f[2]-d[2]*f[1],d[2]*f[0]-d[0]*f[2],d[0]*f[1]-d[1]*f[0]];(u[0]-s[0])*p[0]+(u[1]-s[1])*p[1]+(u[2]-s[2])*p[2]<0&&(p=[-p[0],-p[1],-p[2]]);let m=ni(a[t]??Qr,p);this.palmLocal.set(e,yi(ni(ei(this.animRest[t]),m))),n.forEach((n,r)=>{if(!(this.names[r]??``).startsWith(`${e}Hand`)||r===t)return;let i=ni(a[r]??Qr,[n.tail[0]-n.head[0],n.tail[1]-n.head[1],n.tail[2]-n.head[2]]),o=yi([i[1]*m[2]-i[2]*m[1],i[2]*m[0]-i[0]*m[2],i[0]*m[1]-i[1]*m[0]]);this.flexAxis[r]=yi(ni(ei(this.animRest[r]),o))})}this.feet=n.map((e,t)=>t).filter(e=>/^(Left|Right)(Foot|ToeBase|Toe_End)$/.test(this.names[e]??``)||/^(foot|toe\d-\d)\.[LR]$/.test(n[e].name)),this.restFootY=Math.min(...this.feet.map(e=>n[e].head[1])),this.socket=n.findIndex(e=>e.name===`WeaponR`)}weaponFit(e,t){let n=this.rig.bones,r=[];n.forEach((t,n)=>r[n]=t.parent<0?e.rot[n]:$r(r[t.parent],e.rot[n]));let i=this.positions(e),a=this.idx.get(`Spine2`)??this.idx.get(`Spine1`)??0,o=$r(r[a],ei(this.animRest[a])),s=$r(ei(r[t]),o),c=this.idx.get(`LeftHand`);return{rot:s,supportZ:c===void 0?.3:ni(ei(o),mi(i[c],i[t]))[2]}}positions(e){let t=this.rig.bones,n=[],r=[];return t.forEach((t,i)=>{if(t.parent<0)n[i]=e.rot[i],r[i]=e.rootPos.get(i)??t.head;else{n[i]=$r(n[t.parent],e.rot[i]);let a=ni(n[t.parent],this.restOffset[i]);r[i]=[r[t.parent][0]+a[0],r[t.parent][1]+a[1],r[t.parent][2]+a[2]]}}),r}bind(){let e=new Map;return this.rig.bones.forEach((t,n)=>t.parent<0&&e.set(n,t.head)),{rot:[...this.restLocal],rootPos:e}}frame(e,t,n={}){let r=this.withEyes(e.sample(t),e,t,n.faceTime),i=this.frameOf(r,e,t,n);return this.face&&(i.morph=this.faceWeights(r,e,t,n.faceTime)),i}restFace(e){if(this.face)return this.faceWeights({bones:{},root:{}},{id:``,name:``,category:`Emotes`,duration:0,loop:!0,sample:()=>({bones:{},root:{}})},0,e)}withEyes(e,t,n,r){if(this.idx.get(`LeftEye`)===void 0)return e;let[i,a]=e.gaze??(r===void 0?di(n,t.duration):ui(r));if(!i&&!a)return e;let o=[a,0,i];return{...e,bones:{...e.bones,LeftEye:o,RightEye:[o[0],-o[1],o[2]]}}}faceWeights(e,t,n,r){let i=this.face,a=r===void 0?ci(n,t.duration):li(r);return i.names.map((t,n)=>{let r=i.defaults[n]+(e.face?.[t]??0);return a&&(t===`eyeBlinkLeft`||t===`eyeBlinkRight`?r+=(1-r)*a:/^eye(Wide|Squint)/.test(t)&&(r*=1-a)),Math.min(1,Math.max(0,r))})}frameOf(e,t,n,r){let i=e.ik?.Left;if(i?.support&&!r.noSupport&&this.socket>=0){let a=this.solve({...e,ik:{...e.ik,Left:void 0}},t,n,r);e={...e,ik:{...e.ik,Left:this.supportTarget(i,a.world,a.pos)}}}return this.solve(e,t,n,r).frame}fitFor(e){let t=this.fits.get(e);if(!t){let n=Zr.get(e===`rifle`?`rifle_aim`:`pistol_aim`),r=this.solve(n.sample(0),n,0,{});t=this.weaponFit(r.frame,this.socket),t.supportZ=Math.min(gi,Math.max(hi,t.supportZ)),e===`rifle`&&(t.supportZ=this.reachableZ(t.rot,r.world,r.pos,t.supportZ,hi,.93)),this.fits.set(e,t)}return t}supportTarget(e,t,n){let r=this.fitFor(`rifle`),i=this.scale,a=$r(t[this.socket],r.rot),o=e=>_i(n[this.socket],ni(a,e)),s=yi(ni(a,[-.35,.2,.91])),c=yi(ni(a,[0,1,0])),l=o([0,.033,this.reachableZ(r.rot,t,n,r.supportZ,r.supportZ-.12,.96)]),u=[0,1,2].map(e=>l[e]-s[e]*.05*i-c[e]*.02*i),{cd:d,origin:f}=this.chestSpace(t,n),p=ei(d);return{...e,pos:ni(p,mi(u,f)).map(e=>e/i),dir:ni(p,s),palm:ni(p,c)}}reachableZ(e,t,n,r,i,a){let o=this.rig.bones,s=this.idx.get(`LeftArm`),c=this.idx.get(`LeftForeArm`),l=this.idx.get(`LeftHand`);if(s===void 0||c===void 0||l===void 0)return r;let u=(vi(o[c].head,o[s].head)+vi(o[l].head,o[c].head))*a,d=this.scale,f=$r(t[this.socket],e),p=yi(ni(f,[-.35,.2,.91])),m=yi(ni(f,[0,1,0]));for(let e=r;e>i;e-=.005){let t=_i(n[this.socket],ni(f,[0,.033,e]));if(vi([0,1,2].map(e=>t[e]-p[e]*.05*d-m[e]*.02*d),n[s])<=u)return e}return i}chestSpace(e,t){let n=this.rig.bones,r=this.idx.get(`Spine2`)??this.idx.get(`Spine1`)??0,i=$r(e[r],ei(this.animRest[r])),a=this.idx.get(`Neck`),o=a===void 0?[0,0,0]:ni(ei(this.restWorld[r]),mi(n[a].head,n[r].head)),s=ni(e[r],o);return{cd:i,origin:[t[r][0]+s[0],t[r][1]+s[1],t[r][2]+s[2]]}}solve(e,t,n,r){let i=this.rig.bones,a=Array(i.length),o=Array(i.length),s=Array(i.length),c=new Map,l=e.root,u=this.scale,d=$r(ti([0,1,0],l.yaw??0),ti([1,0,0],l.pitch??0)),f={};if(i.forEach((i,s)=>{let p=this.names[s],m=p?e.bones[p]:void 0,h=Qr;if(m){let e=this.flexAxis[s]?ti(this.flexAxis[s],m[0]):ti([1,0,0],m[0]);h=$r($r(ti([0,0,1],m[2]),ti([0,1,0],m[1])),e)}let g=$r(this.animRest[s],h);if(i.parent<0){a[s]=$r(d,g);let e=(l.drop??0)*(fi-i.head[1]),f=r.rootMotion&&t.travel?t.travel.map(e=>e*n*u):[0,0,0];o[s]=[i.head[0]+(l.x??0)*u+f[0],i.head[1]+(l.y??0)*u+e+f[1],i.head[2]+(l.z??0)*u+f[2]],c.set(s,o[s])}else{a[s]=$r($r(a[i.parent],ei(this.animRest[i.parent])),g);let e=ni(a[i.parent],this.restOffset[s]),t=o[i.parent];o[s]=[t[0]+e[0],t[1]+e[1],t[2]+e[2]]}e.ik&&p&&this.solveIK(e,p,s,a,o,f),e.thumbs&&p&&this.wrapThumb(e,p,s,a,o)}),i.forEach((e,t)=>s[t]=e.parent<0?a[t]:$r(ei(a[e.parent]),a[t])),l.ground||l.lift){let e=this.feet.length?Math.min(...this.feet.map(e=>o[e][1])):this.restFootY,t=(l.ground?this.restFootY-e:0)+(l.lift??0)*u;for(let[e,n]of c)c.set(e,[n[0],n[1]+t,n[2]]);for(let e of o)e[1]+=t}if(l.floor){let e=0;if(this.names.forEach((t,n)=>{if(!t||!pi.test(t))return;let r=(/(Hand|Foot|ToeBase)$/.test(t)?.04:.07)*u;e=Math.max(e,r-o[n][1])}),e>0)for(let[t,n]of c)c.set(t,[n[0],n[1]+e,n[2]])}return{frame:{rot:s,rootPos:c},world:a,pos:o}}wrapThumb(e,t,n,r,i){let a=/^(Left|Right)HandThumb1$/.exec(t);if(!a)return;let o=a[1],s=e.thumbs[o]??0,c=this.idx.get(`${o}Hand`),l=this.idx.get(`${o}HandIndex1`),u=this.idx.get(`${o}HandMiddle1`),d=this.idx.get(`${o}HandThumb3`),f=this.palmLocal.get(o);if(!s||c===void 0||l===void 0||u===void 0||d===void 0||!f)return;let p=this.rig.bones,m=e=>{let t=ni(r[c],ni(ei(this.restWorld[c]),mi(p[e].head,p[c].head)));return[i[c][0]+t[0],i[c][1]+t[1],i[c][2]+t[2]]},h=m(l),g=m(u),_=ni(r[c],f),v=yi(mi(g,i[c])),y=this.scale,b=[0,1,2].map(e=>h[e]*.6+g[e]*.4+_[e]*.032*y+v[e]*.012*y),x=ni(ei(this.restWorld[n]),mi(p[d].tail,p[n].head)),S=ri(ni(r[n],x),mi(b,i[n])),C=2*Math.acos(Math.min(1,Math.abs(S[3])))*s,w=Math.sqrt(Math.max(1e-12,1-S[3]*S[3])),T=S[3]<0?-1:1;r[n]=$r(ti([S[0]/w*T,S[1]/w*T,S[2]/w*T],C*180/Math.PI),r[n])}solveIK(e,t,n,r,i,a){let o=/^(Left|Right)(Arm|ForeArm|Hand)$/.exec(t);if(!o)return;let s=o[1],c=o[2],l=e.ik[s];if(!l)return;let u=this.rig.bones,{cd:d,origin:f}=this.chestSpace(r,i),p=e=>ni(d,e),m=this.idx.get(`${s}ForeArm`),h=this.idx.get(`${s}Hand`);if(c===`Arm`){let e=i[n],t=p(l.pos.map(e=>e*this.scale)),o=[f[0]+t[0],f[1]+t[1],f[2]+t[2]],c=vi(u[m].head,u[n].head),d=vi(u[h].head,u[m].head),g=vi(o,e),_=yi(mi(o,e));g=Math.min(Math.max(g,Math.abs(c-d)+1e-4),(c+d)*.9999);let v=(c*c-d*d+g*g)/(2*g),y=Math.sqrt(Math.max(0,c*c-v*v)),b=p(l.pole),x=b[0]*_[0]+b[1]*_[1]+b[2]*_[2],S=yi([b[0]-_[0]*x,b[1]-_[1]*x,b[2]-_[2]*x]),C=[e[0]+_[0]*v+S[0]*y,e[1]+_[1]*v+S[1]*y,e[2]+_[2]*v+S[2]*y],w=ni(ei(this.restWorld[n]),mi(u[m].head,u[n].head)),T=ni(r[n],w),E=yi(mi(C,e));r[n]=$r(ri(T,E),r[n]);let D=mi(o,C),O=D[0]*E[0]+D[1]*E[1]+D[2]*E[2],k=[D[0]-E[0]*O,D[1]-E[1]*O,D[2]-E[2]*O];if(Math.hypot(...k)>1e-4){let e=ni(r[n],[0,0,1]),t=e[0]*E[0]+e[1]*E[1]+e[2]*E[2];r[n]=$r(ri(yi([e[0]-E[0]*t,e[1]-E[1]*t,e[2]-E[2]*t]),yi(k)),r[n])}a[s]={T:[e[0]+_[0]*g,e[1]+_[1]*g,e[2]+_[2]*g]}}else if(c===`ForeArm`&&a[s]){let e=ni(ei(this.restWorld[n]),mi(u[h].head,u[n].head));r[n]=$r(ri(ni(r[n],e),mi(a[s].T,i[n])),r[n])}else if(c===`Hand`&&l.dir){let e=yi(p(l.dir)),t=$r(ri(ni(r[n],[0,1,0]),e),r[n]),i=this.palmLocal.get(s);if(i&&l.palm){let n=p(l.palm),r=t=>{let n=t[0]*e[0]+t[1]*e[1]+t[2]*e[2];return yi([t[0]-e[0]*n,t[1]-e[1]*n,t[2]-e[2]*n])};t=$r(ri(r(ni(t,i)),r(n)),t)}r[n]=t}}bake(e,t=30,n={}){let r=Math.max(2,Math.round(e.duration*t)+1),i=[],a=[];for(let o=0;o<r;o++){let r=Math.min(e.duration,o/t),s=this.frame(e,r,n);if(a.length){let e=a[a.length-1];s.rot=s.rot.map((t,n)=>{let r=e.rot[n];return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]<0?[-t[0],-t[1],-t[2],-t[3]]:t})}i.push(r),a.push(s)}return{times:i,frames:a}}};function xi(e){return e.groups.reduce((e,t)=>e+t.indices.length/3,0)}function Si(e,t){let n=e.african>=e.asian&&e.african>=e.caucasian?`african`:e.asian>=e.caucasian?`asian`:`caucasian`,r=e.gender>=.5?`male`:`female`,i=Mt(e.age),a=[`young`,`middleage`,`old`],o=i<38?0:i<60?1:2,s=t[0],c=-1/0;for(let e of t){let t=/^(young|middleage|old)_(african|asian|caucasian)_(male|female)(\d*)$/.exec(e.id);if(!t)continue;let i=(t[2]===n?8:0)+(t[3]===r?4:0)-Math.abs(a.indexOf(t[1])-o)-(t[4]?.1:0);i>c&&([s,c]=[e,i])}return s}new TextEncoder().encode(`Kaydara FBX Binary  \0\0`),new Uint8Array([40,179,42,235,182,36,204,194,191,200,176,42,169,43,252,241]),new Uint8Array([250,188,171,9,208,200,212,102,177,118,251,131,28,247,38,126]),new Uint8Array([248,90,140,106,222,245,217,126,236,233,12,227,117,143,41,11]);function Ci(e,t){let n=Zr.get(e);return t.loopSuffix&&n.loop?`${n.name}-loop`:n.name}var wi={mode:`animated`,format:`fbx`,clips:[`idle`,`walk`,`run`],packaging:`embedded`,clipMesh:!1,rootMotion:!1,loopSuffix:!1,weaponFile:`held`},Ti={static:{title:`Static model`,blurb:`Mesh + textures only. For props, renders, 3D printing, or rigging elsewhere.`},rigged:{title:`Rigged model`,blurb:`Mesh + skeleton + skin weights, no animation. Ready for Mixamo / your own animations.`},animated:{title:`Rigged + animations`,blurb:`Mesh + skeleton + the animation clips you pick.`}},Ei={glb:`GLB`,fbx:`FBX`,obj:`OBJ`};function Di(e){return e.trim().replace(/[^a-zA-Z0-9_-]+/g,`_`).replace(/^_+|_+$/g,``)||`character`}function Oi(e,t){let n=[],r=Di(e.params.name),i=t.mode;i!==`static`&&!e.rig&&(n.push(`This character has no rig (skeleton set to "none"), so it exports as a static model.`),i=`static`),t.format===`obj`&&i!==`static`&&(n.push(`OBJ cannot store skeletons or animations: exporting a static OBJ. Pick GLB or FBX to keep the rig.`),i=`static`);let a=i===`animated`?t.clips.filter(e=>Zr.has(e)):[];i===`animated`&&!a.length&&(n.push(`No animations selected: exporting the rigged model only.`),i=`rigged`);let o=t.format===`all`?i===`static`?[`glb`,`fbx`,`obj`]:[`glb`,`fbx`]:[t.format];t.format===`all`&&i!==`static`&&n.push(`OBJ is left out of "All formats" because it cannot hold the rig.`);let s=xi(e.mesh).toLocaleString(),c=new Set(e.mesh.materials.flatMap(e=>[e.map,e.normalMap]).filter(Boolean)).size,l=e.rig,u=l?`${l.bones.length}-bone ${_n[l.type].split(` —`)[0].split(` (`)[0].toLowerCase()}, ${l.restPose}-pose bind`:``,d=e=>Ci(e,t),f=e=>e.map(d).join(`, `),p=i===`animated`&&t.packaging===`separate`,m=e.weapon,h=m?Ze[m.id]:``,g=!!m&&t.weaponFile===`separate`&&o.some(e=>e!==`obj`),_=[];for(let e of o){let n=o.length>1||p||e===`obj`,l=t=>n&&o.length>1?`${e}/${t}`:t;if(e===`obj`){_.push({path:`obj/`,kind:`obj`,format:`obj`,rigged:!1,clips:[],meshless:!1,desc:`OBJ + MTL + ${c} texture files (static, quad topology, metres)`});continue}let d=i===`animated`&&!p?a:[];if(_.push({path:l(`${r}.${e}`),kind:`model`,format:e,rigged:i!==`static`,clips:d,meshless:!1,desc:[`${Ei[e]} model · ${s} triangles · ${c} textures embedded`,i===`static`?`static (no skeleton)`:u,d.length?`${d.length} animation${d.length>1?`s`:``}: ${f(d)}`:i===`static`?``:`no animations`,m?g?`no weapon (${h.toLowerCase()} is a separate file)`:`holding ${h.toLowerCase()}`:``].filter(Boolean).join(` · `)}),g&&m&&_.push({path:l(`${r}_${m.id}.${e}`),kind:`prop`,format:e,rigged:!1,clips:[],meshless:!1,desc:`${h} prop · static · origin at the grip: parent it to the WeaponR bone with zero offset`}),p)for(let n of a){let i=Zr.get(n);_.push({path:l(`${r}@${n}.${e}`),kind:`clip`,format:e,rigged:!0,clips:[n],meshless:!t.clipMesh,desc:`${i.name} · ${i.duration.toFixed(1)} s ${i.loop?`loop`:`one-shot`}${t.rootMotion&&i.travel?` · root motion`:``} · ${t.clipMesh?`with mesh`:`skeleton only`}`})}}i===`animated`&&t.rootMotion&&a.some(e=>Zr.get(e).travel)&&n.push(`Root motion on: walk/run/strafe clips move the hips forward or sideways instead of playing in place.`),i===`animated`&&t.loopSuffix&&a.some(e=>Zr.get(e).loop)&&n.push(`Looping clips are named "…-loop", which Godot imports as looping automatically.`),m&&i!==`static`&&!g&&n.push(`The ${h.toLowerCase()} is skinned to the WeaponR bone (child of the right hand). To swap weapons in-engine, export it as a separate file and attach props to WeaponR.`),m&&i===`static`&&!g&&n.push(`The ${h.toLowerCase()} is part of the static mesh, in the rest-pose hand.`),m&&t.weaponFile===`separate`&&o.includes(`obj`)&&n.push(`OBJ keeps the weapon in the mesh (no separate prop file for OBJ).`),p&&!t.clipMesh&&n.push(`Clip files hold only the skeleton + animation (Unity "model@clip" convention): import the model first, then the clips onto its skeleton.`);let v=_.length>1||_[0].kind===`obj`;v&&(_.push({path:`${r}.params.json`,kind:`meta`,rigged:!1,clips:[],meshless:!1,desc:`Generator settings: load to regenerate this character`}),l&&i!==`static`&&_.push({path:`${r}.rig.json`,kind:`meta`,rigged:!1,clips:[],meshless:!1,desc:`Skeleton description (bone names, hierarchy, bind pose)`}),_.push({path:`README.txt`,kind:`meta`,rigged:!1,clips:[],meshless:!1,desc:`What is in this download`}),_.push({path:`LICENSE.txt`,kind:`meta`,rigged:!1,clips:[],meshless:!1,desc:`CC0 asset licence`}),_.push({path:`preview.png`,kind:`meta`,rigged:!1,clips:[],meshless:!1,desc:`Preview image (from the viewer)`}));let y=i===`static`?`static`:i===`rigged`?`rigged`:p?`anims`:`${a.length}anims`,b=v?`${r}_${y}${t.format===`all`?`_all`:o[0]===`obj`?`_obj`:``}.zip`:_[0].path,x=t.format===`all`?o.map(e=>Ei[e]).join(` + `):Ei[o[0]],S=i===`static`?`Static`:i===`rigged`?`Rigged`:`Rigged + ${a.length} anim${a.length>1?`s`:``}${p?` (1 file each)`:``}`;return{settings:t,mode:i,download:b,zipped:v,files:_,notes:n,summary:`${x} · ${S}${v?` · zip`:``}`}}var ki=class{lib;worker=new Worker(new URL(`/Feliz-cumplea-os-/avatar-lab/assets/worker-A2Y9Fm20.js`,``+import.meta.url),{type:`module`});pending=new Map;next=1;constructor(e,t){this.lib=e,this.send({type:`init`,assets:t}),this.worker.onerror=e=>{let t=Error(e.message||`generation worker failed to start`);for(let e of this.pending.values())e.reject(t);this.pending.clear()},this.worker.onmessage=e=>{let t=e.data,n=this.pending.get(t.id);if(n){if(t.type===`progress`)return n.progress?.(t.label,t.frac);if(this.pending.delete(t.id),t.type===`error`)return n.reject(Error(t.message));if(t.type===`built`){for(let[e,n]of t.textures)this.lib.registerTexture(e,n);return n.resolve(t.ch)}n.resolve(t.file)}}}send(e,t=[]){this.worker.postMessage(e,t)}call(e,t){let n=this.next++;return new Promise((r,i)=>{this.pending.set(n,{resolve:r,reject:i,progress:t}),this.send({...e,id:n})})}build(e,t){return this.call({type:`build`,params:e},t)}export(e,t,n){return this.call({type:`export`,settings:e,previewPng:t},n)}};function Ai(e){let t={};for(let[n,r]of Object.entries(e))n!==`detail`&&JSON.stringify(r)!==JSON.stringify(jt[n])&&(t[n]=r);return t}var ji=e=>{let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)},Mi=e=>{let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))};function Ni(e){return ji(fe(ye(JSON.stringify(Ai(e))),{level:9}))}function Pi(e,t){try{if(e.length>8e3)return null;let n=JSON.parse(be(pe(Mi(e))));return{...Lt({...jt,...n}),detail:t}}catch{return null}}function Fi(e){return`${location.origin}${location.pathname}#c=${Ni(e)}`}async function Ii(e,t,n){let r=1200,i=document.createElement(`canvas`);i.width=r,i.height=675;let a=i.getContext(`2d`);a.fillStyle=`#0f1116`,a.fillRect(0,0,r,675);let o=a.createRadialGradient(330,300,40,330,300,520);o.addColorStop(0,`rgba(91,140,255,0.32)`),o.addColorStop(1,`rgba(91,140,255,0)`),a.fillStyle=o,a.fillRect(0,0,r,675);let s=t??{x:0,y:0,w:e.width,h:e.height},c=560/615;if(s.w/s.h<c){let t=Math.min(e.width,s.h*c);s={...s,x:Math.min(Math.max(0,s.x+s.w/2-t/2),e.width-t),w:t}}else{let t=Math.min(e.height,s.w/c);s={...s,y:Math.min(Math.max(0,s.y+s.h/2-t/2),e.height-t),h:t}}let l=Math.min(560/s.w,615/s.h),u=s.w*l,d=s.h*l,f=50+(560-u)/2,p=30+(615-d)/2;a.save(),a.beginPath(),a.roundRect(40,20,580,635,28),a.clip(),a.fillStyle=`#1b2130`,a.fillRect(40,20,580,635),a.drawImage(e,s.x,s.y,s.w,s.h,f,p,u,d),a.restore(),a.strokeStyle=`#2b3446`,a.lineWidth=2,a.beginPath(),a.roundRect(40,20,580,635,28),a.stroke();let m=(e,t)=>`${e} ${t}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;a.fillStyle=`#9db9ff`,a.font=m(700,20),a.fillText(`MADE WITH ARA 3D GEN`,660,150),a.fillStyle=`#ffffff`,a.font=m(800,58);let h=(n.trim()||`My character`).split(/\s+/),g=[],_=``;for(let e of h){let t=_?`${_} ${e}`:e;a.measureText(t).width>480&&_?(g.push(_),_=e):_=t}g.push(_),g.slice(0,3).forEach((e,t)=>a.fillText(e,660,225+t*66));let v=225+Math.min(3,g.length)*66+10;return a.fillStyle=`#c9d3e6`,a.font=m(500,26),a.fillText(`Realistic · rigged · animated`,660,v),a.fillText(`Free and open source`,660,v+38),a.fillStyle=`#5b8cff`,a.beginPath(),a.roundRect(660,525,330,64,32),a.fill(),a.fillStyle=`#ffffff`,a.font=m(700,26),a.fillText(`Create yours free →`,690,566),a.fillStyle=`#8b93a1`,a.font=m(500,20),a.fillText(location.host||`Ara 3D Gen`,660,625),new Promise((e,t)=>i.toBlob(n=>n?e(n):t(Error(`could not render image`)),`image/png`))}var Li=e=>`I just created "${e.trim()||`my character`}" on Ara 3D Gen 🎮 Make your own realistic, rigged 3D character for free. #Ara3DGen #gamedev`,Ri=encodeURIComponent,zi=[{id:`x`,label:`X`,url:(e,t)=>`https://x.com/intent/post?text=${Ri(e)}&url=${Ri(t)}`},{id:`facebook`,label:`Facebook`,url:(e,t)=>`https://www.facebook.com/sharer/sharer.php?u=${Ri(t)}`},{id:`linkedin`,label:`LinkedIn`,url:(e,t)=>`https://www.linkedin.com/sharing/share-offsite/?url=${Ri(t)}`},{id:`whatsapp`,label:`WhatsApp`,url:(e,t)=>`https://wa.me/?text=${Ri(`${e} ${t}`)}`},{id:`reddit`,label:`Reddit`,url:(e,t)=>`https://www.reddit.com/submit?url=${Ri(t)}&title=${Ri(e)}`},{id:`telegram`,label:`Telegram`,url:(e,t)=>`https://t.me/share/url?url=${Ri(t)}&text=${Ri(e)}`}],Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hi=`attached`,Ui=1e3,Wi=1001,Gi=1002,Ki=1003,qi=1004,Ji=1005,Yi=1006,Xi=1007,Zi=1008,Qi=1009,$i=1010,ea=1011,ta=1012,na=1013,ra=1014,ia=1015,aa=1016,oa=1017,sa=1018,ca=1020,la=35902,ua=35899,da=1021,fa=1022,pa=1023,ma=1026,ha=1027,ga=1028,_a=1029,va=1030,ya=1031,ba=1033,xa=33776,Sa=33777,Ca=33778,wa=33779,Ta=35840,Ea=35841,Da=35842,Oa=35843,ka=36196,Aa=37492,ja=37496,Ma=37488,Na=37489,Pa=37490,Fa=37491,Ia=37808,La=37809,Ra=37810,za=37811,Ba=37812,Va=37813,Ha=37814,Ua=37815,Wa=37816,Ga=37817,Ka=37818,qa=37819,Ja=37820,Ya=37821,Xa=36492,Za=36494,Qa=36495,$a=36283,eo=36284,to=36285,no=36286,ro=2300,io=2301,ao=2302,oo=2303,so=2400,co=2401,lo=2402,uo=3200,fo=`srgb`,po=`srgb-linear`,mo=`linear`,ho=`srgb`,go=7680,_o=35044,vo=2e3;function yo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xo(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function So(){let e=xo(`canvas`);return e.style.display=`block`,e}var Co={};function wo(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function To(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=To(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function K(...e){e=To(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Eo(...e){let t=e.join(` `);t in Co||(Co[t]=!0,G(...e))}function Do(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Oo={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ko=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ao=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),jo=1234567,Mo=Math.PI/180,No=180/Math.PI;function Po(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ao[e&255]+Ao[e>>8&255]+Ao[e>>16&255]+Ao[e>>24&255]+`-`+Ao[t&255]+Ao[t>>8&255]+`-`+Ao[t>>16&15|64]+Ao[t>>24&255]+`-`+Ao[n&63|128]+Ao[n>>8&255]+`-`+Ao[n>>16&255]+Ao[n>>24&255]+Ao[r&255]+Ao[r>>8&255]+Ao[r>>16&255]+Ao[r>>24&255]).toLowerCase()}function Fo(e,t,n){return Math.max(t,Math.min(n,e))}function Io(e,t){return(e%t+t)%t}function Lo(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ro(e,t,n){return e===t?0:(n-e)/(t-e)}function zo(e,t,n){return(1-n)*e+n*t}function Bo(e,t,n,r){return zo(e,t,1-Math.exp(-n*r))}function Vo(e,t=1){return t-Math.abs(Io(e,t*2)-t)}function Ho(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Uo(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Wo(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Go(e,t){return e+Math.random()*(t-e)}function Ko(e){return e*(.5-Math.random())}function qo(e){e!==void 0&&(jo=e);let t=jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jo(e){return e*Mo}function Yo(e){return e*No}function Xo(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Zo(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Qo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function $o(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:G(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function es(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ts(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ns={DEG2RAD:Mo,RAD2DEG:No,generateUUID:Po,clamp:Fo,euclideanModulo:Io,mapLinear:Lo,inverseLerp:Ro,lerp:zo,damp:Bo,pingpong:Vo,smoothstep:Ho,smootherstep:Uo,randInt:Wo,randFloat:Go,randFloatSpread:Ko,seededRandom:qo,degToRad:Jo,radToDeg:Yo,isPowerOfTwo:Xo,ceilPowerOfTwo:Zo,floorPowerOfTwo:Qo,setQuaternionFromProperEuler:$o,normalize:ts,denormalize:es},q=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fo(this.x,e.x,t.x),this.y=Fo(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fo(this.x,e,t),this.y=Fo(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rs=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fo(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(as.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(as.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fo(this.x,e.x,t.x),this.y=Fo(this.y,e.y,t.y),this.z=Fo(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fo(this.x,e,t),this.y=Fo(this.y,e,t),this.z=Fo(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},is=new J,as=new rs,Y=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Eo(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(os.makeScale(e,t)),this}rotate(e){return Eo(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(os.makeRotation(-e)),this}translate(e,t){return Eo(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},os=new Y,ss=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cs=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ls(){let e={enabled:!0,workingColorSpace:po,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ds(e.r),e.g=ds(e.g),e.b=ds(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=fs(e.r),e.g=fs(e.g),e.b=fs(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mo:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Eo(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Eo(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[po]:{primaries:t,whitePoint:r,transfer:mo,toXYZ:ss,fromXYZ:cs,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fo},outputColorSpaceConfig:{drawingBufferColorSpace:fo}},[fo]:{primaries:t,whitePoint:r,transfer:ho,toXYZ:ss,fromXYZ:cs,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fo}}}),e}var us=ls();function ds(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function fs(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ps,ms=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=xo(`canvas`)),ps.width=e.width,ps.height=e.height;let t=ps.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xo(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ds(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ds(t[e]/255)*255):t[e]=ds(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},hs=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hs++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(_s(r[t].image)):e.push(_s(r[t]))}else e=_s(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function _s(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ms.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var vs=0,ys=new J,bs=class e extends ko{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Wi,i=Wi,a=Yi,o=Zi,s=pa,c=Qi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vs++}),this.uuid=Po(),this.name=``,this.source=new gs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ys).x}get height(){return this.source.getSize(ys).y}get depth(){return this.source.getSize(ys).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x-=Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Gi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y-=Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Gi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bs.DEFAULT_IMAGE=null,bs.DEFAULT_MAPPING=300,bs.DEFAULT_ANISOTROPY=1;var xs=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fo(this.x,e.x,t.x),this.y=Fo(this.y,e.y,t.y),this.z=Fo(this.z,e.z,t.z),this.w=Fo(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fo(this.x,e,t),this.y=Fo(this.y,e,t),this.z=Fo(this.z,e,t),this.w=Fo(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ss=class extends ko{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xs(0,0,e,t),this.scissorTest=!1,this.viewport=new xs(0,0,e,t),this.textures=[];let r=new bs({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Cs=class extends Ss{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ws=class extends bs{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ts=class extends bs{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Es=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),i=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ks,e,As)}lookAt(e,t,n){let r=this.elements;return Ns.subVectors(e,t),Ns.lengthSq()===0&&(Ns.z=1),Ns.normalize(),js.crossVectors(n,Ns),js.lengthSq()===0&&(Math.abs(n.z)===1?Ns.x+=1e-4:Ns.z+=1e-4,Ns.normalize(),js.crossVectors(n,Ns)),js.normalize(),Ms.crossVectors(Ns,js),r[0]=js.x,r[4]=Ms.x,r[8]=Ns.x,r[1]=js.y,r[5]=Ms.y,r[9]=Ns.y,r[2]=js.z,r[6]=Ms.z,r[10]=Ns.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(r[0],r[1],r[2]).length(),o=Ds.set(r[4],r[5],r[6]).length(),s=Ds.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Os.copy(this);let c=1/a,l=1/o,u=1/s;return Os.elements[0]*=c,Os.elements[1]*=c,Os.elements[2]*=c,Os.elements[4]*=l,Os.elements[5]*=l,Os.elements[6]*=l,Os.elements[8]*=u,Os.elements[9]*=u,Os.elements[10]*=u,t.setFromRotationMatrix(Os),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=vo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=vo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new J,Os=new Es,ks=new J(0,0,0),As=new J(1,1,1),js=new J,Ms=new J,Ns=new J,Ps=new Es,Fs=new rs,Is=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Fo(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Fo(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Fo(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Fo(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Fo(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Fo(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ps.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ps,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fs.setFromEuler(this),this.setFromQuaternion(Fs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER=`XYZ`;var Ls=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Rs=0,zs=new J,Bs=new rs,Vs=new Es,Hs=new J,Us=new J,Ws=new J,Gs=new rs,Ks=new J(1,0,0),qs=new J(0,1,0),Js=new J(0,0,1),Ys={type:`added`},Xs={type:`removed`},Zs={type:`childadded`,child:null},Qs={type:`childremoved`,child:null},$s=class e extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rs++}),this.uuid=Po(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Is,r=new rs,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Es},normalMatrix:{value:new Y}}),this.matrix=new Es,this.matrixWorld=new Es,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Ks,e)}rotateY(e){return this.rotateOnAxis(qs,e)}rotateZ(e){return this.rotateOnAxis(Js,e)}translateOnAxis(e,t){return zs.copy(e).applyQuaternion(this.quaternion),this.position.add(zs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ks,e)}translateY(e){return this.translateOnAxis(qs,e)}translateZ(e){return this.translateOnAxis(Js,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vs.lookAt(Us,Hs,this.up):Vs.lookAt(Hs,Us,this.up),this.quaternion.setFromRotationMatrix(Vs),r&&(Vs.extractRotation(r.matrixWorld),Bs.setFromRotationMatrix(Vs),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(K(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ys),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):K(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xs),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ys),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Ws),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Gs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};$s.DEFAULT_UP=new J(0,1,0),$s.DEFAULT_MATRIX_AUTO_UPDATE=!0,$s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ec=class extends $s{constructor(){super(),this.isGroup=!0,this.type=`Group`}},tc={type:`move`},nc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ec;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ic={h:0,s:0,l:0},ac={h:0,s:0,l:0};function oc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fo){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,us.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=us.workingColorSpace){return this.r=e,this.g=t,this.b=n,us.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=us.workingColorSpace){if(e=Io(e,1),t=Fo(t,0,1),n=Fo(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=oc(i,r,e+1/3),this.g=oc(i,r,e),this.b=oc(i,r,e-1/3)}return us.colorSpaceToWorking(this,r),this}setStyle(e,t=fo){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fo){let n=rc[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fo){return us.workingToColorSpace(sc.copy(this),e),Math.round(Fo(sc.r*255,0,255))*65536+Math.round(Fo(sc.g*255,0,255))*256+Math.round(Fo(sc.b*255,0,255))}getHexString(e=fo){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=us.workingColorSpace){us.workingToColorSpace(sc.copy(this),t);let n=sc.r,r=sc.g,i=sc.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=us.workingColorSpace){return us.workingToColorSpace(sc.copy(this),t),e.r=sc.r,e.g=sc.g,e.b=sc.b,e}getStyle(e=fo){us.workingToColorSpace(sc.copy(this),e);let t=sc.r,n=sc.g,r=sc.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ic),this.setHSL(ic.h+e,ic.s+t,ic.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ic),e.getHSL(ac);let n=zo(ic.h,ac.h,t),r=zo(ic.s,ac.s,t),i=zo(ic.l,ac.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sc=new X;X.NAMES=rc;var cc=class extends $s{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},lc=new J,uc=new J,dc=new J,fc=new J,pc=new J,mc=new J,hc=new J,gc=new J,_c=new J,vc=new J,yc=new xs,bc=new xs,xc=new xs,Sc=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),lc.subVectors(e,t),r.cross(lc);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){lc.subVectors(r,t),uc.subVectors(n,t),dc.subVectors(e,t);let a=lc.dot(lc),o=lc.dot(uc),s=lc.dot(dc),c=uc.dot(uc),l=uc.dot(dc),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fc)!==null&&fc.x>=0&&fc.y>=0&&fc.x+fc.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,fc)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,fc.x),s.addScaledVector(a,fc.y),s.addScaledVector(o,fc.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return yc.setScalar(0),bc.setScalar(0),xc.setScalar(0),yc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),xc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yc,i.x),a.addScaledVector(bc,i.y),a.addScaledVector(xc,i.z),a}static isFrontFacing(e,t,n,r){return lc.subVectors(n,t),uc.subVectors(e,t),lc.cross(uc).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lc.subVectors(this.c,this.b),uc.subVectors(this.a,this.b),lc.cross(uc).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;pc.subVectors(r,n),mc.subVectors(i,n),gc.subVectors(e,n);let s=pc.dot(gc),c=mc.dot(gc);if(s<=0&&c<=0)return t.copy(n);_c.subVectors(e,r);let l=pc.dot(_c),u=mc.dot(_c);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(pc,a);vc.subVectors(e,i);let f=pc.dot(vc),p=mc.dot(vc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(mc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return hc.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(hc,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(pc,a).addScaledVector(mc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cc=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Tc):Tc.fromBufferAttribute(r,t),Tc.applyMatrix4(e.matrixWorld),this.expandByPoint(Tc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tc),Tc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nc),Pc.subVectors(this.max,Nc),Dc.subVectors(e.a,Nc),Oc.subVectors(e.b,Nc),kc.subVectors(e.c,Nc),Ac.subVectors(Oc,Dc),jc.subVectors(kc,Oc),Mc.subVectors(Dc,kc);let t=[0,-Ac.z,Ac.y,0,-jc.z,jc.y,0,-Mc.z,Mc.y,Ac.z,0,-Ac.x,jc.z,0,-jc.x,Mc.z,0,-Mc.x,-Ac.y,Ac.x,0,-jc.y,jc.x,0,-Mc.y,Mc.x,0];return!Lc(t,Dc,Oc,kc,Pc)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Dc,Oc,kc,Pc))?!1:(Fc.crossVectors(Ac,jc),t=[Fc.x,Fc.y,Fc.z],Lc(t,Dc,Oc,kc,Pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(wc[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wc[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wc[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wc[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wc[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wc[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wc[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wc[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wc)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wc=[new J,new J,new J,new J,new J,new J,new J,new J],Tc=new J,Ec=new Cc,Dc=new J,Oc=new J,kc=new J,Ac=new J,jc=new J,Mc=new J,Nc=new J,Pc=new J,Fc=new J,Ic=new J;function Lc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ic.fromArray(e,a);let o=i.x*Math.abs(Ic.x)+i.y*Math.abs(Ic.y)+i.z*Math.abs(Ic.z),s=t.dot(Ic),c=n.dot(Ic),l=r.dot(Ic);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Rc=new J,zc=new q,Bc=0,Vc=class extends ko{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zc.fromBufferAttribute(this,t),zc.applyMatrix3(e),this.setXY(t,zc.x,zc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rc.fromBufferAttribute(this,t),Rc.applyMatrix3(e),this.setXYZ(t,Rc.x,Rc.y,Rc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rc.fromBufferAttribute(this,t),Rc.applyMatrix4(e),this.setXYZ(t,Rc.x,Rc.y,Rc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rc.fromBufferAttribute(this,t),Rc.applyNormalMatrix(e),this.setXYZ(t,Rc.x,Rc.y,Rc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rc.fromBufferAttribute(this,t),Rc.transformDirection(e),this.setXYZ(t,Rc.x,Rc.y,Rc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ts(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=ts(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=ts(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ts(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=ts(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ts(t,this.array),n=ts(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ts(t,this.array),n=ts(n,this.array),r=ts(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ts(t,this.array),n=ts(n,this.array),r=ts(r,this.array),i=ts(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Hc=class extends Vc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Uc=class extends Vc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Wc=class extends Vc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gc=new Cc,Kc=new J,qc=new J,Jc=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Gc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kc.subVectors(e,this.center);let t=Kc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Kc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kc.copy(e.center).add(qc)),this.expandByPoint(Kc.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yc=0,Xc=new Es,Zc=new $s,Qc=new J,$c=new Cc,el=new Cc,tl=new J,nl=class e extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Po(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(yo(e)?Uc:Hc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xc.makeRotationFromQuaternion(e),this.applyMatrix4(Xc),this}rotateX(e){return Xc.makeRotationX(e),this.applyMatrix4(Xc),this}rotateY(e){return Xc.makeRotationY(e),this.applyMatrix4(Xc),this}rotateZ(e){return Xc.makeRotationZ(e),this.applyMatrix4(Xc),this}translate(e,t,n){return Xc.makeTranslation(e,t,n),this.applyMatrix4(Xc),this}scale(e,t,n){return Xc.makeScale(e,t,n),this.applyMatrix4(Xc),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qc).negate(),this.translate(Qc.x,Qc.y,Qc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Wc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$c.setFromBufferAttribute(n),this.morphTargetsRelative?(tl.addVectors(this.boundingBox.min,$c.min),this.boundingBox.expandByPoint(tl),tl.addVectors(this.boundingBox.max,$c.max),this.boundingBox.expandByPoint(tl)):(this.boundingBox.expandByPoint($c.min),this.boundingBox.expandByPoint($c.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&K(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if($c.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];el.setFromBufferAttribute(n),this.morphTargetsRelative?(tl.addVectors($c.min,el.min),$c.expandByPoint(tl),tl.addVectors($c.max,el.max),$c.expandByPoint(tl)):($c.expandByPoint(el.min),$c.expandByPoint(el.max))}$c.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)tl.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(tl));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)tl.fromBufferAttribute(a,t),o&&(Qc.fromBufferAttribute(e,t),tl.add(Qc)),r=Math.max(r,n.distanceToSquared(tl))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&K(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){K(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Vc(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Vc(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tl.fromBufferAttribute(e,t),tl.normalize(),e.setXYZ(t,tl.x,tl.y,tl.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vc(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},rl=new J,il=new J,al=new Y,ol=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rl.subVectors(n,t).cross(il.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(rl),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||al.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sl=0,cl=class extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=Po(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ol().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ll=new J,ul=new J,dl=new J,fl=new J,pl=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ll)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ll.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ll.copy(this.origin).addScaledVector(this.direction,t),ll.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ul.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),fl.copy(this.origin).sub(ul);let i=e.distanceTo(t)*.5,a=-this.direction.dot(dl),o=fl.dot(this.direction),s=-fl.dot(dl),c=fl.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ul).addScaledVector(dl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ll.subVectors(e.center,this.origin);let n=ll.dot(this.direction),r=ll.dot(ll)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ll)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,re=T-N*D,ie=E-te*D,ae=O-N*A,oe=k-te*A,P=j-N*M,se=ee-te*M,F=P*oe-se*ae,ce=re*se-ie*P,le=ae*ie-oe*re;if(r){if(F<0||ce<0||le<0)return null}else if((F<0||ce<0||le<0)&&(F>0||ce>0||le>0))return null;let ue=F+ce+le;if(ue===0)return null;let de=ne*(F*D+ce*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ml=class extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hl=new Es,gl=new pl,_l=new Jc,vl=new J,yl=new J,bl=new J,xl=new J,Sl=new J,Cl=new J,wl=new J,Tl=new J,El=class extends $s{constructor(e=new nl,t=new ml){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Cl.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Sl.fromBufferAttribute(s,e),a?Cl.addScaledVector(Sl,r):Cl.addScaledVector(Sl.sub(t),r))}t.add(Cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(i),gl.copy(e.ray).recast(e.near),!(_l.containsPoint(gl.origin)===!1&&(gl.intersectSphere(_l,vl)===null||gl.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(hl.copy(i).invert(),gl.copy(e.ray).applyMatrix4(hl),(n.boundingBox===null||gl.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,gl)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ol(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ol(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ol(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ol(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Dl(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Tl.copy(s),Tl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Tl);return l<n.near||l>n.far?null:{distance:l,point:Tl.clone(),object:e}}function Ol(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,yl),e.getVertexPosition(c,bl),e.getVertexPosition(l,xl);let u=Dl(e,t,n,r,yl,bl,xl,wl);if(u){let e=new J;Sc.getBarycoord(wl,yl,bl,xl,e),i&&(u.uv=Sc.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=Sc.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=Sc.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Sc.getNormal(yl,bl,xl,t.normal),u.face=t,u.barycoord=e}return u}var kl=new xs,Al=new xs,jl=new xs,Ml=new xs,Nl=new Es,Pl=new J,Fl=new Jc,Il=new Es,Ll=new pl,Rl=class extends El{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=Hi,this.bindMatrix=new Es,this.bindMatrixInverse=new Es,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cc),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jc),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(r),e.ray.intersectsSphere(Fl)!==!1&&(Il.copy(r).invert(),Ll.copy(e.ray).applyMatrix4(Il),(this.boundingBox===null||Ll.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xs,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():G(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Al.fromBufferAttribute(r.attributes.skinIndex,e),jl.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(kl.copy(t),t.set(0,0,0,0)):(kl.set(...t,1),t.set(0,0,0)),kl.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=jl.getComponent(e);if(r!==0){let i=Al.getComponent(e);Nl.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ml.copy(kl).applyMatrix4(Nl),r)}}return t.isVector4&&(t.w=kl.w),t.applyMatrix4(this.bindMatrixInverse)}},zl=class extends $s{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Bl=class extends bs{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ki,l=Ki,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vl=new Es,Hl=new Es,Ul=class e{constructor(e=[],t=[]){this.uuid=Po(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){G(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Es)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Es;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Hl;Vl.multiplyMatrices(i,t[r]),Vl.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bl(t,e,e,pa,ia);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(G(`Skeleton: No bone found with UUID:`,r),i=new zl),this.bones.push(i),this.boneInverses.push(new Es().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Wl=class extends Vc{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gl=new Es,Kl=new Es,ql=[],Jl=new Cc,Yl=new Es,Xl=new El,Zl=new Jc,Ql=class extends El{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Yl)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cc),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gl),Jl.copy(e.boundingBox).applyMatrix4(Gl),this.boundingBox.union(Jl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gl),Zl.copy(e.boundingSphere).applyMatrix4(Gl),this.boundingSphere.union(Zl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Xl.geometry=this.geometry,Xl.material=this.material,Xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zl.copy(this.boundingSphere),Zl.applyMatrix4(n),e.ray.intersectsSphere(Zl)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Gl),Kl.multiplyMatrices(n,Gl),Xl.matrixWorld=Kl,Xl.raycast(e,ql);for(let e=0,n=ql.length;e<n;e++){let n=ql[e];n.instanceId=i,n.object=this,t.push(n)}ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bl(new Float32Array(r*this.count),r,this.count,ga,ia));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$l=new Jc,eu=new q(.5,.5),tu=new J,nu=class{constructor(e=new ol,t=new ol,n=new ol,r=new ol,i=new ol,a=new ol){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$l.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$l.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($l)}intersectsSprite(e){return $l.center.set(0,0,0),$l.radius=.7071067811865476+eu.distanceTo(e.center),$l.applyMatrix4(e.matrixWorld),this.intersectsSphere($l)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(tu.x=r.normal.x>0?e.max.x:e.min.x,tu.y=r.normal.y>0?e.max.y:e.min.y,tu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ru=class extends cl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},iu=new J,au=new J,ou=new Es,su=new pl,cu=new Jc,lu=new J,uu=new J,du=class extends $s{constructor(e=new nl,t=new ru){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)iu.fromBufferAttribute(t,e-1),au.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=iu.distanceTo(au);e.setAttribute(`lineDistance`,new Wc(n,1))}else G(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cu.copy(n.boundingSphere),cu.applyMatrix4(r),cu.radius+=i,e.ray.intersectsSphere(cu)===!1)return;ou.copy(r).invert(),su.copy(e.ray).applyMatrix4(ou);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=fu(this,e,su,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=fu(this,e,su,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=fu(this,e,su,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=fu(this,e,su,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function fu(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(iu.fromBufferAttribute(s,i),au.fromBufferAttribute(s,a),n.distanceSqToSegment(iu,au,lu,uu)>r)return;lu.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(lu);if(!(c<t.near||c>t.far))return{distance:c,point:uu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var pu=new J,mu=new J,hu=class extends du{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)pu.fromBufferAttribute(t,e),mu.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+pu.distanceTo(mu);e.setAttribute(`lineDistance`,new Wc(n,1))}else G(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},gu=class extends bs{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_u=class extends bs{constructor(e,t,n=ra,r,i,a,o=Ki,s=Ki,c,l=ma,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vu=class extends _u{constructor(e,t=ra,n=301,r,i,a=Ki,o=Ki,s,c=ma){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yu=class extends bs{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bu=class e extends nl{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Wc(c,3)),this.setAttribute(`normal`,new Wc(l,3)),this.setAttribute(`uv`,new Wc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xu=class e extends nl{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new q;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Wc(a,3)),this.setAttribute(`normal`,new Wc(o,3)),this.setAttribute(`uv`,new Wc(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Su=class e extends nl{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Wc(p,3)),this.setAttribute(`normal`,new Wc(m,3)),this.setAttribute(`uv`,new Wc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Cu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Tu(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Tu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function wu(e){let t={};for(let n=0;n<e.length;n++){let r=Cu(e[n]);for(let e in r)t[e]=r[e]}return t}function Tu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Eu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Du(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:us.workingColorSpace}var Ou={clone:Cu,merge:wu},ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ju=class extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cu(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new xs().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Es().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mu=class extends ju{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Nu=class extends cl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pu=class extends cl{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fu=class extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=uo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Iu=class extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ru(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var zu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Bu=class extends zu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:so,endingEnd:so}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case co:i=e,o=2*t-n;break;case lo:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case co:a=e,s=2*n-t;break;case lo:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Vu=class extends zu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Hu=class extends zu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Uu=class extends zu{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ku(n,t,g,y,r);i[p]=Wu(x,o,_,b,m)}return i}};function Wu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Gu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ku(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Wu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Gu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var qu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Lu(t,this.TimeBufferType),this.values=Lu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lu(e.times,Array),values:Lu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ru(e.settings)&&(n.settings={inTangents:Lu(e.settings.inTangents,Array),outTangents:Lu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Uu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break;case oo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ru(this.settings)&&(Ju(this.settings.inTangents,e),Ju(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(K(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(K(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){K(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){K(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&bo(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){K(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ao,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ru(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ju(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}qu.prototype.ValueTypeName=``,qu.prototype.TimeBufferType=Float32Array,qu.prototype.ValueBufferType=Float32Array,qu.prototype.DefaultInterpolation=io;var Yu=class extends qu{constructor(e,t,n){super(e,t,n)}};Yu.prototype.ValueTypeName=`bool`,Yu.prototype.ValueBufferType=Array,Yu.prototype.DefaultInterpolation=ro,Yu.prototype.InterpolantFactoryMethodLinear=void 0,Yu.prototype.InterpolantFactoryMethodSmooth=void 0;var Xu=class extends qu{constructor(e,t,n,r){super(e,t,n,r)}};Xu.prototype.ValueTypeName=`color`;var Zu=class extends qu{constructor(e,t,n,r){super(e,t,n,r)}};Zu.prototype.ValueTypeName=`number`;var Qu=class extends zu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)rs.slerpFlat(i,0,a,c-o,a,c,s);return i}},$u=class extends qu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qu(this.times,this.values,this.getValueSize(),e)}};$u.prototype.ValueTypeName=`quaternion`,$u.prototype.InterpolantFactoryMethodSmooth=void 0;var ed=class extends qu{constructor(e,t,n){super(e,t,n)}};ed.prototype.ValueTypeName=`string`,ed.prototype.ValueBufferType=Array,ed.prototype.DefaultInterpolation=ro,ed.prototype.InterpolantFactoryMethodLinear=void 0,ed.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class extends qu{constructor(e,t,n,r){super(e,t,n,r)}};td.prototype.ValueTypeName=`vector`;var nd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(rd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!rd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function rd(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var id=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ad=class{constructor(e){this.manager=e===void 0?id:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ad.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var od=new WeakMap,sd=class extends ad{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=nd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=od.get(a);e===void 0&&(e=[],od.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=xo(`img`);function s(){l(),t&&t(this);let n=od.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}od.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),nd.remove(`image:${e}`);let n=od.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}od.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),nd.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},cd=class extends ad{constructor(e){super(e)}load(e,t,n,r){let i=new bs,a=new sd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ld=class extends $s{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ud=new Es,dd=new J,fd=new J,pd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new Es,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new xs(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ud.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ud,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},md=new J,hd=new rs,gd=new J,_d=class extends $s{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Es,this.projectionMatrix=new Es,this.projectionMatrixInverse=new Es,this.coordinateSystem=vo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(md,hd,gd),gd.x===1&&gd.y===1&&gd.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(md,hd,gd.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(md,hd,gd),gd.x===1&&gd.y===1&&gd.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(md,hd,gd.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vd=new J,yd=new q,bd=new q,xd=class extends _d{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vd.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vd.x,vd.y).multiplyScalar(-e/vd.z),vd.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vd.x,vd.y).multiplyScalar(-e/vd.z)}getViewSize(e,t){return this.getViewBounds(e,yd,bd),t.subVectors(bd,yd)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sd=class extends pd{constructor(){super(new xd(90,1,.5,500)),this.isPointLightShadow=!0}},Cd=class extends ld{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Sd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wd=class extends _d{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Td=class extends pd{constructor(){super(new wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ed=class extends ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy($s.DEFAULT_UP),this.updateMatrix(),this.target=new $s,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Dd=-90,Od=1,kd=class extends $s{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xd(Dd,Od,e,t);r.layers=this.layers,this.add(r);let i=new xd(Dd,Od,e,t);i.layers=this.layers,this.add(i);let a=new xd(Dd,Od,e,t);a.layers=this.layers,this.add(a);let o=new xd(Dd,Od,e,t);o.layers=this.layers,this.add(o);let s=new xd(Dd,Od,e,t);s.layers=this.layers,this.add(s);let c=new xd(Dd,Od,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ad=class extends xd{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jd=`\\[\\]\\.:\\/`,Md=RegExp(`[\\[\\]\\.:\\/]`,`g`),Nd=`[^\\[\\]\\.:\\/]`,Pd=`[^`+jd.replace(`\\.`,``)+`]`,Fd=`((?:WC+[\\/:])*)`.replace(`WC`,Nd),Id=`(WCOD+)?`.replace(`WCOD`,Pd),Ld=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Nd),Rd=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Nd),zd=RegExp(`^`+Fd+Id+Ld+Rd+`$`),Bd=[`material`,`materials`,`bones`,`map`],Vd=class{constructor(e,t,n){let r=n||Hd.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Hd=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Md,``)}static parseTrackName(e){let t=zd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Bd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){K(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){K(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){K(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){K(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){K(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;K(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Hd.Composite=Vd,Hd.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Hd.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Hd.prototype.GetterByBindingType=[Hd.prototype._getValue_direct,Hd.prototype._getValue_array,Hd.prototype._getValue_arrayElement,Hd.prototype._getValue_toArray],Hd.prototype.SetterByBindingTypeAndVersioning=[[Hd.prototype._setValue_direct,Hd.prototype._setValue_direct_setNeedsUpdate,Hd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Hd.prototype._setValue_array,Hd.prototype._setValue_array_setNeedsUpdate,Hd.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Hd.prototype._setValue_arrayElement,Hd.prototype._setValue_arrayElement_setNeedsUpdate,Hd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Hd.prototype._setValue_fromArray,Hd.prototype._setValue_fromArray_setNeedsUpdate,Hd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ud=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Fo(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fo(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Wd=new J,Gd=new Es,Kd=new Es,qd=class extends hu{constructor(e){let t=Jd(e),n=new nl,r=[],i=[];for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(0,0,0),i.push(0,0,0))}n.setAttribute(`position`,new Wc(r,3)),n.setAttribute(`color`,new Wc(i,3));let a=new ru({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type=`SkeletonHelper`,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new X(255),s=new X(65280);this.setColors(o,s)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);Kd.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(Gd.multiplyMatrices(Kd,i.matrixWorld),Wd.setFromMatrixPosition(Gd),r.setXYZ(n,Wd.x,Wd.y,Wd.z),Gd.multiplyMatrices(Kd,i.parent.matrixWorld),Wd.setFromMatrixPosition(Gd),r.setXYZ(n+1,Wd.x,Wd.y,Wd.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let n=this.geometry.getAttribute(`color`);for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Jd(e){let t=[];e.isBone===!0&&t.push(e);for(let n=0;n<e.children.length;n++)t.push(...Jd(e.children[n]));return t}var Yd=class extends hu{constructor(e=10,t=10,n=4473924,r=8947848){n=new X(n),r=new X(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new nl;l.setAttribute(`position`,new Wc(s,3)),l.setAttribute(`color`,new Wc(c,3));let u=new ru({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Xd=class extends ko{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Zd(e,t,n,r){let i=Qd(r);switch(n){case da:return e*t;case ga:return e*t/i.components*i.byteLength;case _a:return e*t/i.components*i.byteLength;case va:return e*t*2/i.components*i.byteLength;case ya:return e*t*2/i.components*i.byteLength;case fa:return e*t*3/i.components*i.byteLength;case pa:return e*t*4/i.components*i.byteLength;case ba:return e*t*4/i.components*i.byteLength;case xa:case Sa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ca:case wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Oa:return Math.max(e,16)*Math.max(t,8)/4;case Ta:case Da:return Math.max(e,8)*Math.max(t,8)/2;case ka:case Aa:case Ma:case Na:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case Pa:case Fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Za:case Qa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $a:case eo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case to:case no:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Qd(e){switch(e){case Qi:case $i:return{byteLength:1,components:1};case ta:case ea:case aa:return{byteLength:2,components:1};case oa:case sa:return{byteLength:2,components:4};case ra:case na:case ia:return{byteLength:4,components:1};case la:case ua:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function $d(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ef(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var tf={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},nf={basic:{uniforms:wu([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:tf.meshbasic_vert,fragmentShader:tf.meshbasic_frag},lambert:{uniforms:wu([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:tf.meshlambert_vert,fragmentShader:tf.meshlambert_frag},phong:{uniforms:wu([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tf.meshphong_vert,fragmentShader:tf.meshphong_frag},standard:{uniforms:wu([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tf.meshphysical_vert,fragmentShader:tf.meshphysical_frag},toon:{uniforms:wu([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new X(0)}}]),vertexShader:tf.meshtoon_vert,fragmentShader:tf.meshtoon_frag},matcap:{uniforms:wu([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:tf.meshmatcap_vert,fragmentShader:tf.meshmatcap_frag},points:{uniforms:wu([Z.points,Z.fog]),vertexShader:tf.points_vert,fragmentShader:tf.points_frag},dashed:{uniforms:wu([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tf.linedashed_vert,fragmentShader:tf.linedashed_frag},depth:{uniforms:wu([Z.common,Z.displacementmap]),vertexShader:tf.depth_vert,fragmentShader:tf.depth_frag},normal:{uniforms:wu([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:tf.meshnormal_vert,fragmentShader:tf.meshnormal_frag},sprite:{uniforms:wu([Z.sprite,Z.fog]),vertexShader:tf.sprite_vert,fragmentShader:tf.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tf.background_vert,fragmentShader:tf.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:tf.backgroundCube_vert,fragmentShader:tf.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tf.cube_vert,fragmentShader:tf.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tf.equirect_vert,fragmentShader:tf.equirect_frag},distance:{uniforms:wu([Z.common,Z.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tf.distance_vert,fragmentShader:tf.distance_frag},shadow:{uniforms:wu([Z.lights,Z.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:tf.shadow_vert,fragmentShader:tf.shadow_frag}};nf.physical={uniforms:wu([nf.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:tf.meshphysical_vert,fragmentShader:tf.meshphysical_frag};var rf={r:0,b:0,g:0},af=new Es,of=new Y;of.set(-1,0,0,0,1,0,0,0,1);function sf(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new El(new bu(1,1,1),new ju({name:`BackgroundCubeMaterial`,uniforms:Cu(nf.backgroundCube.uniforms),vertexShader:nf.backgroundCube.vertexShader,fragmentShader:nf.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(af.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(of),l.material.toneMapped=us.getTransfer(i.colorSpace)!==ho,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new El(new Su(2,2),new ju({name:`BackgroundMaterial`,uniforms:Cu(nf.background.uniforms),vertexShader:nf.background.vertexShader,fragmentShader:nf.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=us.getTransfer(i.colorSpace)!==ho,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(rf,Du(e)),n.buffers.color.setClear(rf.r,rf.g,rf.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function cf(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function lf(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function uf(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function df(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ol,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ff=4,pf=6,mf=20,hf=256,gf=new wd,_f=new X,vf=null,yf=0,bf=0,xf=!1,Sf=new J,Cf=new J,wf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Sf}=i;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,yf,bf),this._renderer.xr.enabled=xf,e.scissorTest=!1,Df(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:aa,format:pa,colorSpace:po,depthBuffer:!1},r=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tf(r)),this._blurMaterial=kf(r,e,t),this._ggxMaterial=Of(r,e,t)}return r}_compileMaterial(e){let t=new El(new nl,e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,n,r,i){let a=new xd(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(_f),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new El(new bu,new ml({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(_f),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Df(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Df(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,gf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ff?n-d+ff:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Df(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,gf),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Df(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,gf)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Df(t,3*l*(r>this._lodMax-ff?r-this._lodMax+ff:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,gf)}};function Tf(e){let t=[],n=[],r=e,i=e-ff+1+pf;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Cf.set(1,r,n):e===1?Cf.set(-n,1,-r):e===2?Cf.set(-n,r,1):e===3?Cf.set(-1,r,-n):e===4?Cf.set(-n,-1,r):Cf.set(n,r,-1),Cf.toArray(l,(e*6+t)*3)}}let u=new nl;u.setAttribute(`position`,new Vc(c,3)),u.setAttribute(`outputDirection`,new Vc(l,3)),n.push(new El(u,null)),r>ff&&r--}return{lodMeshes:n,sizeLods:t}}function Ef(e,t,n){let r=new Cs(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Df(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Of(e,t,n){return new ju({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:hf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kf(e,t,n){return new ju({name:`SphericalGaussianBlur`,defines:{SAMPLES:mf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Af(){return new ju({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jf(){return new ju({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nf=class extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bu(5,5,5),i=new ju({name:`CubemapFromEquirect`,uniforms:Cu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new El(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Yi),new kd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Pf(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Nf(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new wf(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new wf(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ff(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Eo(`WebGLRenderer: `+e+` extension not supported.`),t}}}function If(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Uc:Hc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Lf(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Rf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zf(e,t,n){let r=new WeakMap,i=new xs;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ws(h,p,m,u);g.type=ia,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Bf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Vf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Hf(e,t,n,r,i,a){let o=new Cs(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new nl;l.setAttribute(`position`,new Wc([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Wc([0,2,0,0,2,0],2));let u=new Mu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new El(l,u),f=new wd(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Cs(t,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}),c=new Cs(t,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},us.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Vf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Uf=new bs,Wf=new _u(1,1),Gf=new ws,Kf=new Ts,qf=new gu,Jf=[],Yf=[],Xf=new Float32Array(16),Zf=new Float32Array(9),Qf=new Float32Array(4);function $f(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Jf[i];if(a===void 0&&(a=new Float32Array(i),Jf[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ep(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function tp(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function np(e,t){let n=Yf[t];n===void 0&&(n=new Int32Array(t),Yf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ip(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ep(n,t))return;e.uniform2fv(this.addr,t),tp(n,t)}}function ap(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ep(n,t))return;e.uniform3fv(this.addr,t),tp(n,t)}}function op(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ep(n,t))return;e.uniform4fv(this.addr,t),tp(n,t)}}function sp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ep(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tp(n,t)}else{if(ep(n,r))return;Qf.set(r),e.uniformMatrix2fv(this.addr,!1,Qf),tp(n,r)}}function cp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ep(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tp(n,t)}else{if(ep(n,r))return;Zf.set(r),e.uniformMatrix3fv(this.addr,!1,Zf),tp(n,r)}}function lp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ep(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tp(n,t)}else{if(ep(n,r))return;Xf.set(r),e.uniformMatrix4fv(this.addr,!1,Xf),tp(n,r)}}function up(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function dp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ep(n,t))return;e.uniform2iv(this.addr,t),tp(n,t)}}function fp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ep(n,t))return;e.uniform3iv(this.addr,t),tp(n,t)}}function pp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ep(n,t))return;e.uniform4iv(this.addr,t),tp(n,t)}}function mp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ep(n,t))return;e.uniform2uiv(this.addr,t),tp(n,t)}}function gp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ep(n,t))return;e.uniform3uiv(this.addr,t),tp(n,t)}}function _p(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ep(n,t))return;e.uniform4uiv(this.addr,t),tp(n,t)}}function vp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Wf.compareFunction=n.isReversedDepthBuffer()?518:515,a=Wf):a=Uf,n.setTexture2D(t||a,i)}function yp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Kf,i)}function bp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||qf,i)}function xp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Gf,i)}function Sp(e){switch(e){case 5126:return rp;case 35664:return ip;case 35665:return ap;case 35666:return op;case 35674:return sp;case 35675:return cp;case 35676:return lp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return hp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return xp}}function Cp(e,t){e.uniform1fv(this.addr,t)}function wp(e,t){let n=$f(t,this.size,2);e.uniform2fv(this.addr,n)}function Tp(e,t){let n=$f(t,this.size,3);e.uniform3fv(this.addr,n)}function Ep(e,t){let n=$f(t,this.size,4);e.uniform4fv(this.addr,n)}function Dp(e,t){let n=$f(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Op(e,t){let n=$f(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kp(e,t){let n=$f(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ap(e,t){e.uniform1iv(this.addr,t)}function jp(e,t){e.uniform2iv(this.addr,t)}function Mp(e,t){e.uniform3iv(this.addr,t)}function Np(e,t){e.uniform4iv(this.addr,t)}function Pp(e,t){e.uniform1uiv(this.addr,t)}function Fp(e,t){e.uniform2uiv(this.addr,t)}function Ip(e,t){e.uniform3uiv(this.addr,t)}function Lp(e,t){e.uniform4uiv(this.addr,t)}function Rp(e,t,n){let r=this.cache,i=t.length,a=np(n,i);ep(r,a)||(e.uniform1iv(this.addr,a),tp(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wf:Uf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zp(e,t,n){let r=this.cache,i=t.length,a=np(n,i);ep(r,a)||(e.uniform1iv(this.addr,a),tp(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Kf,a[e])}function Bp(e,t,n){let r=this.cache,i=t.length,a=np(n,i);ep(r,a)||(e.uniform1iv(this.addr,a),tp(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||qf,a[e])}function Vp(e,t,n){let r=this.cache,i=t.length,a=np(n,i);ep(r,a)||(e.uniform1iv(this.addr,a),tp(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Gf,a[e])}function Hp(e){switch(e){case 5126:return Cp;case 35664:return wp;case 35665:return Tp;case 35666:return Ep;case 35674:return Dp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return Ap;case 35667:case 35671:return jp;case 35668:case 35672:return Mp;case 35669:case 35673:return Np;case 5125:return Pp;case 36294:return Fp;case 36295:return Ip;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return Vp}}var Up=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sp(t.type)}},Wp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hp(t.type)}},Gp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Kp=/(\w+)(\])?(\[|\.)?/g;function qp(e,t){e.seq.push(t),e.map[t.id]=t}function Jp(e,t,n){let r=e.name,i=r.length;for(Kp.lastIndex=0;;){let a=Kp.exec(r),o=Kp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){qp(n,l===void 0?new Up(s,e,t):new Wp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gp(s),qp(n,e)),n=e}}}var Yp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Jp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zp=37297,Qp=0;function $p(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var em=new Y;function tm(e){us._getMatrix(em,us.workingColorSpace,e);let t=`mat3( ${em.elements.map(e=>e.toFixed(4))} )`;switch(us.getTransfer(e)){case mo:return[t,`LinearTransferOETF`];case ho:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function nm(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$p(e.getShaderSource(t),r)}return i}function rm(e,t){let n=tm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var im={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function am(e,t){let n=im[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var om=new J;function sm(){return us.getLuminanceCoefficients(om),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${om.x.toFixed(4)}, ${om.y.toFixed(4)}, ${om.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(dm).join(`
`)}function lm(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function um(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function dm(e){return e!==``}function fm(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(e){return e.replace(mm,_m)}var gm=new Map;function _m(e,t){let n=tf[t];if(n===void 0){let e=gm.get(t);if(e!==void 0)n=tf[e],G(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return hm(n)}var vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(e){return e.replace(vm,bm)}function bm(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Sm={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cm(e){return Sm[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var wm={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Tm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:wm[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Em={302:`ENVMAP_MODE_REFRACTION`};function Dm(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Em[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Om={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function km(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Om[e.combine]||`ENVMAP_BLENDING_NONE`}function Am(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function jm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cm(n),l=Tm(n),u=Dm(n),d=km(n),f=Am(n),p=cm(n),m=lm(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dm).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dm).join(`
`),_.length>0&&(_+=`
`)):(g=[xm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(dm).join(`
`),_=[xm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:tf.tonemapping_pars_fragment,n.toneMapping===0?``:am(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,tf.colorspace_pars_fragment,rm(`linearToOutputTexel`,n.outputColorSpace),sm(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(dm).join(`
`)),o=hm(o),o=fm(o,n),o=pm(o,n),s=hm(s),s=fm(s,n),s=pm(s,n),o=ym(o),s=ym(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Xp(i,i.VERTEX_SHADER,y),S=Xp(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=nm(i,x,`vertex`),n=nm(i,S,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Yp(i,h),T=um(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Zp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Mm=0,Nm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pm(e),t.set(e,n)),n}},Pm=class{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}};function Fm(e){return e===1030||e===37490||e===36285}function Im(e,t,n,r,i,a){let o=new Ls,s=new Nm,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=nf[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,P=!!i.normalMap,se=!!i.displacementMap,F=!!i.emissiveMap,ce=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,I=me&&!!i.iridescenceThicknessMap,Se=he&&!!i.sheenColorMap,Ce=he&&!!i.sheenRoughnessMap,we=!!i.specularMap,L=!!i.specularColorMap,Te=!!i.specularIntensityMap,R=ge&&!!i.transmissionMap,Ee=ge&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,z=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:us.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:P,displacementMap:se,emissiveMap:F,normalMapObjectSpace:P&&i.normalMapType===1,normalMapTangentSpace:P&&i.normalMapType===0,packedNormalMap:P&&i.normalMapType===0&&Fm(i.normalMap.format),metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:I,sheen:he,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:L,specularIntensityMap:Te,transmission:ge,transmissionMap:R,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:z,alphaHash:B,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:P&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:F&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:I&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:L&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:R&&m(i.transmissionMap.channel),thicknessMapUv:Ee&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(P||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&P===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&us.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:F&&i.emissiveMap.isVideoTexture===!0&&us.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=nf[t];n=Ou.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new jm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Lm(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Rm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Rm),r.length>1&&r.sort(t||zm),i.length>1&&i.sort(t||zm)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Vm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bm,e.set(t,[i])):n>=r.length?(i=new Bm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function Um(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Wm=0;function Gm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Km(e){let t=new Hm,n=Um(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Es,o=new Es;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Gm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Wm++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function qm(e){let t=new Km(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Jm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qm(e),t.set(n,[a])):r>=i.length?(a=new qm(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zm=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Qm=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],$m=new Es,eh=new J,th=new J;function nh(e,t,n){let r=new nu,i=new q,a=new q,o=new xs,s=new Fu,c=new Iu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ju({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Ym,fragmentShader:Xm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new nl;m.setAttribute(`position`,new Vc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new El(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Cs(i.x,i.y,{format:va,type:aa,minFilter:Yi,magFilter:Yi,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new _u(i.x,i.y,ia),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ma,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ki,d.map.depthTexture.magFilter=Ki}else l.isPointLight?(d.map=new Nf(i.x),d.map.depthTexture=new vu(i.x,ra)):(d.map=new Cs(i.x,i.y),d.map.depthTexture=new _u(i.x,i.y,ra)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ma,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Yi,d.map.depthTexture.magFilter=Yi):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ki,d.map.depthTexture.magFilter=Ki);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),eh.setFromMatrixPosition(l.matrixWorld),e.position.copy(eh),th.copy(e.position),th.add(Zm[t]),e.up.copy(Qm[t]),e.lookAt(th),e.updateMatrixWorld(),n.makeTranslation(-eh.x,-eh.y,-eh.z),$m.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix($m,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Cs(i.x,i.y,{format:va,type:aa}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function rh(e,t){function n(){let t=!1,n=new xs,r=null,i=new xs(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Oo[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new xs().fromArray(ie),P=new xs().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let F={};F[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),ce(e.CULL_FACE),he(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function I(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function Se(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||F[t]),i.type=t,i.texture=n)}function Ce(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function R(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function z(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ne(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:I,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:z,texSubImage2D:Te,texSubImage3D:R,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Me,viewport:Ne,reset:Ie}}function ih(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):xo(`canvas`)}function g(e,t,n){let r=1,i=we(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mo:us.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&Se(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{le(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?le(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?le(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ue(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[Ui]:e.REPEAT,[Wi]:e.CLAMP_TO_EDGE,[Gi]:e.MIRRORED_REPEAT},ae={[Ki]:e.NEAREST,[qi]:e.NEAREST_MIPMAP_NEAREST,[Ji]:e.NEAREST_MIPMAP_LINEAR,[Yi]:e.LINEAR,[Xi]:e.LINEAR_MIPMAP_NEAREST,[Zi]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function P(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function F(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=F(n.start,r.width,4),c=F(t.start,r.width,4);n.start<=i+1&&a===c&&F(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function le(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=us.getPrimaries(us.workingColorSpace),r=o.colorSpace===``?null:us.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ce(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);P(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ha,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ce(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Zd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Zd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=we(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=we(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=us.getPrimaries(us.workingColorSpace),r=o.colorSpace===``?null:us.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ce(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);P(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=we(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,xe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),P(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=xe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)pe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?pe(i.__webglFramebuffer[0],t,0):pe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),fe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),fe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,i){let a=r.get(t);n!==void 0&&de(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&me(t)}function ge(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=xe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),P(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)de(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),P(c,a),de(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),P(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else de(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&me(t)}function _e(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ve=[],ye=[];function be(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ve.length=0,ye.length=0,ve.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ve.push(l),ye.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function xe(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Se(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ce(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(us.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function we(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=he,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=de,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ah(e,t){function n(n,r=``){let i,a=us.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var oh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ju({vertexShader:oh,fragmentShader:sh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new El(new Su(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends ko{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ch,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new q,C=null,w=null,T=new xd;T.viewport=new xs;let E=new xd;E.viewport=new xs;let D=[T,E],O=new Ad,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new nc,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new nc,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new nc,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ha:ma,a=_.stencil?ca:ra);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Cs(d.textureWidth,d.textureHeight,{format:pa,type:Qi,depthTexture:new _u(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Cs(f.framebufferWidth,f.framebufferHeight,{format:pa,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new J,te=new J;function ne(e,t,n){N.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=No*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new xd,o.layers.enable(n),o.viewport=new xs,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new yu,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new $d;P.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},uh=new Es,dh=new Y;dh.set(-1,0,0,0,1,0,0,0,1);function fh(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Du(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(uh.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(dh),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ph(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return K(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var mh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hh=null;function gh(){return hh===null&&(hh=new Bl(mh,16,16,va,aa),hh.name=`DFG_LUT`,hh.minFilter=Yi,hh.magFilter=Yi,hh.wrapS=Wi,hh.wrapT=Wi,hh.generateMipmaps=!1,hh.needsUpdate=!0),hh}var _h=class{constructor(e={}){let{canvas:t=So(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ba,ya,_a]),g=new Set([Qi,ra,ta,ca,oa,sa]),_=new Uint32Array(4),v=new Int32Array(4),y=new J,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=fo;let j=0,ee=0,M=null,N=-1,te=null,ne=new xs,re=new xs,ie=null,ae=new X(0),oe=0,P=t.width,se=t.height,F=1,ce=null,le=null,ue=new xs(0,0,P,se),de=new xs(0,0,P,se),fe=!1,pe=new nu,me=!1,he=!1,ge=new Es,_e=new J,ve=new xs,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function xe(){return M===null?F:1}let I=n;function Se(e,n){return t.getContext(e,n)}let Ce,we,L,Te,R,Ee,De,Oe,z,B,ke,Ae,je,Me,Ne,Pe,Fe,Ie,V,Le,Re,ze,Be;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),I===null){let t=`webgl2`;if(I=Se(t,e),I===null)throw Se(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ve()}catch(e){throw t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),K(`WebGLRenderer: `+e.message),e}function Ve(){Ce=new Ff(I),Ce.init(),Re=new ah(I,Ce),we=new uf(I,Ce,e,Re),L=new rh(I,Ce),we.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=I.createFramebuffer(),k=I.createFramebuffer(),A=I.createFramebuffer(),Te=new Rf(I),R=new Lm,Ee=new ih(I,Ce,L,R,we,Re,Te),De=new Pf(T),Oe=new ef(I),ze=new cf(I,Oe),z=new If(I,Oe,Te,ze),B=new Bf(I,z,Oe,ze,Te),Ie=new zf(I,we,Ee),Ne=new df(R),ke=new Im(T,De,Ce,we,ze,Ne),Ae=new fh(T,R),je=new Vm,Me=new Jm(Ce),Fe=new sf(T,De,L,B,p,s),Pe=new nh(T,B,we),Be=new ph(I,Te,we,L),V=new lf(I,Ce,Te),Le=new Lf(I,Ce,Te),Te.programs=ke.programs,T.capabilities=we,T.extensions=Ce,T.properties=R,T.renderLists=je,T.shadowMap=Pe,T.state=L,T.info=Te}m!==1009&&(w=new Hf(m,t.width,t.height,o,r,i));let H=new lh(T,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Ce.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ce.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(P,se,!1))},this.getSize=function(e){return e.set(P,se)},this.setSize=function(e,n,r=!0){H.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(P=e,se=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(P*F,se*F).floor()},this.setDrawingBufferSize=function(e,n,r){P=e,se=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),L.viewport(ne.copy(ue).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(de)},this.setScissor=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.scissor(re.copy(de).multiplyScalar(F).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(e){L.setScissorTest(fe=e)},this.setOpaqueSort=function(e){ce=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Fe.dispose(),je.dispose(),Me.dispose(),R.dispose(),De.dispose(),B.dispose(),ze.dispose(),Be.dispose(),ke.dispose(),H.dispose(),H.removeEventListener(`sessionstart`,Ze),H.removeEventListener(`sessionend`,Qe),$e.stop()};function He(e){e.preventDefault(),wo(`WebGLRenderer: Context Lost.`),E=!0}function Ue(){wo(`WebGLRenderer: Context Restored.`),E=!1;let e=Te.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;Ve(),Te.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function We(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),R.remove(e)}function qe(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ye);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=z.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=V;if(c!==null&&(h=Oe.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*xe()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*xe()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Ce.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Oe.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),me===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),he=this.localClippingEnabled,me=Ne.init(this.clippingPlanes,he),me===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Je(o,n,t,e),r.add(o)}else Je(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ce.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ye=null;function Xe(e){Ye&&Ye(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new $d;$e.setAnimationLoop(Xe),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Ye=e,H.setAnimationLoop(e),e===null?$e.stop():$e.start()},H.addEventListener(`sessionstart`,Ze),H.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=H.enabled===!0&&H.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(t),t=H.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=Ee.getTextureUnits(),C.push(x),ge.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),pe.setFromProjectionMatrix(ge,vo,t.reversedDepth),he=this.localClippingEnabled,me=Ne.init(this.clippingPlanes,he),b=je.get(e,S.length),b.init(),S.push(b),H.enabled===!0&&H.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ce,le),be=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,be&&Fe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),me===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}be&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),be&&Fe.render(e),tt(b,e,t)}M!==null&&ee===0&&(Ee.updateMultisampleRenderTarget(M),Ee.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),ze.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],Ee.setTextureUnits(x.state.textureUnits),me===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(pe)){r&&ve.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ge);let i=B.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ve.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(pe))){let i=B.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ve.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ve.copy(e.boundingSphere.center)),ve.applyMatrix4(e.matrixWorld).applyMatrix4(ge)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ve.z,s,t)}}else a.visible&&b.push(e,i,a,n,ve.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),me===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&L.viewport(ne.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ce.has(`EXT_color_buffer_half_float`)||Ce.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Cs(1,1,{generateMipmaps:!0,type:e?aa:Qi,minFilter:Zi,samples:Math.max(4,we.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:us.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),be&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),me===!0&&Ne.setGlobalState(T.clippingPlanes,r),rt(e,n,r),Ee.updateMultisampleRenderTarget(a),Ee.updateRenderTargetMipmap(a),Ce.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ee.updateMultisampleRenderTarget(a),Ee.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=ye);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=De.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Yp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=ye),Ee.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:us.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=De.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=x.state.lights;if(me===!0&&(he===!0||e!==te)){let t=e===te&&r.id===N;Ne.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(I,`projectionMatrix`,e.projectionMatrix),O.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(I,_e.setFromMatrixPosition(e.matrixWorld)),we.logarithmicDepthBuffer&&O.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Ee),y.state.directionalShadowMap.length>0&&O.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Ee),y.state.spotShadowMap.length>0&&O.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Ee),y.state.pointShadowMap.length>0&&O.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Ee)),i.isSkinnedMesh){O.setOptional(I,i,`bindMatrix`),O.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(I,`boneTexture`,e.boneTexture,Ee))}i.isBatchedMesh&&(O.setOptional(I,i,`batchingTexture`),O.setValue(I,`batchingTexture`,i._matricesTexture,Ee),O.setOptional(I,i,`batchingIdTexture`),O.setValue(I,`batchingIdTexture`,i._indirectTexture,Ee),O.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(I,`batchingColorTexture`,i._colorsTexture,Ee));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ie.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=gh()),w){if(O.setValue(I,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(k,E),a&&r.fog===!0&&Ae.refreshFogUniforms(k,a),Ae.refreshMaterialUniforms(k,r,F,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Yp.upload(I,ot(v),k,Ee)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Yp.upload(I,ot(v),k,Ee),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(I,`center`,i.center),O.setValue(I,`modelViewMatrix`,i.modelViewMatrix),O.setValue(I,`normalMatrix`,i.normalMatrix),O.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,S),Be.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,L.viewport(ne),L.scissor(re),L.setScissorTest(ie),N=-1;return}if(o.__webglFramebuffer===void 0)Ee.setupRenderTarget(e);else if(o.__hasExternalTextures)Ee.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ee.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ee.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(ue).multiplyScalar(F).floor(),re.copy(de).multiplyScalar(F).floor(),ie=fe;if(n!==0&&(r=O),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(ne),L.scissor(re),L.setScissorTest(ie),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}N=-1};function ft(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=we.textureFormatReadable(e.format),t.__typeReadable=we.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),a)}finally{let e=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Re.convert(l),Re.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Do(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ee.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Re.convert(t.format),_=Re.convert(t.type),v;t.isData3DTexture?(Ee.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ee.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Ee.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,k),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Ee.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ee.setTextureCube(e,0):e.isData3DTexture?Ee.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ee.setTexture2DArray(e,0):Ee.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,L.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return vo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=us._getDrawingBufferColorSpace(e),t.unpackColorSpace=us._getUnpackColorSpace()}},vh={type:`change`},yh={type:`start`},bh={type:`end`},xh=new pl,Sh=new ol,Ch=Math.cos(70*ns.DEG2RAD),wh=new J,Th=2*Math.PI,Eh={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dh=1e-6,Oh=class extends Xd{constructor(e,t=null){super(e,t),this.state=Eh.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new rs,this._lastTargetPosition=new J,this._quat=new rs().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ud,this._sphericalDelta=new Ud,this._scale=1,this._panOffset=new J,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new J,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ah.bind(this),this._onPointerDown=kh.bind(this),this._onPointerUp=jh.bind(this),this._onContextMenu=Rh.bind(this),this._onMouseWheel=Ph.bind(this),this._onKeyDown=Fh.bind(this),this._onTouchStart=Ih.bind(this),this._onTouchMove=Lh.bind(this),this._onMouseDown=Mh.bind(this),this._onMouseMove=Nh.bind(this),this._interceptControlDown=zh.bind(this),this._interceptControlUp=Bh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Eh.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vh),this.update(),this.state=Eh.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wh.copy(t).sub(this.target),wh.applyQuaternion(this._quat),this._spherical.setFromVector3(wh),this.autoRotate&&this.state===Eh.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Th:n>Math.PI&&(n-=Th),r<-Math.PI?r+=Th:r>Math.PI&&(r-=Th),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(wh.setFromSpherical(this._spherical),wh.applyQuaternion(this._quatInverse),t.copy(this.target).add(wh),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=wh.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new J(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new J(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=wh.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(xh.origin.copy(this.object.position),xh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xh.direction))<Ch?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),xh.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dh||this._lastTargetPosition.distanceToSquared(this.target)>Dh?(this.dispatchEvent(vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Th/60/60*this.autoRotateSpeed:Th/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wh.setFromMatrixColumn(t,0),wh.multiplyScalar(-e),this._panOffset.add(wh)}_panUp(e,t){this.screenSpacePanning===!0?wh.setFromMatrixColumn(t,1):(wh.setFromMatrixColumn(t,0),wh.crossVectors(this.object.up,wh)),wh.multiplyScalar(e),this._panOffset.add(wh)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;wh.copy(r).sub(this.target);let i=wh.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Th*this._rotateDelta.x/t.clientHeight),this._rotateUp(Th*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Th*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Th*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Th*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Th*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Th*this._rotateDelta.x/t.clientHeight),this._rotateUp(Th*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Ah(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function jh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(bh),this.state=Eh.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Mh(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Eh.DOLLY;break;case Bi.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Eh.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Eh.ROTATE}break;case Bi.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Eh.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Eh.PAN}break;default:this.state=Eh.NONE}this.state!==Eh.NONE&&this.dispatchEvent(yh)}function Nh(e){switch(this.state){case Eh.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Eh.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Eh.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Ph(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Eh.NONE&&(e.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(bh))}function Fh(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ih(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Eh.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Eh.TOUCH_PAN;break;default:this.state=Eh.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Eh.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Eh.TOUCH_DOLLY_ROTATE;break;default:this.state=Eh.NONE}break;default:this.state=Eh.NONE}this.state!==Eh.NONE&&this.dispatchEvent(yh)}function Lh(e){switch(this._trackPointer(e),this.state){case Eh.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Eh.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Eh.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Eh.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Eh.NONE}}function Rh(e){this.enabled!==!1&&e.preventDefault()}function zh(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Bh(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Vh=class extends cc{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new bu;e.deleteAttribute(`uv`);let t=new Nu({side:1}),n=new Nu,r=new Cd(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new El(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Ql(e,n,6),o=new $s;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new El(e,Hh(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new El(e,Hh(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new El(e,Hh(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new El(e,Hh(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new El(e,Hh(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new El(e,Hh(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hh(e){return new Pu({color:0,emissive:16777215,emissiveIntensity:e})}var Uh=class{canvas;textureUrl;renderer;scene=new cc;camera=new xd(30,1,.01,100);controls;mesh=null;helper=null;bones=[];animator=null;clip=null;clipStart=0;speed=1;rootMotion=!1;lastFrame=null;blendFrom=null;blendStart=0;onTick;loader=new cd;texCache=new Map;framedHeight=0;wireframe=!1;showSkeleton=!1;constructor(e,t){this.canvas=e,this.textureUrl=t,this.renderer=new _h({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1.1,this.scene.background=new X(`#2b2f38`);let n=new wf(this.renderer);this.scene.environment=n.fromScene(new Vh,.04).texture,this.scene.environmentIntensity=.55;let r=new Ed(`#fff4ea`,2.4);r.position.set(2,4,3),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-4e-4,r.shadow.normalBias=.015,Object.assign(r.shadow.camera,{left:-1.5,right:1.5,top:2.5,bottom:-.5,near:.5,far:12}),this.scene.add(r);let i=new Ed(`#b8c8ff`,1.2);i.position.set(-2.5,3,-3),this.scene.add(i);let a=new El(new xu(4,64).rotateX(-Math.PI/2),new Nu({color:`#363b46`,roughness:1}));a.receiveShadow=!0,this.scene.add(a);let o=new Yd(8,32,`#4c5262`,`#3c414d`);o.material.transparent=!0,o.material.opacity=.5,o.position.y=.001,this.scene.add(o),this.controls=new Oh(this.camera,e),this.controls.enableDamping=!0,this.controls.minDistance=.3,this.camera.position.set(1.4,1.3,4.2),this.controls.target.set(0,.9,0),new ResizeObserver(()=>this.resize()).observe(e),this.resize();let s=()=>{this.tick(),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(s)};s()}resize(){let{clientWidth:e,clientHeight:t}=this.canvas;e&&t&&(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}texture(e,t){let n=e+t,r=this.texCache.get(n);return r||(r=this.loader.load(this.textureUrl(e)),r.colorSpace=t?fo:``,r.anisotropy=8,r.wrapS=r.wrapT=Ui,this.texCache.set(n,r)),r}show(e){let{mesh:t}=e;this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.forEach(e=>e.dispose()));let n=new nl;n.setAttribute(`position`,new Vc(t.positions,3)),n.setAttribute(`normal`,new Vc(t.normals,3)),n.setAttribute(`uv`,new Vc(t.uvs,2)),t.morphs&&(n.morphAttributes.position=t.morphs.deltas.map((e,n)=>{let r=new Vc(e,3);return r.name=t.morphs.names[n],r}),n.morphTargetsRelative=!0);let r=t.groups.reduce((e,t)=>e+t.indices.length,0),i=new Uint32Array(r),a=0;for(let e of t.groups)i.set(e.indices,a),n.addGroup(a,e.indices.length,e.material),a+=e.indices.length;n.setIndex(new Vc(i,1));let o=t.materials.map(e=>{let t=new Nu({name:e.name,color:new X(e.color),roughness:e.roughness,metalness:e.metalness,map:e.map?this.texture(e.map,!0):null,normalMap:e.normalMap?this.texture(e.normalMap,!1):null,side:e.doubleSided?2:0,emissive:e.emissive?new X(e.emissive):new X(0),emissiveIntensity:e.emissive?1.6:0,wireframe:this.wireframe});return e.doubleSided&&(t.shadowSide=0),e.alpha===`mask`?(t.alphaTest=.5,t.alphaToCoverage=!0):e.alpha===`blend`&&(t.transparent=!0,t.opacity=e.opacity??1,t.depthWrite=!1,e.map&&(t.alphaTest=.01)),t});if(e.rig&&t.joints&&t.weights){n.setAttribute(`skinIndex`,new Hc(t.joints,4)),n.setAttribute(`skinWeight`,new Wc(t.weights,4));let r=new Rl(n,o);this.bones=e.rig.bones.map((t,n)=>{let r=new zl;r.name=t.name;let{t:i,R:a}=Cn(e.rig.bones,n);return r.position.set(...i),r.quaternion.set(...Sn(a)),r}),e.rig.bones.forEach((e,t)=>(e.parent>=0?this.bones[e.parent]:r).add(this.bones[t])),r.updateMatrixWorld(!0),r.bind(new Ul(this.bones)),this.mesh=r}else this.bones=[],this.mesh=new El(n,o);t.morphs?.defaults.forEach((e,t)=>this.mesh.morphTargetInfluences&&(this.mesh.morphTargetInfluences[t]=e)),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.drawSkeleton(),this.animator=e.rig&&this.bones.length?new bi(e.rig,e.face):null,this.tick(),Math.abs(e.height-this.framedHeight)>.2&&(this.framedHeight=e.height,this.frame())}faceMode=!1;frame(){let e=this.framedHeight||1.75;if(this.faceMode)this.controls.target.set(0,e*.93,.02),this.camera.position.set(.22,e*.95,.7);else{let t=e*2.45+.5;this.controls.target.set(0,e*.5,0),this.camera.position.set(t*.33,e*.6,t)}}focusFace(e){this.faceMode=e,this.frame()}drawSkeleton(){this.helper&&=(this.scene.remove(this.helper),this.helper.dispose(),null),this.mesh&&this.bones.length&&(this.helper=new qd(this.mesh),this.helper.material.depthTest=!1,this.helper.renderOrder=10,this.helper.visible=this.showSkeleton,this.scene.add(this.helper))}tick(){if(!this.animator)return;let e=performance.now()/1e3,t=0,n;if(this.clip){let r=(e-this.clipStart)*this.speed;t=this.clip.loop?r%this.clip.duration:Math.min(r,this.clip.duration),n=this.animator.frame(this.clip,t,{rootMotion:this.rootMotion,faceTime:e})}else n={...this.animator.bind(),morph:this.animator.restFace(e)};if(this.blendFrom){let t=Math.min(1,(e-this.blendStart)/.25);if(t>=1||this.blendFrom.rot.length!==n.rot.length)this.blendFrom=null;else{let e=this.blendFrom,r=new rs,i=new rs;n={rot:n.rot.map((n,a)=>(r.set(...e.rot[a]),i.set(...n),r.slerp(i,t),[r.x,r.y,r.z,r.w])),rootPos:new Map([...n.rootPos].map(([n,r])=>{let i=e.rootPos.get(n)??r;return[n,[i[0]+(r[0]-i[0])*t,i[1]+(r[1]-i[1])*t,i[2]+(r[2]-i[2])*t]]})),morph:n.morph}}}if(this.lastFrame=n,this.rootMotion&&this.clip?.travel){let e=[...n.rootPos.values()][0];e&&this.controls.target.set(e[0],this.controls.target.y,e[2])}n.rot.forEach((e,t)=>this.bones[t].quaternion.set(e[0],e[1],e[2],e[3]));for(let[e,t]of n.rootPos)this.bones[e].position.set(t[0],t[1],t[2]);let r=this.mesh?.morphTargetInfluences;if(r){let t=n.morph??this.animator.face?.defaults??[],i=this.blendFrom?Math.min(1,(e-this.blendStart)/.25):1;t.forEach((e,t)=>r[t]=r[t]+(e-r[t])*i)}this.onTick?.(this.clip,t)}play(e){this.lastFrame&&(this.blendFrom=this.lastFrame,this.blendStart=performance.now()/1e3),this.clip=e,this.clipStart=performance.now()/1e3,this.tick()}get playing(){return this.clip}setWireframe(e){if(this.wireframe=e,this.mesh)for(let t of this.mesh.material)t.wireframe=e}setSkeleton(e){this.showSkeleton=e,this.helper&&(this.helper.visible=e)}get canvasElement(){return this.canvas}characterRect(e=.08){if(!this.mesh)return null;this.mesh.updateMatrixWorld(!0);let t=new Cc().setFromObject(this.mesh);if(t.isEmpty())return null;let n=this.canvas.width,r=this.canvas.height,i=1/0,a=1/0,o=-1/0,s=-1/0;for(let e=0;e<8;e++){let c=new J(e&1?t.max.x:t.min.x,e&2?t.max.y:t.min.y,e&4?t.max.z:t.min.z).project(this.camera),l=(c.x+1)/2*n,u=(1-c.y)/2*r;i=Math.min(i,l),o=Math.max(o,l),a=Math.min(a,u),s=Math.max(s,u)}let c=(o-i)*e,l=(s-a)*e;return i=Math.max(0,i-c),a=Math.max(0,a-l),o=Math.min(n,o+c),s=Math.min(r,s+l),o>i&&s>a?{x:i,y:a,w:o-i,h:s-a}:null}async snapshot(){let e=await new Promise(e=>this.canvas.toBlob(e,`image/png`));return e?new Uint8Array(await e.arrayBuffer()):new Uint8Array}},Wh=e=>document.querySelector(e);function Q(e,t={},...n){let r=document.createElement(e);return Object.assign(r,t),r.append(...n),r}var Gh=new URL(`/Feliz-cumplea-os-/avatar-lab/assets/`,location.href).href,Kh=await new L(we(Gh)).initCatalog(),qh=new ki(Kh,Gh),Jh=Kh.catalog,Yh=new Uh(Wh(`#viewport`),e=>Kh.textureUrl(e)),$=$h()??{...jt,name:`Athletic man`},Xh,Zh=Gg(),Qh=[];function $h(){try{let e=localStorage.getItem(`3dgen.human`);return e?{...jt,...JSON.parse(e)}:null}catch{return null}}var eg=(()=>{let e=Wh(`#status`),t=Wh(`#status-text`),n=Wh(`#busy-bar`),r=0,i=0,a=!1,o=()=>{i=performance.now(),e.classList.add(`show`),n.classList.add(`show`)};return{start(n){t.textContent=n,!a&&(a=!0,clearTimeout(r),e.classList.contains(`show`)||(r=window.setTimeout(o,160)))},stage(e){t.textContent!==e&&(t.textContent=e,t.classList.remove(`swap`),t.offsetWidth,t.classList.add(`swap`))},end(){a=!1,clearTimeout(r);let t=e.classList.contains(`show`)?Math.max(0,350-(performance.now()-i)):0;r=window.setTimeout(()=>{a||(e.classList.remove(`show`),n.classList.remove(`show`))},t)}}})(),tg=!1,ng=!1,rg=[],ig=()=>tg?new Promise(e=>rg.push(e)):Promise.resolve();function ag(){ng=!0,tg||og()}async function og(){for(tg=!0,eg.start(`Updating…`);ng;){ng=!1;let e=$,t=performance.now(),n;try{n=await qh.build(e,e=>{eg.stage(`${e}…`),Xh||(Wh(`#loading-text`).textContent=`${e}…`)})}catch(e){console.error(e),eg.stage(`Failed: ${e.message}`),Xh||(Wh(`#loading-text`).textContent=`Could not build the character: ${e.message}`);continue}sg(n,e,performance.now()-t)}tg=!1,eg.end(),rg.forEach(e=>e()),rg=[]}function sg(e,t,n){{Xh=e,Yh.show(e),Wh(`#loading`).hidden=!0,jg.style.display=e.rig?``:`none`,Zg(),e.rig&&!Yh.playing&&Ng!==`bind`&&Fg(Ng);let r=t.skin===`auto`?` · skin: ${Si(t,Jh.skins).name}`:``;Wh(`#stats`).textContent=`${(e.height*100).toFixed(0)} cm · ${Mt(t.age).toFixed(0)} yrs · ${xi(e.mesh).toLocaleString()} tris · ${e.mesh.materials.length} materials · ${n.toFixed(0)} ms${r}`;try{localStorage.setItem(`3dgen.human`,JSON.stringify(t))}catch{}}}function cg(e){$={...$,...e},(`age`in e||`outfit`in e)&&Qh.forEach(e=>e()),ag()}function lg(e){$=e,Qh.forEach(e=>e()),ag()}function ug(e,t,n,r=0,i=1,a=.01,o=e=>e.toFixed(2)){let s=Q(`input`,{type:`range`,min:String(r),max:String(i),step:String(a)}),c=Q(`output`),l=()=>{s.value=String(t()),c.textContent=o(t())};return s.addEventListener(`input`,()=>{n(Number(s.value)),c.textContent=o(Number(s.value))}),s.addEventListener(`dblclick`,()=>{n(r<0?0:(r+i)/2),l()}),Qh.push(l),l(),Q(`div`,{className:`ctl`},Q(`span`,{textContent:e}),s,c)}function dg(e,t,n=!0){let r=Q(`input`,{type:`color`});return r.addEventListener(n?`input`:`change`,()=>cg({[t]:r.value})),Qh.push(()=>r.value=$[t]),r.value=$[t],Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:e}),r)}function fg(e,t,n=[]){let r=Q(`div`,{className:`picker`}),i=new Map;for(let a of[...n,...e]){let e=`thumb`in a&&a.thumb?Q(`img`,{src:Kh.source.url(a.thumb),alt:``,loading:`lazy`}):a.name,n=Q(`button`,{title:a.name},e,Q(`span`,{className:`cap`,textContent:a.name}));n.addEventListener(`click`,()=>cg({[t]:a.id})),i.set(a.id,n),r.append(n)}let a=()=>i.forEach((e,n)=>e.classList.toggle(`on`,$[t]===n));return Qh.push(a),a(),r.addEventListener(`click`,()=>requestAnimationFrame(a)),r}function pg(e,t,...n){let r=Q(`details`,{open:t});return r.append(Q(`summary`,{textContent:e}),Q(`div`,{},...n)),r}var mg=[{id:`none`,name:`None`}],hg=(e,t)=>ug(e,()=>$[t],e=>cg({[t]:e})),gg=Wh(`#controls`),_g=Q(`input`,{type:`checkbox`});_g.addEventListener(`change`,()=>cg({pubicHair:_g.checked})),Qh.push(()=>_g.checked=$.pubicHair),_g.checked=$.pubicHair,gg.append(pg(`Body`,!0,ug(`Gender`,()=>$.gender,e=>cg({gender:e}),0,1,.01,e=>e<.35?`female`:e>.65?`male`:`mixed`),ug(`Age`,()=>Mt($.age),e=>cg({age:Nt(e)}),12,90,1,e=>`${e.toFixed(0)} y`),hg(`Muscle`,`muscle`),hg(`Weight`,`weight`),hg(`Height`,`height`),hg(`Proportions`,`proportions`),hg(`Breast size`,`breastSize`),hg(`Breast firmness`,`breastFirmness`)),pg(`Ethnicity`,!1,Q(`div`,{className:`hint`,textContent:`Blended mix; also picks the matching skin texture in Auto mode.`}),hg(`African`,`african`),hg(`Asian`,`asian`),hg(`Caucasian`,`caucasian`)),pg(`Skin & eyes`,!0,fg(Jh.skins,`skin`,[{id:`auto`,name:`Auto`}]),dg(`Skin tint`,`skinTint`),Q(`div`,{className:`sub`,textContent:`Eyes`}),fg(Jh.eyes,`eyes`),Q(`div`,{className:`sub`,textContent:`Eyebrows`}),fg(Jh.eyebrows,`eyebrows`,mg),Q(`div`,{className:`sub`,textContent:`Eyelashes`}),fg(Jh.eyelashes,`eyelashes`,mg)),pg(`Hair`,!0,Cg()),pg(`Expression`,!0,vg(`Expression`,Ot.map(e=>[e,kt[e]]),()=>$.expression,e=>cg({expression:e})),Q(`div`,{className:`hint`,textContent:`The resting face in the viewer and in every exported animation. Characters also blink and glance around.`}),vg(`Teeth`,[[`none`,`None`],...(Jh.teeth??[]).map(e=>[e.id,e.id===`teeth_base`?`Natural`:e.name.replace(/^Teeth shape /,`Shape `)])],()=>$.teeth,e=>cg({teeth:e}))),pg(`Facial hair`,!1,vg(`Style`,xt.map(e=>[e,St[e]]),()=>$.facialHair,e=>cg({facialHair:e})),dg(`Beard colour`,`beardColor`,!1)),pg(`Tattoos`,!1,wg()),pg(`Clothing`,!0,Q(`div`,{className:`hint`,textContent:`Pick a full outfit, or "Separate pieces" to combine tops, bottoms, wrappers and accessories.`}),fg(Jh.outfits,`outfit`,[{id:`none`,name:`Separate pieces`}]),dg(`Outfit tint`,`outfitTint`),bg(),Q(`div`,{className:`sub`,textContent:`Footwear`}),fg(Jh.shoes,`shoes`,[{id:`none`,name:`Barefoot`},{id:`sandals`,name:`Sandals`},{id:`combat_boots`,name:`Combat boots`}]),Q(`div`,{className:`sub`,textContent:`Hat`}),fg(Jh.hats,`hat`,mg)),pg(`Anatomía íntima`,!1,vg(`Anatomía`,[[`auto`,`Según el cuerpo`],[`male`,`Masculina`],[`female`,`Femenina`]],()=>$.intimateType,e=>cg({intimateType:e})),ug(`Tamaño`,()=>$.intimateSize,e=>cg({intimateSize:e}),.65,1.5,.01,e=>String(e.toFixed(2))+`×`),ug(`Forma`,()=>$.intimateForm,e=>cg({intimateForm:e}),0,1,.01),dg(`Tinte de piel`,`intimateTint`,!1),Q(`label`,{className:`acc`},_g,`Vello púbico`),ug(`Densidad del vello`,()=>$.pubicHairAmount,e=>cg({pubicHairAmount:e}),0,1,.01,e=>String(Math.round(e*100))+`%`),ug(`Largo del vello`,()=>$.pubicHairLength,e=>cg({pubicHairLength:e}),.35,1.5,.01,e=>String(e.toFixed(2))+`×`),dg(`Color del vello`,`pubicHairColor`,!1),Q(`div`,{className:`hint`,textContent:`Malla generada dentro del proyecto, sin descargar modelos adicionales. Para verla: prenda inferior en None y Underwear desactivado.`})),pg(`Accessories`,!0,Sg(),Tg()),pg(`Weapon`,!1,Dg()));function vg(e,t,n,r){let i=Q(`select`);for(let[e,n]of t)i.append(new Option(n,e));return i.addEventListener(`change`,()=>r(i.value)),Qh.push(()=>i.value=n()),i.value=n(),Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:e}),i)}function yg(e){let t=Q(`div`,{className:`style-box`}),n=``,r=()=>{let r=e();if(r===n){t.querySelectorAll(`[data-sync]`).forEach(e=>e.dispatchEvent(new Event(`sync`)));return}n=r,t.replaceChildren();let i=gn.get(r);if(!i)return;let a=()=>$.garmentStyles[r]??{},o=e=>cg({garmentStyles:{...$.garmentStyles,[r]:{...a(),...e}}});if(i.patterns.length>1){let e=Q(`select`);e.dataset.sync=`1`;for(let t of i.patterns.filter(e=>mt.includes(e)))e.append(new Option(t,t));e.value=a().pattern??i.patterns[0],e.addEventListener(`change`,()=>o({pattern:e.value})),e.addEventListener(`sync`,()=>e.value=a().pattern??i.patterns[0]),t.append(Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:`Pattern`}),e))}for(let[e,n,r]of[[`color`,`Colour`,i.color],[`color2`,`Accent`,i.color2]]){let i=Q(`input`,{type:`color`,value:a()[e]??r});i.dataset.sync=`1`,i.addEventListener(`input`,()=>o({[e]:i.value})),i.addEventListener(`sync`,()=>i.value=a()[e]??r),t.append(Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:n}),i))}};return Qh.push(r),r(),t}function bg(){let e=(e,t)=>[[`none`,t],...un.filter(t=>t.slot===e&&t.id!==`briefs`).map(e=>[e.id,e.label])],t=e=>{cg({...e,outfit:`none`}),Qh.forEach(e=>e())},n=Q(`div`,{className:`hint`}),r=Q(`div`,{className:`pieces`},n,Q(`div`,{className:`sub`,textContent:`Top`}),vg(`Top`,e(`top`,`None (shirtless / topless)`),()=>$.top,e=>t({top:e})),yg(()=>$.top),Q(`div`,{className:`hint`,textContent:`Topless is available for adult characters; under-18 female characters automatically get a top.`}),Q(`div`,{className:`sub`,textContent:`Bottom`}),vg(`Bottom`,e(`bottom`,`None`),()=>$.bottom,e=>t({bottom:e})),yg(()=>$.bottom),xg()),i=()=>{let e=$.outfit!==`none`;r.classList.toggle(`inactive`,e),n.textContent=e?`A full outfit is selected. Choosing a top or bottom switches to separate pieces.`:``,n.style.display=e?``:`none`};return Qh.push(i),i(),r}function xg(){let e=Q(`input`,{type:`checkbox`}),t=Q(`div`,{className:`hint`});e.addEventListener(`change`,()=>cg({underwear:e.checked}));let n=()=>{let n=Mt($.age)<18;e.checked=$.underwear||n,e.disabled=n,t.textContent=n?`Under-18 characters always wear underwear.`:`Untick for no underwear (bottomless), adults only. Also applies under wrappers, aprons and loincloths.`};return Qh.push(n),n(),Q(`div`,{},Q(`label`,{className:`acc`},e,`Underwear (briefs)`),t)}function Sg(){let e=Q(`div`,{});for(let t of un.filter(e=>e.slot===`acc`)){let n=Q(`input`,{type:`checkbox`});n.addEventListener(`change`,()=>{cg({accessories:$.accessories.includes(t.id)?$.accessories.filter(e=>e!==t.id):[...$.accessories,t.id]})}),Qh.push(()=>n.checked=$.accessories.includes(t.id)),n.checked=$.accessories.includes(t.id);let r=Q(`label`,{className:`acc`},n,t.label);if(e.append(r),!t.patterns.includes(`beadbands`)){let n=yg(()=>$.accessories.includes(t.id)?t.id:``);e.append(n)}}return e}function Cg(){let e=dg(`Hair tint`,`hairTint`),t=dg(`Hair colour`,`hairColor`,!1),n=()=>{let n=bt($.hair);e.style.display=n||$.hair===`none`?`none`:``,t.style.display=n?``:`none`};Qh.push(n),n();let r=fg(Jh.hair,`hair`,[...mg,...yt]);return r.addEventListener(`click`,()=>requestAnimationFrame(n)),Q(`div`,{},r,e,t)}function wg(){let e=Q(`div`,{}),t=Q(`div`,{className:`hint`}),n=[];for(let t of Tt){let r=Q(`input`,{type:`checkbox`});r.addEventListener(`change`,()=>{cg({tattoos:$.tattoos.includes(t)?$.tattoos.filter(e=>e!==t):[...$.tattoos,t]})}),n.push(r),e.append(Q(`label`,{className:`acc`},r,Et[t]))}let r=()=>{let e=Mt($.age)>=18;Tt.forEach((t,r)=>{n[r].checked=$.tattoos.includes(t),n[r].disabled=!e}),t.textContent=e?`Painted on the skin as a separate overlay layer, so they follow body shape and animation.`:`Tattoos are available for adult (18+) characters only.`};return Qh.push(r),r(),e.addEventListener(`change`,()=>requestAnimationFrame(r)),e.append(dg(`Ink colour`,`tattooInk`,!1),t),e}function Tg(){return Q(`div`,{},Q(`div`,{className:`sub`,textContent:`Earrings`}),vg(`Earrings`,Ct.map(e=>[e,wt[e]]),()=>$.earrings,e=>cg({earrings:e})),vg(`Metal`,[[`gold`,`Gold`],[`silver`,`Silver`]],()=>$.earringMetal,e=>cg({earringMetal:e})))}var Eg={rifle:`rifle_idle`,pistol:`pistol_idle`,sword:`sword_idle`,knife:`sword_idle`};function Dg(){return Q(`div`,{},vg(`Held weapon`,Xe.map(e=>[e,Ze[e]]),()=>$.weapon,e=>{cg({weapon:e});let t=Eg[e];t&&$.rig!==`none`&&Fg(t)}),Q(`div`,{className:`hint`,textContent:`Held in the right hand on a "WeaponR" socket bone, the standard way games attach props. Shooter / sword animations are fitted to it. Export can keep it in the hand or save it as a separate prop file.`}))}var Og=new Map;for(let e of Jh.sliders){let t=Og.get(e.category)??[];t.push(Q(`div`,{className:`sub`,textContent:e.group}));for(let n of e.sliders)t.push(ug(n.label,()=>$.modifiers[n.id]??0,e=>cg({modifiers:{...$.modifiers,[n.id]:e}}),n.bipolar?-1:0,1));Og.set(e.category,t)}for(let[e,t]of Og)gg.append(pg(`${e} details`,!1,...t));var kg=Q(`button`,{textContent:`Reset detail sliders`});kg.addEventListener(`click`,()=>lg({...$,modifiers:{}}));var Ag=Q(`select`);for(let e of At)Ag.append(new Option({low:`Low (game LOD, ~5k tris)`,medium:`Medium (~30k tris)`,high:`High / HD (~120k tris, subdivided)`}[e],e));Ag.addEventListener(`change`,()=>cg({detail:Ag.value})),Qh.push(()=>Ag.value=$.detail),Ag.value=$.detail;var jg=Wh(`#anim-bar`),Mg=Q(`div`,{className:`anim-progress`},Q(`div`)),Ng=`idle`,Pg=new Map,Fg=e=>{Ng=e,Yh.play(e===`bind`?null:Zr.get(e)??null),Pg.forEach((t,n)=>t.classList.toggle(`on`,n===e)),Lg.value=Ig.includes(e)?``:e,Lg.classList.toggle(`on`,!Ig.includes(e))},Ig=[`bind`,`idle`,`walk`,`run`];for(let e of Ig){let t=Q(`button`,{textContent:e===`bind`?`Bind pose`:Zr.get(e).name});t.addEventListener(`click`,()=>Fg(e)),Pg.set(e,t),jg.append(t)}var Lg=Q(`select`,{title:`All animations`});Lg.append(new Option(`More animations…`,``));for(let e of[...new Set(Xr.map(e=>e.category))]){let t=Q(`optgroup`,{label:e});for(let n of Xr.filter(t=>t.category===e&&!Ig.includes(t.id)))t.append(new Option(n.name,n.id));Lg.append(t)}Lg.addEventListener(`change`,()=>Lg.value&&Fg(Lg.value)),jg.append(Lg);var Rg=Q(`input`,{type:`checkbox`});Rg.addEventListener(`change`,()=>qg({rootMotion:Rg.checked})),Yh.rootMotion=Zh.rootMotion;var zg=Q(`label`,{className:`acc rm`,title:`Locomotion clips travel forward / sideways (also used for export)`},Rg,`Root motion`),Bg=Q(`select`,{title:`Playback speed`});for(let e of[`0.25`,`0.5`,`1`,`1.5`])Bg.append(new Option(`${e}×`,e));Bg.value=`1`,Bg.addEventListener(`change`,()=>Yh.speed=Number(Bg.value)),jg.append(zg,Bg,Mg),Yh.onTick=(e,t)=>{Mg.firstChild.style.width=e?`${t/e.duration*100}%`:`0%`},gg.append(pg(`Output`,!0,Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:`Detail`}),Ag),kg));var Vg=Wh(`#preset`);Vg.append(new Option(`Presets…`,``));for(let e of Object.keys(Pt))Vg.append(new Option(e,e));Vg.addEventListener(`change`,()=>{let e=Vg.value;e&&(Vg.value=``,lg({...jt,...Pt[e],name:e,detail:$.detail}))});var Hg=Wh(`#name`),Ug=Wh(`#seed`);Qh.push(()=>{Hg.value=$.name,Ug.value=String($.seed)}),Hg.addEventListener(`input`,()=>$={...$,name:Hg.value});var Wg=e=>lg({...It(e,Jh),detail:$.detail,name:`character_${e}`});Wh(`#randomize`).addEventListener(`click`,()=>Wg(Math.floor(Math.random()*1e6))),Ug.addEventListener(`change`,()=>Wg(Number(Ug.value)||0)),Wh(`#wireframe`).addEventListener(`change`,e=>Yh.setWireframe(e.target.checked)),Wh(`#skeleton`).addEventListener(`change`,e=>Yh.setSkeleton(e.target.checked)),Wh(`#face`).addEventListener(`change`,e=>Yh.focusFace(e.target.checked));function Gg(){try{return{...wi,...JSON.parse(localStorage.getItem(`3dgen.export`)??`{}`)}}catch{return{...wi}}}function Kg(){try{localStorage.setItem(`3dgen.export`,JSON.stringify(Zh))}catch{}}function qg(e){Object.assign(Zh,e),Kg(),Yh.rootMotion=Zh.rootMotion,Zh.mode!==`static`&&$.rig===`none`&&cg({rig:`game`}),Zg()}var Jg=Wh(`#export-panel`),Yg=Wh(`#export-summary-text`),Xg=Wh(`#export-go`);Wh(`#export-summary`).addEventListener(`click`,()=>{Jg.hidden=!Jg.hidden,Zg()});function Zg(){if(Rg.checked=Zh.rootMotion,!Xh)return;let e=Oi(Xh,Zh);if(Yg.textContent=e.summary,Xg.dataset.label=`⬇ ${e.download}`,Qg||(Xg.textContent=Xg.dataset.label),Xg.title=`Download ${e.download}`,$g(),Jg.hidden)return;let t=Zh,n=e=>Q(`div`,{className:`xp-h`,textContent:e}),r=(e,t,n,r,i={})=>{let a=Q(`button`,{className:`seg`+(e===t?` on`:``),textContent:n,...i});return a.addEventListener(`click`,()=>r(e)),a},i=(e,t,n)=>{let r=Q(`input`,{type:`checkbox`,checked:t});return r.addEventListener(`change`,()=>n(r.checked)),Q(`label`,{className:`acc`},r,e)},a=(e,t,n)=>{let r=Q(`select`);for(let[t,n]of e)r.append(new Option(n,t));return r.value=t,r.addEventListener(`change`,()=>n(r.value)),r},o=[],s=Q(`button`,{className:`xp-close`,textContent:`✕`,title:`Close`});s.addEventListener(`click`,()=>{Jg.hidden=!0}),o.push(Q(`div`,{className:`xp-title`},Q(`span`,{textContent:`Export`}),s)),o.push(n(`1 · What to export`));let c=Q(`div`,{className:`xp-cards`});for(let t of[`static`,`rigged`,`animated`]){let n=Q(`button`,{className:`xp-card`+(e.settings.mode===t?` on`:``)},Q(`b`,{textContent:Ti[t].title}),Q(`span`,{textContent:Ti[t].blurb}));n.addEventListener(`click`,()=>qg({mode:t})),c.append(n)}if(o.push(c),t.mode!==`static`&&(o.push(n(`2 · Skeleton`)),o.push(Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:`Skeleton`}),a([`game`,`game_lite`,`full`].map(e=>[e,_n[e]]),$.rig===`none`?`game`:$.rig,e=>cg({rig:e})))),o.push(Q(`div`,{className:`ctl wide`},Q(`span`,{textContent:`Rest pose`}),a([[`A`,`A-pose (natural)`],[`T`,`T-pose (Mixamo / Unity Humanoid)`]],$.restPose,e=>cg({restPose:e})))),o.push(i(`Facial bones (jaw + eyes)`,$.faceBones,e=>cg({faceBones:e}))),o.push(i(`Facial blend shapes (expressions, blinking)`,$.faceShapes,e=>cg({faceShapes:e}))),Xh.rig&&o.push(Q(`div`,{className:`rig-status`,textContent:`✓ Auto-rigged: ${Xh.rig.bones.length} bones · ${Xh.rig.restPose}-pose bind · 4 weights per vertex`}))),t.mode===`animated`){o.push(n(`3 · Animations`));let e=Q(`button`,{className:`mini`,textContent:`All`});e.addEventListener(`click`,()=>qg({clips:Xr.map(e=>e.id)}));let a=Q(`button`,{className:`mini`,textContent:`None`});a.addEventListener(`click`,()=>qg({clips:[]})),o.push(Q(`div`,{className:`xp-row`},Q(`span`,{className:`hint`,textContent:`${t.clips.length} of ${Xr.length} selected`}),e,a));let s=[...new Set(Xr.map(e=>e.category))];for(let e of s){let n=Q(`div`,{className:`xp-clips`});for(let r of Xr.filter(t=>t.category===e)){let e=t.clips.includes(r.id),i=Q(`input`,{type:`checkbox`,checked:e});i.addEventListener(`change`,()=>qg({clips:e?t.clips.filter(e=>e!==r.id):[...t.clips,r.id]}));let a=Q(`button`,{className:`mini`,textContent:`▶`,title:`Preview ${r.name}`});a.addEventListener(`click`,()=>Fg(r.id)),n.append(Q(`label`,{className:`xp-clip`},i,Q(`span`,{textContent:r.name}),Q(`small`,{textContent:`${r.duration.toFixed(1)}s ${r.loop?`↻`:``}`}),a))}let r=Xr.filter(t=>t.category===e).map(e=>e.id),i=r.every(e=>t.clips.includes(e)),a=Q(`button`,{className:`xp-cat`,textContent:`${e} ${i?`☑`:`☐`}`,title:i?`Deselect all ${e}`:`Select all ${e}`});a.addEventListener(`click`,()=>qg({clips:i?t.clips.filter(e=>!r.includes(e)):[...new Set([...t.clips,...r])]})),o.push(a,n)}o.push(Q(`div`,{className:`xp-row`},r(`embedded`,t.packaging,`One file, all clips inside`,e=>qg({packaging:e})),r(`separate`,t.packaging,`Zip: one file per clip`,e=>qg({packaging:e})))),t.packaging===`separate`&&o.push(i(`Include the mesh in every clip file (bigger; off = skeleton + animation only)`,t.clipMesh,e=>qg({clipMesh:e}))),o.push(i(`Root motion (walk / run / strafe travel instead of playing in place)`,t.rootMotion,e=>qg({rootMotion:e}))),o.push(i(`Mark looping clips in their names ("Walk-loop", auto-loops in Godot)`,t.loopSuffix,e=>qg({loopSuffix:e})))}o.push(n(`${t.mode===`static`?`2`:t.mode===`rigged`?`3`:`4`} · Format`)),o.push(Q(`div`,{className:`xp-row`},r(`glb`,t.format,`GLB`,e=>qg({format:e}),{title:`glTF binary: web, Godot, Blender, three.js`}),r(`fbx`,t.format,`FBX`,e=>qg({format:e}),{title:`Unity, Unreal, Maya, 3ds Max, Blender`}),r(`obj`,t.format,`OBJ`,e=>qg({format:e}),{title:t.mode===`static`?`Wavefront OBJ + textures (static)`:`OBJ cannot store a rig or animations`,disabled:t.mode!==`static`}),r(`all`,t.format,`All formats`,e=>qg({format:e}),{title:`Every format in one zip`}))),Xh?.weapon&&(o.push(n(`Weapon`)),o.push(Q(`div`,{className:`xp-row`},r(`held`,t.weaponFile,`In the hand (one file)`,e=>qg({weaponFile:e}),{title:`Weapon is part of the character mesh, skinned to the WeaponR bone`}),r(`separate`,t.weaponFile,`Separate prop file`,e=>qg({weaponFile:e}),{title:`Character without the weapon + the weapon as its own file, to attach to WeaponR in your engine`})))),o.push(n(`You will download`));let l=Q(`ul`,{className:`xp-files`});for(let t of e.files)l.append(Q(`li`,{className:t.kind===`meta`?`meta`:``},Q(`code`,{textContent:t.path}),Q(`span`,{textContent:t.desc})));o.push(Q(`div`,{className:`xp-download`},Q(`b`,{textContent:e.download}),Q(`span`,{className:`hint`,textContent:e.zipped?`zip with ${e.files.length} items`:`single file`})),l);for(let t of e.notes)o.push(Q(`div`,{className:`xp-note`,textContent:`ⓘ ${t}`}));let u=Q(`button`,{className:`primary xp-go`,textContent:`⬇ Download ${e.download}`});u.addEventListener(`click`,e_),o.push(u),Jg.replaceChildren(...o),$g()}var Qg=null;function $g(){let e=[Xg,...Jg.querySelectorAll(`.xp-go`)];for(let t of e){if(Qg&&!t.dataset.label&&(t.dataset.label=t.textContent??``),t.classList.toggle(`busy`,!!Qg&&!Qg.done&&!Qg.failed),t.classList.toggle(`done`,!!Qg?.done),t.classList.toggle(`failed`,!!Qg?.failed),t.disabled=!!Qg&&!Qg.done&&!Qg.failed,t.style.setProperty(`--p`,`${Math.round((Qg?.frac??0)*100)}%`),!Qg){t.dataset.label&&(t.textContent=t.dataset.label);continue}let e=Qg.done?`✓`:Qg.failed?`!`:``;t.replaceChildren(e?Q(`span`,{className:`ico`,textContent:e}):Q(`span`,{className:`spin`}),Q(`span`,{className:`lbl`,textContent:Qg.label}))}}async function e_(){if(Xh&&(!Qg||Qg.done||Qg.failed)){Qg={label:`Preparing…`,frac:0},$g();try{await ig();let e=Oi(Xh,Zh).zipped?await Yh.snapshot():void 0,t=await qh.export(Zh,e,(e,t)=>{Qg={label:`${e}…`,frac:t??Qg.frac},$g()});Qg={label:`Saved ${t.name}`,frac:1,done:!0},$g();let n=URL.createObjectURL(new Blob([t.data],{type:t.mime})),r=Q(`a`,{href:n,download:t.name});document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),5e3)}catch(e){Qg={label:`Export failed: ${e.message}`,frac:0,failed:!0},$g()}setTimeout(()=>{Qg=null,$g()},Qg?.failed?4e3:1800)}}Xg.addEventListener(`click`,e_);async function t_(){await ig();let e=Q(`dialog`,{className:`share-modal`}),t=Q(`button`,{className:`share-close`,textContent:`✕`,title:`Close`}),n=Q(`img`,{className:`share-preview`,alt:`Share image preview`}),r=Q(`textarea`,{className:`share-caption`,rows:3,value:Li($.name)}),i=Fi($),a=Q(`input`,{className:`share-link`,value:i,readOnly:!0}),o=Q(`div`,{className:`share-note`}),s=e=>{o.textContent=e,o.classList.add(`on`),setTimeout(()=>o.classList.remove(`on`),1800)},c=async(e,t)=>{try{await navigator.clipboard.writeText(e),s(`${t} copied`)}catch{a.select(),s(`Press Ctrl/Cmd+C to copy`)}},l=await Ii(Yh.canvasElement,Yh.characterRect(),$.name),u=URL.createObjectURL(l);n.src=u;let d=`${($.name||`character`).replace(/[^a-z0-9]+/gi,`-`).replace(/^-|-$/g,``).toLowerCase()||`character`}-ara-3d-gen.png`,f=new File([l],d,{type:`image/png`}),p=Q(`div`,{className:`share-nets`});if(navigator.canShare?.({files:[f]})){let e=Q(`button`,{className:`primary share-native`,textContent:`↗ Share with image…`});e.addEventListener(`click`,async()=>{try{await navigator.share({files:[f],text:`${r.value} ${i}`,title:`Ara 3D Gen`})}catch{}}),p.append(e)}for(let e of zi){let t=Q(`a`,{className:`share-net net-${e.id}`,textContent:e.label,target:`_blank`,rel:`noopener`});t.addEventListener(`click`,()=>t.href=e.url(r.value,i)),t.href=e.url(r.value,i),p.append(t)}let m=Q(`a`,{className:`share-action`,textContent:`⬇ Download image`,href:u,download:d}),h=Q(`button`,{className:`share-action`,textContent:`🔗 Copy link`});h.addEventListener(`click`,()=>c(i,`Link`));let g=Q(`button`,{className:`share-action`,textContent:`📋 Copy caption + link`});g.addEventListener(`click`,()=>c(`${r.value} ${i}`,`Caption and link`)),e.append(Q(`div`,{className:`share-head`},Q(`b`,{textContent:`Share your character`}),t),n,Q(`label`,{className:`share-label`,textContent:`Caption`}),r,Q(`label`,{className:`share-label`,textContent:`Link (opens this exact character)`}),a,p,Q(`div`,{className:`share-actions`},m,h,g),Q(`div`,{className:`share-hint`,textContent:`Tip: X, Facebook and LinkedIn take the caption and link from websites, not images. Download the image to attach it to your post.`}),o);let _=()=>{e.close(),e.remove(),URL.revokeObjectURL(u)};t.addEventListener(`click`,_),e.addEventListener(`click`,t=>t.target===e&&_()),e.addEventListener(`cancel`,_),document.body.append(e),e.showModal()}Wh(`#share-btn`).addEventListener(`click`,()=>void t_());var n_=new URLSearchParams(location.hash.slice(1)),r_=n_.get(`c`),i_=r_?Pi(r_,$.detail):null;i_&&($=i_);var a_=n_.get(`preset`);!i_&&a_&&Pt[a_]&&($={...jt,...Pt[a_],name:a_,detail:$.detail}),Qh.forEach(e=>e()),ag();var o_=n_.get(`clip`);o_&&Zr.has(o_)&&(Ng=o_),n_.has(`skeleton`)&&(Wh(`#skeleton`).checked=!0,Yh.setSkeleton(!0)),n_.has(`export`)&&(Jg.hidden=!1),n_.has(`face`)&&(Wh(`#face`).checked=!0,Yh.focusFace(!0));