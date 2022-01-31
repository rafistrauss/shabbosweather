import{S as t,i as e,s as n,I as r,e as a,k as l,t as o,c,a as s,d as i,n as u,g as h,b as f,J as d,f as p,F as m,H as g,K as $,L as y,j as w,m as v,o as x,v as E,r as I,w as k,B as D,u as b,M as S,N,l as z,O as C,C as P,P as B,Q as R,R as W,E as A,T as H,z as V,h as j,U as F}from"../chunks/vendor-41cb8aa3.js";const L=t=>Math.round(9*(t-273.15)/5+32);function T(t){let e,n,$,y,w,v,x,E,I,k,D,b,S,N,z,C,P,B=r(new Date(1e3*t[0]),{addSuffix:!0})+"",R=100*t[2]+"";return{c(){e=a("div"),n=a("span"),$=l(),y=a("span"),w=o(t[5]),v=l(),x=a("p"),E=o(B),I=l(),k=a("br"),D=o("\n    Humidity: "),b=o(t[1]),S=o("%\n    "),N=a("br"),z=o("\n    Chance of Rain: "),C=o(R),P=o("%"),this.h()},l(r){e=c(r,"DIV",{});var a=s(e);n=c(a,"SPAN",{class:!0,style:!0}),s(n).forEach(i),$=u(a),y=c(a,"SPAN",{style:!0});var l=s(y);w=h(l,t[5]),l.forEach(i),v=u(a),x=c(a,"P",{});var o=s(x);E=h(o,B),I=u(o),k=c(o,"BR",{}),D=h(o,"\n    Humidity: "),b=h(o,t[1]),S=h(o,"%\n    "),N=c(o,"BR",{}),z=h(o,"\n    Chance of Rain: "),C=h(o,R),P=h(o,"%"),o.forEach(i),a.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[4]}-${t[3]}`),d(n,"font-size","48px"),d(y,"font-size","32px")},m(t,r){p(t,e,r),m(e,n),m(e,$),m(e,y),m(y,w),m(e,v),m(e,x),m(x,E),m(x,I),m(x,k),m(x,D),m(x,b),m(x,S),m(x,N),m(x,z),m(x,C),m(x,P)},p:g,i:g,o:g,d(t){t&&i(e)}}}function O(t,e,n){let{weatherDataInstance:r}=e;const{dt:a,temp:l,feels_like:o,weather:c,humidity:s,pop:i}=r,{icon:u,id:h}=c[0],f=u.endsWith("n")?"night":"day",d=`${L(o)} °F`;return t.$$set=t=>{"weatherDataInstance"in t&&n(6,r=t.weatherDataInstance)},[a,s,i,h,f,d,r]}class U extends t{constructor(t){super(),e(this,t,O,T,n,{weatherDataInstance:6})}}function J(t){let e,n,r,$,y,w,v,x,E,I,k,D,b;return{c(){e=a("div"),n=a("span"),r=l(),$=a("span"),y=o(t[3]),w=l(),v=a("p"),x=o(t[4]),E=l(),I=a("br"),k=o("\n    Humidity: "),D=o(t[0]),b=o("%"),this.h()},l(a){e=c(a,"DIV",{});var l=s(e);n=c(l,"SPAN",{class:!0,style:!0}),s(n).forEach(i),r=u(l),$=c(l,"SPAN",{style:!0});var o=s($);y=h(o,t[3]),o.forEach(i),w=u(l),v=c(l,"P",{style:!0});var f=s(v);x=h(f,t[4]),E=u(f),I=c(f,"BR",{}),k=h(f,"\n    Humidity: "),D=h(f,t[0]),b=h(f,"%"),f.forEach(i),l.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[2]}-${t[1]}`),d(n,"font-size","48px"),d($,"font-size","48px"),d($,"margin-right","1em"),d(v,"display","inline-block")},m(t,a){p(t,e,a),m(e,n),m(e,r),m(e,$),m($,y),m(e,w),m(e,v),m(v,x),m(v,E),m(v,I),m(v,k),m(v,D),m(v,b)},p:g,i:g,o:g,d(t){t&&i(e)}}}function M(t,e,n){let{current:r}=e;const{feels_like:a,dt:l,weather:o,humidity:c}=r,{icon:s,id:i}=o[0],u=s.endsWith("n")?"night":"day",h=`${L(a)} °F`,f=$(1e3*l,"h:mm aaa");return t.$$set=t=>{"current"in t&&n(5,r=t.current)},[c,i,u,h,f,r]}class _ extends t{constructor(t){super(),e(this,t,M,J,n,{current:5})}}function q(t){let e,n,r,$,w,v,x,E,I,k,D,b,S,N,z,C,P,B=y(new Date(1e3*t[0]),"EEEE")+"",R=100*t[2]+"";return{c(){e=a("div"),n=a("span"),r=l(),$=a("span"),w=o(t[5]),v=l(),x=a("p"),E=o(B),I=l(),k=a("br"),D=o("\n    Humidity: "),b=o(t[1]),S=o("%\n    "),N=a("br"),z=o("\n    Chance of Rain: "),C=o(R),P=o("%"),this.h()},l(a){e=c(a,"DIV",{});var l=s(e);n=c(l,"SPAN",{class:!0,style:!0}),s(n).forEach(i),r=u(l),$=c(l,"SPAN",{style:!0});var o=s($);w=h(o,t[5]),o.forEach(i),v=u(l),x=c(l,"P",{});var f=s(x);E=h(f,B),I=u(f),k=c(f,"BR",{}),D=h(f,"\n    Humidity: "),b=h(f,t[1]),S=h(f,"%\n    "),N=c(f,"BR",{}),z=h(f,"\n    Chance of Rain: "),C=h(f,R),P=h(f,"%"),f.forEach(i),l.forEach(i),this.h()},h(){f(n,"class",`wi wi-owm-${t[4]}-${t[3]}`),d(n,"font-size","48px"),d($,"font-size","24px")},m(t,a){p(t,e,a),m(e,n),m(e,r),m(e,$),m($,w),m(e,v),m(e,x),m(x,E),m(x,I),m(x,k),m(x,D),m(x,b),m(x,S),m(x,N),m(x,z),m(x,C),m(x,P)},p:g,i:g,o:g,d(t){t&&i(e)}}}function K(t,e,n){let{weatherDataInstance:r}=e;const{dt:a,temp:l,feels_like:o,weather:c,humidity:s,rain:i,pop:u}=r,{icon:h,id:f}=c[0],d=h.endsWith("n")?"night":"day",{day:p}=o,m=`${L(p)} °F`;return t.$$set=t=>{"weatherDataInstance"in t&&n(6,r=t.weatherDataInstance)},[a,s,u,f,d,m,r]}class Q extends t{constructor(t){super(),e(this,t,K,q,n,{weatherDataInstance:6})}}function G(t,e,n){const r=t.slice();return r[3]=e[n],r}function X(t,e,n){const r=t.slice();return r[3]=e[n],r}function Y(t){let e,n;return e=new U({props:{weatherDataInstance:t[3]}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.weatherDataInstance=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Z(t){let e,n;return e=new Q({props:{weatherDataInstance:t[3]}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.weatherDataInstance=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function tt(t){let e,n,r,o,h,d;e=new _({props:{current:t[0]}});let m=t[1],g=[];for(let a=0;a<m.length;a+=1)g[a]=Y(X(t,m,a));const $=t=>I(g[t],1,1,(()=>{g[t]=null}));let y=t[2],N=[];for(let a=0;a<y.length;a+=1)N[a]=Z(G(t,y,a));const z=t=>I(N[t],1,1,(()=>{N[t]=null}));return{c(){w(e.$$.fragment),n=l(),r=a("div");for(let t=0;t<g.length;t+=1)g[t].c();o=l(),h=a("div");for(let t=0;t<N.length;t+=1)N[t].c();this.h()},l(t){v(e.$$.fragment,t),n=u(t),r=c(t,"DIV",{class:!0});var a=s(r);for(let e=0;e<g.length;e+=1)g[e].l(a);a.forEach(i),o=u(t),h=c(t,"DIV",{class:!0});var l=s(h);for(let e=0;e<N.length;e+=1)N[e].l(l);l.forEach(i),this.h()},h(){f(r,"class","hourlyData svelte-5rzf92"),f(h,"class","dailyData svelte-5rzf92")},m(t,a){x(e,t,a),p(t,n,a),p(t,r,a);for(let e=0;e<g.length;e+=1)g[e].m(r,null);p(t,o,a),p(t,h,a);for(let e=0;e<N.length;e+=1)N[e].m(h,null);d=!0},p(t,[n]){const a={};if(1&n&&(a.current=t[0]),e.$set(a),2&n){let e;for(m=t[1],e=0;e<m.length;e+=1){const a=X(t,m,e);g[e]?(g[e].p(a,n),E(g[e],1)):(g[e]=Y(a),g[e].c(),E(g[e],1),g[e].m(r,null))}for(D(),e=m.length;e<g.length;e+=1)$(e);b()}if(4&n){let e;for(y=t[2],e=0;e<y.length;e+=1){const r=G(t,y,e);N[e]?(N[e].p(r,n),E(N[e],1)):(N[e]=Z(r),N[e].c(),E(N[e],1),N[e].m(h,null))}for(D(),e=y.length;e<N.length;e+=1)z(e);b()}},i(t){if(!d){E(e.$$.fragment,t);for(let t=0;t<m.length;t+=1)E(g[t]);for(let t=0;t<y.length;t+=1)E(N[t]);d=!0}},o(t){I(e.$$.fragment,t),g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)I(g[e]);N=N.filter(Boolean);for(let e=0;e<N.length;e+=1)I(N[e]);d=!1},d(t){k(e,t),t&&i(n),t&&i(r),S(g,t),t&&i(o),t&&i(h),S(N,t)}}}function et(t,e,n){let{current:r}=e,{hourly:a}=e,{daily:l}=e;return t.$$set=t=>{"current"in t&&n(0,r=t.current),"hourly"in t&&n(1,a=t.hourly),"daily"in t&&n(2,l=t.daily)},[r,a,l]}class nt extends t{constructor(t){super(),e(this,t,et,tt,n,{current:0,hourly:1,daily:2})}}function rt(t){let e,n,r,a;const l=[lt,at],o=[];function c(t,e){return t[1]?0:1}return e=c(t),n=o[e]=l[e](t),{c(){n.c(),r=z()},l(t){n.l(t),r=z()},m(t,n){o[e].m(t,n),p(t,r,n),a=!0},p(t,a){let s=e;e=c(t),e===s?o[e].p(t,a):(D(),I(o[s],1,1,(()=>{o[s]=null})),b(),n=o[e],n?n.p(t,a):(n=o[e]=l[e](t),n.c()),E(n,1),n.m(r.parentNode,r))},i(t){a||(E(n),a=!0)},o(t){I(n),a=!1},d(t){o[e].d(t),t&&i(r)}}}function at(t){let e;return{c(){e=o("Failed")},l(t){e=h(t,"Failed")},m(t,n){p(t,e,n)},p:g,i:g,o:g,d(t){t&&i(e)}}}function lt(t){let e,n;return e=new nt({props:{isCached:!0,current:t[1],hourly:t[2],daily:t[3]}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.current=t[1]),4&n&&(r.hourly=t[2]),8&n&&(r.daily=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ot(t){let e,n,r=t[8]&&ct(t);return{c(){r&&r.c(),e=z()},l(t){r&&r.l(t),e=z()},m(t,a){r&&r.m(t,a),p(t,e,a),n=!0},p(t,n){t[8]?r?(r.p(t,n),16&n&&E(r,1)):(r=ct(t),r.c(),E(r,1),r.m(e.parentNode,e)):r&&(D(),I(r,1,1,(()=>{r=null})),b())},i(t){n||(E(r),n=!0)},o(t){I(r),n=!1},d(t){r&&r.d(t),t&&i(e)}}}function ct(t){let e,n;return e=new nt({props:{current:t[8].current,hourly:t[8].hourly,daily:t[8].daily}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};16&n&&(r.current=t[8].current),16&n&&(r.hourly=t[8].hourly),16&n&&(r.daily=t[8].daily),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function st(t){let e,n,r,a;const l=[ut,it],o=[];function c(t,e){return t[0]?0:1}return e=c(t),n=o[e]=l[e](t),{c(){n.c(),r=z()},l(t){n.l(t),r=z()},m(t,n){o[e].m(t,n),p(t,r,n),a=!0},p(t,a){let s=e;e=c(t),e===s?o[e].p(t,a):(D(),I(o[s],1,1,(()=>{o[s]=null})),b(),n=o[e],n?n.p(t,a):(n=o[e]=l[e](t),n.c()),E(n,1),n.m(r.parentNode,r))},i(t){a||(E(n),a=!0)},o(t){I(n),a=!1},d(t){o[e].d(t),t&&i(r)}}}function it(t){let e;return{c(){e=o("No cached weather data: waiting")},l(t){e=h(t,"No cached weather data: waiting")},m(t,n){p(t,e,n)},p:g,i:g,o:g,d(t){t&&i(e)}}}function ut(t){let e,n;return e=new nt({props:{isCached:!0,current:t[1],hourly:t[2],daily:t[3]}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){x(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.current=t[1]),4&n&&(r.hourly=t[2]),8&n&&(r.daily=t[3]),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ht(t){let e,n,r,a={ctx:t,current:null,token:null,hasCatch:!0,pending:st,then:ot,catch:rt,value:8,error:9,blocks:[,,,]};return N(n=t[4],a),{c(){e=z(),a.block.c()},l(t){e=z(),a.block.l(t)},m(t,n){p(t,e,n),a.block.m(t,a.anchor=n),a.mount=()=>e.parentNode,a.anchor=e,r=!0},p(e,[r]){t=e,a.ctx=t,16&r&&n!==(n=t[4])&&N(n,a)||C(a,t,r)},i(t){r||(E(a.block),r=!0)},o(t){for(let e=0;e<3;e+=1){const t=a.blocks[e];I(t)}r=!1},d(t){t&&i(e),a.block.d(t),a.token=null,a=null}}}function ft(t,e,n){let r,a,l,o,{latitude:c}=e,{longitude:s}=e,i=localStorage.getItem("cachedWeather");async function u(){if(!c||!s)return null;const t=`https://api.openweathermap.org/data/2.5/onecall?lat=${c}&lon=${s}&exclude=minutely&appid=dcba0ed759c66085eaeeca7f746953d9`,e=await fetch(t),n=await e.json(),{current:r,daily:a,hourly:l}=n,o=l.slice(2,5),i={current:r,daily:a.slice(1,5),hourly:o};return localStorage.setItem("cachedWeather",JSON.stringify(i)),i}return"function"!=typeof fetch&&(fetch=require("node-fetch")),o=u(),setInterval((()=>{console.log("getting weather"),n(0,i=localStorage.getItem("cachedWeather")),n(4,o=u())}),3e5),t.$$set=t=>{"latitude"in t&&n(5,c=t.latitude),"longitude"in t&&n(6,s=t.longitude)},t.$$.update=()=>{if(1&t.$$.dirty)try{let t=JSON.parse(i);n(1,r=null==t?void 0:t.current),n(2,a=null==t?void 0:t.hourly),n(3,l=null==t?void 0:t.daily)}catch(e){}},[i,r,a,l,o,c,s]}class dt extends t{constructor(t){super(),e(this,t,ft,ht,n,{latitude:5,longitude:6})}}const pt=P(null),mt=P(null);function gt(t){let e,n,r,a,l,o;return{c(){e=B("svg"),n=B("circle"),r=B("line"),a=B("line"),this.h()},l(t){e=c(t,"svg",{style:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var l=s(e);n=c(l,"circle",{cx:!0,cy:!0,r:!0},1),s(n).forEach(i),r=c(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),s(r).forEach(i),a=c(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),s(a).forEach(i),l.forEach(i),this.h()},h(){f(n,"cx","12"),f(n,"cy","12"),f(n,"r","10"),f(r,"x1","15"),f(r,"y1","9"),f(r,"x2","9"),f(r,"y2","15"),f(a,"x1","9"),f(a,"y1","9"),f(a,"x2","15"),f(a,"y2","15"),f(e,"style",t[0]),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"height","24"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","2"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round"),f(e,"class","feather feather-x-circle svelte-snzubx")},m(c,s){p(c,e,s),m(e,n),m(e,r),m(e,a),l||(o=R(e,"click",t[1]),l=!0)},p(t,[n]){1&n&&f(e,"style",t[0])},i:g,o:g,d(t){t&&i(e),l=!1,o()}}}function $t(t,e,n){let{style:r=""}=e;return t.$$set=t=>{"style"in t&&n(0,r=t.style)},[r,function(e){W(t,e)}]}class yt extends t{constructor(t){super(),e(this,t,$t,gt,n,{style:0})}}function wt(t){let e,n,r,$,y,w,v,x,E,I,k,D,b,S,N,z,C=(t[0]?t[0]:"")+"";return{c(){e=a("p"),n=o(C),r=l(),$=a("div"),y=a("button"),w=o("Use Current Location"),v=l(),x=a("span"),E=o("or"),I=l(),k=a("div"),D=a("label"),b=o("Enter zip code:"),S=a("input"),this.h()},l(t){e=c(t,"P",{style:!0});var a=s(e);n=h(a,C),a.forEach(i),r=u(t),$=c(t,"DIV",{style:!0});var l=s($);y=c(l,"BUTTON",{});var o=s(y);w=h(o,"Use Current Location"),o.forEach(i),v=u(l),x=c(l,"SPAN",{});var f=s(x);E=h(f,"or"),f.forEach(i),I=u(l),k=c(l,"DIV",{});var d=s(k);D=c(d,"LABEL",{for:!0});var p=s(D);b=h(p,"Enter zip code:"),p.forEach(i),S=c(d,"INPUT",{name:!0,type:!0,pattern:!0}),d.forEach(i),l.forEach(i),this.h()},h(){d(e,"height","50px"),d(e,"text-align","center"),d(e,"color","#ff0000"),f(D,"for","zip"),f(S,"name","zip"),f(S,"type","text"),f(S,"pattern","[0-9]{5}"),d($,"display","flex"),d($,"justify-content","space-between")},m(a,l){p(a,e,l),m(e,n),p(a,r,l),p(a,$,l),m($,y),m(y,w),m($,v),m($,x),m(x,E),m($,I),m($,k),m(k,D),m(D,b),m(k,S),N||(z=[R(y,"click",t[5]),R(S,"keyup",t[6])],N=!0)},p(t,e){1&e&&C!==(C=(t[0]?t[0]:"")+"")&&j(n,C)},i:g,o:g,d(t){t&&i(e),t&&i(r),t&&i($),N=!1,F(z)}}}function vt(t){let e,n,r,o,h;return n=new yt({props:{style:"position: absolute; right: 1em;"}}),n.$on("click",t[4]),o=new dt({props:{latitude:t[1],longitude:t[2]}}),{c(){e=a("div"),w(n.$$.fragment),r=l(),w(o.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var a=s(e);v(n.$$.fragment,a),r=u(a),v(o.$$.fragment,a),a.forEach(i),this.h()},h(){f(e,"class","grid svelte-1vq6efn")},m(t,a){p(t,e,a),x(n,e,null),m(e,r),x(o,e,null),h=!0},p(t,e){const n={};2&e&&(n.latitude=t[1]),4&e&&(n.longitude=t[2]),o.$set(n)},i(t){h||(E(n.$$.fragment,t),E(o.$$.fragment,t),h=!0)},o(t){I(n.$$.fragment,t),I(o.$$.fragment,t),h=!1},d(t){t&&i(e),k(n),k(o)}}}function xt(t){let e,n,r,f,d,g,$,y,w,v;document.title=e="Weather v2.0.7";const x=[vt,wt],k=[];function S(t,e){return t[1]&&t[2]?0:1}return r=S(t),f=k[r]=x[r](t),{c(){n=l(),f.c(),d=l(),g=a("h2"),$=o("Weather v"),y=o("2.0.7"),w=o(":")},l(t){A('[data-svelte="svelte-1pulcks"]',document.head).forEach(i),n=u(t),f.l(t),d=u(t),g=c(t,"H2",{});var e=s(g);$=h(e,"Weather v"),y=h(e,"2.0.7"),w=h(e,":"),e.forEach(i)},m(t,e){p(t,n,e),k[r].m(t,e),p(t,d,e),p(t,g,e),m(g,$),m(g,y),m(g,w),v=!0},p(t,[n]){(!v||0&n)&&e!==(e="Weather v2.0.7")&&(document.title=e);let a=r;r=S(t),r===a?k[r].p(t,n):(D(),I(k[a],1,1,(()=>{k[a]=null})),b(),f=k[r],f?f.p(t,n):(f=k[r]=x[r](t),f.c()),E(f,1),f.m(d.parentNode,d))},i(t){v||(E(f),v=!0)},o(t){I(f),v=!1},d(t){t&&i(n),k[r].d(t),t&&i(d),t&&i(g)}}}const Et=!0;function It(t,e,n){let r,a;H(t,pt,(t=>n(1,r=t))),H(t,mt,(t=>n(2,a=t)));let l=null;async function o(t){if(t.match(/\d{5}/)){s();let e=await async function(t){const e=await fetch(`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${t}&country=us&maxRows=1&username=rafistrauss`);return e.ok?await e.json():(console.error(`Failed to fetch latLong from zip: ${e.statusText}`),n(0,l=e.statusText),null)}(t);const{lat:r,lng:a}=e.postalCodes[0];c(r,a)}}function c(t,e){pt.set(t),mt.set(e),localStorage.setItem("latitude",t),localStorage.setItem("longitude",e)}function s(){n(0,l=null)}V((async()=>{console.debug("Mounted index"),pt.set(localStorage.getItem("latitude")),mt.set(localStorage.getItem("longitude"))}));return[l,r,a,o,function(){localStorage.clear(),pt.set(null),mt.set(null)},function(){s(),navigator.geolocation.getCurrentPosition((function(t){c(t.coords.latitude,t.coords.longitude)}),(function(t){n(0,l=t.message),console.error(t)}))},t=>o(t.target.value)]}export default class extends t{constructor(t){super(),e(this,t,It,xt,n,{})}}export{Et as prerender};
