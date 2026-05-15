import { expect, test } from '@playwright/experimental-ct-react';
import type { Page } from '@playwright/test';
import { scatterComplexDataSet } from '../../../resources/DemoProps.js';
import { assertPassThroughProps, passThroughProps } from '../../../test-utils/shared.js';
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
  const activeElement = page.locator(`#${CSS.escape(activeId)}`);
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

  test('Loading Placeholder', async ({ mount, page }) => {
    await mount(<ScatterChartEmptyTest />);
    await expect(page.locator('.recharts-scatter')).not.toBeAttached();
    await expect(page.getByText('Loading...')).toBeAttached();
  });

  test.fixme('accessibilityLayer: keyboard navigation, Enter, blur/re-focus, consumer handlers', async ({
    mount,
    page,
  }) => {
    await mount(<ScatterChartAccessibilityTest />);
    const containerSelector = '[aria-roledescription="chart"]';

    await expect(page.locator('[role="img"][aria-label]')).toHaveCount(3);

    // Focus the "before" button
    await page.getByText('before').focus();

    // Tab into chart container
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toHaveAttribute('tabindex', '0');
    await expect(focused).toHaveAttribute('role', 'application');
    await expect(focused).toHaveAttribute('aria-roledescription', 'chart');
    await expect(page.getByTestId('focus-count')).toHaveText('1');

    // First point active (sorted by X: 50 is smallest)
    await expectActivePointLabel(page, containerSelector, 'Number: 50');
    await expect(page.locator('[data-point-focused]')).toHaveCount(1);

    // ArrowRight -> 2nd point (X=100)
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, containerSelector, 'Number: 100');
    await expect(page.getByTestId('keydown-count')).not.toHaveText('0');

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

    // Tab out of chart
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toContainText('after');
    await expect(page.locator(containerSelector)).not.toHaveAttribute('aria-activedescendant');
    await expect(page.locator('[data-point-focused]')).toHaveCount(0);
    await expect(page.getByTestId('blur-count')).not.toHaveText('0');

    // Shift+Tab back into chart
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart');
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

  test.fixme('accessibilityLayer: multi-dataset points sorted by X then datasetIndex', async ({ mount, page }) => {
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

  test.fixme('accessibilityLayer: multiple charts', async ({ mount, page }) => {
    await mount(<ScatterChartMultipleChartsTest />);

    // Verify unique IDs across all points
    const ids = await page.locator('[role="img"][id]').evaluateAll((els) => els.map((el) => el.id));
    expect(new Set(ids).size).toBe(ids.length);

    await page.getByText('before').focus();

    // Tab into first chart
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart1');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, '[aria-roledescription="chart1"]', 'Number: 100');

    // Tab into second chart
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart2');
    await page.keyboard.press('ArrowRight');
    await expectActivePointLabel(page, '[aria-roledescription="chart2"]', 'Number: 100');

    // Tab out to "after" button
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toContainText('after');
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

  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<ScatterChart {...passThroughProps({ measures: [] })} />);
    await assertPassThroughProps(page);
  });
});
