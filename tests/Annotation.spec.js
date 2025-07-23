const { test, chromium } = require('@playwright/test');

//Annotation
//only , skip , fail ,fixme, slow, @smoke , @reg   

test.beforeEach(async ({ page }) => {
    test.setTimeout(90000);

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    //await page.locator('[data-test="login-button"]').click();

    //LOCATE BY OBJECT ( CSS SELETOR , TEXT , XPATH ETC )
    //right click the loign button , right click again the whole element and copy -> copy selector

    //USING CSS SLECTOR
    //await page.locator('#login-button').click();  

    //USING TEXT
    await page.locator('text=LOGIN').click();


});
// to put test.only if you only run that certain test case
//test.only ('Add to cart', async ({ page }) => {


//Annotation skip
// test.skip('skip', async ({ page }) => {
//     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//     await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//     await page.locator('[data-test="item-5-title-link"]').click();
//     await page.locator('[data-test="add-to-cart"]').click();
// });


//Annotation fail
test('fail', async ({ page }) => {
    test.fail();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="item-5-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
});

//Annotation only
test.only('testonly', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="item-5-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
});

test('Log out', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});


