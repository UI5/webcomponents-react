import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import {
  TreeInfiniteScrollTestComp,
  TreeNoSubrowsSpacerTestComp,
  TreeSelectFilterTestComp,
} from './TreeTableTestComponents.js';

test.describe('AnalyticalTable - TreeTable', () => {
  test('tree - no subrows spacer', async ({ mount, page }) => {
    await mount(<TreeNoSubrowsSpacerTestComp />);

    // Only the appended `{ name: 'No Subrows' }` row lacks subRows, so exactly
    // one `AnalyticalTableNonExpandableCellSpacer` is rendered.
    await expect(page.locator('[data-component-name="AnalyticalTableNonExpandableCellSpacer"]')).toHaveCount(1);
  });

  test('tree selection & filtering', async ({ mount, page }) => {
    const selectCalls: any[] = [];
    const filterCalls: any[] = [];
    const onRowSelectSpy = (e: any) => {
      // Capture the slice we need; the event object itself is reused by React's pool.
      selectCalls.push({ detail: { isSelected: e.detail.isSelected, row: e.detail.row?.id } });
    };
    const onFilterSpy = (e: any) => {
      // `onFilter` is invoked directly with `{ filters, value, columnId }` — no `.detail`.
      filterCalls.push({
        value: e?.value,
        columnId: e?.columnId,
        filters: e?.filters,
      });
    };

    await mount(<TreeSelectFilterTestComp onRowSelectSpy={onRowSelectSpy} onFilterSpy={onFilterSpy} />);

    // Initially: only top-level rows visible. Robin Moreno / Judith Mathews not in DOM.
    await expect(page.getByText('Robin Moreno', { exact: true })).toHaveCount(0);
    await expect(page.getByText('Judith Mathews', { exact: true })).toHaveCount(0);

    // Expand Flowers Mcfarland (top-level row at aria-rowindex=2; header is row 1).
    const expandBtn = page
      .locator('[aria-rowindex="2"] [aria-colindex="2"] [title="Expand Node"] [ui5-button]')
      .first();
    await expandBtn.click();
    await expect(page.getByText('Robin Moreno', { exact: true })).toBeVisible();

    // Expand Robin Moreno via keyboard (focus + Enter). Robin is at aria-rowindex=5
    // (header=1, Flowers=2, Sibling A=3, Sibling B=4, Robin Moreno=5).
    const robinExpandBtn = page
      .locator('[aria-rowindex="5"] [aria-colindex="2"] [title="Expand Node"] [ui5-button]')
      .first();
    await robinExpandBtn.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Judith Mathews', { exact: true })).toBeVisible();

    // --- Selection ---
    await page.getByText('Robin Moreno', { exact: true }).click();
    await expect.poll(() => selectCalls.at(-1)?.detail?.isSelected).toBe(true);
    await expect(page.getByTestId('payloadHelper')).toHaveText('1{"0.2":true}');

    await page.getByText('Judith Mathews', { exact: true }).click();
    await expect.poll(() => selectCalls.at(-1)?.detail?.isSelected).toBe(true);
    await expect(page.getByTestId('payloadHelper')).toHaveText('2{"0.2":true,"0.2.0":true}');

    // --- Global filter + select ---
    const filterInput = page.getByTestId('input').locator('input');
    await filterInput.fill('Katy Bradshaw');
    await expect(page.getByText('Robin Moreno', { exact: true })).toHaveCount(0);
    await expect(page.getByText('Judith Mathews', { exact: true })).toHaveCount(0);

    await page.getByText('Katy Bradshaw', { exact: true }).click();
    await expect.poll(() => selectCalls.at(-1)?.detail?.isSelected).toBe(true);
    await expect.poll(() => selectCalls.length).toBe(3);
    await expect(page.getByTestId('payloadHelper')).toHaveText('3{"1":true,"0.2":true,"0.2.0":true}');

    // Clear global filter.
    await filterInput.fill('');

    // --- Column filter + select ---
    // Open the Name column header menu, then type into the filter input in the popover.
    await page.getByText('Name', { exact: true }).click();
    const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
    await expect(popover).toBeVisible();
    const popoverInput = popover.locator('[ui5-input][show-clear-icon] input');
    await popoverInput.fill('Flowers Mcfarland');

    // Note: cypress asserted `filter.callCount == 17` (one fire per keystroke).
    // `fill()` is atomic in Playwright so the count differs. The relevant
    // semantic assertion is that `onFilter` was called with the final value.
    await expect
      .poll(() =>
        filterCalls.some(
          (c) =>
            c.value === 'Flowers Mcfarland' &&
            c.columnId === 'name' &&
            JSON.stringify(c.filters) === JSON.stringify([{ id: 'name', value: 'Flowers Mcfarland' }]),
        ),
      )
      .toBe(true);

    // Close the popover by clicking outside it (the cypress test used `force: true`
    // on the row click; in Playwright we close the popover first so the row click
    // isn't intercepted by the popover overlay).
    await page.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(popover).toHaveCount(0);

    await expect(page.getByText('Robin Moreno', { exact: true })).toHaveCount(0);
    await expect(page.getByText('Judith Mathews', { exact: true })).toHaveCount(0);
    await expect(page.getByText('Katy Bradshaw', { exact: true })).toHaveCount(0);

    // Click the lone matching row (Flowers Mcfarland) to select it.
    await page.getByText('Flowers Mcfarland', { exact: true }).click();
    await expect.poll(() => selectCalls.at(-1)?.detail?.isSelected).toBe(true);
    await expect.poll(() => selectCalls.length).toBe(4);
    await expect(page.getByTestId('payloadHelper')).toHaveText('4{"0":true,"1":true,"0.2":true,"0.2.0":true}');

    await expect(page.getByTestId('payloadAllRowsSelected')).toHaveText('false');
    await expect(page.getByTestId('payloadAllVisibleRowsSelected')).toHaveText('true');

    // Clear the column filter through the menu — then expect Flowers row is
    // back among other top-level rows, so selecting it (toggle off) makes
    // allVisibleRowsSelected false.
    await page.getByText('Name', { exact: true }).click();
    await expect(popover).toBeVisible();
    await popoverInput.fill('');
    await page.keyboard.press('Enter');
    await page.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(popover).toHaveCount(0);

    await page.getByText('Flowers Mcfarland', { exact: true }).click();
    await expect(page.getByTestId('payloadAllRowsSelected')).toHaveText('false');
    await expect(page.getByTestId('payloadAllVisibleRowsSelected')).toHaveText('false');
  });

  test('InfiniteScroll: Tree', async ({ mount, page }) => {
    const loadMoreCalls: any[] = [];
    const onLoadMoreSpy = (e: any) => {
      loadMoreCalls.push(e);
    };
    await mount(<TreeInfiniteScrollTestComp onLoadMoreSpy={onLoadMoreSpy} />);

    // Expand the root tree row — its title is "Expand Node".
    await page.locator('[title="Expand Node"]').first().click();

    // Scroll to item 45 — should land us near Name44 without triggering load more.
    const scrollInput = page.getByTestId('scrollInput').locator('input');
    await scrollInput.fill('45');
    await scrollInput.press('Enter');

    // With threshold=10 and starting 51 rows, scrolling to row 45 is within
    // 10 rows of the end → onLoadMore fires once, subRows grow to 100 (+1 root).
    await expect(page.getByText('Name44', { exact: true })).toBeVisible();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 101');
    await expect.poll(() => loadMoreCalls.length).toBe(1);

    // External bump via "Data 111" button → 110 subRows + 1 root.
    await page.getByTestId('data-111').click();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 111');
    await scrollInput.fill('');
    await scrollInput.fill('100');
    await scrollInput.press('Enter');
    await expect(page.getByText('Name99', { exact: true })).toBeVisible();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 111');
    // Still below threshold relative to the current size; no extra load.
    await expect.poll(() => loadMoreCalls.length).toBe(1);

    // Scroll past 100 → into the threshold zone, fires onLoadMore again.
    await scrollInput.fill('');
    await scrollInput.fill('101');
    await scrollInput.press('Enter');
    await expect(page.getByText('Name100', { exact: true })).toBeVisible();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 161');
    await expect.poll(() => loadMoreCalls.length).toBe(2);

    // Reset rows via "Data 101" → 100 subRows + 1 root.
    await page.getByTestId('data-101').click();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 101');
    await scrollInput.fill('');
    await scrollInput.fill('91');
    await scrollInput.press('Enter');
    await expect(page.getByText('Name90', { exact: true })).toBeVisible();
    await expect(page.getByTestId('row-count')).toHaveText('Rows: 151');
    await expect.poll(() => loadMoreCalls.length).toBe(3);
  });
});
