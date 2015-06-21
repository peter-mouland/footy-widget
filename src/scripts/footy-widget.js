/*globals players, tableSelector*/
var htmlToStats = require("./utils/html-to-stats.js");
var statsToPoints = require("./utils/stats-to-points.js");
var pointsToHtml = require("./utils/points-to-html.js");
var isChromeExtension = (typeof players !== 'undefined');
var playersJSON, tableSelectorStr;

if (isChromeExtension) {
    playersJSON = JSON.parse(players);
    tableSelectorStr = tableSelector;
} else {
    playersJSON = require('./stats/player-positions.json');
    tableSelectorStr = '.STFFDataTable';
}

var statsCreator = new htmlToStats(tableSelectorStr, playersJSON);
var headingsMap = statsCreator.table.headings;
var playerStats = new statsToPoints(statsCreator.table.players).calculate();
var pointsTable = pointsToHtml(playerStats, headingsMap);

document.querySelector(tableSelectorStr).innerHTML = pointsTable;
