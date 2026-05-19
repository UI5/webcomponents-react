import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  testLoadingStates,
  testPassThroughProps,
  testStackAggregateTotals,
  testZoomingTool,
} from '../../../test-utils/sharedTests.js';
import { BarChart } from '../index.js';
import {
  BarChartClickTest,
  BarChartDataPointClickTest,
  BarChartHighlightColorTest,
  BarChartLegendConfigTest,
  BarChartSecondYAxisTest,
} from './BarChartTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users' },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

test.describe('BarChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<BarChart {...baseProps} />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<BarChartClickTest />);

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

  testLoadingStates(BarChart, baseProps, { dimensions: [], measures: [] }, '.recharts-bar');

  test('legendConfig', async ({ mount, page }) => {
    await mount(<BarChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool(BarChart, baseProps);

  testPassThroughProps(BarChart, { dimensions: [], measures: [] });

  testStackAggregateTotals(BarChart, { dataset: complexDataSet.slice(0, 3), dimensions }, [
    { accessor: 'users', stackId: 'A', label: 'Users' },
    { accessor: 'sessions', stackId: 'A', label: 'Active Sessions' },
  ]);

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<BarChartDataPointClickTest />);

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('highlightColor', async ({ mount, page }) => {
    await mount(<BarChartHighlightColorTest />);

    // January has users=100 (<=200 → green), February has users=230 (>200 → red)
    await expect(page.locator('.recharts-bar-rectangle [fill="green"]').first()).toBeAttached();
    await expect(page.locator('.recharts-bar-rectangle [fill="red"]').first()).toBeAttached();
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount(<BarChartSecondYAxisTest />);
    // BarChart is horizontal so the secondary "Y" axis renders as an additional XAxis
    await expect(page.locator('.recharts-xAxis')).toHaveCount(2);
  });
});
