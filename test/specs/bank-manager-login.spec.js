// import {by} from "protractor";

var SelectWrapper = require('../utils/select-wrapper');
// var userSelect = new SelectWrapper(by.id('userSelect'));
// var ngSelect = new SelectWrapper(by.selectByNgClick('ngClick'));
const protractorHelper = require('protractor-helper');

describe('Testing logging to the Bank app:', function () {
    by.addLocator('ngClick', (text) => {
        return document.querySelector('[ng-click="'
            + text
            + '"]');
    })

    // const bankManagerBtn = element(by.css('[ng-click="manager()"]'));
    // const bankManagerBtn = ngSelect.selectByNgClick('manager()');
    const bankManagerBtn = element(by.ngClick('manager()'));

    it('should login as a Manager', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        const title = browser.getTitle();

        expect(title).toContain('Banking App');
        protractorHelper.hoverAndClick(bankManagerBtn);
        browser.sleep(3000);
    });

})








