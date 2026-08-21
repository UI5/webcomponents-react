import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { data } from './test-utils/data.js';

test.describe('AnalyticalTable - Rendering', () => {
  test('Basic mount renders grid with header row and data rows', async ({ mount, page }) => {
    await mount('Rendering/RenderingBasicTestComp');

    const grid = page.locator('[data-component-name="AnalyticalTableContainer"]');
    await expect(grid).toHaveAttribute('role', 'grid');
    await expect(grid).toHaveAttribute('aria-rowcount', String(data.length));

    // Header row + column headers
    await expect(page.locator('[data-component-name="AnalyticalTableHeaderRow"]')).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Name', exact: true })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Friend Name', exact: true })).toBeVisible();

    // Data rows render their values (look inside the body to avoid header-cell ambiguity)
    const body = page.locator('[data-component-name="AnalyticalTableBody"]');
    await expect(body.getByText('A', { exact: true })).toBeVisible();
    await expect(body.getByText('Lorem', { exact: true })).toBeVisible();
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount('Rendering/RenderingPassThroughTestComp');

    const el = page.getByTestId('component-to-be-tested');
    await expect(el).toBeAttached();
    await expect(el).toHaveClass(/thisClassIsUsedForTestingPurposesOnly/);
    await expect(el).toHaveCSS('pointer-events', 'none');
    await expect(el).toHaveAttribute('aria-labelledby', 'aria-prop');
    await expect(el).toHaveAttribute('customattribute', 'true');
    await expect(el).toHaveAttribute('data-special-test-prop', 'data-prop');
    await expect(el).toHaveAttribute('id', 'element-id');
    await expect(page.locator('[title="Tooltip"]')).toBeAttached();
  });

  // SKIPPED (partial vs cypress): does not cover the `onTableScroll` "should have been called" check
  // nor the vertical `scrollToItem(1, 'start')` row-swap behavior (row "B" visible, "A" removed) —
  // here scrollToItem is only checked for existence. Retained by AnalyticalTable.cy.tsx `it('scrollTo')`.
  test.skip('Forwards ref and exposes imperative scroll methods', async ({ mount, page }) => {
    await mount('Rendering/RenderingRefForwardingTestComp');

    // Click "report" to dump the ref shape; this verifies the ref is attached
    // and that the documented scroll methods exist on the DOM node.
    await page.getByTestId('report-btn').click();
    await expect(page.getByTestId('ref-report')).toHaveText('function|function|function|function|DIV');

    // The body initially renders only the first row.
    const body = page.locator('[data-component-name="AnalyticalTableBody"]');
    await expect(body.getByText('A', { exact: true })).toBeVisible();

    // Imperative scrollTo should move the body's scrollTop to 50.
    await page.getByTestId('scroll-btn').click();
    await expect.poll(() => body.evaluate((el) => el.scrollTop)).toBe(50);
  });

  // SKIPPED (partial vs cypress): does not cover the empty+loading "content is NOT dimmed" assertion
  // (opacity !== 0.4 during the skeleton phase). Retained by AnalyticalTable.cy.tsx `it('Loading & No Data')`.
  test.skip('Loading: skeleton, busy indicator and overlay opacity', async ({ mount, page }) => {
    await mount('Rendering/RenderingLoadingTestComp');

    const skeleton = page.locator('[data-component-name="AnalyticalTableLoadingPlaceholder"]');
    const busyArea = page.locator('.ui5-busy-indicator-busy-area');
    const contentSelector =
      '[data-component-name="AnalyticalTableContainerWithScrollbar"] > :not([class*="busyIndicator"])';

    // empty + loading: skeleton visible, busy indicator hidden
    await page.getByTestId('mode-empty-loading').click();
    await expect(skeleton).toBeVisible();
    await expect(busyArea).toHaveCount(0);

    // empty + loading + alwaysShowBusyIndicator: no skeleton, busy indicator visible, overlay dimmed
    await page.getByTestId('mode-empty-loading-always-busy').click();
    await expect(skeleton).toHaveCount(0);
    await expect(busyArea).toBeVisible({ timeout: 2000 });
    await expect(page.locator(contentSelector).first()).toHaveCSS('opacity', '0.4');

    // data + loading (default delay 1s — busy indicator appears, content dimmed)
    await page.getByTestId('mode-data-loading').click();
    await expect(skeleton).toHaveCount(0);
    await expect(busyArea).toBeVisible({ timeout: 2000 });
    await expect(page.locator(contentSelector).first()).toHaveCSS('opacity', '0.4');

    // data + loading + very long delay: busy indicator should never appear within the window
    await page.getByTestId('mode-data-loading-long-delay').click();
    // Wait a moment then assert absence.
    await page.waitForTimeout(1500);
    await expect(busyArea).toHaveCount(0);
  });

  test('NoData: default empty-state copy, filter empty-state copy, and custom NoDataComponent', async ({
    mount,
    page,
  }) => {
    await mount('Rendering/RenderingNoDataTestComp');

    // Default empty-state copy
    await page.getByTestId('mode-default-empty').click();
    await expect(page.getByText('No data', { exact: true })).toBeVisible();

    // Filter-applied empty-state copy
    await page.getByTestId('mode-filtered-empty').click();
    await expect(page.getByText('No data found. Try adjusting the filter settings.')).toBeVisible();

    // Custom NoDataComponent: rendered inside the no-data container.
    await page.getByTestId('mode-custom-no-data').click();
    const noDataContainer = page.locator('[data-component-name="AnalyticalTableNoDataContainer"]');
    await expect(noDataContainer).toBeVisible();
    await expect(noDataContainer.locator('[ui5-illustrated-message]')).toBeVisible();
  });

  test('Forwards custom className and style to the outermost element', async ({ mount, page }) => {
    await mount('Rendering/RenderingClassNameStyleTestComp');

    const root = page.getByTestId('at-root');
    await expect(root).toHaveClass(/my-at-class/);
    await expect(root).toHaveCSS('margin-top', '17px');
  });
});
