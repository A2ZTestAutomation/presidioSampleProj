import { test as base, expect } from '@playwright/test'
let counter = 0

const test = base.extend({
    counterFixture: async ({ }, use) => {
        counter++
        await use(counter)
    }
    // { scope: 'worker' }

})

test('Test 1 - using fixture', async ({ counterFixture }) => {
    console.log(`Test 1 - counter value : ${counterFixture}`)
})
test('Test 2 - using fixture', async ({ counterFixture }) => {
    console.log(`Test 1 - counter value : ${counterFixture}`)
})
test('Test 3 - using fixture', async ({ counterFixture }) => {
    console.log(`Test 1 - counter value : ${counterFixture}`)
})