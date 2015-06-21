var points = function(stats){
    this.stats = stats;
};

points.prototype.calculate = function(){
    var self = this;
    Object.keys(this.stats).forEach(function(key, i) {
        self.stats[key].points = self.calculatePlayer(self.stats[key]);
    });
    return  self.stats;
};

points.prototype.calculatePlayer = function(stats){
    if (!stats){ return; }
    var forGoals = this.forGoals( stats.Gls, stats.pos);
    var forYellowCards = this.forYellowCards(stats.YC, stats.pos);
    var forRedCards = this.forRedCards(stats.RC, stats.pos);
    var forStarting = this.forStarting(stats.SXI, stats.pos);
    var forSub = this.forSub( stats.Sub, stats.pos);
    var forAssists = this.forAssists(stats.Ass, stats.pos);
    var forCleanSheet = this.forCleanSheet(  stats.CS, stats.pos);
    var forGoalAgainst = this.forGoalAgainst( stats.GA, stats.pos);
    var score = forGoals + forYellowCards + forRedCards + forStarting + forSub + forAssists + forCleanSheet + forGoalAgainst;
    return score;
};

points.prototype.forStarting = function(newData, position){ //starting a match 3 point
    return newData * 3;
};

points.prototype.forSub = function( newData, position){ //sub = 1 point
    return newData * 1;
};

points.prototype.forGoals = function(newData, position){//depends on position
    var multiplier;
    if (position == 'GK'){
        multiplier = 10;
    } else  if (position == 'FB' || position == 'CB'){
        multiplier = 8;
    } else if (position == 'WM' || position == 'CM'){
        multiplier = 6;
    } else if (position == 'FWD'){
        multiplier = 4;
    }
    return newData * multiplier;
};

points.prototype.forAssists = function( newData, position){//assist = 3 points
    return newData  * 3;
};

points.prototype.forYellowCards = function( newData, position){ //-2
    return  newData * -2;
};

points.prototype.forRedCards = function( newData, position){ //-5
    return newData * -5;
};

points.prototype.forCleanSheet = function( newData, position){ //5
    var multiplier;
    if ((position == 'FB' || position == 'CB') || position == 'GK'){
        multiplier = 5;
    } else  {
        multiplier = 0;
    }
    return newData * multiplier;
};

points.prototype.forGoalAgainst = function(newData, position){ //-1
    var multiplier;
    if ((position == 'FB' || position == 'CB') || position == 'GK'){
        multiplier = -1;
    } else  {
        multiplier = 0;
    }
    return newData * multiplier;
};


module.exports = points;