import { test, expect } from '@playwright/test';

test.describe('Login into app', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
    });

    test('menu - user1', async ({ page }) => {
        await page.waitForTimeout(5000)
        // const loginUsr = await page.locator('a#nameofuser')
        // await expect(loginUsr).toContainText('Welcome')
        await expect(page.getByRole('link', { name: 'Anandhi' })).toBeVisible();
    })



    test('Search Item', async ({ page }) => {
        await page.waitForTimeout(5000)
        await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible();
    })
    //   test('User logs out', async ({ page }) => {


})