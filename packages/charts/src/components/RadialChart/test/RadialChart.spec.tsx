import { expect, test } from '@playwright/experimental-ct-react';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
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

  test.fixme('click handlers', async ({ mount, page }) => {
    await mount(<RadialChartClickTest />);
    const sector = page.locator('.recharts-radial-bar-sector');
    await expect(sector).toBeVisible();
    const box = await sector.boundingBox();
    if (box) {
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload-value')).toHaveText('67');
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<RadialChart {...passThroughProps({ value: 67, displayValue: '67%' })} />);
    await assertPassThroughProps(page);
  });
});
