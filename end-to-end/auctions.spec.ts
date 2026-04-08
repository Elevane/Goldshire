import { test } from '@playwright/test';
test('Auctions page loads', async ({ page }) => {
  await page.goto('/auctions');
});