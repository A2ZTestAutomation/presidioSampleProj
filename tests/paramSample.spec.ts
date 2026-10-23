import { expect } from '@playwright/test';
import { test } from './paramData'
import { bookList } from '../testData/books.json'

// const booklist = ['Parry Hotter', 'Haben oder haben']
// for (const bookname of booklist) {
//     test(`test with ${bookname}`, async ({ page }) => {
//         await page.goto('https://danube-webshop.herokuapp.com/')
//         await page.getByRole('textbox').fill(bookname)
//         await page.getByRole('button', { name: 'Search' }).click()

//     })
// }

// test('Test reading from ProjectParam', async ({ page, bookname }) => {
//     await page.goto('https://danube-webshop.herokuapp.com/')
//     await page.getByRole('textbox').fill(bookname)
//     await page.getByRole('button', { name: 'Search' }).click()

// })

// test('Test reading as process environment', async ({ page }) => {
//     // await page.goto('https://danube-webshop.herokuapp.com/')
//     await page.goto(process.env.BASE_URL)
//     await page.getByRole('textbox').fill(process.env.BOOKTWO)
//     await page.getByRole('button', { name: 'Search' }).click()

// })

//Reading from .json file
bookList.forEach((book, index) => {
    test(`test with book ${index + 1}`, async ({ page }) => {
        await page.goto('https://danube-webshop.herokuapp.com/')
        await page.getByRole('textbox').fill(book.bookName)
        await page.getByRole('button', { name: 'Search' }).click()

    })
})