import { expect, test } from '@playwright/experimental-ct-react';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { RadarChart } from '../index.js';
import { RadarChartClickTest, RadarChartLegendConfigTest } from './RadarChartTestComponents.js';

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

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<RadarChart dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-radar')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<RadarChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<RadarChart {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });
});
