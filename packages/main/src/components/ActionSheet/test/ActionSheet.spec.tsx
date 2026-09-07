import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('ActionSheet', () => {
  test('Tab does not move focus or escape the popover', async ({ mount, page }) => {
    await mount('ActionSheet/ActionSheetKeyboardTestComp');
    await expect(page.locator('[ui5-responsive-popover]')).toBeVisible();

    const btn = (index: number) => page.locator(`[data-action-btn-index="${index}"]`);

    await expect(btn(0)).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await expect(btn(1)).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(btn(1)).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(btn(1)).toBeFocused();
  });
});
