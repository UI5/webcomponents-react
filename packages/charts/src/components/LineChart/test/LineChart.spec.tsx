import { expect, test } from '@playwright/experimental-ct-react';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { LineChart } from '../index.js';
import {
  LineChartClickTest,
  LineChartDataPointClickTest,
  LineChartLegendConfigTest,
  LineChartZoomingCustomTest,
  LineChartZoomingDisabledTest,
  LineChartZoomingEnabledTest,
} from './LineChartTestComponents.js';

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

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<LineChart dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-line')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<LineChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<LineChartZoomingEnabledTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<LineChartZoomingDisabledTest />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<LineChartZoomingCustomTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<LineChart {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });

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
