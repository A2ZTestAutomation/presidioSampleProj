import { test, expect } from "@playwright/test";
test.describe.configure({
    retries: 2
})
test.describe('Mouse ActionsOne Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    test('Click, Double Click and Right Click Test', async ({ page }) => {
        test.slow()

        const btnHover = page.getByRole('button', { name: 'Point Me' })
        await btnHover.hover()
        await page.getByRole('link', { name: 'Laptops' }).click()
        //        double click
        await page.getByRole('button', { name: 'Copy Text' }).dblclick()
        const copyInp = page.locator('#field2')
        expect(await copyInp.inputValue()).toBe('Hello World! Welcome')
        // expect(await copyInp.inputValue()).toBe('Hello World!')
        //Drag and Drop
        const srcElem = page.getByText('Drag me to my target')
        const destElem = page.getByText('Drop here')
        await srcElem.dragTo(destElem)
        //Right click
        // await page.locator('#Wikipedia1_wikipedia-search-input').click({ button: 'right' })

    })
})

test.describe('Mouse ActionsTwo Test', () => {

    test.beforeAll(async () => {
        console.log('Before tests');
    });
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    test('Scroll Test', async ({ page }) => {
        const btnHover = page.getByRole('button', { name: 'Point Me' })
        // btnHover.scrollIntoViewIfNeeded()
        await page.waitForTimeout(2000)
        // await page.mouse.wheel(0, 800)
        await page.keyboard.press('PageDown')
        await btnHover.evaluate((btn) =>
            btn.scrollTop += 700)
    })
    test('Screenshot Test', async ({ page }) => {
        await page.screenshot({ path: './screenshot/fullPage.png', fullPage: true })
        await page.screenshot({ path: './screenshot/viewPage.png' })
        await page.getByRole('button', { name: 'Point Me' }).screenshot({ path: './screenshot/btnHover.png' })

    })


})