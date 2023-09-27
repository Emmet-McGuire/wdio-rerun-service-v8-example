const { Given, When } = require('@wdio/cucumber-framework');

Given(/^I navigate to google$/, async () => {
    await browser.url("https://www.google.com")
});

When(/^My test fails$/, async () => {
    expect(1).toBe(2);
});