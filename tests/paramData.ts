import { test as base } from '@playwright/test'

export type TestOptions = {
    bookname: string

}

export const test = base.extend<TestOptions>({
    bookname: ['Parry Hotter', { option: true }]
})