const { expect } = require("@playwright/test");
const { TIMEOUT } = require("node:dns");

class LoginPage{
    constructor(page){
        this.page = page;
    }
    async login(username, password){
        // Navigate to login page
        await this.page.goto('https://automationexercise.com/login', {
            waitUntil: 'domcontentloaded'
            });
        // Fill in username and password
        const emailInput = this.page.locator('input[data-qa="login-email"]');
        const passwordInput = this.page.locator('input[data-qa="login-password"]');

        await emailInput.fill(username);
        await passwordInput.fill(password);
        // Click login button
        await this.page.waitForTimeout(2000);
        const loginButton = this.page.locator('button[data-qa="login-button"]');
        await loginButton.click();
        await this.page.waitForTimeout(5000);
        if (await this.page.locator('a[href="/logout"]').isVisible()) {
        console.log('Login successful');
        }
        else {
        console.log('Login failed');
        }
}
}
module.exports = LoginPage;