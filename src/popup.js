
var positionsPath = chrome.extension.getURL('scripts/stats/player-positions.json');

function getJson(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function(e) {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            callback(xhr.response);
        }
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status !== 200) {
            alert('missing: ' + file)
        }
    };
    xhr.send();
}

getJson(positionsPath,function(response){
    chrome.tabs.executeScript(null, {
        code: 'var players = ' + JSON.stringify(response)
    }, function() {
        chrome.tabs.executeScript(null, {file: "scripts/footy-widget.js"}, function(){
            //alert('dd')
        });
    });
});

