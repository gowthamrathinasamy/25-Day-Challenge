const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
require('dotenv').config();

test.describe('Multiple Login Tests', () => {
  const loginData = require('../testData/loginData');

  for (const { email, password } of loginData) {
    test(`Login Test for ${email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.login(email, password);
    });
  }
});