const protractorHelper = require('protractor-helper');

var SelectWrapper = require('../utils/select-wrapper');
var userSelect = new SelectWrapper(by.id('userSelect'));

describe('Test Banking app:', function () {
    let operationMessage;
    let balance;

    const bCustomerLogin = element(by.css('div.center>button'));
    const bLogin = element(by.name('myForm')).element(by.css('button'));

    it('page title should contains \'Banking App\'', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        const title = browser.getTitle();

        expect(title).toContain('Banking App');
    })

    it('should contains text on the page \'Wellcome Your Name\'', function () {
        protractorHelper.hoverAndClick(bCustomerLogin);
        userSelect.selectByText('Ron Weasly');
        protractorHelper.hoverAndClick(bLogin);

        const uName = element(by.css('div.ng-scope>div>div>strong>span')).getText();
        expect(uName).toContain('Ron Weasly');
    });

    it('should show entered deposit', function () {
        element(by.css('button[ng-click="deposit()"]')).click();
        element(by.model('amount')).click().sendKeys('400');
        element(by.css('button[type="submit"]')).click();

        operationMessage = element(by.css('span[ng-show="message"]')).getText();
        expect(operationMessage).toContain('Deposit Successful');

        balance = element(by.css('div[ng-hide="noAccount"] strong:nth-child(2)')).getText();
        expect(balance).toContain('400');

        element(by.css('span[ng-show="message"]')).getCssValue('color').then(function (attrib) {
            console.log('Attribute = ' + attrib);
        })
    });

    it('should show value after withdraw', function () {
        element(by.css('button[ng-click="withdrawl()"]')).click();
        element(by.model('amount')).click().sendKeys('250');
        element(by.css('button[type="submit"]')).click();

        operationMessage = element(by.css('span[ng-show="message"]')).getText();
        expect(operationMessage).toContain('Transaction successful');

        balance = element(by.css('div[ng-hide="noAccount"] strong:nth-child(2)')).getText();
        expect(balance).toContain('150');

        // browser.sleep(3000);

        // TODO deep in details with "Promisse"

        element(by.css('button[ng-click="transactions()"]')).click();
        const table = element(by.xpath('//table'));
        protractorHelper.waitForElementPresence(table);
        // browser.sleep(3000);
    });
})





