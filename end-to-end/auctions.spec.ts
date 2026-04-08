import { test, expect } from '@playwright/test';

test('Auctions page loads and displays data', async ({ page }) => {
  await page.goto('/auctions');
  await expect(page.locator('svg.animate-spin')).toBeVisible();
  await expect(page.locator('svg.animate-spin')).toBeHidden();
  await expect(page.getByRole('table')).toBeVisible();
  await expect(page.locator('text=No auctions found').or(page.getByRole('cell').first())).toBeVisible();
});