import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 1100, height: 980 } })
test('Sample Visual Testing', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveScreenshot()
})