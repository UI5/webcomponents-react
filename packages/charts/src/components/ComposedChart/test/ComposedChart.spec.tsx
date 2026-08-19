import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  testLoadingStates,
  testPassThroughProps,
  testStackAggregateTotals,
  testZoomingTool,
} from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('ComposedChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'ComposedChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
    await expect(page.locator('.recharts-area-dots')).toHaveCount(1);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(1);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(1);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('ComposedChart/ComposedChartClickTest');

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates('ComposedChart', '.recharts-bar');

  test('legendConfig', async ({ mount, page }) => {
    await mount('ComposedChart/ComposedChartLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool('ComposedChart');

  testPassThroughProps('ComposedChart');

  testStackAggregateTotals('ComposedChart');

  test('layout="vertical"', async ({ mount, page }) => {
    await mount('ComposedChart/ComposedChartVerticalLayoutTest');
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    // Vertical layout swaps axes: measure axis becomes XAxis (type=number)
    await expect(page.locator('.recharts-xAxis')).toBeAttached();
    // Chart elements should still render
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
  });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount('ComposedChart/ComposedChartDataPointClickTest');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount('ComposedChart/ComposedChartSecondYAxisTest');

    // ComposedChart renders secondYAxis as an additional YAxis
    await expect(page.locator('.recharts-yAxis')).toHaveCount(2);
  });
});
