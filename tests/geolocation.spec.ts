import { test, expect } from "@playwright/test";

test.use(
    {
        locale: 'en-US',
        geolocation: { longitude: -81.515755, latitude: 27.664827, accuracy: 100 },
        permissions: ['geolocation']
    }
)
test('Geolocation Test', async ({ page }) => {
    await page.goto('https://my-location.org/')
    const address = page.locator('#address')
    // await expect(address).toContainText('Chennai')
    await expect(address).toContainText('FL')

})