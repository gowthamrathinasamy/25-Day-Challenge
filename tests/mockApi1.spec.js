const { test, expect } = require('@playwright/test');

test('Mock API Example', async ({ page }) => {

  // Intercept API
  //Mock API will use, When Frontend is ready but backend is not ready.
  // We Create Route For The API We Want To Mock.
  await page.route(
    '**/api/productsList',

    async route => {

      // Return Fake Response
      await route.fulfill({
// We provide status
        status: 200,
//We provide content type
        contentType: 'application/json',
//Previously I mentioned. Json.strigify is used to convert JavaScript objects into JSON strings.
        body: JSON.stringify({
//This is response body. 
          products: [

            {
              id: 1,
              name: 'Mock Product'
            },

            {
              id: 2,
              name: 'Playwright Product'
            }

          ]

        })

      });

    }
  );

  // Open Website
  await page.goto(
    'https://automationexercise.com/'
  );

  // Open Products Page
  //While clicking this, Instead of real API call. 
  //The Mock API Will Be Called And We Will Get The Fake Response Which We Created In The Mock API.
  await page.click('a[href="/products"]');

  console.log('Mock API Executed');

});
//You may think, Why we need to use this. Let's I explain