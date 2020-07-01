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
    return this.webElement.all(by.css('option[value = "' + value + '"]')).click();
}

SelectWrapper.prototype.selectByPartialText = function (text) {
    return this.webElement.all(by.cssContainingText('option', text)).click();
}

SelectWrapper.prototype.selectByText = function (text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
}
//xyKV3/^qq.zTWK4Gt54^
module.exports = SelectWrapper;






















