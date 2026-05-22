const { test, expect } = require('@playwright/test');
//fs -> File System
const fs = require('fs');

//You need "Context" to Save and Reuse Cookies
test('Save Cookies', async ({ page, context }) => {

  // Open Login Page
  await page.goto(
    'https://automationexercise.com/login'
  );

  // Login
  await page.fill(
    'input[data-qa="login-email"]',
    process.env.ADMIN_USERNAME
  );

  await page.fill(
    'input[data-qa="login-password"]',
    process.env.ADMIN_PASSWORD
  );

  await page.click(
    'button[data-qa="login-button"]'
  );

  // Validate Login
  await expect(
    page.locator('a[href="/logout"]')
  ).toBeVisible();

  //Login Is done, Now Save Cookies
  console.log('Login Successful');

  // Save Cookies
  // Save cookies in cookies variable
  const cookies = await context.cookies();

  //fs -> File System Module
  //fs.writeFileSync -> To Write Data To A File Synchronously
  // 'cookies.json' -> Name of the file where cookies will be saved
    // JSON.stringify(cookies, null, 2) -> Convert cookies object to a JSON string with indentation for readability
    //We use stringify to convert the cookies object into a JSON string format, which can be easily saved to a file. The 'null' parameter is used to indicate that we don't want to modify the structure of the object, and '2' is used to add indentation for better readability in the resulting JSON file.
  fs.writeFileSync(
    'cookies.json',
    JSON.stringify(cookies, null, 2)
  );

  console.log('Cookies Saved');

});