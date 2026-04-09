
import test, { expect } from "@playwright/test";

test('home page load', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("text=404")).not.toBeVisible()
});