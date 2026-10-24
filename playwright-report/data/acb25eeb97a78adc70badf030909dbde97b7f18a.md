# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoLogin.spec.ts >> Valid Login
- Location: tests\demoLogin.spec.ts:5:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  getByRole('link', { name: 'Log out' })
Expected: not visible
Received: visible

Call log:
  - Expect "not toBeVisible" getByRole('link', { name: 'Log out' }) with timeout 15000ms
  - waiting for getByRole('link', { name: 'Log out' })
    6 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
      - unexpected value "visible"
  - Test ended.

```

```yaml
- link "Log out":
  - /url: "#"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | 
  4  | 
  5  | test('Valid Login', async ({ page }) => {
  6  |     await page.goto('https://www.demoblaze.com/')
  7  |     await page.getByRole('link', { name: 'Log in' }).click()
  8  |     page.locator('#loginusername').click();
  9  |     await page.locator('#loginusername').fill('Anandhi');
  10 | 
  11 |     await page.locator('#loginpassword').fill('Anandhi');
  12 |     await page.getByRole('button', { name: 'Log in' }).click();
  13 |     await page.waitForTimeout(4000)
  14 |     expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible()
> 15 |     expect(page.getByRole('link', { name: 'Log out' })).not.toBeVisible({ timeout: 15000 })
     |                                                             ^ Error: expect(locator).not.toBeVisible() failed
  16 | })
  17 | // test('Logout Test', async ({ page }) => {
  18 | 
  19 | // })
```