import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  testLoadingStates,
  testPassThroughProps,
  testStackAggregateTotals,
  testZoomingTool,
} from '../../../test-utils/sharedTests.js';
import { ColumnChart } from '../index.js';
import {
  ColumnChartClickTest,
  ColumnChartDataPointClickTest,
  ColumnChartHighlightColorTest,
  ColumnChartLegendConfigTest,
  ColumnChartSecondYAxisTest,
} from './ColumnChartTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users' },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

test.describe('ColumnChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <ColumnChart
        dataset={complexDataSet}
        dimensions={[{ accessor: 'name', interval: 0 }]}
        measures={[
          { accessor: 'users', label: 'Users' },
          { accessor: 'sessions', label: 'Active Sessions' },
          { accessor: 'volume', label: 'Vol.' },
        ]}
      />,
    );
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ColumnChartClickTest />);

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

  testLoadingStates(
    ColumnChart,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [{ accessor: 'users', label: 'Users' }],
    },
    { dimensions: [], measures: [] },
    '.recharts-bar',
  );

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ColumnChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool(ColumnChart, baseProps);

  testPassThroughProps(ColumnChart, { dimensions: [], measures: [] });

  testStackAggregateTotals(ColumnChart, { dataset: complexDataSet.slice(0, 3), dimensions }, [
    { accessor: 'users', stackId: 'A', label: 'Users' },
    { accessor: 'sessions', stackId: 'A', label: 'Active Sessions' },
  ]);

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<ColumnChartDataPointClickTest />);

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('highlightColor', async ({ mount, page }) => {
    await mount(<ColumnChartHighlightColorTest />);

    // January has users=100 (<=200 → green), February has users=230 (>200 → red)
    const greenCells = page.locator('.recharts-bar-rectangle [fill="green"]');
    const redCells = page.locator('.recharts-bar-rectangle [fill="red"]');
    await expect(greenCells.first()).toBeAttached();
    await expect(redCells.first()).toBeAttached();
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount(<ColumnChartSecondYAxisTest />);

    // ColumnChart is vertical so secondYAxis renders as an additional YAxis
    await expect(page.locator('.recharts-yAxis')).toHaveCount(2);
  });
});
