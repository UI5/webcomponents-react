import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import { AnalyticalTableScaleWidthMode } from '../../../enums/AnalyticalTableScaleWidthMode.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { AnalyticalTableColumnDefinition } from '../index.js';
import type { StickyHarness } from './AnalyticalTable.gallery.js';

// 5×150 = 750px total; container 500px → guaranteed horizontal overflow.
const wideCols: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150, sticky: 'start' },
  { Header: 'Age', accessor: 'age', width: 150 },
  { Header: 'Friend Name', accessor: 'friend.name', width: 150 },
  { Header: 'Friend Age', accessor: 'friend.age', width: 150 },
  { Header: 'Status', accessor: 'status', width: 150 },
];

// No sticky seed and no sort/filter/group → the popover only opens once the sticky hook contributes the freeze item.
const plainCols: AnalyticalTableColumnDefinition[] = wideCols.map((col) => ({ ...col, sticky: undefined }));

const scaleCols: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', sticky: 'start' },
  { Header: 'Age', accessor: 'age', width: 500 },
  { Header: 'Friend Name', accessor: 'friend.name' },
];

const disableStickyOn =
  (accessor: string) =>
  (col: AnalyticalTableColumnDefinition): AnalyticalTableColumnDefinition =>
    col.accessor === accessor ? { ...col, disableSticky: true } : col;

const STORY = 'AnalyticalTable/StickyHarness';

const columnHeader = (page: Page, id: string) => page.locator(`[data-column-id="${id}"]`);
const stickyAncestor = (locator: Locator) => locator.locator('xpath=ancestor-or-self::*[@data-sticky-start]');
const boxWidth = async (locator: Locator) => (await locator.boundingBox()).width;
const listItem = (page: Page, text: string) => page.locator(`[ui5-li][text="${text}"]`);
const popover = (page: Page) => page.locator('[data-component-name="ATHeaderPopover"]');
const openHeaderPopover = (page: Page, text: string) => page.getByText(text, { exact: true }).click();

// Real sticky invariant: the pinned column keeps its viewport x-position while a non-sticky column scrolls under it.
async function expectPinnedDuringScroll(page: Page, stickyId: string, scrollingId: string) {
  const sticky = columnHeader(page, stickyId);
  const scrolling = columnHeader(page, scrollingId);
  const stickyBefore = (await sticky.boundingBox()).x;
  const scrollBefore = (await scrolling.boundingBox()).x;
  await page.locator('[data-component-name="AnalyticalTableContainer"]').evaluate((el) => el.scrollTo(260, 0));
  await page.waitForTimeout(100);
  expect(Math.abs((await sticky.boundingBox()).x - stickyBefore)).toBeLessThanOrEqual(2);
  expect((await scrolling.boundingBox()).x).toBeLessThan(scrollBefore - 80);
}

// Height of the freeze line (::after on the last sticky header) vs. the header row height.
async function freezeLineVsHeader(page: Page) {
  return page
    .locator('[data-sticky-start-last]')
    .first()
    .evaluate((el) => ({
      lineHeight: parseFloat(getComputedStyle(el, '::after').height),
      headerHeight: el.getBoundingClientRect().height,
    }));
}

