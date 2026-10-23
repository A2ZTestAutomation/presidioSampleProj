import { expect } from '@playwright/test';
import { test as testData } from './customFixture.spec'

test('test', async ({ page, testData }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(testData.username);
    await page.locator('[data-test="password"]').fill(testData.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
});