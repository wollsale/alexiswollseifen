parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({13:[function(require,module,exports) {
var e={},t=function(e){return e||window.event},o=function(){var t=document.createElement("div");t.style.width="3.8rem",t.style.height="3.8rem",t.style.position="absolute",t.style.pointerEvents="none",t.style.backgroundColor="#2F80ED",t.style.opacity="0.1",t.style.borderRadius="50%",t.style.zIndex="-1",t.style.mixBlendMode="exclusion",t.style.transition="transform .3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity .3s cubic-bezier(0.455, 0.03, 0.515, 0.955)",document.querySelector("body").appendChild(t),e.pointer=t,e.pointer.width=t.clientWidth,e.pointer.height=t.clientHeight,e.pointer.color=t.style.backgroundColor,e.pointer.opacity=t.style.opacity},n=function(){document.addEventListener("mousemove",function(o){t(o),e.pointer.style.left=event.clientX-e.pointer.width/2+2+"px",e.pointer.style.top=event.clientY-e.pointer.height/2+2+"px"})},i=function(){for(var t=document.querySelectorAll("a"),o=function(o){var n=t[o],i=n.dataset.color;n.addEventListener("mouseover",function(){e.pointer.style.transform="scale(2)",i&&(e.pointer.style.backgroundColor=i),i&&(e.pointer.style.opacity=.3)}),n.addEventListener("mouseleave",function(){e.pointer.style.transform="scale(1)",e.pointer.style.backgroundColor=e.pointer.color,e.pointer.style.opacity=e.pointer.opacity})},n=0;n<t.length;n++)o(n)};o(),n(),i();
},{}],14:[function(require,module,exports) {
var e=function(){var e=document.querySelectorAll(".social"),t=document.querySelector(".experience"),r=document.querySelector(".intro__name"),n=document.querySelector(".intro__descr"),a=[];a.push(r),a.push(n),a.push(t);for(var o=0;o<e.length;o++){var s=e[o];s.addEventListener("mouseover",function(){for(var e=0;e<a.length;e++){var t=a[e];a[0].style.opacity="1",a[0].style.transform="translateY(-0px)",t.style.transition="all .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) ."+e+"s",t.style.transform="translateY(-10px)",t.style.opacity="0"}}),s.addEventListener("mouseleave",function(){for(var e=0;e<a.length;e++){var t=a[e];t.style.transform="translateY(0)",t.style.opacity="1"}})}};e();
},{}],15:[function(require,module,exports) {
var e=function(){currentTime=new Date;var e=currentTime.getHours();currentTime.getMinutes();return e},t=function(){var t=document.querySelector("html");e()>=21||e()<6?t.classList.add("nightMode"):t.classList.remove("nightMode")},n=function(){var e=document.querySelector(".js-switcher"),t=document.querySelector("html");e.addEventListener("click",function(){t.classList.contains("nightMode")?t.classList.remove("nightMode"):t.classList.add("nightMode")})};t(),n();
},{}],4:[function(require,module,exports) {
"use strict";require("./cursor.js"),require("./socialHovering.js"),require("./nightMode.js");
},{"./cursor.js":13,"./socialHovering.js":14,"./nightMode.js":15}]},{},[4])
//# sourceMappingURL=app.3ae88a5c.map