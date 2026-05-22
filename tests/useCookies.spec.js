const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Reuse Cookies', async ({ page, context }) => {

  // Load Cookies File
  //JSON.parse -> To Convert JSON String Back To JavaScript Object
  //fs.readFileSync -> To Read Data From A File Synchronously
   // 'cookies.json' -> Name of the file where cookies are saved
   // The cookies variable will hold the JavaScript object representation of the cookies that were previously saved in the 'cookies.json' file. This allows us to reuse these cookies for subsequent requests or sessions.  
  const cookies = JSON.parse(
    fs.readFileSync('cookies.json')
  );

  // after parse, The Cookies.json converted into cookies object and stored in cookies variable

  // Add Cookies
  await context.addCookies(cookies);

  // Open Website
  await page.goto(
    'https://automationexercise.com/'
  );


  // Validate User Logged In
  await expect(
    page.locator('a[href="/logout"]')
  ).toBeVisible();

  console.log('Cookies Reused Successfully');

});