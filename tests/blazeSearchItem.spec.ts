import { test, expect } from '@playwright/test'

test.describe('Add to Cart', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/')
    })
    test('User Logout', async ({ page }) => {
        expect(page.getByRole('link', { name: 'Log out' })).toBeVisible()

    })
})