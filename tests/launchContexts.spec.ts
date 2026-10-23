import { chromium, test, expect } from '@playwright/test'

test('Launch Context ...', async () => {
    const browser = await chromium.launch({
        headless: false
    })
    const contextOne = await browser.newContext()
    const pageOne = await contextOne.newPage()
    await pageOne.setViewportSize({ width: 1080, height: 720 })
    await pageOne.goto('https://jqueryui.com/autocomplete/')
    await pageOne.waitForTimeout(4000)


    //One more page in a new tab
    const pageOneNew = await contextOne.newPage()
    await pageOneNew.setViewportSize({ width: 1080, height: 720 })
    await pageOneNew.goto('https://www.demoblaze.com/')
    await pageOneNew.waitForTimeout(4000)

    const contextTwo = await browser.newContext()
    const pageTwo = await contextTwo.newPage()
    await pageTwo.setViewportSize({ width: 900, height: 520 })
    await pageTwo.goto('https://playwright.dev/')
    await pageOne.waitForTimeout(2000)


})