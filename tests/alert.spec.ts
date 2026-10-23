import { test, expect } from "@playwright/test";

test.describe('Various Alerts Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    test('Simple Alert Test', async ({ page }) => {
        page.on("dialog", async (simpleAlert) => {
            const txt = simpleAlert.message()
            console.log("Simple Alert Text: ", txt)
            await simpleAlert.accept()
        })
        await page.getByRole('button', { name: 'Simple Alert' }).click()
    })
    test('confirmation Alert Test', async ({ page }) => {
        page.on("dialog", async (alert) => {
            const txt = alert.message()
            console.log("confirmation Alert Text: ", txt)
            await alert.dismiss()
        })
        await page.getByRole('button', { name: 'Confirmation Alert' }).click()
    })
    test('Prompt Alert Test', async ({ page }) => {
        page.on("dialog", async (alert) => {
            const txt = alert.message()
            console.log("confirmation Alert Text: ", txt)
            await alert.accept("Welcome to Playwright")
        })
        await page.getByRole('button', { name: 'Prompt Alert' }).click()
        await expect(page.getByText('Hello Welcome to Playwright!')).toBeVisible()
        console.log(await page.getByText('Hello Welcome to Playwright!').textContent())

        await page.waitForTimeout(2000)

    })

    test('New Window Test', async ({ page }) => {
        //Method 1
        // const [newWindow] = await Promise.all([
        //     page.waitForEvent('popup'),
        //     await page.getByRole('button', { name: 'New Tab' }).click()
        // ])
        // await newWindow.waitForLoadState()
        // expect(newWindow).toHaveTitle(/SDET-QA/)

        //Method 2
        // const popupPromise = page.waitForEvent('popup')
        // await page.getByRole('button', { name: 'New Tab' }).click()
        // const popupWin = await popupPromise
        // await popupWin.waitForLoadState()
        // expect(popupWin).toHaveTitle(/SDET-QA/)

        //Method 3
        page.on('popup', async (popupWin) => {
            popupWin.waitForLoadState()
            await expect(popupWin).toHaveTitle(/SDET-QA/)
            const pageHeader = popupWin.getByRole('heading', { name: 'SDET-QA Blog' })
            expect(pageHeader).toBeVisible()
            expect(await pageHeader.innerText()).toBe('SDET-QA Blog')

        })
        await page.getByRole('button', { name: 'New Tab' }).click()
        await page.waitForTimeout(2000)
        await page.locator('#Wikipedia1_wikipedia-search-input').fill('Playwright')

    })

})