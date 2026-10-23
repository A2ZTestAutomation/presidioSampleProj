

import { test, expect } from "@playwright/test";

test.describe('WebTable Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })
    test('Getting count of rows and columns Test', async ({ page }) => {
        const tableRows = await page.locator('#productTable tbody tr').all()
        console.log('No. of Rows....', tableRows.length)
        expect(tableRows.length).toEqual(5)
        tableRows.forEach(async (row) => {
            console.log('No. of Columns.....', await row.locator('td').count())

        })
    })

    test('Getting details of an user ', async ({ page }) => {
        const table1 = page.locator('#productTable tbody')
        const userData = table1.getByRole('row', { name: 'Laptop' })
        //  const txts= userData.allTextContents()
        console.log('Laptop details....', await userData.allTextContents())
        console.log('Laptop details....', await userData.allInnerTexts())
        //Method1
        // const firstRowTxt = await table1.locator('tr').nth(0).locator(':scope')
        //     .allTextContents()
        const firstRowTxt = await table1.locator('tr').nth(0).allTextContents()
        console.log('First Row Text....', firstRowTxt)
        //Method2
        const texts = await userData.locator('td').evaluateAll(col =>
            col.map(element => element.textContent));
        console.log('All Text Contents from Map:   ', texts[2])

    })
})
