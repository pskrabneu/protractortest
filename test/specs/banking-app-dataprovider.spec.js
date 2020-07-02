var using = require('jasmine-data-provider');
var Objects = require('../utils/objects.json');

var SelectWrapper = require('../utils/select-wrapper');
const protractorHelper = require('protractor-helper');
var customerSelect = new SelectWrapper(by.id('userSelect'));
// var buttonSelect = new SelectWrapper(by.css('button'));

describe('Test Banking App with DataProvider with a bundle of Users:', function () {
    const bCustomerLogin = element(by.css('button[ng-click="customer()"]'));
    const bLogin = element(by.name('myForm')).element(by.css('button'));
    const bLogout = element(by.css('button[ng-click="byebye()"]'));

    function plusProvider(){
        return [
            {userName: Objects.userName.user1},
            {userName: Objects.userName.user2},
            {userName: Objects.userName.user3},
        ];
    }










    it('page title should contains \'Banking App\'', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        const title = browser.getTitle();

        expect(title).toContain('Banking App');
        protractorHelper.hoverAndClick(bCustomerLogin);
    })

/*    using(plusProvider(), function (data) {
        it('should chose right userName from DataProvider', function () {
            // protractorHelper.hoverAndClick(bCustomerLogin);
            customerSelect.selectByText(data.userName);
            protractorHelper.hoverAndClick(bLogin);

            const uName = element(by.css('div.ng-scope>div>div>strong>span')).getText();
            expect(uName).toContain(data.userName);
            bLogout.click();
        });
    })*/
})















