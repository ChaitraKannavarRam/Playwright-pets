import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

export const test = base.extend({
    // custom fixture: loggedInPage
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('j2ee', 'j2ee');
        await use(page);
        await loginPage.logout();
    },
});
