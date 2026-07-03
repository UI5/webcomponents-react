import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { scatterComplexDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/sharedTests.js';
import { ScatterChart } from '../index.js';
import {
  ScatterChartAccessibilityTest,
  ScatterChartClickTest,
  ScatterChartEmptyAccessibilityTest,
  ScatterChartEmptyTest,
  ScatterChartLegendConfigTest,
  ScatterChartMultiDatasetAccessibilityTest,
  ScatterChartMultipleChartsTest,
} from './ScatterChartTestComponents.js';

const measures = [
  { accessor: 'users', label: 'Number', axis: 'x' as const },
  { accessor: 'sessions', label: 'Sessions', axis: 'y' as const },
  { accessor: 'volume', axis: 'z' as const },
];

async function expectActivePointLabel(page: Page, containerSelector: string, ...matchers: string[]) {
  const container = page.locator(containerSelector).first();
  const activeId = await container.getAttribute('aria-activedescendant');
  expect(activeId).toBeTruthy();
  const activeElement = page.locator(`[id="${activeId}"]`);
  const label = await activeElement.getAttribute('aria-label');
  for (const m of matchers) {
    expect(label).toContain(m);
  }
}

test.describe('ScatterChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<ScatterChart dataset={scatterComplexDataSet} measures={measures} />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-scatter')).toHaveCount(2);
    await expect(page.locator('.recharts-symbols[name="APJ"]')).toHaveCount(12);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<ScatterChartClickTest />);

    await page.locator('[name="Users"]').first().click();
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(scatterComplexDataSet[0].data[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'Users' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-value')).toHaveText('Users');
  });

  testLoadingStates(ScatterChart, { dataset: scatterComplexDataSet, measures }, { measures: [] }, '.recharts-scatter');

  test('accessibilityLayer: keyboard navigation, Enter, blur/re-focus, consumer handlers', async ({ mount, page }) => {
    await mount(<ScatterChartAccessibilityTest />);
    const containerSelector = '[aria-roledescription="chart"]';

    await expect(page.locator('[role="img"][aria-label]')).toHaveCount(3);

    // Focus "before" button then Tab into chart container
    await page.getByText('before').focus();
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('focus-count')).toHaveText('1');

    // First point active (sorted by X: 50 is smallest)
    await expectActivePointLabel(page, containerSelector, 'Number: 50');

    // ArrowRight -> 2nd point (X=100)
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Number: 100');

    // ArrowRight -> 3rd point (X=200)
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Number: 200');

    // ArrowRight at last -> stays at last
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Number: 200');

    // ArrowLeft -> back to 2nd (X=100)
    await page.keyboard.press('ArrowLeft');
    await expectActivePointLabel(page, containerSelector, 'Number: 100');

    // Enter triggers onDataPointClick
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('click-count')).toHaveText('1');
    const lastPayload = await page.getByTestId('last-payload').textContent();
    expect(JSON.parse(lastPayload)).toEqual({ users: 100, sessions: 200, volume: 300 });

    // Click on 3rd point directly
    await page.locator('[role="img"][aria-label]').nth(2).click();
    await expect(page.getByTestId('click-count')).toHaveText('2');
    await expectActivePointLabel(page, containerSelector, 'Number: 200');

    // Blur chart by focusing after button
    await page.getByText('after').focus();
    await expect(page.locator(containerSelector)).not.toHaveAttribute('aria-activedescendant');
    await expect(page.locator('[data-point-focused]')).toHaveCount(0);
    await expect(page.getByTestId('blur-count')).not.toHaveText('0');

    // Re-focus chart via Tab from after button (Shift+Tab)
    await page.keyboard.press('Shift+Tab');
    await expectActivePointLabel(page, containerSelector, 'Number: 200');

    // Navigate back
    await page.keyboard.press('ArrowLeft');
    await expectActivePointLabel(page, containerSelector, 'Number: 100');
    await page.keyboard.press('ArrowLeft');
    await expectActivePointLabel(page, containerSelector, 'Number: 50');
    // At first -> stays
    await page.keyboard.press('ArrowLeft');
    await expectActivePointLabel(page, containerSelector, 'Number: 50');
  });

  test('accessibilityLayer: multi-dataset points sorted by X then datasetIndex', async ({ mount, page }) => {
    await mount(<ScatterChartMultiDatasetAccessibilityTest />);
    const containerSelector = '[aria-roledescription="chart"]';

    await expect(page.locator('[role="img"][aria-label]')).toHaveCount(3);
    await page.getByText('before').focus();
    await page.keyboard.press('Tab');

    // Same X value (30): sorted by dataset index, Alpha (0) before Beta (1)
    await expectActivePointLabel(page, containerSelector, 'Alpha');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Beta', 'Number: 30');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Beta', 'Number: 60');
  });

  test('accessibilityLayer: multiple charts', async ({ mount, page }) => {
    await mount(<ScatterChartMultipleChartsTest />);

    // Verify unique IDs across all points
    const ids = await page.locator('[role="img"][id]').evaluateAll((els) => els.map((el) => el.id));
    expect(new Set(ids).size).toBe(ids.length);

    // Focus first chart via Tab from before button
    await page.getByText('before').focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, '[aria-roledescription="chart1"]', 'Number: 100');

    // Tab to second chart
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, '[aria-roledescription="chart2"]', 'Number: 100');
  });

  test('empty dataset (accessibilityLayer: false)', async ({ mount, page }) => {
    await mount(<ScatterChartEmptyTest />);
    await expect(page.locator('.recharts-scatter')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test('empty dataset (accessibilityLayer: true)', async ({ mount, page }) => {
    await mount(<ScatterChartEmptyAccessibilityTest />);
    await expect(page.locator('.recharts-scatter')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
    const chart = page.locator('[aria-roledescription="chart"]');
    await expect(chart).toHaveAttribute('tabindex', '0');
    await expect(chart).not.toHaveAttribute('role', 'application');
  });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<ScatterChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  testPassThroughProps(ScatterChart, { measures: [] });
});
