// const config = {
//     reporter: 'html',
// };
// module.exports = config;

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['line'],
    ['allure-playwright'],
  ],
  use: {
     headless: true,
  slowMo: 1000,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure',
},
retries: 1, // re-run failed test once
  workers: 3,
});

//allure serve allure-results



// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   use: {
//     headless: true,
//     baseURL: 'https://petstore.octoperf.com/actions/Catalog.action',
//   },
//   reporter: [
//     ['html', { outputFolder: 'playwright-report', open: 'never' }],
//     ['line'], // shows progress in terminal
//   ],
//   retries: 1, // re-run failed test once
//   workers: 3, // run 3 tests in parallel
// });
