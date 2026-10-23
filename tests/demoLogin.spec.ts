import { test, expect } from '@playwright/test'



test('Valid Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    await page.getByRole('link', { name: 'Log in' }).click()
    page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('Anandhi');

    await page.locator('#loginpassword').fill('Anandhi');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(4000)
    expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible()
    expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({ timeout: 15000 })
})