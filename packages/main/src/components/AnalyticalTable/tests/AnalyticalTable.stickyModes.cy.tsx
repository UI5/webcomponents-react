import { useMemo, useRef } from 'react';
import {
  AnalyticalTable,
  AnalyticalTableHooks,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionMode,
} from '../../..';
import type { AnalyticalTableColumnDefinition, AnalyticalTableInstance } from '../../..';

// Behavioral tests for the sticky-columns feature across modes. Every layout test forces horizontal
// overflow (columns wider than the container) and asserts the real invariant: the sticky column keeps
// its viewport x-position while a non-sticky column scrolls left underneath it. Static sticky + mode
// (RTL, selection, hidden, columnOrder, multi-sort, ...) is covered by `stickyForEach` in
// AnalyticalTable.cy.tsx; this spec covers runtime toggling + modes with no existing sticky coverage.

// eslint-disable-next-line react-hooks/rules-of-hooks -- factory, not a React hook
const stickyHooks = [AnalyticalTableHooks.useStickyColumns()];

const data = Array.from({ length: 12 }, (_, i) => ({
  name: `Name-${i}`,
  age: i,
  friend: { name: `Friend-${i}`, age: i + 100 },
  status: i % 2 === 0 ? 'even' : 'odd',
}));

const treeData = Array.from({ length: 6 }, (_, i) => ({
  name: `Parent-${i}`,
  age: i,
  friend: { name: `PFriend-${i}`, age: i + 100 },
  status: 'even',
  subRows: [{ name: `Child-${i}`, age: i + 50, friend: { name: `CFriend-${i}`, age: i + 200 }, status: 'odd' }],
}));

// 5×150 = 750px total; container 500px → guaranteed horizontal overflow.
const wideCols: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150, sticky: 'start' },
  { Header: 'Age', accessor: 'age', width: 150 },
  { Header: 'Friend Name', accessor: 'friend.name', width: 150 },
  { Header: 'Friend Age', accessor: 'friend.age', width: 150 },
  { Header: 'Status', accessor: 'status', width: 150 },
];

// Asserts the real sticky invariant under horizontal scroll.
const expectPinnedDuringScroll = (stickyId: string, scrollingId: string) => {
  const left = (id: string) => Cypress.$(`[data-column-id="${id}"]`)[0].getBoundingClientRect().left;
  let stickyBefore = 0;
  let scrollBefore = 0;
  cy.then(() => {
    stickyBefore = left(stickyId);
    scrollBefore = left(scrollingId);
  });
  cy.get('[data-component-name="AnalyticalTableContainer"]').scrollTo(260, 0);
  cy.wait(100);
  cy.then(() => {
    expect(left(stickyId), `${stickyId} stays pinned`).to.be.closeTo(stickyBefore, 2);
    expect(left(scrollingId), `${scrollingId} scrolled under`).to.be.lessThan(scrollBefore - 80);
  });
};

const Harness = ({ toggleId, columns = wideCols, ...tableProps }: Record<string, unknown> & { toggleId?: string }) => {
  const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
  return (
    <>
      {toggleId && (
        <button type="button" onClick={() => tableInstanceRef.current?.toggleStickyColumn(toggleId)}>
          toggle
        </button>
      )}
      <AnalyticalTable
        tableInstance={tableInstanceRef}
        style={{ width: '500px' }}
        data={data}
        columns={columns as AnalyticalTableColumnDefinition[]}
        tableHooks={stickyHooks}
        {...tableProps}
      />
    </>
  );
};

