(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAYAAADI876sAAAABHNCSVQICAgIfAhkiAAAAbtJREFUWIXFVjtOxDAQHSeWtkBCgnqleEtAHICCKyDRxyeg4iJUHGBX622RuAPiBCtBumxJgSigZqiMRqNx4sTx7qsy9uS9mfH4o4DAGIPUbttWSfN+nNuhMY+qqp6UUrcxGhIknZhYqa/3K7oEjTG4WCxuhAR+qL//lsaozZMO6fYhFGuMr7cLPtm2raLVQ8RnTqaUOhobjOdHxHMpUD/PV5B3mRTrfD4/lTglFJRUas8QQsGFOGaz2TG1d7vdW6xWLLTWn3wsVEhNHQDGtV4Mmqb5BoBoDWlfUgxZJAn/iedKeAx/X9JToHePZ8DZHjR6UTD7K4cIK+z7AN9gcVI7VDP7JIVsCPjVx+9b7gMwbdvzFQdjDPYFMBT84ZHC18U1pDDa/yBVt+sVlgp6i1D+kBZPMGc3HBTr9frDOZftpomqknMO67rOXtHlcnmhtd7y8X1oB+Gcw5wr0KWbg5ef6kH4qvtAEPHFWns9dUCr1eqqLMtXRPy11pZT83uMaiFpFVLa0Tn3CAB3nMvr5Gj1JMK+NkTErbX20tubzeYeER+6/qFJ5jxbJiFN3YeHOLyyCMYU4qAnNQD8AbTuLn36hHRPAAAAAElFTkSuQmCC",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAABHNCSVQICAgIfAhkiAAAAgFJREFUWIXtV0GKGkEUfTWTbZNFNoGBBoVG8AYKGVceQgXF5ADiQhQPIIoL8QIDIip4A5chC3OEVteBbALZlS6mfhZDSVdXW13tTEsgedDQXfV+vde/6ldXA//xAhZHWK/X74UQXwA8ALhPMPYzgB+c86dms/n7KhOr1YoSCFqhUqlE6kU2LpfLNzcgUa1WNU2tYbFYpGZAolarKbrvwgSi1D1oUBzN5/OvRPR4A91tvV4vyoe7YI8Q4pGIEHVxzuG6LhzHieyXl+M4cF0XnHMTrxDUVaYjaio8z0OxWNTaAWA2m53vG42G0lcqlV5eebvFfr83pkXJRNjx8Xi8aEAKE5FmIIhCoYDT6aSNbW0ik8kY30DGxCGbzRpNKNMhhIgdMAzbGBPPuCZsBGwyIYQw8oyZsBWIAxFdnwkbE7Yc60xcs1vaxlxt4q3WRKJMpFUdck0wxkBEYEz9bt40E5Jr3Cf+ioV5qUSn06kWWC6Xkc/nzzG+72Oz2Wi8VqsVW6LK5Ewmk0Tl4XkeDocDcrkcdrtdklC02+2z9qtKVH4dfd9PFBdG2MQ3AJ9eNaIdvgcftDPmeDxO/XzX6XQU3btLxFsi8sg/Go1Sy0a3240/8ksMh8OzEbnTxUHuhJe4vV7P/ucniMFg8IEx9pkx9hEJfwOJ6CcRPfX7/V8J4v5h/AGBWIUp7ZLKjwAAAABJRU5ErkJggg==";function d(n){const e=document.querySelector(".mobile-content"),s=document.querySelector(".burger-btn"),c=document.querySelector(".close-btn");n==="open"?(e.style.display="block",s.style.display="none",c.style.display="block"):(e.style.display="none",s.style.display="block",c.style.display="none")}document.querySelector(".burger-btn").addEventListener("click",function(){d("open")});document.querySelector(".close-btn").addEventListener("click",function(){d("close")});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".switch input"),e=document.body;e.style.opacity="0",e.style.visibility="hidden";const s=localStorage.getItem("theme");s&&(e.classList.toggle("dark-mode",s==="dark"),n.checked=s==="dark"),window.requestAnimationFrame(()=>{e.style.opacity="1",e.style.visibility="visible"}),n.addEventListener("change",function(){e.classList.toggle("dark-mode",n.checked),localStorage.setItem("theme",n.checked?"dark":"light")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".header-menu a, .cart-book svg").forEach(function(e){e.href===window.location.href&&e.classList.add("active")})});const a=document.querySelector(".sidebar-swiper-list"),i=document.querySelector(".support-arrow-down"),l=document.querySelector(".support-arrow-up");i.addEventListener("click",function(){a.scrollBy({top:170,behavior:"smooth"}),i.classList.add("visually-hidden"),l.classList.remove("visually-hidden")});l.addEventListener("click",function(){a.scrollBy({top:-170,behavior:"smooth"}),l.classList.add("visually-hidden"),i.classList.remove("visually-hidden")});document.querySelector(".js-list");export{A as a,u as b};
//# sourceMappingURL=slider-6a7bff53.js.map