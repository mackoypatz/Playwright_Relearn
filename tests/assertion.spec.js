import { test, expect } from '@playwright/test';

test('assertion', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');


  //await page.pause();

  //The purpose of assertion is to verify that the actual behavior of the application matches the expected result.
  // Assertion: Check if the element with the text "The Kitchen" is PRESENT
  //await expect(page.locator('text=The Kitchen')).toHaveCount(1);

  //Assertion: Check if the element is VISIBLE
  await expect(page.locator('text=The Kitchen')).toBeVisible();

  //Assertion:Check if the element is tobeEnabled
  //await expect(page.locator('text=The Kitchen')).toBeEnabled();

});