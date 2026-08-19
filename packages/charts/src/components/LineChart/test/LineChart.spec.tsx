import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('LineChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'LineChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-line')).toHaveCount(3);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(3);
    await expect(page.locator('.recharts-brush')).not.toBeAttached();
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('LineChart/LineChartClickTest');

    await page.locator('.recharts-line-dot[name="Users"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates('LineChart', '.recharts-line');

  test('legendConfig', async ({ mount, page }) => {
    await mount('LineChart/LineChartLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool('LineChart');

  testPassThroughProps('LineChart');

  test('onDataPointClick', async ({ mount, page }) => {
    await mount('LineChart/LineChartDataPointClickTest');

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