describe('AnalyticalTable sticky columns — behavioral coverage', () => {
  it('seeded sticky column stays pinned while other columns scroll under it', () => {
    cy.mount(<Harness />);
    cy.findByText('Name-0').should('exist');
    expectPinnedDuringScroll('name', 'friend.age');
  });

  it('no data: sticky stays active but the freeze line does not extend into the empty body', () => {
    cy.mount(<AnalyticalTable style={{ width: '500px' }} data={[]} columns={wideCols} tableHooks={stickyHooks} />);
    // sticky remains active (no header jump when data later loads)
    cy.get('[data-sticky-start]').should('exist');
    // the freeze line (::after on the last sticky header) is limited to the header row height
    cy.get('[data-sticky-start-last]').then(($el) => {
      const lineHeight = parseFloat(getComputedStyle($el[0], '::after').height);
      const headerHeight = $el[0].getBoundingClientRect().height;
      expect(lineHeight, 'freeze line = header height only').to.be.closeTo(headerHeight, 2);
    });
  });

  it('freeze line spans header + body when rows are present', () => {
    cy.mount(<Harness />);
    cy.findByText('Name-0').should('exist');
    cy.get('[data-sticky-start-last]').then(($el) => {
      const lineHeight = parseFloat(getComputedStyle($el[0], '::after').height);
      const headerHeight = $el[0].getBoundingClientRect().height;
      expect(lineHeight, 'freeze line extends past the header into the body').to.be.greaterThan(headerHeight + 20);
    });
  });

  it('runtime toggle: a newly-sticky column pins during scroll (and keeps correct width)', () => {
    cy.mount(<Harness toggleId="friend.name" />);
    cy.findByText('toggle').click();
    cy.get('[data-column-id="friend.name"]').closest('[data-sticky-start]').should('exist');
    // width not inherited from the column previously at its new index
    cy.get('[data-column-id="friend.name"]')
      .closest('[data-sticky-start]')
      .invoke('outerWidth')
      .should('be.closeTo', 150, 5);
    // Name (seed) + Friend Name (toggled) are both pinned; Friend Age scrolls under
    expectPinnedDuringScroll('friend.name', 'friend.age');
  });

  it('grouping: a grouped column auto-becomes sticky and pins during scroll', () => {
    cy.mount(
      <Harness columns={wideCols} groupable reactTableOptions={{ initialState: { groupBy: ['friend.age'] } }} />,
    );
    // grouped column is pinned even though it was never marked sticky
    cy.get('[data-column-id="friend.age"]').closest('[data-sticky-start]').should('exist');
    expectPinnedDuringScroll('friend.age', 'status');
  });

  it('tree table: sticky column pins during scroll and rows still expand', () => {
    cy.mount(
      <AnalyticalTable
        style={{ width: '500px' }}
        data={treeData}
        columns={wideCols}
        tableHooks={stickyHooks}
        isTreeTable
      />,
    );
    cy.findByRole('treegrid').should('exist');
    expectPinnedDuringScroll('name', 'friend.age');
    // reset scroll, expand the first parent → its child appears
    cy.findByRole('treegrid').scrollTo(0, 0);
    cy.get('[title="Expand Node"]').first().find('[ui5-button], [ui5-icon]').first().click();
    cy.findByText('Child-0').should('exist');
  });

  it('drag & drop: sticky columns are excluded, non-sticky columns remain draggable', () => {
    cy.mount(<Harness />);
    cy.get('[data-column-id="name"]').should('have.attr', 'draggable', 'false');
    cy.get('[data-column-id="age"]').should('have.attr', 'draggable', 'true');
    cy.get('[data-column-id="friend.name"]').should('have.attr', 'draggable', 'true');
  });

  it('auto-resize: double-clicking a sticky column resizer resizes it to content', () => {
    const autoCols = wideCols.map((c) => ({ ...c, autoResizable: true }));
    cy.mount(<Harness columns={autoCols} />);
    cy.get('[data-column-id="name"]').closest('[data-sticky-start]').invoke('outerWidth').should('be.closeTo', 150, 5);
    // first resizer belongs to the first sticky column (Name)
    cy.get('[data-component-name="AnalyticalTableResizer"]').first().dblclick();
    // width changed away from the fixed 150 (content "Name-11" is narrower)
    cy.get('[data-column-id="name"]').closest('[data-sticky-start]').invoke('outerWidth').should('not.equal', 150);
  });

  it('withRowHighlight: the highlight column auto-pins and stays during scroll', () => {
    cy.mount(<Harness withRowHighlight highlightField="status" />);
    // the internal highlight column (visible column index 0) is sticky
    cy.get('[data-visible-column-index="0"][data-row-index="0"]').closest('[data-sticky-start]').should('exist');
    expectPinnedDuringScroll('name', 'friend.age');
  });

  it('selectionMode Multiple: the selection column auto-pins and stays during scroll', () => {
    cy.mount(<Harness selectionMode={AnalyticalTableSelectionMode.Multiple} />);
    cy.get('[data-visible-column-index="0"][data-row-index="0"]').closest('[data-sticky-start]').should('exist');
    expectPinnedDuringScroll('name', 'friend.age');
  });

  it('scaleWidthMode Smart: runtime toggle recalculates widths (no stale/oversized column)', () => {
    const cols = [
      { Header: 'Name', accessor: 'name', sticky: 'start' as const },
      { Header: 'Age', accessor: 'age', width: 500 },
      { Header: 'Friend Name', accessor: 'friend.name' },
    ];
    cy.mount(
      <Harness
        toggleId="friend.name"
        columns={cols}
        style={{ width: '900px' }}
        scaleWidthMode={AnalyticalTableScaleWidthMode.Smart}
      />,
    );
    cy.findByText('toggle').click();
    cy.get('[data-column-id="friend.name"]').closest('[data-sticky-start]').should('exist');
    cy.get('[data-column-id="friend.name"]')
      .closest('[data-sticky-start]')
      .invoke('outerWidth')
      .should('be.lessThan', 400);
  });

  it('scaleWidthMode Grow: runtime toggle recalculates widths (no stale/oversized column)', () => {
    const cols = [
      { Header: 'Name', accessor: 'name', sticky: 'start' as const },
      { Header: 'Age', accessor: 'age', width: 500 },
      { Header: 'Friend Name', accessor: 'friend.name' },
    ];
    cy.mount(
      <Harness
        toggleId="friend.name"
        columns={cols}
        style={{ width: '900px' }}
        scaleWidthMode={AnalyticalTableScaleWidthMode.Grow}
      />,
    );
    cy.findByText('toggle').click();
    cy.get('[data-column-id="friend.name"]').closest('[data-sticky-start]').should('exist');
    cy.get('[data-column-id="friend.name"]')
      .closest('[data-sticky-start]')
      .invoke('outerWidth')
      .should('be.lessThan', 400);
  });

  it('infiniteScroll: onLoadMore fires in sticky mode', () => {
    const loadMore = cy.spy().as('loadMore');
    cy.mount(<Harness visibleRows={4} infiniteScroll infiniteScrollThreshold={2} onLoadMore={loadMore} />);
    cy.findByRole('grid').should('exist');
    cy.findByRole('grid').scrollTo('bottom');
    cy.get('@loadMore').should('have.been.called');
  });
});

