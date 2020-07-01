var using = require('jasmine-data-provider');
var SelectWrapper = require('../utils/select-wrapper');
var userSelect = new SelectWrapper(by.id('userSelect'));
var Objects = require('../utils/objects.json');
const protractorHelper = require('protractor-helper');


describe('Test Banking App with DataProvider:', function () {
    const bCustomerLogin = element(by.css('div.center>button'));
    const bLogin = element(by.name('myForm')).element(by.css('button'));

    it('page title should contains \'Banking App\'', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        const title = browser.getTitle();

        expect(title).toContain('Banking App');
    })

    using([{userName: Objects.userName}], function (data) {
        it('should chose right userName from DataProvider', function () {
            protractorHelper.hoverAndClick(bCustomerLogin);
            userSelect.selectByText(data.userName);
            protractorHelper.hoverAndClick(bLogin);

            const uName = element(by.css('div.ng-scope>div>div>strong>span')).getText();
            expect(uName).toContain(data.userName);
        });
    })
})















