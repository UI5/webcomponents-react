import { expect } from '@playwright/experimental-ct-react';
import { test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import {
  SelectDialogBasicTestComp,
  SelectDialogHeaderTestComp,
  SelectDialogSelectionWithToggleTestComp,
  SelectDialogSearchTestComp,
  SelectDialogConfirmButtonTextTestComp,
  SelectDialogNumberOfSelectedItemsTestComp,
  SelectDialogCancelWithToggleTestComp,
  SelectDialogConfirmButtonPropsTestComp,
} from './SelectDialogTestComponents.js';

test.describe('SelectDialog', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<SelectDialogBasicTestComp />);
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await expect(page.locator('[ui5-input][placeholder="Search"]')).toBeVisible();
    await page.getByText('Cancel').click();
    await expect(page.locator('[ui5-dialog]')).not.toBeVisible();
  });

  test('with headerText', async ({ mount, page, ui5wc }) => {
    await mount(<SelectDialogHeaderTestComp />);
    const header = page.getByText('Select Dialog');
    await expect(header).toHaveCSS('grid-column-start', 'titleStart');
    await expect(header).toHaveCSS('grid-column-end', 'titleCenter');
    await expect(header).toHaveAttribute('level', 'H1');

    await ui5wc.closePopupWithEsc();
    await page.getByTestId('toggle-center').click();
    await page.getByTestId('open-btn').click();
    await expect(header).toHaveCSS('grid-area', 'titleCenter');
    await expect(header).toHaveAttribute('level', 'H1');

    await ui5wc.closePopupWithEsc();
    await page.getByTestId('set-h2').click();
    await page.getByTestId('open-btn').click();
    await expect(header).toHaveAttribute('level', 'H2');
  });

  test('selection', async ({ mount, page, ui5wc }) => {
    await mount(<SelectDialogSelectionWithToggleTestComp />);
    const list = page.locator('[ui5-list]');

    // Single mode - no rememberSelections
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await list.getByText('Product1').click();
    await expect(page.locator('[ui5-dialog]')).not.toBeVisible();
    await expect(page.getByTestId('selected-items')).toHaveText('Last Selected Item: Product1');
    await page.getByTestId('open-btn').click();
    const listItems = page.locator('[ui5-li]');
    for (let i = 0; i < 5; i++) {
      await expect(listItems.nth(i)).not.toHaveAttribute('selected');
    }
    await ui5wc.closePopupWithEsc();

    // Single mode - with rememberSelections
    await page.getByTestId('toggle-remember').click();
    await page.getByTestId('open-btn').click();
    await list.getByText('Product1').click();
    await expect(page.locator('[ui5-dialog]')).not.toBeVisible();
    await expect(page.getByTestId('selected-items')).toHaveText('Last Selected Item: Product1');
    await page.getByTestId('open-btn').click();
    await expect(list.locator('[ui5-li][text="Product1"]')).toHaveAttribute('selected');
    for (const text of ['Product0', 'Product2', 'Product3', 'Product4']) {
      await expect(list.locator(`[ui5-li][text="${text}"]`)).not.toHaveAttribute('selected');
    }
    await ui5wc.closePopupWithEsc();

    await expect(page.getByTestId('close-count')).toHaveText('4');
    await expect(page.getByTestId('confirm-count')).toHaveText('2');
    await expect(page.getByTestId('change-count')).toHaveText('2');

    // Close via Cancel and Escape
    await page.getByTestId('reset').click();
    await page.getByTestId('open-btn').click();
    await page.getByText('Cancel').click();
    await expect(page.locator('[ui5-dialog]')).not.toBeVisible();
    await expect(page.getByTestId('close-count')).toHaveText('5');

    await page.getByTestId('open-btn').click();
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await ui5wc.closePopupWithEsc();

    await expect(page.getByTestId('close-count')).toHaveText('6');
    await expect(page.getByTestId('confirm-count')).toHaveText('2');
    await expect(page.getByTestId('change-count')).toHaveText('2');

    // Multiple mode - no rememberSelections
    await page.getByTestId('reset').click();
    await page.getByTestId('set-multiple').click();
    await page.getByTestId('open-btn').click();
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await list.getByText('Product1').click();
    await list.getByText('Product3').click();
    await page.getByRole('button', { name: 'Select' }).click();
    await expect(page.getByTestId('selected-items')).toHaveText('Last Selected Item: Product1Product3');

    await page.getByTestId('open-btn').click();
    for (let i = 0; i < 5; i++) {
      await expect(listItems.nth(i)).not.toHaveAttribute('selected');
    }

    // Multiple mode - with rememberSelections
    await page.getByText('Cancel').click();
    await page.getByTestId('toggle-remember').click();
    await page.getByTestId('open-btn').click();
    await list.getByText('Product1').click();
    await list.getByText('Product3').click();
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await page.getByRole('button', { name: 'Select' }).click();
    await expect(page.getByTestId('selected-items')).toHaveText('Last Selected Item: Product1Product3');
    await page.getByTestId('open-btn').click();
    await expect(list.locator('[ui5-li][text="Product1"]')).toHaveAttribute('selected');
    await expect(list.locator('[ui5-li][text="Product3"]')).toHaveAttribute('selected');
    for (const text of ['Product0', 'Product2', 'Product4']) {
      await expect(list.locator(`[ui5-li][text="${text}"]`)).not.toHaveAttribute('selected');
    }
    await ui5wc.closePopupWithEsc();

    await expect(page.getByTestId('close-count')).toHaveText('10');
    await expect(page.getByTestId('confirm-count')).toHaveText('4');
    await expect(page.getByTestId('change-count')).toHaveText('6');
  });

  test('Search', async ({ mount, page, ui5wc }) => {
    await mount(<SelectDialogSearchTestComp />);
    await expect(page.locator('[accessible-name="Reset"][ui5-icon]')).not.toBeVisible();

    const input = page.locator('[ui5-input]');
    await ui5wc.typeIntoInput(input, 'Test');
    await expect(page.getByTestId('input-val')).toHaveText('input: Test');
    await expect(page.getByTestId('search-count')).toHaveText('0');
    await expect(page.getByTestId('input-count')).toHaveText('1');
    await expect(page.getByTestId('reset-count')).toHaveText('0');

    await input.locator('input').press('Enter');
    await expect(page.getByTestId('search-val')).toHaveText('search: Test');
    await expect(page.getByTestId('search-count')).toHaveText('1');
    await expect(page.getByTestId('input-count')).toHaveText('1');
    await expect(page.getByTestId('reset-count')).toHaveText('0');

    await page.locator('[accessible-name="Search"][ui5-icon]').click();
    await expect(page.getByTestId('search-count')).toHaveText('2');
    await expect(page.getByTestId('input-count')).toHaveText('1');
    await expect(page.getByTestId('reset-count')).toHaveText('0');

    await page.locator('[part="clear-icon"][ui5-icon]').click();
    await expect(page.getByTestId('search-count')).toHaveText('2');
    // clearing the input via clear button fires input event as well
    await expect(page.getByTestId('input-count')).toHaveText('2');
    await expect(page.getByTestId('reset-count')).toHaveText('1');
    await expect(page.locator('[accessible-name="Reset"][ui5-icon]')).not.toBeVisible();
  });

  test('confirmButtonText', async ({ mount, page }) => {
    await mount(<SelectDialogConfirmButtonTextTestComp />);
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await page.getByText('Exterminate').click();
    await expect(page.getByTestId('confirm-count')).toHaveText('1');
    await expect(page.locator('[ui5-dialog]')).not.toBeVisible();
  });

  test('numberOfSelectedItems', async ({ mount, page }) => {
    await mount(<SelectDialogNumberOfSelectedItemsTestComp />);
    await expect(page.getByText('Selected: 1337')).toBeVisible();
  });

  test('onCancel', async ({ mount, page, ui5wc }) => {
    await mount(<SelectDialogCancelWithToggleTestComp />);

    // Single mode
    await page.getByTestId('open-btn').click();
    await page.getByText('Cancel').click();
    await expect(page.getByTestId('cancel-count')).toHaveText('1');

    await page.getByTestId('open-btn').click();
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await ui5wc.closePopupWithEsc();
    await expect(page.getByTestId('cancel-count')).toHaveText('2');

    // Multiple mode
    await page.getByTestId('set-multiple').click();
    await page.getByTestId('open-btn').click();
    await page.getByText('Cancel').click();
    await expect(page.getByTestId('cancel-count')).toHaveText('3');

    await page.getByTestId('open-btn').click();
    await expect(page.locator('[ui5-dialog]')).toBeVisible();
    await ui5wc.closePopupWithEsc();
    await expect(page.getByTestId('cancel-count')).toHaveText('4');
  });

  test('confirmButtonProps', async ({ mount, page }) => {
    await mount(<SelectDialogConfirmButtonPropsTestComp />);
    const btn = page.getByTestId('confirmBtn');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('disabled');
    await expect(btn).toHaveAttribute('design', 'Emphasized');
  });
});
