import { expect, test } from '@playwright/test';

test('Auctions page loads', async ({ page }) => {
  await page.goto('/auctions');
  await expect(page.locator("text=404")).not.toBeVisible()
});

