import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import {
  FilteringCustomPopoverTestComp,
  FilteringDefaultFilterInputTestComp,
  FilteringHeaderMenuMechanicsTestComp,
} from './FilteringTestComponents.js';
import { openColumnHeaderMenu } from './test-utils/helpers.js';

test.describe('AnalyticalTable - Filtering', () => {
  test('Header menu open/close mechanics: aria-haspopup, disableFilters/Sort/Group, open/close round-trip', async ({
    mount,
    page,
  }) => {
    // Without `sortable`/`filterable`/`groupable`, the Name column header has no menu and clicking it is a no-op.
    const { unmount } = await mount(<FilteringHeaderMenuMechanicsTestComp />);
    const nameHeader = page.locator('[data-column-id="name"]');
    await expect(nameHeader).not.toHaveAttribute('aria-haspopup', 'menu');
    await nameHeader.click();
    await expect(page.locator('[ui5-popover]')).toHaveCount(0);
    await unmount();

    // With `sortable`, the Name column now has `aria-haspopup="menu"` and clicking opens the header popover.
    await mount(<FilteringHeaderMenuMechanicsTestComp withSortable />);
    const nameHeaderSortable = page.locator('[data-column-id="name"]');
    await expect(nameHeaderSortable).toHaveAttribute('aria-haspopup', 'menu');
    await nameHeaderSortable.click();
    const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
    await expect(popover).toBeVisible();

    // The Age column has `disableSortBy`/`disableFilters`/`disableGroupBy`, so it has no menu indicator
    // and clicking it closes any open popover.
    const ageHeader = page.locator('[data-column-id="age"]');
    await expect(ageHeader).not.toHaveAttribute('aria-haspopup', /.*/);
    await ageHeader.click();
    await expect(popover).toHaveCount(0);
  });

  test('Default Filter input inside header menu filters body rows by accessor value', async ({ mount, page }) => {
    await mount(<FilteringDefaultFilterInputTestComp />);

    const body = page.locator('[data-component-name="AnalyticalTableBody"]');
    // Initial: all 4 names rendered.
    await expect(body.getByText('Alice', { exact: true })).toBeVisible();
    await expect(body.getByText('Bob', { exact: true })).toBeVisible();
    await expect(body.getByText('Carol', { exact: true })).toBeVisible();
    await expect(body.getByText('Alex', { exact: true })).toBeVisible();

    // Open the Name header menu.
    const popover = await openColumnHeaderMenu(page, 'Name');

    // The default filter input is the only ui5-input inside the popover.
    const filterInput = popover.locator('[ui5-input]');
    await expect(filterInput).toBeVisible();

    // Type "Al" via the shadow native input (matches Alice + Alex; excludes Bob, Carol).
    await filterInput.locator('input').fill('Al');

    await expect(body.getByText('Alice', { exact: true })).toBeVisible();
    await expect(body.getByText('Alex', { exact: true })).toBeVisible();
    await expect(body.getByText('Bob', { exact: true })).toHaveCount(0);
    await expect(body.getByText('Carol', { exact: true })).toHaveCount(0);

    // Clear the input — all rows restored.
    await filterInput.locator('input').fill('');
    await expect(body.getByText('Alice', { exact: true })).toBeVisible();
    await expect(body.getByText('Bob', { exact: true })).toBeVisible();
    await expect(body.getByText('Carol', { exact: true })).toBeVisible();
    await expect(body.getByText('Alex', { exact: true })).toBeVisible();
  });

  test('Custom column-level Popover replaces the default header menu', async ({ mount, page }) => {
    await mount(<FilteringCustomPopoverTestComp />);

    // Clicking the Name column (no custom Popover) opens the default ATHeaderPopover.
    await openColumnHeaderMenu(page, 'Name');
    await expect(page.getByTestId('popover')).not.toBeAttached();

    // Clicking the Custom Popover column closes the default menu and opens the custom Popover.
    await page.getByText('Custom Popover', { exact: true }).click();
    await expect(page.locator('[data-component-name="ATHeaderPopover"]')).toHaveCount(0);
    await expect(page.getByTestId('popover')).toBeVisible();

    // Clicking the in-popover "Close Popover" button closes the custom popover; the default menu stays closed.
    await page.getByText('Close Popover', { exact: true }).click();
    await expect(page.getByTestId('popover')).not.toBeVisible();
    await expect(page.locator('[data-component-name="ATHeaderPopover"]')).toHaveCount(0);
  });
});
