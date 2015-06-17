var htmlToStats = require("./utils/html-to-stats.js");
var statsToPoints = require("./utils/stats-to-points.js");
var externalWeekUrl = 'https://fantasyfootball.skysports.com/json/teaminfo/0';

players = JSON.parse(players);
var statsCreator = new htmlToStats(players);
var playerStats = statsCreator.playerStats;
var newPlayers = statsCreator.newPlayers;
var pointsCreator = new statsToPoints(playerStats)
var totalPoints = pointsCreator.totalPoints;

var pointsTable = ['<table>'];
playerStats.arrStats.forEach(function(player, i){
    if (i===0){
        pointsTable.push('<tr>');
        for (var stat in player){
            pointsTable.push('<th>' + stat + '</th>')
        }
        pointsTable.push('</tr>')
    }
    pointsTable.push('<tr>');
    for (var stat in player){
        if (typeof player[stat] === 'undefined' || player[stat].toString()=="NaN"){
            pointsTable.push('<th>&nbsp;</th>')
        } else{
            pointsTable.push('<th>' + player[stat] + '</th>')
        }
    }
    pointsTable.push('</tr>');
});
//document.getElementById('points').innerHTML = pointsTable.join('')
    document.querySelector('.STFFDataTable').innerHTML = pointsTable.join('')
