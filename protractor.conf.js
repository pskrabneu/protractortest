exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4449/wd/hub',
    // webdriver-manager start --seleniumPort 4446 (run with cli)
    specs: ['test/**/specs/*spec*.js'],

    suites: {
        testCurrent: ['test/specs/banking-app-dataprovider.spec.js'],
        calculator: ['test/specs/calculator-test*.spec.js'],
        testBankingApp: ['test/specs/bank-manager-login.spec.js'],
        testAppinium: ['test/specs/proappinium-test.spec.js']
    },

    multiCapabilities: [{
        browserName: 'chrome'
    }, {
        // browserName: 'firefox'
    }],
    onPrepare: function () {
        browser.driver.manage().window().maximize();

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot-', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        })
    },

    onComplete: function () {
        console.log('Test is completed');
    },
    // options to be passed to Jasmine
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};


// protractor protractor.conf.js --suite testCurrent
