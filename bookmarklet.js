javascript:!function(){var e=document.createElement("style");e.innerHTML="\n  .side-by-side{\n    position:absolute;\n    top:0;\n    width: 50vw;\n    height:100vh!important;\n    z-index:999;\n  }\n  .side-by-side-nojs {\n    left:50%25;\n  }\n  .side-by-side-js {\n    left:0;\n  }\n  .side-by-side-label {\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 12px;\n    position: absolute;\n    z-index: 1000;\n    margin: 10px;\n    opacity: 0.7;\n    text-transform: uppercase;\n    font-family: 'Arial';\n    pointer-events: none;\n  }\n  .no_js{\n    left:50vw;\n  }\n  body{\n    display:none!important;\n    overflow:hidden!important;\n  }\n  ",document.head.appendChild(e);var n=document.createElement("div");n.setAttribute("class","js side-by-side-label"),n.innerText="JavaScript Enabled",document.body.insertAdjacentElement("afterend",n);var t=document.createElement("div");t.setAttribute("class","no_js side-by-side-label"),t.innerText="JavaScript Disabled",document.body.insertAdjacentElement("afterend",t);var i=document.createElement("iframe");i.setAttribute("class","side-by-side-nojs side-by-side"),i.src=window.location.href,i.frameBorder=0,i.sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-top-navigation",document.body.insertAdjacentElement("afterend",i);var o=document.createElement("iframe");o.setAttribute("class","side-by-side-js side-by-side"),o.src=window.location.href,o.frameBorder=0,document.body.insertAdjacentElement("afterend",o)}();
