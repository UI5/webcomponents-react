import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/sharedTests.js';
import { RadarChart } from '../index.js';
import {
  RadarChartClickTest,
  RadarChartDataPointClickTest,
  RadarChartLegendConfigTest,
} from './RadarChartTestComponents.js';

test.describe('RadarChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <RadarChart
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
    await expect(page.locator('.recharts-radar')).toHaveCount(3);
    await expect(page.locator('.recharts-radar-polygon')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<RadarChartClickTest />);

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('2');

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates(
    RadarChart,
    {
      dataset: complexDataSet,
      dimensions: [{ accessor: 'name', interval: 0 }],
      measures: [{ accessor: 'users', label: 'Users' }],
    },
    { dimensions: [], measures: [] },
    '.recharts-radar',
  );

  test('legendConfig', async ({ mount, page }) => {
    await mount(<RadarChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testPassThroughProps(RadarChart, { dimensions: [], measures: [] });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<RadarChartDataPointClickTest />);

    // RadarChart fires onDataPointClick via activeDot on <Radar>.
    // Hover the chart to activate a data index, making the active dot appear.
    const wrapper = page.locator('.recharts-wrapper');
    const box = await wrapper.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height * 0.35);
    const activeDot = page.locator('.recharts-active-dot');
    await expect(activeDot.first()).toBeAttached();
    // Use dispatchEvent because Playwright clicks on SVG circles don't reliably trigger React synthetic events in recharts
    await page.evaluate(() => {
      const dot =
        document.querySelector('.recharts-active-dot circle') || document.querySelector('.recharts-active-dot');
      if (dot) {
        dot.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      }
    });
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-payload')).not.toHaveText('');
  });
});
