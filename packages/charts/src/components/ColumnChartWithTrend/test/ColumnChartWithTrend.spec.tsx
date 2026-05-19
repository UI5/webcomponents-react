import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/sharedTests.js';
import { ColumnChartWithTrend } from '../index.js';
import {
  ColumnChartWithTrendClickTest,
  ColumnChartWithTrendGridTest,
  ColumnChartWithTrendLegendConfigTest,
} from './ColumnChartWithTrendTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users', type: 'line' as const },
  { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

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

  testLoadingStates(
    ColumnChartWithTrend,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [
        { accessor: 'users', label: 'Users', type: 'line' as const },
        { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
      ],
    },
    { dimensions: [], measures: [] },
    '.recharts-bar',
  );

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

  testZoomingTool(ColumnChartWithTrend, baseProps);

  testPassThroughProps(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
