/* globals chrome, XMLHttpRequest */
var positionsPath = chrome.extension.getURL('scripts/stats/player-positions.json');
var tableSelector;

function getJson(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function(e) {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            callback(xhr.response);
        }
    };
    xhr.send();
}

getJson(positionsPath,function(response){
    chrome.tabs.getSelected(null, function(tab) {
        var tabID = tab.id;
        var tabUrl = tab.url;
        if (tabUrl.indexOf('://m.fantasyfootball.skysports.com')>0){
            tableSelector = '#stats-tables>table';
        } else if (tabUrl.indexOf('://fantasyfootball.skysports.com')>0){
            tableSelector = '.STFFDataTable';
        }
        chrome.tabs.executeScript(null, {
            code: 'var tableSelector = "' + tableSelector + '"; var players = ' + JSON.stringify(response)
        }, function() {
            chrome.tabs.executeScript(null, {file: "scripts/footy-widget.js"});
        });
    });
});

