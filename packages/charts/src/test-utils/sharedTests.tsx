import type { ComponentType } from 'react';
import { expect, test } from '../../../../playwright/fixtures/main-fixtures.js';

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
