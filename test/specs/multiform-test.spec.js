const protractorHelper = require('protractor-helper');

describe('Test multiform page:', () => {
    const p1Name = element(by.model('formData.name'));
    const p1Email = element(by.model('formData.email'));
    const p1Button = element(by.partialLinkText('Section'));
    const pSubmit = element(by.buttonText('Submit'));

    const p2Xbox = element(by.name('009'));

    const resultSection = element(by.css('pre.ng-binding'));

    const fName = 'Gusman Zakhariya';
    const fEmail = 'test.gusman@gemail.com';

    let result;

    it('page title should contains \'Multiform\'', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
        const title = browser.getTitle();

        expect(title).toContain('Multiform');
    });

    it('JSON bellow should contains \'Name\' and \'Email\'', function () {
        protractorHelper.fillFieldWithText(p1Name, fName);
        protractorHelper.fillFieldWithText(p1Email, fEmail);

        result = resultSection.getText();
        expect(result).toContain(fName);
        expect(result).toContain(fEmail);
    });

    it('JSON bellow should contains \'Interests\'', function () {
        protractorHelper.hoverAndClick(p1Button);
        protractorHelper.click(p2Xbox);
        const elText = p2Xbox.getText();

        expect(resultSection.getText()).toContain(elText);
    });

    it('should pop-up window with text \'awesome!\'', function () {
        protractorHelper.hoverAndClick(p1Button);

        const pText = element(by.css('div#form-views>div>h3')).getText();
        expect(pText).toContain('Test Completed');

        protractorHelper.click(pSubmit);
        let al = browser.switchTo().alert();

        expect(al.getText()).toContain('awesome!');
        al.accept();
    });
})


