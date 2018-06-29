// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var package = require('./package.json');

var webview = document.createElement("webview");
webview.id = "portal";
webview.src = package.homepage;		// assign homepage url from package.json
webview.style = "height: 600px; width: 800px";

document.body.appendChild(webview);

