import { test } from '@playwright/test';
import { hyundaiPage } from '../pages/objectClass';



test.beforeEach(async ({ page }) => {
    const mackoy = new hyundaiPage(page);
    console.log('login...')
    await mackoy.gotothiswebsite();
    await mackoy.login('standard_user','secret_sauce');
});

test('Add to cart', async ({ page }) => {
    const mackoy = new hyundaiPage(page);
    console.log('add to cart...')
    await mackoy.addcart();
});

test('Log out', async ({ page }) => {
    const mackoy = new hyundaiPage(page);
    console.log('logout.....')
    await mackoy.logout();
});
