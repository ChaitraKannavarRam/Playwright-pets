import { expect } from '@playwright/test';

export class CatalogPage {
  constructor(page) {
    this.page = page;
    this.dogsLink = page.locator('a[href*="categoryId=DOGS"]');
    this.bulldogLink = page.getByRole('link', { name: 'K9-BD-' });
    this.addToCartButton = page.getByRole('link', { name: 'Add to Cart' });
    this.proceedToCheckout = page.getByRole('link', { name: 'Proceed to Checkout' });
  }

  async selectDogsCategory() {
    await this.dogsLink.first().click();
    await expect(this.page).toHaveURL(/categoryId=DOGS/);
  }

  async selectBulldog() {
    await this.bulldogLink.click();
    await expect(this.page).toHaveURL(/productId=K9-BD-01/);
  }

  async addToCart() {
    await this.addToCartButton.first().click();
    await expect(this.page.getByText('Bulldog')).toBeVisible();
  }

  async proceedToCheckoutPage() {
    await this.proceedToCheckout.click();
  }
}
