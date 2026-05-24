//Here we go. We use mock API to set status
//We can give empty data. So, we find what will the response
//

const { test, expect } = require('@playwright/test');

test('Mock Empty API Response', async ({ page }) => {

  // Intercept API
  await page.route(
    '**/api/productsList',

    async route => {

      // Return Empty Products
      await route.fulfill({

        status: 200,

        contentType: 'application/json',

        body: JSON.stringify({

          products: []

        })

      });

    }
  );

  // Open Website
  await page.goto(
    'https://automationexercise.com/'
  );

  // Open Products Page
  await page.click('a[href="/products"]');

  console.log('Empty Mock API Executed');

});