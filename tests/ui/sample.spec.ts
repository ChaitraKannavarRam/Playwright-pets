import { test, expect } from '@playwright/test';

test('home page has pet store title', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await expect(page).toHaveTitle(/JPetStore/);
  await expect(page.locator('a[href*="signonForm"]')).toBeVisible();
});
