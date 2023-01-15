import{S as t,i as e,s as n,K as r,e as a,k as l,t as o,c as s,a as c,d as i,n as u,g as h,b as f,L as d,f as m,F as p,J as g,M as $,N as y,j as v,m as w,o as x,v as E,r as k,w as I,B as D,u as b,O as S,P as z,l as N,Q as C,C as B,R as P,T as A,U as R,V as W,E as F,W as V,z as j,h as H,X as L}from"../chunks/vendor-761576c9.js";const M=t=>Math.round(9*(t-273.15)/5+32);function T(t){let e,n,$,y,v,w,x,E,k,I,D,b,S,z,N,C,B,P=r(new Date(1e3*t[0]),{addSuffix:!0})+"",A=100*t[2]+"";return{c(){e=a("div"),n=a("span"),$=l(),y=a("span"),v=o(t[5]),w=l(),x=a("p"),E=o(P),k=l(),I=a("br"),D=o("\n    Humidity: "),b=o(t[1]),S=o("%\n    "),z=a("br"),N=o("\n    Chance of Rain: "),C=o(A),B=o("%"),this.h()},l(r){e=s(r,"DIV",{});var a=c(e);n=s(a,"SPAN",{class:!0,style:!0}),c(n).forEach(i),$=u(a),y=s(a,"SPAN",{style:!0});var l=c(y);v=h(l,t[5]),l.forEach(i),w=u(a),x=s(a,"P",{});var o=c(x);E=h(o,P),k=u(o),I=s(o,"BR",{}),D=h(o,"\n    Humidity: "),b=h(o,t[1]),S=h(o,"%\n    "),z=s(o,"BR",{}),N=h(o,"\n    Chance of Rain: "),C=h(o,A),B=h(o,"%"),o.forEach(i),a.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[4]}-${t[3]}`),d(n,"font-size","48px"),d(y,"font-size","32px")},m(t,r){m(t,e,r),p(e,n),p(e,$),p(e,y),p(y,v),p(e,w),p(e,x),p(x,E),p(x,k),p(x,I),p(x,D),p(x,b),p(x,S),p(x,z),p(x,N),p(x,C),p(x,B)},p:g,i:g,o:g,d(t){t&&i(e)}}}function O(t,e,n){let{weatherDataInstance:r}=e;const{dt:a,temp:l,feels_like:o,weather:s,humidity:c,pop:i}=r,{icon:u,id:h}=s[0],f=u.endsWith("n")?"night":"day",d=`${M(o)} °F`;return t.$$set=t=>{"weatherDataInstance"in t&&n(6,r=t.weatherDataInstance)},[a,c,i,h,f,d,r]}class U extends t{constructor(t){super(),e(this,t,O,T,n,{weatherDataInstance:6})}}function J(t){let e,n,r,$,y,v,w,x,E,k,I,D,b;return{c(){e=a("div"),n=a("span"),r=l(),$=a("span"),y=o(t[3]),v=l(),w=a("p"),x=o(t[4]),E=l(),k=a("br"),I=o("\n    Humidity: "),D=o(t[0]),b=o("%"),this.h()},l(a){e=s(a,"DIV",{});var l=c(e);n=s(l,"SPAN",{class:!0,style:!0}),c(n).forEach(i),r=u(l),$=s(l,"SPAN",{style:!0});var o=c($);y=h(o,t[3]),o.forEach(i),v=u(l),w=s(l,"P",{style:!0});var f=c(w);x=h(f,t[4]),E=u(f),k=s(f,"BR",{}),I=h(f,"\n    Humidity: "),D=h(f,t[0]),b=h(f,"%"),f.forEach(i),l.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[2]}-${t[1]}`),d(n,"font-size","48px"),d($,"font-size","48px"),d($,"margin-right","1em"),d(w,"display","inline-block")},m(t,a){m(t,e,a),p(e,n),p(e,r),p(e,$),p($,y),p(e,v),p(e,w),p(w,x),p(w,E),p(w,k),p(w,I),p(w,D),p(w,b)},p:g,i:g,o:g,d(t){t&&i(e)}}}function q(t,e,n){let{current:r}=e;const{feels_like:a,dt:l,weather:o,humidity:s}=r,{icon:c,id:i}=o[0],u=c.endsWith("n")?"night":"day",h=`${M(a)} °F`,f=$(1e3*l,"h:mm aaa");return t.$$set=t=>{"current"in t&&n(5,r=t.current)},[s,i,u,h,f,r]}class _ extends t{constructor(t){super(),e(this,t,q,J,n,{current:5})}}function K(t){let e,n,r,$,v,w,x,E,k,I,D,b,S,z,N,C,B,P=y(new Date(1e3*t[0]),"EEEE")+"",A=100*t[2]+"";return{c(){e=a("div"),n=a("span"),r=l(),$=a("span"),v=o(t[5]),w=l(),x=a("p"),E=o(P),k=l(),I=a("br"),D=o("\n    Humidity: "),b=o(t[1]),S=o("%\n    "),z=a("br"),N=o("\n    Chance of Rain: "),C=o(A),B=o("%"),this.h()},l(a){e=s(a,"DIV",{});var l=c(e);n=s(l,"SPAN",{class:!0,style:!0}),c(n).forEach(i),r=u(l),$=s(l,"SPAN",{style:!0});var o=c($);v=h(o,t[5]),o.forEach(i),w=u(l),x=s(l,"P",{});var f=c(x);E=h(f,P),k=u(f),I=s(f,"BR",{}),D=h(f,"\n    Humidity: "),b=h(f,t[1]),S=h(f,"%\n    "),z=s(f,"BR",{}),N=h(f,"\n    Chance of Rain: "),C=h(f,A),B=h(f,"%"),f.forEach(i),l.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[4]}-${t[3]}`),d(n,"font-size","48px"),d($,"font-size","24px")},m(t,a){m(t,e,a),p(e,n),p(e,r),p(e,$),p($,v),p(e,w),p(e,x),p(x,E),p(x,k),p(x,I),p(x,D),p(x,b),p(x,S),p(x,z),p(x,N),p(x,C),p(x,B)},p:g,i:g,o:g,d(t){t&&i(e)}}}function Q(t,e,n){let{weatherDataInstance:r}=e;const{dt:a,temp:l,feels_like:o,weather:s,humidity:c,rain:i,pop:u}=r,{icon:h,id:f}=s[0],d=h.endsWith("n")?"night":"day",{day:m}=o,p=`${M(m)} °F`;return t.$$set=t=>{"weatherDataInstance"in t&&n(6,r=t.weatherDataInstance)},[a,c,u,f,d,p,r]}class X extends t{constructor(t){super(),e(this,t,Q,K,n,{weatherDataInstance:6})}}function G(t,e,n){const r=t.slice();return r[3]=e[n],r}function Y(t,e,n){const r=t.slice();return r[3]=e[n],r}function Z(t){let e,n;return e=new U({props:{weatherDataInstance:t[3]}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.weatherDataInstance=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function tt(t){let e,n;return e=new X({props:{weatherDataInstance:t[3]}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.weatherDataInstance=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function et(t){let e,n,r,o,h,d;e=new _({props:{current:t[0]}});let p=t[1],g=[];for(let a=0;a<p.length;a+=1)g[a]=Z(Y(t,p,a));const $=t=>k(g[t],1,1,(()=>{g[t]=null}));let y=t[2],z=[];for(let a=0;a<y.length;a+=1)z[a]=tt(G(t,y,a));const N=t=>k(z[t],1,1,(()=>{z[t]=null}));return{c(){v(e.$$.fragment),n=l(),r=a("div");for(let t=0;t<g.length;t+=1)g[t].c();o=l(),h=a("div");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){w(e.$$.fragment,t),n=u(t),r=s(t,"DIV",{class:!0});var a=c(r);for(let e=0;e<g.length;e+=1)g[e].l(a);a.forEach(i),o=u(t),h=s(t,"DIV",{class:!0});var l=c(h);for(let e=0;e<z.length;e+=1)z[e].l(l);l.forEach(i),this.h()},h(){f(r,"class","hourlyData svelte-5rzf92"),f(h,"class","dailyData svelte-5rzf92")},m(t,a){x(e,t,a),m(t,n,a),m(t,r,a);for(let e=0;e<g.length;e+=1)g[e].m(r,null);m(t,o,a),m(t,h,a);for(let e=0;e<z.length;e+=1)z[e].m(h,null);d=!0},p(t,[n]){const a={};if(1&n&&(a.current=t[0]),e.$set(a),2&n){let e;for(p=t[1],e=0;e<p.length;e+=1){const a=Y(t,p,e);g[e]?(g[e].p(a,n),E(g[e],1)):(g[e]=Z(a),g[e].c(),E(g[e],1),g[e].m(r,null))}for(D(),e=p.length;e<g.length;e+=1)$(e);b()}if(4&n){let e;for(y=t[2],e=0;e<y.length;e+=1){const r=G(t,y,e);z[e]?(z[e].p(r,n),E(z[e],1)):(z[e]=tt(r),z[e].c(),E(z[e],1),z[e].m(h,null))}for(D(),e=y.length;e<z.length;e+=1)N(e);b()}},i(t){if(!d){E(e.$$.fragment,t);for(let t=0;t<p.length;t+=1)E(g[t]);for(let t=0;t<y.length;t+=1)E(z[t]);d=!0}},o(t){k(e.$$.fragment,t),g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)k(g[e]);z=z.filter(Boolean);for(let e=0;e<z.length;e+=1)k(z[e]);d=!1},d(t){I(e,t),t&&i(n),t&&i(r),S(g,t),t&&i(o),t&&i(h),S(z,t)}}}function nt(t,e,n){let{current:r,hourly:a,daily:l}=e;return t.$$set=t=>{"current"in t&&n(0,r=t.current),"hourly"in t&&n(1,a=t.hourly),"daily"in t&&n(2,l=t.daily)},[r,a,l]}class rt extends t{constructor(t){super(),e(this,t,nt,et,n,{current:0,hourly:1,daily:2})}}function at(t){let e,n,r,a;const l=[ot,lt],o=[];function s(t,e){return t[1]?0:1}return e=s(t),n=o[e]=l[e](t),{c(){n.c(),r=N()},l(t){n.l(t),r=N()},m(t,n){o[e].m(t,n),m(t,r,n),a=!0},p(t,a){let c=e;e=s(t),e===c?o[e].p(t,a):(D(),k(o[c],1,1,(()=>{o[c]=null})),b(),n=o[e],n?n.p(t,a):(n=o[e]=l[e](t),n.c()),E(n,1),n.m(r.parentNode,r))},i(t){a||(E(n),a=!0)},o(t){k(n),a=!1},d(t){o[e].d(t),t&&i(r)}}}function lt(t){let e;return{c(){e=o("Failed")},l(t){e=h(t,"Failed")},m(t,n){m(t,e,n)},p:g,i:g,o:g,d(t){t&&i(e)}}}function ot(t){let e,n;return e=new rt({props:{isCached:!0,current:t[1],hourly:t[2],daily:t[3]}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.current=t[1]),4&n&&(r.hourly=t[2]),8&n&&(r.daily=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function st(t){let e,n,r=t[8]&&ct(t);return{c(){r&&r.c(),e=N()},l(t){r&&r.l(t),e=N()},m(t,a){r&&r.m(t,a),m(t,e,a),n=!0},p(t,n){t[8]?r?(r.p(t,n),16&n&&E(r,1)):(r=ct(t),r.c(),E(r,1),r.m(e.parentNode,e)):r&&(D(),k(r,1,1,(()=>{r=null})),b())},i(t){n||(E(r),n=!0)},o(t){k(r),n=!1},d(t){r&&r.d(t),t&&i(e)}}}function ct(t){let e,n;return e=new rt({props:{current:t[8].current,hourly:t[8].hourly,daily:t[8].daily}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};16&n&&(r.current=t[8].current),16&n&&(r.hourly=t[8].hourly),16&n&&(r.daily=t[8].daily),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function it(t){let e,n,r,a;const l=[ht,ut],o=[];function s(t,e){return t[0]?0:1}return e=s(t),n=o[e]=l[e](t),{c(){n.c(),r=N()},l(t){n.l(t),r=N()},m(t,n){o[e].m(t,n),m(t,r,n),a=!0},p(t,a){let c=e;e=s(t),e===c?o[e].p(t,a):(D(),k(o[c],1,1,(()=>{o[c]=null})),b(),n=o[e],n?n.p(t,a):(n=o[e]=l[e](t),n.c()),E(n,1),n.m(r.parentNode,r))},i(t){a||(E(n),a=!0)},o(t){k(n),a=!1},d(t){o[e].d(t),t&&i(r)}}}function ut(t){let e;return{c(){e=o("No cached weather data: waiting")},l(t){e=h(t,"No cached weather data: waiting")},m(t,n){m(t,e,n)},p:g,i:g,o:g,d(t){t&&i(e)}}}function ht(t){let e,n;return e=new rt({props:{isCached:!0,current:t[1],hourly:t[2],daily:t[3]}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.current=t[1]),4&n&&(r.hourly=t[2]),8&n&&(r.daily=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function ft(t){let e,n,r,a={ctx:t,current:null,token:null,hasCatch:!0,pending:it,then:st,catch:at,value:8,error:9,blocks:[,,,]};return z(n=t[4],a),{c(){e=N(),a.block.c()},l(t){e=N(),a.block.l(t)},m(t,n){m(t,e,n),a.block.m(t,a.anchor=n),a.mount=()=>e.parentNode,a.anchor=e,r=!0},p(e,[r]){t=e,a.ctx=t,16&r&&n!==(n=t[4])&&z(n,a)||C(a,t,r)},i(t){r||(E(a.block),r=!0)},o(t){for(let e=0;e<3;e+=1){const t=a.blocks[e];k(t)}r=!1},d(t){t&&i(e),a.block.d(t),a.token=null,a=null}}}function dt(t,e,n){let r,a,l,o,{latitude:s}=e,{longitude:c}=e,i=localStorage.getItem("cachedWeather");async function u(){if(!s||!c)return null;const t=`https://api.openweathermap.org/data/2.5/onecall?lat=${s}&lon=${c}&exclude=minutely&appid=dcba0ed759c66085eaeeca7f746953d9`,e=await fetch(t),n=await e.json(),{current:r,daily:a,hourly:l}=n,o=l.slice(2,5),i={current:r,daily:a.slice(1,5),hourly:o};return localStorage.setItem("cachedWeather",JSON.stringify(i)),i}return"function"!=typeof fetch&&(fetch=require("node-fetch")),o=u(),setInterval((()=>{console.log("getting weather"),n(0,i=localStorage.getItem("cachedWeather")),n(4,o=u())}),3e5),t.$$set=t=>{"latitude"in t&&n(5,s=t.latitude),"longitude"in t&&n(6,c=t.longitude)},t.$$.update=()=>{if(1&t.$$.dirty)try{let t=JSON.parse(i);n(1,r=null==t?void 0:t.current),n(2,a=null==t?void 0:t.hourly),n(3,l=null==t?void 0:t.daily)}catch(e){}},[i,r,a,l,o,s,c]}class mt extends t{constructor(t){super(),e(this,t,dt,ft,n,{latitude:5,longitude:6})}}const pt=B(null),gt=B(null);function $t(t){let e,n,r,a,l,o;return{c(){e=P("svg"),n=P("circle"),r=P("line"),a=P("line"),this.h()},l(t){e=A(t,"svg",{style:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=c(e);n=A(l,"circle",{cx:!0,cy:!0,r:!0}),c(n).forEach(i),r=A(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),c(r).forEach(i),a=A(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),c(a).forEach(i),l.forEach(i),this.h()},h(){f(n,"cx","12"),f(n,"cy","12"),f(n,"r","10"),f(r,"x1","15"),f(r,"y1","9"),f(r,"x2","9"),f(r,"y2","15"),f(a,"x1","9"),f(a,"y1","9"),f(a,"x2","15"),f(a,"y2","15"),f(e,"style",t[0]),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"height","24"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","2"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round"),f(e,"class","feather feather-x-circle svelte-snzubx")},m(s,c){m(s,e,c),p(e,n),p(e,r),p(e,a),l||(o=R(e,"click",t[1]),l=!0)},p(t,[n]){1&n&&f(e,"style",t[0])},i:g,o:g,d(t){t&&i(e),l=!1,o()}}}function yt(t,e,n){let{style:r=""}=e;return t.$$set=t=>{"style"in t&&n(0,r=t.style)},[r,function(e){W.call(this,t,e)}]}class vt extends t{constructor(t){super(),e(this,t,yt,$t,n,{style:0})}}function wt(t){let e,n,r,a;return{c(){e=P("svg"),n=P("path"),this.h()},l(t){e=A(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var r=c(e);n=A(r,"path",{d:!0}),c(n).forEach(i),r.forEach(i),this.h()},h(){f(n,"d","M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"height","24"),f(e,"fill","currentColor"),f(e,"class","bi bi-fullscreen svelte-1svgczj"),f(e,"viewBox","0 0 16 16")},m(l,o){m(l,e,o),p(e,n),r||(a=R(e,"click",t[0]),r=!0)},p:g,i:g,o:g,d(t){t&&i(e),r=!1,a()}}}function xt(t){return[t=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}]}class Et extends t{constructor(t){super(),e(this,t,xt,wt,n,{})}}function kt(t){let e,n,r,$,y,v,w,x,E,k,I,D,b,S,z,N,C=(t[0]?t[0]:"")+"";return{c(){e=a("p"),n=o(C),r=l(),$=a("div"),y=a("button"),v=o("Use Current Location"),w=l(),x=a("span"),E=o("or"),k=l(),I=a("div"),D=a("label"),b=o("Enter zip code:"),S=a("input"),this.h()},l(t){e=s(t,"P",{style:!0});var a=c(e);n=h(a,C),a.forEach(i),r=u(t),$=s(t,"DIV",{style:!0});var l=c($);y=s(l,"BUTTON",{});var o=c(y);v=h(o,"Use Current Location"),o.forEach(i),w=u(l),x=s(l,"SPAN",{});var f=c(x);E=h(f,"or"),f.forEach(i),k=u(l),I=s(l,"DIV",{});var d=c(I);D=s(d,"LABEL",{for:!0});var m=c(D);b=h(m,"Enter zip code:"),m.forEach(i),S=s(d,"INPUT",{name:!0,type:!0,pattern:!0}),d.forEach(i),l.forEach(i),this.h()},h(){d(e,"height","50px"),d(e,"text-align","center"),d(e,"color","#ff0000"),f(D,"for","zip"),f(S,"name","zip"),f(S,"type","text"),f(S,"pattern","[0-9]{5}"),d($,"display","flex"),d($,"justify-content","space-between")},m(a,l){m(a,e,l),p(e,n),m(a,r,l),m(a,$,l),p($,y),p(y,v),p($,w),p($,x),p(x,E),p($,k),p($,I),p(I,D),p(D,b),p(I,S),z||(N=[R(y,"click",t[5]),R(S,"keyup",t[6])],z=!0)},p(t,e){1&e&&C!==(C=(t[0]?t[0]:"")+"")&&H(n,C)},i:g,o:g,d(t){t&&i(e),t&&i(r),t&&i($),z=!1,L(N)}}}function It(t){let e,n,r,o,h,d,g;return n=new vt({props:{style:"position: absolute; right: 1em;"}}),n.$on("click",t[4]),o=new Et({}),d=new mt({props:{latitude:t[1],longitude:t[2]}}),{c(){e=a("div"),v(n.$$.fragment),r=l(),v(o.$$.fragment),h=l(),v(d.$$.fragment),this.h()},l(t){e=s(t,"DIV",{class:!0});var a=c(e);w(n.$$.fragment,a),r=u(a),w(o.$$.fragment,a),h=u(a),w(d.$$.fragment,a),a.forEach(i),this.h()},h(){f(e,"class","grid svelte-1vq6efn")},m(t,a){m(t,e,a),x(n,e,null),p(e,r),x(o,e,null),p(e,h),x(d,e,null),g=!0},p(t,e){const n={};2&e&&(n.latitude=t[1]),4&e&&(n.longitude=t[2]),d.$set(n)},i(t){g||(E(n.$$.fragment,t),E(o.$$.fragment,t),E(d.$$.fragment,t),g=!0)},o(t){k(n.$$.fragment,t),k(o.$$.fragment,t),k(d.$$.fragment,t),g=!1},d(t){t&&i(e),I(n),I(o),I(d)}}}function Dt(t){let e,n,r,f,d,g,$,y,v,w;document.title=e="Weather v2.1.0";const x=[It,kt],I=[];function S(t,e){return t[1]&&t[2]?0:1}return r=S(t),f=I[r]=x[r](t),{c(){n=l(),f.c(),d=l(),g=a("h2"),$=o("Weather v"),y=o("2.1.0"),v=o(":")},l(t){F('[data-svelte="svelte-1pulcks"]',document.head).forEach(i),n=u(t),f.l(t),d=u(t),g=s(t,"H2",{});var e=c(g);$=h(e,"Weather v"),y=h(e,"2.1.0"),v=h(e,":"),e.forEach(i)},m(t,e){m(t,n,e),I[r].m(t,e),m(t,d,e),m(t,g,e),p(g,$),p(g,y),p(g,v),w=!0},p(t,[n]){(!w||0&n)&&e!==(e="Weather v2.1.0")&&(document.title=e);let a=r;r=S(t),r===a?I[r].p(t,n):(D(),k(I[a],1,1,(()=>{I[a]=null})),b(),f=I[r],f?f.p(t,n):(f=I[r]=x[r](t),f.c()),E(f,1),f.m(d.parentNode,d))},i(t){w||(E(f),w=!0)},o(t){k(f),w=!1},d(t){t&&i(n),I[r].d(t),t&&i(d),t&&i(g)}}}const bt=!0;function St(t,e,n){let r,a;V(t,pt,(t=>n(1,r=t))),V(t,gt,(t=>n(2,a=t)));let l=null;async function o(t){if(t.match(/\d{5}/)){c();let e=await async function(t){const e=await fetch(`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${t}&country=us&maxRows=1&username=rafistrauss`);return e.ok?await e.json():(console.error(`Failed to fetch latLong from zip: ${e.statusText}`),n(0,l=e.statusText),null)}(t);const{lat:r,lng:a}=e.postalCodes[0];s(r,a)}}function s(t,e){pt.set(t),gt.set(e),localStorage.setItem("latitude",t),localStorage.setItem("longitude",e)}function c(){n(0,l=null)}j((async()=>{console.debug("Mounted index"),pt.set(localStorage.getItem("latitude")),gt.set(localStorage.getItem("longitude"))}));return[l,r,a,o,function(){localStorage.clear(),pt.set(null),gt.set(null)},function(){c(),navigator.geolocation.getCurrentPosition((function(t){s(t.coords.latitude,t.coords.longitude)}),(function(t){n(0,l=t.message),console.error(t)}))},t=>o(t.target.value)]}export default class extends t{constructor(t){super(),e(this,t,St,Dt,n,{})}}export{bt as prerender};
