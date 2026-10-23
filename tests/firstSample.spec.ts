import { test, expect } from "@playwright/test";

test.describe('Sample Locator Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    test('Sample Locator Test', async ({ page }) => {

        await page.getByRole('link', { name: 'PlaywrightPractice' }).click()
        const userInp = page.getByLabel('Username:')
        await userInp.fill('TestUser')
        await userInp?.focus()
        await page.keyboard.press('End')
        await userInp?.fill(' Training')

        const btnStr = page.getByText('START')
        await btnStr.click()

        const stopBtn = page.getByRole('button', { name: 'STOP' })
        await expect(stopBtn).toBeVisible()

        await expect(stopBtn).toHaveText('STOP')
        await expect(stopBtn).not.toHaveText('START')
        expect(await stopBtn.textContent()).toBe('STOP')

        console.log("User entered Input: " + await userInp.inputValue())
        expect(await userInp.inputValue()).toBe('TestUser')
        expect(userInp).toHaveValue('TestUser')

    })
    test('To get text from multiple elements', async ({ page }) => {
        const listItems = page.locator('div#PageList2 ul li')

        //Method 1: Using for loop
        expect(await listItems.count()).toBe(5)
        console.log("Items from for loop")
        for (let i = 0; i < await listItems.count(); i++) {
            const itemTxt = await listItems.nth(i).textContent()
            console.log(itemTxt)
            if (itemTxt?.includes('Blog')) {
                listItems.nth(i).click()
                await expect(page).toHaveTitle(/Blog/)
                break
            }
        }
        //Method 2: Using evaluateAll
        const allItemTxt = await listItems.evaluateAll(elements =>
            elements.map((element) => element.textContent))
        console.log("All Text content from evaluate: ", allItemTxt)

        //Method 3:SElecting specific element using filter
        // await listItems.nth(2).click()
        await listItems.filter({ hasText: 'Blog' }).click()



    })
})