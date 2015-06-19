var cheerio = require('cheerio');

var statistics = function(tableSelector, positions){

    this.newPlayers = [];
    this.tableSelector = tableSelector;
    this.playerStats = this.tableToJson(document.body.innerHTML, positions);
};

statistics.prototype.tableToJson = function(body, positions){
    var $ = cheerio.load(body);
    var o = {  mapHeadings:{}, arrHeadings:[], arrStats: [], mapStats : {} };
    var $th = $(this.tableSelector + ' th');
    var $tr = $(this.tableSelector + ' tr:not(:first-child)');
    var i, th, els, el, nodes, node, td, player;
    var addPlayer = false;
    var self = this;
    for (th in $th){
        if ($th.hasOwnProperty(th)) {
            el = $th[th];
            if (th !== 'length' && el.children && el.children[0]){
                o.arrHeadings.push(el.children[0].data);
                o.mapHeadings[el.children[0].data] = el.attribs['title'];
            }
        }
    }
    for (nodes in $tr){
        addPlayer = false;
        delete player;
        i = 0;
        if ($tr.hasOwnProperty(nodes)) {
            node = $tr[nodes];
            if (nodes !== 'length'){
                player = { };
                for (els in node.children){
                    if (node.children.hasOwnProperty(els) ) {
                        el = node.children[els];
                        if (el.name == 'td' && o.arrHeadings[i].trim){
                            player[o.arrHeadings[i]] = el.children[0].data;
                            i++;
                            addPlayer = true;
                        }
                    }
                }
                if (addPlayer){
                    o.arrStats.push(player);
                }
            }
        }
    }
    o.arrStats.forEach(function(stats, i){
        if (!stats.Name){ return; }
        o.mapStats[stats.Name] = stats;
        if (positions[stats.Name]){
            o.mapStats[stats.Name].pos = positions[stats.Name].pos;
            o.mapStats[stats.Name].code = positions[stats.Name].code;
        } else {
            console.log('Player position not found: ', stats.Name);
            self.newPlayers.push(stats)
        }
    });
    return o;
};

module.exports = statistics;