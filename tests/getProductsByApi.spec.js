const { test, expect, request } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test('Get Products by API', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_PASSWORD
  );

  const apiContext = await request.newContext();

  const response = await apiContext.get(
    'https://automationexercise.com/api/productsList'
  );
  //incase of its post need to pass the body as well in the request.post('https://automationexercise.com/api/productsList', {
  //   data: {
  //     key: 'value'
  //   }
  // });

  expect(response.status()).toBe(200);

  const responseBody = await response.text();

  const productsList = JSON.parse(responseBody);

  console.log(productsList);

});