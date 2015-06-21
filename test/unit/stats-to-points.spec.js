/* Require file to test */
var statsToPoints = require('../../src/scripts/utils/stats-to-points');
var fixtures = {};

/* Start Test */
describe('stats-to-points module can ', function () {

    beforeEach(function(){
        fixtures = {
            "Giroud, Olivier":{
                " ": undefined,
                Ass: "3",
                CS: "0",
                Club: "ARS",
                Code: "296",
                GA: "0",
                Gls: "14",
                MOM: "3",
                Name: "Giroud, Olivier",
                PS: "0",
                RC: "1",
                SXI: "21",
                Sub: "6",
                Total: "134",
                YC: "5",
                pos: "FWD",
                "£m": "8.9"
            },
            "mouland, peter":{
                " ": undefined,
                Ass: "3",
                CS: "2",
                Club: "ARS",
                Code: "296",
                GA: "4",
                Gls: "5",
                MOM: "6",
                Name: "Giroud, Olivier",
                PS: "7",
                RC: "8",
                SXI: "9",
                Sub: "10",
                Total: "134",
                YC: "11",
                pos: "FB",
                "£m": "8.9"
            }
        };
    });

    describe('turn stats into points for', function () {

        it('goals', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forGoals('0','FWD')).toBe(0);
            expect(statsCreator.forGoals('14','FWD')).toBe(56);
            expect(statsCreator.forGoals('0','FB')).toBe(0);
            expect(statsCreator.forGoals('14','FB')).toBe(112);
            expect(statsCreator.forGoals('0','CB')).toBe(0);
            expect(statsCreator.forGoals('14','CB')).toBe(112);
            expect(statsCreator.forGoals('0','CM')).toBe(0);
            expect(statsCreator.forGoals('14','CM')).toBe(84);
            expect(statsCreator.forGoals('0','WM')).toBe(0);
            expect(statsCreator.forGoals('14','WM')).toBe(84);
            expect(statsCreator.forGoals('0','GK')).toBe(0);
            expect(statsCreator.forGoals('14','GK')).toBe(140);

        });

        it('forAssists', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forAssists('0','FWD')).toBe(0);
            expect(statsCreator.forAssists('14','FWD')).toBe(42);
            expect(statsCreator.forAssists('0','FB')).toBe(0);
            expect(statsCreator.forAssists('14','FB')).toBe(42);
            expect(statsCreator.forAssists('0','CB')).toBe(0);
            expect(statsCreator.forAssists('14','CB')).toBe(42);
            expect(statsCreator.forAssists('0','CM')).toBe(0);
            expect(statsCreator.forAssists('14','CM')).toBe(42);
            expect(statsCreator.forAssists('0','WM')).toBe(0);
            expect(statsCreator.forAssists('14','WM')).toBe(42);
            expect(statsCreator.forAssists('0','GK')).toBe(0);
            expect(statsCreator.forAssists('14','GK')).toBe(42);

        });

        it('forYellowCards', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forYellowCards('0','FWD')).toBe(0);
            expect(statsCreator.forYellowCards('14','FWD')).toBe(-28);
            expect(statsCreator.forYellowCards('0','FB')).toBe(0);
            expect(statsCreator.forYellowCards('14','FB')).toBe(-28);
            expect(statsCreator.forYellowCards('0','CB')).toBe(0);
            expect(statsCreator.forYellowCards('14','CB')).toBe(-28);
            expect(statsCreator.forYellowCards('0','CM')).toBe(0);
            expect(statsCreator.forYellowCards('14','CM')).toBe(-28);
            expect(statsCreator.forYellowCards('0','WM')).toBe(0);
            expect(statsCreator.forYellowCards('14','WM')).toBe(-28);
            expect(statsCreator.forYellowCards('0','GK')).toBe(0);
            expect(statsCreator.forYellowCards('14','GK')).toBe(-28);

        });

        it('forRedCards', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forRedCards('0','FWD')).toBe(0);
            expect(statsCreator.forRedCards('14','FWD')).toBe(-70);
            expect(statsCreator.forRedCards('0','FB')).toBe(0);
            expect(statsCreator.forRedCards('14','FB')).toBe(-70);
            expect(statsCreator.forRedCards('0','CB')).toBe(0);
            expect(statsCreator.forRedCards('14','CB')).toBe(-70);
            expect(statsCreator.forRedCards('0','CM')).toBe(0);
            expect(statsCreator.forRedCards('14','CM')).toBe(-70);
            expect(statsCreator.forRedCards('0','WM')).toBe(0);
            expect(statsCreator.forRedCards('14','WM')).toBe(-70);
            expect(statsCreator.forRedCards('0','GK')).toBe(0);
            expect(statsCreator.forRedCards('14','GK')).toBe(-70);

        });

        it('forCleanSheet', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forCleanSheet('0','FWD')).toBe(0);
            expect(statsCreator.forCleanSheet('14','FWD')).toBe(0);
            expect(statsCreator.forCleanSheet('0','FB')).toBe(0);
            expect(statsCreator.forCleanSheet('14','FB')).toBe(70);
            expect(statsCreator.forCleanSheet('0','CB')).toBe(0);
            expect(statsCreator.forCleanSheet('14','CB')).toBe(70);
            expect(statsCreator.forCleanSheet('0','CM')).toBe(0);
            expect(statsCreator.forCleanSheet('14','CM')).toBe(0);
            expect(statsCreator.forCleanSheet('0','WM')).toBe(0);
            expect(statsCreator.forCleanSheet('14','WM')).toBe(0);
            expect(statsCreator.forCleanSheet('0','GK')).toBe(0);
            expect(statsCreator.forCleanSheet('14','GK')).toBe(70);

        });

        it('forGoalAgainst', function () {
            var statsCreator = new statsToPoints(fixtures);
            expect(statsCreator.forGoalAgainst('0','FWD')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','FWD')).toBe(0);
            expect(statsCreator.forGoalAgainst('0','FB')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','FB')).toBe(-14);
            expect(statsCreator.forGoalAgainst('0','CB')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','CB')).toBe(-14);
            expect(statsCreator.forGoalAgainst('0','CM')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','CM')).toBe(0);
            expect(statsCreator.forGoalAgainst('0','WM')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','WM')).toBe(0);
            expect(statsCreator.forGoalAgainst('0','GK')).toBe(0);
            expect(statsCreator.forGoalAgainst('14','GK')).toBe(-14);

        });

        it('multiple players', function () {
            var statsCreator = new statsToPoints(fixtures);
            var stats = statsCreator.calculate();
            expect(stats["Giroud, Olivier"].points).toBe(119);
            expect(stats["Giroud, Olivier"].pos).toBe('FWD');
            expect(stats["mouland, peter"].points).toBe(30);
            expect(stats["mouland, peter"].pos).toBe('FB');
        });

    });


});