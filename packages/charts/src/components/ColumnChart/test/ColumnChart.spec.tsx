import { expect, test } from '@playwright/experimental-ct-react';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { ColumnChart } from '../index.js';
import {
  ColumnChartClickTest,
  ColumnChartLegendConfigTest,
  ColumnChartStackTotalsDisabledTest,
  ColumnChartStackTotalsEnabledTest,
  ColumnChartZoomingCustomTest,
  ColumnChartZoomingDisabledTest,
  ColumnChartZoomingEnabledTest,
} from './ColumnChartTestComponents.js';

test.describe('ColumnChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <ColumnChart
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
    await expect(page.locator('.recharts-bar')).toHaveCount(3);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(3);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ColumnChartClickTest />);

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-value')).toHaveText('Users');

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Vol.' }).click();
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('volume');
  });

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<ColumnChart dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-bar')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ColumnChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<ColumnChartZoomingEnabledTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<ColumnChartZoomingDisabledTest />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<ColumnChartZoomingCustomTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<ColumnChart {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });

  test.describe('showStackAggregateTotals', () => {
    test('enabled', async ({ mount, page }) => {
      const expectedTotals = complexDataSet.slice(0, 3).map((entry) => entry.users + entry.sessions);

      await mount(<ColumnChartStackTotalsEnabledTest />);

      for (const total of expectedTotals) {
        await expect(page.locator(`text[font-weight="bold"]`).filter({ hasText: String(total) })).toBeAttached();
      }

      // tooltip
      const wrapper = page.locator('.recharts-wrapper');
      await wrapper.hover({ position: { x: 200, y: 100 }, force: true });
      const tooltipTotal = page.locator('.recharts-tooltip-item').last();
      await expect(tooltipTotal).toContainText('Total');
      await expect(tooltipTotal).toHaveCSS('font-weight', '700');
      const tooltipText = await tooltipTotal.textContent();
      const totalValue = Number(tooltipText.replace(/\D/g, ''));
      expect(expectedTotals).toContain(totalValue);
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<ColumnChartStackTotalsDisabledTest />);
      await expect(page.locator('.recharts-bar-rectangles').first()).toBeAttached();
      await expect(page.locator('text[font-weight="bold"]')).not.toBeAttached();
    });
  });
});
