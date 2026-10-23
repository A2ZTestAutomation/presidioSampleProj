import { test, expect } from "@playwright/test";

test.describe('Timeout Tests', () => {



    test('Test and Expect Timout Test', async ({ page }, testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 5000)
        // test.setTimeout(50000)
        test.slow()
        await page.goto('http://www.uitestingplayground.com/ajax')

        await page.getByRole('button', { name: 'Button Triggering AJAX Request' })
            .click()


        // const txtMsg = page.getByText('Data loaded with AJAX get')
        // txtMsg.waitFor({state})
        await expect(page.getByText('Data loaded with AJAX get'))
            .toBeVisible({ timeout: 10000 })

        await expect(page.getByText('Data loaded with AJAX get'))
            .toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })
        await page.waitForTimeout(20000)
    })

    test('Alternate ways of using wait - Method2', async ({ page }, testInfo) => {

        await page.goto('http://www.uitestingplayground.com/ajax')
        await page.getByRole('button', { name: 'Button Triggering AJAX Request' })
            .click({ timeout: 40000 })


        //waiting for particular element
        // await page.waitForSelector('.bg-success')
        const successMsg = page.locator('.bg-success')
        successMsg.waitFor({ state: 'visible' })
        const displayTxt = await page.locator('.bg-success').textContent()
        expect(displayTxt).toContain('Data loaded with AJAX get request.')
    })
})