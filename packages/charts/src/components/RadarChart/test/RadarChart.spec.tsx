import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('RadarChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'RadarChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-radar')).toHaveCount(3);
    await expect(page.locator('.recharts-radar-polygon')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('RadarChart/RadarChartClickTest');

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('2');

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates('RadarChart', '.recharts-radar');

  test('legendConfig', async ({ mount, page }) => {
    await mount('RadarChart/RadarChartLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testPassThroughProps('RadarChart');

  test('onDataPointClick', async ({ mount, page }) => {
    await mount('RadarChart/RadarChartDataPointClickTest');

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
