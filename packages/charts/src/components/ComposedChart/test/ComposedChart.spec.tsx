import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  testLoadingStates,
  testPassThroughProps,
  testStackAggregateTotals,
  testZoomingTool,
} from '../../../test-utils/sharedTests.js';
import { ComposedChart } from '../index.js';
import {
  ComposedChartClickTest,
  ComposedChartDataPointClickTest,
  ComposedChartLegendConfigTest,
  ComposedChartSecondYAxisTest,
  ComposedChartVerticalLayoutTest,
} from './ComposedChartTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users', type: 'line' as const },
  { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
  { accessor: 'volume', label: 'Vol.', type: 'area' as const },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

test.describe('ComposedChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <ComposedChart
        dataset={complexDataSet}
        dimensions={[{ accessor: 'name', interval: 0 }]}
        measures={[
          { accessor: 'users', label: 'Users', type: 'line' },
          { accessor: 'sessions', label: 'Active Sessions', type: 'bar' },
          { accessor: 'volume', label: 'Vol.', type: 'area' },
        ]}
      />,
    );
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
    await expect(page.locator('.recharts-area-dots')).toHaveCount(1);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(1);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(1);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ComposedChartClickTest />);

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates(
    ComposedChart,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [{ accessor: 'users', label: 'Users', type: 'bar' }],
    },
    { dimensions: [], measures: [] },
    '.recharts-bar',
  );

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ComposedChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool(ComposedChart, baseProps);

  testPassThroughProps(ComposedChart, { dimensions: [], measures: [] });

  testStackAggregateTotals(ComposedChart, { dataset: complexDataSet.slice(0, 3), dimensions }, [
    { accessor: 'users', stackId: 'A', label: 'Users', type: 'bar' as const },
    { accessor: 'sessions', stackId: 'A', label: 'Active Sessions', type: 'bar' as const },
  ]);

  test('layout="vertical"', async ({ mount, page }) => {
    await mount(<ComposedChartVerticalLayoutTest />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    // Vertical layout swaps axes: measure axis becomes XAxis (type=number)
    await expect(page.locator('.recharts-xAxis')).toBeAttached();
    // Chart elements should still render
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
  });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<ComposedChartDataPointClickTest />);

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount(<ComposedChartSecondYAxisTest />);

    // ComposedChart renders secondYAxis as an additional YAxis
    await expect(page.locator('.recharts-yAxis')).toHaveCount(2);
  });
});
