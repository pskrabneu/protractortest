const protractorHelper = require('protractor-helper');

describe('Test checkboxes:', () => {

    it('page title should contains \'Checkboxes\'', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
        const title = browser.getTitle();

        expect(title).toContain('Checkboxes');
    });

    it('should ', () => {


    });

})









