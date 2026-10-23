import { test, expect } from "@playwright/test";
import fs from "fs"


test('File upload Test', async ({ page }) => {

    const filePath1 = './screenshot/viewPage.png'
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#singleFileInput').click()

    //Method1
    // await page.setInputFiles('#singleFileInput', filePath1)
    // await page.getByRole('button', { name: 'Upload Single File' }).click()

    //Method 2
    const filechooserPromise = page.waitForEvent('filechooser')
    await page.locator('#singleFileInput').click()
    const fileChooser = await filechooserPromise
    await fileChooser.setFiles(filePath1)
    await page.getByRole('button', { name: 'Upload Single File' }).click()
    await expect(page.getByText('Single file selected:')).toContainText('viewPage.png')
})

test('File download Test', async ({ page }) => {
    test.setTimeout(120000)


    await page.goto('https://the-internet.herokuapp.com/download')
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'hello.txt' }).click()
    ])
    await download.saveAs('./downloadedFiles/hello.txt')
    const fileName = './downloadedFiles/' + download.suggestedFilename()
    const fileExists = fs.existsSync(fileName)
    expect(fileExists).toBe(true)

    const fileContent = fs.readFileSync(fileName, 'utf-8')
    console.log('File content is ....', fileContent)

})

test('ShadowDOM  test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const domElem = page.locator('div#nested_shadow_content')
    console.log('Shadow dom element text .....', await domElem.textContent())
})