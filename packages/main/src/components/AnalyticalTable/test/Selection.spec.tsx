import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

const SELECT_ALL_CELL = '[data-column-id="__ui5wcr__internal_selection_column"]';
const SELECT_ALL_CHECKBOX = '[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]';

/**
 * Resolves a CSS custom property to its computed RGB string by applying it to a probe element
 * inside the DOM. Uses `color: var(--name)` so modern CSS functions like `light-dark()` resolve
 * against the actual document color-scheme. The theming engine applies the SAP CSS variables to
 * `:root` asynchronously, so this polls until the var resolves to a real color (i.e. no longer the
 * `rgb(0, 0, 0)` fallback of an undefined var) — none of the asserted colors are pure black.
 */
const cssVarRgb = async (page: Page, varName: string): Promise<string> => {
  const read = async () =>
    page.evaluate((name: string) => {
      const probe = document.createElement('div');
      probe.style.color = `var(${name})`;
      document.body.appendChild(probe);
      const computed = getComputedStyle(probe).color;
      document.body.removeChild(probe);
      return computed;
    }, varName);
  let value = await read();
  await expect
    .poll(async () => {
      value = await read();
      return value;
    })
    .not.toBe('rgb(0, 0, 0)');
  return value;
};

test.describe('AnalyticalTable - Selection', () => {
  // SKIPPED (partial vs cypress): does not cover the final `onRowSelect` call-count checkpoint (19) —
  // the last-phase fires are only verified via payload state, not count. Retained by
  // AnalyticalTable.cy.tsx `it('programmatic and user selection + filtering')`.
  test.skip('programmatic and user selection + filtering', async ({ mount, page }) => {
    await mount('Selection/ProgrammaticSelectionAndFilteringTestComp');

    const payload = page.getByTestId('payload');
    const payloadRowsById = page.getByTestId('payloadRowsById');
    const payloadAllRows = page.getByTestId('payloadAllRowsSelected');
    const payloadAllVisible = page.getByTestId('payloadAllVisibleRowsSelected');
    const selectCount = page.getByTestId('select-count');
    const filterCount = page.getByTestId('filter-count');
    const filterLast = page.getByTestId('filter-last');

    // 4 user clicks (Name-5 clicked twice → toggled off).
    await page.getByText('Name-0', { exact: true }).click();
    await page.getByText('Name-1', { exact: true }).click();
    await page.getByText('Name-5', { exact: true }).click();
    await page.getByText('Name-5', { exact: true }).click();

    await expect(payload).toHaveText('["0","1"]');
    await expect(payloadRowsById).toHaveText('{"0":true,"1":true}');
    await expect(payloadAllRows).toHaveText('false');
    await expect(selectCount).toHaveText('4');

    // Programmatic override; should NOT fire onRowSelect.
    await page.getByTestId('set-selected').click();
    await expect(selectCount).toHaveText('4');

    // Clicking Name-1 toggles it off; programmatic state had { 2: true, 3: false }
    // → after click row 1's selectedRowIds entry is removed; row 2 stays selected.
    await page.getByText('Name-1', { exact: true }).click();
    await expect(selectCount).toHaveText('5');
    await expect(payload).toHaveText('["1","2"]');
    await expect(payloadRowsById).toHaveText('{"1":true,"2":true,"3":false}');
    await expect(payloadAllRows).toHaveText('false');

    // Select-all via clicking header selection cell.
    await page.locator('[data-row-index="0"][data-column-index="0"]').click();
    await expect(selectCount).toHaveText('6');
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('true');

    // Enter deselects all.
    await page.locator('[data-row-index="0"][data-column-index="0"]').focus();
    await page.keyboard.press('Enter');
    await expect(selectCount).toHaveText('7');
    await expect(payload).toHaveText('[]');
    await expect(payloadRowsById).toHaveText('{}');
    await expect(payloadAllRows).toHaveText('false');

    // Space + ArrowDown chord (cypress `realPress(['Space', 'ArrowDown'])`). The chord behaviour
    // moves focus to data row 0 BEFORE Space-keyup fires, so Space toggles that row, not
    // select-all. Replicated by holding Space down while pressing ArrowDown.
    await page.locator('[data-row-index="0"][data-column-index="0"]').focus();
    await page.keyboard.down('Space');
    await page.keyboard.down('ArrowDown');
    await page.keyboard.up('ArrowDown');
    await page.keyboard.up('Space');
    await expect(selectCount).toHaveText('8');
    await expect(payload).toHaveText('["0"]');
    await expect(payloadRowsById).toHaveText('{"0":true}');
    await expect(payloadAllRows).toHaveText('false');

    // Space + ArrowUp chord: starts on row 1 (still focused there), Space toggles header
    // select-all → all 21 selected. (ArrowUp moves focus back up.)
    await page.locator('[data-row-index="0"][data-column-index="0"]').focus();
    await page.keyboard.down('Space');
    await page.keyboard.down('ArrowUp');
    await page.keyboard.up('ArrowUp');
    await page.keyboard.up('Space');
    await expect(selectCount).toHaveText('9');
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('true');

    // Deselect all.
    await page.locator('[data-row-index="0"][data-column-index="0"]').click();

    // Select 3 rows, then column-filter on "Name".
    await page.getByText('Name-0', { exact: true }).click();
    await page.getByText('Name-1', { exact: true }).click();
    await page.getByText('Name-5', { exact: true }).click();
    await page.getByText('Name', { exact: true }).click();
    const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
    await expect(popover).toBeVisible();
    const filterInput = popover.locator('[ui5-input] input');
    await filterInput.fill('7');
    await filterInput.press('Enter');

    await expect(filterCount).toHaveText('1');
    await expect(filterLast).toHaveText(
      JSON.stringify({ value: '7', columnId: 'name', filters: [{ id: 'name', value: '7' }] }),
    );
    await expect(payload).toHaveText('["0","1","5"]');
    await expect(payloadAllRows).toHaveText('false');

    // Select-all of filtered set → adds the missing filtered rows (7, 17, 20).
    await page.locator('[data-row-index="0"][data-column-index="0"]').click();
    await expect(selectCount).toHaveText('14');
    await expect(payload).toHaveText('["0","1","5","7","17","20"]');
    await expect(payloadAllRows).toHaveText('false');
    await expect(payloadAllVisible).toHaveText('true');

    // Clear filter via column header.
    await page.getByText('Name', { exact: true }).click();
    await expect(popover).toBeVisible();
    await filterInput.fill('');
    await filterInput.press('Enter');
    await expect(filterCount).toHaveText('2');
    await expect(filterLast).toHaveText(JSON.stringify({ value: undefined, columnId: 'name', filters: [] }));

    // Close popover before clicking rows underneath.
    await page.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(popover).toHaveCount(0);

    // Select-all → all 21 rows.
    await page.locator('[data-row-index="0"][data-column-index="0"]').click();
    await page.getByText('Name-17', { exact: true }).click();
    // Re-filter to "7" via column header.
    await page.getByText('Name', { exact: true }).click();
    await expect(popover).toBeVisible();
    await filterInput.fill('7');
    await filterInput.press('Enter');
    await expect(filterCount).toHaveText('3');
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('false');
    await expect(payloadAllVisible).toHaveText('false');

    // Close popover, then re-select Name-17.
    await page.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(popover).toHaveCount(0);
    await page.getByText('Name-17', { exact: true }).click();
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('true');
    await expect(payloadAllVisible).toHaveText('true');

    // Clear filter again via popover.
    await page.getByText('Name', { exact: true }).click();
    await expect(popover).toBeVisible();
    await filterInput.fill('');
    await filterInput.press('Enter');
    await expect(filterCount).toHaveText('4');
    await page.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(popover).toHaveCount(0);

    // Deselect Name-17, then globally filter via the external <input data-testid="input">.
    await page.getByText('Name-17', { exact: true }).click();
    const externalInput = page.getByTestId('input');
    await externalInput.fill('7');
    await externalInput.press('Enter');
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('false');
    await expect(payloadAllVisible).toHaveText('false');

    await page.getByText('Name-17', { exact: true }).click();
    await expect(payload).toHaveText(
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    await expect(payloadAllRows).toHaveText('true');
    await expect(payloadAllVisible).toHaveText('true');
  });

  // SKIPPED (partial vs cypress): does not cover the keyboard-focus checks after Group/Ungroup
  // (cy.focused row/col index) nor the allRowsSelected/allVisibleRowsSelected=false checks at two
  // intermediate checkpoints. Retained by AnalyticalTable.cy.tsx `it('GroupBy selection')`.
  test.skip('GroupBy selection', async ({ mount, page }) => {
    await mount('Selection/GroupBySelectionTestComp');
    const selectCount = page.getByTestId('select-count');

    // Wait for the post-mount toggleAllRowsExpanded to take effect.
    await expect(page.getByText('QWE', { exact: true })).toBeVisible();

    // Click on aggregated cell containing QWE — selects that nested row.
    await page.getByText('QWE', { exact: true }).click();
    await expect(selectCount).toHaveText('1');
    await expect(page.getByTestId('selectedFlatRowsLength')).toHaveText('1');
    await expect(page.getByTestId('selectedRowIds')).toHaveText('{"2":true}');
    await expect(page.getByTestId('isSelected')).toHaveText('true');
    await expect(page.getByTestId('allRowsSelected')).toHaveText('false');
    await expect(page.getByTestId('allVisibleRowsSelected')).toHaveText('false');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Group by Friend Name via column header menu.
    await page.getByText('Friend Name', { exact: true }).click();
    const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
    await expect(popover).toBeVisible();
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Group' }).click();

    // After grouping by Friend Name, expand the row at aria-rowindex=8.
    await page.locator('[aria-rowindex="8"] > [aria-colindex="3"] > [title="Expand Node"] > [ui5-icon]').click();

    // Click '25' to select that row.
    await page.getByText('25', { exact: true }).first().click();
    await expect(selectCount).toHaveText('2');
    await expect(page.getByTestId('selectedFlatRowsLength')).toHaveText('2');
    await expect(page.getByTestId('selectedRowIds')).toHaveText('{"2":true,"4":true}');
    await expect(page.getByTestId('isSelected')).toHaveText('true');

    // Click again → deselect.
    await page.getByText('25', { exact: true }).first().click();
    await expect(selectCount).toHaveText('3');
    await expect(page.getByTestId('selectedFlatRowsLength')).toHaveText('1');
    await expect(page.getByTestId('selectedRowIds')).toHaveText('{"2":true}');
    await expect(page.getByTestId('isSelected')).toHaveText('false');

    // Click select-all → all visible selected.
    await page.locator(SELECT_ALL_CELL).click();
    await expect(selectCount).toHaveText('4');
    await expect(page.getByTestId('allVisibleRowsSelected')).toHaveText('true');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).not.toHaveAttribute('indeterminate');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('checked');

    // Click select-all → all deselected.
    await page.locator(SELECT_ALL_CELL).click();
    await expect(selectCount).toHaveText('5');
    await expect(page.getByTestId('allVisibleRowsSelected')).toHaveText('false');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).not.toHaveAttribute('indeterminate');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).not.toHaveAttribute('checked');

    // Ungroup.
    await page.getByText('Friend Name', { exact: true }).click();
    await expect(popover).toBeVisible();
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Ungroup' }).click();
  });

  // SKIPPED (partial vs cypress): downgrades the full 170-key `selectedRows` equality assertions to
  // partial `toContain` on a few keys, and drops the `indeterminate-count === 4` checkpoint. Retained
  // by AnalyticalTable.cy.tsx `it('useIndeterminateRowSelection - select subRows')`.
  test.skip('useIndeterminateRowSelection - select subRows (selectSubRows: true)', async ({ mount, page }) => {
    await mount('Selection/IndeterminateRowSelectionTestComp', { selectSubRows: true });
    const indeterminateCount = page.getByTestId('indeterminate-count');

    // Select all — with selectSubRows:true, all 170 row IDs are selected.
    await page.locator(SELECT_ALL_CELL).click();
    // Wait for the giant selectedRowIds payload to propagate before reading it.
    await expect(page.getByTestId('selectedRows')).toContainText('"1.3.3.3":true');
    const selectedRowsText = await page.getByTestId('selectedRows').textContent();
    expect(selectedRowsText).toContain('"0":true');
    expect(selectedRowsText).toContain('"1":true');
    expect(selectedRowsText).toContain('"1.3.3.3":true');
    expect(selectedRowsText).toContain('"1.0.0.3":true');

    // Expand row 3 (Katy Bradshaw → aria-rowindex 3 since header=1, root[0]=2, root[1]=3).
    await page.locator('[aria-rowindex="3"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    // Expand row 4 (now Mae Dixon).
    await page.locator('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    // Expand row 5 (now Diann Alvarado).
    await page.locator('[aria-rowindex="5"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();

    // Deselect Wiggins Cotton (row 1.0.0.0).
    await page.getByText('Wiggins Cotton', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('1');
    const afterDeselectText = await page.getByTestId('selectedRows').textContent();
    expect(afterDeselectText).not.toContain('"1.0.0.0":true');
    expect(afterDeselectText).toContain('"1.0.0.1":true');

    // All ancestors should be indeterminate.
    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Deselect all: two clicks on select-all toggle deselect.
    await page.locator(SELECT_ALL_CELL).click();
    await page.locator(SELECT_ALL_CELL).click();
    await expect(indeterminateCount).toHaveText('2');

    // Select a leaf row.
    await page.getByText('Wiggins Cotton', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('3');
    await expect(page.getByTestId('selectedRows')).toHaveText('{"1.0.0.0":true}');

    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Deselect all again.
    await page.locator(SELECT_ALL_CELL).click();
    await page.locator(SELECT_ALL_CELL).click();

    // Select row WITH subRows (Diann Alvarado = 1.0.0). With selectSubRows:true, all descendants are
    // also selected (aria-rowindex 5..9 all aria-selected="true").
    await page.getByText('Diann Alvarado', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('5');

    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="6"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="7"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="8"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="9"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Deselect all.
    await page.locator(SELECT_ALL_CELL).click();
    await page.locator(SELECT_ALL_CELL).click();

    // Select all 4 leaves manually — last click triggers auto-selection of the parent (1.0.0).
    await page.getByText('Wiggins Cotton', { exact: true }).click();
    await page.getByText('Herring Flores', { exact: true }).click();
    await page.getByText('Allen Kidd', { exact: true }).click();
    await expect(page.getByTestId('selectedRows')).toHaveText('{"1.0.0.0":true,"1.0.0.1":true,"1.0.0.2":true}');
    await page.getByText('Selma Kaufman', { exact: true }).click();
    await expect(page.getByTestId('selectedRows')).toHaveText(
      '{"1.0.0.0":true,"1.0.0.1":true,"1.0.0.2":true,"1.0.0.3":true,"1.0.0":true}',
    );
  });

  test('useIndeterminateRowSelection (no selectSubRows cascade)', async ({ mount, page }) => {
    await mount('Selection/IndeterminateRowSelectionTestComp', { selectSubRows: false });
    const indeterminateCount = page.getByTestId('indeterminate-count');

    // Select-all.
    await page.locator(SELECT_ALL_CELL).click();

    // Expand row 3, then 4, then 5.
    await page.locator('[aria-rowindex="3"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    await page.locator('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    await page.locator('[aria-rowindex="5"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();

    // Deselect Wiggins Cotton.
    await page.getByText('Wiggins Cotton', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('1');

    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Deselect-all twice.
    await page.locator(SELECT_ALL_CELL).click();
    await page.locator(SELECT_ALL_CELL).click();
    await expect(indeterminateCount).toHaveText('2');

    // Select leaf Wiggins Cotton.
    await page.getByText('Wiggins Cotton', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('3');
    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Deselect-all twice again.
    await page.locator(SELECT_ALL_CELL).click();
    await page.locator(SELECT_ALL_CELL).click();
    await expect(indeterminateCount).toHaveText('4');

    // Select Diann Alvarado (parent) — sub-rows do NOT cascade because selectSubRows is false.
    await page.getByText('Diann Alvarado', { exact: true }).click();
    await expect(indeterminateCount).toHaveText('5');

    await expect(page.locator('[aria-rowindex="5"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[aria-rowindex="6"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'false');
    await expect(page.locator('[aria-rowindex="7"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'false');
    await expect(page.locator('[aria-rowindex="8"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'false');
    await expect(page.locator('[aria-rowindex="9"] > [aria-colindex="1"]')).toHaveAttribute('aria-selected', 'false');
    await expect(page.locator('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]')).toHaveAttribute(
      'indeterminate',
    );
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');
  });

  test('navigated row', async ({ mount, page }) => {
    await mount('Selection/NavigatedRowTestComp');

    await page.getByText('A', { exact: true }).click();
    const navCell = page.locator('[data-component-name="AnalyticalTableNavigatedCell"]');
    await expect(navCell).toHaveCount(1);
    await expect(navCell).toBeVisible();
    // Resolve the CSS var after the themed nav cell has rendered so :root has the theme applied.
    const navigationColor = await cssVarRgb(page, '--sapList_SelectionBorderColor');
    await expect(navCell).toHaveCSS('background-color', navigationColor);

    await page.getByText('B', { exact: true }).click();
    await expect(navCell).toHaveCount(1);
    await expect(navCell).toBeVisible();
    await expect(navCell).toHaveCSS('background-color', navigationColor);
  });

  test('select row with custom row key', async ({ mount, page }) => {
    await mount('Selection/CustomRowKeyTestComp');

    const row2 = page.locator('[aria-rowindex="2"]');
    await expect(row2).toBeVisible();
    // Resolve the CSS var after the themed table has rendered so :root has the theme applied.
    const selectedRowColor = await cssVarRgb(page, '--sapList_SelectionBackgroundColor');
    await expect(row2).toHaveCSS('background-color', selectedRowColor);
  });

  test('onRowClick (default + sel-cell filter variants)', async ({ mount, page }) => {
    await mount('Selection/RowClickTestComp');
    const rowClickCount = page.getByTestId('row-click-count');
    const rowSelectCount = page.getByTestId('row-select-count');

    // Click all 4 selection cells.
    const selCells = page.locator('[data-selection-cell="true"]');
    await expect(selCells).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      await selCells.nth(i).click();
    }
    await expect(rowClickCount).toHaveText('4');
    await expect(rowSelectCount).toHaveText('4');

    // Three more clicks on text cells.
    await page.getByText('A', { exact: true }).click();
    await page.getByText('20', { exact: true }).click();
    await page.getByText('Dolor', { exact: true }).click();
    await expect(rowClickCount).toHaveText('7');
    await expect(rowSelectCount).toHaveText('7');

    // Phase 2: onRowClick filters out selection-cell clicks; onRowSelect still fires. The mode
    // switch remounts the inner table (selection state resets) while the counters persist.
    await page.getByTestId('set-filter-mode').click();
    const selCells2 = page.locator('[data-selection-cell="true"]');
    await expect(selCells2).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      await selCells2.nth(i).click();
    }
    // rowClick should NOT have grown (still 7).
    await expect(rowClickCount).toHaveText('7');
    // rowSelect grew by 4 to 11.
    await expect(rowSelectCount).toHaveText('11');
  });

  test('onRowContextMenu', async ({ mount, page, browserName }) => {
    // TODO(cross-browser): webkit's click({ button: 'right' }) fires the first contextmenu event but
    // fails to dispatch the second one when the target changes cells — the poll for a 2nd call
    // times out. Chromium/firefox both fire both events.
    test.fixme(browserName === 'webkit', 'webkit right-click does not fire second contextmenu on cell change');
    await mount('Selection/RowContextMenuTestComp');
    const contextCount = page.getByTestId('context-count');
    const contextLast = page.getByTestId('context-last');

    await page.getByText('A', { exact: true }).click({ button: 'right' });
    await expect(contextCount).toHaveText('1');
    await expect(contextLast).toHaveText(JSON.stringify({ name: 'A', age: 40, columnId: 'name' }));

    await page.getByText('20', { exact: true }).click({ button: 'right' });
    await expect(contextCount).toHaveText('2');
    await expect(contextLast).toHaveText(JSON.stringify({ name: 'B', age: 20, columnId: 'age' }));
  });

  test('withRowHighlight (status, custom field, indication, function)', async ({ mount, page }) => {
    const transparent = 'rgba(0, 0, 0, 0)';

    // Variant 1: default `status` field.
    let mountResult = await mount('Selection/WithRowHighlightStatusTestComp');
    // Resolve CSS vars AFTER mount so the theme has been applied to :root.
    const errorColor = await cssVarRgb(page, '--sapErrorColor');
    const successColor = await cssVarRgb(page, '--sapSuccessColor');
    let highlightCells = page.locator('[data-component-name="AnalyticalTableHighlightCell"]');
    await expect(highlightCells).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      const expected = (i + 1) % 2 ? errorColor : transparent;
      await expect(highlightCells.nth(i)).toHaveCSS('background-color', expected);
    }

    // Variant 2: custom highlight field.
    await mountResult.unmount();
    mountResult = await mount('Selection/WithRowHighlightCustomFieldTestComp');
    highlightCells = page.locator('[data-component-name="AnalyticalTableHighlightCell"]');
    await expect(highlightCells).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      const expected = (i + 1) % 2 ? transparent : successColor;
      await expect(highlightCells.nth(i)).toHaveCSS('background-color', expected);
    }

    // Variant 3: indication colors. Index 0 maps to IndicationColor.Indication00 which is
    // transparent in the row-highlight render; subsequent indices map to `sapIndicationColor_<i>`.
    await mountResult.unmount();
    mountResult = await mount('Selection/WithRowHighlightIndicationTestComp');
    highlightCells = page.locator('[data-component-name="AnalyticalTableHighlightCell"]');
    await expect(highlightCells).toHaveCount(9);
    await expect(highlightCells.nth(0)).toHaveCSS('background-color', transparent);
    for (let i = 1; i < 9; i++) {
      const indicationColor = await cssVarRgb(page, `--sapIndicationColor_${i}`);
      await expect(highlightCells.nth(i)).toHaveCSS('background-color', indicationColor);
    }

    // Variant 4: function returning mixed ValueState/IndicationColor values.
    await mountResult.unmount();
    await mount('Selection/WithRowHighlightFnTestComp');
    highlightCells = page.locator('[data-component-name="AnalyticalTableHighlightCell"]');
    await expect(highlightCells).toHaveCount(4);
    await expect(highlightCells.nth(0)).toHaveCSS('background-color', errorColor);
    await expect(highlightCells.nth(1)).toHaveCSS('background-color', successColor);
    await expect(highlightCells.nth(2)).toHaveCSS('background-color', await cssVarRgb(page, '--sapIndicationColor_1'));
    await expect(highlightCells.nth(3)).toHaveCSS('background-color', await cssVarRgb(page, '--sapIndicationColor_8'));
  });

  test('select-all', async ({ mount, page }) => {
    await mount('Selection/SelectAllTestComp');
    const selectCount = page.getByTestId('select-count');

    const selAll = page.locator('[data-visible-column-index="0"][data-visible-row-index="0"]');
    await expect(selAll).toHaveAttribute('title', 'Select All');
    // The "press the spacebar" instruction lives in a hidden aria-describedby element.
    await expect(selAll).toHaveAttribute('aria-label', 'Selection Column');
    await expect(selAll).toHaveAttribute('aria-describedby', /header-select-all/);
    await selAll.click();

    // Visible text "Select All" still in DOM but visually hidden.
    await expect(selAll).toContainText('Select All');
    await expect(selAll.getByText('Select All', { exact: true })).not.toBeVisible();
    await expect(selAll).toHaveAttribute('aria-describedby', /header-deselect-all/);

    await expect(selectCount).toHaveText('1');
    await expect(selAll).toHaveAttribute('title', 'Deselect All');
    await expect(page.getByTestId('payload')).toHaveText(
      '{"selectedRowIds":{"0":true,"1":true,"2":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"2"},{"id":"3"}],"allRowsSelected":true,"allVisibleRowsSelected":true}',
    );

    await page.getByText('X', { exact: true }).click();
    await expect(selectCount).toHaveText('2');
    await expect(page.getByTestId('payload')).toHaveText(
      '{"selectedRowIds":{"0":true,"1":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"3"}],"allRowsSelected":false,"allVisibleRowsSelected":false}',
    );

    await expect(selAll).toHaveAttribute('title', 'Select All');
    await selAll.click();
    await expect(selectCount).toHaveText('3');
    await expect(page.getByTestId('payload')).toHaveText(
      '{"selectedRowIds":{"0":true,"1":true,"2":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"2"},{"id":"3"}],"allRowsSelected":true,"allVisibleRowsSelected":true}',
    );

    await selAll.click();
    await expect(selectCount).toHaveText('4');
    await expect(page.getByTestId('payload')).toHaveText(
      '{"selectedRowIds":{},"selectedFlatRows":[],"allRowsSelected":false,"allVisibleRowsSelected":false}',
    );
  });

  test('select-all with filtered rows', async ({ mount, page, ui5wc }) => {
    await mount('Selection/SelectAllFilteredTestComp');

    const checkbox = page.locator(SELECT_ALL_CHECKBOX);
    const selAllCell = page.locator(SELECT_ALL_CELL);
    const filterInput = page.getByTestId('filterInput');

    await expect(checkbox).not.toHaveAttribute('indeterminate');
    await expect(checkbox).not.toHaveAttribute('checked');

    // filtered 0/2 (0/4): filter to "J" → only John, Jane.
    await ui5wc.typeIntoInput(filterInput, 'J');
    await expect(page.getByText('Bob', { exact: true })).toHaveCount(0);
    await expect(page.getByText('Alice', { exact: true })).toHaveCount(0);

    // filtered 1/2 (1/4)
    await page.getByText('John', { exact: true }).click();
    await expect(checkbox).toHaveAttribute('indeterminate');
    await expect(page.getByTestId('allRowsSelected')).toHaveText('false');
    await expect(page.getByTestId('allVisibleRowsSelected')).toHaveText('false');

    // filtered 2/2 (2/4)
    await page.getByText('Jane', { exact: true }).click();
    await expect(checkbox).not.toHaveAttribute('indeterminate');
    await expect(checkbox).toHaveAttribute('checked');
    await expect(page.getByTestId('allRowsSelected')).toHaveText('false');
    await expect(page.getByTestId('allVisibleRowsSelected')).toHaveText('true');

    // Unfilter → 2/4
    await ui5wc.typeIntoInput(filterInput, '');
    await expect(checkbox).toHaveAttribute('indeterminate');

    // 3/4
    await page.getByText('Bob', { exact: true }).click();
    await expect(checkbox).toHaveAttribute('indeterminate');

    // Filter back to "J" → filtered 2/2 (3/4)
    await ui5wc.typeIntoInput(filterInput, 'J');
    await expect(checkbox).toHaveAttribute('checked');
    await expect(checkbox).not.toHaveAttribute('indeterminate');

    // filtered 1/2 (2/4)
    await page.getByText('John', { exact: true }).click();
    await expect(checkbox).toHaveAttribute('indeterminate');

    // filtered 0/2 (1/4)
    await page.getByText('Jane', { exact: true }).click();
    await expect(checkbox).not.toHaveAttribute('indeterminate');
    await expect(checkbox).not.toHaveAttribute('checked');

    // filtered 2/2 (3/4)
    await selAllCell.click();
    await expect(checkbox).toHaveAttribute('checked');

    // 3/4
    await ui5wc.typeIntoInput(filterInput, '');
    await expect(checkbox).toHaveAttribute('indeterminate');
  });

  test('selection state preserved during loading/overlay', async ({ mount, page }) => {
    await mount('Selection/SelectionPreservedLoadingOverlayTestComp');

    await page.getByText('A', { exact: true }).click();
    await page.getByText('B', { exact: true }).click();
    await expect(page.locator('[aria-rowindex="2"]')).toHaveAttribute('data-is-selected');
    await expect(page.locator('[aria-rowindex="3"]')).toHaveAttribute('data-is-selected');
    await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');

    // Toggle loading on/off, then overlay on/off — selection state must persist throughout.
    const toggleLoading = page.getByTestId('toggleLoading');
    const toggleOverlay = page.getByTestId('toggleOverlay');

    for (const btn of [toggleLoading, toggleLoading, toggleOverlay, toggleOverlay]) {
      await btn.click();
      await expect(page.locator('[aria-rowindex="2"]')).toHaveAttribute('data-is-selected');
      await expect(page.locator('[aria-rowindex="3"]')).toHaveAttribute('data-is-selected');
      await expect(page.locator(SELECT_ALL_CHECKBOX)).toHaveAttribute('indeterminate');
    }
  });

  test('manualGroupBy - backend grouping', async ({ mount, page }) => {
    await mount('Selection/ManualGroupByBackendTestComp');

    await expect(page.getByText('Simon', { exact: true })).toBeVisible();
    await expect(page.getByText('Peter', { exact: true })).toBeVisible();
    await expect(page.getByText('Martha', { exact: true })).toBeVisible();
    await expect(page.getByText('Aggregated', { exact: true })).toHaveCount(0);

    // Group by Name via column header menu.
    await page.getByText('Name', { exact: true }).click();
    const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
    await expect(popover).toBeVisible();
    await page.locator('[ui5-list] [ui5-li]', { hasText: 'Group' }).click();

    await expect(page.getByText('Simon', { exact: true })).toBeVisible();
    await expect(page.getByText('Aggregated', { exact: true })).toHaveCount(2);
    const expandArrows = page.locator('[ui5-icon][name="navigation-right-arrow"]');
    await expect(expandArrows).toHaveCount(2);

    // Expand the second arrow → Martha's children.
    await expandArrows.nth(1).click();
    await expect(page.getByText('Martha', { exact: true })).toHaveCount(1);

    // After expanding Martha (per SERVER_DATA_MARTHA), the 3 children at visible-row-index 4..6
    // have ages 30, 25, 25.
    await expect(page.locator('[data-visible-column-index="1"][data-visible-row-index="4"]')).toHaveText('30');
    await expect(page.locator('[data-visible-column-index="1"][data-visible-row-index="5"]')).toHaveText('25');
    await expect(page.locator('[data-visible-column-index="1"][data-visible-row-index="6"]')).toHaveText('25');
  });

  test('custom cell (with markerAllowTableRowSelection) & header', async ({ mount, page }) => {
    await mount('Selection/CustomCellHeaderTestComp');
    const cellClickCount = page.getByTestId('cell-click-count');
    const headerClickCount = page.getByTestId('header-click-count');
    const selectCount = page.getByTestId('select-count');

    const cellBtns = page.getByText('Custom Cell Button');
    await expect(cellBtns).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      await cellBtns.nth(i).click();
    }
    await expect(cellClickCount).toHaveText('2');
    // No row selection should fire — UI5 Button is on the blocklist.
    await expect(selectCount).toHaveText('0');

    await page.getByText('Custom Header Button', { exact: true }).click();
    await expect(headerClickCount).toHaveText('1');

    // Phase 2: enable markerAllowTableRowSelection on cell click. The component remounts the inner
    // table via `key` to reset react-table's internal state while the counters persist.
    await page.getByTestId('set-marker').click();
    const cellBtns2 = page.getByText('Custom Cell Button');
    await expect(cellBtns2).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      await cellBtns2.nth(i).click();
    }
    await expect(cellClickCount).toHaveText('4');
    // Now row select fires twice.
    await expect(selectCount).toHaveText('2');
  });
});
