const protractorHelper = require('protractor-helper');
var SelectWrapper = require('../utils/select-wrapper');
var userSelect = new SelectWrapper(by.model('operator'));

describe('Test calculator operations:', function () {
    var latestText;
    const firstFigure = element(by.model('first'));
    const secondFigure = element(by.model('second'));
    const goButton = element(by.id('gobutton'));
    const latest = element(by.css('h2.ng-binding'));


    it('should open proper page', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        const title = browser.getTitle();
        expect(title).toContain('Super Calculator');
    });

    it('should add 2 + 18 with result 20', function () {
        protractorHelper.fillFieldWithText(firstFigure, '2');
        userSelect.selectByText('+');
        protractorHelper.fillFieldWithText(secondFigure, '18');

        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('20');
    });

    it('should find and count all dropdown items', function () {
        let dropOptions = userSelect.getOptions();
        let qty;
        dropOptions.then(function (options) {
            qty = options.length;
            console.log('Qty of items = "' + qty + '"');
            expect(parseInt(qty)).toEqual(5);
        })
    });
});
