const protractorHelper = require('protractor-helper');

var SelectWrapper = require('../utils/select-wrapper');
var userSelect = new SelectWrapper(by.id('userSelect'));

describe('Test Banking app:', function () {
    const bCustomerLogin = element(by.css('div.center>button'));
    const bLogin = element(by.name('myForm')).element(by.css('button'));

    it('page title should contains \'Banking App\'', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        const title = browser.getTitle();

        expect(title).toContain('Banking App');
    })

    it('should handle dropdown list', function () {
        protractorHelper.hoverAndClick(bCustomerLogin);
        userSelect.selectByText('Albus Dumbledore');
        protractorHelper.hoverAndClick(bLogin);

        const uName = element(by.css('div.ng-scope>div>div>strong>span')).getText();
        expect(uName).toContain('Albus Dumbledore');
    });
})





