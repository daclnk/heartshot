/* version: 1.4.0 */
"use strict";!function(){var e,t='img:not([data-dl-permission="true"]):not(.is-dl-permission)',n=function(){Array.prototype.slice.call(document.querySelectorAll(t),0).forEach(function(e){"return false"!==e.getAttribute("onmousedown")&&(e.setAttribute("onmousedown","return false"),e.setAttribute("oncopy","return false"),e.setAttribute("onselectstart","return false"),e.setAttribute("oncontextmenu","return false"),e.addEventListener("touchforcechange",function(e){e.touches&&e.touches[0]&&e.touches[0].force>.15&&e.preventDefault()}))})};e=function(){var e;e="<style>\n".concat(t," {\n  -webkit-touch-callout:none;\n  -ms-user-select: none;\n  -webkit-user-select:none;\n  user-select:none;\n  -webkit-touch-callout:none;\n  -moz-touch-callout:none;\n  touch-callout:none;\n  -webkit-user-drag:none;\n  -khtml-user-drag:none;\n  user-drag:none;\n}\n</style>"),document.head.insertAdjacentHTML("beforeend",e),document.onkeydown=function(e){return(1!=e.ctrlKey||83!=e.keyCode)&&(1!=e.ctrlKey||69!=e.keyCode)&&void(document.body.classList.contains("watch-dl-permission")&&n())},n(),document.body.classList.contains("watch-dl-permission")&&setInterval(n,500)},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e),window.addEventListener("load",function(){setTimeout(n,1e3)})}();