test.describe('AnalyticalTable sticky columns — behavior', () => {
  test('seeded column stays pinned during scroll and the freeze line spans header + body', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: wideCols });
    await expect(page.getByText('Name-0')).toBeVisible();
    await expectPinnedDuringScroll(page, 'name', 'friend.age');
    const { lineHeight, headerHeight } = await freezeLineVsHeader(page);
    expect(lineHeight).toBeGreaterThan(headerHeight + 20);
  });

  test('no data: sticky stays active but the freeze line is limited to the header row', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: wideCols, empty: true });
    await expect(page.locator('[data-sticky-start]').first()).toBeAttached();
    const { lineHeight, headerHeight } = await freezeLineVsHeader(page);
    expect(Math.abs(lineHeight - headerHeight)).toBeLessThanOrEqual(2);
  });

  test('runtime toggle pins a column during scroll and keeps its own width', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: wideCols, toggleId: 'friend.name' });
    await page.getByTestId('toggle').click();
    await expect(stickyAncestor(columnHeader(page, 'friend.name'))).toBeAttached();
    expect(Math.abs((await boxWidth(stickyAncestor(columnHeader(page, 'friend.name')))) - 150)).toBeLessThanOrEqual(5);
    await expectPinnedDuringScroll(page, 'friend.name', 'friend.age');
  });

  test('a grouped column auto-pins and stays during scroll', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, {
      columns: wideCols,
      groupable: true,
      reactTableOptions: { initialState: { groupBy: ['friend.age'] } },
    });
    await expect(stickyAncestor(columnHeader(page, 'friend.age'))).toBeAttached();
    await expectPinnedDuringScroll(page, 'friend.age', 'status');
  });

  test('tree table: sticky column pins during scroll and rows still expand', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: wideCols, tree: true });
    await expect(page.getByRole('treegrid')).toBeVisible();
    await expectPinnedDuringScroll(page, 'name', 'friend.age');
    await page.getByRole('treegrid').evaluate((el) => el.scrollTo(0, 0));
    await page.locator('[title="Expand Node"]').first().locator('[ui5-button], [ui5-icon]').first().click();
    await expect(page.getByText('Child-0')).toBeVisible();
  });

  test('drag & drop excludes sticky columns but keeps non-sticky columns draggable', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: wideCols });
    await expect(columnHeader(page, 'name')).toHaveAttribute('draggable', 'false');
    await expect(columnHeader(page, 'age')).toHaveAttribute('draggable', 'true');
    await expect(columnHeader(page, 'friend.name')).toHaveAttribute('draggable', 'true');
  });

  test('double-clicking a sticky column resizer resizes it to content', async ({ mount, page }) => {
    const autoCols = wideCols.map((c) => ({ ...c, autoResizable: true }));
    await mount<typeof StickyHarness>(STORY, { columns: autoCols });
    expect(Math.abs((await boxWidth(stickyAncestor(columnHeader(page, 'name')))) - 150)).toBeLessThanOrEqual(5);
    await page.locator('[data-component-name="AnalyticalTableResizer"]').first().dblclick();
    await expect
      .poll(async () => Math.abs((await boxWidth(stickyAncestor(columnHeader(page, 'name')))) - 150))
      .toBeGreaterThan(5);
  });

  for (const variant of [
    { label: 'withRowHighlight', props: { withRowHighlight: true, highlightField: 'status' } },
    { label: 'selectionMode Multiple', props: { selectionMode: AnalyticalTableSelectionMode.Multiple } },
  ]) {
    test(`internal start column auto-pins and stays during scroll — ${variant.label}`, async ({ mount, page }) => {
      await mount<typeof StickyHarness>(STORY, { columns: wideCols, ...variant.props });
      await expect(stickyAncestor(page.locator('[data-visible-column-index="0"][data-row-index="0"]'))).toBeAttached();
      await expectPinnedDuringScroll(page, 'name', 'friend.age');
    });
  }

  for (const scaleWidthMode of [AnalyticalTableScaleWidthMode.Smart, AnalyticalTableScaleWidthMode.Grow]) {
    test(`scaleWidthMode ${scaleWidthMode}: runtime toggle recalculates widths (no oversized column)`, async ({
      mount,
      page,
    }) => {
      await mount<typeof StickyHarness>(STORY, {
        columns: scaleCols,
        toggleId: 'friend.name',
        containerWidth: '900px',
        scaleWidthMode,
      });
      await page.getByTestId('toggle').click();
      await expect(stickyAncestor(columnHeader(page, 'friend.name'))).toBeAttached();
      await expect.poll(async () => boxWidth(stickyAncestor(columnHeader(page, 'friend.name')))).toBeLessThan(400);
    });
  }

  test('infiniteScroll: onLoadMore fires in sticky mode', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, {
      columns: wideCols,
      visibleRows: 4,
      infiniteScroll: true,
      infiniteScrollThreshold: 2,
    });
    const grid = page.getByRole('grid');
    await expect(grid).toBeVisible();
    await grid.evaluate((el) => el.scrollTo(0, el.scrollHeight));
    await expect(page.getByTestId('load-more-count')).not.toHaveText('0');
  });
});

