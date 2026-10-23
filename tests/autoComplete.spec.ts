import { test, expect } from "@playwright/test";

test.describe('IFrame, Autocomplete and Tooltip tests', { tag: ['@SmokeTest'] }, () => {
    const expTxt = "JavaScrip"
    test('AutoComplete Test', async ({ page }) => {
        await page.goto('https://jqueryui.com/autocomplete/')
        const frame = page.frameLocator('.demo-frame')
        const input = frame.getByRole('textbox')
        await input.fill('as')
        await page.waitForTimeout(5000)
        const suggestions = frame.locator('ul#ui-id-1 li')

        const count = await suggestions.count()
        console.log("Total suggestions count: ", count)
        for (let i = 0; i < count; i++) {
            console.log('Value of i....', i)
            console.log('Value at expText ....', expTxt)
            const suggestionText = await suggestions.nth(i).textContent()
            console.log("Suggestion text: ", suggestionText)
            // page.pause()

            // page.waitForTimeout(10000)
            if (suggestionText?.toLowerCase() === expTxt.toLowerCase()) {
                console.log("Found the expected text!")
                await suggestions.nth(i).click()
                break
            }
        }
        expect(input).toHaveText('JavaScript')


        // suggestions.filter({ hasText: expTxt }).first().click()
        //include expectation to verify the selected value


    })

    test('Tooltip Test', async ({ page }) => {
        await page.goto('https://jqueryui.com/tooltip/')
        const frame = page.frameLocator('.demo-frame')
        const input = frame.getByRole('textbox')
        await input.hover()

    })
})
