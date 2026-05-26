const { test } =
  require('@playwright/test');

// Run Same File Tests Parallel
test.describe.configure({
  mode: 'parallel'
});

test('Login Test', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/'
  );

  console.log('Login Test');

});


test('Products Test', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/products'
  );

  console.log('Products Test');

});

test('Cart Test', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/view_cart'
  );

  console.log('Cart Test');

});