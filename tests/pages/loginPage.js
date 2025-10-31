import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.welcomeText = page.getByText('Welcome');
    this.signOutLink = page.getByRole('link', { name: 'Sign Out' });
  }

  async goto() {
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  }

  async login(username, password) {
    await this.signInLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.welcomeText).toBeVisible();
  }

  async logout() {
    await this.signOutLink.click();
    await expect(this.page.getByRole('link', { name: 'Sign In' })).toBeVisible();
  }
}
