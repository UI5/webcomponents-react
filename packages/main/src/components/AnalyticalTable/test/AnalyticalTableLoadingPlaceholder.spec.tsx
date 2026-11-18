import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import type { LoadingPlaceholderHarness } from './AnalyticalTable.gallery.js';

const STORY = 'AnalyticalTable/LoadingPlaceholderHarness';

test.describe('AnalyticalTable loading placeholder', () => {
  test('renders the skeleton without NaN column widths while the table is unmeasured', async ({ mount, page }) => {
    const widthWarnings: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' && /invalid value for the/i.test(msg.text())) {
        widthWarnings.push(msg.text());
      }
    });

    await mount<typeof LoadingPlaceholderHarness>(STORY, {});

    await expect(page.locator('[data-component-name="AnalyticalTableLoadingPlaceholder"]')).toBeVisible();

    expect(widthWarnings, widthWarnings.join('\n')).toHaveLength(0);
  });
});
