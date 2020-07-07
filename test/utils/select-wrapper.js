var SelectWrapper = function (selector) {
    this.webElement = element(selector);
};

SelectWrapper.prototype.getOptions = function () {
    return this.webElement.all(by.tagName('option'));
};

SelectWrapper.prototype.getSelectedOptions = function () {
    return this.webElement.all(by.css('option[selected="selected"]'));
};

SelectWrapper.prototype.selectByValue = function () {
    return this.webElement.all(by.css('option[value = "' + value + '"]'));
}

SelectWrapper.prototype.selectByPartialText = function (text) {
    return this.webElement.all(by.cssContainingText('option', text));
}

SelectWrapper.prototype.selectByText = function (text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]'));
}

// define new locator
by.addLocator('dataHook', (hook) => {
    return document.querySelector('[data-hook="'
        + hook
        + '"]');
})

by.addLocator('ngClick', (text) => {
    return document.querySelector('[ng-click="'
        + text
        + '"]');
})


/*SelectWrapper.prototype.selectByNgClick = function (text) {
    return this.webElement.all(by.css('[ng-click="' + text + '"]'));
}*/

module.exports = SelectWrapper;























