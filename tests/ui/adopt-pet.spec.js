// import { test, expect } from '@playwright/test';

// test('User can adopt a pet and complete checkout', async ({ page }) => {
//   // Step 1: Go to homepage
//   await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

//   // Step 2: Click on "Sign In" and login
//   await page.getByRole('link', { name: 'Sign In' }).click();
//   await page.locator('input[name="username"]').fill('j2ee');
//   await page.locator('input[name="password"]').fill('j2ee');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Welcome')).toBeVisible();

//   // Step 3: Click on “Dogs” category
// //   await page.getByRole('image', { name: 'DOGS' }).click();
//   await page.locator('a[href*="DOGS"]').first().click();
//   await expect(page).toHaveURL(/categoryId=DOGS/);

//   // Step 4: Click on a breed (Bulldog)
//   await page.getByRole('link', { name: 'K9-BD-' }).click();
//   await expect(page).toHaveURL(/productId=K9-BD-01/);

//   // Step 5: Click on a specific dog item (first one in list)
//   await page.getByRole('link', { name: 'Add to Cart' }).first().click();

//   // Step 6: Verify item is in cart
//   await expect(page.getByText('Bulldog')).toBeVisible();
//   await expect(page.getByText('Sub Total')).toBeVisible();

//   // Step 7: Proceed to Checkout
//   await page.getByRole('link', { name: 'Proceed to Checkout' }).click();

//   // Step 8: Confirm shipping info page appears
//   await expect(page.getByText('Payment Details')).toBeVisible();

//   // Step 9: Confirm order
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: 'Confirm' }).click();

//   // Step 10: Verify order success
//   await expect(page.getByText('Thank you, your order has been submitted.')).toBeVisible();

//   // Step 11: Logout
//   await page.getByRole('link', { name: 'Sign Out' }).click();
// });

// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/loginPage.js'
// import { CatalogPage } from '../pages/CatalogPage.js';
// import { CheckoutPage } from '../pages/CheckoutPage.js';

// test('User can adopt a pet and checkout successfully', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const catalogPage = new CatalogPage(page);
//   const checkoutPage = new CheckoutPage(page);

//   // Login
//   await loginPage.goto();
//   await loginPage.login('j2ee', 'j2ee');

//   // Adopt pet
//   await catalogPage.selectDogsCategory();
//   await catalogPage.selectBulldog();
//   await catalogPage.addToCart();
//   await catalogPage.proceedToCheckoutPage();

//   // Checkout
//   await checkoutPage.completeCheckout();

//   // Logout
//   await loginPage.logout();
// });

import { test } from '../fixtures/test-base.js';
import { CatalogPage } from '../pages/CatalogPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.beforeAll(async () => {
  console.log('🚀 Starting test suite...');
});

test.afterAll(async () => {
  console.log('✅ Finished all tests!');
});


test('User can adopt a pet using logged-in session', async ({ loggedInPage }) => {
  const page = loggedInPage;
  const catalogPage = new CatalogPage(page);
  const checkoutPage = new CheckoutPage(page);

  await catalogPage.selectDogsCategory();
  await catalogPage.selectBulldog();
  await catalogPage.addToCart();
  await catalogPage.proceedToCheckoutPage();

  await checkoutPage.completeCheckout();
});
