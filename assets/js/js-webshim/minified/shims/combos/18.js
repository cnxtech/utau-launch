webshim.ready("matchMedia",function(a,b,c,d,e){function f(a){var b,c,d,f,g,h=a||{};b=h.elements||i.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,f=e,g=e,c[i.ns]||(c[i.ns]={}),h.reevaluate||!c[i.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(i.removeVideoShim(d),f=i.getMatch(c,d),f===!1)continue}else f=e;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!i.srcsetSupported||!i.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&i.dodgeSrcset(c),f?(g=i.processSourceSet(f),i.applyBestCandidate(g,c)):(g=i.processSourceSet(c),(c.srcset===e||c[i.ns].srcset)&&i.applyBestCandidate(g,c)),c[i.ns].evaluated=!0}}function g(){f();var a=setInterval(function(){return f(),/^loaded|^i|^c/.test(d.readyState)?void clearInterval(a):void 0},250);if(c.addEventListener){var b;c.addEventListener("resize",function(){c._picturefillWorking||(c._picturefillWorking=!0,c.clearTimeout(b),b=c.setTimeout(function(){f({reevaluate:!0}),c._picturefillWorking=!1},60))},!1)}}try{new Image}catch(h){window.Image=function(){return document.createElement("img")}}if(b.isReady("picture",!0),c.HTMLPictureElement)return void(c.picturefill=function(){});d.createElement("picture");var i={};i.ns="picturefill",i.srcsetSupported="srcset"in d.createElement("img"),i.sizesSupported=c.HTMLImageElement.sizes,i.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},i.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},i.matchesMedia=function(a){return c.matchMedia&&c.matchMedia(a).matches},i.getDpr=function(){return c.devicePixelRatio||1},i.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),i.lengthEl||(i.lengthEl=d.createElement("div"),d.documentElement.insertBefore(i.lengthEl,d.documentElement.firstChild)),i.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",i.lengthEl.offsetWidth<=0&&(i.lengthEl.style.cssText="width: 100%;"),i.lengthEl.offsetWidth},i.types={},i.types["image/jpeg"]=!0,i.types["image/gif"]=!0,i.types["image/png"]=!0,i.types["image/svg+xml"]=d.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),i.types["image/webp"]=function(){var a=new c.Image,b="image/webp";a.onerror=function(){i.types[b]=!1,f()},a.onload=function(){i.types[b]=1===a.width,f()},a.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},i.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof i.types[b]?(i.types[b](),"pending"):i.types[b]},i.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},i.findWidthFromSourceSize=function(a){for(var b,c=i.trim(a).split(/\s*,\s*/),d=0,e=c.length;e>d;d++){var f=c[d],g=i.parseSize(f),h=g.length,j=g.media;if(h&&(!j||i.matchesMedia(j))){b=h;break}}return i.getWidthFromLength(b)},i.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},i.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=i.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),j=h.length+1;j>=0;j--)if(h[j]!==e){var k=h[j],l=k&&k.slice(k.length-1);if("h"!==l&&"w"!==l||i.sizesSupported){if("x"===l){var m=k&&parseFloat(k,10);c=m&&!isNaN(m)?m:1}}else c=parseFloat(parseInt(k,10)/g)}return c||1},i.getCandidatesFromSourceSet=function(a,b){for(var c=i.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var g=c[e];d.push({url:g.url,resolution:i.parseDescriptor(g.descriptor,b)})}return d},i.dodgeSrcset=function(a){a.srcset&&(a[i.ns].srcset=a.srcset,a.removeAttribute("srcset"))},i.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[i.ns]&&a[i.ns].srcset&&(b=a[i.ns].srcset),b&&(d=i.getCandidatesFromSourceSet(b,c)),d},i.applyBestCandidate=function(a,b){var c,d,e;a.sort(i.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=i.getDpr()){e=c;break}e&&!i.endsWith(b.src,e.url)&&(b.src=e.url,b.currentSrc=b.src)},i.ascendingSort=function(a,b){return a.resolution-b.resolution},i.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},i.getAllElements=function(){for(var a=[],b=d.getElementsByTagName("img"),c=0,e=b.length;e>c;c++){var f=b[c];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[i.ns]&&null!==f[i.ns].srcset)&&a.push(f)}return a},i.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&typeof console!==e&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var j=h.getAttribute("media");if(h.getAttribute("srcset")&&(!j||i.matchesMedia(j))){var k=i.verifyTypeSupport(h);if(k===!0){c=h;break}if("pending"===k)return!1}}}}return c},g(),f._=i,c.picturefill=f,function(){b.isReady("picture",!0);var a="picture, img[srcset]";b.addReady(function(b){b.querySelector(a)&&window.picturefill()})}()}),/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var a=window.matchMedia,b=a("only all").matches,c=!1,d=0,e=[],f=function(){clearTimeout(d),d=setTimeout(function(){for(var b=0,c=e.length;c>b;b++){var d=e[b].mql,f=e[b].listeners||[],g=a(d.media).matches;if(g!==d.matches){d.matches=g;for(var h=0,i=f.length;i>h;h++)f[h].call(window,d)}}},30)};window.matchMedia=function(d){var g=a(d),h=[],i=0;return g.addListener=function(a){b&&(c||(c=!0,window.addEventListener("resize",f,!0)),0===i&&(i=e.push({mql:g,listeners:h})),h.push(a))},g.removeListener=function(a){for(var b=0,c=h.length;c>b;b++)h[b]===a&&h.splice(b,1)},g}}(),webshim.isReady("matchMedia",!0);