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
    },
    // options to be passed to Jasmine
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
