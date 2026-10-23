import { test, expect } from "@playwright/test";

test.describe.configure({ mode: 'serial' })
test.describe.only('Checkbox and Radio Test Suite', { tag: ['@SmokeTest'] }, () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    test('Checkbox Test', async ({ page }) => {
        const tuesday = page.getByText('Tuesday')
        expect(tuesday).not.toBeChecked()
        await tuesday.check()
        await page.getByText('Monday').check()
        await page.getByText('Saturday').check()
        expect(tuesday).toBeChecked()
        await tuesday.uncheck()
        expect(tuesday).not.toBeChecked()
        const allCheckboxes = page.getByRole('checkbox')
        for (const chkbox of await allCheckboxes.all()) {
            await chkbox.check()
            expect(chkbox).toBeChecked()
        }

    })
    test('RadioBtn Test', async ({ page }) => {
        const gender = page.getByLabel('Male', { exact: true })
        expect(gender).not.toBeChecked()
        await gender.check()
        // expect(gender).toBeChecked()
        expect(gender).not.toBeChecked()
    })
    test('Single select Dropdown Test', async ({ page }) => {
        const countrySel = page.getByLabel('Country:')
        countrySel.scrollIntoViewIfNeeded()
        await countrySel.selectOption('India')
        expect(await countrySel.inputValue()).toBe('india')
        //Using callback function
        await countrySel.selectOption({ label: 'Germany' }).then((dropdownValue) => {
            expect(dropdownValue).toEqual(['germany'])
        })

    })

    test('Multiselect Dropdown Test', async ({ page }) => {
        const multiSel = page.getByLabel('Sorted List:')
        multiSel.scrollIntoViewIfNeeded()
        await multiSel.selectOption(
            [{ label: 'Cheetah' },
            { index: 5 },
            { value: 'lion' }
            ]
        ).then((dropdownValues) => {
            expect(dropdownValues).toEqual(['cheetah', 'fox', 'lion'])
            for (const selValue of dropdownValues) {
                console.log("Selected values from multiselect dropdown: ", selValue)
            }
        })
        console.log("Using allTextContents()")
        console.log("Using allTextContents()...", await multiSel.allTextContents())
        console.log("Using allinnerText()...", await multiSel.allInnerTexts())
        await expect(multiSel).toHaveValues(['cheetah', 'fox', 'lion'])

    })
})
