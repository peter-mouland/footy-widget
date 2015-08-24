require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"popup":[function(require,module,exports){
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


},{}]},{},["popup"]);
