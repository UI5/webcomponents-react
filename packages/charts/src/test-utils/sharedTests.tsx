import type { ComponentType } from 'react';
import { expect, test } from '../../../../playwright/fixtures/main-fixtures.js';
import { assertPassThroughProps, passThroughProps } from './shared.js';

/**
 * Registers a `Pass Through HTML Standard Props` test that verifies that the chart forwards
 * the standard HTML props (data-testid, data-*, aria-*, id, className, style.pointerEvents,
 * title, custom attribute) onto its rendered root element.
 */
export function testPassThroughProps<T extends Record<string, any>>(Chart: ComponentType<T>, emptyProps: T) {
  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<Chart {...passThroughProps(emptyProps)} />);
    await assertPassThroughProps(page);
  });
}

/**
 * Registers a `loading states` test that verifies the three distinct rendering paths in
 * ChartContainer:
 * - empty dataset → Placeholder, no BusyIndicator, no chart elements (loading prop has no effect)
 * - empty dataset + loading=true → identical to empty (loading is a no-op without data)
 * - has data + loading=true → BusyIndicator overlay on top of the rendered chart
 *
 * @param chartElementSelector A selector unique to the chart's rendered shape, e.g. `.recharts-bar`
 *   for BarChart or `.recharts-pie` for PieChart. Used to assert the chart isn't rendered in the
 *   placeholder path.
 */
export function testLoadingStates<T extends Record<string, any>>(
  Chart: ComponentType<T>,
  baseProps: T,
  emptyProps: T,
  chartElementSelector: string,
) {
  test('loading states', async ({ mount, page }) => {
    const busyIndicator = page.locator('[data-component-name="ChartContainerBusyIndicator"]').first();
    const chartElement = page.locator(chartElementSelector);
    const loadingText = page.getByText('Loading...').first();

    let result = await mount(<Chart {...emptyProps} />);
    await expect(loadingText).toBeAttached();
    await expect(chartElement).not.toBeAttached();
    await expect(busyIndicator).not.toBeAttached();
    await result.unmount();

    result = await mount(<Chart {...emptyProps} loading />);
    await expect(loadingText).toBeAttached();
    await expect(chartElement).not.toBeAttached();
    await expect(busyIndicator).not.toBeAttached();
    await result.unmount();

    await mount(<Chart {...baseProps} loading />);
    await expect(busyIndicator).toBeAttached();
  });
}

/**
 * Registers `zoomingTool` describe block with three sub-tests verifying the chart's
 * `chartConfig.zoomingTool` prop:
 * - `true` → recharts brush is rendered
 * - `false` → no brush
 * - `{ stroke: 'red' }` → brush rendered with the custom stroke color
 */
export function testZoomingTool<T extends Record<string, any>>(Chart: ComponentType<T>, baseProps: T) {
  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<Chart {...baseProps} chartConfig={{ zoomingTool: true }} />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(<Chart {...baseProps} chartConfig={{ zoomingTool: false }} />);
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(<Chart {...baseProps} chartConfig={{ zoomingTool: { stroke: 'red' } }} />);
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });
}

/**
 * Registers a `showStackAggregateTotals` describe block with two sub-tests verifying the
 * `chartConfig.showStackAggregateTotals` prop:
 * - enabled → stack totals rendered as bold labels, tooltip shows "Total : <sum>"
 * - disabled → no bold totals; bars still render
 *
 * Expected stack totals are computed from the dataset and the stacked measure accessors.
 */
export function testStackAggregateTotals<T extends Record<string, any>>(
  Chart: ComponentType<T>,
  baseProps: T,
  stackMeasures: Array<{ accessor: string; stackId?: string; label?: string; type?: string }>,
) {
  const stackedAccessors = stackMeasures.filter((m) => m.stackId).map((m) => m.accessor);
  const expectedTotals = (baseProps.dataset as Record<string, number>[]).map((entry) =>
    stackedAccessors.reduce((sum, acc) => sum + (Number(entry[acc]) || 0), 0),
  );

  test.describe('showStackAggregateTotals', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(<Chart {...baseProps} measures={stackMeasures} chartConfig={{ showStackAggregateTotals: true }} />);

      for (const total of expectedTotals) {
        await expect(page.locator(`text[font-weight="bold"]`).filter({ hasText: String(total) })).toBeAttached();
      }

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
      await mount(<Chart {...baseProps} measures={stackMeasures} chartConfig={{ showStackAggregateTotals: false }} />);
      await expect(page.locator('.recharts-bar-rectangles').first()).toBeAttached();
      await expect(page.locator('text[font-weight="bold"]')).not.toBeAttached();
    });
  });
}
