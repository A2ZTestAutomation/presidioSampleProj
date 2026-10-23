import { test, expect } from '@playwright/test';

test('User logs out', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click()
})