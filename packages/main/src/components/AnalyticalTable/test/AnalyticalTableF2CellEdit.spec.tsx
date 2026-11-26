import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

const STORY = 'AnalyticalTable/F2CellEditHarness';

test.describe('AnalyticalTable useF2CellEdit — cell aria-label', () => {
  test('interactive cell without cellLabel gets a clean aria-label (no literal "undefined")', async ({
    mount,
    page,
  }) => {
    await mount(STORY);

    // First body row (header is aria-rowindex 1), first column = the Link cell.
    const titleCell = page.locator('[aria-rowindex="2"] > [aria-colindex="1"]');
    await expect(titleCell).toHaveAttribute('aria-label', 'Includes Link');
    expect(await titleCell.getAttribute('aria-label')).not.toContain('undefined');
  });

  test('non-interactive cell keeps its aria-labelledby and gets no aria-label', async ({ mount, page }) => {
    await mount(STORY);

    const statusCell = page.locator('[aria-rowindex="2"] > [aria-colindex="2"]');
    await expect(statusCell).not.toHaveAttribute('aria-label');
    await expect(statusCell).toHaveAttribute('aria-labelledby', /\S/);
  });
});
