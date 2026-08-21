import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { testPassThroughProps } from '../../../../../../playwright/test-factories/sharedComponentTests.js';
import { AnalyticalTable } from '../index.js';
import {
  RenderingLoadingTestComp,
  RenderingNoDataTestComp,
  RenderingRefForwardingTestComp,
} from './RenderingTestComponents.js';
import { columns, data } from './test-utils/data.js';

test.describe('AnalyticalTable - Rendering', () => {
  test('Basic mount renders grid with header row and data rows', async ({ mount, page }) => {
    await mount(<AnalyticalTable data={data} columns={columns} />);

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

  testPassThroughProps(AnalyticalTable, { data, columns });

  test('Forwards ref and exposes imperative scroll methods', async ({ mount, page }) => {
    await mount(<RenderingRefForwardingTestComp />);

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

  test('Loading: skeleton, busy indicator and overlay opacity', async ({ mount, page }) => {
    await mount(<RenderingLoadingTestComp />);

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
    await mount(<RenderingNoDataTestComp />);

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
    await mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        data-testid="at-root"
        className="my-at-class"
        style={{ marginTop: '17px' }}
      />,
    );
    const root = page.getByTestId('at-root');
    await expect(root).toHaveClass(/my-at-class/);
    await expect(root).toHaveCSS('margin-top', '17px');
  });
});
