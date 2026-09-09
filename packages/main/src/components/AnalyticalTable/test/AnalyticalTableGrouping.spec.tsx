import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import type { GroupingAggregationHarness } from './AnalyticalTableGrouping.gallery.js';

const STORY = 'AnalyticalTableGrouping/GroupingAggregationHarness';

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
});
