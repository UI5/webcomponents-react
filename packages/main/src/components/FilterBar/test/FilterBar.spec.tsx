import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('FilterBar', () => {
  test('FilterBarSearchIcon triggers the search handler when the icon is activated', async ({ mount, page, ui5wc }) => {
    await mount('FilterBar/WithInteractiveSearchIcon');

    const searchInput = page.locator('[ui5-input]').first();
    await ui5wc.typeIntoInput(searchInput, 'quarterly report');

    await expect(page.getByTestId('search-click-count')).toHaveText('0');

    await page.locator('[ui5-input-icon]').click();

    await expect(page.getByTestId('search-click-count')).toHaveText('1');
    await expect(page.getByTestId('submitted-term')).toHaveText('quarterly report');
  });

  test('the default search icon is decorative, not an interactive InputIcon', async ({ mount, page }) => {
    await mount('FilterBar/WithDefaultSearchIcon');

    await expect(page.locator('[ui5-input]').first()).toBeVisible();
    // the forced default icon is a plain, decorative ui5-icon in the slot - no interactive ui5-input-icon is rendered
    await expect(page.locator('[ui5-input-icon]')).toHaveCount(0);
  });
});
