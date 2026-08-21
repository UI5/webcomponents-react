import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { openColumnHeaderMenu } from './test-utils/helpers.js';

test.describe('AnalyticalTable - Sorting', () => {
  test('Single-column sorting: header click is a no-op without sortable; sortable enables popover with asc/clear/desc; tree-table sub-row sorting', async ({
    mount,
    page,
  }) => {
    await mount('Sorting/SortingSingleColumnTestComp');

    // Without `sortable`, clicking the column header should NOT open the popover.
    await page.getByText('Name', { exact: true }).click();
    await expect(page.locator('[ui5-popover]')).toHaveCount(0);

    // Switch to the flat sortable table.
    await page.getByTestId('mode-flat').click();
    const body = page.locator('[data-component-name="AnalyticalTableBody"]');
    // Initial order: A, B, X, C — row 4 (aria-rowindex=4) holds 'X'.
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('X');

    // Sort Ascending on Name.
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('name:asc');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('C');

    // Clear Sorting on Name — order returns to the original.
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Clear Sorting' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('name:clear');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('X');

    // Sort Descending on Name.
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Descending' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('name:desc');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('B');

    // Switch to the tree-table dataset (Category column with two parent rows).
    await page.getByTestId('reset-calls').click();
    await page.getByTestId('mode-tree').click();

    // Expand both group rows — the expand chevron is the only ui5-button in each row.
    const expandButtons = body.locator('[ui5-button]');
    await expect(expandButtons).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      await expandButtons.nth(i).click();
    }

    // Sort Ascending on Category.
    await openColumnHeaderMenu(page, 'Category');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('category:asc');
    await expect(page.locator('[aria-rowindex="2"] > [aria-colindex="1"]')).toHaveText('Alphabet');
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"]')).toHaveText('A');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('B');
    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"]')).toHaveText('C');
    await expect(page.locator('[aria-rowindex="6"] > [aria-colindex="1"]')).toHaveText('Number');
    await expect(page.locator('[aria-rowindex="7"] > [aria-colindex="1"]')).toHaveText('1');
    await expect(page.locator('[aria-rowindex="8"] > [aria-colindex="1"]')).toHaveText('2');
    await expect(page.locator('[aria-rowindex="9"] > [aria-colindex="1"]')).toHaveText('3');

    // Sort Descending on Category.
    await openColumnHeaderMenu(page, 'Category');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Descending' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('category:desc');
    await expect(page.locator('[aria-rowindex="2"] > [aria-colindex="1"]')).toHaveText('Number');
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"]')).toHaveText('3');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('2');
    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"]')).toHaveText('1');
    await expect(page.locator('[aria-rowindex="6"] > [aria-colindex="1"]')).toHaveText('Alphabet');
    await expect(page.locator('[aria-rowindex="7"] > [aria-colindex="1"]')).toHaveText('C');
    await expect(page.locator('[aria-rowindex="8"] > [aria-colindex="1"]')).toHaveText('B');
    await expect(page.locator('[aria-rowindex="9"] > [aria-colindex="1"]')).toHaveText('A');

    // Clear Sorting on Category.
    await openColumnHeaderMenu(page, 'Category');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Clear Sorting' }).click();
    await expect(page.getByTestId('last-sort')).toHaveText('category:clear');
    await expect(page.locator('[aria-rowindex="2"] > [aria-colindex="1"]')).toHaveText('Number');
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"]')).toHaveText('2');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"]')).toHaveText('1');
    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"]')).toHaveText('3');
    await expect(page.locator('[aria-rowindex="6"] > [aria-colindex="1"]')).toHaveText('Alphabet');
    await expect(page.locator('[aria-rowindex="7"] > [aria-colindex="1"]')).toHaveText('B');
    await expect(page.locator('[aria-rowindex="8"] > [aria-colindex="1"]')).toHaveText('A');
    await expect(page.locator('[aria-rowindex="9"] > [aria-colindex="1"]')).toHaveText('C');
  });

  test('Multi-sort: enableMultiSort accumulates sorts; a non-multi-sort column replaces them', async ({
    mount,
    page,
  }) => {
    await mount('Sorting/SortingMultiSortTestComp');

    // Multi-sort: ascending Name, then ascending Age.
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await openColumnHeaderMenu(page, 'Age');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();

    // Sorted by Name asc, then Age asc.
    await expect(page.locator('[data-column-index="0"][data-row-index="1"]')).toHaveText('A');
    await expect(page.locator('[data-column-index="1"][data-row-index="1"]')).toHaveText('30');
    await expect(page.locator('[data-column-index="0"][data-row-index="2"]')).toHaveText('A');
    await expect(page.locator('[data-column-index="1"][data-row-index="2"]')).toHaveText('40');
    await expect(page.locator('[data-column-index="0"][data-row-index="3"]')).toHaveText('A');
    await expect(page.locator('[data-column-index="1"][data-row-index="3"]')).toHaveText('70');

    await expect(page.locator('[data-column-index="0"][data-row-index="4"]')).toHaveText('B');
    await expect(page.locator('[data-column-index="1"][data-row-index="4"]')).toHaveText('20');
    await expect(page.locator('[data-column-index="0"][data-row-index="5"]')).toHaveText('B');
    await expect(page.locator('[data-column-index="1"][data-row-index="5"]')).toHaveText('40');
    await expect(page.locator('[data-column-index="0"][data-row-index="6"]')).toHaveText('B');
    await expect(page.locator('[data-column-index="1"][data-row-index="6"]')).toHaveText('60');

    await expect(page.locator('[data-column-index="0"][data-row-index="7"]')).toHaveText('C');
    await expect(page.locator('[data-column-index="1"][data-row-index="7"]')).toHaveText('40');

    // Sorting on Name 2 (no enableMultiSort) replaces the existing multi-sort.
    await openColumnHeaderMenu(page, 'Name 2');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();

    await expect(page.locator('[data-column-index="0"][data-row-index="1"]')).toHaveText('B');
    await expect(page.locator('[data-column-index="1"][data-row-index="1"]')).toHaveText('60');
    await expect(page.locator('[data-column-index="2"][data-row-index="1"]')).toHaveText('Q');
    await expect(page.locator('[data-column-index="0"][data-row-index="2"]')).toHaveText('B');
    await expect(page.locator('[data-column-index="1"][data-row-index="2"]')).toHaveText('40');
    await expect(page.locator('[data-column-index="2"][data-row-index="2"]')).toHaveText('X');
    await expect(page.locator('[data-column-index="0"][data-row-index="3"]')).toHaveText('A');
    await expect(page.locator('[data-column-index="1"][data-row-index="3"]')).toHaveText('40');
    await expect(page.locator('[data-column-index="2"][data-row-index="3"]')).toHaveText('Y');
  });

  test('Plugin hook useOrderedMultiSort: orderedIds dictates sort priority regardless of click order', async ({
    mount,
    page,
  }) => {
    await mount('Sorting/SortingOrderedMultiSortTestComp');

    // Click Age first, then Name — `name` precedes `age` in orderedIds, so Name takes priority.
    await openColumnHeaderMenu(page, 'Age');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();

    // Graham comes first ascending; row 1 in visible-row terms is the first body row.
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Graham');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('40');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('20');

    // Sort Name 2 descending — second priority in orderedIds, breaks ties within Name groups.
    await openColumnHeaderMenu(page, 'Name 2');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Descending' }).click();

    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Graham');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('62');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="2"]')).toHaveText('Willis');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('60');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="2"]')).toHaveText('Willis');

    // Clear sort on Name 2 — Name's ascending sort remains active.
    await openColumnHeaderMenu(page, 'Name 2');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Clear Sorting' }).click();

    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Graham');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('40');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('20');

    // Switch to orderedIds=['name2'] — table remounts, sort state resets.
    await page.getByTestId('switch-ordered-ids').click();
    await openColumnHeaderMenu(page, 'Age');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await openColumnHeaderMenu(page, 'Name');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();

    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('20');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Peter');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('40');

    await openColumnHeaderMenu(page, 'Age 2');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();

    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('20');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="3"]')).toHaveText('80');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Peter');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('40');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="3"]')).toHaveText('18');

    // Add Name 2 ascending. orderedIds=['name2'] promotes it to highest priority.
    await openColumnHeaderMenu(page, 'Name 2');
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Sort Ascending' }).click();
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="0"]')).toHaveText('Kristen');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="1"]')).toHaveText('20');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="2"]')).toHaveText('Alissa');
    await expect(page.locator('[data-visible-row-index="1"][data-visible-column-index="3"]')).toHaveText('80');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="0"]')).toHaveText('Peter');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="1"]')).toHaveText('30');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="2"]')).toHaveText('Rose');
    await expect(page.locator('[data-visible-row-index="5"][data-visible-column-index="3"]')).toHaveText('90');
  });
});
