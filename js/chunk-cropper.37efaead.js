(self.webpackChunk_xn_sakina_usagi=self.webpackChunk_xn_sakina_usagi||[]).push([[461],{66417:function(t){t.exports=function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(t){return s(t)||c(t)||l(t)||p()}function s(t){if(Array.isArray(t))return d(t)}function c(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t,e){if(t){if("string"==typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u="undefined"!=typeof window&&void 0!==window.document,m=u?window:{},g=!(!u||!m.document.documentElement)&&"ontouchstart"in m.document.documentElement,f=!!u&&"PointerEvent"in m,v="cropper",w="all",b="crop",x="move",y="zoom",M="e",C="w",D="s",k="n",B="ne",O="nw",T="se",E="sw",W="".concat(v,"-crop"),H="".concat(v,"-disabled"),N="".concat(v,"-hidden"),L="".concat(v,"-hide"),z="".concat(v,"-invisible"),Y="".concat(v,"-modal"),X="".concat(v,"-move"),R="".concat(v,"Action"),S="".concat(v,"Preview"),A="crop",j="move",I="none",P="crop",U="cropend",q="cropmove",$="cropstart",_="dblclick",Q=g?"touchstart":"mousedown",K=g?"touchmove":"mousemove",Z=g?"touchend touchcancel":"mouseup",G=f?"pointerdown":Q,V=f?"pointermove":K,F=f?"pointerup pointercancel":Z,J="ready",tt="resize",et="wheel",it="zoom",at="image/jpeg",nt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ot=/^data:/,rt=/^data:image\/jpeg;base64,/,ht=/^img|canvas$/i,st=200,ct=100,lt={viewMode:0,dragMode:A,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:st,minContainerHeight:ct,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},dt='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',pt=Number.isNaN||m.isNaN;function ut(t){return"number"==typeof t&&!pt(t)}var mt=function(t){return t>0&&t<1/0};function gt(t){return void 0===t}function ft(t){return"object"===i(t)&&null!==t}var vt=Object.prototype.hasOwnProperty;function wt(t){if(!ft(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&vt.call(i,"isPrototypeOf")}catch(t){return!1}}function bt(t){return"function"==typeof t}var xt=Array.prototype.slice;function yt(t){return Array.from?Array.from(t):xt.call(t)}function Mt(t,e){return t&&bt(e)&&(Array.isArray(t)||ut(t.length)?yt(t).forEach((function(i,a){e.call(t,i,a,t)})):ft(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var Ct=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return ft(t)&&i.length>0&&i.forEach((function(e){ft(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},Dt=/\.\d*(?:0|9){12}\d*$/;function kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Dt.test(t)?Math.round(t*e)/e:t}var Bt=/^width|height|left|top|marginLeft|marginTop$/;function Ot(t,e){var i=t.style;Mt(e,(function(t,e){Bt.test(e)&&ut(t)&&(t="".concat(t,"px")),i[e]=t}))}function Tt(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function Et(t,e){if(e)if(ut(t.length))Mt(t,(function(t){Et(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function Wt(t,e){e&&(ut(t.length)?Mt(t,(function(t){Wt(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function Ht(t,e,i){e&&(ut(t.length)?Mt(t,(function(t){Ht(t,e,i)})):i?Et(t,e):Wt(t,e))}var Nt=/([a-z\d])([A-Z])/g;function Lt(t){return t.replace(Nt,"$1-$2").toLowerCase()}function zt(t,e){return ft(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(Lt(e)))}function Yt(t,e,i){ft(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(Lt(e)),i)}function Xt(t,e){if(ft(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(Lt(e)))}var Rt=/\s\s*/,St=function(){var t=!1;if(u){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});m.addEventListener("test",i,a),m.removeEventListener("test",i,a)}return t}();function At(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Rt).forEach((function(e){if(!St){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)}))}function jt(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Rt).forEach((function(e){if(a.once&&!St){var o=t.listeners,r=void 0===o?{}:o;n=function(){delete r[e][i],t.removeEventListener(e,n,a);for(var o=arguments.length,h=new Array(o),s=0;s<o;s++)h[s]=arguments[s];i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)}))}function It(t,e,i){var a;return bt(Event)&&bt(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Pt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ut=m.location,qt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function $t(t){var e=t.match(qt);return null!==e&&(e[1]!==Ut.protocol||e[2]!==Ut.hostname||e[3]!==Ut.port)}function _t(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Qt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];ut(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),ut(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),ut(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),ut(i)&&1!==i&&r.push("scaleX(".concat(i,")")),ut(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Kt(t){var i=e({},t),a=0;return Mt(t,(function(t,e){delete i[e],Mt(i,(function(e){var i=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(i*i+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;Math.abs(s)>Math.abs(a)&&(a=s)}))})),a}function Zt(t,i){var a=t.pageX,n=t.pageY,o={endX:a,endY:n};return i?o:e({startX:a,startY:n},o)}function Gt(t){var e=0,i=0,a=0;return Mt(t,(function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1})),{pageX:e/=a,pageY:i/=a}}function Vt(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=mt(a),r=mt(i);if(o&&r){var h=i*e;"contain"===n&&h>a||"cover"===n&&h<a?i=a/e:a=i*e}else o?i=a/e:r&&(a=i*e);return{width:a,height:i}}function Ft(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}function Jt(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,s=e.rotate,c=void 0===s?0:s,l=e.scaleX,d=void 0===l?1:l,p=e.scaleY,u=void 0===p?1:p,m=i.aspectRatio,g=i.naturalWidth,f=i.naturalHeight,v=a.fillColor,w=void 0===v?"transparent":v,b=a.imageSmoothingEnabled,x=void 0===b||b,y=a.imageSmoothingQuality,M=void 0===y?"low":y,C=a.maxWidth,D=void 0===C?1/0:C,k=a.maxHeight,B=void 0===k?1/0:k,O=a.minWidth,T=void 0===O?0:O,E=a.minHeight,W=void 0===E?0:E,H=document.createElement("canvas"),N=H.getContext("2d"),L=Vt({aspectRatio:m,width:D,height:B}),z=Vt({aspectRatio:m,width:T,height:W},"cover"),Y=Math.min(L.width,Math.max(z.width,g)),X=Math.min(L.height,Math.max(z.height,f)),R=Vt({aspectRatio:n,width:D,height:B}),S=Vt({aspectRatio:n,width:T,height:W},"cover"),A=Math.min(R.width,Math.max(S.width,o)),j=Math.min(R.height,Math.max(S.height,r)),I=[-A/2,-j/2,A,j];return H.width=kt(Y),H.height=kt(X),N.fillStyle=w,N.fillRect(0,0,Y,X),N.save(),N.translate(Y/2,X/2),N.rotate(c*Math.PI/180),N.scale(d,u),N.imageSmoothingEnabled=x,N.imageSmoothingQuality=M,N.drawImage.apply(N,[t].concat(h(I.map((function(t){return Math.floor(kt(t))}))))),N.restore(),H}var te=String.fromCharCode;function ee(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=te(t.getUint8(n));return a}var ie=/^data:.*,/;function ae(t){var e=t.replace(ie,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return Mt(n,(function(t,e){n[e]=i.charCodeAt(e)})),a}function ne(t,e){for(var i=[],a=8192,n=new Uint8Array(t);n.length>0;)i.push(te.apply(null,yt(n.subarray(0,a)))),n=n.subarray(a);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}function oe(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===ee(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);l>=8&&(o=s+l)}}}if(o){var d,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(d=o+12*p+2,274===i.getUint16(d,a)){d+=8,e=i.getUint16(d,a),i.setUint16(d,1,a);break}}}catch(t){e=1}return e}function re(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}var he={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),o=Number(e.minContainerHeight);Et(a,N),Wt(t,N);var r={width:Math.max(i.offsetWidth,n>=0?n:st),height:Math.max(i.offsetHeight,o>=0?o:ct)};this.containerData=r,Ot(a,{width:r.width,height:r.height}),Et(t,N),Wt(a,N)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=Ct({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*h>c?c=l*h:l=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&(c=o.width,(l=o.height)*h>c?c=l*h:l=c/h));var d=Vt({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=Ft({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Ot(this.canvas,Ct({width:i.width,height:i.height},Qt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);Ct(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),Ot(this.image,Ct({width:i.width,height:i.height},Qt(Ct({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=Ct({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),d*h>l?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&Yt(this.face,R,i.width>=e.width&&i.height>=e.height?x:w),Ot(this.cropBox,Ct({width:i.width,height:i.height},Qt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),It(this.element,P,this.getData())}},se={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,a=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(e&&(o.crossOrigin=e),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var r=i;"string"==typeof i?r=t.ownerDocument.querySelectorAll(i):i.querySelector&&(r=[i]),this.previews=r,Mt(r,(function(t){var i=document.createElement("img");Yt(t,S,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){Mt(this.previews,(function(t){var e=zt(t,S);Ot(t,{width:e.width,height:e.height}),t.innerHTML=e.html,Xt(t,S)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(Ot(this.viewBoxImage,Ct({width:o,height:r},Qt(Ct({translateX:-h,translateY:-s},t)))),Mt(this.previews,(function(e){var i=zt(e,S),c=i.width,l=i.height,d=c,p=l,u=1;a&&(p=n*(u=c/a)),n&&p>l&&(d=a*(u=l/n),p=l),Ot(e,{width:d,height:p}),Ot(e.getElementsByTagName("img")[0],Ct({width:o*u,height:r*u},Qt(Ct({translateX:-h*u,translateY:-s*u},t))))})))}},ce={bind:function(){var t=this.element,e=this.options,i=this.cropper;bt(e.cropstart)&&jt(t,$,e.cropstart),bt(e.cropmove)&&jt(t,q,e.cropmove),bt(e.cropend)&&jt(t,U,e.cropend),bt(e.crop)&&jt(t,P,e.crop),bt(e.zoom)&&jt(t,it,e.zoom),jt(i,G,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&jt(i,et,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&jt(i,_,this.onDblclick=this.dblclick.bind(this)),jt(t.ownerDocument,V,this.onCropMove=this.cropMove.bind(this)),jt(t.ownerDocument,F,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&jt(window,tt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;bt(e.cropstart)&&At(t,$,e.cropstart),bt(e.cropmove)&&At(t,q,e.cropmove),bt(e.cropend)&&At(t,U,e.cropend),bt(e.crop)&&At(t,P,e.crop),bt(e.zoom)&&At(t,it,e.zoom),At(i,G,this.onCropStart),e.zoomable&&e.zoomOnWheel&&At(i,et,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&At(i,_,this.onDblclick),At(t.ownerDocument,V,this.onCropMove),At(t.ownerDocument,F,this.onCropEnd),e.responsive&&At(window,tt,this.onResize)}},le={resize:function(){if(!this.disabled){var t,e,i=this.options,a=this.container,n=this.containerData,o=a.offsetWidth/n.width,r=a.offsetHeight/n.height,h=Math.abs(o-1)>Math.abs(r-1)?o:r;1!==h&&(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(Mt(t,(function(e,i){t[i]=e*h}))),this.setCropBoxData(Mt(e,(function(t,i){e[i]=t*h})))))}},dblclick:function(){this.disabled||this.options.dragMode===I||this.setDragMode(Tt(this.dragBox,W)?j:A)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(ut(e)&&1!==e||ut(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?Mt(t.changedTouches,(function(t){o[t.identifier]=Zt(t)})):o[t.pointerId||0]=Zt(t),a=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?y:zt(t.target,R),nt.test(a)&&!1!==It(this.element,$,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===b&&(this.cropping=!0,Et(this.dragBox,Y)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==It(this.element,q,{originalEvent:t,action:e})&&(t.changedTouches?Mt(t.changedTouches,(function(t){Ct(i[t.identifier]||{},Zt(t,!0))})):Ct(i[t.pointerId||0]||{},Zt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?Mt(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,Ht(this.dragBox,Y,this.cropped&&this.options.modal)),It(this.element,U,{originalEvent:t,action:e}))}}},de={change:function(t){var e,i=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,r=this.pointers,h=this.action,s=i.aspectRatio,c=o.left,l=o.top,d=o.width,p=o.height,u=c+d,m=l+p,g=0,f=0,v=n.width,W=n.height,H=!0;!s&&t.shiftKey&&(s=d&&p?d/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),W=f+Math.min(n.height,a.height,a.top+a.height));var L=r[Object.keys(r)[0]],z={x:L.endX-L.startX,y:L.endY-L.startY},Y=function(t){switch(t){case M:u+z.x>v&&(z.x=v-u);break;case C:c+z.x<g&&(z.x=g-c);break;case k:l+z.y<f&&(z.y=f-l);break;case D:m+z.y>W&&(z.y=W-m)}};switch(h){case w:c+=z.x,l+=z.y;break;case M:if(z.x>=0&&(u>=v||s&&(l<=f||m>=W))){H=!1;break}Y(M),(d+=z.x)<0&&(h=C,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case k:if(z.y<=0&&(l<=f||s&&(c<=g||u>=v))){H=!1;break}Y(k),p-=z.y,l+=z.y,p<0&&(h=D,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case C:if(z.x<=0&&(c<=g||s&&(l<=f||m>=W))){H=!1;break}Y(C),d-=z.x,c+=z.x,d<0&&(h=M,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case D:if(z.y>=0&&(m>=W||s&&(c<=g||u>=v))){H=!1;break}Y(D),(p+=z.y)<0&&(h=k,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case B:if(s){if(z.y<=0&&(l<=f||u>=v)){H=!1;break}Y(k),p-=z.y,l+=z.y,d=p*s}else Y(k),Y(M),z.x>=0?u<v?d+=z.x:z.y<=0&&l<=f&&(H=!1):d+=z.x,z.y<=0?l>f&&(p-=z.y,l+=z.y):(p-=z.y,l+=z.y);d<0&&p<0?(h=E,l-=p=-p,c-=d=-d):d<0?(h=O,c-=d=-d):p<0&&(h=T,l-=p=-p);break;case O:if(s){if(z.y<=0&&(l<=f||c<=g)){H=!1;break}Y(k),p-=z.y,l+=z.y,d=p*s,c+=o.width-d}else Y(k),Y(C),z.x<=0?c>g?(d-=z.x,c+=z.x):z.y<=0&&l<=f&&(H=!1):(d-=z.x,c+=z.x),z.y<=0?l>f&&(p-=z.y,l+=z.y):(p-=z.y,l+=z.y);d<0&&p<0?(h=T,l-=p=-p,c-=d=-d):d<0?(h=B,c-=d=-d):p<0&&(h=E,l-=p=-p);break;case E:if(s){if(z.x<=0&&(c<=g||m>=W)){H=!1;break}Y(C),d-=z.x,c+=z.x,p=d/s}else Y(D),Y(C),z.x<=0?c>g?(d-=z.x,c+=z.x):z.y>=0&&m>=W&&(H=!1):(d-=z.x,c+=z.x),z.y>=0?m<W&&(p+=z.y):p+=z.y;d<0&&p<0?(h=B,l-=p=-p,c-=d=-d):d<0?(h=T,c-=d=-d):p<0&&(h=O,l-=p=-p);break;case T:if(s){if(z.x>=0&&(u>=v||m>=W)){H=!1;break}Y(M),p=(d+=z.x)/s}else Y(D),Y(M),z.x>=0?u<v?d+=z.x:z.y>=0&&m>=W&&(H=!1):d+=z.x,z.y>=0?m<W&&(p+=z.y):p+=z.y;d<0&&p<0?(h=O,l-=p=-p,c-=d=-d):d<0?(h=E,c-=d=-d):p<0&&(h=B,l-=p=-p);break;case x:this.move(z.x,z.y),H=!1;break;case y:this.zoom(Kt(r),t),H=!1;break;case b:if(!z.x||!z.y){H=!1;break}e=Pt(this.cropper),c=L.startX-e.left,l=L.startY-e.top,d=o.minWidth,p=o.minHeight,z.x>0?h=z.y>0?T:B:z.x<0&&(c-=d,h=z.y>0?E:O),z.y<0&&(l-=p),this.cropped||(Wt(this.cropBox,N),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}H&&(o.width=d,o.height=p,o.left=c,o.top=l,this.action=h,this.renderCropBox()),Mt(r,(function(t){t.startX=t.endX,t.startY=t.endY}))}},pe={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&Et(this.dragBox,Y),Wt(this.cropBox,N),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Ct({},this.initialImageData),this.canvasData=Ct({},this.initialCanvasData),this.cropBoxData=Ct({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Ct(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Wt(this.dragBox,Y),Et(this.cropBox,N)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,Mt(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Wt(this.cropper,H)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,Et(this.cropper,H)),this},destroy:function(){var t=this.element;return t[v]?(t[v]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(gt(t)?t:a+Number(t),gt(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(ut(t)&&(i.left=t,a=!0),ut(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===It(this.element,it,{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var d=this.pointers,p=Pt(this.cropper),u=d&&Object.keys(d).length?Gt(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else wt(e)&&ut(e.x)&&ut(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return ut(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,ut(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(ut(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(ut(t)&&(i.scaleX=t,a=!0),ut(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var r=a.width/a.naturalWidth;if(Mt(t,(function(e,i){t[i]=e/r})),e){var h=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=h-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=a.rotate||0),i.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&wt(t)){var o=!1;e.rotatable&&ut(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(ut(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),ut(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;ut(t.x)&&(n.left=t.x*r+a.left),ut(t.y)&&(n.top=t.y*r+a.top),ut(t.width)&&(n.width=t.width*r),ut(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?Ct({},this.containerData):{}},getImageData:function(){return this.sized?Ct({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&Mt(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&wt(t)&&(ut(t.left)&&(e.left=t.left),ut(t.top)&&(e.top=t.top),ut(t.width)?(e.width=t.width,e.height=t.width/i):ut(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&wt(t)&&(ut(t.left)&&(a.left=t.left),ut(t.top)&&(a.top=t.top),ut(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),ut(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=Jt(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,r=a.width,s=a.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(n*=c,o*=c,r*=c,s*=c);var l=r/s,d=Vt({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=Vt({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=Vt({aspectRatio:l,width:t.width||(1!==c?i.width:r),height:t.height||(1!==c?i.height:s)}),m=u.width,g=u.height;m=Math.min(d.width,Math.max(p.width,m)),g=Math.min(d.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=kt(m),f.height=kt(g),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,m,g);var w=t.imageSmoothingEnabled,b=void 0===w||w,x=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,x&&(v.imageSmoothingQuality=x);var y,M,C,D,k,B,O=i.width,T=i.height,E=n,W=o;E<=-r||E>O?(E=0,y=0,C=0,k=0):E<=0?(C=-E,E=0,k=y=Math.min(O,r+E)):E<=O&&(C=0,k=y=Math.min(r,O-E)),y<=0||W<=-s||W>T?(W=0,M=0,D=0,B=0):W<=0?(D=-W,W=0,B=M=Math.min(T,s+W)):W<=T&&(D=0,B=M=Math.min(s,T-W));var H=[E,W,y,M];if(k>0&&B>0){var N=m/r;H.push(C*N,D*N,k*N,B*N)}return v.drawImage.apply(v,[i].concat(h(H.map((function(t){return Math.floor(kt(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||gt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===A,o=e.movable&&t===j;t=n||o?t:I,e.dragMode=t,Yt(i,R,t),Ht(i,W,n),Ht(i,X,o),e.cropBoxMovable||(Yt(a,R,t),Ht(a,W,n),Ht(a,X,o))}return this}},ue=m.Cropper,me=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e||!ht.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=Ct({},lt,wt(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return o(t,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[v]){if(e[v]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(ot.test(t))rt.test(t)?this.read(ae(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==at&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&$t(t)&&i.crossOrigin&&(t=_t(t)),n.open("GET",t,!0),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=oe(t),n=0,o=1,r=1;if(a>1){this.url=ne(t,at);var h=re(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&$t(e)&&(i||(i="anonymous"),a=_t(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),Et(n,L),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=m.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(m.navigator.userAgent),a=function(e,i){Ct(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=Ct({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML=dt;var o=n.querySelector(".".concat(v,"-container")),r=o.querySelector(".".concat(v,"-canvas")),h=o.querySelector(".".concat(v,"-drag-box")),s=o.querySelector(".".concat(v,"-crop-box")),c=s.querySelector(".".concat(v,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(v,"-view-box")),this.face=c,r.appendChild(i),Et(t,N),a.insertBefore(o,t.nextSibling),this.isImg||Wt(i,L),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,Et(s,N),e.guides||Et(s.getElementsByClassName("".concat(v,"-dashed")),N),e.center||Et(s.getElementsByClassName("".concat(v,"-center")),N),e.background&&Et(o,"".concat(v,"-bg")),e.highlight||Et(c,z),e.cropBoxMovable&&(Et(c,X),Yt(c,R,w)),e.cropBoxResizable||(Et(s.getElementsByClassName("".concat(v,"-line")),N),Et(s.getElementsByClassName("".concat(v,"-point")),N)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),bt(e.ready)&&jt(t,J,e.ready,{once:!0}),It(t,J)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Wt(this.element,N))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=ue,t}},{key:"setDefaults",value:function(t){Ct(lt,wt(t)&&t)}}]),t}();return Ct(me.prototype,he,se,ce,le,de,pe),me}()},44664:function(){}}]);