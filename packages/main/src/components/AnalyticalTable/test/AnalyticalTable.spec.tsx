import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('AnalyticalTable', () => {
  // Root cause: virtual-core drifts the cached `scrollOffset` on re-measure, and a scroll element that can't scroll
  // never fires a scroll event to reconcile it. Here the body can't scroll (`visibleRows === data.length`).
  test('renders rows from the top after a hide/reveal cycle (no empty block)', async ({ mount, page }) => {
    await mount('AnalyticalTable/EmptyBlockHideRevealTestComp');
    const header = page.getByText('Collapsible Section');

    // expand → collapse → re-expand: the hide/reveal cycle that used to desync the offset.
    await header.click();
    await expect(page.locator('[role="row"][aria-rowindex="2"]')).toBeVisible();
    await header.click();
    await header.click();

    const firstDataRow = page.locator('[role="row"][aria-rowindex="2"]');
    await expect(firstDataRow).toBeVisible();

    const state = await page.evaluate(() => {
      const tbody = document.querySelector('[role="rowgroup"]');
      const rows = tbody ? tbody.querySelectorAll('[role="row"][aria-rowindex]') : [];
      const first = rows[0] as HTMLElement | undefined;
      return { rowsInDom: rows.length, firstTransform: first?.style.transform ?? null };
    });

    expect(state.rowsInDom).toBeGreaterThan(0);
    expect(state.firstTransform).toBe('translateY(0px)');
  });

  // Same root cause on the horizontal axis: here the table root can't scroll horizontally because the columns fit its
  // width, so the drifted `scrollOffset` culls the leftmost columns.
  test('renders columns from the left after a tab-switch cycle (no culled leading columns)', async ({
    mount,
    page,
  }) => {
    await mount('AnalyticalTable/ColumnsFitWidthHideRevealTestComp');
    const tableTab = page.getByRole('tab', { name: 'Table' });
    const otherTab = page.getByRole('tab', { name: 'Other' });

    // select Table → away → back: the hide/reveal cycle that used to desync the offset.
    await tableTab.click();
    await expect(page.locator('[data-column-index="0"]').first()).toBeVisible();
    await otherTab.click();
    await tableTab.click();

    await expect(page.locator('[data-column-index="0"]').first()).toBeVisible();

    const firstRenderedColumnIndex = await page.evaluate(() => {
      const cells = document.querySelectorAll('[data-column-index]');
      let min = Infinity;
      cells.forEach((cell) => {
        const index = Number((cell as HTMLElement).dataset.columnIndex);
        if (!Number.isNaN(index)) {
          min = Math.min(min, index);
        }
      });
      return min;
    });

    expect(firstRenderedColumnIndex).toBe(0);
  });
});
