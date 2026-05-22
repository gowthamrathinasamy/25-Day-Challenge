const { test } = require('@playwright/test');

test('Get Session Storage', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/'
  );

  // Add Session
  //page.evaluate means we are executing JavaScript code in the context of the page. 
  await page.evaluate(() => {

    sessionStorage.setItem(
      'userName',
      'Gowtham'
    );

  });

  // Get Session Value
  const sessionValue = await page.evaluate(() => {

    return sessionStorage.getItem(
      'userName'
    );

  });

  console.log(sessionValue);

});