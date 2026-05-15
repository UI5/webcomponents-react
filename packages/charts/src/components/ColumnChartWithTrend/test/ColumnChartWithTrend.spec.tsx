import { expect, test } from '@playwright/experimental-ct-react';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { ColumnChartWithTrend } from '../index.js';
import {
  ColumnChartWithTrendClickTest,
  ColumnChartWithTrendGridTest,
  ColumnChartWithTrendLegendConfigTest,
  ColumnChartWithTrendZoomingCustomTest,
  ColumnChartWithTrendZoomingDisabledTest,
  ColumnChartWithTrendZoomingEnabledTest,
} from './ColumnChartWithTrendTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users', type: 'line' as const },
  { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
];

test.describe('ColumnChartWithTrend', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrend dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    await expect(page.locator('.recharts-responsive-container').first()).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(1);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(1);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrendClickTest />);

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

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrend dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-bar')).not.toBeAttached();
    await expect(page.locator('.recharts-line')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('in Grid', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrendGridTest />);
    const chart = page.getByTestId('ccwt');
    await expect(chart).toBeVisible();
    const box = await chart.boundingBox();
    expect(box.height).toBe(500);
    expect(box.width).toBe(500);
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrendLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<ColumnChartWithTrendZoomingEnabledTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<ColumnChartWithTrendZoomingDisabledTest />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<ColumnChartWithTrendZoomingCustomTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<ColumnChartWithTrend {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });
});
