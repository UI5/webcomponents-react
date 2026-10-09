import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import type { GroupableRuntimeToggleHarness, GroupingAggregationHarness } from './AnalyticalTableGrouping.gallery.js';

const STORY = 'AnalyticalTableGrouping/GroupingAggregationHarness';
const TOGGLE_STORY = 'AnalyticalTableGrouping/GroupableRuntimeToggleHarness';

const listItem = (page: Page, text: string) => page.locator(`[ui5-li][text="${text}"]`);
const popover = (page: Page) => page.locator('[data-component-name="ATHeaderPopover"]');
const openHeaderPopover = (page: Page, text: string) => page.getByText(text, { exact: true }).click();

test.describe('AnalyticalTable', () => {
  test('grouped column is aggregated on ancestor group rows', async ({ mount, page }) => {
    await mount<typeof GroupingAggregationHarness>(STORY);

    const ptBr = page.getByTestId('mw-targetLanguage:pt-BR');
    const enUs = page.getByTestId('mw-targetLanguage:en-US');
    await expect(ptBr).toBeVisible();
    await expect(enUs).toBeVisible();

    // pt-BR mixes finished/in_progress/not_started → aggregated status is 'not_started', not the first leaf's 'finished'.
    await expect(ptBr).toHaveAttribute('data-agg-status', 'not_started');
    await expect(ptBr).not.toHaveText('all finished');
    await expect(ptBr).toHaveText('14');

    // en-US is genuinely all finished.
    await expect(enUs).toHaveAttribute('data-agg-status', 'finished');
    await expect(enUs).toHaveText('all finished');
  });

  test('runtime groupable toggle', async ({ mount, page }) => {
    await mount<typeof GroupableRuntimeToggleHarness>(TOGGLE_STORY, { initialGroupable: false });

    // Grouping is the only header option, so while disabled the header has no popover at all.
    await openHeaderPopover(page, 'Status');
    await expect(popover(page)).toHaveCount(0);

    // Enable at runtime → the popover with the Group item appears, and grouping applies.
    await page.getByTestId('toggle-groupable').click();
    await openHeaderPopover(page, 'Status');
    await expect(listItem(page, 'Group')).toBeVisible();
    await listItem(page, 'Group').click();
    await expect(page.getByText('active (3)', { exact: true })).toBeVisible();
    await expect(page.getByText('inactive (2)', { exact: true })).toBeVisible();

    // Disable at runtime → with no other option left, the header popover is gone again.
    await page.getByTestId('toggle-groupable').click();
    await openHeaderPopover(page, 'Status');
    await expect(popover(page)).toHaveCount(0);
  });
});
