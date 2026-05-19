import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/sharedTests.js';
import { RadialChart } from '../index.js';
import { RadialChartClickTest } from './RadialChartTestComponents.js';

test.describe('RadialChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<RadialChart value={67} displayValue={'67%'} />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-area')).toHaveCount(1);
    await expect(page.locator('.recharts-radial-bar-sectors')).toHaveCount(1);
    await expect(page.getByText('67%')).toBeVisible();
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<RadialChartClickTest />);
    const sector = page.locator('.recharts-radial-bar-sector');
    await expect(sector).toBeVisible();
    await sector.dispatchEvent('click');
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload-value')).toHaveText('67');
  });

  testPassThroughProps(RadialChart, {});

  testLoadingStates(RadialChart, { value: 67, displayValue: '67%' }, {}, '.recharts-radial-bar-sectors');
});