// Freeze/Unfreeze menu item contributed to the column header popover via the generic
// `columnHeaderModalItems` hook. None of the columns below enable sorting/filtering/grouping, so the
// popover only has a reason to open when the sticky hook contributes the freeze item.
const plainCols: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150 },
  { Header: 'Age', accessor: 'age', width: 150 },
  { Header: 'Friend Name', accessor: 'friend.name', width: 150 },
  { Header: 'Friend Age', accessor: 'friend.age', width: 150 },
  { Header: 'Status', accessor: 'status', width: 150 },
];

describe('AnalyticalTable sticky columns — freeze/unfreeze popover item', () => {
  it('freeze: item opens the popover (no sort/filter/group) and pins the column', () => {
    cy.mount(<Harness columns={plainCols} />);
    cy.findByText('Name-0').should('exist');
    cy.get('[data-sticky-start]').should('not.exist');
    // popover opens purely because of the contributed freeze item (hasPopover gate)
    cy.findByText('Age').click();
    cy.get('[data-component-name="ATHeaderPopover"]').should('exist');
    cy.get('[ui5-list] [ui5-li][text="Freeze Column"]').should('exist');
    cy.get('[ui5-list]').clickUi5ListItemByText('Freeze Column');
    cy.get('[data-column-id="age"]').closest('[data-sticky-start]').should('exist');
  });

  it('unfreeze: item shows for a pinned column and removes the pin', () => {
    cy.mount(<Harness columns={wideCols} />);
    cy.findByText('Name-0').should('exist');
    cy.get('[data-column-id="name"]').closest('[data-sticky-start]').should('exist');
    cy.findByText('Name').click();
    cy.get('[ui5-list] [ui5-li][text="Unfreeze Column"]').should('exist');
    cy.get('[ui5-list] [ui5-li][text="Freeze Column"]').should('not.exist');
    cy.get('[ui5-list]').clickUi5ListItemByText('Unfreeze Column');
    cy.get('[data-sticky-start]').should('not.exist');
  });

  it('does not contribute the item when useStickyColumns is not used', () => {
    cy.mount(<AnalyticalTable style={{ width: '500px' }} data={data} columns={plainCols} sortable />);
    cy.findByText('Name').click();
    cy.get('[data-component-name="ATHeaderPopover"]').should('exist');
    // list is rendered (sort item present) but no freeze/unfreeze entry
    cy.get('[ui5-list] [ui5-li][text="Sort Ascending"]').should('exist');
    cy.get('[ui5-list] [ui5-li][text="Freeze Column"]').should('not.exist');
    cy.get('[ui5-list] [ui5-li][text="Unfreeze Column"]').should('not.exist');
  });

  it('grouped column: no freeze/unfreeze item (grouping force-pins it)', () => {
    cy.mount(<Harness columns={wideCols} groupable reactTableOptions={{ initialState: { groupBy: ['age'] } }} />);
    cy.findByText('Age').click();
    cy.get('[ui5-list] [ui5-li][text="Ungroup"]').should('exist');
    cy.get('[ui5-list] [ui5-li][text="Freeze Column"]').should('not.exist');
    cy.get('[ui5-list] [ui5-li][text="Unfreeze Column"]').should('not.exist');
  });

  it('onStickyColumnsChange fires for popover freeze/unfreeze but not for programmatic toggling', () => {
    const onSticky = cy.spy().as('onSticky');
    const CallbackHarness = () => {
      const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
      // eslint-disable-next-line react-hooks/rules-of-hooks -- factory, not a React hook
      const hooks = useMemo(() => [AnalyticalTableHooks.useStickyColumns(onSticky)], []);
      return (
        <>
          <button type="button" onClick={() => tableInstanceRef.current?.toggleStickyColumn('age')}>
            toggle
          </button>
          <AnalyticalTable
            tableInstance={tableInstanceRef}
            style={{ width: '500px' }}
            data={data}
            columns={plainCols}
            tableHooks={hooks}
          />
        </>
      );
    };
    cy.mount(<CallbackHarness />);
    cy.findByText('Name-0').should('exist');

    // programmatic pinning must NOT fire the callback
    cy.findByText('toggle').click();
    cy.get('[data-column-id="age"]').closest('[data-sticky-start]').should('exist');
    cy.get('@onSticky').should('not.have.been.called');

    // unfreeze the (now pinned) Age column via the popover → callback fires with sticky:false
    cy.findByText('Age').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Unfreeze Column');
    cy.get('@onSticky').should('have.been.calledOnce');
    cy.get('@onSticky').its('firstCall.args.0').should('deep.include', { sticky: false });
    cy.get('@onSticky').its('firstCall.args.0.stickyColumns').should('not.include', 'age');

    // freeze Friend Name via the popover → callback fires with sticky:true and the new list
    cy.findByText('Friend Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Freeze Column');
    cy.get('@onSticky').should('have.been.calledTwice');
    cy.get('@onSticky').its('secondCall.args.0').should('deep.include', { sticky: true });
    cy.get('@onSticky').its('secondCall.args.0.stickyColumns').should('include', 'friend.name');
  });
});
