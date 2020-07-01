exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4449/wd/hub',
    // webdriver-manager start --seleniumPort 4446 (run with cli)
    // netstat -anp | find "port number"
    // telnet 127.0.0.1:4446
    specs: ['test/**/specs/*spec*.js'],
    multiCapabilities: [{
        browserName: 'chrome',
        chromeOptions: {args: ['--disable-extensions']}
    }, {
        // browserName: 'firefox'
    }],
    onPrepare: function() {
        browser.driver.manage().window().maximize();

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot-', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png') ();
                done();
            })
        })
    },

    onComplete: function() {
        console.log('Test is completed');
    },
    // options to be passed to Jasmine
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
