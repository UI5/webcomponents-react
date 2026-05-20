import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/sharedTests.js';
import { BulletChart } from '../index.js';
import {
  BulletChartClickTest,
  BulletChartDataPointClickTest,
  BulletChartLegendConfigTest,
  BulletChartVerticalLayoutTest,
} from './BulletChartTestComponents.js';

const dimensions = [{ accessor: 'name', interval: 0 }];
const measures = [
  { accessor: 'users', label: 'Users', type: 'primary' as const },
  { accessor: 'sessions', label: 'Active Sessions', type: 'comparison' as const },
  { accessor: 'volume', label: 'Vol.', type: 'additional' as const },
];
const baseProps = { dataset: complexDataSet, dimensions, measures };

test.describe('BulletChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <BulletChart
        dataset={complexDataSet}
        dimensions={[{ accessor: 'name', interval: 0 }]}
        measures={[
          { accessor: 'users', label: 'Users', type: 'primary' },
          { accessor: 'sessions', label: 'Active Sessions', type: 'comparison' },
          { accessor: 'volume', label: 'Vol.', type: 'additional' },
        ]}
      />,
    );
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<BulletChartClickTest />);

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-value')).toHaveText('Users');

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Vol.' }).click();
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('volume');
  });

  testLoadingStates(
    BulletChart,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [{ accessor: 'users', label: 'Users', type: 'primary' as const }],
    },
    { dimensions: [], measures: [] },
    '.recharts-bar',
  );

  test('legendConfig', async ({ mount, page }) => {
    await mount(<BulletChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool(BulletChart, baseProps);

  testPassThroughProps(BulletChart, { dimensions: [], measures: [] });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<BulletChartDataPointClickTest />);

    // make sure not to click the label, as currently the event is only fired when the actual bar is clicked.
    const firstBar = page.locator('.recharts-bar-rectangle path').first();
    await firstBar.waitFor();
    const box = await firstBar.boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height - 3);
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-payload')).not.toHaveText('');
  });

  test('layout="vertical"', async ({ mount, page }) => {
    await mount(<BulletChartVerticalLayoutTest />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    // Vertical layout renders bars along Y axis and uses XAxis for values
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-xAxis')).toBeAttached();
  });
});
