const { test } = require('@playwright/test');

const {
  clickElement,
  fillText,
  waitForElement
} = require('../utils/commonUtils');

test('Reusable Utility Function Example', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await fillText(
    page.locator('input[data-qa="login-email"]'),
    process.env.ADMIN_USERNAME
  );

  await fillText(
    page.locator('input[data-qa="login-password"]'),
    process.env.ADMIN_PASSWORD
  );

  await clickElement(
    page.locator('button[data-qa="login-button"]')
  );
  
  const logoutLink = await waitForElement(page.locator('a[href="/logout"]'));

  if (await logoutLink.isVisible()) {

    console.log('Login successful');

  }

});
