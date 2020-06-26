describe('Test calculator operations:', function () {
    var latest;

    it('should add 2 + 18 with result 20', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        const title = browser.getTitle();
        expect(title).toContain('Super Calculator');

        element(by.model('first')).sendKeys('2');
        element(by.model('operator')).$(by.xpath('//option[@value="ADDITION"]')).click();
        element(by.model('second')).sendKeys('18');
        element(by.id('gobutton')).click();

        latest = element(by.css('h2.ng-binding')).getText();
        expect(latest).toEqual('20');
    });
});
