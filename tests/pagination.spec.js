const { test } = require("@playwright/test");

test("Pagination Testing", async ({ page }) => {
//Launch website
  await page.goto(
    "https://testautomationpractice.blogspot.com/"
  );
//Get Pagination Numbers
  // Pagination Numbers
  const pages =
    page.locator(".pagination li a");
//count the pagination numbers
//Don't forget to use await here. Otherwise, we may get 0 or null.
  // Total Pages
  const pageCount =
    await pages.count();
//Print the total pages
  console.log(`Total Pages = ${pageCount}`);

  // Loop Through Pages
  //Click pages one by one
  for (let p = 0; p < pageCount; p++) {

    // Click Page Number
    await pages.nth(p).click();

    console.log(`Page ${p + 1} Opened`);

    // Table Rows
    //go through the table rows and get the product name.
    const rows =
      page.locator("#productTable tbody tr");
//Count the rows
    const rowCount =
      await rows.count();

    // Loop Rows
    for (let i = 0; i < rowCount; i++) {

      // Product Name
      const productName =
        await rows
          .nth(i)
          .locator("td")
          .nth(1)
          .textContent();

      console.log(productName);

    }

  }

});