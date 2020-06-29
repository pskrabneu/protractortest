describe('Test calculator operations:', function () {
    var latestText;
    const firstFigure = element(by.model('first'));
    const secondFigure = element(by.model('second'));
    const operList = element(by.model('operator'));
    const goButton = element(by.id('gobutton'));
    const latest = element(by.css('h2.ng-binding'));


    it('should open proper page', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        const title = browser.getTitle();
        expect(title).toContain('Super Calculator');
    });

    it('should add 2 + 18 with result 20', function () {
        firstFigure.sendKeys('2');
        operList.element(by.xpath('//option[@value="ADDITION"]')).click();
        secondFigure.sendKeys('18');
        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('20');
    });

    it('should divide 95 to 5 with result 19', function () {
        firstFigure.sendKeys('95');
        operList.element(by.xpath('//option[@value="DIVISION"]')).click();
        secondFigure.sendKeys('5');
        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('19');
    });

    it('should take 15 and 7 and leave 1 as a reminder', function () {
        firstFigure.sendKeys('15');
        operList.element(by.xpath('//option[@value="MODULO"]')).click();
        secondFigure.sendKeys('7');
        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('1');
    });

    it('should multiple 20 and 4 and get result 80', function () {
        firstFigure.sendKeys('20');
        operList.element(by.xpath('//option[@value="MULTIPLICATION"]')).click();
        secondFigure.sendKeys('4');
        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('80');
    });

    it('should substract 98 and 48 and get result 50', function () {
        firstFigure.sendKeys('98');
        operList.element(by.xpath('//option[@value="SUBTRACTION"]')).click();
        secondFigure.sendKeys('48');
        goButton.click();

        latestText = latest.getText();
        expect(latestText).toEqual('50');
    });

    it('should count all previous operations with 5', function () {
        element.all(by.repeater('result in memory')).getText().then(function(row) {
            let items = row.length;
            expect(items).toEqual(5);
        })
    });
});
