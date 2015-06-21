var htmlToStats = require("./utils/html-to-stats.js");
var statsToPoints = require("./utils/stats-to-points.js");
var pointsToHtml = require("./utils/points-to-html.js");
var isChromeExtension = (typeof players !== 'undefined');

if (isChromeExtension) {
    players = JSON.parse(players);
} else {
    window.players = require('./stats/player-positions.json');
    window.tableSelector = '.STFFDataTable';
}

var statsCreator = new htmlToStats(tableSelector, players);
var headingsMap = statsCreator.table.headings;
var pointsCreator = new statsToPoints(statsCreator.table.players);
var playerStats = pointsCreator.playerStats;
var pointsTable = pointsToHtml(playerStats, headingsMap);

document.querySelector(tableSelector).innerHTML = pointsTable;
