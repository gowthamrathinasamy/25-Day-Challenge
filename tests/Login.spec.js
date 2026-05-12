const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
require('dotenv').config();
test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
});