import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('Modals.showDialog', () => {
  test('preventInitialFocus is applied before the dialog opens', async ({ mount, page }) => {
    await mount('Modals/ModalsPreventInitialFocus');

    await page.getByTestId('open-dialog').click();

    // The `open` event fires only after the dialog applied its initial focus, so waiting
    // for it guarantees the focus decision has already been made before we assert on it.
    await expect(page.getByTestId('opened-flag')).toHaveText('opened');
    await expect(page.locator('[ui5-dialog]')).toBeVisible();

    // With preventInitialFocus, focus must not be moved into the dialog...
    await expect(page.getByTestId('dialog-close')).not.toBeFocused();
    // ...it stays on the opener instead.
    await expect(page.getByTestId('open-dialog')).toBeFocused();
  });
});
