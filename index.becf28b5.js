var e=document.querySelector(".gallery"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){e.preventDefault();var r=e.target;if("IMG"===r.tagName&&(r=r.parentElement),"A"===r.tagName){var a=r.getAttribute("href"),n=window.location.origin+a.replace(".","");t.setAttribute("src",n)}});
//# sourceMappingURL=index.becf28b5.js.map
