import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js"

describe('Login Text', () => {
    it('Test 3 - Successfully Login - Page Object Based', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.validateOnHomePage();
        await browser.pause(5000);
    });

    it('Test 4 - Successfully Login - Page Object Based', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.validateWrongPasswordDisplayed();
    });
});