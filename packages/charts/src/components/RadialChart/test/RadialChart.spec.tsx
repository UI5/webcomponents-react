import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/chartGalleryTests.js';
import type { Chart } from '../../../test-utils/ChartHarness.gallery.js';

test.describe('RadialChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount<typeof Chart>('ChartHarness/Chart', { chart: 'RadialChart' });
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-area')).toHaveCount(1);
    await expect(page.locator('.recharts-radial-bar-sectors')).toHaveCount(1);
    await expect(page.getByText('67%')).toBeVisible();
  });

  test('click handlers', async ({ mount, page }) => {
    await mount('RadialChart/RadialChartClickTest');
    const sector = page.locator('.recharts-radial-bar-sector');
    await expect(sector).toBeVisible();
    await sector.dispatchEvent('click');
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload-value')).toHaveText('67');
  });

  testPassThroughProps('RadialChart');

  testLoadingStates('RadialChart', '.recharts-radial-bar-sectors');
});
