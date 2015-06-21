function appendCSS(fileObj){
    var  link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href='base/' + fileObj.path;
    document.body.appendChild(link)
}
function appendScript(fileObj){
    var  link = document.createElement('script');
    link.type = 'javascript';
    link.src='base/' + fileObj.path;
    document.body.appendChild(link)
}
function loadAssets(page){
    document.body.innerHTML = __html__['_site/index.html'];
    appendCSS({path: '_site/styles/jcountdown.css'});
    appendCSS({path: '_site/styles/stff1415-generic.3.1.css'});
    appendScript({path: '_site/scripts/footy-widget.js'});
}

module.exports = {
    loadAssets: loadAssets
};