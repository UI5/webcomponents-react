import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  testLoadingStates,
  testPassThroughProps,
  testStackAggregateTotals,
  testZoomingTool,
} from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('BarChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'BarChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('BarChart/BarChartClickTest');

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-value')).toHaveText('Users');

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Vol.' }).click();
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('volume');
  });

  testLoadingStates('BarChart', '.recharts-bar');

  test('legendConfig', async ({ mount, page }) => {
    await mount('BarChart/BarChartLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool('BarChart');

  testPassThroughProps('BarChart');

  testStackAggregateTotals('BarChart');

  test('onDataPointClick', async ({ mount, page }) => {
    await mount('BarChart/BarChartDataPointClickTest');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('highlightColor', async ({ mount, page }) => {
    await mount('BarChart/BarChartHighlightColorTest');

    // January has users=100 (<=200 → green), February has users=230 (>200 → red)
    await expect(page.locator('.recharts-bar-rectangle [fill="green"]').first()).toBeAttached();
    await expect(page.locator('.recharts-bar-rectangle [fill="red"]').first()).toBeAttached();
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount('BarChart/BarChartSecondYAxisTest');
    // BarChart is horizontal so the secondary "Y" axis renders as an additional XAxis
    await expect(page.locator('.recharts-xAxis')).toHaveCount(2);
  });
});
