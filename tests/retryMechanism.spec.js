const { test, expect } =
  require('@playwright/test');

// Retry Only This File
test.describe.configure({
    //network is slow
    //browser is slow
  retries: 2
  //original test run
  //retries 1
  //retries 2
  //Sometimes we miss the bug
});

test('Retry Example', async ({ page }) => {

  await page.goto(
    'https://facebook.com/'
  );

  console.log('Test Started');

  // Intentionally Wrong Assertion
  await expect(page).toHaveTitle(
    'Wrong Title'
  );

});