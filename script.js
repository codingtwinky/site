(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./blueimp-gallery"],a):a(window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";a.extend(b.prototype.options,{useBootstrapModal:!0});var c=b.prototype.close,d=b.prototype.imageFactory,e=b.prototype.videoFactory,f=b.prototype.textFactory;a.extend(b.prototype,{modalFactory:function(a,b,c,d){if(!this.options.useBootstrapModal||c)return d.call(this,a,b,c);var e=this,f=this.container.children(".modal"),g=f.clone().show().on("click",function(a){(a.target===g[0]||a.target===g.children()[0])&&(a.preventDefault(),a.stopPropagation(),e.close())}),h=d.call(this,a,function(a){b({type:a.type,target:g[0]}),g.addClass("in")},c);return g.find(".modal-title").text(h.title||String.fromCharCode(160)),g.find(".modal-body").append(h),g[0]},imageFactory:function(a,b,c){return this.modalFactory(a,b,c,d)},videoFactory:function(a,b,c){return this.modalFactory(a,b,c,e)},textFactory:function(a,b,c){return this.modalFactory(a,b,c,f)},close:function(){this.container.find(".modal").removeClass("in"),c.call(this)}})});
},{}],2:[function(require,module,exports){
!function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper"],a):(window.blueimp=window.blueimp||{},window.blueimp.Gallery=a(window.blueimp.helper||window.jQuery))}(function(a){"use strict";function b(a,c){return a&&a.length&&void 0!==document.body.style.maxHeight?this&&this.options===b.prototype.options?(this.list=a,this.num=a.length,this.initOptions(c),this.initialize(),void 0):new b(a,c):null}return a.extend(b.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",slideClass:"slide",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",urlProperty:"href",displayTransition:!0,clearSlides:!0,stretchImages:!1,toggleControlsOnReturn:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,emulateTouchEvents:!0,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,index:0,preloadRange:2,transitionSpeed:400,slideshowTransitionSpeed:void 0,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnReturn:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,disableScroll:!1,startSlideshow:!0},support:function(b){var c={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},d={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}},e=function(){var a,d,e=c.transition;document.body.appendChild(b),e&&(a=e.name.slice(0,-9)+"ransform",void 0!==b.style[a]&&(b.style[a]="translateZ(0)",d=window.getComputedStyle(b).getPropertyValue(e.prefix+"transform"),c.transform={prefix:e.prefix,name:a,translate:!0,translateZ:!!d&&"none"!==d})),void 0!==b.style.backgroundSize&&(c.backgroundSize={},b.style.backgroundSize="contain",c.backgroundSize.contain="contain"===window.getComputedStyle(b).getPropertyValue("background-size"),b.style.backgroundSize="cover",c.backgroundSize.cover="cover"===window.getComputedStyle(b).getPropertyValue("background-size")),document.body.removeChild(b)};return function(a,c){var d;for(d in c)if(c.hasOwnProperty(d)&&void 0!==b.style[d]){a.transition=c[d],a.transition.name=d;break}}(c,d),document.body?e():a(document).on("DOMContentLoaded",e),c}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,initialize:function(){return this.initStartIndex(),this.initWidget()===!1?!1:(this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),this.options.startSlideshow&&this.play(),void 0)},slide:function(a,b){window.clearTimeout(this.timeout);var c,d,e,f=this.index;if(f!==a&&1!==this.num){if(b||(b=this.options.transitionSpeed),this.support.transition){for(this.options.continuous||(a=this.circle(a)),c=Math.abs(f-a)/(f-a),this.options.continuous&&(d=c,c=-this.positions[this.circle(a)]/this.slideWidth,c!==d&&(a=-c*this.num+a)),e=Math.abs(f-a)-1;e;)e-=1,this.move(this.circle((a>f?a:f)-e-1),this.slideWidth*c,0);a=this.circle(a),this.move(f,this.slideWidth*c,b),this.move(a,0,b),this.options.continuous&&this.move(this.circle(a-c),-(this.slideWidth*c),0)}else a=this.circle(a),this.animate(f*-this.slideWidth,a*-this.slideWidth,b);this.onslide(a)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(a){var b=this;window.clearTimeout(this.timeout),this.interval=a||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(a,c){b.animationFrameId=b.requestAnimationFrame.call(window,function(){b.slide(a,c)})},[this.index+1,this.options.slideshowTransitionSpeed],this.interval)),this.container.addClass(this.options.playingClass)},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.container.removeClass(this.options.playingClass)},add:function(a){var b;for(a.concat||(a=Array.prototype.slice.call(a)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(a),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),b=this.num-a.length;b<this.num;b+=1)this.addSlide(b),this.positionSlide(b);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.slides=[]},handleClose:function(){var a=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(a.displayClass).removeClass(a.singleClass).removeClass(a.leftEdgeClass).removeClass(a.rightEdgeClass),a.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){var a=this,b=function(c){c.target===a.container[0]&&(a.container.off(a.support.transition.end,b),a.handleClose())};this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,b),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(a){return(this.num+a%this.num)%this.num},move:function(a,b,c){this.translateX(a,b,c),this.positions[a]=b},translate:function(a,b,c,d){var e=this.slides[a].style,f=this.support.transition,g=this.support.transform;e[f.name+"Duration"]=d+"ms",e[g.name]="translate("+b+"px, "+c+"px)"+(g.translateZ?" translateZ(0)":"")},translateX:function(a,b,c){this.translate(a,b,0,c)},translateY:function(a,b,c){this.translate(a,0,b,c)},animate:function(a,b,c){if(!c)return this.slidesContainer[0].style.left=b+"px",void 0;var d=this,e=(new Date).getTime(),f=window.setInterval(function(){var g=(new Date).getTime()-e;return g>c?(d.slidesContainer[0].style.left=b+"px",d.ontransitionend(),window.clearInterval(f),void 0):(d.slidesContainer[0].style.left=(b-a)*(Math.floor(g/c*100)/100)+a+"px",void 0)},4)},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},onresize:function(){this.initSlides(!0)},onmousedown:function(a){a.which&&1===a.which&&"VIDEO"!==a.target.nodeName&&((a.originalEvent||a).touches=[{pageX:a.pageX,pageY:a.pageY}],this.ontouchstart(a))},onmousemove:function(a){this.touchStart&&((a.originalEvent||a).touches=[{pageX:a.pageX,pageY:a.pageY}],this.ontouchmove(a))},onmouseup:function(a){this.touchStart&&(this.ontouchend(a),delete this.touchStart)},onmouseout:function(b){if(this.touchStart){var c=b.target,d=b.relatedTarget;(!d||d!==c&&!a.contains(c,d))&&this.onmouseup(b)}},ontouchstart:function(a){var b=(a.originalEvent||a).touches[0];this.touchStart={x:b.pageX,y:b.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(a){var b,c,d=(a.originalEvent||a).touches[0],e=(a.originalEvent||a).scale,f=this.index;if(!(d.length>1||e&&1!==e))if(this.options.disableScroll&&a.preventDefault(),this.touchDelta={x:d.pageX-this.touchStart.x,y:d.pageY-this.touchStart.y},b=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(b)<Math.abs(this.touchDelta.y)),this.isScrolling)this.options.closeOnSwipeUpOrDown&&this.translateY(f,this.touchDelta.y+this.positions[f],0);else for(a.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?c=[this.circle(f+1),f,this.circle(f-1)]:(this.touchDelta.x=b/=!f&&b>0||f===this.num-1&&0>b?Math.abs(b)/this.slideWidth+1:1,c=[f],f&&c.push(f-1),f<this.num-1&&c.unshift(f+1));c.length;)f=c.pop(),this.translateX(f,b+this.positions[f],0)},ontouchend:function(){var a,b,c,d,e,f=this.index,g=this.options.transitionSpeed,h=this.slideWidth,i=Number(Date.now()-this.touchStart.time)<250,j=i&&Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.x)>h/2,k=!f&&this.touchDelta.x>0||f===this.num-1&&this.touchDelta.x<0,l=!j&&this.options.closeOnSwipeUpOrDown&&(i&&Math.abs(this.touchDelta.y)>20||Math.abs(this.touchDelta.y)>this.slideHeight/2);this.options.continuous&&(k=!1),a=this.touchDelta.x<0?-1:1,this.isScrolling?l?this.close():this.translateY(f,0,g):j&&!k?(b=f+a,c=f-a,d=h*a,e=-h*a,this.options.continuous?(this.move(this.circle(b),d,0),this.move(this.circle(f-2*a),e,0)):b>=0&&b<this.num&&this.move(b,d,0),this.move(f,this.positions[f]+d,g),this.move(this.circle(c),this.positions[this.circle(c)]+d,g),f=this.circle(c),this.onslide(f)):this.options.continuous?(this.move(this.circle(f-1),-h,g),this.move(f,0,g),this.move(this.circle(f+1),h,g)):(f&&this.move(f-1,-h,g),this.move(f,0,g),f<this.num-1&&this.move(f+1,h,g))},ontransitionend:function(a){var b=this.slides[this.index];a&&b!==a.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,b]))},oncomplete:function(b){var c,d=b.target||b.srcElement,e=d&&d.parentNode;d&&e&&(c=this.getNodeIndex(e),a(e).removeClass(this.options.slideLoadingClass),"error"===b.type?(a(e).addClass(this.options.slideErrorClass),this.elements[c]=3):this.elements[c]=2,d.clientHeight>this.container[0].clientHeight&&(d.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===e&&this.play(),this.setTimeout(this.options.onslidecomplete,[c,e]))},onload:function(a){this.oncomplete(a)},onerror:function(a){this.oncomplete(a)},onkeydown:function(a){switch(a.which||a.keyCode){case 13:this.options.toggleControlsOnReturn&&(this.preventDefault(a),this.toggleControls());break;case 27:this.options.closeOnEscape&&this.close();break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(a),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(a),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(a),this.next())}},handleClick:function(b){var c=this.options,d=b.target||b.srcElement,e=d.parentNode,f=function(b){return a(d).hasClass(b)||a(e).hasClass(b)};f(c.toggleClass)?(this.preventDefault(b),this.toggleControls()):f(c.prevClass)?(this.preventDefault(b),this.prev()):f(c.nextClass)?(this.preventDefault(b),this.next()):f(c.closeClass)?(this.preventDefault(b),this.close()):f(c.playPauseClass)?(this.preventDefault(b),this.toggleSlideshow()):e===this.slidesContainer[0]?(this.preventDefault(b),c.closeOnSlideClick?this.close():this.toggleControls()):e.parentNode&&e.parentNode===this.slidesContainer[0]&&(this.preventDefault(b),this.toggleControls())},onclick:function(a){return this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)?(delete this.touchDelta,void 0):this.handleClick(a)},updateEdgeClasses:function(a){a?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),a===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},handleSlide:function(a){this.options.continuous||this.updateEdgeClasses(a),this.loadElements(a),this.options.unloadElements&&this.unloadElements(a),this.setTitle(a)},onslide:function(a){this.index=a,this.handleSlide(a),this.setTimeout(this.options.onslide,[a,this.slides[a]])},setTitle:function(a){var b=this.slides[a].firstChild.title,c=this.titleElement;c.length&&(this.titleElement.empty(),b&&c[0].appendChild(document.createTextNode(b)))},setTimeout:function(a,b,c){var d=this;return a&&window.setTimeout(function(){a.apply(d,b||[])},c||0)},imageFactory:function(b,c){var d,e,f,g=this,h=this.imagePrototype.cloneNode(!1),i=b,j=this.options.stretchImages,k=function(b){if(!d){if(b={type:b.type,target:e},!e.parentNode)return g.setTimeout(k,[b]);d=!0,a(h).off("load error",k),j&&"load"===b.type&&(e.style.background='url("'+i+'") center no-repeat',e.style.backgroundSize=j),c(b)}};return"string"!=typeof i&&(i=this.getItemProperty(b,this.options.urlProperty),f=this.getItemProperty(b,this.options.titleProperty)),j===!0&&(j="contain"),j=this.support.backgroundSize&&this.support.backgroundSize[j]&&j,j?e=this.elementPrototype.cloneNode(!1):(e=h,h.draggable=!1),f&&(e.title=f),a(h).on("load error",k),h.src=i,e},createElement:function(b,c){var d=b&&this.getItemProperty(b,this.options.typeProperty),e=d&&this[d.split("/")[0]+"Factory"]||this.imageFactory,f=b&&e.call(this,b,c);return f||(f=this.elementPrototype.cloneNode(!1),this.setTimeout(c,[{type:"error",target:f}])),a(f).addClass(this.options.slideContentClass),f},loadElement:function(b){this.elements[b]||(this.slides[b].firstChild?this.elements[b]=a(this.slides[b]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[b]=1,a(this.slides[b]).addClass(this.options.slideLoadingClass),this.slides[b].appendChild(this.createElement(this.list[b],this.proxyListener))))},loadElements:function(a){var b,c=Math.min(this.num,2*this.options.preloadRange+1),d=a;for(b=0;c>b;b+=1)d+=b*(b%2===0?-1:1),d=this.circle(d),this.loadElement(d)},unloadElements:function(a){var b,c,d;for(b in this.elements)this.elements.hasOwnProperty(b)&&(d=Math.abs(a-b),d>this.options.preloadRange&&d+this.options.preloadRange<this.num&&(c=this.slides[b],c.removeChild(c.firstChild),delete this.elements[b]))},addSlide:function(a){var b=this.slidePrototype.cloneNode(!1);b.setAttribute("data-index",a),this.slidesContainer[0].appendChild(b),this.slides.push(b)},positionSlide:function(a){var b=this.slides[a];b.style.width=this.slideWidth+"px",this.support.transition&&(b.style.left=a*-this.slideWidth+"px",this.move(a,this.index>a?-this.slideWidth:this.index<a?this.slideWidth:0,0))},initSlides:function(b){var c,d;for(b||(this.positions=[],this.positions.length=this.num,this.elements={},this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=document.createElement("div"),a(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,c=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].offsetWidth,this.slideHeight=this.container[0].offsetHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",c&&this.resetSlides(),d=0;d<this.num;d+=1)c&&this.addSlide(d),this.positionSlide(d);this.options.continuous&&this.support.transition&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transition||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},toggleControls:function(){var a=this.options.controlsClass;this.container.hasClass(a)?this.container.removeClass(a):this.container.addClass(a)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(a){return parseInt(a.getAttribute("data-index"),10)},getNestedProperty:function(a,b){return b.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,function(b,c,d,e,f){var g=f||c||d||e&&parseInt(e,10);b&&a&&(a=a[g])}),a},getDataProperty:function(b,c){if(b.getAttribute){var d=b.getAttribute("data-"+c.replace(/([A-Z])/g,"-$1").toLowerCase());if("string"==typeof d){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(d))try{return a.parseJSON(d)}catch(e){}return d}}},getItemProperty:function(a,b){var c=a[b];return void 0===c&&(c=this.getDataProperty(a,b),void 0===c&&(c=this.getNestedProperty(a,b))),c},initStartIndex:function(){var a,b=this.options.index,c=this.options.urlProperty;if(b&&"number"!=typeof b)for(a=0;a<this.num;a+=1)if(this.list[a]===b||this.getItemProperty(this.list[a],c)===this.getItemProperty(b,c)){b=a;break}this.index=this.circle(parseInt(b,10)||0)},initEventListeners:function(){var b=this,c=this.slidesContainer,d=function(a){var c=b.support.transition&&b.support.transition.end===a.type?"transitionend":a.type;b["on"+c](a)};a(window).on("resize",d),a(document.body).on("keydown",d),this.container.on("click",d),this.support.touch?c.on("touchstart touchmove touchend",d):this.options.emulateTouchEvents&&this.support.transition&&c.on("mousedown mousemove mouseup mouseout",d),this.support.transition&&c.on(this.support.transition.end,d),this.proxyListener=d},destroyEventListeners:function(){var b=this.slidesContainer,c=this.proxyListener;a(window).off("resize",c),a(document.body).off("keydown",c),this.container.off("click",c),this.support.touch?b.off("touchstart touchmove touchend",c):this.options.emulateTouchEvents&&this.support.transition&&b.off("mousedown mousemove mouseup mouseout",c),this.support.transition&&b.off(this.support.transition.end,c)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){var b=this,c=function(a){a.target===b.container[0]&&(b.container.off(b.support.transition.end,c),b.handleOpen())};return this.container=a(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,c):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),this.container.addClass(this.options.displayClass),void 0):!1):!1},initOptions:function(b){this.options=a.extend({},this.options),(b&&b.carousel||this.options.carousel&&(!b||b.carousel!==!1))&&a.extend(this.options,this.carouselOptions),a.extend(this.options,b),this.num<3&&(this.options.continuous=this.options.continuous?null:!1),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],a):a(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";a.extend(b.prototype.options,{fullScreen:!1});var c=b.prototype.initialize,d=b.prototype.handleClose;return a.extend(b.prototype,{getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement},requestFullScreen:function(a){a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.mozRequestFullScreen&&a.mozRequestFullScreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen&&document.mozCancelFullScreen()},initialize:function(){c.call(this),this.options.fullScreen&&!this.getFullScreenElement()&&this.requestFullScreen(this.container[0])},handleClose:function(){this.getFullScreenElement()===this.container[0]&&this.exitFullScreen(),d.call(this)}}),b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],a):a(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";a.extend(b.prototype.options,{indicatorContainer:"ol",activeIndicatorClass:"active",thumbnailProperty:"thumbnail",thumbnailIndicators:!0});var c=b.prototype.initSlides,d=b.prototype.addSlide,e=b.prototype.resetSlides,f=b.prototype.handleClick,g=b.prototype.handleSlide,h=b.prototype.handleClose;return a.extend(b.prototype,{createIndicator:function(b){var c,d,e=this.indicatorPrototype.cloneNode(!1),f=this.getItemProperty(b,this.options.titleProperty),g=this.options.thumbnailProperty;return this.options.thumbnailIndicators&&(d=b.getElementsByTagName&&a(b).find("img")[0],d?c=d.src:g&&(c=this.getItemProperty(b,g)),c&&(e.style.backgroundImage='url("'+c+'")')),f&&(e.title=f),e},addIndicator:function(a){if(this.indicatorContainer.length){var b=this.createIndicator(this.list[a]);b.setAttribute("data-index",a),this.indicatorContainer[0].appendChild(b),this.indicators.push(b)}},setActiveIndicator:function(b){this.indicators&&(this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.activeIndicator=a(this.indicators[b]),this.activeIndicator.addClass(this.options.activeIndicatorClass))},initSlides:function(a){a||(this.indicatorContainer=this.container.find(this.options.indicatorContainer),this.indicatorContainer.length&&(this.indicatorPrototype=document.createElement("li"),this.indicators=this.indicatorContainer[0].children)),c.call(this,a)},addSlide:function(a){d.call(this,a),this.addIndicator(a)},resetSlides:function(){e.call(this),this.indicatorContainer.empty(),this.indicators=[]},handleClick:function(a){var b=a.target||a.srcElement,c=b.parentNode;if(c===this.indicatorContainer[0])this.preventDefault(a),this.slide(this.getNodeIndex(b));else{if(c.parentNode!==this.indicatorContainer[0])return f.call(this,a);this.preventDefault(a),this.slide(this.getNodeIndex(c))}},handleSlide:function(a){g.call(this,a),this.setActiveIndicator(a)},handleClose:function(){this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),h.call(this)}}),b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],a):a(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";return a.extend(b.prototype.options,{videoContentClass:"video-content",videoLoadingClass:"video-loading",videoPlayingClass:"video-playing",videoPosterProperty:"poster",videoSourcesProperty:"sources"}),b.prototype.videoFactory=function(b,c,d){var e,f,g,h,i,j=this,k=this.options,l=this.elementPrototype.cloneNode(!1),m=a(l),n=[{type:"error",target:l}],o=d||document.createElement("video"),p=this.getItemProperty(b,k.urlProperty),q=this.getItemProperty(b,k.typeProperty),r=this.getItemProperty(b,k.titleProperty),s=this.getItemProperty(b,k.videoPosterProperty),t=this.getItemProperty(b,k.videoSourcesProperty);if(m.addClass(k.videoContentClass),r&&(l.title=r),o.canPlayType)if(p&&q&&o.canPlayType(q))o.src=p;else for(;t&&t.length;)if(f=t.shift(),p=this.getItemProperty(f,k.urlProperty),q=this.getItemProperty(f,k.typeProperty),p&&q&&o.canPlayType(q)){o.src=p;break}return s&&(o.poster=s,e=this.imagePrototype.cloneNode(!1),a(e).addClass(k.toggleClass),e.src=s,e.draggable=!1,l.appendChild(e)),g=document.createElement("a"),g.setAttribute("target","_blank"),d||g.setAttribute("download",r),g.href=p,o.src&&(o.controls=!0,(d||a(o)).on("error",function(){j.setTimeout(c,n)}).on("pause",function(){h=!1,m.removeClass(j.options.videoLoadingClass).removeClass(j.options.videoPlayingClass),i&&j.container.addClass(j.options.controlsClass),j.interval&&j.play()}).on("playing",function(){h=!1,m.removeClass(j.options.videoLoadingClass).addClass(j.options.videoPlayingClass),j.container.hasClass(j.options.controlsClass)?(i=!0,j.container.removeClass(j.options.controlsClass)):i=!1}).on("play",function(){window.clearTimeout(j.timeout),h=!0,m.addClass(j.options.videoLoadingClass)}),a(g).on("click",function(a){j.preventDefault(a),h?o.pause():o.play()}),l.appendChild(d&&d.element||o)),l.appendChild(g),this.setTimeout(c,[{type:"load",target:l}]),l},b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],a):a(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";if(!window.postMessage)return b;a.extend(b.prototype.options,{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0});var c=b.prototype.textFactory||b.prototype.imageFactory,d=function(a,b,c,d){this.url=a,this.videoId=b,this.playerId=c,this.clickToPlay=d,this.element=document.createElement("div"),this.listeners={}},e=0;return a.extend(d.prototype,{canPlayType:function(){return!0},on:function(a,b){return this.listeners[a]=b,this},loadAPI:function(){for(var b,c,d=this,e="//"+("https"===location.protocol?"secure-":"")+"a.vimeocdn.com/js/froogaloop2.min.js",f=document.getElementsByTagName("script"),g=f.length,h=function(){!c&&d.playOnReady&&d.play(),c=!0};g;)if(g-=1,f[g].src===e){b=f[g];break}b||(b=document.createElement("script"),b.src=e),a(b).on("load",h),f[0].parentNode.insertBefore(b,f[0]),/loaded|complete/.test(b.readyState)&&h()},onReady:function(){var a=this;this.ready=!0,this.player.addEvent("play",function(){a.hasPlayed=!0,a.onPlaying()}),this.player.addEvent("pause",function(){a.onPause()}),this.player.addEvent("finish",function(){a.onPause()}),this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},insertIframe:function(){var a=document.createElement("iframe");a.src=this.url.replace("VIDEO_ID",this.videoId).replace("PLAYER_ID",this.playerId),a.id=this.playerId,this.element.parentNode.replaceChild(a,this.element),this.element=a},play:function(){var a=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.api("play"):(this.playOnReady=!0,window.$f?this.player||(this.insertIframe(),this.player=$f(this.element),this.player.addEvent("ready",function(){a.onReady()})):this.loadAPI())},pause:function(){this.ready?this.player.api("pause"):this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),a.extend(b.prototype,{VimeoPlayer:d,textFactory:function(a,b){var f=this.getItemProperty(a,this.options.vimeoVideoIdProperty);return f?(e+=1,this.videoFactory(a,b,new d(this.options.vimeoPlayerUrl,f,this.options.vimeoPlayerIdPrefix+e,this.options.vimeoClickToPlay))):c.call(this,a,b)}}),b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],a):a(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";if(!window.postMessage)return b;a.extend(b.prototype.options,{youTubeVideoIdProperty:"youtube",youTubePlayerVars:void 0,youTubeClickToPlay:!0});var c=b.prototype.textFactory||b.prototype.imageFactory,d=function(a,b,c){this.videoId=a,this.playerVars=b,this.clickToPlay=c,this.element=document.createElement("div"),this.listeners={}};return a.extend(d.prototype,{canPlayType:function(){return!0},on:function(a,b){return this.listeners[a]=b,this},loadAPI:function(){var a,b=this,c=window.onYouTubeIframeAPIReady,d="//www.youtube.com/iframe_api",e=document.getElementsByTagName("script"),f=e.length;for(window.onYouTubeIframeAPIReady=function(){c&&c.apply(this),b.playOnReady&&b.play()};f;)if(f-=1,e[f].src===d)return;a=document.createElement("script"),a.src=d,e[0].parentNode.insertBefore(a,e[0])},onReady:function(){this.ready=!0,this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){b.prototype.setTimeout.call(this,this.checkSeek,null,2e3)},checkSeek:function(){(this.stateChange===YT.PlayerState.PAUSED||this.stateChange===YT.PlayerState.ENDED)&&(this.listeners.pause(),delete this.playStatus)},onStateChange:function(a){switch(a.data){case YT.PlayerState.PLAYING:this.hasPlayed=!0,this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:this.onPause()}this.stateChange=a.data},onError:function(a){this.listeners.error(a)},play:function(){var a=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.playVideo():(this.playOnReady=!0,window.YT&&YT.Player?this.player||(this.player=new YT.Player(this.element,{videoId:this.videoId,playerVars:this.playerVars,events:{onReady:function(){a.onReady()},onStateChange:function(b){a.onStateChange(b)},onError:function(b){a.onError(b)}}})):this.loadAPI())},pause:function(){this.ready?this.player.pauseVideo():this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),a.extend(b.prototype,{YouTubePlayer:d,textFactory:function(a,b){var e=this.getItemProperty(a,this.options.youTubeVideoIdProperty);return e?this.videoFactory(a,b,new d(e,this.options.youTubePlayerVars,this.options.youTubeClickToPlay)):c.call(this,a,b)}}),b}),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./blueimp-gallery"],a):a(window.jQuery,window.blueimp.Gallery)}(function(a,b){"use strict";a(document).on("click","[data-gallery]",function(c){var d=a(this).data("gallery"),e=a(d),f=e.length&&e||a(b.prototype.options.container),g={onopen:function(){f.data("gallery",this).trigger("open")},onopened:function(){f.trigger("opened")},onslide:function(){f.trigger("slide",arguments)},onslideend:function(){f.trigger("slideend",arguments)},onslidecomplete:function(){f.trigger("slidecomplete",arguments)},onclose:function(){f.trigger("close")},onclosed:function(){f.trigger("closed").removeData("gallery")}},h=a.extend(f.data(),{container:f[0],index:this,event:c},g),i=a('[data-gallery="'+d+'"]');return h.filter&&(i=i.filter(h.filter)),new b(i,h)})});
},{}],3:[function(require,module,exports){
/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
},{}],4:[function(require,module,exports){
/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:29 GMT
 * Licensed MIT
 * Includes: can/control/plugin
 * Download from: http://canjs.com
 */
(function($, can) {
    //used to determine if a control instance is one of controllers
    //controllers can be strings or classes
    var i,
        isAControllerOf = function(instance, controllers) {
            var name = instance.constructor.pluginName || instance.constructor._shortName;
            for (i = 0; i < controllers.length; i++) {
                if (typeof controllers[i] == 'string' ? name == controllers[i] : instance instanceof controllers[i]) {
                    return true;
                }
            }
            return false;
        },
        makeArray = can.makeArray,
        old = can.Control.setup;

    can.Control.setup = function() {
        // if you didn't provide a name, or are control, don't do anything
        if (this !== can.Control) {


            var pluginName = this.pluginName || this._fullName;

            // create jQuery plugin
            if (pluginName !== 'can_control') {
                this.plugin(pluginName);
            }

            old.apply(this, arguments);
        }
    };

    $.fn.extend({


            controls: function() {
                var controllerNames = makeArray(arguments),
                    instances = [],
                    controls, c, cname;
                //check if arguments
                this.each(function() {

                    controls = can.$(this).data("controls");
                    if (!controls) {
                        return;
                    }
                    for (var i = 0; i < controls.length; i++) {
                        c = controls[i];
                        if (!controllerNames.length || isAControllerOf(c, controllerNames)) {
                            instances.push(c);
                        }
                    }
                });
                return instances;
            },


            control: function(control) {
                return this.controls.apply(this, arguments)[0];
            }
        });

    can.Control.plugin = function(pluginname) {
        var control = this;

        if (!$.fn[pluginname]) {
            $.fn[pluginname] = function(options) {

                var args = makeArray(arguments), //if the arg is a method on this control
                    isMethod = typeof options == "string" && $.isFunction(control.prototype[options]),
                    meth = args[0],
                    returns;
                this.each(function() {
                    //check if created
                    var plugin = can.$(this).control(control);

                    if (plugin) {
                        if (isMethod) {
                            // call a method on the control with the remaining args
                            returns = plugin[meth].apply(plugin, args.slice(1));
                        } else {
                            // call the plugin's update method
                            plugin.update.apply(plugin, args);
                        }
                    } else {
                        //create a new control instance
                        control.newInstance.apply(control, [this].concat(args));
                    }
                });
                return returns !== undefined ? returns : this;
            };
        }
    }

    can.Control.prototype.update = function(options) {
        can.extend(this.options, options);
        this.on();
    };

    return can;
})(jQuery, can);
},{}],5:[function(require,module,exports){
/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:25 GMT
 * Licensed MIT
 * Includes: can/component,can/construct,can/map,can/list,can/observe,can/compute,can/model,can/view,can/control,can/route,can/control/route,can/view/mustache,can/view/bindings,can/view/live,can/view/scope,can/util/string
 * Download from: http://canjs.com
 */
(function(undefined) {

    // ## util/can.js
    var __m4 = (function() {
        var can = window.can || {};
        if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
            window.can = can;
        }

        can.isDeferred = function(obj) {
            var isFunction = this.isFunction;
            // Returns `true` if something looks like a deferred.
            return obj && isFunction(obj.then) && isFunction(obj.pipe);
        };

        var cid = 0;
        can.cid = function(object, name) {
            if (object._cid) {
                return object._cid
            } else {
                return object._cid = (name || "") + (++cid)
            }
        }
        can.VERSION = '2.0.4';

        can.simpleExtend = function(d, s) {
            for (var prop in s) {
                d[prop] = s[prop]
            }
            return d;
        }

        return can;
    })();

    // ## util/array/each.js
    var __m5 = (function(can) {
        can.each = function(elements, callback, context) {
            var i = 0,
                key;
            if (elements) {
                if (typeof elements.length === 'number' && elements.pop) {
                    if (elements.attr) {
                        elements.attr('length');
                    }
                    for (key = elements.length; i < key; i++) {
                        if (callback.call(context || elements[i], elements[i], i, elements) === false) {
                            break;
                        }
                    }
                } else if (elements.hasOwnProperty) {
                    if (can.Map && elements instanceof can.Map) {
                        can.__reading && can.__reading(elements, '__keys');
                        elements = elements.__get()
                    }


                    for (key in elements) {
                        if (elements.hasOwnProperty(key)) {
                            if (callback.call(context || elements[key], elements[key], key, elements) === false) {
                                break;
                            }
                        }
                    }
                }
            }
            return elements;
        };

        return can;
    })(__m4);

    // ## util/inserted/inserted.js
    var __m6 = (function(can) {
        // Given a list of elements, check if they are in the dom, if they 
        // are in the dom, trigger inserted on them.
        can.inserted = function(elems) {
            // prevent mutations from changing the looping
            elems = can.makeArray(elems);
            var inDocument = false,
                checked = false,
                children;
            for (var i = 0, elem;
                (elem = elems[i]) !== undefined; i++) {
                if (!inDocument) {
                    if (elem.getElementsByTagName) {
                        if (can.has(can.$(document), elem).length) {
                            inDocument = true;
                        } else {
                            return;
                        }
                    } else {
                        continue;
                    }
                }

                if (inDocument && elem.getElementsByTagName) {
                    children = can.makeArray(elem.getElementsByTagName("*"));
                    can.trigger(elem, "inserted", [], false);
                    for (var j = 0, child;
                        (child = children[j]) !== undefined; j++) {
                        // Trigger the destroyed event
                        can.trigger(child, "inserted", [], false);
                    }
                }
            }
        }


        can.appendChild = function(el, child) {
            if (child.nodeType === 11) {
                var children = can.makeArray(child.childNodes);
            } else {
                var children = [child]
            }
            el.appendChild(child);
            can.inserted(children)
        }
        can.insertBefore = function(el, child, ref) {
            if (child.nodeType === 11) {
                var children = can.makeArray(child.childNodes);
            } else {
                var children = [child];
            }
            el.insertBefore(child, ref);
            can.inserted(children)
        }

    })(__m4);

    // ## util/event.js
    var __m7 = (function(can) {

        // event.js
        // ---------
        // _Basic event wrapper._
        can.addEvent = function(event, fn) {
            var allEvents = this.__bindEvents || (this.__bindEvents = {}),
                eventList = allEvents[event] || (allEvents[event] = []);

            eventList.push({
                    handler: fn,
                    name: event
                });
            return this;
        };

        // can.listenTo works without knowing how bind works
        // the API was heavily influenced by BackboneJS: 
        // http://backbonejs.org/
        can.listenTo = function(other, event, handler) {


            var idedEvents = this.__listenToEvents;
            if (!idedEvents) {
                idedEvents = this.__listenToEvents = {};
            }
            var otherId = can.cid(other);
            var othersEvents = idedEvents[otherId];
            if (!othersEvents) {
                othersEvents = idedEvents[otherId] = {
                    obj: other,
                    events: {}
                };
            }
            var eventsEvents = othersEvents.events[event]
            if (!eventsEvents) {
                eventsEvents = othersEvents.events[event] = []
            }
            eventsEvents.push(handler);
            can.bind.call(other, event, handler);
        }

        can.stopListening = function(other, event, handler) {
            var idedEvents = this.__listenToEvents,
                iterIdedEvents = idedEvents,
                i = 0;
            if (!idedEvents) {
                return this;
            }
            if (other) {
                var othercid = can.cid(other);
                (iterIdedEvents = {})[othercid] = idedEvents[othercid];
                // you might be trying to listen to something that is not there
                if (!idedEvents[othercid]) {
                    return this;
                }
            }


            for (var cid in iterIdedEvents) {
                var othersEvents = iterIdedEvents[cid],
                    eventsEvents;
                other = idedEvents[cid].obj;
                if (!event) {
                    eventsEvents = othersEvents.events;
                } else {
                    (eventsEvents = {})[event] = othersEvents.events[event]
                }
                for (var eventName in eventsEvents) {
                    var handlers = eventsEvents[eventName] || [];
                    i = 0;
                    while (i < handlers.length) {
                        if ((handler && handler === handlers[i]) || (!handler)) {
                            can.unbind.call(other, eventName, handlers[i])
                            handlers.splice(i, 1);

                        } else {
                            i++;
                        }
                    }
                    // no more handlers?
                    if (!handlers.length) {
                        delete othersEvents.events[eventName]
                    }
                }
                if (can.isEmptyObject(othersEvents.events)) {
                    delete idedEvents[cid]
                }
            }
            return this;
        }

        can.removeEvent = function(event, fn) {
            if (!this.__bindEvents) {
                return this;
            }

            var events = this.__bindEvents[event] || [],
                i = 0,
                ev,
                isFunction = typeof fn == 'function';

            while (i < events.length) {
                ev = events[i]
                if ((isFunction && ev.handler === fn) || (!isFunction && ev.cid === fn)) {
                    events.splice(i, 1);
                } else {
                    i++;
                }
            }


            return this;
        };

        can.dispatch = function(event, args) {
            if (!this.__bindEvents) {
                return;
            }
            if (typeof event == "string") {
                event = {
                    type: event
                }
            }
            var eventName = event.type,
                handlers = (this.__bindEvents[eventName] || []).slice(0),
                args = [event].concat(args || []),
                ev;

            for (var i = 0, len = handlers.length; i < len; i++) {
                ev = handlers[i];
                ev.handler.apply(this, args);
            }
        }

        return can;

    })(__m4);

    // ## util/jquery/jquery.js
    var __m2 = (function($, can) {
        var isBindableElement = function(node) {
            //console.log((node.nodeName && (node.nodeType == 1 || node.nodeType == 9) || node === window))
            return (node.nodeName && (node.nodeType == 1 || node.nodeType == 9) || node == window);
        };

        // _jQuery node list._
        $.extend(can, $, {
                trigger: function(obj, event, args) {
                    if (obj.nodeName || obj === window) {
                        $.event.trigger(event, args, obj, true);
                    } else if (obj.trigger) {
                        obj.trigger(event, args);
                    } else {
                        if (typeof event === 'string') {
                            event = {
                                type: event
                            }
                        }
                        event.target = event.target || obj;
                        can.dispatch.call(obj, event, args);
                    }
                },
                addEvent: can.addEvent,
                removeEvent: can.removeEvent,
                // jquery caches fragments, we always needs a new one
                buildFragment: function(elems, context) {
                    var oldFragment = $.buildFragment,
                        ret;

                    elems = [elems];
                    // Set context per 1.8 logic
                    context = context || document;
                    context = !context.nodeType && context[0] || context;
                    context = context.ownerDocument || context;

                    ret = oldFragment.call(jQuery, elems, context);

                    return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
                },
                $: $,
                each: can.each,
                bind: function(ev, cb) {
                    // If we can bind to it...
                    if (this.bind && this.bind !== can.bind) {
                        this.bind(ev, cb)
                    } else if (isBindableElement(this)) {
                        $.event.add(this, ev, cb);
                    } else {
                        // Make it bind-able...
                        can.addEvent.call(this, ev, cb)
                    }
                    return this;
                },
                unbind: function(ev, cb) {
                    // If we can bind to it...
                    if (this.unbind && this.unbind !== can.unbind) {
                        this.unbind(ev, cb)
                    } else if (isBindableElement(this)) {
                        $.event.remove(this, ev, cb);
                    } else {
                        // Make it bind-able...
                        can.removeEvent.call(this, ev, cb)
                    }
                    return this;
                },
                delegate: function(selector, ev, cb) {
                    if (this.delegate) {
                        this.delegate(selector, ev, cb)
                    } else if (isBindableElement(this)) {
                        $(this).delegate(selector, ev, cb)
                    } else {
                        // make it bind-able ...
                    }
                    return this;
                },
                undelegate: function(selector, ev, cb) {
                    if (this.undelegate) {
                        this.undelegate(selector, ev, cb)
                    } else if (isBindableElement(this)) {
                        $(this).undelegate(selector, ev, cb)
                    } else {
                        // make it bind-able ...

                    }
                    return this;
                },
                proxy: function(fn, context) {
                    return function() {
                        return fn.apply(context, arguments)
                    }
                }
            });

        // Wrap binding functions.


        // Aliases
        can.on = can.bind;
        can.off = can.unbind;

        // Wrap modifier functions.
        $.each(["append", "filter", "addClass", "remove", "data", "get", "has"], function(i, name) {
            can[name] = function(wrapped) {
                return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
            };
        });

        // Memory safe destruction.
        var oldClean = $.cleanData;

        $.cleanData = function(elems) {
            $.each(elems, function(i, elem) {
                if (elem) {
                    can.trigger(elem, "removed", [], false);
                }
            });
            oldClean(elems);
        };

        var oldDomManip = $.fn.domManip,
            cbIndex;

        // feature detect which domManip we are using
        $.fn.domManip = function(args, cb1, cb2) {
            for (var i = 1; i < arguments.length; i++) {
                if (typeof arguments[i] === "function") {
                    cbIndex = i;
                    break;
                }
            }
            return oldDomManip.apply(this, arguments)
        }
        $(document.createElement("div")).append(document.createElement("div"))

        $.fn.domManip = (cbIndex == 2 ? function(args, table, callback) {
            return oldDomManip.call(this, args, table, function(elem) {
                if (elem.nodeType === 11) {
                    var elems = can.makeArray(elem.childNodes);
                }
                var ret = callback.apply(this, arguments);
                can.inserted(elems ? elems : [elem]);
                return ret;
            })
        } : function(args, callback) {
            return oldDomManip.call(this, args, function(elem) {
                if (elem.nodeType === 11) {
                    var elems = can.makeArray(elem.childNodes);
                }
                var ret = callback.apply(this, arguments);
                can.inserted(elems ? elems : [elem]);
                return ret;
            })
        })

        $.event.special.inserted = {};
        $.event.special.removed = {};

        return can;
    })(jQuery, __m4, __m5, __m6, __m7);

    // ## util/string/string.js
    var __m10 = (function(can) {
        // ##string.js
        // _Miscellaneous string utility functions._  

        // Several of the methods in this plugin use code adapated from Prototype
        // Prototype JavaScript framework, version 1.6.0.1.
        // © 2005-2007 Sam Stephenson
        var strUndHash = /_|-/,
            strColons = /\=\=/,
            strWords = /([A-Z]+)([A-Z][a-z])/g,
            strLowUp = /([a-z\d])([A-Z])/g,
            strDash = /([a-z\d])([A-Z])/g,
            strReplacer = /\{([^\}]+)\}/g,
            strQuote = /"/g,
            strSingleQuote = /'/g,
            strHyphenMatch = /-+(.)?/g,
            strCamelMatch = /[a-z][A-Z]/g,
            // Returns the `prop` property from `obj`.
            // If `add` is true and `prop` doesn't exist in `obj`, create it as an
            // empty object.
            getNext = function(obj, prop, add) {
                var result = obj[prop];

                if (result === undefined && add === true) {
                    result = obj[prop] = {}
                }
                return result
            },

            // Returns `true` if the object can have properties (no `null`s).
            isContainer = function(current) {
                return (/^f|^o/).test(typeof current);
            },
            convertBadValues = function(content) {
                // Convert bad values into empty strings
                var isInvalid = content === null || content === undefined || (isNaN(content) && ("" + content === 'NaN'));
                return ("" + (isInvalid ? '' : content))
            };

        can.extend(can, {
                // Escapes strings for HTML.
                esc: function(content) {
                    return convertBadValues(content)
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(strQuote, '&#34;')
                        .replace(strSingleQuote, "&#39;");
                },

                getObject: function(name, roots, add) {

                    // The parts of the name we are looking up
                    // `['App','Models','Recipe']`
                    var parts = name ? name.split('.') : [],
                        length = parts.length,
                        current,
                        r = 0,
                        i, container, rootsLength;

                    // Make sure roots is an `array`.
                    roots = can.isArray(roots) ? roots : [roots || window];

                    rootsLength = roots.length

                    if (!length) {
                        return roots[0];
                    }

                    // For each root, mark it as current.
                    for (r; r < rootsLength; r++) {
                        current = roots[r];
                        container = undefined;

                        // Walk current to the 2nd to last object or until there
                        // is not a container.
                        for (i = 0; i < length && isContainer(current); i++) {
                            container = current;
                            current = getNext(container, parts[i]);
                        }

                        // If we found property break cycle
                        if (container !== undefined && current !== undefined) {
                            break
                        }
                    }

                    // Remove property from found container
                    if (add === false && current !== undefined) {
                        delete container[parts[i - 1]]
                    }

                    // When adding property add it to the first root
                    if (add === true && current === undefined) {
                        current = roots[0]

                        for (i = 0; i < length && isContainer(current); i++) {
                            current = getNext(current, parts[i], true);
                        }
                    }

                    return current;
                },
                // Capitalizes a string.

                capitalize: function(s, cache) {
                    // Used to make newId.
                    return s.charAt(0).toUpperCase() + s.slice(1);
                },


                camelize: function(str) {
                    return convertBadValues(str).replace(strHyphenMatch, function(match, chr) {
                        return chr ? chr.toUpperCase() : ''
                    })
                },


                hyphenate: function(str) {
                    return convertBadValues(str).replace(strCamelMatch, function(str, offset) {
                        return str.charAt(0) + '-' + str.charAt(1).toLowerCase();
                    });
                },

                // Underscores a string.
                underscore: function(s) {
                    return s
                        .replace(strColons, '/')
                        .replace(strWords, '$1_$2')
                        .replace(strLowUp, '$1_$2')
                        .replace(strDash, '_')
                        .toLowerCase();
                },
                // Micro-templating.

                sub: function(str, data, remove) {
                    var obs = [];

                    str = str || '';

                    obs.push(str.replace(strReplacer, function(whole, inside) {

                                // Convert inside to type.
                                var ob = can.getObject(inside, data, remove === true ? false : undefined);

                                if (ob === undefined || ob === null) {
                                    obs = null;
                                    return "";
                                }

                                // If a container, push into objs (which will return objects found).
                                if (isContainer(ob) && obs) {
                                    obs.push(ob);
                                    return "";
                                }

                                return "" + ob;
                            }));

                    return obs === null ? obs : (obs.length <= 1 ? obs[0] : obs);
                },

                // These regex's are used throughout the rest of can, so let's make
                // them available.
                replacer: strReplacer,
                undHash: strUndHash
            });
        return can;
    })(__m2);

    // ## construct/construct.js
    var __m9 = (function(can) {

        // ## construct.js
        // `can.Construct`  
        // _This is a modified version of
        // [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).  
        // It provides class level inheritance and callbacks._

        // A private flag used to initialize a new class instance without
        // initializing it's bindings.
        var initializing = 0;


        can.Construct = function() {
            if (arguments.length) {
                return can.Construct.extend.apply(can.Construct, arguments);
            }
        };


        can.extend(can.Construct, {

                constructorExtends: true,

                newInstance: function() {
                    // Get a raw instance object (`init` is not called).
                    var inst = this.instance(),
                        arg = arguments,
                        args;

                    // Call `setup` if there is a `setup`
                    if (inst.setup) {
                        args = inst.setup.apply(inst, arguments);
                    }

                    // Call `init` if there is an `init`  
                    // If `setup` returned `args`, use those as the arguments
                    if (inst.init) {
                        inst.init.apply(inst, args || arguments);
                    }

                    return inst;
                },
                // Overwrites an object with methods. Used in the `super` plugin.
                // `newProps` - New properties to add.  
                // `oldProps` - Where the old properties might be (used with `super`).  
                // `addTo` - What we are adding to.
                _inherit: function(newProps, oldProps, addTo) {
                    can.extend(addTo || newProps, newProps || {})
                },
                // used for overwriting a single property.
                // this should be used for patching other objects
                // the super plugin overwrites this
                _overwrite: function(what, oldProps, propName, val) {
                    what[propName] = val;
                },
                // Set `defaults` as the merger of the parent `defaults` and this 
                // object's `defaults`. If you overwrite this method, make sure to
                // include option merging logic.

                setup: function(base, fullName) {
                    this.defaults = can.extend(true, {}, base.defaults, this.defaults);
                },
                // Create's a new `class` instance without initializing by setting the
                // `initializing` flag.
                instance: function() {

                    // Prevents running `init`.
                    initializing = 1;

                    var inst = new this();

                    // Allow running `init`.
                    initializing = 0;

                    return inst;
                },
                // Extends classes.

                extend: function(fullName, klass, proto) {
                    // Figure out what was passed and normalize it.
                    if (typeof fullName != 'string') {
                        proto = klass;
                        klass = fullName;
                        fullName = null;
                    }

                    if (!proto) {
                        proto = klass;
                        klass = null;
                    }
                    proto = proto || {};

                    var _super_class = this,
                        _super = this.prototype,
                        name, shortName, namespace, prototype;

                    // Instantiate a base class (but only create the instance,
                    // don't run the init constructor).
                    prototype = this.instance();

                    // Copy the properties over onto the new prototype.
                    can.Construct._inherit(proto, _super, prototype);

                    // The dummy class constructor.

                    function Constructor() {
                        // All construction is actually done in the init method.
                        if (!initializing) {
                            return this.constructor !== Constructor && arguments.length && Constructor.constructorExtends ?
                            // We are being called without `new` or we are extending.
                            arguments.callee.extend.apply(arguments.callee, arguments) :
                            // We are being called with `new`.
                            Constructor.newInstance.apply(Constructor, arguments);
                        }
                    }

                    // Copy old stuff onto class (can probably be merged w/ inherit)
                    for (name in _super_class) {
                        if (_super_class.hasOwnProperty(name)) {
                            Constructor[name] = _super_class[name];
                        }
                    }

                    // Copy new static properties on class.
                    can.Construct._inherit(klass, _super_class, Constructor);

                    // Setup namespaces.
                    if (fullName) {

                        var parts = fullName.split('.'),
                            shortName = parts.pop(),
                            current = can.getObject(parts.join('.'), window, true),
                            namespace = current,
                            _fullName = can.underscore(fullName.replace(/\./g, "_")),
                            _shortName = can.underscore(shortName);



                        current[shortName] = Constructor;
                    }

                    // Set things that shouldn't be overwritten.
                    can.extend(Constructor, {
                            constructor: Constructor,
                            prototype: prototype,

                            namespace: namespace,

                            _shortName: _shortName,

                            fullName: fullName,
                            _fullName: _fullName
                        });

                    // Dojo and YUI extend undefined
                    if (shortName !== undefined) {
                        Constructor.shortName = shortName;
                    }

                    // Make sure our prototype looks nice.
                    Constructor.prototype.constructor = Constructor;


                    // Call the class `setup` and `init`
                    var t = [_super_class].concat(can.makeArray(arguments)),
                        args = Constructor.setup.apply(Constructor, t);

                    if (Constructor.init) {
                        Constructor.init.apply(Constructor, args || t);
                    }


                    return Constructor;



                }

            });

        can.Construct.prototype.setup = function() {};

        can.Construct.prototype.init = function() {};


        return can.Construct;
    })(__m10);

    // ## control/control.js
    var __m8 = (function(can) {
        // ## control.js
        // `can.Control`  
        // _Controller_

        // Binds an element, returns a function that unbinds.
        var bind = function(el, ev, callback) {

            can.bind.call(el, ev, callback);

            return function() {
                can.unbind.call(el, ev, callback);
            };
        },
            isFunction = can.isFunction,
            extend = can.extend,
            each = can.each,
            slice = [].slice,
            paramReplacer = /\{([^\}]+)\}/g,
            special = can.getObject("$.event.special", [can]) || {},

            // Binds an element, returns a function that unbinds.
            delegate = function(el, selector, ev, callback) {
                can.delegate.call(el, selector, ev, callback);
                return function() {
                    can.undelegate.call(el, selector, ev, callback);
                };
            },

            // Calls bind or unbind depending if there is a selector.
            binder = function(el, ev, callback, selector) {
                return selector ?
                    delegate(el, can.trim(selector), ev, callback) :
                    bind(el, ev, callback);
            },

            basicProcessor;

        var Control = can.Control = can.Construct(

            {
                // Setup pre-processes which methods are event listeners.

                setup: function() {

                    // Allow contollers to inherit "defaults" from super-classes as it 
                    // done in `can.Construct`
                    can.Construct.setup.apply(this, arguments);

                    // If you didn't provide a name, or are `control`, don't do anything.
                    if (can.Control) {

                        // Cache the underscored names.
                        var control = this,
                            funcName;

                        // Calculate and cache actions.
                        control.actions = {};
                        for (funcName in control.prototype) {
                            if (control._isAction(funcName)) {
                                control.actions[funcName] = control._action(funcName);
                            }
                        }
                    }
                },
                // Moves `this` to the first argument, wraps it with `jQuery` if it's an element
                _shifter: function(context, name) {

                    var method = typeof name == "string" ? context[name] : name;

                    if (!isFunction(method)) {
                        method = context[method];
                    }

                    return function() {
                        context.called = name;
                        return method.apply(context, [this.nodeName ? can.$(this) : this].concat(slice.call(arguments, 0)));
                    };
                },

                // Return `true` if is an action.

                _isAction: function(methodName) {

                    var val = this.prototype[methodName],
                        type = typeof val;
                    // if not the constructor
                    return (methodName !== 'constructor') &&
                    // and is a function or links to a function
                    (type == "function" || (type == "string" && isFunction(this.prototype[val]))) &&
                    // and is in special, a processor, or has a funny character
                    !! (special[methodName] || processors[methodName] || /[^\w]/.test(methodName));
                },
                // Takes a method name and the options passed to a control
                // and tries to return the data necessary to pass to a processor
                // (something that binds things).

                _action: function(methodName, options) {

                    // If we don't have options (a `control` instance), we'll run this 
                    // later.  
                    paramReplacer.lastIndex = 0;
                    if (options || !paramReplacer.test(methodName)) {
                        // If we have options, run sub to replace templates `{}` with a
                        // value from the options or the window
                        var convertedName = options ? can.sub(methodName, this._lookup(options)) : methodName;
                        if (!convertedName) {
                            return null;
                        }
                        // If a `{}` template resolves to an object, `convertedName` will be
                        // an array
                        var arr = can.isArray(convertedName),

                            // Get the name
                            name = arr ? convertedName[1] : convertedName,

                            // Grab the event off the end
                            parts = name.split(/\s+/g),
                            event = parts.pop();

                        return {
                            processor: processors[event] || basicProcessor,
                            parts: [name, parts.join(" "), event],
                            delegate: arr ? convertedName[0] : undefined
                        };
                    }
                },
                _lookup: function(options) {
                    return [options, window]
                },
                // An object of `{eventName : function}` pairs that Control uses to 
                // hook up events auto-magically.

                processors: {},
                // A object of name-value pairs that act as default values for a 
                // control instance
                defaults: {}

            }, {

                // Sets `this.element`, saves the control in `data, binds event
                // handlers.

                setup: function(element, options) {

                    var cls = this.constructor,
                        pluginname = cls.pluginName || cls._fullName,
                        arr;

                    // Want the raw element here.
                    this.element = can.$(element)

                    if (pluginname && pluginname !== 'can_control') {
                        // Set element and `className` on element.
                        this.element.addClass(pluginname);
                    }

                    (arr = can.data(this.element, "controls")) || can.data(this.element, "controls", arr = []);
                    arr.push(this);

                    // Option merging.

                    this.options = extend({}, cls.defaults, options);

                    // Bind all event handlers.
                    this.on();

                    // Gets passed into `init`.

                    return [this.element, this.options];
                },

                on: function(el, selector, eventName, func) {
                    if (!el) {

                        // Adds bindings.
                        this.off();

                        // Go through the cached list of actions and use the processor 
                        // to bind
                        var cls = this.constructor,
                            bindings = this._bindings,
                            actions = cls.actions,
                            element = this.element,
                            destroyCB = can.Control._shifter(this, "destroy"),
                            funcName, ready;

                        for (funcName in actions) {
                            // Only push if we have the action and no option is `undefined`
                            if (actions.hasOwnProperty(funcName) &&
                                (ready = actions[funcName] || cls._action(funcName, this.options))) {
                                bindings.push(ready.processor(ready.delegate || element,
                                        ready.parts[2], ready.parts[1], funcName, this));
                            }
                        }


                        // Setup to be destroyed...  
                        // don't bind because we don't want to remove it.
                        can.bind.call(element, "removed", destroyCB);
                        bindings.push(function(el) {
                            can.unbind.call(el, "removed", destroyCB);
                        });
                        return bindings.length;
                    }

                    if (typeof el == 'string') {
                        func = eventName;
                        eventName = selector;
                        selector = el;
                        el = this.element;
                    }

                    if (func === undefined) {
                        func = eventName;
                        eventName = selector;
                        selector = null;
                    }

                    if (typeof func == 'string') {
                        func = can.Control._shifter(this, func);
                    }

                    this._bindings.push(binder(el, eventName, func, selector));

                    return this._bindings.length;
                },
                // Unbinds all event handlers on the controller.

                off: function() {
                    var el = this.element[0];
                    each(this._bindings || [], function(value) {
                        value(el);
                    });
                    // Adds bindings.
                    this._bindings = [];
                },
                // Prepares a `control` for garbage collection

                destroy: function() {
                    //Control already destroyed
                    if (this.element === null) {

                        return;
                    }
                    var Class = this.constructor,
                        pluginName = Class.pluginName || Class._fullName,
                        controls;

                    // Unbind bindings.
                    this.off();

                    if (pluginName && pluginName !== 'can_control') {
                        // Remove the `className`.
                        this.element.removeClass(pluginName);
                    }

                    // Remove from `data`.
                    controls = can.data(this.element, "controls");
                    controls.splice(can.inArray(this, controls), 1);

                    can.trigger(this, "destroyed"); // In case we want to know if the `control` is removed.

                    this.element = null;
                }
            });

        var processors = can.Control.processors,
            // Processors do the binding.
            // They return a function that unbinds when called.  
            // The basic processor that binds events.
            basicProcessor = function(el, event, selector, methodName, control) {
                return binder(el, event, can.Control._shifter(control, methodName), selector);
            };

        // Set common events to be processed as a `basicProcessor`
        each(["change", "click", "contextmenu", "dblclick", "keydown", "keyup",
                "keypress", "mousedown", "mousemove", "mouseout", "mouseover",
                "mouseup", "reset", "resize", "scroll", "select", "submit", "focusin",
                "focusout", "mouseenter", "mouseleave",
                // #104 - Add touch events as default processors
                // TOOD feature detect?
                "touchstart", "touchmove", "touchcancel", "touchend", "touchleave"
            ], function(v) {
                processors[v] = basicProcessor;
            });

        return Control;
    })(__m2, __m9);

    // ## util/bind/bind.js
    var __m13 = (function(can) {


        // ## Bind helpers
        can.bindAndSetup = function() {
            // Add the event to this object
            can.addEvent.apply(this, arguments);
            // If not initializing, and the first binding
            // call bindsetup if the function exists.
            if (!this._init) {
                if (!this._bindings) {
                    this._bindings = 1;
                    // setup live-binding
                    this._bindsetup && this._bindsetup();

                } else {
                    this._bindings++;
                }

            }

            return this;
        };

        can.unbindAndTeardown = function(ev, handler) {
            // Remove the event handler
            can.removeEvent.apply(this, arguments);

            if (this._bindings == null) {
                this._bindings = 0;
            } else {
                this._bindings--;
            }
            // If there are no longer any bindings and
            // there is a bindteardown method, call it.
            if (!this._bindings) {
                this._bindteardown && this._bindteardown();
            }
            return this;
        }

        return can;

    })(__m2);

    // ## util/batch/batch.js
    var __m14 = (function(can) {

        // Which batch of events this is for -- might not want to send multiple
        // messages on the same batch.  This is mostly for event delegation.
        var batchNum = 1,
            // how many times has start been called without a stop
            transactions = 0,
            // an array of events within a transaction
            batchEvents = [],
            stopCallbacks = [];


        can.batch = {

            start: function(batchStopHandler) {
                transactions++;
                batchStopHandler && stopCallbacks.push(batchStopHandler);
            },

            stop: function(force, callStart) {
                if (force) {
                    transactions = 0;
                } else {
                    transactions--;
                }

                if (transactions == 0) {
                    var items = batchEvents.slice(0),
                        callbacks = stopCallbacks.slice(0);
                    batchEvents = [];
                    stopCallbacks = [];
                    batchNum++;
                    callStart && can.batch.start();
                    can.each(items, function(args) {
                        can.trigger.apply(can, args);
                    });
                    can.each(callbacks, function(cb) {
                        cb();
                    });
                }
            },

            trigger: function(item, event, args) {
                // Don't send events if initalizing.
                if (!item._init) {
                    if (transactions == 0) {
                        return can.trigger(item, event, args);
                    } else {
                        event = typeof event === "string" ? {
                            type: event
                        } :
                            event;
                        event.batchNum = batchNum;
                        batchEvents.push([
                                item,
                                event,
                                args
                            ]);
                    }
                }
            }
        }


    })(__m4);

    // ## map/map.js
    var __m12 = (function(can, bind) {
        // ## map.js  
        // `can.Map`  
        // _Provides the observable pattern for JavaScript Objects._  
        // Removes all listeners.
        var bindToChildAndBubbleToParent = function(child, prop, parent) {
            can.listenTo.call(parent, child, "change", function() {
                // `batchTrigger` the type on this...
                var args = can.makeArray(arguments),
                    ev = args.shift();
                args[0] = (prop === "*" ? [parent.indexOf(child), args[0]] : [prop, args[0]]).join(".");

                // track objects dispatched on this map		
                ev.triggeredNS = ev.triggeredNS || {};

                // if it has already been dispatched exit
                if (ev.triggeredNS[parent._cid]) {
                    return;
                }

                ev.triggeredNS[parent._cid] = true;
                // send change event with modified attr to parent	
                can.trigger(parent, ev, args);
                // send modified attr event to parent
                //can.trigger(parent, args[0], args);
            });
        },
            // An `id` to track events for a given map.
            observeId = 0,
            attrParts = function(attr, keepKey) {
                if (keepKey) {
                    return [attr];
                }
                return can.isArray(attr) ? attr : ("" + attr).split(".");
            },
            makeBindSetup = function(wildcard) {
                return function() {
                    var parent = this;
                    this._each(function(child, prop) {
                        if (child && child.bind) {
                            bindToChildAndBubbleToParent(child, wildcard || prop, parent)
                        }
                    })
                };
            },
            // A map that temporarily houses a reference 
            // to maps that have already been made for a plain ole JS object
            madeMap = null,
            teardownMap = function() {
                for (var cid in madeMap) {
                    if (madeMap[cid].added) {
                        delete madeMap[cid].obj._cid;
                    }
                }
                madeMap = null;
            },
            getMapFromObject = function(obj) {
                return madeMap && madeMap[obj._cid] && madeMap[obj._cid].instance
            };


        var Map = can.Map = can.Construct.extend({

                setup: function() {

                    can.Construct.setup.apply(this, arguments);


                    if (can.Map) {
                        if (!this.defaults) {
                            this.defaults = {};
                        }
                        // a list of the compute properties
                        this._computes = [];
                        for (var prop in this.prototype) {
                            if (typeof this.prototype[prop] !== "function") {
                                this.defaults[prop] = this.prototype[prop];
                            } else if (this.prototype[prop].isComputed) {
                                this._computes.push(prop)
                            }
                        }
                    }
                    // if we inerit from can.Map, but not can.List
                    if (can.List && !(this.prototype instanceof can.List)) {
                        this.List = Map.List({
                                Map: this
                            }, {});
                    }

                },
                _computes: [],
                // keep so it can be overwritten
                bind: can.bindAndSetup,
                on: can.bindAndSetup,
                unbind: can.unbindAndTeardown,
                off: can.unbindAndTeardown,
                id: "id",
                helpers: {
                    addToMap: function(obj, instance) {
                        var teardown;
                        if (!madeMap) {
                            teardown = teardownMap;
                            madeMap = {}
                        }
                        // record if it has a Cid before we add one
                        var hasCid = obj._cid;
                        var cid = can.cid(obj);

                        // only update if there already isn't one
                        if (!madeMap[cid]) {

                            madeMap[cid] = {
                                obj: obj,
                                instance: instance,
                                added: !hasCid
                            }
                        }
                        return teardown;
                    },

                    canMakeObserve: function(obj) {
                        return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject(obj) || (obj instanceof can.Map));
                    },
                    unhookup: function(items, parent) {
                        return can.each(items, function(item) {
                            if (item && item.unbind) {
                                can.stopListening.call(parent, item, "change");
                            }
                        });
                    },
                    // Listens to changes on `child` and "bubbles" the event up.  
                    // `child` - The object to listen for changes on.  
                    // `prop` - The property name is at on.  
                    // `parent` - The parent object of prop.
                    // `ob` - (optional) The Map object constructor
                    // `list` - (optional) The observable list constructor
                    hookupBubble: function(child, prop, parent, Ob, List) {
                        Ob = Ob || Map;
                        List = List || Map.List;

                        // If it's an `array` make a list, otherwise a child.
                        if (child instanceof Map) {
                            // We have an `map` already...
                            // Make sure it is not listening to this already
                            // It's only listening if it has bindings already.
                            parent._bindings && Map.helpers.unhookup([child], parent);
                        } else if (can.isArray(child)) {
                            child = getMapFromObject(child) || new List(child);
                        } else {
                            child = getMapFromObject(child) || new Ob(child);
                        }
                        // only listen if something is listening to you
                        if (parent._bindings) {
                            // Listen to all changes and `batchTrigger` upwards.
                            bindToChildAndBubbleToParent(child, prop, parent)
                        }


                        return child;
                    },
                    // A helper used to serialize an `Map` or `Map.List`.  
                    // `map` - The observable.  
                    // `how` - To serialize with `attr` or `serialize`.  
                    // `where` - To put properties, in an `{}` or `[]`.
                    serialize: function(map, how, where) {
                        // Go through each property.
                        map.each(function(val, name) {
                            // If the value is an `object`, and has an `attrs` or `serialize` function.
                            where[name] = Map.helpers.canMakeObserve(val) && can.isFunction(val[how]) ?
                            // Call `attrs` or `serialize` to get the original data back.
                            val[how]() :
                            // Otherwise return the value.
                            val;
                        });
                        return where;
                    },
                    makeBindSetup: makeBindSetup
                },

                // starts collecting events
                // takes a callback for after they are updated
                // how could you hook into after ejs

                keys: function(map) {
                    var keys = [];
                    can.__reading && can.__reading(map, '__keys');
                    for (var keyName in map._data) {
                        keys.push(keyName);
                    }
                    return keys;
                }
            },

            {
                setup: function(obj) {
                    // `_data` is where we keep the properties.
                    this._data = {}

                    // The namespace this `object` uses to listen to events.
                    can.cid(this, ".map");
                    // Sets all `attrs`.
                    this._init = 1;
                    this._setupComputes();
                    var teardownMapping = obj && can.Map.helpers.addToMap(obj, this);

                    var data = can.extend(can.extend(true, {}, this.constructor.defaults || {}), obj)
                    this.attr(data);

                    teardownMapping && teardownMapping()

                    this.bind('change', can.proxy(this._changes, this));

                    delete this._init;
                },

                _setupComputes: function() {
                    var computes = this.constructor._computes;
                    this._computedBindings = {};
                    for (var i = 0, len = computes.length, prop; i < len; i++) {
                        prop = computes[i];
                        this[prop] = this[prop].clone(this);
                        this._computedBindings[prop] = {
                            count: 0
                        }
                    }
                },
                _bindsetup: makeBindSetup(),
                _bindteardown: function() {
                    var self = this;
                    this._each(function(child) {
                        Map.helpers.unhookup([child], self)
                    })
                },
                _changes: function(ev, attr, how, newVal, oldVal) {
                    can.batch.trigger(this, {
                            type: attr,
                            batchNum: ev.batchNum
                        }, [newVal, oldVal]);
                },
                _triggerChange: function(attr, how, newVal, oldVal) {
                    can.batch.trigger(this, "change", can.makeArray(arguments))
                },
                // no live binding iterator
                _each: function(callback) {
                    var data = this.__get();
                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            callback(data[prop], prop)
                        }
                    }
                },

                attr: function(attr, val) {
                    // This is super obfuscated for space -- basically, we're checking
                    // if the type of the attribute is not a `number` or a `string`.
                    var type = typeof attr;
                    if (type !== "string" && type !== "number") {
                        return this._attrs(attr, val)
                    } else if (arguments.length === 1) { // If we are getting a value.
                        // Let people know we are reading.
                        can.__reading && can.__reading(this, attr)
                        return this._get(attr)
                    } else {
                        // Otherwise we are setting.
                        this._set(attr, val);
                        return this;
                    }
                },

                each: function() {
                    can.__reading && can.__reading(this, '__keys');
                    return can.each.apply(undefined, [this.__get()].concat(can.makeArray(arguments)))
                },

                removeAttr: function(attr) {
                    // Info if this is List or not
                    var isList = can.List && this instanceof can.List,
                        // Convert the `attr` into parts (if nested).
                        parts = attrParts(attr),
                        // The actual property to remove.
                        prop = parts.shift(),
                        // The current value.
                        current = isList ? this[prop] : this._data[prop];

                    // If we have more parts, call `removeAttr` on that part.
                    if (parts.length) {
                        return current.removeAttr(parts)
                    } else {
                        if (isList) {
                            this.splice(prop, 1)
                        } else if (prop in this._data) {
                            // Otherwise, `delete`.
                            delete this._data[prop];
                            // Create the event.
                            if (!(prop in this.constructor.prototype)) {
                                delete this[prop]
                            }
                            // Let others know the number of keys have changed
                            can.batch.trigger(this, "__keys");
                            this._triggerChange(prop, "remove", undefined, current);

                        }
                        return current;
                    }
                },
                // Reads a property from the `object`.
                _get: function(attr) {
                    var value = typeof attr === 'string' && !! ~attr.indexOf('.') && this.__get(attr);
                    if (value) {
                        return value;
                    }

                    // break up the attr (`"foo.bar"`) into `["foo","bar"]`
                    var parts = attrParts(attr),
                        // get the value of the first attr name (`"foo"`)
                        current = this.__get(parts.shift());
                    // if there are other attributes to read
                    return parts.length ?
                    // and current has a value
                    current ?
                    // lookup the remaining attrs on current
                    current._get(parts) :
                    // or if there's no current, return undefined
                    undefined :
                    // if there are no more parts, return current
                    current;
                },
                // Reads a property directly if an `attr` is provided, otherwise
                // returns the "real" data object itself.
                __get: function(attr) {
                    if (attr) {
                        if (this[attr] && this[attr].isComputed && can.isFunction(this.constructor.prototype[attr])) {
                            return this[attr]()
                        } else {
                            return this._data[attr]
                        }
                    } else {
                        return this._data;
                    }
                },
                // Sets `attr` prop as value on this object where.
                // `attr` - Is a string of properties or an array  of property values.
                // `value` - The raw value to set.
                _set: function(attr, value, keepKey) {
                    // Convert `attr` to attr parts (if it isn't already).
                    var parts = attrParts(attr, keepKey),
                        // The immediate prop we are setting.
                        prop = parts.shift(),
                        // The current value.
                        current = this.__get(prop);

                    // If we have an `object` and remaining parts.
                    if (Map.helpers.canMakeObserve(current) && parts.length) {
                        // That `object` should set it (this might need to call attr).
                        current._set(parts, value)
                    } else if (!parts.length) {
                        // We're in "real" set territory.
                        if (this.__convert) {
                            value = this.__convert(prop, value)
                        }
                        this.__set(prop, value, current)
                    } else {
                        throw "can.Map: Object does not exist"
                    }
                },
                __set: function(prop, value, current) {

                    // Otherwise, we are setting it on this `object`.
                    // TODO: Check if value is object and transform
                    // are we changing the value.
                    if (value !== current) {
                        // Check if we are adding this for the first time --
                        // if we are, we need to create an `add` event.
                        var changeType = this.__get().hasOwnProperty(prop) ? "set" : "add";

                        // Set the value on data.
                        this.___set(prop,

                            // If we are getting an object.
                            Map.helpers.canMakeObserve(value) ?

                            // Hook it up to send event.
                            Map.helpers.hookupBubble(value, prop, this) :
                            // Value is normal.
                            value);

                        if (changeType == "add") {
                            // If there is no current value, let others know that
                            // the the number of keys have changed

                            can.batch.trigger(this, "__keys", undefined);

                        }
                        // `batchTrigger` the change event.
                        this._triggerChange(prop, changeType, value, current);

                        //can.batch.trigger(this, prop, [value, current]);
                        // If we can stop listening to our old value, do it.
                        current && Map.helpers.unhookup([current], this);
                    }

                },
                // Directly sets a property on this `object`.
                ___set: function(prop, val) {

                    if (this[prop] && this[prop].isComputed && can.isFunction(this.constructor.prototype[prop])) {
                        this[prop](val);
                    }

                    this._data[prop] = val;
                    // Add property directly for easy writing.
                    // Check if its on the `prototype` so we don't overwrite methods like `attrs`.
                    if (!(can.isFunction(this.constructor.prototype[prop]))) {
                        this[prop] = val
                    }
                },


                bind: function(eventName, handler) {
                    var computedBinding = this._computedBindings && this._computedBindings[eventName]
                    if (computedBinding) {
                        if (!computedBinding.count) {
                            computedBinding.count = 1;
                            var self = this;
                            computedBinding.handler = function(ev, newVal, oldVal) {
                                can.batch.trigger(self, {
                                        type: eventName,
                                        batchNum: ev.batchNum
                                    }, [newVal, oldVal])
                            }
                            this[eventName].bind("change", computedBinding.handler)
                        } else {
                            computedBinding.count++
                        }

                    }
                    return can.bindAndSetup.apply(this, arguments);

                },

                unbind: function(eventName, handler) {
                    var computedBinding = this._computedBindings && this._computedBindings[eventName]
                    if (computedBinding) {
                        if (computedBinding.count == 1) {
                            computedBinding.count = 0;
                            this[eventName].unbind("change", computedBinding.handler);
                            delete computedBinding.handler;
                        } else {
                            computedBinding.count++
                        }

                    }
                    return can.unbindAndTeardown.apply(this, arguments);

                },

                serialize: function() {
                    return can.Map.helpers.serialize(this, 'serialize', {});
                },

                _attrs: function(props, remove) {

                    if (props === undefined) {
                        return Map.helpers.serialize(this, 'attr', {})
                    }

                    props = can.simpleExtend({}, props);
                    var prop,
                        self = this,
                        newVal;
                    can.batch.start();
                    this.each(function(curVal, prop) {
                        // you can not have a _cid property!
                        if (prop === "_cid") {
                            return;
                        }
                        newVal = props[prop];

                        // If we are merging...
                        if (newVal === undefined) {
                            remove && self.removeAttr(prop);
                            return;
                        }

                        if (self.__convert) {
                            newVal = self.__convert(prop, newVal)
                        }

                        // if we're dealing with models, want to call _set to let converter run
                        if (newVal instanceof can.Map) {
                            self.__set(prop, newVal, curVal)
                            // if its an object, let attr merge
                        } else if (Map.helpers.canMakeObserve(curVal) && Map.helpers.canMakeObserve(newVal) && curVal.attr) {
                            curVal.attr(newVal, remove)
                            // otherwise just set
                        } else if (curVal != newVal) {
                            self.__set(prop, newVal, curVal)
                        }

                        delete props[prop];
                    })
                    // Add remaining props.
                    for (var prop in props) {
                        if (prop !== "_cid") {
                            newVal = props[prop];
                            this._set(prop, newVal, true)
                        }

                    }
                    can.batch.stop()
                    return this;
                },


                compute: function(prop) {
                    if (can.isFunction(this.constructor.prototype[prop])) {
                        return can.compute(this[prop], this);
                    } else {
                        return can.compute(this, prop);
                    }

                }
            });

        Map.prototype.on = Map.prototype.bind;
        Map.prototype.off = Map.prototype.unbind;

        return Map;
    })(__m2, __m13, __m9, __m14);

    // ## list/list.js
    var __m15 = (function(can, Map) {



        // Helpers for `observable` lists.
        var splice = [].splice,
            // test if splice works correctly
            spliceRemovesProps = (function() {
                // IE's splice doesn't remove properties
                var obj = {
                    0: "a",
                    length: 1
                };
                splice.call(obj, 0, 1);
                return !obj[0];
            })(),

            list = Map(

                {

                    Map: Map

                },

                {
                    setup: function(instances, options) {
                        this.length = 0;
                        can.cid(this, ".map")
                        this._init = 1;
                        instances = instances || [];


                        if (can.isDeferred(instances)) {
                            this.replace(instances)
                        } else {
                            var teardownMapping = instances.length && can.Map.helpers.addToMap(instances, this);
                            this.push.apply(this, can.makeArray(instances || []));
                        }

                        teardownMapping && teardownMapping();

                        // this change needs to be ignored
                        this.bind('change', can.proxy(this._changes, this));
                        can.simpleExtend(this, options);
                        delete this._init;
                    },
                    _triggerChange: function(attr, how, newVal, oldVal) {

                        Map.prototype._triggerChange.apply(this, arguments)
                        // `batchTrigger` direct add and remove events...
                        if (!~attr.indexOf('.')) {

                            if (how === 'add') {
                                can.batch.trigger(this, how, [newVal, +attr]);
                                can.batch.trigger(this, 'length', [this.length]);
                            } else if (how === 'remove') {
                                can.batch.trigger(this, how, [oldVal, +attr]);
                                can.batch.trigger(this, 'length', [this.length]);
                            } else {
                                can.batch.trigger(this, how, [newVal, +attr])
                            }

                        }

                    },
                    __get: function(attr) {
                        return attr ? this[attr] : this;
                    },
                    ___set: function(attr, val) {
                        this[attr] = val;
                        if (+attr >= this.length) {
                            this.length = (+attr + 1)
                        }
                    },
                    _each: function(callback) {
                        var data = this.__get();
                        for (var i = 0; i < data.length; i++) {
                            callback(data[i], i)
                        }
                    },
                    _bindsetup: Map.helpers.makeBindSetup("*"),
                    // Returns the serialized form of this list.

                    serialize: function() {
                        return Map.helpers.serialize(this, 'serialize', []);
                    },

                    splice: function(index, howMany) {
                        var args = can.makeArray(arguments),
                            i;

                        for (i = 2; i < args.length; i++) {
                            var val = args[i];
                            if (Map.helpers.canMakeObserve(val)) {
                                args[i] = Map.helpers.hookupBubble(val, "*", this, this.constructor.Map, this.constructor)
                            }
                        }
                        if (howMany === undefined) {
                            howMany = args[1] = this.length - index;
                        }
                        var removed = splice.apply(this, args);

                        if (!spliceRemovesProps) {
                            for (var i = this.length; i < removed.length + this.length; i++) {
                                delete this[i]
                            }
                        }

                        can.batch.start();
                        if (howMany > 0) {
                            this._triggerChange("" + index, "remove", undefined, removed);
                            Map.helpers.unhookup(removed, this);
                        }
                        if (args.length > 2) {
                            this._triggerChange("" + index, "add", args.slice(2), removed);
                        }
                        can.batch.stop();
                        return removed;
                    },

                    _attrs: function(items, remove) {
                        if (items === undefined) {
                            return Map.helpers.serialize(this, 'attr', []);
                        }

                        // Create a copy.
                        items = can.makeArray(items);

                        can.batch.start();
                        this._updateAttrs(items, remove);
                        can.batch.stop()
                    },

                    _updateAttrs: function(items, remove) {
                        var len = Math.min(items.length, this.length);

                        for (var prop = 0; prop < len; prop++) {
                            var curVal = this[prop],
                                newVal = items[prop];

                            if (Map.helpers.canMakeObserve(curVal) && Map.helpers.canMakeObserve(newVal)) {
                                curVal.attr(newVal, remove)
                            } else if (curVal != newVal) {
                                this._set(prop, newVal)
                            } else {

                            }
                        }
                        if (items.length > this.length) {
                            // Add in the remaining props.
                            this.push.apply(this, items.slice(this.length));
                        } else if (items.length < this.length && remove) {
                            this.splice(items.length)
                        }
                    }
                }),

            // Converts to an `array` of arguments.
            getArgs = function(args) {
                return args[0] && can.isArray(args[0]) ?
                    args[0] :
                    can.makeArray(args);
            };
        // Create `push`, `pop`, `shift`, and `unshift`
        can.each({

                push: "length",

                unshift: 0
            },
            // Adds a method
            // `name` - The method name.
            // `where` - Where items in the `array` should be added.

            function(where, name) {
                var orig = [][name]
                list.prototype[name] = function() {
                    // Get the items being added.
                    var args = [],
                        // Where we are going to add items.
                        len = where ? this.length : 0,
                        i = arguments.length,
                        res,
                        val,
                        constructor = this.constructor;

                    // Go through and convert anything to an `map` that needs to be converted.
                    while (i--) {
                        val = arguments[i];
                        args[i] = Map.helpers.canMakeObserve(val) ?
                            Map.helpers.hookupBubble(val, "*", this, this.constructor.Map, this.constructor) :
                            val;
                    }

                    // Call the original method.
                    res = orig.apply(this, args);

                    if (!this.comparator || args.length) {

                        this._triggerChange("" + len, "add", args, undefined);
                    }

                    return res;
                }
            });

        can.each({

                pop: "length",

                shift: 0
            },
            // Creates a `remove` type method

            function(where, name) {
                list.prototype[name] = function() {

                    var args = getArgs(arguments),
                        len = where && this.length ? this.length - 1 : 0;

                    var res = [][name].apply(this, args)

                    // Create a change where the args are
                    // `len` - Where these items were removed.
                    // `remove` - Items removed.
                    // `undefined` - The new values (there are none).
                    // `res` - The old, removed values (should these be unbound).
                    this._triggerChange("" + len, "remove", undefined, [res])

                    if (res && res.unbind) {
                        can.stopListening.call(this, res, "change");
                    }
                    return res;
                }
            });

        can.extend(list.prototype, {

                indexOf: function(item, fromIndex) {
                    this.attr('length')
                    return can.inArray(item, this, fromIndex)
                },


                join: function() {
                    return [].join.apply(this.attr(), arguments)
                },


                reverse: [].reverse,


                slice: function() {
                    var temp = Array.prototype.slice.apply(this, arguments);
                    return new this.constructor(temp);
                },


                concat: function() {
                    var args = [];
                    can.each(can.makeArray(arguments), function(arg, i) {
                        args[i] = arg instanceof can.List ? arg.serialize() : arg;
                    });
                    return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
                },


                forEach: function(cb, thisarg) {
                    return can.each(this, cb, thisarg || this);
                },


                replace: function(newList) {
                    if (can.isDeferred(newList)) {
                        newList.then(can.proxy(this.replace, this));
                    } else {
                        this.splice.apply(this, [0, this.length].concat(can.makeArray(newList || [])));
                    }

                    return this;
                }
            });
        can.List = Map.List = list;
        return can.List;
    })(__m2, __m12);

    // ## compute/compute.js
    var __m16 = (function(can, bind) {

        var names = ["__reading", "__clearReading", "__setReading"],
            setup = function(observed) {
                var old = {};
                for (var i = 0; i < names.length; i++) {
                    old[names[i]] = can[names[i]]
                }
                can.__reading = function(obj, attr) {
                    // Add the observe and attr that was read
                    // to `observed`
                    observed.push({
                            obj: obj,
                            attr: attr + ""
                        });
                };
                can.__clearReading = function() {
                    return observed.splice(0, observed.length);
                }
                can.__setReading = function(o) {
                    [].splice.apply(observed, [0, observed.length].concat(o))
                }
                return old;
            },
            // empty default function 
            k = function() {};

        // returns the
        // - observes and attr methods are called by func
        // - the value returned by func
        // ex: `{value: 100, observed: [{obs: o, attr: "completed"}]}`
        var getValueAndObserved = function(func, self) {

            var observed = [],
                old = setup(observed),
                // Call the "wrapping" function to get the value. `observed`
                // will have the observe/attribute pairs that were read.
                value = func.call(self);

            // Set back so we are no longer reading.
            can.simpleExtend(can, old);

            return {
                value: value,
                observed: observed
            };
        },
            // Calls `callback(newVal, oldVal)` everytime an observed property
            // called within `getterSetter` is changed and creates a new result of `getterSetter`.
            // Also returns an object that can teardown all event handlers.
            computeBinder = function(getterSetter, context, callback, computeState) {
                // track what we are observing
                var observing = {},
                    // a flag indicating if this observe/attr pair is already bound
                    matched = true,
                    // the data to return 
                    data = {
                        // we will maintain the value while live-binding is taking place
                        value: undefined,
                        // a teardown method that stops listening
                        teardown: function() {
                            for (var name in observing) {
                                var ob = observing[name];
                                ob.observe.obj.unbind(ob.observe.attr, onchanged);
                                delete observing[name];
                            }
                        }
                    },
                    batchNum;

                // when a property value is changed
                var onchanged = function(ev) {
                    // If the compute is no longer bound (because the same change event led to an unbind)
                    // then do not call getValueAndBind, or we will leak bindings.
                    if (computeState && !computeState.bound) {
                        return;
                    }
                    if (ev.batchNum === undefined || ev.batchNum !== batchNum) {
                        // store the old value
                        var oldValue = data.value,
                            // get the new value
                            newvalue = getValueAndBind();

                        // update the value reference (in case someone reads)
                        data.value = newvalue;
                        // if a change happened
                        if (newvalue !== oldValue) {
                            callback(newvalue, oldValue);
                        }
                        batchNum = batchNum = ev.batchNum;
                    }


                };

                // gets the value returned by `getterSetter` and also binds to any attributes
                // read by the call
                var getValueAndBind = function() {
                    var info = getValueAndObserved(getterSetter, context),
                        newObserveSet = info.observed;

                    var value = info.value,
                        ob;
                    matched = !matched;

                    // go through every attribute read by this observe
                    for (var i = 0, len = newObserveSet.length; i < len; i++) {
                        ob = newObserveSet[i];
                        // if the observe/attribute pair is being observed
                        if (observing[ob.obj._cid + "|" + ob.attr]) {
                            // mark at as observed
                            observing[ob.obj._cid + "|" + ob.attr].matched = matched;
                        } else {
                            // otherwise, set the observe/attribute on oldObserved, marking it as being observed
                            observing[ob.obj._cid + "|" + ob.attr] = {
                                matched: matched,
                                observe: ob
                            };
                            ob.obj.bind(ob.attr, onchanged);
                        }
                    }

                    // Iterate through oldObserved, looking for observe/attributes
                    // that are no longer being bound and unbind them
                    for (var name in observing) {
                        var ob = observing[name];
                        if (ob.matched !== matched) {
                            ob.observe.obj.unbind(ob.observe.attr, onchanged);
                            delete observing[name];
                        }
                    }
                    return value;
                };
                // set the initial value
                data.value = getValueAndBind();

                data.isListening = !can.isEmptyObject(observing);
                return data;
            }

            // if no one is listening ... we can not calculate every time

        can.compute = function(getterSetter, context, eventName) {
            if (getterSetter && getterSetter.isComputed) {
                return getterSetter;
            }
            // stores the result of computeBinder
            var computedData,
                // how many listeners to this this compute
                bindings = 0,
                // the computed object
                computed,
                // an object that keeps track if the computed is bound
                // onchanged needs to know this. It's possible a change happens and results in
                // something that unbinds the compute, it needs to not to try to recalculate who it
                // is listening to
                computeState = {
                    bound: false,
                    // true if this compute is calculated from other computes and observes
                    hasDependencies: false
                },
                // The following functions are overwritten depending on how compute() is called
                // a method to setup listening
                on = k,
                // a method to teardown listening
                off = k,
                // the current cached value (only valid if bound = true)
                value,
                // how to read the value
                get = function() {
                    return value
                },
                // sets the value
                set = function(newVal) {
                    value = newVal;
                },
                // this compute can be a dependency of other computes
                canReadForChangeEvent = true,
                // save for clone
                args = can.makeArray(arguments),
                updater = function(newValue, oldValue) {
                    value = newValue;
                    // might need a way to look up new and oldVal
                    can.batch.trigger(computed, "change", [newValue, oldValue])
                },
                // the form of the arguments
                form;

            computed = function(newVal) {
                // setting ...
                if (arguments.length) {
                    // save a reference to the old value
                    var old = value;

                    // setter may return a value if 
                    // setter is for a value maintained exclusively by this compute
                    var setVal = set.call(context, newVal, old);

                    // if this has dependencies return the current value
                    if (computed.hasDependencies) {
                        return get.call(context);
                    }

                    if (setVal === undefined) {
                        // it's possible, like with the DOM, setting does not
                        // fire a change event, so we must read
                        value = get.call(context);
                    } else {
                        value = setVal;
                    }
                    // fire the change
                    if (old !== value) {
                        can.batch.trigger(computed, "change", [value, old]);
                    }
                    return value;
                } else {
                    // Another compute wants to bind to this compute
                    if (can.__reading && canReadForChangeEvent) {
                        // Tell the compute to listen to change on this computed
                        can.__reading(computed, 'change');
                        // We are going to bind on this compute.
                        // If we are not bound, we should bind so that
                        // we don't have to re-read to get the value of this compute.
                        !computeState.bound && can.compute.temporarilyBind(computed)
                    }
                    // if we are bound, use the cached value
                    if (computeState.bound) {
                        return value;
                    } else {
                        return get.call(context);
                    }
                }
            }
            if (typeof getterSetter === "function") {
                set = getterSetter;
                get = getterSetter;
                canReadForChangeEvent = eventName === false ? false : true;
                computed.hasDependencies = false;
                on = function(update) {
                    computedData = computeBinder(getterSetter, context || this, update, computeState);
                    computed.hasDependencies = computedData.isListening
                    value = computedData.value;
                }
                off = function() {
                    computedData && computedData.teardown();
                }
            } else if (context) {

                if (typeof context == "string") {
                    // `can.compute(obj, "propertyName", [eventName])`

                    var propertyName = context,
                        isObserve = getterSetter instanceof can.Map;
                    if (isObserve) {
                        computed.hasDependencies = true;
                    }
                    get = function() {
                        if (isObserve) {
                            return getterSetter.attr(propertyName);
                        } else {
                            return getterSetter[propertyName];
                        }
                    }
                    set = function(newValue) {
                        if (isObserve) {
                            getterSetter.attr(propertyName, newValue)
                        } else {
                            getterSetter[propertyName] = newValue;
                        }
                    }
                    var handler;
                    on = function(update) {
                        handler = function() {
                            update(get(), value)
                        };
                        can.bind.call(getterSetter, eventName || propertyName, handler)

                        // use getValueAndObserved because
                        // we should not be indicating that some parent
                        // reads this property if it happens to be binding on it
                        value = getValueAndObserved(get).value
                    }
                    off = function() {
                        can.unbind.call(getterSetter, eventName || propertyName, handler)
                    }

                } else {
                    // `can.compute(initialValue, setter)`
                    if (typeof context === "function") {
                        value = getterSetter;
                        set = context;
                        context = eventName;
                        form = "setter";
                    } else {
                        // `can.compute(initialValue,{get:, set:, on:, off:})`
                        value = getterSetter;
                        var options = context;
                        get = options.get || get;
                        set = options.set || set;
                        on = options.on || on;
                        off = options.off || off;
                    }

                }



            } else {
                // `can.compute(5)`
                value = getterSetter;
            }


            can.cid(computed, "compute")

            return can.simpleExtend(computed, {

                    isComputed: true,
                    _bindsetup: function() {
                        computeState.bound = true;
                        // setup live-binding
                        // while binding, this does not count as a read
                        var oldReading = can.__reading;
                        delete can.__reading;
                        on.call(this, updater);
                        can.__reading = oldReading;
                    },
                    _bindteardown: function() {
                        off.call(this, updater)
                        computeState.bound = false;
                    },

                    bind: can.bindAndSetup,

                    unbind: can.unbindAndTeardown,
                    clone: function(context) {
                        if (context) {
                            if (form == "setter") {
                                args[2] = context
                            } else {
                                args[1] = context
                            }
                        }
                        return can.compute.apply(can, args);
                    }
                });
        };

        // a list of temporarily bound computes
        var computes,
            unbindComputes = function() {
                for (var i = 0, len = computes.length; i < len; i++) {
                    computes[i].unbind("change", k)
                }
                computes = null;
            }

            // Binds computes for a moment to retain their value and prevent caching
        can.compute.temporarilyBind = function(compute) {
            compute.bind("change", k)
            if (!computes) {
                computes = [];
                setTimeout(unbindComputes, 10)
            }
            computes.push(compute)
        };

        can.compute.binder = computeBinder;
        can.compute.truthy = function(compute) {
            return can.compute(function() {
                var res = compute();
                if (typeof res === "function") {
                    res = res()
                }
                return !!res;
            })
        }
        return can.compute;
    })(__m2, __m13, __m14);

    // ## observe/observe.js
    var __m11 = (function(can) {
        can.Observe = can.Map;
        can.Observe.startBatch = can.batch.start;
        can.Observe.stopBatch = can.batch.stop;
        can.Observe.triggerBatch = can.batch.trigger;
        return can;
    })(__m2, __m12, __m15, __m16);

    // ## view/view.js
    var __m19 = (function(can) {
        // ## view.js
        // `can.view`  
        // _Templating abstraction._

        var isFunction = can.isFunction,
            makeArray = can.makeArray,
            // Used for hookup `id`s.
            hookupId = 1,

            $view = can.view = can.template = function(view, data, helpers, callback) {
                // If helpers is a `function`, it is actually a callback.
                if (isFunction(helpers)) {
                    callback = helpers;
                    helpers = undefined;
                }

                var pipe = function(result) {
                    return $view.frag(result);
                },
                    // In case we got a callback, we need to convert the can.view.render
                    // result to a document fragment
                    wrapCallback = isFunction(callback) ? function(frag) {
                        callback(pipe(frag));
                    } : null,
                    // Get the result, if a renderer function is passed in, then we just use that to render the data
                    result = isFunction(view) ? view(data, helpers, wrapCallback) : $view.render(view, data, helpers, wrapCallback),
                    deferred = can.Deferred();

                if (isFunction(result)) {
                    return result;
                }

                if (can.isDeferred(result)) {
                    result.then(function(result, data) {
                        deferred.resolve.call(deferred, pipe(result), data);
                    }, function() {
                        deferred.fail.apply(deferred, arguments);
                    });
                    return deferred;
                }

                // Convert it into a dom frag.
                return pipe(result);
            };

        can.extend($view, {
                // creates a frag and hooks it up all at once

                frag: function(result, parentNode) {
                    return $view.hookup($view.fragment(result), parentNode);
                },

                // simply creates a frag
                // this is used internally to create a frag
                // insert it
                // then hook it up
                fragment: function(result) {
                    var frag = can.buildFragment(result, document.body);
                    // If we have an empty frag...
                    if (!frag.childNodes.length) {
                        frag.appendChild(document.createTextNode(''));
                    }
                    return frag;
                },

                // Convert a path like string into something that's ok for an `element` ID.
                toId: function(src) {
                    return can.map(src.toString().split(/\/|\./g), function(part) {
                        // Dont include empty strings in toId functions
                        if (part) {
                            return part;
                        }
                    }).join("_");
                },

                hookup: function(fragment, parentNode) {
                    var hookupEls = [],
                        id,
                        func;

                    // Get all `childNodes`.
                    can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function(node) {
                        if (node.nodeType === 1) {
                            hookupEls.push(node);
                            hookupEls.push.apply(hookupEls, can.makeArray(node.getElementsByTagName('*')));
                        }
                    });

                    // Filter by `data-view-id` attribute.
                    can.each(hookupEls, function(el) {
                        if (el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id])) {
                            func(el, parentNode, id);
                            delete $view.hookups[id];
                            el.removeAttribute('data-view-id');
                        }
                    });

                    return fragment;
                },


                // auj

                // heir

                hookups: {},


                hook: function(cb) {
                    $view.hookups[++hookupId] = cb;
                    return " data-view-id='" + hookupId + "'";
                },


                cached: {},

                cachedRenderers: {},


                cache: true,


                register: function(info) {
                    this.types["." + info.suffix] = info;
                },

                types: {},


                ext: ".ejs",


                registerScript: function() {},


                preload: function() {},


                render: function(view, data, helpers, callback) {
                    // If helpers is a `function`, it is actually a callback.
                    if (isFunction(helpers)) {
                        callback = helpers;
                        helpers = undefined;
                    }

                    // See if we got passed any deferreds.
                    var deferreds = getDeferreds(data);

                    if (deferreds.length) { // Does data contain any deferreds?
                        // The deferred that resolves into the rendered content...
                        var deferred = new can.Deferred(),
                            dataCopy = can.extend({}, data);

                        // Add the view request to the list of deferreds.
                        deferreds.push(get(view, true))

                        // Wait for the view and all deferreds to finish...
                        can.when.apply(can, deferreds).then(function(resolved) {
                            // Get all the resolved deferreds.
                            var objs = makeArray(arguments),
                                // Renderer is the last index of the data.
                                renderer = objs.pop(),
                                // The result of the template rendering with data.
                                result;

                            // Make data look like the resolved deferreds.
                            if (can.isDeferred(data)) {
                                dataCopy = usefulPart(resolved);
                            } else {
                                // Go through each prop in data again and
                                // replace the defferreds with what they resolved to.
                                for (var prop in data) {
                                    if (can.isDeferred(data[prop])) {
                                        dataCopy[prop] = usefulPart(objs.shift());
                                    }
                                }
                            }

                            // Get the rendered result.
                            result = renderer(dataCopy, helpers);

                            // Resolve with the rendered view.
                            deferred.resolve(result, dataCopy);

                            // If there's a `callback`, call it back with the result.
                            callback && callback(result, dataCopy);
                        }, function() {
                            deferred.reject.apply(deferred, arguments)
                        });
                        // Return the deferred...
                        return deferred;
                    } else {
                        // get is called async but in 
                        // ff will be async so we need to temporarily reset
                        if (can.__reading) {
                            var reading = can.__reading;
                            can.__reading = null;
                        }

                        // No deferreds! Render this bad boy.
                        var response,
                            // If there's a `callback` function
                            async = isFunction(callback),
                            // Get the `view` type
                            deferred = get(view, async);

                        if (can.Map && can.__reading) {
                            can.__reading = reading;
                        }

                        // If we are `async`...
                        if (async) {
                            // Return the deferred
                            response = deferred;
                            // And fire callback with the rendered result.
                            deferred.then(function(renderer) {
                                callback(data ? renderer(data, helpers) : renderer);
                            })
                        } else {
                            // if the deferred is resolved, call the cached renderer instead
                            // this is because it's possible, with recursive deferreds to
                            // need to render a view while its deferred is _resolving_.  A _resolving_ deferred
                            // is a deferred that was just resolved and is calling back it's success callbacks.
                            // If a new success handler is called while resoliving, it does not get fired by
                            // jQuery's deferred system.  So instead of adding a new callback
                            // we use the cached renderer.
                            // We also add __view_id on the deferred so we can look up it's cached renderer.
                            // In the future, we might simply store either a deferred or the cached result.
                            if (deferred.state() === "resolved" && deferred.__view_id) {
                                var currentRenderer = $view.cachedRenderers[deferred.__view_id];
                                return data ? currentRenderer(data, helpers) : currentRenderer;
                            } else {
                                // Otherwise, the deferred is complete, so
                                // set response to the result of the rendering.
                                deferred.then(function(renderer) {
                                    response = data ? renderer(data, helpers) : renderer;
                                });
                            }
                        }

                        return response;
                    }
                },


                registerView: function(id, text, type, def) {
                    // Get the renderer function.
                    var func = (type || $view.types[$view.ext]).renderer(id, text);
                    def = def || new can.Deferred();

                    // Cache if we are caching.
                    if ($view.cache) {
                        $view.cached[id] = def;
                        def.__view_id = id;
                        $view.cachedRenderers[id] = func;
                    }

                    // Return the objects for the response's `dataTypes`
                    // (in this case view).
                    return def.resolve(func);
                }
            });

        // Makes sure there's a template, if not, have `steal` provide a warning.
        var checkText = function(text, url) {
            if (!text.length) {

                throw "can.view: No template or empty template:" + url;
            }
        },
            // `Returns a `view` renderer deferred.  
            // `url` - The url to the template.  
            // `async` - If the ajax request should be asynchronous.  
            // Returns a deferred.
            get = function(obj, async) {
                var url = typeof obj === 'string' ? obj : obj.url,
                    suffix = obj.engine || url.match(/\.[\w\d]+$/),
                    type,
                    // If we are reading a script element for the content of the template,
                    // `el` will be set to that script element.
                    el,
                    // A unique identifier for the view (used for caching).
                    // This is typically derived from the element id or
                    // the url for the template.
                    id,
                    // The ajax request used to retrieve the template content.
                    jqXHR;

                //If the url has a #, we assume we want to use an inline template
                //from a script element and not current page's HTML
                if (url.match(/^#/)) {
                    url = url.substr(1);
                }
                // If we have an inline template, derive the suffix from the `text/???` part.
                // This only supports `<script>` tags.
                if (el = document.getElementById(url)) {
                    suffix = "." + el.type.match(/\/(x\-)?(.+)/)[2];
                }

                // If there is no suffix, add one.
                if (!suffix && !$view.cached[url]) {
                    url += (suffix = $view.ext);
                }

                if (can.isArray(suffix)) {
                    suffix = suffix[0]
                }

                // Convert to a unique and valid id.
                id = $view.toId(url);

                // If an absolute path, use `steal` to get it.
                // You should only be using `//` if you are using `steal`.
                if (url.match(/^\/\//)) {
                    var sub = url.substr(2);
                    url = !window.steal ?
                        sub :
                        steal.config().root.mapJoin("" + steal.id(sub));
                }

                // Set the template engine type.
                type = $view.types[suffix];

                // If it is cached, 
                if ($view.cached[id]) {
                    // Return the cached deferred renderer.
                    return $view.cached[id];

                    // Otherwise if we are getting this from a `<script>` element.
                } else if (el) {
                    // Resolve immediately with the element's `innerHTML`.
                    return $view.registerView(id, el.innerHTML, type);
                } else {
                    // Make an ajax request for text.
                    var d = new can.Deferred();
                    can.ajax({
                            async: async,
                            url: url,
                            dataType: "text",
                            error: function(jqXHR) {
                                checkText("", url);
                                d.reject(jqXHR);
                            },
                            success: function(text) {
                                // Make sure we got some text back.
                                checkText(text, url);
                                $view.registerView(id, text, type, d)
                            }
                        });
                    return d;
                }
            },
            // Gets an `array` of deferreds from an `object`.
            // This only goes one level deep.
            getDeferreds = function(data) {
                var deferreds = [];

                // pull out deferreds
                if (can.isDeferred(data)) {
                    return [data]
                } else {
                    for (var prop in data) {
                        if (can.isDeferred(data[prop])) {
                            deferreds.push(data[prop]);
                        }
                    }
                }
                return deferreds;
            },
            // Gets the useful part of a resolved deferred.
            // This is for `model`s and `can.ajax` that resolve to an `array`.
            usefulPart = function(resolved) {
                return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved
            };

        //!steal-pluginify-remove-start
        if (window.steal) {
            steal.type("view js", function(options, success, error) {
                var type = $view.types["." + options.type],
                    id = $view.toId(options.id);

                options.text = "steal('" + (type.plugin || "can/view/" + options.type) + "',function(can){return " + "can.view.preload('" + id + "'," + options.text + ");\n})";
                success();
            })
        }
        //!steal-pluginify-remove-end

        can.extend($view, {
                register: function(info) {
                    this.types["." + info.suffix] = info;

                    //!steal-pluginify-remove-start
                    if (window.steal) {
                        steal.type(info.suffix + " view js", function(options, success, error) {
                            var type = $view.types["." + options.type],
                                id = $view.toId(options.id + '');

                            options.text = type.script(id, options.text)
                            success();
                        })
                    };
                    //!steal-pluginify-remove-end

                    $view[info.suffix] = function(id, text) {
                        if (!text) {
                            // Return a nameless renderer
                            var renderer = function() {
                                return $view.frag(renderer.render.apply(this, arguments));
                            }
                            renderer.render = function() {
                                var renderer = info.renderer(null, id);
                                return renderer.apply(renderer, arguments);
                            }
                            return renderer;
                        }

                        return $view.preload(id, info.renderer(id, text));
                    }
                },
                registerScript: function(type, id, src) {
                    return "can.view.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
                },
                preload: function(id, renderer) {
                    var def = $view.cached[id] = new can.Deferred().resolve(function(data, helpers) {
                        return renderer.call(data, data, helpers);
                    });

                    function frag() {
                        return $view.frag(renderer.apply(this, arguments));
                    }
                    // expose the renderer for mustache
                    frag.render = renderer;

                    // set cache references (otherwise preloaded recursive views won't recurse properly)
                    def.__view_id = id;
                    $view.cachedRenderers[id] = renderer;

                    return frag;
                }

            });

        return can;
    })(__m2);

    // ## view/scope/scope.js
    var __m18 = (function(can) {



        var isObserve = function(obj) {
            return obj instanceof can.Map || (obj && obj.__get);
        },
            getProp = function(obj, prop) {
                var val = obj[prop];

                if (typeof val !== "function" && obj.__get) {
                    return obj.__get(prop);
                } else {
                    return val;
                }
            },
            escapeReg = /(\\)?\./g,
            escapeDotReg = /\\\./g,
            getNames = function(attr) {
                var names = [],
                    last = 0;
                attr.replace(escapeReg, function($0, $1, index) {
                    if (!$1) {
                        names.push(attr.slice(last, index).replace(escapeDotReg, '.'));
                        last = index + $0.length;
                    }
                });
                names.push(attr.slice(last).replace(escapeDotReg, '.'));
                return names;
            }



        var Scope = can.Construct.extend(


            {
                // reads properties from a parent.  A much more complex version of getObject.

                read: function(parent, reads, options) {
                    options = options || {};
                    // `cur` is the current value.
                    var cur = parent,
                        type,
                        // `prev` is the object we are reading from.
                        prev,
                        // `foundObs` did we find an observable.
                        foundObs;
                    for (var i = 0, readLength = reads.length; i < readLength; i++) {
                        // Update what we are reading from.
                        prev = cur;
                        // Read from the compute. We can't read a property yet.
                        if (prev && prev.isComputed) {
                            options.foundObservable && options.foundObservable(prev, i)
                            prev = prev()
                        }
                        // Look to read a property from something.
                        if (isObserve(prev)) {
                            !foundObs && options.foundObservable && options.foundObservable(prev, i);
                            foundObs = 1;
                            // is it a method on the prototype?
                            if (typeof prev[reads[i]] === "function" && prev.constructor.prototype[reads[i]] === prev[reads[i]]) {
                                // call that method
                                if (options.returnObserveMethods) {
                                    cur = cur[reads[i]]
                                } else {
                                    cur = prev[reads[i]].apply(prev, options.args || [])
                                }

                            } else {
                                // use attr to get that value
                                cur = cur.attr(reads[i]);
                            }

                        } else {
                            // just do the dot operator
                            cur = prev[reads[i]]
                        }
                        // If it's a compute, get the compute's value
                        // unless we are at the end of the 
                        if (cur && cur.isComputed && (!options.isArgument && i < readLength - 1)) {
                            !foundObs && options.foundObservable && options.foundObservable(prev, i + 1)
                            cur = cur()
                        }

                        type = typeof cur;
                        // if there are properties left to read, and we don't have an object, early exit
                        if (i < reads.length - 1 && (cur == null || (type != "function" && type != "object"))) {
                            options.earlyExit && options.earlyExit(prev, i, cur);
                            // return undefined so we know this isn't the right value
                            return {
                                value: undefined,
                                parent: prev
                            };
                        }
                    }
                    // if we don't have a value, exit early.
                    if (cur === undefined) {
                        options.earlyExit && options.earlyExit(prev, i - 1)
                    }
                    // handle an ending function
                    if (typeof cur === "function") {
                        if (options.isArgument) {
                            if (!cur.isComputed && options.proxyMethods !== false) {
                                cur = can.proxy(cur, prev)
                            }
                        } else {

                            cur.isComputed && !foundObs && options.foundObservable && options.foundObservable(cur, i)


                            cur = cur.call(prev)
                        }

                    }
                    return {
                        value: cur,
                        parent: prev
                    };
                }
            },

            {
                init: function(context, parent) {
                    this._context = context;
                    this._parent = parent;
                },

                attr: function(key) {
                    return this.read(key, {
                            isArgument: true,
                            returnObserveMethods: true,
                            proxyMethods: false
                        }).value
                },

                add: function(context) {
                    if (context !== this._context) {
                        return new this.constructor(context, this);
                    } else {
                        return this;
                    }
                },

                computeData: function(key, options) {
                    options = options || {
                        args: []
                    };
                    var self = this,
                        rootObserve,
                        rootReads,
                        computeData = {
                            compute: can.compute(function(newVal) {
                                if (arguments.length) {
                                    // check that there's just a compute with nothing from it ...
                                    if (rootObserve.isComputed && !rootReads.length) {
                                        rootObserve(newVal)
                                    } else {
                                        var last = rootReads.length - 1;
                                        Scope.read(rootObserve, rootReads.slice(0, last)).value.attr(rootReads[last], newVal)
                                    }
                                } else {
                                    if (rootObserve) {
                                        return Scope.read(rootObserve, rootReads, options).value
                                    }
                                    // otherwise, go get the value
                                    var data = self.read(key, options);
                                    rootObserve = data.rootObserve;
                                    rootReads = data.reads;
                                    computeData.scope = data.scope;
                                    computeData.initialValue = data.value;
                                    return data.value;
                                }
                            })
                        };
                    return computeData

                },

                read: function(attr, options) {

                    // check if we should be running this on a parent.
                    if (attr.substr(0, 3) === "../") {
                        return this._parent.read(attr.substr(3), options)
                    } else if (attr == "..") {
                        return {
                            value: this._parent._context
                        }
                    } else if (attr == "." || attr == "this") {
                        return {
                            value: this._context
                        };
                    }

                    // Split the name up.
                    var names = attr.indexOf('\\.') == -1
                    // Reference doesn't contain escaped periods
                    ? attr.split('.')
                    // Reference contains escaped periods (`a.b\c.foo` == `a["b.c"].foo)
                    : getNames(attr),
                        namesLength = names.length,
                        j,
                        // The current context (a scope is just data and a parent scope).
                        context,
                        // The current scope.
                        scope = this,
                        // While we are looking for a value, we track the most likely place this value will be found.  
                        // This is so if there is no me.name.first, we setup a listener on me.name.
                        // The most likely canidate is the one with the most "read matches" "lowest" in the
                        // context chain.
                        // By "read matches", we mean the most number of values along the key.
                        // By "lowest" in the context chain, we mean the closest to the current context.
                        // We track the starting position of the likely place with `defaultObserve`.
                        defaultObserve,
                        // Tracks how to read from the defaultObserve.
                        defaultReads = [],
                        // Tracks the highest found number of "read matches".
                        defaultPropertyDepth = -1,
                        // `scope.read` is designed to be called within a compute, but
                        // for performance reasons only listens to observables within one context.
                        // This is to say, if you have me.name in the current context, but me.name.first and
                        // we are looking for me.name.first, we don't setup bindings on me.name and me.name.first.
                        // To make this happen, we clear readings if they do not find a value.  But,
                        // if that path turns out to be the default read, we need to restore them.  This
                        // variable remembers those reads so they can be restored.
                        defaultComputeReadings,
                        // Tracks the default's scope.
                        defaultScope,
                        // Tracks the first found observe.
                        currentObserve,
                        // Tracks the reads to get the value for a scope.
                        currentReads;

                    // While there is a scope/context to look in.
                    while (scope) {

                        // get the context
                        context = scope._context;

                        if (context != null) {


                            // Lets try this context
                            var data = Scope.read(context, names, can.simpleExtend({
                                        // Called when an observable is found.
                                        foundObservable: function(observe, nameIndex) {
                                            // Save the current observe.
                                            currentObserve = observe;
                                            currentReads = names.slice(nameIndex);
                                        },
                                        // Called when we were unable to find a value.
                                        earlyExit: function(parentValue, nameIndex) {
                                            // If this has more matching values,
                                            if (nameIndex > defaultPropertyDepth) {
                                                // save the state.
                                                defaultObserve = currentObserve;
                                                defaultReads = currentReads;
                                                defaultPropertyDepth = nameIndex;
                                                defaultScope = scope;
                                                // Clear and save readings so next attempt does not use these readings
                                                defaultComputeReadings = can.__clearReading && can.__clearReading();
                                            }

                                        }
                                    }, options));

                            // Found a matched reference.
                            if (data.value !== undefined) {
                                return {
                                    scope: scope,
                                    rootObserve: currentObserve,
                                    value: data.value,
                                    reads: currentReads
                                };
                            }
                        }
                        // Prevent prior readings.
                        can.__clearReading && can.__clearReading();
                        // Move up to the next scope.
                        scope = scope._parent;
                    }
                    // If there was a likely observe.
                    if (defaultObserve) {
                        // Restore reading for previous compute
                        can.__setReading && can.__setReading(defaultComputeReadings)
                        return {
                            scope: defaultScope,
                            rootObserve: defaultObserve,
                            reads: defaultReads,
                            value: undefined
                        }
                    } else {
                        // we found nothing and no observable
                        return {
                            names: names,
                            value: undefined
                        };
                    }

                }
            });
        can.view.Scope = Scope;
        return Scope;

    })(__m2, __m9, __m12, __m15, __m19, __m16);

    // ## view/elements.js
    var __m21 = (function() {

        var elements = {
            tagToContentPropMap: {
                option: "textContent" in document.createElement("option") ? "textContent" : "innerText",
                textarea: "value"
            },

            attrMap: {
                "class": "className",
                "value": "value",
                "innerText": "innerText",
                "textContent": "textContent",
                "checked": true,
                "disabled": true,
                "readonly": true,
                "required": true,
                src: function(el, val) {
                    if (val == null || val == "") {
                        el.removeAttribute("src")
                    } else {
                        el.setAttribute("src", val)
                    }
                }
            },
            // matches the attrName of a regexp
            attrReg: /([^\s]+)[\s]*=[\s]*/,
            // elements whos default value we should set
            defaultValue: ["input", "textarea"],
            // a map of parent element to child elements

            tagMap: {
                "": "span",
                table: "tbody",
                tr: "td",
                ol: "li",
                ul: "li",
                tbody: "tr",
                thead: "tr",
                tfoot: "tr",
                select: "option",
                optgroup: "option"
            },
            // a tag's parent element
            reverseTagMap: {
                tr: "tbody",
                option: "select",
                td: "tr",
                th: "tr",
                li: "ul"
            },
            // Used to determine the parentNode if el is directly within a documentFragment
            getParentNode: function(el, defaultParentNode) {
                return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
            },
            // Set an attribute on an element
            setAttr: function(el, attrName, val) {
                var tagName = el.nodeName.toString().toLowerCase(),
                    prop = elements.attrMap[attrName];
                // if this is a special property
                if (typeof prop === "function") {
                    prop(el, val)
                } else if (prop === true) {
                    el[attrName] = true;
                } else if (prop) {
                    // set the value as true / false
                    el[prop] = val;
                    if (prop === "value" && can.inArray(tagName, elements.defaultValue) >= 0) {
                        el.defaultValue = val;
                    }
                } else {
                    el.setAttribute(attrName, val);
                }
            },
            // Gets the value of an attribute.
            getAttr: function(el, attrName) {
                // Default to a blank string for IE7/8
                return (elements.attrMap[attrName] && el[elements.attrMap[attrName]] ?
                    el[elements.attrMap[attrName]] :
                    el.getAttribute(attrName)) || '';
            },
            // Removes the attribute.
            removeAttr: function(el, attrName) {
                var setter = elements.attrMap[attrName];
                if (typeof prop === "function") {
                    prop(el, undefined)
                }
                if (setter === true) {
                    el[attrName] = false;
                } else if (typeof setter === "string") {
                    el[setter] = "";
                } else {
                    el.removeAttribute(attrName);
                }
            },
            // Gets a "pretty" value for something
            contentText: function(text) {
                if (typeof text == 'string') {
                    return text;
                }
                // If has no value, return an empty string.
                if (!text && text !== 0) {
                    return '';
                }
                return "" + text;
            },

            after: function(oldElements, newFrag) {
                var last = oldElements[oldElements.length - 1];

                // Insert it in the `document` or `documentFragment`
                if (last.nextSibling) {
                    can.insertBefore(last.parentNode, newFrag, last.nextSibling)
                } else {
                    can.appendChild(last.parentNode, newFrag);
                }
            },

            replace: function(oldElements, newFrag) {
                elements.after(oldElements, newFrag);
                can.remove(can.$(oldElements));
            }
        };
        // TODO: this doesn't seem to be doing anything
        // feature detect if setAttribute works with styles
        (function() {
            // feature detect if 
            var div = document.createElement('div')
            div.setAttribute("style", "width: 5px")
            div.setAttribute("style", "width: 10px");
            // make style use cssText
            elements.attrMap.style = function(el, val) {
                el.style.cssText = val || ""
            }
        })();


        return elements;
    })();

    // ## view/scanner.js
    var __m20 = (function(can, elements) {

        var newLine = /(\r|\n)+/g,
            // Escapes characters starting with `\`.
            clean = function(content) {
                return content
                    .split('\\').join("\\\\")
                    .split("\n").join("\\n")
                    .split('"').join('\\"')
                    .split("\t").join("\\t");
            },
            // Returns a tagName to use as a temporary placeholder for live content
            // looks forward ... could be slow, but we only do it when necessary
            getTag = function(tagName, tokens, i) {
                // if a tagName is provided, use that
                if (tagName) {
                    return tagName;
                } else {
                    // otherwise go searching for the next two tokens like "<",TAG
                    while (i < tokens.length) {
                        if (tokens[i] == "<" && elements.reverseTagMap[tokens[i + 1]]) {
                            return elements.reverseTagMap[tokens[i + 1]];
                        }
                        i++;
                    }
                }
                return '';
            },
            bracketNum = function(content) {
                return (--content.split("{").length) - (--content.split("}").length);
            },
            myEval = function(script) {
                eval(script);
            },
            attrReg = /([^\s]+)[\s]*=[\s]*$/,
            // Commands for caching.
            startTxt = 'var ___v1ew = [];',
            finishTxt = "return ___v1ew.join('')",
            put_cmd = "___v1ew.push(\n",
            insert_cmd = put_cmd,
            // Global controls (used by other functions to know where we are).
            // Are we inside a tag?
            htmlTag = null,
            // Are we within a quote within a tag?
            quote = null,
            // What was the text before the current quote? (used to get the `attr` name)
            beforeQuote = null,
            // Whether a rescan is in progress
            rescan = null,
            getAttrName = function() {
                var matches = beforeQuote.match(attrReg);
                return matches && matches[1];
            },
            // Used to mark where the element is.
            status = function() {
                // `t` - `1`.
                // `h` - `0`.
                // `q` - String `beforeQuote`.
                return quote ? "'" + getAttrName() + "'" : (htmlTag ? 1 : 0);
            },
            // returns the top of a stack
            top = function(stack) {
                return stack[stack.length - 1]
            },
            // characters that automatically mean a custom element
            automaticCustomElementCharacters = /[-\:]/,
            Scanner;

        can.view.Scanner = Scanner = function(options) {
            // Set options on self
            can.extend(this, {

                    text: {},
                    tokens: []
                }, options);
            // make sure it's an empty string if it's not
            this.text.options = this.text.options || ""

            // Cache a token lookup
            this.tokenReg = [];
            this.tokenSimple = {
                "<": "<",
                ">": ">",
                '"': '"',
                "'": "'"
            };
            this.tokenComplex = [];
            this.tokenMap = {};
            for (var i = 0, token; token = this.tokens[i]; i++) {


                // Save complex mappings (custom regexp)
                if (token[2]) {
                    this.tokenReg.push(token[2]);
                    this.tokenComplex.push({
                            abbr: token[1],
                            re: new RegExp(token[2]),
                            rescan: token[3]
                        });
                }
                // Save simple mappings (string only, no regexp)
                else {
                    this.tokenReg.push(token[1]);
                    this.tokenSimple[token[1]] = token[0];
                }
                this.tokenMap[token[0]] = token[1];
            }

            // Cache the token registry.
            this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")", "g");
        };

        Scanner.attributes = {};
        Scanner.regExpAttributes = {};

        Scanner.attribute = function(attribute, callback) {
            if (typeof attribute == "string") {
                Scanner.attributes[attribute] = callback;
            } else {
                Scanner.regExpAttributes[attribute] = {
                    match: attribute,
                    callback: callback
                };
            }

        }
        Scanner.hookupAttributes = function(options, el) {
            can.each(options && options.attrs || [], function(attr) {
                options.attr = attr;
                if (Scanner.attributes[attr]) {
                    Scanner.attributes[attr](options, el);
                } else {
                    can.each(Scanner.regExpAttributes, function(attrMatcher) {
                        if (attrMatcher.match.test(attr)) {
                            attrMatcher.callback(options, el)
                        }
                    })
                }

            })
        }
        Scanner.tag = function(tagName, callback) {
            // if we have html5shive ... re-generate
            if (window.html5) {
                html5.elements += " " + tagName
                html5.shivDocument();
            }

            Scanner.tags[tagName.toLowerCase()] = callback;
        }
        Scanner.tags = {};
        // This is called when there is a special tag
        Scanner.hookupTag = function(hookupOptions) {
            // we need to call any live hookups
            // so get that and return the hook
            // a better system will always be called with the same stuff
            var hooks = can.view.getHooks();
            return can.view.hook(function(el) {
                can.each(hooks, function(fn) {
                    fn(el);
                });

                var tagName = hookupOptions.tagName,
                    helperTagCallback = hookupOptions.options.read('helpers._tags.' + tagName, {
                            isArgument: true,
                            proxyMethods: false
                        }).value,
                    tagCallback = helperTagCallback || Scanner.tags[tagName];

                // If this was an element like <foo-bar> that doesn't have a component, just render its content
                var scope = hookupOptions.scope,
                    res = tagCallback ? tagCallback(el, hookupOptions) : scope;

                // If the tagCallback gave us something to render with, and there is content within that element
                // render it!
                if (res && hookupOptions.subtemplate) {

                    if (scope !== res) {
                        scope = scope.add(res)
                    }
                    var frag = can.view.frag(hookupOptions.subtemplate(scope, hookupOptions.options));
                    can.appendChild(el, frag);
                }
                can.view.Scanner.hookupAttributes(hookupOptions, el);
            });

        }

        Scanner.prototype = {
            // a default that can be overwritten
            helpers: [],

            scan: function(source, name) {
                var tokens = [],
                    last = 0,
                    simple = this.tokenSimple,
                    complex = this.tokenComplex;

                source = source.replace(newLine, "\n");
                if (this.transform) {
                    source = this.transform(source);
                }
                source.replace(this.tokenReg, function(whole, part) {
                    // offset is the second to last argument
                    var offset = arguments[arguments.length - 2];

                    // if the next token starts after the last token ends
                    // push what's in between
                    if (offset > last) {
                        tokens.push(source.substring(last, offset));
                    }

                    // push the simple token (if there is one)
                    if (simple[whole]) {
                        tokens.push(whole);
                    }
                    // otherwise lookup complex tokens
                    else {
                        for (var i = 0, token; token = complex[i]; i++) {
                            if (token.re.test(whole)) {
                                tokens.push(token.abbr);
                                // Push a rescan function if one exists
                                if (token.rescan) {
                                    tokens.push(token.rescan(part));
                                }
                                break;
                            }
                        }
                    }

                    // update the position of the last part of the last token
                    last = offset + part.length;
                });

                // if there's something at the end, add it
                if (last < source.length) {
                    tokens.push(source.substr(last));
                }

                var content = '',
                    buff = [startTxt + (this.text.start || '')],
                    // Helper `function` for putting stuff in the view concat.
                    put = function(content, bonus) {
                        buff.push(put_cmd, '"', clean(content), '"' + (bonus || '') + ');');
                    },
                    // A stack used to keep track of how we should end a bracket
                    // `}`.  
                    // Once we have a `<%= %>` with a `leftBracket`,
                    // we store how the file should end here (either `))` or `;`).
                    endStack = [],
                    // The last token, used to remember which tag we are in.
                    lastToken,
                    // The corresponding magic tag.
                    startTag = null,
                    // Was there a magic tag inside an html tag?
                    magicInTag = false,
                    // was there a special state
                    specialStates = {
                        attributeHookups: [],
                        // a stack of tagHookups
                        tagHookups: []
                    },
                    // The current tag name.
                    tagName = '',
                    // stack of tagNames
                    tagNames = [],
                    // Pop from tagNames?
                    popTagName = false,
                    // Declared here.
                    bracketCount,

                    // in a special attr like src= or style=
                    specialAttribute = false,

                    i = 0,
                    token,
                    tmap = this.tokenMap,
                    attrName;

                // Reinitialize the tag state goodness.
                htmlTag = quote = beforeQuote = null;

                for (;
                    (token = tokens[i++]) !== undefined;) {
                    if (startTag === null) {
                        switch (token) {
                            case tmap.left:
                            case tmap.escapeLeft:
                            case tmap.returnLeft:
                                magicInTag = htmlTag && 1;
                            case tmap.commentLeft:
                                // A new line -- just add whatever content within a clean.  
                                // Reset everything.
                                startTag = token;
                                if (content.length) {
                                    put(content);
                                }
                                content = '';
                                break;
                            case tmap.escapeFull:
                                // This is a full line escape (a line that contains only whitespace and escaped logic)
                                // Break it up into escape left and right
                                magicInTag = htmlTag && 1;
                                rescan = 1;
                                startTag = tmap.escapeLeft;
                                if (content.length) {
                                    put(content);
                                }
                                rescan = tokens[i++];
                                content = rescan.content || rescan;
                                if (rescan.before) {
                                    put(rescan.before);
                                }
                                tokens.splice(i, 0, tmap.right);
                                break;
                            case tmap.commentFull:
                                // Ignore full line comments.
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            case '<':
                                // Make sure we are not in a comment.
                                if (tokens[i].indexOf("!--") !== 0) {
                                    htmlTag = 1;
                                    magicInTag = 0;
                                }

                                content += token;


                                break;
                            case '>':
                                htmlTag = 0;
                                // content.substr(-1) doesn't work in IE7/8
                                var emptyElement = (content.substr(content.length - 1) == "/" || content.substr(content.length - 2) == "--"),
                                    attrs = "";
                                // if there was a magic tag
                                // or it's an element that has text content between its tags, 
                                // but content is not other tags add a hookup
                                // TODO: we should only add `can.EJS.pending()` if there's a magic tag 
                                // within the html tags.
                                if (specialStates.attributeHookups.length) {
                                    attrs = "attrs: ['" + specialStates.attributeHookups.join("','") + "'], ";
                                    specialStates.attributeHookups = [];
                                }
                                // this is the > of a special tag
                                if (tagName === top(specialStates.tagHookups)) {
                                    // If it's a self closing tag (like <content/>) make sure we put the / at the end.
                                    if (emptyElement) {
                                        content = content.substr(0, content.length - 1)
                                    }
                                    // Put the start of the end
                                    buff.push(put_cmd,
                                        '"', clean(content), '"',
                                        ",can.view.Scanner.hookupTag({tagName:'" + tagName + "'," + (attrs) + "scope: " + (this.text.scope || "this") + this.text.options)




                                    // if it's a self closing tag (like <content/>) close and end the tag
                                    if (emptyElement) {
                                        buff.push("}));");
                                        content = "/>";
                                        specialStates.tagHookups.pop()
                                    }
                                    // if it's an empty tag	 
                                    else if (tokens[i] === "<" && tokens[i + 1] === "/" + tagName) {
                                        buff.push("}));");
                                        content = token;
                                        specialStates.tagHookups.pop()
                                    } else {
                                        // it has content
                                        buff.push(",subtemplate: function(" + this.text.argNames + "){\n" + startTxt + (this.text.start || ''));
                                        content = '';
                                    }

                                } else if (magicInTag || (!popTagName && elements.tagToContentPropMap[tagNames[tagNames.length - 1]]) || attrs) {
                                    // make sure / of /> is on the right of pending
                                    var pendingPart = ",can.view.pending({" + attrs + "scope: " + (this.text.scope || "this") + this.text.options + "}),\"";
                                    if (emptyElement) {
                                        put(content.substr(0, content.length - 1), pendingPart + "/>\"");
                                    } else {
                                        put(content, pendingPart + ">\"");
                                    }
                                    content = '';
                                    magicInTag = 0;
                                } else {
                                    content += token;
                                }



                                // if it's a tag like <input/>
                                if (emptyElement || popTagName) {
                                    // remove the current tag in the stack
                                    tagNames.pop();
                                    // set the current tag to the previous parent
                                    tagName = tagNames[tagNames.length - 1];
                                    // Don't pop next time
                                    popTagName = false;
                                }
                                specialStates.attributeHookups = [];
                                break;
                            case "'":
                            case '"':
                                // If we are in an html tag, finding matching quotes.
                                if (htmlTag) {
                                    // We have a quote and it matches.
                                    if (quote && quote === token) {
                                        // We are exiting the quote.
                                        quote = null;
                                        // Otherwise we are creating a quote.
                                        // TODO: does this handle `\`?
                                        var attr = getAttrName();
                                        if (Scanner.attributes[attr]) {
                                            specialStates.attributeHookups.push(attr);
                                        } else {
                                            can.each(Scanner.regExpAttributes, function(attrMatcher) {
                                                if (attrMatcher.match.test(attr)) {
                                                    specialStates.attributeHookups.push(attr);
                                                }
                                            });
                                        }

                                        if (specialAttribute) {

                                            content += token;
                                            put(content);
                                            buff.push(finishTxt, "}));\n")
                                            content = ""
                                            specialAttribute = false;

                                            break;
                                        }


                                    } else if (quote === null) {
                                        quote = token;
                                        beforeQuote = lastToken;
                                        attrName = getAttrName()
                                        // TODO: check if there's magic!!!!
                                        if ((tagName == "img" && attrName == "src") || attrName === "style") {
                                            // put content that was before the attr name, but don't include the src=
                                            put(content.replace(attrReg, ""));
                                            content = "";

                                            specialAttribute = true;

                                            buff.push(insert_cmd, "can.view.txt(2,'" + getTag(tagName, tokens, i) + "'," + status() + ",this,function(){", startTxt);
                                            put(attrName + "=" + token);
                                            break;
                                        }

                                    }
                                }
                            default:
                                // Track the current tag
                                if (lastToken === '<') {

                                    tagName = token.substr(0, 3) === "!--" ?
                                        "!--" : token.split(/\s/)[0];

                                    var isClosingTag = false;

                                    if (tagName.indexOf("/") === 0) {
                                        isClosingTag = true;
                                        var cleanedTagName = tagName.substr(1);
                                    }

                                    if (isClosingTag) { // </tag>

                                        // when we enter a new tag, pop the tag name stack
                                        if (top(tagNames) === cleanedTagName) {
                                            // set tagName to the last tagName
                                            // if there are no more tagNames, we'll rely on getTag.
                                            tagName = cleanedTagName;
                                            popTagName = true;
                                        }

                                        // if we are in a closing tag of a custom tag
                                        if (top(specialStates.tagHookups) == cleanedTagName) {

                                            // remove the last < from the content
                                            put(content.substr(0, content.length - 1));

                                            // finish the "section"
                                            buff.push(finishTxt + "}}) );");

                                            // the < belongs to the outside
                                            content = "><"
                                            specialStates.tagHookups.pop()
                                        }

                                    } else {
                                        if (tagName.lastIndexOf("/") === tagName.length - 1) {
                                            tagName = tagName.substr(0, tagName.length - 1);


                                        }

                                        if (tagName !== "!--" && (Scanner.tags[tagName] || automaticCustomElementCharacters.test(tagName))) {
                                            // if the content tag is inside something it doesn't belong ...
                                            if (tagName === "content" && elements.tagMap[top(tagNames)]) {
                                                // convert it to an element that will work
                                                token = token.replace("content", elements.tagMap[top(tagNames)])
                                            }
                                            // we will hookup at the ending tag>
                                            specialStates.tagHookups.push(tagName);
                                        }


                                        tagNames.push(tagName);

                                    }

                                }
                                content += token;
                                break;
                        }
                    } else {
                        // We have a start tag.
                        switch (token) {
                            case tmap.right:
                            case tmap.returnRight:
                                switch (startTag) {
                                    case tmap.left:
                                        // Get the number of `{ minus }`
                                        bracketCount = bracketNum(content);

                                        // We are ending a block.
                                        if (bracketCount == 1) {

                                            // We are starting on.
                                            buff.push(insert_cmd, "can.view.txt(0,'" + getTag(tagName, tokens, i) + "'," + status() + ",this,function(){", startTxt, content);

                                            endStack.push({
                                                    before: "",
                                                    after: finishTxt + "}));\n"
                                                });
                                        } else {

                                            // How are we ending this statement?
                                            last = // If the stack has value and we are ending a block...
                                            endStack.length && bracketCount == -1 ? // Use the last item in the block stack.
                                            endStack.pop() : // Or use the default ending.
                                            {
                                                after: ";"
                                            };

                                            // If we are ending a returning block, 
                                            // add the finish text which returns the result of the
                                            // block.
                                            if (last.before) {
                                                buff.push(last.before);
                                            }
                                            // Add the remaining content.
                                            buff.push(content, ";", last.after);
                                        }
                                        break;
                                    case tmap.escapeLeft:
                                    case tmap.returnLeft:
                                        // We have an extra `{` -> `block`.
                                        // Get the number of `{ minus }`.
                                        bracketCount = bracketNum(content);
                                        // If we have more `{`, it means there is a block.
                                        if (bracketCount) {
                                            // When we return to the same # of `{` vs `}` end with a `doubleParent`.
                                            endStack.push({
                                                    before: finishTxt,
                                                    after: "}));\n"
                                                });
                                        }

                                        var escaped = startTag === tmap.escapeLeft ? 1 : 0,
                                            commands = {
                                                insert: insert_cmd,
                                                tagName: getTag(tagName, tokens, i),
                                                status: status(),
                                                specialAttribute: specialAttribute
                                            };

                                        for (var ii = 0; ii < this.helpers.length; ii++) {
                                            // Match the helper based on helper
                                            // regex name value
                                            var helper = this.helpers[ii];
                                            if (helper.name.test(content)) {
                                                content = helper.fn(content, commands);

                                                // dont escape partials
                                                if (helper.name.source == /^>[\s]*\w*/.source) {
                                                    escaped = 0;
                                                }
                                                break;
                                            }
                                        }

                                        // Handle special cases
                                        if (typeof content == 'object') {
                                            if (content.raw) {
                                                buff.push(content.raw);
                                            }
                                        } else if (specialAttribute) {
                                            buff.push(insert_cmd, content, ');');
                                        } else {
                                            // If we have `<%== a(function(){ %>` then we want
                                            // `can.EJS.text(0,this, function(){ return a(function(){ var _v1ew = [];`.
                                            buff.push(insert_cmd, "can.view.txt(\n" + escaped + ",\n'" + tagName + "',\n" + status() + ",\nthis,\nfunction(){ " + (this.text.escape || '') + "return ", content,
                                                // If we have a block.
                                                bracketCount ?
                                                // Start with startTxt `"var _v1ew = [];"`.
                                                startTxt :
                                                // If not, add `doubleParent` to close push and text.
                                                "}));\n");
                                        }

                                        if (rescan && rescan.after && rescan.after.length) {
                                            put(rescan.after.length);
                                            rescan = null;
                                        }
                                        break;
                                }
                                startTag = null;
                                content = '';
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            default:
                                content += token;
                                break;
                        }
                    }
                    lastToken = token;
                }

                // Put it together...
                if (content.length) {
                    // Should be `content.dump` in Ruby.
                    put(content);
                }
                buff.push(";");
                var template = buff.join(''),
                    out = {
                        out: (this.text.outStart || "") + template + " " + finishTxt + (this.text.outEnd || "")
                    };
                // Use `eval` instead of creating a function, because it is easier to debug.
                myEval.call(out, 'this.fn = (function(' + this.text.argNames + '){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");

                return out;
            }
        };

        can.view.Scanner.tag("content", function(el, options) {
            return options.scope;
        })

        return Scanner;
    })(__m19, __m21);

    // ## view/node_lists/node_lists.js
    var __m24 = (function(can) {

        // In some browsers, text nodes can not take expando properties.
        // We test that here.
        var canExpando = true;
        try {
            document.createTextNode('')._ = 0;
        } catch (ex) {
            canExpando = false;
        }

        // A mapping of element ids to nodeList id
        var nodeMap = {},
            // A mapping of ids to text nodes
            textNodeMap = {},
            expando = "ejs_" + Math.random(),
            _id = 0,
            id = function(node) {
                if (canExpando || node.nodeType !== 3) {
                    if (node[expando]) {
                        return node[expando];
                    } else {
                        return node[expando] = (node.nodeName ? "element_" : "obj_") + (++_id);
                    }
                } else {
                    for (var textNodeID in textNodeMap) {
                        if (textNodeMap[textNodeID] === node) {
                            return textNodeID;
                        }
                    }

                    textNodeMap["text_" + (++_id)] = node;
                    return "text_" + _id;
                }
            },
            splice = [].splice;


        var nodeLists = {
            id: id,


            update: function(nodeList, newNodes) {
                // Unregister all childNodes.
                can.each(nodeList.childNodeLists, function(nodeList) {
                    nodeLists.unregister(nodeList)
                })
                nodeList.childNodeLists = [];

                // Remove old node pointers to this list.
                can.each(nodeList, function(node) {
                    delete nodeMap[id(node)];
                });

                var newNodes = can.makeArray(newNodes);

                // indicate the new nodes belong to this list
                can.each(newNodes, function(node) {
                    nodeMap[id(node)] = nodeList;
                });


                var oldListLength = nodeList.length,
                    firstNode = nodeList[0];
                // Replace oldNodeLists's contents'
                splice.apply(nodeList, [0, oldListLength].concat(newNodes));

                // update all parent nodes so they are able to replace the correct elements
                var parentNodeList = nodeList;
                while (parentNodeList = parentNodeList.parentNodeList) {
                    splice.apply(parentNodeList, [can.inArray(firstNode, parentNodeList), oldListLength].concat(newNodes));
                }


            },

            register: function(nodeList, unregistered, parent) {

                // add an id to the nodeList
                nodeList.unregistered = unregistered,

                nodeList.childNodeLists = [];

                if (!parent) {
                    // find the parent by looking up where this node is
                    if (nodeList.length > 1) {
                        throw "does not work"
                    }
                    var nodeId = id(nodeList[0]);
                    parent = nodeMap[nodeId];

                }
                nodeList.parentNodeList = parent;
                parent && parent.childNodeLists.push(nodeList);
                return nodeList;
            },
            // removes node in all parent nodes and unregisters all childNodes

            unregister: function(nodeList) {
                if (!nodeList.isUnregistered) {
                    nodeList.isUnregistered = true;
                    // unregister all childNodeLists
                    delete nodeList.parentNodeList;
                    can.each(nodeList, function(node) {
                        var nodeId = id(node);
                        delete nodeMap[nodeId]
                    });
                    // this can unbind which will call itself
                    nodeList.unregistered && nodeList.unregistered();
                    can.each(nodeList.childNodeLists, function(nodeList) {
                        nodeLists.unregister(nodeList)
                    });
                }
            },
            nodeMap: nodeMap,
        }
        return nodeLists;

    })(__m2, __m21);

    // ## view/live/live.js
    var __m23 = (function(can, elements, view, nodeLists) {
        // ## live.js
        // The live module provides live binding for computes
        // and can.List.
        // Currently, it's API is designed for `can/view/render`, but
        // it could easily be used for other purposes.

        // ### Helper methods
        // #### setup
        // `setup(HTMLElement, bind(data), unbind(data)) -> data`
        // Calls bind right away, but will call unbind
        // if the element is "destroyed" (removed from the DOM).
        var setupCount = 0;
        var setup = function(el, bind, unbind) {
            // Removing an element can call teardown which
            // unregister the nodeList which calls teardown
            var tornDown = false,
                teardown = function() {
                    if (!tornDown) {
                        tornDown = true;
                        unbind(data)
                        can.unbind.call(el, 'removed', teardown);

                    }

                    return true
                },
                data = {
                    // returns true if no parent
                    teardownCheck: function(parent) {
                        return parent ? false : teardown();
                    }
                }

            can.bind.call(el, 'removed', teardown);
            bind(data)
            return data;
        },
            // #### listen
            // Calls setup, but presets bind and unbind to 
            // operate on a compute
            listen = function(el, compute, change) {
                return setup(el, function() {
                    compute.bind("change", change);
                }, function(data) {
                    compute.unbind("change", change);
                    if (data.nodeList) {
                        nodeLists.unregister(data.nodeList);
                    }
                });
            },
            // #### getAttributeParts
            // Breaks up a string like foo='bar' into ["foo","'bar'""]
            getAttributeParts = function(newVal) {
                return (newVal || "").replace(/['"]/g, '').split('=')
            },
            splice = [].splice;


        var live = {

            list: function(el, compute, render, context, parentNode) {


                // A nodeList of all elements this live-list manages.
                // This is here so that if this live list is within another section
                // that section is able to remove the items in this list.
                var masterNodeList = [el],
                    // A mapping of the index of an item to an array
                    // of elements that represent the item.
                    // Each array is registered so child or parent
                    // live structures can update the elements.
                    itemIndexToNodeListsMap = [],
                    // A mapping of items to their indicies'
                    indexMap = [],

                    // Called when items are added to the list.
                    add = function(ev, items, index) {

                        // Collect new html and mappings
                        var frag = document.createDocumentFragment(),
                            newNodeLists = [],
                            newIndicies = [];

                        // For each new item,
                        can.each(items, function(item, key) {

                            var itemIndex = can.compute(key + index),
                                // get its string content
                                itemHTML = render.call(context, item, itemIndex),
                                // and convert it into elements.
                                itemFrag = can.view.fragment(itemHTML)


                                // Add those elements to the mappings.
                                newNodeLists.push(
                                    // Register those nodes with nodeLists.
                                    nodeLists.register(can.makeArray(itemFrag.childNodes), undefined, masterNodeList));

                            // Hookup the fragment (which sets up child live-bindings) and
                            // add it to the collection of all added elements.
                            frag.appendChild(can.view.hookup(itemFrag));
                            newIndicies.push(itemIndex)
                        })

                        // Check if we are adding items at the end
                        if (!itemIndexToNodeListsMap[index]) {

                            elements.after(
                                // If we are adding items to an empty list
                                index == 0 ?
                                // add those items after the placeholder text element.
                                [text] :
                                // otherwise, add them after the last element in the previous index.
                                itemIndexToNodeListsMap[index - 1], frag)
                        } else {
                            // Add elements before the next index's first element.
                            var el = itemIndexToNodeListsMap[index][0];
                            can.insertBefore(el.parentNode, frag, el);
                        }

                        splice.apply(itemIndexToNodeListsMap, [index, 0].concat(newNodeLists));

                        // update indices after insert point
                        splice.apply(indexMap, [index, 0].concat(newIndicies));
                        for (var i = index + newIndicies.length, len = indexMap.length; i < len; i++) {
                            indexMap[i](i)
                        }

                    },

                    // Called when items are removed or when the bindings are torn down.
                    remove = function(ev, items, index, duringTeardown) {

                        // If this is because an element was removed, we should
                        // check to make sure the live elements are still in the page.
                        // If we did this during a teardown, it would cause an infinite loop.
                        if (!duringTeardown && data.teardownCheck(text.parentNode)) {
                            return
                        }

                        var removedMappings = itemIndexToNodeListsMap.splice(index, items.length),
                            itemsToRemove = [];

                        can.each(removedMappings, function(nodeList) {
                            // add items that we will remove all at once
                            [].push.apply(itemsToRemove, nodeList)
                            // Update any parent lists to remove these items
                            nodeLists.update(nodeList, []);
                            // unregister the list
                            nodeLists.unregister(nodeList);

                        });
                        // update indices after remove point
                        indexMap.splice(index, items.length)
                        for (var i = index, len = indexMap.length; i < len; i++) {
                            indexMap[i](i)
                        }

                        can.remove(can.$(itemsToRemove));
                    },
                    parentNode = elements.getParentNode(el, parentNode),
                    text = document.createTextNode(""),
                    // The current list.
                    list,

                    // Called when the list is replaced with a new list or the binding is torn-down.
                    teardownList = function() {
                        // there might be no list right away, and the list might be a plain
                        // array
                        list && list.unbind && list.unbind("add", add).unbind("remove", remove);
                        // use remove to clean stuff up for us
                        remove({}, {
                                length: itemIndexToNodeListsMap.length
                            }, 0, true);
                    },
                    // Called when the list is replaced or setup.
                    updateList = function(ev, newList, oldList) {
                        teardownList();
                        // make an empty list if the compute returns null or undefined
                        list = newList || [];
                        // list might be a plain array
                        list.bind && list.bind("add", add).bind("remove", remove);
                        add({}, list, 0);
                    }


                    // Setup binding and teardown to add and remove events
                var data = setup(parentNode, function() {
                    can.isFunction(compute) && compute.bind("change", updateList)
                }, function() {
                    can.isFunction(compute) && compute.unbind("change", updateList)
                    teardownList()
                });

                live.replace(masterNodeList, text, data.teardownCheck)

                // run the list setup
                updateList({}, can.isFunction(compute) ? compute() : compute)


            },

            html: function(el, compute, parentNode) {
                var parentNode = elements.getParentNode(el, parentNode),
                    data = listen(parentNode, compute, function(ev, newVal, oldVal) {
                        // TODO: remove teardownCheck in 2.1
                        var attached = nodes[0].parentNode;
                        // update the nodes in the DOM with the new rendered value
                        if (attached) {
                            makeAndPut(newVal);
                        }
                        data.teardownCheck(nodes[0].parentNode);
                    });

                var nodes = [el],
                    makeAndPut = function(val) {
                        var frag = can.view.fragment("" + val),
                            oldNodes = can.makeArray(nodes);

                        // We need to mark each node as belonging to the node list.
                        nodeLists.update(nodes, frag.childNodes)

                        frag = can.view.hookup(frag, parentNode)

                        elements.replace(oldNodes, frag)
                    };

                data.nodeList = nodes;
                // register the span so nodeLists knows the parentNodeList
                nodeLists.register(nodes, data.teardownCheck)
                makeAndPut(compute());

            },

            replace: function(nodes, val, teardown) {
                var oldNodes = nodes.slice(0),
                    frag;

                nodeLists.register(nodes, teardown);
                if (typeof val === "string") {
                    frag = can.view.fragment(val)
                } else if (val.nodeType !== 11) {
                    frag = document.createDocumentFragment();
                    frag.appendChild(val)
                } else {
                    frag = val;
                }

                // We need to mark each node as belonging to the node list.
                nodeLists.update(nodes, frag.childNodes)

                if (typeof val === "string") {
                    // if it was a string, check for hookups
                    frag = can.view.hookup(frag, nodes[0].parentNode);
                }
                elements.replace(oldNodes, frag);

                return nodes;
            },

            text: function(el, compute, parentNode) {
                var parent = elements.getParentNode(el, parentNode);

                // setup listening right away so we don't have to re-calculate value
                var data = listen(parent, compute, function(ev, newVal, oldVal) {
                    // Sometimes this is 'unknown' in IE and will throw an exception if it is
                    if (typeof node.nodeValue != 'unknown') {
                        node.nodeValue = "" + newVal;
                    }
                    // TODO: remove in 2.1
                    data.teardownCheck(node.parentNode);
                }),
                    // The text node that will be updated
                    node = document.createTextNode(compute());

                // Replace the placeholder with the live node and do the nodeLists thing.
                live.replace([el], node, data.teardownCheck);
            },

            attributes: function(el, compute, currentValue) {
                var setAttrs = function(newVal) {
                    var parts = getAttributeParts(newVal),
                        newAttrName = parts.shift();

                    // Remove if we have a change and used to have an `attrName`.
                    if ((newAttrName != attrName) && attrName) {
                        elements.removeAttr(el, attrName);
                    }
                    // Set if we have a new `attrName`.
                    if (newAttrName) {
                        elements.setAttr(el, newAttrName, parts.join('='));
                        attrName = newAttrName;
                    }
                }

                listen(el, compute, function(ev, newVal) {
                    setAttrs(newVal)
                })
                // current value has been set
                if (arguments.length >= 3) {
                    var attrName = getAttributeParts(currentValue)[0]
                } else {
                    setAttrs(compute())
                }
            },
            attributePlaceholder: '__!!__',
            attributeReplace: /__!!__/g,
            attribute: function(el, attributeName, compute) {
                listen(el, compute, function(ev, newVal) {
                    elements.setAttr(el, attributeName, hook.render());
                })

                var wrapped = can.$(el),
                    hooks;

                // Get the list of hookups or create one for this element.
                // Hooks is a map of attribute names to hookup `data`s.
                // Each hookup data has:
                // `render` - A `function` to render the value of the attribute.
                // `funcs` - A list of hookup `function`s on that attribute.
                // `batchNum` - The last event `batchNum`, used for performance.
                hooks = can.data(wrapped, 'hooks');
                if (!hooks) {
                    can.data(wrapped, 'hooks', hooks = {});
                }

                // Get the attribute value.
                var attr = elements.getAttr(el, attributeName),
                    // Split the attribute value by the template.
                    // Only split out the first __!!__ so if we have multiple hookups in the same attribute, 
                    // they will be put in the right spot on first render
                    parts = attr.split(live.attributePlaceholder),
                    goodParts = [],
                    hook;
                goodParts.push(parts.shift(),
                    parts.join(live.attributePlaceholder));

                // If we already had a hookup for this attribute...
                if (hooks[attributeName]) {
                    // Just add to that attribute's list of `function`s.
                    hooks[attributeName].computes.push(compute);
                } else {
                    // Create the hookup data.
                    hooks[attributeName] = {
                        render: function() {
                            var i = 0,
                                // attr doesn't have a value in IE
                                newAttr = attr ? attr.replace(live.attributeReplace, function() {
                                    return elements.contentText(hook.computes[i++]());
                                }) : elements.contentText(hook.computes[i++]());
                            return newAttr;
                        },
                        computes: [compute],
                        batchNum: undefined
                    };
                }

                // Save the hook for slightly faster performance.
                hook = hooks[attributeName];

                // Insert the value in parts.
                goodParts.splice(1, 0, compute());

                // Set the attribute.
                elements.setAttr(el, attributeName, goodParts.join(""));

            },
            specialAttribute: function(el, attributeName, compute) {

                listen(el, compute, function(ev, newVal) {
                    elements.setAttr(el, attributeName, getValue(newVal));
                });

                elements.setAttr(el, attributeName, getValue(compute()));
            }
        }
        var newLine = /(\r|\n)+/g;
        var getValue = function(val) {
            val = val.replace(elements.attrReg, "").replace(newLine, "");
            // check if starts and ends with " or '
            return /^["'].*["']$/.test(val) ? val.substr(1, val.length - 2) : val
        }
        can.view.live = live;
        can.view.nodeLists = nodeLists;
        can.view.elements = elements;
        return live;

    })(__m2, __m21, __m19, __m24);

    // ## view/render.js
    var __m22 = (function(can, elements, live) {

        var pendingHookups = [],
            tagChildren = function(tagName) {
                var newTag = elements.tagMap[tagName] || "span";
                if (newTag === "span") {
                    //innerHTML in IE doesn't honor leading whitespace after empty elements
                    return "@@!!@@";
                }
                return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";
            },
            contentText = function(input, tag) {

                // If it's a string, return.
                if (typeof input == 'string') {
                    return input;
                }
                // If has no value, return an empty string.
                if (!input && input !== 0) {
                    return '';
                }

                // If it's an object, and it has a hookup method.
                var hook = (input.hookup &&

                    // Make a function call the hookup method.

                    function(el, id) {
                        input.hookup.call(input, el, id);
                    }) ||

                // Or if it's a `function`, just use the input.
                (typeof input == 'function' && input);

                // Finally, if there is a `function` to hookup on some dom,
                // add it to pending hookups.
                if (hook) {
                    if (tag) {
                        return "<" + tag + " " + can.view.hook(hook) + "></" + tag + ">"
                    } else {
                        pendingHookups.push(hook);
                    }

                    return '';
                }

                // Finally, if all else is `false`, `toString()` it.
                return "" + input;
            },
            // Returns escaped/sanatized content for anything other than a live-binding
            contentEscape = function(txt, tag) {
                return (typeof txt == 'string' || typeof txt == 'number') ?
                    can.esc(txt) :
                    contentText(txt, tag);
            },
            // A flag to indicate if .txt was called within a live section within an element like the {{name}}
            // within `<div {{#person}}{{name}}{{/person}}/>`.
            withinTemplatedSectionWithinAnElement = false,
            emptyHandler = function() {};

        var current, lastHookups;

        can.extend(can.view, {
                live: live,
                // called in text to make a temporary 
                // can.view.lists function that can be called with
                // the list to iterate over and the template
                // used to produce the content within the list
                setupLists: function() {

                    var old = can.view.lists,
                        data;

                    can.view.lists = function(list, renderer) {
                        data = {
                            list: list,
                            renderer: renderer
                        }
                        return Math.random()
                    }
                    // sets back to the old data
                    return function() {
                        can.view.lists = old;
                        return data;
                    }
                },
                pending: function(data) {
                    // TODO, make this only run for the right tagName
                    var hooks = can.view.getHooks();
                    return can.view.hook(function(el) {
                        can.each(hooks, function(fn) {
                            fn(el);
                        });
                        can.view.Scanner.hookupAttributes(data, el);
                    });
                },
                getHooks: function() {
                    var hooks = pendingHookups.slice(0);
                    lastHookups = hooks;
                    pendingHookups = [];
                    return hooks;
                },
                onlytxt: function(self, func) {
                    return contentEscape(func.call(self))
                },

                txt: function(escape, tagName, status, self, func) {
                    // the temporary tag needed for any live setup
                    var tag = (elements.tagMap[tagName] || "span"),
                        // should live-binding be setup
                        setupLiveBinding = false,
                        // the compute's value
                        value;


                    // Are we currently within a live section within an element like the {{name}}
                    // within `<div {{#person}}{{name}}{{/person}}/>`.
                    if (withinTemplatedSectionWithinAnElement) {
                        value = func.call(self);
                    } else {

                        // If this magic tag is within an attribute or an html element,
                        // set the flag to true so we avoid trying to live bind
                        // anything that func might be setup.
                        // TODO: the scanner should be able to set this up.
                        if (typeof status === "string" || status === 1) {
                            withinTemplatedSectionWithinAnElement = true;
                        }

                        // Sets up a listener so we know any can.view.lists called 
                        // when func is called
                        var listTeardown = can.view.setupLists(),
                            unbind = function() {
                                compute.unbind("change", emptyHandler)
                            };
                        // Create a compute that calls func and looks for dependencies.
                        // By passing `false`, this compute can not be a dependency of other 
                        // computes.  This is because live-bits are nested, but 
                        // handle their own updating. For example:
                        //     {{#if items.length}}{{#items}}{{.}}{{/items}}{{/if}}
                        // We do not want `{{#if items.length}}` changing the DOM if
                        // `{{#items}}` text changes.
                        var compute = can.compute(func, self, false);

                        // Bind to get and temporarily cache the value of the compute.
                        compute.bind("change", emptyHandler);

                        // Call the "wrapping" function and get the binding information
                        var listData = listTeardown();

                        // Get the value of the compute
                        value = compute();

                        // Let people know we are no longer within an element.
                        withinTemplatedSectionWithinAnElement = false;

                        // If we should setup live-binding.
                        setupLiveBinding = compute.hasDependencies;
                    }

                    if (listData) {
                        unbind && unbind();
                        return "<" + tag + can.view.hook(function(el, parentNode) {
                            live.list(el, listData.list, listData.renderer, self, parentNode);
                        }) + "></" + tag + ">";
                    }

                    // If we had no observes just return the value returned by func.
                    if (!setupLiveBinding || typeof value === "function") {
                        unbind && unbind();
                        return ((escape || typeof status === 'string') && escape !== 2 ? contentEscape : contentText)(value, status === 0 && tag);
                    }

                    // the property (instead of innerHTML elements) to adjust. For
                    // example options should use textContent
                    var contentProp = elements.tagToContentPropMap[tagName];


                    // The magic tag is outside or between tags.
                    if (status === 0 && !contentProp) {
                        // Return an element tag with a hookup in place of the content
                        return "<" + tag + can.view.hook(
                            // if value is an object, it's likely something returned by .safeString
                            escape && typeof value != "object" ?
                            // If we are escaping, replace the parentNode with 
                            // a text node who's value is `func`'s return value.

                            function(el, parentNode) {
                                live.text(el, compute, parentNode);
                                unbind();
                            } :
                            // If we are not escaping, replace the parentNode with a
                            // documentFragment created as with `func`'s return value.

                            function(el, parentNode) {
                                live.html(el, compute, parentNode);
                                unbind();
                                //children have to be properly nested HTML for buildFragment to work properly
                            }) + ">" + tagChildren(tag) + "</" + tag + ">";
                        // In a tag, but not in an attribute
                    } else if (status === 1) {
                        // remember the old attr name
                        pendingHookups.push(function(el) {
                            live.attributes(el, compute, compute());
                            unbind();
                        });

                        return compute();
                    } else if (escape === 2) { // In a special attribute like src or style

                        var attributeName = status;
                        pendingHookups.push(function(el) {
                            live.specialAttribute(el, attributeName, compute);
                            unbind();
                        })
                        return compute();
                    } else { // In an attribute...
                        var attributeName = status === 0 ? contentProp : status;
                        // if the magic tag is inside the element, like `<option><% TAG %></option>`,
                        // we add this hookup to the last element (ex: `option`'s) hookups.
                        // Otherwise, the magic tag is in an attribute, just add to the current element's
                        // hookups.
                        (status === 0 ? lastHookups : pendingHookups).push(function(el) {
                            live.attribute(el, attributeName, compute);
                            unbind();
                        });
                        return live.attributePlaceholder;
                    }
                }
            });

        return can;
    })(__m19, __m21, __m23, __m10);

    // ## view/mustache/mustache.js
    var __m17 = (function(can) {

        // # mustache.js
        // `can.Mustache`: The Mustache templating engine.
        // See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation 
        // of the runtime render code design. The majority of the Mustache engine implementation 
        // occurs within the *Transformation* scanning helper.

        // ## Initialization
        // Define the view extension.
        can.view.ext = ".mustache";

        // ### Setup internal helper variables and functions.
        // An alias for the context variable used for tracking a stack of contexts.
        // This is also used for passing to helper functions to maintain proper context.
        var SCOPE = 'scope',
            // An alias for the variable used for the hash object that can be passed
            // to helpers via `options.hash`.
            HASH = '___h4sh',
            // An alias for the most used context stacking call.
            CONTEXT_OBJ = '{scope:' + SCOPE + ',options:options}',
            // argument names used to start the function (used by scanner and steal)
            ARG_NAMES = SCOPE + ",options",

            // matches arguments inside a {{ }}
            argumentsRegExp = /((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g,

            // matches a literal number, string, null or regexp
            literalNumberStringBooleanRegExp = /^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,

            // returns an object literal that we can use to look up a value in the current scope
            makeLookupLiteral = function(type) {
                return '{get:"' + type.replace(/"/g, '\\"') + '"}'
            },
            // returns if the object is a lookup
            isLookup = function(obj) {
                return obj && typeof obj.get == "string"
            },


            isObserveLike = function(obj) {
                return obj instanceof can.Map || (obj && !! obj._get);
            },


            isArrayLike = function(obj) {
                return obj && obj.splice && typeof obj.length == 'number';
            },
            // used to make sure .fn and .inverse are always called with a Scope like object
            makeConvertToScopes = function(orignal, scope, options) {
                return function(updatedScope, updatedOptions) {
                    if (updatedScope !== undefined && !(updatedScope instanceof can.view.Scope)) {
                        updatedScope = scope.add(updatedScope)
                    }
                    if (updatedOptions !== undefined && !(updatedOptions instanceof OptionsScope)) {
                        updatedOptions = options.add(updatedOptions)
                    }
                    return orignal(updatedScope, updatedOptions || options)
                }
            };


        // ## Mustache

        Mustache = function(options, helpers) {
            // Support calling Mustache without the constructor.
            // This returns a function that renders the template.
            if (this.constructor != Mustache) {
                var mustache = new Mustache(options);
                return function(data, options) {
                    return mustache.render(data, options);
                };
            }

            // If we get a `function` directly, it probably is coming from
            // a `steal`-packaged view.
            if (typeof options == "function") {
                this.template = {
                    fn: options
                };
                return;
            }

            // Set options on self.
            can.extend(this, options);
            this.template = this.scanner.scan(this.text, this.name);
        };


        // Put Mustache on the `can` object.
        can.Mustache = window.Mustache = Mustache;


        Mustache.prototype.

        render = function(data, options) {
            if (!(data instanceof can.view.Scope)) {
                data = new can.view.Scope(data || {});
            }
            if (!(options instanceof OptionsScope)) {
                options = new OptionsScope(options || {})
            }
            options = options || {};

            return this.template.fn.call(data, data, options);
        };

        can.extend(Mustache.prototype, {
                // Share a singleton scanner for parsing templates.
                scanner: new can.view.Scanner({
                        // A hash of strings for the scanner to inject at certain points.
                        text: {
                            // This is the logic to inject at the beginning of a rendered template. 
                            // This includes initializing the `context` stack.
                            start: "", //"var "+SCOPE+"= this instanceof can.view.Scope? this : new can.view.Scope(this);\n",
                            scope: SCOPE,
                            options: ",options: options",
                            argNames: ARG_NAMES
                        },

                        // An ordered token registry for the scanner.
                        // This needs to be ordered by priority to prevent token parsing errors.
                        // Each token follows the following structure:
                        //		[
                        //			// Which key in the token map to match.
                        //			"tokenMapName",
                        //			// A simple token to match, like "{{".
                        //			"token",
                        //			// Optional. A complex (regexp) token to match that 
                        //			// overrides the simple token.
                        //			"[\\s\\t]*{{",
                        //			// Optional. A function that executes advanced 
                        //			// manipulation of the matched content. This is 
                        //			// rarely used.
                        //			function(content){   
                        //				return content;
                        //			}
                        //		]
                        tokens: [

                            // Return unescaped
                            ["returnLeft", "{{{", "{{[{&]"],
                            // Full line comments
                            ["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],

                            // Inline comments
                            ["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],

                            // Full line escapes
                            // This is used for detecting lines with only whitespace and an escaped tag
                            ["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",
                                function(content) {
                                    return {
                                        before: /^\n.+?\n$/.test(content) ? '\n' : '',
                                        content: content.match(/\{\{(.+?)\}\}/)[1] || ''
                                    };
                                }
                            ],
                            // Return escaped
                            ["escapeLeft", "{{"],
                            // Close return unescaped
                            ["returnRight", "}}}"],
                            // Close tag
                            ["right", "}}"]
                        ],

                        // ## Scanning Helpers
                        // This is an array of helpers that transform content that is within escaped tags like `{{token}}`. These helpers are solely for the scanning phase; they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:
                        //		{
                        //			// The content pattern to match in order to execute.
                        //			// Only the first matching helper is executed.
                        //			name: /pattern to match/,
                        //			// The function to transform the content with.
                        //			// @param {String} content   The content to transform.
                        //			// @param {Object} cmd       Scanner helper data.
                        //			//                           {
                        //			//                             insert: "insert command",
                        //			//                             tagName: "div",
                        //			//                             status: 0
                        //			//                           }
                        //			fn: function(content, cmd) {
                        //				return 'for text injection' || 
                        //					{ raw: 'to bypass text injection' };
                        //			}
                        //		}
                        helpers: [
                            // ### Partials
                            // Partials begin with a greater than sign, like {{> box}}.
                            // Partials are rendered at runtime (as opposed to compile time), 
                            // so recursive partials are possible. Just avoid infinite loops.
                            // For example, this template and partial:
                            // 		base.mustache:
                            // 			<h2>Names</h2>
                            // 			{{#names}}
                            // 				{{> user}}
                            // 			{{/names}}
                            // 		user.mustache:
                            // 			<strong>{{name}}</strong>
                            {
                                name: /^>[\s]*\w*/,
                                fn: function(content, cmd) {
                                    // Get the template name and call back into the render method,
                                    // passing the name and the current context.
                                    var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, "");
                                    return "can.Mustache.renderPartial('" + templateName + "'," + ARG_NAMES + ")";
                                }
                            },

                            // ### Data Hookup
                            // This will attach the data property of `this` to the element
                            // its found on using the first argument as the data attribute
                            // key.
                            // For example:
                            //		<li id="nameli" {{ data 'name' }}></li>
                            // then later you can access it like:
                            //		can.$('#nameli').data('name');

                            {
                                name: /^\s*data\s/,
                                fn: function(content, cmd) {
                                    var attr = content.match(/["|'](.*)["|']/)[1];
                                    // return a function which calls `can.data` on the element
                                    // with the attribute name with the current context.
                                    return "can.proxy(function(__){" +
                                    // "var context = this[this.length-1];" +
                                    // "context = context." + STACKED + " ? context[context.length-2] : context; console.warn(this, context);" +
                                    "can.data(can.$(__),'" + attr + "', this.attr('.')); }, " + SCOPE + ")";
                                }
                            }, {
                                name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                                fn: function(content) {
                                    var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                                        parts = content.match(quickFunc);

                                    //find 
                                    return "can.proxy(function(__){var " + parts[1] + "=can.$(__);with(" + SCOPE + ".attr('.')){" + parts[2] + "}}, this);";
                                }
                            },
                            // ### Transformation (default)
                            // This transforms all content to its interpolated equivalent,
                            // including calls to the corresponding helpers as applicable. 
                            // This outputs the render code for almost all cases.
                            // #### Definitions
                            // * `context` - This is the object that the current rendering context operates within. 
                            //		Each nested template adds a new `context` to the context stack.
                            // * `stack` - Mustache supports nested sections, 
                            //		each of which add their own context to a stack of contexts.
                            //		Whenever a token gets interpolated, it will check for a match against the 
                            //		last context in the stack, then iterate through the rest of the stack checking for matches.
                            //		The first match is the one that gets returned.
                            // * `Mustache.txt` - This serializes a collection of logic, optionally contained within a section.
                            //		If this is a simple interpolation, only the interpolation lookup will be passed.
                            //		If this is a section, then an `options` object populated by the truthy (`options.fn`) and 
                            //		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling 
                            //		exists to support the runtime context nesting that Mustache supports.
                            // * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
                            // * `options` - An object containing methods for executing the inner contents of sections or helpers.  
                            //		`options.fn` - Contains the inner template logic for a truthy section.  
                            //		`options.inverse` - Contains the inner template logic for a falsey section.  
                            //		`options.hash` - Contains the merged hash object argument for custom helpers.
                            // #### Design
                            // This covers the design of the render code that the transformation helper generates.
                            // ##### Pseudocode
                            // A detailed explanation is provided in the following sections, but here is some brief pseudocode
                            // that gives a high level overview of what the generated render code does (with a template similar to  
                            // `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`).
                            // *Initialize the render code.*
                            // 		view = []
                            // 		context = []
                            // 		stack = fn { context.concat([this]) }
                            // *Render the root section.*
                            // 		view.push( "string" )
                            // 		view.push( can.view.txt(
                            // *Render the nested section with `can.Mustache.txt`.*
                            // 			txt( 
                            // *Add the current context to the stack.*
                            // 				stack(), 
                            // *Flag this for truthy section mode.*
                            // 				"#",
                            // *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
                            // 				get( "a", stack() ),
                            // *Include the nested section's inner logic.
                            // The stack argument is usually the parent section's copy of the stack, 
                            // but it can be an override context that was passed by a custom helper.
                            // Sections can nest `0..n` times -- **NESTCEPTION**.*
                            // 				{ fn: fn(stack) {
                            // *Render the nested section (everything between the `{{#a}}` and `{{/a}}` tokens).*
                            // 					view = []
                            // 					view.push( "string" )
                            // 					view.push(
                            // *Add the current context to the stack.*
                            // 						stack(),
                            // *Flag this as interpolation-only mode.*
                            // 						null,
                            // *Interpolate the `b.c.d.e.name` variable using the stack.*
                            // 						get( "b.c.d.e.name", stack() ),
                            // 					)
                            // 					view.push( "string" )
                            // *Return the result for the nested section.*
                            // 					return view.join()
                            // 				}}
                            // 			)
                            // 		))
                            // 		view.push( "string" )
                            // *Return the result for the root section, which includes all nested sections.*
                            // 		return view.join()
                            // ##### Initialization
                            // Each rendered template is started with the following initialization code:
                            // 		var ___v1ew = [];
                            // 		var ___c0nt3xt = [];
                            // 		___c0nt3xt.__sc0pe = true;
                            // 		var __sc0pe = function(context, self) {
                            // 			var s;
                            // 			if (arguments.length == 1 && context) {
                            // 				s = !context.__sc0pe ? [context] : context;
                            // 			} else {
                            // 				s = context && context.__sc0pe 
                            //					? context.concat([self]) 
                            //					: __sc0pe(context).concat([self]);
                            // 			}
                            // 			return (s.__sc0pe = true) && s;
                            // 		};
                            // The `___v1ew` is the the array used to serialize the view.
                            // The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
                            // The `__sc0pe` function is used to more easily update the context stack in certain situations.
                            // Usually, the stack function simply adds a new context (`self`/`this`) to a context stack. 
                            // However, custom helpers will occasionally pass override contexts that need their own context stack.
                            // ##### Sections
                            // Each section, `{{#section}} content {{/section}}`, within a Mustache template generates a section 
                            // context in the resulting render code. The template itself is treated like a root section, with the 
                            // same execution logic as any others. Each section can have `0..n` nested sections within it.
                            // Here's an example of a template without any descendent sections.  
                            // Given the template: `"{{a.b.c.d.e.name}}" == "Phil"`  
                            // Would output the following render code:
                            //		___v1ew.push("\"");
                            //		___v1ew.push(can.view.txt(1, '', 0, this, function() {
                            // 			return can.Mustache.txt(__sc0pe(___c0nt3xt, this), null, 
                            //				can.Mustache.get("a.b.c.d.e.name", 
                            //					__sc0pe(___c0nt3xt, this))
                            //			);
                            //		}));
                            //		___v1ew.push("\" == \"Phil\"");
                            // The simple strings will get appended to the view. Any interpolated references (like `{{a.b.c.d.e.name}}`) 
                            // will be pushed onto the view via `can.view.txt` in order to support live binding.
                            // The function passed to `can.view.txt` will call `can.Mustache.txt`, which serializes the object data by doing 
                            // a context lookup with `can.Mustache.get`.
                            // `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
                            // This stack will grow larger as sections nest.
                            // The second argument is for the section type. This will be `"#"` for truthy sections, `"^"` for falsey, 
                            // or `null` if it is an interpolation instead of a section.
                            // The third argument is the interpolated value retrieved with `can.Mustache.get`, which will perform the 
                            // context lookup and return the approriate string or object.
                            // Any additional arguments, if they exist, are used for passing arguments to custom helpers.
                            // For nested sections, the last argument is an `options` object that contains the nested section's logic.
                            // Here's an example of a template with a single nested section.  
                            // Given the template: `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`  
                            // Would output the following render code:
                            //		___v1ew.push("\"");
                            // 		___v1ew.push(can.view.txt(0, '', 0, this, function() {
                            // 			return can.Mustache.txt(__sc0pe(___c0nt3xt, this), "#", 
                            //				can.Mustache.get("a", __sc0pe(___c0nt3xt, this)), 
                            //					[{
                            // 					_: function() {
                            // 						return ___v1ew.join("");
                            // 					}
                            // 				}, {
                            // 					fn: function(___c0nt3xt) {
                            // 						var ___v1ew = [];
                            // 						___v1ew.push(can.view.txt(1, '', 0, this, 
                            //								function() {
                            //  								return can.Mustache.txt(
                            // 									__sc0pe(___c0nt3xt, this), 
                            // 									null, 
                            // 									can.Mustache.get("b.c.d.e.name", 
                            // 										__sc0pe(___c0nt3xt, this))
                            // 								);
                            // 							}
                            // 						));
                            // 						return ___v1ew.join("");
                            // 					}
                            // 				}]
                            //			)
                            // 		}));
                            //		___v1ew.push("\" == \"Phil\"");
                            // This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
                            // These act similarly to custom helpers: `options.fn` will be called for truthy sections, `options.inverse` will be called for falsey sections.
                            // The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`, `inverse`,
                            // or both, but there isn't any way to determine that at compilation time).
                            // Within the `fn` function is the section's render context, which in this case will render anything between the `{{#a}}` and `{{/a}}` tokens.
                            // This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
                            // aren't used, `___c0nt3xt` will be equivalent to the `__sc0pe(___c0nt3xt, this)` stack created by its parent section. The `inverse` function
                            // works similarly, except that it is added when `{{^a}}` and `{{else}}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to 
                            // ensure that live binding in nested sections works properly.
                            // All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
                            // #### Implementation
                            {
                                name: /^.*$/,
                                fn: function(content, cmd) {
                                    var mode = false,
                                        result = [];

                                    // Trim the content so we don't have any trailing whitespace.
                                    content = can.trim(content);

                                    // Determine what the active mode is.
                                    // * `#` - Truthy section
                                    // * `^` - Falsey section
                                    // * `/` - Close the prior section
                                    // * `else` - Inverted section (only exists within a truthy/falsey section)
                                    if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
                                        mode = mode[0];
                                        switch (mode) {

                                            // Open a new section.
                                            case '#':

                                            case '^':
                                                if (cmd.specialAttribute) {
                                                    result.push(cmd.insert + 'can.view.onlytxt(this,function(){ return ');
                                                } else {
                                                    result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function(){ return ');
                                                }
                                                break;
                                                // Close the prior section.

                                            case '/':
                                                return {
                                                    raw: 'return ___v1ew.join("");}}])}));'
                                                };
                                                break;
                                        }

                                        // Trim the mode off of the content.
                                        content = content.substring(1);
                                    }

                                    // `else` helpers are special and should be skipped since they don't 
                                    // have any logic aside from kicking off an `inverse` function.
                                    if (mode != 'else') {
                                        var args = [],
                                            i = 0,
                                            hashing = false,
                                            arg, split, m;

                                        // Start the content render block.
                                        result.push('can.Mustache.txt(\n' + CONTEXT_OBJ + ',\n' + (mode ? '"' + mode + '"' : 'null') + ',');

                                        // Parse the helper arguments.
                                        // This needs uses this method instead of a split(/\s/) so that 
                                        // strings with spaces can be correctly parsed.
                                        var args = [],
                                            hashes = [];

                                        (can.trim(content) + ' ').replace(argumentsRegExp, function(whole, arg) {

                                            // Check for special helper arguments (string/number/boolean/hashes).
                                            if (i && (m = arg.match(literalNumberStringBooleanRegExp))) {
                                                // Found a native type like string/number/boolean.
                                                if (m[2]) {
                                                    args.push(m[0]);
                                                }
                                                // Found a hash object.
                                                else {
                                                    // Addd to the hash object.

                                                    hashes.push(m[4] + ":" + (m[6] ? m[6] : makeLookupLiteral(m[5])))
                                                }
                                            }
                                            // Otherwise output a normal interpolation reference.
                                            else {
                                                args.push(makeLookupLiteral(arg));
                                            }
                                            i++;
                                        });

                                        result.push(args.join(","));
                                        if (hashes.length) {
                                            result.push(",{" + HASH + ":{" + hashes.join(",") + "}}")
                                        }


                                    }

                                    // Create an option object for sections of code.
                                    mode && mode != 'else' && result.push(',[\n\n');
                                    switch (mode) {
                                        // Truthy section
                                        case '#':
                                            result.push('{fn:function(' + ARG_NAMES + '){var ___v1ew = [];');
                                            break;
                                            // If/else section
                                            // Falsey section

                                        case 'else':
                                            result.push('return ___v1ew.join("");}},\n{inverse:function(' + ARG_NAMES + '){\nvar ___v1ew = [];');
                                            break;
                                        case '^':
                                            result.push('{inverse:function(' + ARG_NAMES + '){\nvar ___v1ew = [];');
                                            break;

                                            // Not a section, no mode
                                        default:
                                            result.push(')');
                                            break;
                                    }

                                    // Return a raw result if there was a section, otherwise return the default string.
                                    result = result.join('');
                                    return mode ? {
                                        raw: result
                                    } : result;
                                }
                            }
                        ]
                    })
            });

        // Add in default scanner helpers first.
        // We could probably do this differently if we didn't 'break' on every match.
        var helpers = can.view.Scanner.prototype.helpers;
        for (var i = 0; i < helpers.length; i++) {
            Mustache.prototype.scanner.helpers.unshift(helpers[i]);
        };


        Mustache.txt = function(scopeAndOptions, mode, name) {
            var scope = scopeAndOptions.scope,
                options = scopeAndOptions.options,
                args = [],
                helperOptions = {
                    fn: function() {},
                    inverse: function() {}
                },
                hash,
                context = scope.attr("."),
                getHelper = true;

            // convert lookup values to actual values in name, arguments, and hash
            for (var i = 3; i < arguments.length; i++) {
                var arg = arguments[i]
                if (mode && can.isArray(arg)) {
                    // merge into options
                    helperOptions = can.extend.apply(can, [helperOptions].concat(arg))
                } else if (arg && arg[HASH]) {
                    hash = arg[HASH];
                    // get values on hash
                    for (var prop in hash) {
                        if (isLookup(hash[prop])) {
                            hash[prop] = Mustache.get(hash[prop].get, scopeAndOptions)
                        }
                    }
                } else if (arg && isLookup(arg)) {
                    args.push(Mustache.get(arg.get, scopeAndOptions, false, true));
                } else {
                    args.push(arg)
                }
            }

            if (isLookup(name)) {
                var get = name.get;
                name = Mustache.get(name.get, scopeAndOptions, args.length, false);

                // Base whether or not we will get a helper on whether or not the original
                // name.get and Mustache.get resolve to the same thing. Saves us from running
                // into issues like {{text}} / {text: 'with'}
                getHelper = (get === name);
            }

            // overwrite fn and inverse to always convert to scopes
            helperOptions.fn = makeConvertToScopes(helperOptions.fn, scope, options);
            helperOptions.inverse = makeConvertToScopes(helperOptions.inverse, scope, options)

            // Check for a registered helper or a helper-like function.
            if (helper = (getHelper && (typeof name === "string" && Mustache.getHelper(name, options)) || (can.isFunction(name) && !name.isComputed && {
                            fn: name
                        }))) {
                // Add additional data to be used by helper functions

                can.extend(helperOptions, {
                        context: context,
                        scope: scope,
                        contexts: scope,
                        hash: hash
                    })

                args.push(helperOptions)
                // Call the helper.
                return helper.fn.apply(context, args) || '';
            }


            if (can.isFunction(name)) {
                if (name.isComputed) {
                    name = name();
                }
            }

            // An array of arguments to check for truthyness when evaluating sections.
            var validArgs = args.length ? args : [name],
                // Whether the arguments meet the condition of the section.
                valid = true,
                result = [],
                i, helper, argIsObserve, arg;
            // Validate the arguments based on the section mode.
            if (mode) {
                for (i = 0; i < validArgs.length; i++) {
                    arg = validArgs[i];
                    argIsObserve = typeof arg !== 'undefined' && isObserveLike(arg);
                    // Array-like objects are falsey if their length = 0.
                    if (isArrayLike(arg)) {
                        // Use .attr to trigger binding on empty lists returned from function
                        if (mode == '#') {
                            valid = valid && !! (argIsObserve ? arg.attr('length') : arg.length);
                        } else if (mode == '^') {
                            valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
                        }
                    }
                    // Otherwise just check if it is truthy or not.
                    else {
                        valid = mode == '#' ? valid && !! arg : mode == '^' ? valid && !arg : valid;
                    }
                }
            }

            // Otherwise interpolate like normal.
            if (valid) {
                switch (mode) {
                    // Truthy section.
                    case '#':
                        // Iterate over arrays
                        if (isArrayLike(name)) {
                            var isObserveList = isObserveLike(name);

                            // Add the reference to the list in the contexts.
                            for (i = 0; i < name.length; i++) {
                                result.push(helperOptions.fn(name[i]));

                                // Ensure that live update works on observable lists
                                isObserveList && name.attr('' + i);
                            }
                            return result.join('');
                        }
                        // Normal case.
                        else {
                            return helperOptions.fn(name || {}) || '';
                        }
                        break;
                        // Falsey section.
                    case '^':
                        return helperOptions.inverse(name || {}) || '';
                        break;
                    default:
                        // Add + '' to convert things like numbers to strings.
                        // This can cause issues if you are trying to
                        // eval on the length but this is the more
                        // common case.
                        return '' + (name != undefined ? name : '');
                        break;
                }
            }

            return '';
        };


        Mustache.get = function(key, scopeAndOptions, isHelper, isArgument) {

            // Cache a reference to the current context and options, we will use them a bunch.
            var context = scopeAndOptions.scope.attr('.'),
                options = scopeAndOptions.options || {}

                // If key is called as a helper,
            if (isHelper) {
                // try to find a registered helper.
                if (Mustache.getHelper(key, options)) {
                    return key
                }
                // Support helper-like functions as anonymous helpers.
                // Check if there is a method directly in the "top" context.
                if (scopeAndOptions.scope && can.isFunction(context[key])) {
                    return context[key];
                }

            }

            // Get a compute (and some helper data) that represents key's value in the current scope
            var computeData = scopeAndOptions.scope.computeData(key, {
                    isArgument: isArgument,
                    args: [context, scopeAndOptions.scope]
                }),
                compute = computeData.compute;

            // Bind on the compute to cache its value. We will unbind in a timeout later.
            can.compute.temporarilyBind(compute);

            // computeData gives us an initial value
            var initialValue = computeData.initialValue;

            // Use helper over the found value if the found value isn't in the current context
            if ((initialValue === undefined || computeData.scope != scopeAndOptions.scope) && Mustache.getHelper(key, options)) {
                return key
            }


            // If there are no dependencies, just return the value.
            if (!compute.hasDependencies) {
                return initialValue;
            } else {
                return compute;
            }
        };


        Mustache.resolve = function(value) {
            if (isObserveLike(value) && isArrayLike(value) && value.attr('length')) {
                return value;
            } else if (can.isFunction(value)) {
                return value();
            } else {
                return value;
            }
        };



        var OptionsScope = can.view.Scope.extend({
                init: function(data, parent) {
                    if (!data.helpers && !data.partials) {
                        data = {
                            helpers: data
                        }
                    }
                    can.view.Scope.prototype.init.apply(this, arguments)
                }
            })


        // ## Helpers
        // Helpers are functions that can be called from within a template.
        // These helpers differ from the scanner helpers in that they execute
        // at runtime instead of during compilation.
        // Custom helpers can be added via `can.Mustache.registerHelper`,
        // but there are also some built-in helpers included by default.
        // Most of the built-in helpers are little more than aliases to actions 
        // that the base version of Mustache simply implies based on the 
        // passed in object.
        // Built-in helpers:
        // * `data` - `data` is a special helper that is implemented via scanning helpers. 
        //		It hooks up the active element to the active data object: `<div {{data "key"}} />`
        // * `if` - Renders a truthy section: `{{#if var}} render {{/if}}`
        // * `unless` - Renders a falsey section: `{{#unless var}} render {{/unless}}`
        // * `each` - Renders an array: `{{#each array}} render {{this}} {{/each}}`
        // * `with` - Opens a context section: `{{#with var}} render {{/with}}`
        Mustache._helpers = {};

        Mustache.registerHelper = function(name, fn) {
            this._helpers[name] = {
                name: name,
                fn: fn
            };
        };


        Mustache.getHelper = function(name, options) {
            var helper = options.attr("helpers." + name)
            return helper ? {
                fn: helper
            } : this._helpers[name];
        };


        Mustache.render = function(partial, context, options) {
            // Make sure the partial being passed in
            // isn't a variable like { partial: "foo.mustache" }
            if (!can.view.cached[partial] && context.attr('partial')) {
                partial = context.attr('partial');
            }

            // Call into `can.view.render` passing the
            // partial and context.
            return can.view.render(partial, context);
        };


        Mustache.safeString = function(str) {
            return {
                toString: function() {
                    return str;
                }
            }
        };

        Mustache.renderPartial = function(partialName, scope, options) {
            var partial = options.attr("partials." + partialName)
            if (partial) {
                return partial.render ? partial.render(scope, options) :
                    partial(scope, options);
            } else {
                return can.Mustache.render(partialName, scope, options);
            }
        };

        // The built-in Mustache helpers.
        can.each({
                // Implements the `if` built-in helper.

                'if': function(expr, options) {
                    var value;
                    // if it's a function, wrap its value in a compute
                    // that will only change values from true to false
                    if (can.isFunction(expr)) {
                        value = can.compute.truthy(expr)()
                    } else {
                        value = !! Mustache.resolve(expr)
                    }

                    if (value) {
                        return options.fn(options.contexts || this);
                    } else {
                        return options.inverse(options.contexts || this);
                    }
                },
                // Implements the `unless` built-in helper.

                'unless': function(expr, options) {
                    if (!Mustache.resolve(expr)) {
                        return options.fn(options.contexts || this);
                    }
                },

                // Implements the `each` built-in helper.

                'each': function(expr, options) {
                    // Check if this is a list or a compute that resolves to a list, and setup
                    // the incremental live-binding 


                    // First, see what we are dealing with.  It's ok to read the compute
                    // because can.view.text is only temporarily binding to what is going on here.
                    // Calling can.view.lists prevents anything from listening on that compute.
                    var resolved = Mustache.resolve(expr);

                    if (resolved instanceof can.List) {
                        return can.view.lists && can.view.lists(expr, function(item, index) {
                            return options.fn(options.scope.add({
                                        "@index": index
                                    }).add(item));
                        });
                    }
                    expr = resolved;

                    if ( !! expr && isArrayLike(expr)) {
                        var result = [];
                        for (var i = 0; i < expr.length; i++) {
                            var index = function() {
                                return i;
                            };

                            result.push(options.fn(options.scope.add({
                                            "@index": index
                                        }).add(expr[i])));
                        }
                        return result.join('');
                    } else if (isObserveLike(expr)) {
                        var result = [],
                            // listen to keys changing so we can livebind lists of attributes.
                            keys = can.Map.keys(expr);
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            result.push(options.fn(options.scope.add({
                                            "@key": key
                                        }).add(expr[key])));
                        }
                        return result.join('');
                    } else if (expr instanceof Object) {
                        var result = [];
                        for (var key in expr) {
                            result.push(options.fn(options.scope.add({
                                            "@key": key
                                        }).add(expr[key])));
                        }
                        return result.join('');

                    }
                },
                // Implements the `with` built-in helper.

                'with': function(expr, options) {
                    var ctx = expr;
                    expr = Mustache.resolve(expr);
                    if ( !! expr) {
                        return options.fn(ctx);
                    }
                },

                'log': function(expr, options) {
                    if (console !== undefined) {
                        if (!options) {
                            console.log(expr.context);
                        } else {
                            console.log(expr, options.context);
                        }
                    }
                }

            }, function(fn, name) {
                Mustache.registerHelper(name, fn);
            });

        // ## Registration
        // Registers Mustache with can.view.
        can.view.register({
                suffix: "mustache",

                contentType: "x-mustache-template",

                // Returns a `function` that renders the view.
                script: function(id, src) {
                    return "can.Mustache(function(" + ARG_NAMES + ") { " + new Mustache({
                            text: src,
                            name: id
                        }).template.out + " })";
                },

                renderer: function(id, text) {
                    return Mustache({
                            text: text,
                            name: id
                        });
                }
            });

        return can;
    })(__m2, __m18, __m19, __m20, __m16, __m22);

    // ## view/bindings/bindings.js
    var __m25 = (function(can) {




        can.view.Scanner.attribute("can-value", function(data, el) {

            var attr = el.getAttribute("can-value"),
                value = data.scope.computeData(attr, {
                        args: []
                    }).compute;

            if (el.nodeName.toLowerCase() === "input") {
                if (el.type === "checkbox") {
                    if (el.hasAttribute("can-true-value")) {
                        var trueValue = data.scope.compute(el.getAttribute("can-true-value"))
                    } else {
                        var trueValue = can.compute(true)
                    }
                    if (el.hasAttribute("can-false-value")) {
                        var falseValue = data.scope.compute(el.getAttribute("can-false-value"))
                    } else {
                        var falseValue = can.compute(false)
                    }
                }

                if (el.type === "checkbox" || el.type === "radio") {
                    new Checked(el, {
                            value: value,
                            trueValue: trueValue,
                            falseValue: falseValue
                        });
                    return;
                }
            }

            new Value(el, {
                    value: value
                })
        });

        var special = {
            enter: function(data, el, original) {
                return {
                    event: "keyup",
                    handler: function(ev) {
                        if (ev.keyCode == 13) {
                            return original.call(this, ev)
                        }
                    }
                }
            }
        }


        can.view.Scanner.attribute(/can-[\w\.]+/, function(data, el) {

            var attributeName = data.attr,
                event = data.attr.substr("can-".length),
                handler = function(ev) {
                    var attr = el.getAttribute(attributeName),
                        scopeData = data.scope.read(attr, {
                                returnObserveMethods: true,
                                isArgument: true
                            });
                    return scopeData.value.call(scopeData.parent, data.scope._context, can.$(this), ev)
                };

            if (special[event]) {
                var specialData = special[event](data, el, handler);
                handler = specialData.handler;
                event = specialData.event;
            }

            can.bind.call(el, event, handler);
        });


        var Value = can.Control.extend({
                init: function() {
                    if (this.element[0].nodeName.toUpperCase() === "SELECT") {
                        // need to wait until end of turn ...
                        setTimeout(can.proxy(this.set, this), 1)
                    } else {
                        this.set()
                    }

                },
                "{value} change": "set",
                set: function() {
                    //this may happen in some edgecases, esp. with selects that are not in DOM after the timeout has fired
                    if (!this.element) return;

                    var val = this.options.value();
                    this.element[0].value = (typeof val === 'undefined' ? '' : val);
                },
                "change": function() {
                    //this may happen in some edgecases, esp. with selects that are not in DOM after the timeout has fired
                    if (!this.element) return;

                    this.options.value(this.element[0].value)
                }
            })

        var Checked = can.Control.extend({
                init: function() {
                    this.isCheckebox = (this.element[0].type.toLowerCase() == "checkbox");
                    this.check()
                },
                "{value} change": "check",
                "{trueValue} change": "check",
                "{falseValue} change": "check",
                check: function() {
                    if (this.isCheckebox) {
                        var value = this.options.value(),
                            trueValue = this.options.trueValue() || true,
                            falseValue = this.options.falseValue() || false;

                        this.element[0].checked = (value == trueValue)
                    } else {
                        if (this.options.value() === this.element[0].value) {
                            this.element[0].checked = true //.prop("checked", true)
                        } else {
                            this.element[0].checked = false //.prop("checked", false)
                        }
                    }


                },
                "change": function() {

                    if (this.isCheckebox) {
                        this.options.value(this.element[0].checked ? this.options.trueValue() : this.options.falseValue());
                    } else {
                        if (this.element[0].checked) {
                            this.options.value(this.element[0].value);
                        }
                    }

                }
            });

    })(__m2, __m17, __m8);

    // ## component/component.js
    var __m1 = (function(can) {

        var ignoreAttributesRegExp = /dataViewId|class|id/i

        var Component = can.Component = can.Construct.extend(

            {
                setup: function() {
                    can.Construct.setup.apply(this, arguments);

                    if (can.Component) {
                        var self = this;
                        this.Control = can.Control.extend({
                                _lookup: function(options) {
                                    return [options.scope, options, window]
                                }
                            }, can.extend({
                                    setup: function(el, options) {
                                        var res = can.Control.prototype.setup.call(this, el, options)
                                        this.scope = options.scope;
                                        // call on() whenever scope changes
                                        var self = this;
                                        this.on(this.scope, "change", function() {
                                            self.on();
                                            self.on(self.scope, "change", arguments.callee);
                                        });
                                        return res;
                                    }
                                }, this.prototype.events));

                        var attributeScopeMappings = {};
                        // go through scope and get attribute ones
                        can.each(this.prototype.scope, function(val, prop) {
                            if (val === "@") {
                                attributeScopeMappings[prop] = prop;
                            }
                        })
                        this.attributeScopeMappings = attributeScopeMappings;

                        // If scope is an object,
                        if (!this.prototype.scope || typeof this.prototype.scope === "object") {
                            // use that object as the prototype of an extened Map constructor function.
                            // A new instance of that Map constructor function will be created and
                            // set as this.scope.
                            this.Map = can.Map.extend(this.prototype.scope || {});
                        }
                        // If scope is a can.Map constructor function, 
                        else if (this.prototype.scope.prototype instanceof can.Map) {
                            // just use that.
                            this.Map = this.prototype.scope;
                        }




                        if (this.prototype.template) {
                            if (typeof this.prototype.template == "function") {
                                var temp = this.prototype.template
                                this.renderer = function() {
                                    return can.view.frag(temp.apply(null, arguments))
                                }
                            } else {
                                this.renderer = can.view.mustache(this.prototype.template);
                            }
                        }



                        can.view.Scanner.tag(this.prototype.tag, function(el, options) {
                            new self(el, options)
                        });
                    }

                }
            }, {

                setup: function(el, hookupOptions) {
                    // Setup values passed to component
                    var initalScopeData = {},
                        component = this,
                        twoWayBindings = {},
                        // what scope property is currently updating
                        scopePropertyUpdating,
                        // the object added to the scope
                        componentScope;

                    // scope prototype properties marked with an "@" are added here
                    can.each(this.constructor.attributeScopeMappings, function(val, prop) {
                        initalScopeData[prop] = el.getAttribute(can.hyphenate(val));
                    })

                    // get the value in the scope for each attribute
                    // the hookup should probably happen after?
                    can.each(can.makeArray(el.attributes), function(node, index) {

                        var name = can.camelize(node.nodeName.toLowerCase()),
                            value = node.value;
                        // ignore attributes already in ScopeMappings
                        if (component.constructor.attributeScopeMappings[name] || ignoreAttributesRegExp.test(name)) {
                            return;
                        }

                        // Cross-bind the value in the scope to this 
                        // component's scope
                        var computeData = hookupOptions.scope.computeData(value, {
                                args: []
                            }),
                            compute = computeData.compute;

                        // bind on this, check it's value, if it has dependencies
                        var handler = function(ev, newVal) {
                            scopePropertyUpdating = name;
                            componentScope.attr(name, newVal);
                            scopePropertyUpdating = null;
                        }
                        // compute only returned if bindable

                        compute.bind("change", handler);

                        // set the value to be added to the scope
                        initalScopeData[name] = compute();

                        if (!compute.hasDependencies) {
                            compute.unbind("change", handler);
                        } else {
                            // make sure we unbind (there's faster ways of doing this)
                            can.bind.call(el, "removed", function() {
                                compute.unbind("change", handler);
                            })
                            // setup two-way binding
                            twoWayBindings[name] = computeData
                        }

                    })



                    if (this.constructor.Map) {
                        componentScope = new this.constructor.Map(initalScopeData);
                    } else if (this.scope instanceof can.Map) {
                        componentScope = this.scope;
                    } else if (can.isFunction(this.scope)) {

                        var scopeResult = this.scope(initalScopeData, hookupOptions.scope, el);
                        // if the function returns a can.Map, use that as the scope
                        if (scopeResult instanceof can.Map) {
                            componentScope = scopeResult
                        } else if (scopeResult.prototype instanceof can.Map) {
                            componentScope = new scopeResult(initalScopeData);
                        } else {
                            componentScope = new(can.Map.extend(scopeResult))(initalScopeData);
                        }

                    }
                    var handlers = {};
                    // setup reverse bindings
                    can.each(twoWayBindings, function(computeData, prop) {
                        handlers[prop] = function(ev, newVal) {
                            // check that this property is not being changed because
                            // it's source value just changed
                            if (scopePropertyUpdating !== prop) {
                                computeData.compute(newVal)
                            }
                        }
                        componentScope.bind(prop, handlers[prop])
                    });
                    // teardown reverse bindings when element is removed
                    can.bind.call(el, "removed", function() {
                        can.each(handlers, function(handler, prop) {
                            componentScope.unbind(prop, handlers[prop])
                        })
                    })

                    this.scope = componentScope;
                    can.data(can.$(el), "scope", this.scope)

                    // create a real Scope object out of the scope property
                    var renderedScope = hookupOptions.scope.add(this.scope),

                        // setup helpers to callback with `this` as the component
                        helpers = {};

                    can.each(this.helpers || {}, function(val, prop) {
                        if (can.isFunction(val)) {
                            helpers[prop] = function() {
                                return val.apply(componentScope, arguments)
                            }
                        }
                    });

                    // create a control to listen to events
                    this._control = new this.constructor.Control(el, {
                            scope: this.scope
                        });


                    var self = this;

                    // if this component has a template (that we've already converted to a renderer)
                    if (this.constructor.renderer) {
                        // add content to tags
                        if (!helpers._tags) {
                            helpers._tags = {};
                        }

                        // we need be alerted to when a <content> element is rendered so we can put the original contents of the widget in its place
                        helpers._tags.content = function(el, rendererOptions) {
                            // first check if there was content within the custom tag
                            // otherwise, render what was within <content>, the default code
                            var subtemplate = hookupOptions.subtemplate || rendererOptions.subtemplate;

                            if (subtemplate) {


                                // rendererOptions.options is a scope of helpers where `<content>` was found, so
                                // the right helpers should already be available.
                                // However, _tags.content is going to point to this current content callback.  We need to 
                                // remove that so it will walk up the chain

                                delete helpers._tags.content;

                                can.view.live.replace([el], subtemplate(
                                        // This is the context of where `<content>` was found
                                        // which will have the the component's context
                                        rendererOptions.scope,



                                        rendererOptions.options));

                                // restore the content tag so it could potentially be used again (as in lists)
                                helpers._tags.content = arguments.callee;
                            }
                        }
                        // render the component's template
                        var frag = this.constructor.renderer(renderedScope, hookupOptions.options.add(helpers));
                    } else {
                        // otherwise render the contents between the 
                        var frag = can.view.frag(hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope, hookupOptions.options.add(helpers)) : "");
                    }
                    can.appendChild(el, frag);
                }
            })

        if (window.$ && $.fn) {
            $.fn.scope = function(attr) {
                if (attr) {
                    return this.data("scope").attr(attr)
                } else {
                    return this.data("scope")
                }
            }
        }


        can.scope = function(el, attr) {
            var el = can.$(el);
            if (attr) {
                return can.data(el, "scope").attr(attr)
            } else {
                return can.data(el, "scope")
            }
        }

        return Component;
    })(__m2, __m8, __m11, __m17, __m25);

    // ## model/model.js
    var __m26 = (function(can) {

        // ## model.js  
        // `can.Model`  
        // _A `can.Map` that connects to a RESTful interface._
        // Generic deferred piping function

        var pipe = function(def, model, func) {
            var d = new can.Deferred();
            def.then(function() {
                var args = can.makeArray(arguments),
                    success = true;
                try {
                    args[0] = model[func](args[0]);
                } catch (e) {
                    success = false;
                    d.rejectWith(d, [e].concat(args));
                }
                if (success) {
                    d.resolveWith(d, args);
                }
            }, function() {
                d.rejectWith(this, arguments);
            });

            if (typeof def.abort === 'function') {
                d.abort = function() {
                    return def.abort();
                }
            }

            return d;
        },
            modelNum = 0,
            ignoreHookup = /change.observe\d+/,
            getId = function(inst) {
                // Instead of using attr, use __get for performance.
                // Need to set reading
                can.__reading && can.__reading(inst, inst.constructor.id)
                return inst.__get(inst.constructor.id);
            },
            // Ajax `options` generator function
            ajax = function(ajaxOb, data, type, dataType, success, error) {

                var params = {};

                // If we get a string, handle it.
                if (typeof ajaxOb == "string") {
                    // If there's a space, it's probably the type.
                    var parts = ajaxOb.split(/\s+/);
                    params.url = parts.pop();
                    if (parts.length) {
                        params.type = parts.pop();
                    }
                } else {
                    can.extend(params, ajaxOb);
                }

                // If we are a non-array object, copy to a new attrs.
                params.data = typeof data == "object" && !can.isArray(data) ?
                    can.extend(params.data || {}, data) : data;

                // Get the url with any templated values filled out.
                params.url = can.sub(params.url, params.data, true);

                return can.ajax(can.extend({
                            type: type || "post",
                            dataType: dataType || "json",
                            success: success,
                            error: error
                        }, params));
            },
            makeRequest = function(self, type, success, error, method) {
                var args;
                // if we pass an array as `self` it it means we are coming from
                // the queued request, and we're passing already serialized data
                // self's signature will be: [self, serializedData]
                if (can.isArray(self)) {
                    args = self[1];
                    self = self[0];
                } else {
                    args = self.serialize();
                }
                args = [args];
                var deferred,
                    // The model.
                    model = self.constructor,
                    jqXHR;

                // `update` and `destroy` need the `id`.
                if (type !== 'create') {
                    args.unshift(getId(self));
                }


                jqXHR = model[type].apply(model, args);

                deferred = jqXHR.pipe(function(data) {
                    self[method || type + "d"](data, jqXHR);
                    return self;
                });

                // Hook up `abort`
                if (jqXHR.abort) {
                    deferred.abort = function() {
                        jqXHR.abort();
                    };
                }

                deferred.then(success, error);
                return deferred;
            },
            initializers = {
                // makes a models function that looks up the data in a particular property
                models: function(prop) {
                    return function(instancesRawData, oldList) {
                        // until "end of turn", increment reqs counter so instances will be added to the store
                        can.Model._reqs++;
                        if (!instancesRawData) {
                            return;
                        }

                        if (instancesRawData instanceof this.List) {
                            return instancesRawData;
                        }

                        // Get the list type.
                        var self = this,
                            tmp = [],
                            res = oldList instanceof can.List ? oldList : new(self.List || ML),
                            // Did we get an `array`?
                            arr = can.isArray(instancesRawData),

                            // Did we get a model list?
                            ml = (instancesRawData instanceof ML),

                            // Get the raw `array` of objects.
                            raw = arr ?

                            // If an `array`, return the `array`.
                            instancesRawData :

                            // Otherwise if a model list.
                            (ml ?

                                // Get the raw objects from the list.
                                instancesRawData.serialize() :

                                // Get the object's data.
                                can.getObject(prop || "data", instancesRawData)),
                            i = 0;

                        if (typeof raw === 'undefined') {
                            throw new Error('Could not get any raw data while converting using .models');
                        }



                        if (res.length) {
                            res.splice(0);
                        }

                        can.each(raw, function(rawPart) {
                            tmp.push(self.model(rawPart));
                        });

                        // We only want one change event so push everything at once
                        res.push.apply(res, tmp);

                        if (!arr) { // Push other stuff onto `array`.
                            can.each(instancesRawData, function(val, prop) {
                                if (prop !== 'data') {
                                    res.attr(prop, val);
                                }
                            })
                        }
                        // at "end of turn", clean up the store
                        setTimeout(can.proxy(this._clean, this), 1);
                        return res;
                    }
                },
                model: function(prop) {
                    return function(attributes) {
                        if (!attributes) {
                            return;
                        }
                        if (typeof attributes.serialize === 'function') {
                            attributes = attributes.serialize();
                        }
                        if (prop) {
                            attributes = can.getObject(prop || "data", attributes);
                        }

                        var id = attributes[this.id],
                            model = (id || id === 0) && this.store[id] ?
                                this.store[id].attr(attributes, this.removeAttr || false) : new this(attributes);

                        return model;
                    }
                }
            },


            // This object describes how to make an ajax request for each ajax method.  
            // The available properties are:
            //		`url` - The default url to use as indicated as a property on the model.
            //		`type` - The default http request type
            //		`data` - A method that takes the `arguments` and returns `data` used for ajax.

            ajaxMethods = {

                create: {
                    url: "_shortName",
                    type: "post"
                },

                update: {
                    data: function(id, attrs) {
                        attrs = attrs || {};
                        var identity = this.id;
                        if (attrs[identity] && attrs[identity] !== id) {
                            attrs["new" + can.capitalize(id)] = attrs[identity];
                            delete attrs[identity];
                        }
                        attrs[identity] = id;
                        return attrs;
                    },
                    type: "put"
                },

                destroy: {
                    type: "delete",
                    data: function(id, attrs) {
                        attrs = attrs || {};
                        attrs.id = attrs[this.id] = id;
                        return attrs;
                    }
                },

                findAll: {
                    url: "_shortName"
                },

                findOne: {}
            },
            // Makes an ajax request `function` from a string.
            //		`ajaxMethod` - The `ajaxMethod` object defined above.
            //		`str` - The string the user provided. Ex: `findAll: "/recipes.json"`.
            ajaxMaker = function(ajaxMethod, str) {
                // Return a `function` that serves as the ajax method.
                return function(data) {
                    // If the ajax method has it's own way of getting `data`, use that.
                    data = ajaxMethod.data ?
                        ajaxMethod.data.apply(this, arguments) :
                    // Otherwise use the data passed in.
                    data;
                    // Return the ajax method with `data` and the `type` provided.
                    return ajax(str || this[ajaxMethod.url || "_url"], data, ajaxMethod.type || "get")
                }
            };



        can.Model = can.Map({
                fullName: "can.Model",
                _reqs: 0,

                setup: function(base) {
                    // create store here if someone wants to use model without inheriting from it
                    this.store = {};
                    can.Map.setup.apply(this, arguments);
                    // Set default list as model list
                    if (!can.Model) {
                        return;
                    }

                    this.List = ML({
                            Map: this
                        }, {});
                    var self = this,
                        clean = can.proxy(this._clean, self);


                    // go through ajax methods and set them up
                    can.each(ajaxMethods, function(method, name) {
                        // if an ajax method is not a function, it's either
                        // a string url like findAll: "/recipes" or an
                        // ajax options object like {url: "/recipes"}
                        if (!can.isFunction(self[name])) {
                            // use ajaxMaker to convert that into a function
                            // that returns a deferred with the data
                            self[name] = ajaxMaker(method, self[name]);
                        }
                        // check if there's a make function like makeFindAll
                        // these take deferred function and can do special
                        // behavior with it (like look up data in a store)
                        if (self["make" + can.capitalize(name)]) {
                            // pass the deferred method to the make method to get back
                            // the "findAll" method.
                            var newMethod = self["make" + can.capitalize(name)](self[name]);
                            can.Construct._overwrite(self, base, name, function() {
                                // increment the numer of requests
                                can.Model._reqs++;
                                var def = newMethod.apply(this, arguments);
                                var then = def.then(clean, clean);
                                then.abort = def.abort;

                                // attach abort to our then and return it
                                return then;
                            })
                        }
                    });
                    can.each(initializers, function(makeInitializer, name) {
                        if (typeof self[name] === "string") {
                            can.Construct._overwrite(self, base, name, makeInitializer(self[name]))
                        }
                    })
                    if (self.fullName == "can.Model" || !self.fullName) {
                        self.fullName = "Model" + (++modelNum);
                    }
                    // Add ajax converters.
                    can.Model._reqs = 0;
                    this._url = this._shortName + "/{" + this.id + "}"
                },
                _ajax: ajaxMaker,
                _makeRequest: makeRequest,
                _clean: function() {
                    can.Model._reqs--;
                    if (!can.Model._reqs) {
                        for (var id in this.store) {
                            if (!this.store[id]._bindings) {
                                delete this.store[id];
                            }
                        }
                    }
                    return arguments[0];
                },

                models: initializers.models("data"),

                model: initializers.model()
            },


            {
                setup: function(attrs) {
                    // try to add things as early as possible to the store (#457)
                    // we add things to the store before any properties are even set
                    var id = attrs && attrs[this.constructor.id];
                    if (can.Model._reqs && id != null) {
                        this.constructor.store[id] = this;
                    }
                    can.Map.prototype.setup.apply(this, arguments)
                },

                isNew: function() {
                    var id = getId(this);
                    return !(id || id === 0); // If `null` or `undefined`
                },

                save: function(success, error) {
                    return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
                },

                destroy: function(success, error) {
                    if (this.isNew()) {
                        var self = this;
                        var def = can.Deferred();
                        def.then(success, error);
                        return def.done(function(data) {
                            self.destroyed(data)
                        }).resolve(self);
                    }
                    return makeRequest(this, 'destroy', success, error, 'destroyed');
                },

                _bindsetup: function() {
                    this.constructor.store[this.__get(this.constructor.id)] = this;
                    return can.Map.prototype._bindsetup.apply(this, arguments);
                },

                _bindteardown: function() {
                    delete this.constructor.store[getId(this)];
                    return can.Map.prototype._bindteardown.apply(this, arguments)
                },
                // Change `id`.
                ___set: function(prop, val) {
                    can.Map.prototype.___set.call(this, prop, val)
                    // If we add an `id`, move it to the store.
                    if (prop === this.constructor.id && this._bindings) {
                        this.constructor.store[getId(this)] = this;
                    }
                }
            });

        can.each({

                makeFindAll: "models",

                makeFindOne: "model",
                makeCreate: "model",
                makeUpdate: "model"
            }, function(method, name) {
                can.Model[name] = function(oldMethod) {
                    return function() {
                        var args = can.makeArray(arguments),
                            oldArgs = can.isFunction(args[1]) ? args.splice(0, 1) : args.splice(0, 2),
                            def = pipe(oldMethod.apply(this, oldArgs), this, method);
                        def.then(args[0], args[1]);
                        // return the original promise
                        return def;
                    };
                };
            });

        can.each([

                "created",

                "updated",

                "destroyed"
            ], function(funcName) {
                can.Model.prototype[funcName] = function(attrs) {
                    var stub,
                        constructor = this.constructor;

                    // Update attributes if attributes have been passed
                    stub = attrs && typeof attrs == 'object' && this.attr(attrs.attr ? attrs.attr() : attrs);

                    // triggers change event that bubble's like
                    // handler( 'change','1.destroyed' ). This is used
                    // to remove items on destroyed from Model Lists.
                    // but there should be a better way.
                    can.trigger(this, "change", funcName)


                    // Call event on the instance's Class
                    can.trigger(constructor, funcName, this);
                };
            });

        // Model lists are just like `Map.List` except that when their items are 
        // destroyed, it automatically gets removed from the list.
        var ML = can.Model.List = can.List({
                setup: function(params) {
                    if (can.isPlainObject(params) && !can.isArray(params)) {
                        can.List.prototype.setup.apply(this);
                        this.replace(this.constructor.Map.findAll(params))
                    } else {
                        can.List.prototype.setup.apply(this, arguments);
                    }
                },
                _changes: function(ev, attr) {
                    can.List.prototype._changes.apply(this, arguments);
                    if (/\w+\.destroyed/.test(attr)) {
                        var index = this.indexOf(ev.target);
                        if (index != -1) {
                            this.splice(index, 1);
                        }
                    }
                }
            })

        return can.Model;
    })(__m2, __m12, __m15);

    // ## util/string/deparam/deparam.js
    var __m28 = (function(can) {

        // ## deparam.js  
        // `can.deparam`  
        // _Takes a string of name value pairs and returns a Object literal that represents those params._
        var digitTest = /^\d+$/,
            keyBreaker = /([^\[\]]+)|(\[\])/g,
            paramTest = /([^?#]*)(#.*)?$/,
            prep = function(str) {
                return decodeURIComponent(str.replace(/\+/g, " "));
            };


        can.extend(can, {
                deparam: function(params) {

                    var data = {},
                        pairs, lastPart;

                    if (params && paramTest.test(params)) {

                        pairs = params.split('&'),

                        can.each(pairs, function(pair) {

                            var parts = pair.split('='),
                                key = prep(parts.shift()),
                                value = prep(parts.join("=")),
                                current = data;

                            if (key) {
                                parts = key.match(keyBreaker);

                                for (var j = 0, l = parts.length - 1; j < l; j++) {
                                    if (!current[parts[j]]) {
                                        // If what we are pointing to looks like an `array`
                                        current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] == "[]" ? [] : {};
                                    }
                                    current = current[parts[j]];
                                }
                                lastPart = parts.pop();
                                if (lastPart == "[]") {
                                    current.push(value);
                                } else {
                                    current[lastPart] = value;
                                }
                            }
                        });
                    }
                    return data;
                }
            });
        return can;
    })(__m2, __m10);

    // ## route/route.js
    var __m27 = (function(can) {

        // ## route.js  
        // `can.route`  
        // _Helps manage browser history (and client state) by synchronizing the 
        // `window.location.hash` with a `can.Map`._  
        // Helper methods used for matching routes.
        var
        // `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,
            // Regular expression for identifying &amp;key=value lists.
            paramsMatcher = /^(?:&[^=]+=[^&]*)+/,
            // Converts a JS Object into a list of parameters that can be 
            // inserted into an html element tag.
            makeProps = function(props) {
                var tags = [];
                can.each(props, function(val, name) {
                    tags.push((name === 'className' ? 'class' : name) + '="' +
                        (name === "href" ? val : can.esc(val)) + '"');
                });
                return tags.join(" ");
            },
            // Checks if a route matches the data provided. If any route variable
            // is not present in the data, the route does not match. If all route
            // variables are present in the data, the number of matches is returned 
            // to allow discerning between general and more specific routes. 
            matchesData = function(route, data) {
                var count = 0,
                    i = 0,
                    defaults = {};
                // look at default values, if they match ...
                for (var name in route.defaults) {
                    if (route.defaults[name] === data[name]) {
                        // mark as matched
                        defaults[name] = 1;
                        count++;
                    }
                }
                for (; i < route.names.length; i++) {
                    if (!data.hasOwnProperty(route.names[i])) {
                        return -1;
                    }
                    if (!defaults[route.names[i]]) {
                        count++;
                    }

                }

                return count;
            },
            onready = !0,
            location = window.location,
            wrapQuote = function(str) {
                return (str + '').replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
            },
            each = can.each,
            extend = can.extend,
            // Helper for convert any object (or value) to stringified object (or value)
            stringify = function(obj) {
                // Object is array, plain object, Map or List
                if (obj && typeof obj === "object") {
                    // Get native object or array from Map or List
                    if (obj instanceof can.Map) {
                        obj = obj.attr()
                        // Clone object to prevent change original values
                    } else {
                        obj = can.isFunction(obj.slice) ? obj.slice() : can.extend({}, obj)
                    }
                    // Convert each object property or array item into stringified new
                    can.each(obj, function(val, prop) {
                        obj[prop] = stringify(val)
                    })
                    // Object supports toString function
                } else if (obj !== undefined && obj !== null && can.isFunction(obj.toString)) {
                    obj = obj.toString()
                }

                return obj
            },
            removeBackslash = function(str) {
                return str.replace(/\\/g, "")
            },
            // A ~~throttled~~ debounced function called multiple times will only fire once the
            // timer runs down. Each call resets the timer.
            timer,
            // Intermediate storage for `can.route.data`.
            curParams,
            // The last hash caused by a data change
            lastHash,
            // Are data changes pending that haven't yet updated the hash
            changingData,
            // If the `can.route.data` changes, update the hash.
            // Using `.serialize()` retrieves the raw data contained in the `observable`.
            // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
            // This might be able to use batchNum and avoid this.
            onRouteDataChange = function(ev, attr, how, newval) {
                // indicate that data is changing
                changingData = 1;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    // indicate that the hash is set to look like the data
                    changingData = 0;
                    var serialized = can.route.data.serialize(),
                        path = can.route.param(serialized, true);
                    can.route._call("setURL", path);

                    lastHash = path
                }, 10);
            };

        can.route = function(url, defaults) {
            // if route ends with a / and url starts with a /, remove the leading / of the url
            var root = can.route._call("root");

            if (root.lastIndexOf("/") == root.length - 1 &&
                url.indexOf("/") === 0) {
                url = url.substr(1);
            }


            defaults = defaults || {};
            // Extract the variable names and replace with `RegExp` that will match
            // an atual URL with values.
            var names = [],
                res,
                test = "",
                lastIndex = matcher.lastIndex = 0,
                next,
                querySeparator = can.route._call("querySeparator");

            // res will be something like [":foo","foo"]
            while (res = matcher.exec(url)) {
                names.push(res[1]);
                test += removeBackslash(url.substring(lastIndex, matcher.lastIndex - res[0].length));
                next = "\\" + (removeBackslash(url.substr(matcher.lastIndex, 1)) || querySeparator);
                // a name without a default value HAS to have a value
                // a name that has a default value can be empty
                // The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
                test += "([^" + next + "]" + (defaults[res[1]] ? "*" : "+") + ")";
                lastIndex = matcher.lastIndex;
            }
            test += url.substr(lastIndex).replace("\\", "")
            // Add route in a form that can be easily figured out.
            can.route.routes[url] = {
                // A regular expression that will match the route when variable values 
                // are present; i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
                // will match for any value of `:page` and `:type` (word chars or period).
                test: new RegExp("^" + test + "($|" + wrapQuote(querySeparator) + ")"),
                // The original URL, same as the index for this entry in routes.
                route: url,
                // An `array` of all the variable names in this route.
                names: names,
                // Default values provided for the variables.
                defaults: defaults,
                // The number of parts in the URL separated by `/`.
                length: url.split('/').length
            };
            return can.route;
        };


        extend(can.route, {


                param: function(data, _setRoute) {
                    // Check if the provided data keys match the names in any routes;
                    // Get the one with the most matches.
                    var route,
                        // Need to have at least 1 match.
                        matches = 0,
                        matchCount,
                        routeName = data.route,
                        propCount = 0;

                    delete data.route;

                    each(data, function() {
                        propCount++;
                    });
                    // Otherwise find route.
                    each(can.route.routes, function(temp, name) {
                        // best route is the first with all defaults matching


                        matchCount = matchesData(temp, data);
                        if (matchCount > matches) {
                            route = temp;
                            matches = matchCount;
                        }
                        if (matchCount >= propCount) {
                            return false;
                        }
                    });
                    // If we have a route name in our `can.route` data, and it's
                    // just as good as what currently matches, use that
                    if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data) === matches) {
                        route = can.route.routes[routeName];
                    }
                    // If this is match...
                    if (route) {
                        var cpy = extend({}, data),
                            // Create the url by replacing the var names with the provided data.
                            // If the default value is found an empty string is inserted.
                            res = route.route.replace(matcher, function(whole, name) {
                                delete cpy[name];
                                return data[name] === route.defaults[name] ? "" : encodeURIComponent(data[name]);
                            }).replace("\\", ""),
                            after;
                        // Remove matching default values
                        each(route.defaults, function(val, name) {
                            if (cpy[name] === val) {
                                delete cpy[name];
                            }
                        });

                        // The remaining elements of data are added as 
                        // `&amp;` separated parameters to the url.
                        after = can.param(cpy);
                        // if we are paraming for setting the hash
                        // we also want to make sure the route value is updated
                        if (_setRoute) {
                            can.route.attr('route', route.route);
                        }
                        return res + (after ? can.route._call("querySeparator") + after : "");
                    }
                    // If no route was found, there is no hash URL, only paramters.
                    return can.isEmptyObject(data) ? "" : can.route._call("querySeparator") + can.param(data);
                },

                deparam: function(url) {

                    // remove the url
                    var root = can.route._call("root");
                    if (root.lastIndexOf("/") == root.length - 1 &&
                        url.indexOf("/") === 0) {
                        url = url.substr(1);
                    }

                    // See if the url matches any routes by testing it against the `route.test` `RegExp`.
                    // By comparing the URL length the most specialized route that matches is used.
                    var route = {
                        length: -1
                    },
                        querySeparator = can.route._call("querySeparator"),
                        paramsMatcher = can.route._call("paramsMatcher");

                    each(can.route.routes, function(temp, name) {
                        if (temp.test.test(url) && temp.length > route.length) {
                            route = temp;
                        }
                    });
                    // If a route was matched.
                    if (route.length > -1) {

                        var // Since `RegExp` backreferences are used in `route.test` (parens)
                        // the parts will contain the full matched string and each variable (back-referenced) value.
                        parts = url.match(route.test),
                            // Start will contain the full matched string; parts contain the variable values.
                            start = parts.shift(),
                            // The remainder will be the `&amp;key=value` list at the end of the URL.
                            remainder = url.substr(start.length - (parts[parts.length - 1] === querySeparator ? 1 : 0)),
                            // If there is a remainder and it contains a `&amp;key=value` list deparam it.
                            obj = (remainder && paramsMatcher.test(remainder)) ? can.deparam(remainder.slice(1)) : {};

                        // Add the default values for this route.
                        obj = extend(true, {}, route.defaults, obj);
                        // Overwrite each of the default values in `obj` with those in 
                        // parts if that part is not empty.
                        each(parts, function(part, i) {
                            if (part && part !== querySeparator) {
                                obj[route.names[i]] = decodeURIComponent(part);
                            }
                        });
                        obj.route = route.route;
                        return obj;
                    }
                    // If no route was matched, it is parsed as a `&amp;key=value` list.
                    if (url.charAt(0) !== querySeparator) {
                        url = querySeparator + url;
                    }
                    return paramsMatcher.test(url) ? can.deparam(url.slice(1)) : {};
                },

                data: new can.Map({}),

                routes: {},

                ready: function(val) {
                    if (val !== true) {
                        can.route._setup();
                        can.route.setState();
                    }
                    return can.route;
                },

                url: function(options, merge) {

                    if (merge) {
                        options = can.extend({}, can.route.deparam(can.route._call("matchingPartOfURL")), options);
                    }
                    return can.route._call("root") + can.route.param(options);
                },

                link: function(name, options, props, merge) {
                    return "<a " + makeProps(
                        extend({
                                href: can.route.url(options, merge)
                            }, props)) + ">" + name + "</a>";
                },

                current: function(options) {
                    return this._call("matchingPartOfURL") === can.route.param(options);
                },
                bindings: {
                    hashchange: {
                        paramsMatcher: paramsMatcher,
                        querySeparator: "&",
                        bind: function() {
                            can.bind.call(window, 'hashchange', setState);
                        },
                        unbind: function() {
                            can.unbind.call(window, 'hashchange', setState);
                        },
                        // Gets the part of the url we are determinging the route from.
                        // For hashbased routing, it's everything after the #, for
                        // pushState it's configurable
                        matchingPartOfURL: function() {
                            return location.href.split(/#!?/)[1] || "";
                        },
                        // gets called with the serialized can.route data after a route has changed
                        // returns what the url has been updated to (for matching purposes)
                        setURL: function(path) {
                            location.hash = "#!" + path;
                            return path;
                        },
                        root: "#!"
                    }
                },
                defaultBinding: "hashchange",
                currentBinding: null,
                // ready calls setup
                // setup binds and listens to data changes
                // bind listens to whatever you should be listening to
                // data changes tries to set the path

                // we need to be able to
                // easily kick off calling setState
                // 	teardown whatever is there
                //  turn on a particular binding

                // called when the route is ready
                _setup: function() {
                    if (!can.route.currentBinding) {
                        can.route._call("bind");
                        can.route.bind("change", onRouteDataChange);
                        can.route.currentBinding = can.route.defaultBinding;
                    }
                },
                _teardown: function() {
                    if (can.route.currentBinding) {
                        can.route._call("unbind");
                        can.route.unbind("change", onRouteDataChange);
                        can.route.currentBinding = null;
                    }
                    clearTimeout(timer);
                    changingData = 0;
                },
                // a helper to get stuff from the current or default bindings
                _call: function() {
                    var args = can.makeArray(arguments),
                        prop = args.shift(),
                        binding = can.route.bindings[can.route.currentBinding || can.route.defaultBinding]
                        method = binding[prop];
                    if (typeof method === "function") {
                        return method.apply(binding, args)
                    } else {
                        return method;
                    }
                }
            });


        // The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
        // instead act on the `can.route.data` observe.
        each(['bind', 'unbind', 'on', 'off', 'delegate', 'undelegate', 'removeAttr', 'compute', '_get', '__get'], function(name) {
            can.route[name] = function() {
                // `delegate` and `undelegate` require
                // the `can/map/delegate` plugin
                if (!can.route.data[name]) {
                    return;
                }

                return can.route.data[name].apply(can.route.data, arguments);
            }
        })

        // Because everything in hashbang is in fact a string this will automaticaly convert new values to string. Works with single value, or deep hashes.
        // Main motivation for this is to prevent double route event call for same value.
        // Example (the problem):
        // When you load page with hashbang like #!&some_number=2 and bind 'some_number' on routes.
        // It will fire event with adding of "2" (string) to 'some_number' property
        // But when you after this set can.route.attr({some_number: 2}) or can.route.attr('some_number', 2). it fires another event with change of 'some_number' from "2" (string) to 2 (integer)
        // This wont happen again with this normalization
        can.route.attr = function(attr, val) {
            var type = typeof attr,
                newArguments;

            // Reading
            if (val === undefined) {
                newArguments = arguments;
                // Sets object
            } else if (type !== "string" && type !== "number") {
                newArguments = [stringify(attr), val];
                // Sets key - value
            } else {
                newArguments = [attr, stringify(val)];
            }

            return can.route.data.attr.apply(can.route.data, newArguments)
        }

        var // Deparameterizes the portion of the hash of interest and assign the
        // values to the `can.route.data` removing existing values no longer in the hash.
        // setState is called typically by hashchange which fires asynchronously
        // So it's possible that someone started changing the data before the 
        // hashchange event fired.  For this reason, it will not set the route data
        // if the data is changing or the hash already matches the hash that was set.
        setState = can.route.setState = function() {
            var hash = can.route._call("matchingPartOfURL");
            curParams = can.route.deparam(hash);

            // if the hash data is currently changing, or
            // the hash is what we set it to anyway, do NOT change the hash
            if (!changingData || hash !== lastHash) {
                can.route.attr(curParams, true);
            }
        };





        return can.route;
    })(__m2, __m12, __m28);

    // ## control/route/route.js
    var __m29 = (function(can) {

        // ## control/route.js  
        // _Controller route integration._

        can.Control.processors.route = function(el, event, selector, funcName, controller) {
            selector = selector || "";
            if (!can.route.routes[selector]) {
                can.route(selector);
            }
            var batchNum,
                check = function(ev, attr, how) {
                    if (can.route.attr('route') === (selector) &&
                        (ev.batchNum === undefined || ev.batchNum !== batchNum)) {

                        batchNum = ev.batchNum;

                        var d = can.route.attr();
                        delete d.route;
                        if (can.isFunction(controller[funcName])) {
                            controller[funcName](d);
                        } else {
                            controller[controller[funcName]](d);
                        }

                    }
                };
            can.route.bind('change', check);
            return function() {
                can.route.unbind('change', check);
            };
        };

        return can;
    })(__m2, __m27, __m8);

    window['can'] = __m4;
})();
},{}],6:[function(require,module,exports){
/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:30 GMT
 * Licensed MIT
 * Includes: can/util/object
 * Download from: http://canjs.com
 */
(function(can) {

    var isArray = can.isArray,
        // essentially returns an object that has all the must have comparisons ...
        // must haves, do not return true when provided undefined
        cleanSet = function(obj, compares) {
            var copy = can.extend({}, obj);
            for (var prop in copy) {
                var compare = compares[prop] === undefined ? compares["*"] : compares[prop];
                if (same(copy[prop], undefined, compare)) {
                    delete copy[prop]
                }
            }
            return copy;
        },
        propCount = function(obj) {
            var count = 0;
            for (var prop in obj) count++;
            return count;
        };

    can.Object = {};

    var same = can.Object.same = function(a, b, compares, aParent, bParent, deep) {
        var aType = typeof a,
            aArray = isArray(a),
            comparesType = typeof compares,
            compare;

        if (comparesType == 'string' || compares === null) {
            compares = compareMethods[compares];
            comparesType = 'function'
        }
        if (comparesType == 'function') {
            return compares(a, b, aParent, bParent)
        }
        compares = compares || {};

        if (a instanceof Date) {
            return a === b;
        }
        if (deep === -1) {
            return aType === 'object' || a === b;
        }
        if (aType !== typeof b || aArray !== isArray(b)) {
            return false;
        }
        if (a === b) {
            return true;
        }
        if (aArray) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                compare = compares[i] === undefined ? compares["*"] : compares[i]
                if (!same(a[i], b[i], a, b, compare)) {
                    return false;
                }
            };
            return true;
        } else if (aType === "object" || aType === 'function') {
            var bCopy = can.extend({}, b);
            for (var prop in a) {
                compare = compares[prop] === undefined ? compares["*"] : compares[prop];
                if (!same(a[prop], b[prop], compare, a, b, deep === false ? -1 : undefined)) {
                    return false;
                }
                delete bCopy[prop];
            }
            // go through bCopy props ... if there is no compare .. return false
            for (prop in bCopy) {
                if (compares[prop] === undefined || !same(undefined, b[prop], compares[prop], a, b, deep === false ? -1 : undefined)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };

    can.Object.subsets = function(checkSet, sets, compares) {
        var len = sets.length,
            subsets = [],
            checkPropCount = propCount(checkSet),
            setLength;

        for (var i = 0; i < len; i++) {
            //check this subset
            var set = sets[i];
            if (can.Object.subset(checkSet, set, compares)) {
                subsets.push(set)
            }
        }
        return subsets;
    };

    can.Object.subset = function(subset, set, compares) {
        // go through set {type: 'folder'} and make sure every property
        // is in subset {type: 'folder', parentId :5}
        // then make sure that set has fewer properties
        // make sure we are only checking 'important' properties
        // in subset (ones that have to have a value)

        var setPropCount = 0,
            compares = compares || {};

        for (var prop in set) {

            if (!same(subset[prop], set[prop], compares[prop], subset, set)) {
                return false;
            }
        }
        return true;
    }

    var compareMethods = {
        "null": function() {
            return true;
        },
        i: function(a, b) {
            return ("" + a).toLowerCase() == ("" + b).toLowerCase()
        }
    }

    return can.Object;

})(can);
},{}],7:[function(require,module,exports){
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.1
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
},{}],8:[function(require,module,exports){
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

},{}],9:[function(require,module,exports){
var $ = require('../../bower_components/jquery/jquery.min.js');
require('../../bower_components/canjs/can.jquery.js');
require('../../bower_components/canjs/can.object.js');
require('../../bower_components/canjs/can.control.plugin.js');
require('../../bower_components/bootstrap/dist/js/bootstrap.min.js');
require("../../bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js");
require("../../bower_components/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js");
require("../../bower_components/jquery.slimscroll/jquery.slimscroll.min.js");

var menu = require('./source/MenuControl.js');

$(document).ready(function() {
    new menu.MenuControl("#menuContainer");
    $(".addPopover").popover();
    $("#content").slimScroll({
      height: "100%",
      railVisible: true,
      alwaysVisible: false,
      color: '#cccccc',
      disableFadeOut: true
    });
});
},{"../../bower_components/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js":1,"../../bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js":2,"../../bower_components/bootstrap/dist/js/bootstrap.min.js":3,"../../bower_components/canjs/can.control.plugin.js":4,"../../bower_components/canjs/can.jquery.js":5,"../../bower_components/canjs/can.object.js":6,"../../bower_components/jquery.slimscroll/jquery.slimscroll.min.js":7,"../../bower_components/jquery/jquery.min.js":8,"./source/MenuControl.js":10}],10:[function(require,module,exports){
var $ = require("../../../bower_components/jquery/jquery.min.js");

var MenuControl = can.Control({
  init: function(element, options) {
    this.element.html(can.view("menuTemplate"), {});

    switch (window.location.hash) {
      case "#gallery":
        $("#galleryMenuButton").trigger("click");
        break;
      case "#disclaimer":
        $("#disclaimerMenuButton").trigger("click");
        break;
      default:
        $("#galleryMenuButton").trigger("click");    
    }
  },
  "#galleryMenuButton click": function(el, ev) {
    setActive(el);
    $("#content").html(can.view("galleryTemplate"), {});
    $("#blueimp-gallery").data("useBootstrapModal", false);
  },
  "#disclaimerMenuButton click": function(el, ev) {
    setActive(el);
    $("#content").html(can.view("disclaimerTemplate"), {});
  }
});
exports.MenuControl = MenuControl;

var setActive = function(el) {
  $('.navbar li.active').removeClass('active');
  $(el).parent().addClass("active");
};

},{"../../../bower_components/jquery/jquery.min.js":8}]},{},[9])