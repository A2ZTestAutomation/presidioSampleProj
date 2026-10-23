//Keep data ready  and after test write into log
import { test as base, expect } from '@playwright/test'
import fs from 'fs'
import debug from 'debug'

export const test = base.extend({
    testData: async ({ }, use) => {
        const data = { username: 'standard_user', password: 'secret_sauce' }
        await use(data)
    },
    saveLogs: [async ({ }, use, testInfo) => {
        // Collecting logs during the test.
        const logs = [];
        debug.log = (...args) => logs.push(args.map(String).join(''));
        debug.enable('myserver');

        await use();

        // After the test we can check whether the test passed or failed.
        if (testInfo.status !== testInfo.expectedStatus) {
            // outputPath() API guarantees a unique file name.
            const logFile = testInfo.outputPath('logs.txt');
            await fs.promises.writeFile(logFile, logs.join('\n'), 'utf8');
            testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });
        }
    }, { auto: true }],


})


//Manual Fixture
// test('test', async ({ page, testData }) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill(testData.username);
//     await page.locator('[data-test="password"]').fill(testData.password);
//     await page.locator('[data-test="login-button"]').click();
//     await expect(page.locator('[data-test="title"]')).toContainText('Products');
// })

//Automatic Fixture - savelog, testDAta as manual Fixture
test('test', async ({ page, testData }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(testData.username);
    await page.locator('[data-test="password"]').fill(testData.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('ProductOne');
})
