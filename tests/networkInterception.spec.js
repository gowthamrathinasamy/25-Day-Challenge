const { test } = require('@playwright/test');

test('Network Interception Example', async ({ page }) => {

  // Capture All Requests
  //page.on -> To Listen For Events On The Page Object
  //request.url() -> To Get The URL Of The Request
  //request.method() -> To Get The HTTP Method Of The Request (e.g., GET, POST)
  page.on('request', request => {

    console.log(
      'Request URL:',
      request.url()
    );

    console.log(
      'Request Method:',
      request.method()
    );

  });

  // Capture All Responses
  //response.url() -> To Get The URL Of The Response
  //response.status() -> To Get The HTTP Status Of The Response
  page.on('response', response => {

    console.log(
      'Response URL:',
      response.url()
    );

    console.log(
      'Response Status:',
      response.status()
    );

  });

  // Open Website
  // We call Url after declared pagr.on to capture all the request and response of the page. If we call before, we will not capture the request and response of the page.
  //May be runtime error
  await page.goto(
    'https://automationexercise.com/'
  );

  // Click Products
  await page.click('a[href="/products"]');

});