/**
 * @fileoverview Shared parametric chart tests, reused across chart specs.
 *
 * Each helper registers Playwright tests for one concern (loading states, zooming tool,
 * pass-through props, stack totals) and is called from a chart's spec with that chart's string
 * key. Add a new helper here when a behavior is shared by multiple charts; keep chart-specific
 * tests in the individual spec files. Helpers mount the shared `ChartHarness/Chart` story, so the
 * chart must be registered in `ChartHarness.gallery.tsx` + `chartHarnessData.ts` first.
 */

import { expect, test } from '../../../../playwright/fixtures/gallery-fixtures.js';
import { chartHarnessData } from '../resources/chartHarnessData.js';
import { assertPassThroughProps, passThroughProps } from './shared.js';

// Gallery-model shared chart tests. Each helper takes a chart's string key and mounts the
// shared `ChartHarness/Chart` story; the component + base props are resolved in the harness.
const HARNESS = 'ChartHarness/Chart';

/** Verifies the chart forwards standard HTML props onto its rendered root element. */
export function testPassThroughProps(chart: string) {
  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(HARNESS, { chart, variant: 'empty', overrides: passThroughProps() });
    await assertPassThroughProps(page);
  });
}

/** Verifies the three ChartContainer paths: empty, empty+loading (no-op), data+loading (BusyIndicator). */
export function testLoadingStates(chart: string, chartElementSelector: string) {
  test('loading states', async ({ mount, page }) => {
    const busyIndicator = page.locator('[data-component-name="ChartContainerBusyIndicator"]').first();
    const chartElement = page.locator(chartElementSelector);
    const loadingText = page.getByText('Loading...').first();

    let result = await mount(HARNESS, { chart, variant: 'empty' });
    await expect(loadingText).toBeAttached();
    await expect(chartElement).not.toBeAttached();
    await expect(busyIndicator).not.toBeAttached();
    await result.unmount();

    result = await mount(HARNESS, { chart, variant: 'empty', overrides: { loading: true } });
    await expect(loadingText).toBeAttached();
    await expect(chartElement).not.toBeAttached();
    await expect(busyIndicator).not.toBeAttached();
    await result.unmount();

    await mount(HARNESS, { chart, variant: 'base', overrides: { loading: true } });
    await expect(busyIndicator).toBeAttached();
  });
}

/** Verifies `chartConfig.zoomingTool`: true → brush, false → none, custom → styled brush. */
export function testZoomingTool(chart: string) {
  test.describe('zoomingTool', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(HARNESS, { chart, overrides: { chartConfig: { zoomingTool: true } } });
      await expect(page.locator('.recharts-brush')).toBeVisible();
    });

    test('disabled', async ({ mount, page }) => {
      await mount(HARNESS, { chart, overrides: { chartConfig: { zoomingTool: false } } });
      await expect(page.locator('.recharts-brush')).not.toBeAttached();
    });

    test('custom config', async ({ mount, page }) => {
      await mount(HARNESS, { chart, overrides: { chartConfig: { zoomingTool: { stroke: 'red' } } } });
      await expect(page.locator('.recharts-brush')).toBeVisible();
      await expect(page.locator('.recharts-brush [stroke="red"]')).toBeVisible();
    });
  });
}

/** Verifies `chartConfig.showStackAggregateTotals`: enabled → bold totals + tooltip, disabled → none. */
export function testStackAggregateTotals(chart: string) {
  const stack = chartHarnessData[chart]?.stack;
  if (!stack) {
    throw new Error(`testStackAggregateTotals: chart "${chart}" has no stack data in chartHarnessData.ts`);
  }
  const stackedAccessors = stack.measures.filter((m) => m.stackId).map((m) => m.accessor);
  const expectedTotals = (stack.baseProps.dataset as Record<string, number>[]).map((entry) =>
    stackedAccessors.reduce((sum, acc) => sum + (Number(entry[acc]) || 0), 0),
  );

  test.describe('showStackAggregateTotals', () => {
    test('enabled', async ({ mount, page }) => {
      await mount(HARNESS, { chart, variant: 'stack', overrides: { chartConfig: { showStackAggregateTotals: true } } });

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
      await mount(HARNESS, {
        chart,
        variant: 'stack',
        overrides: { chartConfig: { showStackAggregateTotals: false } },
      });
      await expect(page.locator('.recharts-bar-rectangles').first()).toBeAttached();
      await expect(page.locator('text[font-weight="bold"]')).not.toBeAttached();
    });
  });
}
