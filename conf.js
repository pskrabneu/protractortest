exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4446/wd/hub',
    specs: ['test/**/specs/*spec*.js'],
    multiCapabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }],
    // options to be passed to Jasmine
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
