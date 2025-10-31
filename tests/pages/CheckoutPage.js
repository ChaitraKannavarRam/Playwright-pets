


import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.paymentText = page.getByText('Payment Details');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.confirmButton = page.getByRole('link', { name: 'Confirm' });
    this.successMessage = page.getByText('Thank you, your order has been submitted.');
  }

  async completeCheckout() {
    await expect(this.paymentText).toBeVisible();
    await this.continueButton.click();
    await this.confirmButton.click();
    await expect(this.successMessage).toBeVisible();
  }
}