test.describe('AnalyticalTable sticky columns — freeze/unfreeze popover item', () => {
  test('freeze then unfreeze the same column via the popover', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: plainCols });
    await expect(page.getByText('Name-0')).toBeVisible();
    await expect(page.locator('[data-sticky-start]')).toHaveCount(0);

    // popover opens purely because of the contributed freeze item (hasPopover gate)
    await openHeaderPopover(page, 'Age');
    await expect(popover(page)).toBeVisible();
    await listItem(page, 'Freeze Column').click();
    await expect(stickyAncestor(columnHeader(page, 'age'))).toBeAttached();

    await openHeaderPopover(page, 'Age');
    await expect(listItem(page, 'Unfreeze Column')).toBeVisible();
    await expect(listItem(page, 'Freeze Column')).toHaveCount(0);
    await listItem(page, 'Unfreeze Column').click();
    await expect(page.locator('[data-sticky-start]')).toHaveCount(0);
  });

  for (const c of [
    {
      label: 'hook not used',
      props: { columns: plainCols, withHook: false, sortable: true },
      click: 'Name',
      present: 'Sort Ascending',
    },
    {
      label: 'grouped column',
      props: { columns: wideCols, groupable: true, reactTableOptions: { initialState: { groupBy: ['age'] } } },
      click: 'Age',
      present: 'Ungroup',
    },
  ]) {
    test(`no freeze/unfreeze item — ${c.label}`, async ({ mount, page }) => {
      await mount<typeof StickyHarness>(STORY, c.props);
      await openHeaderPopover(page, c.click);
      await expect(popover(page)).toBeVisible();
      await expect(listItem(page, c.present)).toBeVisible();
      await expect(listItem(page, 'Freeze Column')).toHaveCount(0);
      await expect(listItem(page, 'Unfreeze Column')).toHaveCount(0);
    });
  }

  test('onStickyColumnsChange fires for popover toggles but not for programmatic toggling', async ({ mount, page }) => {
    await mount<typeof StickyHarness>(STORY, { columns: plainCols, toggleId: 'age' });
    await expect(page.getByText('Name-0')).toBeVisible();

    // programmatic pinning must NOT fire the callback
    await page.getByTestId('toggle').click();
    await expect(stickyAncestor(columnHeader(page, 'age'))).toBeAttached();
    await expect(page.getByTestId('sticky-change-count')).toHaveText('0');

    // unfreeze the (now pinned) Age column via the popover → callback fires with sticky:false
    await openHeaderPopover(page, 'Age');
    await listItem(page, 'Unfreeze Column').click();
    await expect(page.getByTestId('sticky-change-count')).toHaveText('1');
    await expect(page.getByTestId('sticky-last')).toHaveText(JSON.stringify({ sticky: false, stickyColumns: [] }));

    // freeze Friend Name via the popover → callback fires with sticky:true and the new list
    await openHeaderPopover(page, 'Friend Name');
    await listItem(page, 'Freeze Column').click();
    await expect(page.getByTestId('sticky-change-count')).toHaveText('2');
    await expect(page.getByTestId('sticky-last')).toHaveText(
      JSON.stringify({ sticky: true, stickyColumns: ['friend.name'] }),
    );
  });

  for (const c of [
    {
      label: 'unseeded, no other options',
      columns: plainCols.map(disableStickyOn('age')),
      click: 'Age',
      seeded: false,
    },
    {
      label: 'seeded sticky:start (locked)',
      columns: wideCols.map(disableStickyOn('name')),
      click: 'Name',
      seeded: true,
    },
  ]) {
    test(`disableSticky offers no popover — ${c.label}`, async ({ mount, page }) => {
      await mount<typeof StickyHarness>(STORY, { columns: c.columns });
      await expect(page.getByText('Name-0')).toBeVisible();
      if (c.seeded) {
        // state APIs are not gated: sticky:'start' still pins it ...
        await expect(stickyAncestor(columnHeader(page, 'name'))).toBeAttached();
      }
      // ... but with no other popover option there is no UI affordance to (un)freeze it
      await openHeaderPopover(page, c.click);
      await expect(popover(page)).toHaveCount(0);
    });
  }

  test('disableSticky drops the freeze item but keeps other options; programmatic freeze still works', async ({
    mount,
    page,
  }) => {
    await mount<typeof StickyHarness>(STORY, {
      columns: plainCols.map(disableStickyOn('age')),
      toggleId: 'age',
      sortable: true,
    });
    await expect(page.getByText('Name-0')).toBeVisible();
    await openHeaderPopover(page, 'Age');
    await expect(popover(page)).toBeVisible();
    await expect(listItem(page, 'Sort Ascending')).toBeVisible();
    await expect(listItem(page, 'Freeze Column')).toHaveCount(0);
    await expect(listItem(page, 'Unfreeze Column')).toHaveCount(0);
    await page.keyboard.press('Escape');
    // UI gate only: programmatic freeze still pins the column
    await page.getByTestId('toggle').click();
    await expect(stickyAncestor(columnHeader(page, 'age'))).toBeAttached();
  });
});
