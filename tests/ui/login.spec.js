import { test, expect } from '@playwright/test';

test('User can login successfully', async ({ page }) => {
  // Step 1: Go to homepage
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // Step 2: Click on "Sign In" link
  await page.getByRole('link', { name: 'Sign In' }).click();

  // Step 3: Fill in username and password (fixed)
  await page.locator('input[name="username"]').fill('j2ee');
  await page.locator('input[name="password"]').fill('j2ee');

  // Step 4: Click on "Login" button
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Verify login success — “Welcome” text visible
  await expect(page.getByText('Welcome')).toBeVisible();

  // Step 6: Log out
  await page.getByRole('link', { name: 'Sign Out' }).click();

  // Step 7: Verify logout success
  await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
});
