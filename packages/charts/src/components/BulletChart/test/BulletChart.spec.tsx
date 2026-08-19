import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps, testZoomingTool } from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('BulletChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'BulletChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('BulletChart/BulletChartClickTest');

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

  testLoadingStates('BulletChart', '.recharts-bar');

  test('legendConfig', async ({ mount, page }) => {
    await mount('BulletChart/BulletChartLegendConfigTest');
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testZoomingTool('BulletChart');

  testPassThroughProps('BulletChart');

  test('onDataPointClick', async ({ mount, page }) => {
    await mount('BulletChart/BulletChartDataPointClickTest');

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
    await mount('BulletChart/BulletChartVerticalLayoutTest');
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    // Vertical layout renders bars along Y axis and uses XAxis for values
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-xAxis')).toBeAttached();
  });
});
