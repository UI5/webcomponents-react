import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import { simpleDataSet } from '../../../resources/DemoProps.js';
import { testLoadingStates, testPassThroughProps } from '../../../test-utils/sharedTests.js';
import { DonutChart } from '../index.js';
import {
  DonutChartClickTest,
  DonutChartLegendConfigTest,
  DonutChartSectorFocusActiveTest,
  DonutChartSectorFocusDatasetShrinkTest,
  DonutChartSectorFocusEmptyTest,
  DonutChartSectorFocusHandlersTest,
  DonutChartSectorFocusOutOfBoundsTest,
  DonutChartSectorFocusTest,
} from './DonutChartTestComponents.js';

const dimension = { accessor: 'name' };
const measure = { accessor: 'users' };

test.describe('DonutChart', () => {
  test('Basic', async ({ mount, page }) => {
    await mount(<DonutChart dataset={simpleDataSet} dimension={dimension} measure={measure} />);
    await expect(page.locator('.recharts-responsive-container')).toBeVisible();
    await expect(page.locator('.recharts-pie')).toHaveCount(1);
    await expect(page.locator('.recharts-pie-sector')).toHaveCount(12);
  });

  test('click handlers', async ({ mount, page }) => {
    await mount(<DonutChartClickTest />);

    await page.locator('[name="January"]').first().click({ force: true });
    await expect(page.getByTestId('click-count')).toHaveText('1');
    await expect(page.getByTestId('last-payload')).toHaveText(JSON.stringify(simpleDataSet[0]));

    await page.locator('.recharts-legend-item-text').filter({ hasText: 'January' }).click();
    await expect(page.getByTestId('legend-click-count')).toHaveText('1');
    await expect(page.getByTestId('last-legend-datakey')).toHaveText('users');
  });

  testLoadingStates(
    DonutChart,
    { dataset: simpleDataSet, dimension, measure },
    { dimension: {}, measure: {} },
    '.recharts-pie',
  );

  testPassThroughProps(DonutChart, { dimension: {}, measure: {} });

  test('legendConfig', async ({ mount, page }) => {
    await mount(<DonutChartLegendConfigTest />);
    await expect(page.getByTestId('catval').first()).toBeVisible();
  });

  test.describe('Sector Focus - keyboard navigation', () => {
    test('Tab, arrows, Enter, wrap-around', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusTest />);

      // Focus "before" button then Tab into chart container
      await page.getByText('before').focus();
      await page.keyboard.press('Tab');
      // Should focus the chart container
      await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart');

      // Tab again to enter sector mode - focuses first sector
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '0');

      // ArrowRight at first sector wraps to last
      await page.keyboard.press('ArrowRight');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', String(simpleDataSet.length - 1));

      // ArrowLeft wraps back to first area then continues
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '0');

      // ArrowLeft moves to next sector (index increments)
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '1');

      // ArrowLeft again
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '2');

      // ArrowRight moves back (index decrements)
      await page.keyboard.press('ArrowRight');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '1');

      // Enter activates the sector
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('sector-click-count')).toHaveText('1');
      await expect(page.getByTestId('sector-last-index')).toHaveText('1');

      // Shift+Tab returns focus to the chart container
      await page.keyboard.press('Shift+Tab');
      await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart');
    });

    test('activeSegment with Enter and Space', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusActiveTest />);

      // Initial activeSegment is 2
      await expect(page.getByTestId('active-segment')).toHaveText('2');

      // Focus "before" button then Tab into chart container
      await page.getByText('before').focus();
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveAttribute('aria-roledescription', 'chart');

      // Tab into sectors - should start at activeSegment (index 2)
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '2');

      // Enter activates the current sector, updating activeSegment
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('active-segment')).toHaveText('2');
      await expect(page.locator('.recharts-active-shape')).toBeAttached();

      // Navigate to a different sector and activate with Enter
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '3');
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('active-segment')).toHaveText('3');

      // Navigate and activate with Space
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '4');
      await page.keyboard.press(' ');
      await expect(page.getByTestId('active-segment')).toHaveText('4');

      // Hold Space, navigate to different sector, release — activates on keyup
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '5');
      await page.keyboard.down(' ');
      await page.keyboard.press('ArrowLeft');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '6');
      await page.keyboard.up(' ');
      await expect(page.getByTestId('active-segment')).toHaveText('6');
    });

    test('empty dataset is non-interactive', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusEmptyTest />);

      // The chart container should have tabindex 0 but no role="application"
      const chartContainer = page.locator('[aria-roledescription="chart"]');
      await expect(chartContainer).toHaveAttribute('tabindex', '0');
      await expect(chartContainer).not.toHaveAttribute('role', 'application');
    });

    test('consumer event handlers are composed', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusHandlersTest />);

      // Focus the chart container directly (triggers onFocus)
      const chartContainer = page.locator('[aria-roledescription="chart"]');
      await chartContainer.focus();
      await expect(page.getByTestId('focus-count')).toHaveText('1');

      // Tab into sector mode (triggers onKeyDownCapture)
      await page.keyboard.press('Tab');
      await expect(page.getByTestId('keydown-capture-count')).toHaveText('1');

      // ArrowLeft fires another keydown capture
      await page.keyboard.press('ArrowLeft');
      await expect(page.getByTestId('keydown-capture-count')).toHaveText('2');

      // Blur the chart (triggers onBlur)
      await page.getByText('after').focus();
      await expect(page.getByTestId('blur-count')).not.toHaveText('0');
    });

    test('activeSegment out of bounds is clamped', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusOutOfBoundsTest />);

      await page.getByText('before').focus();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', String(simpleDataSet.length - 1));
    });

    test('dataset shrink resets keyboard state', async ({ mount, page }) => {
      await mount(<DonutChartSectorFocusDatasetShrinkTest />);

      // Tab past "shrink" button into chart, then into sector mode
      await page.getByText('before').focus();
      await page.keyboard.press('Tab'); // → "shrink" button
      await page.keyboard.press('Tab'); // → chart container
      await page.keyboard.press('Tab'); // → sector 0
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('ArrowLeft');
      }
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index', '5');

      // Shrink dataset to 3 items
      await page.getByText('shrink').click();
      const chartContainer = page.locator('[aria-roledescription="chart"]');
      await expect(chartContainer).toHaveAttribute('tabindex', '0');

      // Re-enter sector mode — should start from a valid index
      await page.getByText('before').focus();
      await page.keyboard.press('Tab'); // → "shrink" button
      await page.keyboard.press('Tab'); // → chart container
      await page.keyboard.press('Tab'); // → sector
      await expect(page.locator(':focus')).toHaveAttribute('data-sector-index');
    });
  });
});
