describe('Open Appinium page', function () {
    it('should open right page', function () {
        browser.get('https://login.salesforce.com/?un=sysadmin@provar41.com&pw=password123');
        expect(browser.getTitle()).toContain('Course');
    });
})
