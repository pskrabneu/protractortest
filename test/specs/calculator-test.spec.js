describe('Test calculator operations:', function () {
    var latest;

    it('should open proper page', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        const title = browser.getTitle();
        expect(title).toContain('Super Calculator');
    });

    it('should add 2 + 18 with result 20', function () {
        element(by.model('first')).sendKeys('2');
        element(by.model('operator')).element(by.xpath('//option[@value="ADDITION"]')).click();
        element(by.model('second')).sendKeys('18');
        element(by.id('gobutton')).click();

        latest = element(by.css('h2.ng-binding')).getText();
        expect(latest).toEqual('20');
    });
});
