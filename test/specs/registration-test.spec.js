describe('Test login page:', function() {
    const login = 'angular';
    const password = 'password';
    const descript = 'Username Description';
    const loginField = element(by.id('username'));
    const passwordField = element(by.id('password'));
    const descField = element(by.model('model[options.key]'));
    const logButton = element(by.css('button.btn.btn-danger'));
    let verifText;

    it('should open proper page', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        const title = browser.getTitle();
        expect(title).toContain('Registration');
    });

    it('should log with proper creds', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        descField.sendKeys(descript);

        logButton.click();

        verifText = element(by.css('h1.ng-scope')).getText();
        expect(verifText).toContain('Home');
    });

    it('shouldn\'t log with wrong creds', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        loginField.sendKeys('login22');
        passwordField.sendKeys('password22');
        descField.sendKeys(descript);

        logButton.click();

        verifText = element(by.binding('Auth.error')).getText();
        expect(verifText).toContain('incorrect');
    });
})















