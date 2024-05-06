// const i = document.createElement(item);
// i.defer = true;
// i.href = href || '';
// i.src = src || '';
// document.head.appendChild(i);

// https://www.hannesscript.dev/software/melte/code/src/css/

function loadJS() {
    const folder =  'https://www.hannesscript.dev/software/melte/' + 'src/js';
    var scripts = document.getElementsByTagName("script");
    var folderPath = folder + "/";
    var jsFiles = ["attr.js"];

    for (var i = 0; i < jsFiles.length; i++) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = folderPath + jsFiles[i];
        script.defer = true;
        document.head.appendChild(script);
    }
}

function loadCSS() {
    const folder =  'https://www.hannesscript.dev/software/melte/' + 'src/css';
    var links = document.getElementsByTagName("link");
    var folderPath = folder + "/";
    var cssFiles = ["utility.css", "base.css"];

    for (var i = 0; i < cssFiles.length; i++) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.href = folderPath + cssFiles[i];
        link.rel = 'stylesheet';
        link.defer = true;
        document.head.appendChild(link);
    }
}

loadCSS();
loadJS();