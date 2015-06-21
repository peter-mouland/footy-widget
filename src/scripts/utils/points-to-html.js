module.exports = function(playerStats, headingsMap){
    var pointsTable = ['<table>','<tr>'];
    Object.keys(headingsMap).forEach(function(key, i){
        pointsTable.push('<th title="' + headingsMap[key] + '">' + key + '</th>');
    });
    pointsTable.push('</tr>');

    Object.keys(playerStats).forEach(function(key, i){
        var player = playerStats[key];
        if (i===0){
        }
        pointsTable.push('<tr>');
        for (var stat in player){
            if (typeof player[stat] === 'undefined' || player[stat].toString()=="NaN"){
                pointsTable.push('<th>&nbsp;</th>');
            } else{
                pointsTable.push('<th>' + player[stat] + '</th>');
            }
        }
        pointsTable.push('</tr>');
    });
    return pointsTable.join('\n');
};
