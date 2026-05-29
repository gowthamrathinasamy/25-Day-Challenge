const { defineConfig, devices } = require('@playwright/test');

require('dotenv').config();

module.exports = defineConfig({
  // Test Folder
  testDir: './tests',
  // Parallel Execution
  fullyParallel: true,
  // Retry Failed Tests
  retries: 2,
  // Workers
  workers: 4,
  // Reporter
  reporter: 'html',
  // Global Timeout
  timeout: 60000,
  // Expect Timeout
  expect: {
    timeout: 10000
  },

  use: {
    // Base URL
    baseURL:
      'https://automationexercise.com/',
    // Browser UI Visible
    headless: false,
    // Screenshot on Failure
    screenshot: 'only-on-failure',
    // Video Recording
    video: 'retain-on-failure',
    // Trace for Debugging
    trace: 'on-first-retry',
    // Browser Size
    viewport: {
      width: 1400,
      height: 800
    },

    // HTTPS Ignore
    ignoreHTTPSErrors: true
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    },
  ]

});