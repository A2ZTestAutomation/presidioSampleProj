import { test, expect } from '@playwright/test';

test.only('has title', { tag: ['@RegTest'] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //Page assertion
  expect(page).toHaveURL('https://playwright.dev/')
  expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
  const pageTitle = await page.title()
  expect(pageTitle).toContain('Playwright')
  // Click the get started link.
  const getBtn = page.getByRole('link', { name: 'Get started' })
  await expect(getBtn).not.toBeVisible()
  // await expect.soft(getBtn).not.toBeVisible()

  await expect(getBtn).toBeVisible()

  //Avoid running further if there were 4 soft assert failure.
  // expect(test.info().errors).toHaveLength(2)




  expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro')

  expect(page.getByRole('link', { name: 'Get started' })).toHaveJSProperty('className', 'getStarted_Sjon')
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});