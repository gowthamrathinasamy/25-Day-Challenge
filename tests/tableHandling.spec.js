const { test } = require("@playwright/test");

test("Table Handling", async ({ page }) => {
// This link may have issues. So that...
  await page.goto("https://automationexercise.com/products");

  // Full Product Cards
  const products = page.locator(".product-image-wrapper");
// Just check the count
  const count = await products.count();
//Print the count
  console.log(`Count = ${count}`);
//Use For loop to get the product name and match the product
  for (let i = 0; i < count; i++) {

    // Product Name
    const productName =
    //await is impt here. We need to wait for the product name to be visible 
    // before getting the text content. Otherwise, we may get null or empty string.
      await products
        .nth(i)
        //class name (Called with . as prefix)
        //p is tag name
        .locator(".productinfo p")
        .textContent();

    console.log(productName);

    // Match Product
    if (
      productName.includes(
        "Sleeveless Unicorn Patch Gown - Pink"
      )
    ) {

      // Hover Product
      await products.nth(i).hover();

      // Click Add To Cart
      await products
        .nth(i)
        .locator(".add-to-cart")
        .first()
        .click();

      console.log("Added To Cart");

      break;

    }

  }

});
// This is table handling. We can use this to handle any table.
//  We can get the count of the rows and columns. 
// We can also get the text content of any cell. We can also perform any action on any cell.
//  We can also match the text content of any cell and perform any action on that cell. 
// This is very useful when we have dynamic tables. We can also use this to handle pagination. 
// We can also use this to handle sorting. We can also use this to handle filtering.
//  We can also use this to handle searching. We can also use this to handle any other functionality of the table.