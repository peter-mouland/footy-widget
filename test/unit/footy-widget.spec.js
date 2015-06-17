/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var footyWidget = require('../../src/scripts/footy-widget');

/* Start Test */
describe('footy-widget module can ', function () {

    it('sum an array of numbers', function () {

        expect(new footyWidget().sum([1,2,3])).toBe(6);

    });

    it('version is attached', function () {

        expect(new footyWidget().version).toBe('0.0.0');

    });

});