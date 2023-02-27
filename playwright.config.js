// @ts-check
const { devices } = require('@playwright/test');


const config = {
  testDir: './e2e/test',
  //retries : 3,
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  
  expect: {
    
    timeout: 50000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    actionTimeout: 50000,

    ignoreHTTPSErrors: true,

    headless: false,

    navigationTimeout: 50000,

    screenshot: 'on',

    trace: 'on',

    channel:'chrome'

    
  },

  
  
};

module.exports = config;
