import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('ColumnChartWithTrend', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'ColumnChartWithTrend' });
    await expect(page.locator('.recharts-responsive-container').first()).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(1);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(1);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('ColumnChartWithTrend/ColumnChartWithTrendClickTest');

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(
      JSON.stringify({ name: 'January', users: 100, sessions: 300, volume: 756 }),
    );

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates('ColumnChartWithTrend', '.recharts-bar');

  test('in Grid', async ({ mount, page }) => {
    await mount('ColumnChartWithTrend/ColumnChartWithTrendGridTest');
    const chart = page.getByTestId('ccwt');
    await expect(chart).toBeVisible();
    const box = await chart.boundingBox();
    expect(box.height).toBe(500);
    expect(box.width).toBe(500);
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount('ColumnChartWithTrend/ColumnChartWithTrendLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool('ColumnChartWithTrend');

  testPassThroughProps('ColumnChartWithTrend');
});
