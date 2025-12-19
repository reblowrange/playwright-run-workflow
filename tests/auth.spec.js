const { test, expect } = require('@playwright/test');
/* 
test('authenticate', async ({ page }) => {
  // Navigate to site and open login
  await page.goto('https://bitheap.tech');
  await page.click('#menu-item-2330');

  // Fill credentials from environment variables
  await page.fill("[name='xoo-el-username']", process.env.BITHEAP_USERNAME || '');
  await page.fill("[name='xoo-el-password']", process.env.PASS || '');

  // Submit the login form
  await page.click('xpath=/html/body/div[8]/div[2]/div/div/div[2]/div/div/div[2]/div/form/button');

  // Assert that the authenticated user link appears
  await expect(page.locator('#menu-item-2333 > a')).toHaveText('Hello, Playwright', { timeout: 5000 });
});
 */