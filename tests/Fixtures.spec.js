//1. page Fixture Example
// Use this, When just an normal automation. Because You directly create a new page and use.
const { test } = require('@playwright/test');

test('Page Fixture Example', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.click('a[href="/login"]');

});


//2. browser Fixture Example
// Use this, When you want to create multiple pages in a single test. Because You directly create a new page and use.
const { test } = require('@playwright/test');

test('Browser Fixture Example', async ({ browser }) => {

  const page = await browser.newPage();

  await page.goto('https://automationexercise.com/');

});

// 3. context Fixture Example
// Use this, When you use token based authentication. Because You can create a new context and set the token in the context and use it in all the pages created from that context.

const { test } = require('@playwright/test');

test('Context Fixture Example', async ({ browser }) => {

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://automationexercise.com/');

});


// 4. request Fixture Example
// Use this, When you want to test the API. Because You can directly use the request fixture to make API calls and test the responses.
const { test, expect } = require('@playwright/test');

test('Request Fixture Example', async ({ request }) => {

  const response = await request.post(
    'https://automationexercise.com/api/productsList'
  );

  expect(response.status()).toBe(200);

});
