var cheerio = require('cheerio');

var statistics = function(tableSelector, positions){
    this.tableSelector = tableSelector;
    this.$ = cheerio.load(document.body.innerHTML);
    this.table = this.tableToJson(this.$, positions);
};

statistics.prototype.headings = function($){
    var $th = $(this.tableSelector + ' th');
    var arrHeaderNodes = Object.keys($th).map(function (key) {return el = $th[key]; });
    var th, mapHeadings = {}, el;
    arrHeaderNodes.forEach(function(el, i){
        if (th !== 'length' && el.children && el.children[0]){
            mapHeadings[el.children[0].data] = el.attribs['title'];
        }
    });
    return mapHeadings
};

statistics.prototype.tableToJson = function($, positions){
    var stats = { players : {} };
    stats.headings = this.headings($);
    var arrHeadings = Object.keys(stats.headings).map(function (key) { return key; });
    var $tr = $(this.tableSelector + ' tr:not(:first-child)');
    var arrPlayerNodes = Object.keys($tr).map(function (key) {return $tr[key]; });

    arrPlayerNodes.forEach(function(node, i){
        if (!node.children) { return; }
        var player = { };
        Object.keys(node.children)
            .map(function (key) { return node.children[key]; })
            .filter(function(el){ return (el.name == 'td') })
            .forEach(function(el, elI){
                player[arrHeadings[elI]] = el.children[0].data;
            });
        if (positions[player.Name]){
            player.pos = positions[player.Name].pos;
            player.Code =  positions[player.Name].Code;
            stats.headings.Pos = 'position';
            stats.headings.Code = 'Code';
            stats.headings.FF = 'Fantasy Footy Points';
        }
        stats.players[player.Name] = player;
    });
    return stats;
};

module.exports = statistics;