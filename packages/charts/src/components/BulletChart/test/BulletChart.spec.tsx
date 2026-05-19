import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { BulletChart } from '../index.js';
import {
  BulletChartClickTest,
  BulletChartDataPointClickTest,
  BulletChartLegendConfigTest,
  BulletChartVerticalLayoutTest,
  BulletChartZoomingCustomTest,
  BulletChartZoomingDisabledTest,
  BulletChartZoomingEnabledTest,
} from './BulletChartTestComponents.js';

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

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<BulletChart dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-bar')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<BulletChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<BulletChartZoomingEnabledTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<BulletChartZoomingDisabledTest />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<BulletChartZoomingCustomTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<BulletChart {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<BulletChartDataPointClickTest />);

    // BulletChart renders the data label as a <text> element on top of the bar (insideTop).
    // A real user click on the label doesn't fire onDataPointClick (only clicks on the bar
    // shape do). Click near the bottom edge of the bar to land on the rect, not the label.
    const firstBar = page.locator('.recharts-bar-rectangle path').first();
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
