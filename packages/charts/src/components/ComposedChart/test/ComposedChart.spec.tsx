import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
import { ComposedChart } from '../index.js';
import {
  ComposedChartClickTest,
  ComposedChartDataPointClickTest,
  ComposedChartLegendConfigTest,
  ComposedChartSecondYAxisTest,
  ComposedChartStackTotalsDisabledTest,
  ComposedChartStackTotalsEnabledTest,
  ComposedChartVerticalLayoutTest,
  ComposedChartZoomingCustomTest,
  ComposedChartZoomingDisabledTest,
  ComposedChartZoomingEnabledTest,
} from './ComposedChartTestComponents.js';

test.describe('ComposedChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(
      <ComposedChart
        dataset={complexDataSet}
        dimensions={[{ accessor: 'name', interval: 0 }]}
        measures={[
          { accessor: 'users', label: 'Users', type: 'line' },
          { accessor: 'sessions', label: 'Active Sessions', type: 'bar' },
          { accessor: 'volume', label: 'Vol.', type: 'area' },
        ]}
      />,
    );
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
    await expect(page.locator('.recharts-area-dots')).toHaveCount(1);
    await expect(page.locator('.recharts-bar-rectangles')).toHaveCount(1);
    await expect(page.locator('.recharts-line-curve')).toHaveCount(1);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ComposedChartClickTest />);

    await page.getByText('January').click();
    await expect(page.getByTestId('click-count')).toHaveText('1');

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<ComposedChart dataset={[]} dimensions={[]} measures={[]} />);
    await expect(page.locator('.recharts-bar')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ComposedChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<ComposedChartZoomingEnabledTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<ComposedChartZoomingDisabledTest />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<ComposedChartZoomingCustomTest />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<ComposedChart {...passThroughProps({ dimensions: [], measures: [] })} />);
    await assertPassThroughProps(page);
  });

  test.describe('showStackAggregateTotals', () => {
    test('enabled', async ({ mount, page }) => {
      const expectedTotals = complexDataSet.slice(0, 3).map((entry) => entry.users + entry.sessions);

      await mount(<ComposedChartStackTotalsEnabledTest />);

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
      await mount(<ComposedChartStackTotalsDisabledTest />);
      await expect(page.locator('.recharts-bar-rectangles').first()).toBeAttached();
      await expect(page.locator('text[font-weight="bold"]')).not.toBeAttached();
    });
  });

  test('layout="vertical"', async ({ mount, page }) => {
    await mount(<ComposedChartVerticalLayoutTest />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    // Vertical layout swaps axes: measure axis becomes XAxis (type=number)
    await expect(page.locator('.recharts-xAxis')).toBeAttached();
    // Chart elements should still render
    await expect(page.locator('.recharts-bar')).toHaveCount(1);
    await expect(page.locator('.recharts-line')).toHaveCount(1);
    await expect(page.locator('.recharts-area')).toHaveCount(1);
  });

  test('onDataPointClick', async ({ mount, page }) => {
    await mount(<ComposedChartDataPointClickTest />);

    await page.locator('[name="January"]').first().click();
    await expect(page.getByTestId('dp-click-count')).toHaveText('1');
    await expect(page.getByTestId('dp-last-datakey')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-value')).not.toHaveText('');
    await expect(page.getByTestId('dp-last-data-index')).not.toHaveText('-1');
    await expect(page.getByTestId('dp-last-payload')).toHaveText(JSON.stringify(complexDataSet[0]));
  });

  test('secondYAxis', async ({ mount, page }) => {
    await mount(<ComposedChartSecondYAxisTest />);

    // ComposedChart renders secondYAxis as an additional YAxis
    await expect(page.locator('.recharts-yAxis')).toHaveCount(2);
  });
});
