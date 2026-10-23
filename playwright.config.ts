import { defineConfig, devices } from '@playwright/test';

export const ADMIN_STORAGAE_STATE = 'auth/admin.json'
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // testMatch: ['',''],
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  // retries: 2,


  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  // workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['json', { outputFile: 'results.json' }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  // grepInvert: [new RegExp('@SmokeTest')],

  use: {
    headless: false,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.URLS === '1' ? 'https://danube-webshop.herokuapp.com/' : 'http://www.ivagus.com',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
    geolocation: { longitude: -81.515755, latitude: 27.664827, accuracy: 100 },
    permissions: ['geolocation'],



  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },

    // {
    //   name: 'setup',
    //   testMatch: '**/*.setup.ts'
    // },
    // {
    //   name: 'Chrome',
    //   // fullyParallel:true,
    //   dependencies: ['setup'],
    //   use: {
    //     ...devices['Desktop Chrome'], channel: 'chrome',
    //     storageState: ADMIN_STORAGAE_STATE
    //   },
    // }
    {
      name: 'Chrome',
      // fullyParallel:true,
      use: {
        ...devices['Desktop Chrome'], channel: 'chrome',
      },
    }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
