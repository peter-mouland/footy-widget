/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var footyWidget = require('../../src/scripts/footy-widget');

/* Start Test */
describe('footy-widget module can ', function () {

    it('print the sum to the dom', function () {
        new footyWidget().write([1,2,3]);

        expect(document.getElementById('demo-functional').innerHTML).toBe('6');

    });

});