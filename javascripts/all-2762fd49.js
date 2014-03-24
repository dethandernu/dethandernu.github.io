(function(){var t,e,n,i,r,o,s,a,l,u,h,d,c,f,p,m,v,g,w,b,x,y,I,A,E,M,C,T,S,L,_,N,k=[].slice;v='<span class="odometer-value"></span>',f='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+v+"</span></span>",i='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+f+"</span></span>",s='<span class="odometer-formatting-mark"></span>',n="(,ddd).dd",a=/^\(?([^)]*)\)?(?:(.)(d+))?$/,l=30,o=2e3,t=20,u=2,r=.5,h=1e3/l,e=1e3/t,p="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",E=document.createElement("div").style,m=null!=E.transition||null!=E.webkitTransition||null!=E.mozTransition||null!=E.oTransition,I=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,w=function(t){var e;return e=document.createElement("div"),e.innerHTML=t,e.children[0]},y=function(t,e){return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},g=function(t,e){return y(t,e),t.className+=" "+e},M=function(t,e){var n;return null!=document.createEvent?(n=document.createEvent("HTMLEvents"),n.initEvent(e,!0,!0),t.dispatchEvent(n)):void 0},x=function(){var t,e;return null!=(t=null!=(e=window.performance)?"function"==typeof e.now?e.now():void 0:void 0)?t:+new Date},A=function(t,e){return null==e&&(e=0),e?(t*=Math.pow(10,e),t+=.5,t=Math.floor(t),t/=Math.pow(10,e)):Math.round(t)},C=function(t){return 0>t?Math.ceil(t):Math.floor(t)},b=function(t){return t-A(t)},S=!1,(T=function(){var t,e,n,i,r;if(!S&&null!=window.jQuery){for(S=!0,i=["html","text"],r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||null==(null!=(n=this[0])?n.odometer:void 0)?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return r}})(),setTimeout(T,0),c=function(){function t(e){var n,i,r,s,a,l,d,c,f,p;if(this.options=e,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;this.el.odometer=this,c=t.options;for(i in c)s=c[i],null==this.options[i]&&(this.options[i]=s);null==(a=this.options).duration&&(a.duration=o),this.MAX_VALUES=this.options.duration/h/u|0,this.resetFormat(),this.value=this.cleanValue(null!=(f=this.options.value)?f:""),this.renderInside(),this.render();try{for(p=["innerHTML","innerText","textContent"],l=0,d=p.length;d>l;l++)r=p[l],null!=this.el[r]&&!function(t){return function(e){return Object.defineProperty(t.el,e,{get:function(){var n;return"innerHTML"===e?t.inside.outerHTML:null!=(n=t.inside.innerText)?n:t.inside.textContent},set:function(e){return t.update(e)}})}}(this)(r)}catch(m){n=m,this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t;if(null!=d)try{return null==this.observer&&(this.observer=new d(function(t){return function(){var e;return e=t.el.innerText,t.renderInside(),t.render(t.value),t.update(e)}}(this))),this.watchMutations=!0,this.startWatchingMutations()}catch(e){t=e}},t.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>"),t=t.replace(/[.,]/g,""),t=t.replace("<radix>","."),t=parseFloat(t,10)||0),A(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,e,n,i,r,o;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,r=p.split(" "),o=[],n=0,i=r.length;i>n;n++)t=r[n],o.push(this.el.addEventListener(t,function(t){return function(){return e?!0:(e=!0,setTimeout(function(){return t.render(),e=!1,M(t.el,"odometerdone")},0),!0)}}(this),!1));return o}},t.prototype.resetFormat=function(){var t,e,i,r,o,s,l,u;if(t=null!=(l=this.options.format)?l:n,t||(t="d"),i=a.exec(t),!i)throw new Error("Odometer: Unparsable digit format");return u=i.slice(1,4),s=u[0],o=u[1],e=u[2],r=(null!=e?e.length:void 0)||0,this.format={repeating:s,radix:o,precision:r}},t.prototype.render=function(t){var e,n,i,r,o,s,a,l,u,h,d,c;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",s=this.options.theme,e=this.el.className.split(" "),o=[],l=0,h=e.length;h>l;l++)n=e[l],n.length&&((r=/^odometer-theme-(.+)$/.exec(n))?s=r[1]:/^odometer(-|$)/.test(n)||o.push(n));for(o.push("odometer"),m||o.push("odometer-no-transitions"),s?o.push("odometer-theme-"+s):o.push("odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.digits=[],a=!this.format.precision||!b(t)||!1,c=t.toString().split("").reverse(),u=0,d=c.length;d>u;u++)i=c[u],"."===i&&(a=!0),this.addDigit(i,a);return this.startWatchingMutations()},t.prototype.update=function(t){var e;return t=this.cleanValue(t),(e=t-this.value)?(y(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?g(this.el,"odometer-animating-up"):g(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(t){return function(){return t.el.offsetHeight,g(t.el,"odometer-animating")}}(this),0),this.value=t):void 0},t.prototype.renderDigit=function(){return w(i)},t.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,e,n){var i;return i=w(s),i.innerHTML=t,n&&g(i,n),this.insertDigit(i,e)},t.prototype.addDigit=function(t,e){var n,i,r,o;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(o=this.format.radix)?o:".",null,"odometer-radix-mark");if(e)for(r=!1;;){if(!this.format.repeating.length){if(r)throw new Error("Bad odometer format without digits");this.resetFormat(),r=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return i=this.renderDigit(),i.querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},t.prototype.animate=function(t){return m&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var n,i,r,o,s;if(i=+t-this.value)return o=r=x(),n=this.value,(s=function(a){return function(){var l,u,h;return x()-o>a.options.duration?(a.value=t,a.render(),M(a.el,"odometerdone"),void 0):(l=x()-r,l>e&&(r=x(),h=l/a.options.duration,u=i*h,n+=u,a.render(Math.round(n))),null!=I?I(s):setTimeout(s,e))}}(this))()},t.prototype.getDigitCount=function(){var t,e,n,i,r,o;for(i=1<=arguments.length?k.call(arguments,0):[],t=r=0,o=i.length;o>r;t=++r)n=i[t],i[t]=Math.abs(n);return e=Math.max.apply(Math,i),Math.ceil(Math.log(e+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,e,n,i,r,o,s;for(r=1<=arguments.length?k.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=o=0,s=r.length;s>o;t=++o)i=r[t],r[t]=i.toString(),n=e.exec(r[t]),r[t]=null==n?0:n[1].length;return Math.max.apply(Math,r)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var e,n,i,o,s,a,l,u,h,d,c,f,p,m,v,w,b,x,y,I,A,E,M,T,S,L,_;if(w=this.value,u=this.getFractionalDigitCount(w,t),u&&(t*=Math.pow(10,u),w*=Math.pow(10,u)),i=t-w){for(this.bindTransitionEnd(),o=this.getDigitCount(w,t),s=[],e=0,c=y=0;o>=0?o>y:y>o;c=o>=0?++y:--y){if(b=C(w/Math.pow(10,o-c-1)),l=C(t/Math.pow(10,o-c-1)),a=l-b,Math.abs(a)>this.MAX_VALUES){for(d=[],f=a/(this.MAX_VALUES+this.MAX_VALUES*e*r),n=b;a>0&&l>n||0>a&&n>l;)d.push(Math.round(n)),n+=f;d[d.length-1]!==l&&d.push(l),e++}else d=function(){_=[];for(var t=b;l>=b?l>=t:t>=l;l>=b?t++:t--)_.push(t);return _}.apply(this);for(c=I=0,E=d.length;E>I;c=++I)h=d[c],d[c]=Math.abs(h%10);s.push(d)}for(this.resetDigits(),L=s.reverse(),c=A=0,M=L.length;M>A;c=++A)for(d=L[c],this.digits[c]||this.addDigit(" ",c>=u),null==(x=this.ribbons)[c]&&(x[c]=this.digits[c].querySelector(".odometer-ribbon-inner")),this.ribbons[c].innerHTML="",0>i&&(d=d.reverse()),p=S=0,T=d.length;T>S;p=++S)h=d[p],v=document.createElement("div"),v.className="odometer-value",v.innerHTML=h,this.ribbons[c].appendChild(v),p===d.length-1&&g(v,"odometer-last-value"),0===p&&g(v,"odometer-first-value");return 0>b&&this.addDigit("-"),m=this.inside.querySelector(".odometer-radix-mark"),null!=m&&m.parent.removeChild(m),u?this.addSpacer(this.format.radix,this.digits[u-1],"odometer-radix-mark"):void 0}},t}(),c.options=null!=(_=window.odometerOptions)?_:{},setTimeout(function(){var t,e,n,i,r;if(window.odometerOptions){i=window.odometerOptions,r=[];for(t in i)e=i[t],r.push(null!=(n=c.options)[t]?n[t]:n[t]=e);return r}},0),c.init=function(){var t,e,n,i,r,o;if(null!=document.querySelectorAll){for(e=document.querySelectorAll(c.options.selector||".odometer"),o=[],n=0,i=e.length;i>n;n++)t=e[n],o.push(t.odometer=new c({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return o}},null!=(null!=(N=document.documentElement)?N.doScroll:void 0)&&null!=document.createEventObject?(L=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&c.options.auto!==!1&&c.init(),null!=L?L.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){return c.options.auto!==!1?c.init():void 0},!1),"function"==typeof define&&define.amd?define(["jquery"],function(){return c}):typeof exports===!1?module.exports=c:window.Odometer=c}).call(this),/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */
function(t,e,n,i){var r=t(e);t.fn.lazyload=function(o){function s(){var e=0;l.each(function(){var n=t(this);if(!u.skip_invisible||n.is(":visible"))if(t.abovethetop(this,u)||t.leftofbegin(this,u));else if(t.belowthefold(this,u)||t.rightoffold(this,u)){if(++e>u.failure_limit)return!1}else n.trigger("appear"),e=0})}var a,l=this,u={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return o&&(i!==o.failurelimit&&(o.failure_limit=o.failurelimit,delete o.failurelimit),i!==o.effectspeed&&(o.effect_speed=o.effectspeed,delete o.effectspeed),t.extend(u,o)),a=u.container===i||u.container===e?r:t(u.container),0===u.event.indexOf("scroll")&&a.bind(u.event,function(){return s()}),this.each(function(){var e=this,n=t(e);e.loaded=!1,(n.attr("src")===i||n.attr("src")===!1)&&n.is("img")&&n.attr("src",u.placeholder),n.one("appear",function(){if(!this.loaded){if(u.appear){var i=l.length;u.appear.call(e,i,u)}t("<img />").bind("load",function(){var i=n.attr("data-"+u.data_attribute);n.hide(),n.is("img")?n.attr("src",i):n.css("background-image","url('"+i+"')"),n[u.effect](u.effect_speed),e.loaded=!0;var r=t.grep(l,function(t){return!t.loaded});if(l=t(r),u.load){var o=l.length;u.load.call(e,o,u)}}).attr("src",n.attr("data-"+u.data_attribute))}}),0!==u.event.indexOf("scroll")&&n.bind(u.event,function(){e.loaded||n.trigger("appear")})}),r.bind("resize",function(){s()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&r.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&l.each(function(){t(this).trigger("appear")})}),t(n).ready(function(){s()}),this},t.belowthefold=function(n,o){var s;return s=o.container===i||o.container===e?(e.innerHeight?e.innerHeight:r.height())+r.scrollTop():t(o.container).offset().top+t(o.container).height(),s<=t(n).offset().top-o.threshold},t.rightoffold=function(n,o){var s;return s=o.container===i||o.container===e?r.width()+r.scrollLeft():t(o.container).offset().left+t(o.container).width(),s<=t(n).offset().left-o.threshold},t.abovethetop=function(n,o){var s;return s=o.container===i||o.container===e?r.scrollTop():t(o.container).offset().top,s>=t(n).offset().top+o.threshold+t(n).height()},t.leftofbegin=function(n,o){var s;return s=o.container===i||o.container===e?r.scrollLeft():t(o.container).offset().left,s>=t(n).offset().left+o.threshold+t(n).width()},t.inviewport=function(e,n){return!(t.rightoffold(e,n)||t.leftofbegin(e,n)||t.belowthefold(e,n)||t.abovethetop(e,n))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document),function(t){function e(){var e,n,i={height:u.innerHeight,width:u.innerWidth};return i.height||(e=l.compatMode,(e||!t.support.boxModel)&&(n="CSS1Compat"===e?h:l.body,i={height:n.clientHeight,width:n.clientWidth})),i}function n(){return{top:u.pageYOffset||h.scrollTop||l.body.scrollTop,left:u.pageXOffset||h.scrollLeft||l.body.scrollLeft}}function i(){var i,s=t(),l=0;if(t.each(a,function(t,e){var n=e.data.selector,i=e.$element;s=s.add(n?i.find(n):i)}),i=s.length)for(r=r||e(),o=o||n();i>l;l++)if(t.contains(h,s[l])){var u,d,c,f=t(s[l]),p={height:f.height(),width:f.width()},m=f.offset(),v=f.data("inview");if(!o||!r)return;m.top+p.height>o.top&&m.top<o.top+r.height&&m.left+p.width>o.left&&m.left<o.left+r.width?(u=o.left>m.left?"right":o.left+r.width<m.left+p.width?"left":"both",d=o.top>m.top?"bottom":o.top+r.height<m.top+p.height?"top":"both",c=u+"-"+d,v&&v===c||f.data("inview",c).trigger("inview",[!0,u,d])):v&&f.data("inview",!1).trigger("inview",[!1])}}var r,o,s,a={},l=document,u=window,h=l.documentElement,d=t.expando;t.event.special.inview={add:function(e){a[e.guid+"-"+this[d]]={data:e,$element:t(this)},s||t.isEmptyObject(a)||(s=setInterval(i,250))},remove:function(e){try{delete a[e.guid+"-"+this[d]]}catch(n){}t.isEmptyObject(a)&&(clearInterval(s),s=null)}},t(u).bind("scroll resize",function(){r=o=null}),!h.addEventListener&&h.attachEvent&&h.attachEvent("onfocusin",function(){o=null})}(jQuery),function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){var n=i(t,e)?o:r;n(t,e)}var i,r,o;"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(i=function(t,n){return e(n).test(t.className)},r=function(t,e){i(t,e)||(t.className=t.className+" "+e)},o=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:i,addClass:r,removeClass:o,toggleClass:n,has:i,add:r,remove:o,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){"use strict";function e(t,e){t.style.WebkitTransform=e,t.style.msTransform=e,t.style.transform=e}function n(){var e=o.clientWidth,n=t.innerWidth;return n>e?n:e}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){this.el=t,this.options=i({},this.options),i(this.options,e),this._init()}var o=t.document.documentElement,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},a=s[Modernizr.prefixed("transition")],l={transitions:Modernizr.csstransitions,support3d:Modernizr.csstransforms3d};r.prototype.options={},r.prototype._init=function(){this.grid=this.el.querySelector("#people"),this.gridItems=[].slice.call(this.grid.querySelectorAll(".photo")),this.itemsCount=this.gridItems.length,this.slideshow=this.el.querySelector("section.slideshow > ul"),this.slideshowItems=[].slice.call(this.slideshow.children),this.current=-1,this.ctrlPrev=this.el.querySelector("section.slideshow > nav > span.nav-prev"),this.ctrlNext=this.el.querySelector("section.slideshow > nav > span.nav-next"),this.ctrlClose=this.el.querySelector("section.slideshow > nav > span.nav-close"),this._initEvents()},r.prototype._initEvents=function(){var e=this;this.gridItems.forEach(function(t,n){t.addEventListener("click",function(){e._openSlideshow(n)})}),this.ctrlPrev.addEventListener("click",function(){e._navigate("prev")}),this.ctrlNext.addEventListener("click",function(){e._navigate("next")}),this.ctrlClose.addEventListener("click",function(){e._closeSlideshow()}),this.slideshow.addEventListener("click",function(){e._closeSlideshow()}),t.addEventListener("resize",function(){e._resizeHandler()}),document.addEventListener("keydown",function(t){if(e.isSlideshowVisible){var n=t.keyCode||t.which;switch(n){case 37:e._navigate("prev");break;case 39:e._navigate("next");break;case 27:e._closeSlideshow()}}}),t.addEventListener("scroll",function(){e.isSlideshowVisible?t.scrollTo(e.scrollPosition?e.scrollPosition.x:0,e.scrollPosition?e.scrollPosition.y:0):e.scrollPosition={x:t.pageXOffset||o.scrollLeft,y:t.pageYOffset||o.scrollTop}})},r.prototype._openSlideshow=function(t){if(this.isSlideshowVisible=!0,this.current=t,classie.addClass(this.el,"slideshow-open"),this._setViewportItems(),classie.addClass(this.currentItem,"current"),classie.addClass(this.currentItem,"show"),this.prevItem){classie.addClass(this.prevItem,"show");var i=Number(-1*(n()/2+this.prevItem.offsetWidth/2));e(this.prevItem,l.support3d?"translate3d("+i+"px, 0, -150px)":"translate("+i+"px)")}if(this.nextItem){classie.addClass(this.nextItem,"show");var i=Number(n()/2+this.nextItem.offsetWidth/2);e(this.nextItem,l.support3d?"translate3d("+i+"px, 0, -150px)":"translate("+i+"px)")}},r.prototype._navigate=function(t){if(!this.isAnimating){if("next"===t&&this.current===this.itemsCount-1||"prev"===t&&0===this.current)return this._closeSlideshow(),void 0;this.isAnimating=!0,this._setViewportItems();var i,r,o,s=this,u=this.currentItem.offsetWidth,h=l.support3d?"translate3d(-"+Number(n()/2+u/2)+"px, 0, -150px)":"translate(-"+Number(n()/2+u/2)+"px)",d=l.support3d?"translate3d("+Number(n()/2+u/2)+"px, 0, -150px)":"translate("+Number(n()/2+u/2)+"px)",c="";"next"===t?(i=l.support3d?"translate3d( -"+Number(2*n()/2+u/2)+"px, 0, -150px )":"translate(-"+Number(2*n()/2+u/2)+"px)",r=l.support3d?"translate3d( "+Number(2*n()/2+u/2)+"px, 0, -150px )":"translate("+Number(2*n()/2+u/2)+"px)"):(i=l.support3d?"translate3d( "+Number(2*n()/2+u/2)+"px, 0, -150px )":"translate("+Number(2*n()/2+u/2)+"px)",r=l.support3d?"translate3d( -"+Number(2*n()/2+u/2)+"px, 0, -150px )":"translate(-"+Number(2*n()/2+u/2)+"px)"),classie.removeClass(s.slideshow,"animatable"),("next"===t&&this.current<this.itemsCount-2||"prev"===t&&this.current>1)&&(o=this.slideshowItems["next"===t?this.current+2:this.current-2],e(o,r),classie.addClass(o,"show"));var f=function(){classie.addClass(s.slideshow,"animatable"),classie.removeClass(s.currentItem,"current");var n="next"===t?s.nextItem:s.prevItem;classie.addClass(n,"current"),e(s.currentItem,"next"===t?h:d),s.nextItem&&e(s.nextItem,"next"===t?c:i),s.prevItem&&e(s.prevItem,"next"===t?i:c),o&&e(o,"next"===t?d:h);var r=function(e){if(l.transitions){if(-1===e.propertyName.indexOf("transform"))return!1;this.removeEventListener(a,r)}s.prevItem&&"next"===t?classie.removeClass(s.prevItem,"show"):s.nextItem&&"prev"===t&&classie.removeClass(s.nextItem,"show"),"next"===t?(s.prevItem=s.currentItem,s.currentItem=s.nextItem,o&&(s.nextItem=o)):(s.nextItem=s.currentItem,s.currentItem=s.prevItem,o&&(s.prevItem=o)),s.current="next"===t?s.current+1:s.current-1,s.isAnimating=!1};l.transitions?s.currentItem.addEventListener(a,r):r()};setTimeout(f,25)}},r.prototype._closeSlideshow=function(){classie.removeClass(this.el,"slideshow-open"),classie.removeClass(this.slideshow,"animatable");var t=this,n=function(i){if(l.transitions){if("ul"!==i.target.tagName.toLowerCase())return;this.removeEventListener(a,n)}classie.removeClass(t.currentItem,"current"),classie.removeClass(t.currentItem,"show"),t.prevItem&&classie.removeClass(t.prevItem,"show"),t.nextItem&&classie.removeClass(t.nextItem,"show"),t.slideshowItems.forEach(function(t){e(t,"")}),t.isSlideshowVisible=!1};l.transitions?this.el.addEventListener(a,n):n()},r.prototype._setViewportItems=function(){this.currentItem=null,this.prevItem=null,this.nextItem=null,this.current>0&&(this.prevItem=this.slideshowItems[this.current-1]),this.current<this.itemsCount-1&&(this.nextItem=this.slideshowItems[this.current+1]),this.currentItem=this.slideshowItems[this.current]},r.prototype._resizeHandler=function(){function t(){e._resize(),e._resizeTimeout=null}var e=this;this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(t,50)},r.prototype._resize=function(){if(this.isSlideshowVisible){if(this.prevItem){var t=Number(-1*(n()/2+this.prevItem.offsetWidth/2));e(this.prevItem,l.support3d?"translate3d("+t+"px, 0, -150px)":"translate("+t+"px)")}if(this.nextItem){var t=Number(n()/2+this.nextItem.offsetWidth/2);e(this.nextItem,l.support3d?"translate3d("+t+"px, 0, -150px)":"translate("+t+"px)")}}},t.CBPGridGallery=r}(window),function(){$("[data-twitter-count]").each(function(){var t;return(t=$(this).data("twitter-count"))?$.ajax({url:"http://urls.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(t),dataType:"jsonp"}).success(function(t){return function(e){return $(t).html(e.count)}}(this)):void 0}),$("[data-facebook-count]").each(function(){var t;return(t=$(this).data("facebook-count"))?$.ajax({url:"http://graph.facebook.com/"+encodeURIComponent(t),dataType:"jsonp"}).success(function(t){return function(e){return $(t).html(e.shares)}}(this)):void 0}),$("form#interest").submit(function(t){var e,n,i;return t.preventDefault(),n=$(this).find('input[name="email"]'),e=$(this).find('input[name="email"]').val(),i=$(this).attr("action"),e?$.post(i,{email:e}).success(function(t){return alert(t.message),n.val("")}).fail(function(t){return alert(t.message)}):!1}),$(".photo").each(function(t,e){return $(e).one("inview",function(t,e){var n;return e?(n=$(this),n.css("background-image","url("+n.data("src")+")")):void 0})}),$("img.profile").lazyload()}.call(this);