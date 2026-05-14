const { test, expect } = require('@playwright/test');

// Run tests in a single worker
test.describe.configure({ mode: 'serial' });

test.describe('Playwright Hooks Example', () => {

  test.beforeAll(async () => {
    // Runs only ONCE before all tests
    console.log('beforeAll: Runs one time before all tests');
  });

  test.beforeEach(async ({ page }) => {
    // Runs before every test
    console.log('beforeEach: Runs before each test');

    await page.goto('https://example.cypress.io');
  });

  test.afterEach(async () => {
    // Runs after every test
    console.log('afterEach: Runs after each test');
  });

  test.afterAll(async () => {
    // Runs only ONCE after all tests
    console.log('afterAll: Runs one time after all tests');
  });

  test('Test 1 - Verify Kitchen Sink text', async ({ page }) => {

    await expect(page.locator('text=Kitchen Sink')).toBeVisible();

  });

  test('Test 2 - Simple Playwright assertion', async () => {

    expect(true).toBe(true);

  });

});