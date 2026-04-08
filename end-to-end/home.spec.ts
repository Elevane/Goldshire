
import test from "@playwright/test";

test('home page load', async ({ page }) => {
    await page.goto('/');
});