import { Given, When, Then } from '@cucumber/cucumber';

//import LoginPage from '../features/pageobjects/login.page';
//import SecurePage from '../features/pageobjects/secure.page';

// const pages = {
//     login: LoginPage
// }

Given(/^I visit homepage$/, function() {
    browser.url("https://www.seleniumeasy.com/test/")
});

When(/^I refresh the page$/, function() {
    browser.refresh();
});

Then(/^I should get access to page$/, function() {
    browser.element("//a[contains(text(),'Demo Home')]").isdisplayed();
    var actualurl = browser.getUrl("");
    console.log("Hello World !!")
});



Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

