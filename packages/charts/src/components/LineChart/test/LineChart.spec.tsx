import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/sharedTests.js';
import { LineChart } from '../index.js';
import {
  LineChartClickTest,
  LineChartDataPointClickTest,
  LineChartLegendConfigTest,
} from './LineChartTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users' },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

test.describe('LineChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <LineChart
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
    await expect(page.locator('.recharts-line')).toHaveCount(3);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(3);
    await expect(page.locator('.recharts-brush')).not.toBeAttached();
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<LineChartClickTest />);

    await page.locator('.recharts-line-dot[name="Users"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates(
    LineChart,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [{ accessor: 'users', label: 'Users' }],
    },
    { dimensions: [], measures: [] },
    '.recharts-line',
  );

  test('legendConfig', async ({ mount, page }) => {
    await mount(<LineChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool(LineChart, baseProps);

  testPassThroughProps(LineChart, { dimensions: [], measures: [] });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<LineChartDataPointClickTest />);

    // LineChart fires onDataPointClick via activeDot — hover to trigger the active dot, then click it
    const firstDot = page.locator('.recharts-line-dot[name="Users"]').first();
    await firstDot.hover();
    const activeDot = page.locator('.recharts-active-dot').first();
    await activeDot.click({ force: true });
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });
});
