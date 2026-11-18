import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('MessageView - accessibility', () => {
  test('showDetailsPageHeader: focuses the Navigate Back button and announces the message', async ({ mount, page }) => {
    await mount('MessageView/WithDetailsPageHeader');

    await page.locator('[data-title="Password too short"]').click();

    // focus moves to the Navigate Back button
    const navBack = page.locator('[data-component-name="MessageViewDetailsNavBackBtn"]');
    await expect(navBack).toBeFocused();

    // the message (value state + title) is announced, not a generic string
    await expect(page.locator('.ui5-invisiblemessage-assertive')).toHaveText('Error Password too short');
  });

  test('showDetailsPageHeader={false}: app moves focus to its own back button via onItemSelect', async ({
    mount,
    page,
  }) => {
    await mount('MessageView/InDialogWithoutHeader');
    const dialog = page.locator('[ui5-dialog]');
    await expect(dialog).toBeVisible();

    await page.locator('[data-title="Password too short"]').click();

    // MessageView renders no details-page header and does not manage focus here
    await expect(page.locator('[data-component-name="MessageViewDetailsNavBackBtn"]')).toHaveCount(0);

    // the app's onItemSelect handler moves focus to its own (interactive) back button, keeping focus in the dialog
    const backButton = page.getByTestId('dialog-back');
    await expect(backButton).toBeFocused();
    await expect(dialog.getByTestId('dialog-back')).toHaveCount(1);
  });
});
