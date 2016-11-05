!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=u.p+""+e+"."+v+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=u.p+""+v+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(t){return e(t)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(t){return void e(t)}e(null,o)}}}function o(e){function t(e,t){"ready"===w&&r("prepare"),_++,u.e(e,function(){function n(){_--,"prepare"===w&&(O[e]||a(e),0===_&&0===A&&f())}try{t.call(null,o)}finally{n()}})}var n=D[e];if(!n)return u;var o=function(t){return n.hot.active?D[t]?(D[t].parents.indexOf(e)<0&&D[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):b=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),b=[]),u(t)};for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&(g?Object.defineProperty(o,i,function(e){return{configurable:!0,enumerable:!0,get:function(){return u[e]},set:function(t){u[e]=t}}}(i)):o[i]=u[i]);return g?Object.defineProperty(o,"e",{enumerable:!0,value:t}):o.e=t,o}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:l,status:function(e){return e?void k.push(e):w},addStatusHandler:function(e){k.push(e)},removeStatusHandler:function(e){var t=k.indexOf(e);t>=0&&k.splice(t,1)},data:x[e]};return t}function r(e){w=e;for(var t=0;t<k.length;t++)k[t].call(null,e)}function p(e){var t=+e+""===e;return t?+e:e}function s(e,t){if("idle"!==w)throw new Error("check() is only allowed in idle status");"function"==typeof e?(m=!1,t=e):(m=e,t=t||function(e){if(e)throw e}),r("check"),n(function(e,n){if(e)return t(e);if(!n)return r("idle"),void t(null,null);E={},P={},O={};for(var o=0;o<n.c.length;o++)P[n.c[o]]=!0;j=n.h,r("prepare"),h=t,y={};var i=0;a(i),"prepare"===w&&0===_&&0===A&&f()})}function c(e,t){if(P[e]&&E[e]){E[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0===--A&&0===_&&f()}}function a(e){P[e]?(E[e]=!0,A++,t(e)):O[e]=!0}function f(){r("ready");var e=h;if(h=null,e)if(m)l(m,e);else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(p(n));e(null,t)}}function l(t,n){function o(e){for(var t=[e],n={},o=t.slice();o.length>0;){var r=o.pop(),e=D[r];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+r);if(0===r)return;for(var p=0;p<e.parents.length;p++){var s=e.parents[p],c=D[s];if(c.hot._declinedDependencies[r])return new Error("Aborted because of declined dependency: "+r+" in "+s);t.indexOf(s)>=0||(c.hot._acceptedDependencies[r]?(n[s]||(n[s]=[]),i(n[s],[r])):(delete n[s],t.push(s),o.push(s)))}}}return[t,n]}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==w)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var s={},c=[],a={};for(var f in y)if(Object.prototype.hasOwnProperty.call(y,f)){var l=p(f),d=o(l);if(!d){if(t.ignoreUnaccepted)continue;return r("abort"),n(new Error("Aborted because "+l+" is not accepted"))}if(d instanceof Error)return r("abort"),n(d);a[l]=y[l],i(c,d[0]);for(var l in d[1])Object.prototype.hasOwnProperty.call(d[1],l)&&(s[l]||(s[l]=[]),i(s[l],d[1][l]))}for(var g=[],h=0;h<c.length;h++){var l=c[h];D[l]&&D[l].hot._selfAccepted&&g.push({module:l,errorHandler:D[l].hot._selfAccepted})}r("dispose");for(var m=c.slice();m.length>0;){var l=m.pop(),k=D[l];if(k){for(var A={},_=k.hot._disposeHandlers,O=0;O<_.length;O++){var E=_[O];E(A)}x[l]=A,k.hot.active=!1,delete D[l];for(var O=0;O<k.children.length;O++){var P=D[k.children[O]];if(P){var H=P.parents.indexOf(l);H>=0&&P.parents.splice(H,1)}}}}for(var l in s)if(Object.prototype.hasOwnProperty.call(s,l))for(var k=D[l],T=s[l],O=0;O<T.length;O++){var Q=T[O],H=k.children.indexOf(Q);H>=0&&k.children.splice(H,1)}r("apply"),v=j;for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);var J=null;for(var l in s)if(Object.prototype.hasOwnProperty.call(s,l)){for(var k=D[l],T=s[l],G=[],h=0;h<T.length;h++){var Q=T[h],E=k.hot._acceptedDependencies[Q];G.indexOf(E)>=0||G.push(E)}for(var h=0;h<G.length;h++){var E=G[h];try{E(s)}catch(e){J||(J=e)}}}for(var h=0;h<g.length;h++){var N=g[h],l=N.module;b=[l];try{u(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(e){J||(J=e)}else J||(J=e)}}return J?(r("fail"),n(J)):(r("idle"),void n(null,c))}function u(t){if(D[t])return D[t].exports;var n=D[t]={exports:{},id:t,loaded:!1,hot:i(t),parents:b,children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.loaded=!0,n.exports}var d=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),d&&d(e,t)};var g=!1;try{Object.defineProperty({},"x",{get:function(){}}),g=!0}catch(e){}var h,y,j,m=!0,v="1e9fad8b6e0b5d05a8be",x={},b=[],k=[],w="idle",A=0,_=0,O={},E={},P={},D={};return u.m=e,u.c=D,u.p="./",u.h=function(){return v},o(0)(0)}([function(e,t,n){n(82),n(2),n(1),n(83),n(84),n(81)},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"imgs/closebuilding1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy10.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy11.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy12.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy13.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy14.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy15.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy16.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy17.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy18.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy2.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy3.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy4.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy5.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy6.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy7.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy8.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy9.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan2.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan3.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan4.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan5.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan6.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan7.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan8.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan9.jpg"},function(e,t,n){e.exports=n.p+"imgs/fixcomputer1.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter1.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter2.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter3.jpg"},function(e,t,n){e.exports=n.p+"imgs/ic_desktop_mac_36pt_2x.png"},function(e,t,n){e.exports=n.p+"imgs/ic_desktop_mac_black_36dp_2x.png"},function(e,t,n){e.exports=n.p+"imgs/index-1.png"},function(e,t,n){e.exports=n.p+"imgs/netcopy1.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy10.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy11.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy12.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy13.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy14.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy15.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy16.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy17.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy18.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy2.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy3.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy4.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy5.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy6.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy7.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy8.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy9.jpg"},function(e,t,n){e.exports=n.p+"imgs/printer1.jpg"},function(e,t,n){e.exports=n.p+"imgs/printer2.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip1.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip10.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip2.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip3.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip4.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip5.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip6.JPG"},function(e,t,n){e.exports=n.p+"imgs/printerip7.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip8.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip9.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd1.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd2.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd3.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd4.jpg"},function(e,t,n){e.exports=n.p+"imgs/system1.jpg"},function(e,t,n){e.exports=n.p+"imgs/system2.jpg"},function(e,t,n){e.exports=n.p+"imgs/system3.jpg"},function(e,t,n){e.exports=n.p+"imgs/system4.jpg"},function(e,t,n){e.exports=n.p+"imgs/system5.jpg"},function(e,t,n){e.exports=n.p+"imgs/system6.jpg"},function(e,t,n){e.exports=n.p+"imgs/system7.jpg"},function(e,t,n){e.exports=n.p+"imgs/system8.jpg"},function(e,t,n){e.exports=n.p+"imgs/system9.jpg"},function(e,t,n){function o(e){return n(i(e))}function i(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./closebuilding1.jpg":3,"./diskcopy1.jpg":4,"./diskcopy10.jpg":5,"./diskcopy11.jpg":6,"./diskcopy12.jpg":7,"./diskcopy13.jpg":8,"./diskcopy14.jpg":9,"./diskcopy15.jpg":10,"./diskcopy16.jpg":11,"./diskcopy17.jpg":12,"./diskcopy18.jpg":13,"./diskcopy2.jpg":14,"./diskcopy3.jpg":15,"./diskcopy4.jpg":16,"./diskcopy5.jpg":17,"./diskcopy6.jpg":18,"./diskcopy7.jpg":19,"./diskcopy8.jpg":20,"./diskcopy9.jpg":21,"./diskscan1.jpg":22,"./diskscan2.jpg":23,"./diskscan3.jpg":24,"./diskscan4.jpg":25,"./diskscan5.jpg":26,"./diskscan6.jpg":27,"./diskscan7.jpg":28,"./diskscan8.jpg":29,"./diskscan9.jpg":30,"./fixcomputer1.jpg":31,"./fprinter1.jpg":32,"./fprinter2.jpg":33,"./fprinter3.jpg":34,"./ic_desktop_mac_36pt_2x.png":35,"./ic_desktop_mac_black_36dp_2x.png":36,"./index-1.png":37,"./netcopy1.jpg":38,"./netcopy10.jpg":39,"./netcopy11.jpg":40,"./netcopy12.jpg":41,"./netcopy13.jpg":42,"./netcopy14.jpg":43,"./netcopy15.jpg":44,"./netcopy16.jpg":45,"./netcopy17.jpg":46,"./netcopy18.jpg":47,"./netcopy2.jpg":48,"./netcopy3.jpg":49,"./netcopy4.jpg":50,"./netcopy5.jpg":51,"./netcopy6.jpg":52,"./netcopy7.jpg":53,"./netcopy8.jpg":54,"./netcopy9.jpg":55,"./printer1.jpg":56,"./printer2.jpg":57,"./printerip1.JPG":58,"./printerip10.jpg":59,"./printerip2.JPG":60,"./printerip3.JPG":61,"./printerip4.JPG":62,"./printerip5.JPG":63,"./printerip6.JPG":64,"./printerip7.jpg":65,"./printerip8.jpg":66,"./printerip9.jpg":67,"./rhd1.jpg":68,"./rhd2.jpg":69,"./rhd3.jpg":70,"./rhd4.jpg":71,"./system1.jpg":72,"./system2.jpg":73,"./system3.jpg":74,"./system4.jpg":75,"./system5.jpg":76,"./system6.jpg":77,"./system7.jpg":78,"./system8.jpg":79,"./system9.jpg":80};o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=81},function(e,t){!function(e){e(function(){function t(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),null===e?"N/A":"#"+t(e[1])+t(e[2])+t(e[3]))}function n(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}e(".dynamic-color .col").each(function(){e(this).children().each(function(){var n=e(this).css("background-color"),o=e(this).attr("class");e(this).html(t(n)+" "+o),(o.indexOf("darken")>=0||e(this).hasClass("black"))&&e(this).css("color","rgba(255,255,255,.9")})}),setTimeout(function(){var t=260,n=e(".toc-wrapper .table-of-contents").length?e(".toc-wrapper .table-of-contents").height():0,o=95,i=e("body > footer").first().length?e("body > footer").first().offset().top:0,r=i-o-n-t;e("nav").length?e(".toc-wrapper").pushpin({top:e("nav").height(),bottom:r}):e("#index-banner").length?e(".toc-wrapper").pushpin({top:e("#index-banner").height(),bottom:r}):e(".toc-wrapper").pushpin({top:0,bottom:r})},100),n()&&e("#nav-mobile").css({overflow:"auto"}),e(".scrollspy").scrollSpy({scrollOffset:"10"}),e(".button-collapse").sideNav(),e(".collapsible").collapsible(),e(".materialboxed").materialbox(),e(".parallax").parallax(),e("img.lazy").lazyload()})}(jQuery),function(e){var t,n={kitId:"xpl3urw",scriptTimeout:5e3,async:!0},o=e.documentElement,i=setTimeout(function(){o.className=o.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},n.scriptTimeout),r=e.createElement("script"),p=!1,s=e.getElementsByTagName("script")[0];o.className+=" wf-loading",r.src="https://use.typekit.net/"+n.kitId+".js",r.async=!0,r.onload=r.onreadystatechange=function(){if(t=this.readyState,!(p||t&&"complete"!=t&&"loaded"!=t)){p=!0,clearTimeout(i);try{Typekit.load(n)}catch(e){}}},s.parentNode.insertBefore(r,s)}(document)},function(e,t){/*!
	 * Lazy Load - jQuery plugin for lazy loading images
	 *
	 * Copyright (c) 2007-2015 Mika Tuupola
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 * Project home:
	 *   http://www.appelsiini.net/projects/lazyload
	 *
	 * Version:  1.9.7
	 *
	 */
!function(e,t,n,o){var i=e(t);e.fn.lazyload=function(r){function p(){var t=0;c.each(function(){var n=e(this);if(!a.skip_invisible||n.is(":visible"))if(e.abovethetop(this,a)||e.leftofbegin(this,a));else if(e.belowthefold(this,a)||e.rightoffold(this,a)){if(++t>a.failure_limit)return!1}else n.trigger("appear"),t=0})}var s,c=this,a={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(o!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),o!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(a,r)),s=a.container===o||a.container===t?i:e(a.container),0===a.event.indexOf("scroll")&&s.bind(a.event,function(){return p()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.attr("src")!==o&&n.attr("src")!==!1||n.is("img")&&n.attr("src",a.placeholder),n.one("appear",function(){if(!this.loaded){if(a.appear){var o=c.length;a.appear.call(t,o,a)}e("<img />").bind("load",function(){var o=n.attr("data-"+a.data_attribute);n.hide(),n.is("img")?n.attr("src",o):n.css("background-image","url('"+o+"')"),n[a.effect](a.effect_speed),t.loaded=!0;var i=e.grep(c,function(e){return!e.loaded});if(c=e(i),a.load){var r=c.length;a.load.call(t,r,a)}}).attr("src",n.attr("data-"+a.data_attribute))}}),0!==a.event.indexOf("scroll")&&n.bind(a.event,function(){t.loaded||n.trigger("appear")})}),i.bind("resize",function(){p()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&c.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){p()}),this},e.belowthefold=function(n,r){var p;return p=r.container===o||r.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(r.container).offset().top+e(r.container).height(),p<=e(n).offset().top-r.threshold},e.rightoffold=function(n,r){var p;return p=r.container===o||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width(),p<=e(n).offset().left-r.threshold},e.abovethetop=function(n,r){var p;return p=r.container===o||r.container===t?i.scrollTop():e(r.container).offset().top,p>=e(n).offset().top+r.threshold+e(n).height()},e.leftofbegin=function(n,r){var p;return p=r.container===o||r.container===t?i.scrollLeft():e(r.container).offset().left,p>=e(n).offset().left+r.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document)},function(e,t){!function(){var e=jQuery.event.special,t="D"+ +new Date,n="D"+(+new Date+1);e.scrollstart={setup:function(){var n,o=function(t){var o=this,i=arguments;n?clearTimeout(n):(t.type="scrollstart",jQuery.event.dispatch.apply(o,i)),n=setTimeout(function(){n=null},e.scrollstop.latency)};jQuery(this).bind("scroll",o).data(t,o)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(t))}},e.scrollstop={latency:300,setup:function(){var t,o=function(n){var o=this,i=arguments;t&&clearTimeout(t),t=setTimeout(function(){t=null,n.type="scrollstop",jQuery.event.dispatch.apply(o,i)},e.scrollstop.latency)};jQuery(this).bind("scroll",o).data(n,o)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(n))}}}()}]);