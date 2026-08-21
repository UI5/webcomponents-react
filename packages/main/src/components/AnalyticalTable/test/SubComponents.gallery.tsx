import { useCallback, useMemo, useRef, useState } from 'react';
import { AnalyticalTableSubComponentsBehavior } from '../../../enums/AnalyticalTableSubComponentsBehavior.js';
import { Button } from '../../../webComponents/Button/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes, RowType } from '../types/index.js';
import { columns as defaultColumns, data as defaultData } from './test-utils/data.js';

/* ----------------------------------------------------------------------------
 * Render-call counter shared between SubComponents render tests.
 *
 * Counts how often `renderRowSubComponent` is invoked per mount. Under
 * fractional zoom (1.1) the broken `RowSubComponent` ResizeObserver loop
 * produced 5000+ calls; the default-zoom baseline is ~700. Because the spec
 * only reads the total once at the end, the counter is a plain ref bumped
 * inside the render callback and written imperatively to the `render-count`
 * node — using state here would re-render on every subcomponent render.
 * ------------------------------------------------------------------------- */

const bumpRenderCount = (countRef: { current: number }) => {
  countRef.current += 1;
  const el = document.querySelector('[data-testid="render-count"]');
  if (el) {
    el.textContent = String(countRef.current);
  }
};

export const SubCompExpandableTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback(() => {
    bumpRenderCount(countRef);
    return <div title="subcomponent">SubComponent</div>;
  }, []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />
    </>
  );
};

export const SubCompExpandableFirstOnlyTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback((row: RowType) => {
    bumpRenderCount(countRef);
    if (row.id === '0') {
      return <div title="subcomponent">SingleSubComponent</div>;
    }
    return undefined;
  }, []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />
    </>
  );
};

export const SubCompVisibleAllTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback(() => {
    bumpRenderCount(countRef);
    return <div title="subcomponent">SubComponent</div>;
  }, []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
      />
    </>
  );
};

export const SubCompVisibleFirstOnlyTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback((row: RowType) => {
    bumpRenderCount(countRef);
    if (row.id === '0') {
      return <div title="subcomponent">SingleSubComponent</div>;
    }
    return undefined;
  }, []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
      />
    </>
  );
};

const renderLarge = (row: RowType, countRef: { current: number }) => {
  bumpRenderCount(countRef);
  return (
    <div title="subcomponent" style={{ height: '200px', width: '100%', display: 'flex', alignItems: 'end' }}>
      {`SubComponent ${row.index}`}
    </div>
  );
};

export const SubCompLargeVisibleTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback((row: RowType) => renderLarge(row, countRef), []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        visibleRows={3}
        subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
      />
    </>
  );
};

export const SubCompLargeIncludeHeightTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const renderRowSubComponent = useCallback((row: RowType) => renderLarge(row, countRef), []);
  return (
    <>
      <span data-testid="render-count" />
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        visibleRows={3}
        subComponentsBehavior={AnalyticalTableSubComponentsBehavior.IncludeHeight}
      />
    </>
  );
};

export const SubCompInfiniteScrollTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const countRef = useRef(0);
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  const renderRowSubComponent = useCallback((row: RowType) => renderLarge(row, countRef), []);
  const onLoadMore = useCallback<NonNullable<AnalyticalTablePropTypes['onLoadMore']>>(() => {
    setLoadMoreCount((c) => c + 1);
  }, []);
  return (
    <>
      <span data-testid="render-count" />
      <span data-testid="load-more-count">{loadMoreCount}</span>
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        visibleRows={3}
        subComponentsBehavior={AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable}
        infiniteScroll
        infiniteScrollThreshold={0}
        onLoadMore={onLoadMore}
      />
    </>
  );
};

/* ----------------------------------------------------------------------------
 * Expandable: don't scroll when expanded/collapsed
 *
 * Four different tables exercising: (1) tree-table keyboard expand, (2)
 * groupable keyboard expand, (3) subcomponent keyboard expand, and (4)
 * programmatic `toggleRowExpanded` via `tableInstance`. The common assertion
 * is that `body.scrollTop !== 0` after expanding/collapsing — i.e. the table
 * does not auto-reset scroll position.
 *
 * `treeExpandData` is a minimal dataset preserving the required structure: two
 * top-level expandable rows where the second's subRows include another
 * expandable row whose subRows themselves contain leaves. The names match the
 * assertions (Katy Bradshaw and Carol Perez).
 * ------------------------------------------------------------------------- */

const treeExpandLeaf = (name: string) => ({ name, age: 30, friend: { name: `${name}-friend`, age: 31 } });

const treeExpandData = [
  {
    name: 'Flowers Mcfarland',
    age: 82,
    friend: { name: 'Gardner Chang', age: 38 },
    subRows: [treeExpandLeaf('Head Hardy'), treeExpandLeaf('Rose Lancaster'), treeExpandLeaf('Kerry Murray')],
  },
  {
    name: 'Katy Bradshaw',
    age: 74,
    friend: { name: 'Griffin Carpenter', age: 39 },
    subRows: [
      treeExpandLeaf('Mae Dixon'),
      treeExpandLeaf('Sasha Mitchell'),
      treeExpandLeaf('Ann Blanchard'),
      {
        name: 'Carol Perez',
        age: 66,
        friend: { name: 'Cheri Valenzuela', age: 80 },
        subRows: [treeExpandLeaf('Linda Snider'), treeExpandLeaf('Joan Snyder'), treeExpandLeaf('Geneva Foreman')],
      },
    ],
  },
];

export const ScrollPreserveTreeTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => [...treeExpandData, ...treeExpandData], []);
  return <AnalyticalTable data={data} columns={columns} isTreeTable visibleRows={5} />;
};

export const ScrollPreserveGroupableTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => [...defaultData, ...defaultData], []);
  return <AnalyticalTable data={data} columns={columns} visibleRows={5} groupable />;
};

export const ScrollPreserveSubcomponentTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  const renderRowSubComponent = useCallback(() => {
    return (
      <div style={{ height: '80px' }} title="subcomponent">
        SubComponent
      </div>
    );
  }, []);
  return <AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />;
};

// Programmatic `toggleRowExpanded` via `tableInstance` ref. Reuses
// `treeExpandData` to grow large enough for scroll; the "toggle" row's id
// resolves to '6' in the flattened list.
export const ScrollPreserveProgrammaticToggleTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(
    () => [
      ...treeExpandData,
      ...treeExpandData,
      ...treeExpandData,
      { name: 'toggle', subRows: [{ name: 'toggled' }] },
      ...treeExpandData,
      ...treeExpandData,
    ],
    [],
  );
  const tableInstanceRef = useRef<{ toggleRowExpanded?: (id: string) => void }>({});
  return (
    <>
      <button
        data-testid="toggle-row-btn"
        onClick={() => {
          tableInstanceRef.current.toggleRowExpanded?.('6');
        }}
      >
        toggle row
      </button>
      <AnalyticalTable data={data} columns={columns} isTreeTable visibleRows={5} tableInstance={tableInstanceRef} />
    </>
  );
};

/* ----------------------------------------------------------------------------
 * TreeTable + SubComps + lazy-load
 *
 * A tree table where children are fetched lazily on expand and a "Load more"
 * button is rendered as the subcomponent of the row that is the *last* child
 * of its parent. The customTableHook forces `canExpand = true` so every row
 * shows an expander.
 * ------------------------------------------------------------------------- */

const lazyLoadNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David', 'Eva', 'Frank'];

const lazyLoadColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Test', accessor: 'name' },
  { accessor: 'displayId' },
];

type LazyRow = {
  displayId: string;
  name: string;
  nodeId: string;
  parentId: string | null;
  subRows?: LazyRow[];
};

const initialLazyRoots: LazyRow[] = [
  { displayId: '1337', name: 'root1', nodeId: 'root1', parentId: null },
  { displayId: '1337', name: 'root2', nodeId: 'root2', parentId: null },
];

function findById(rows: LazyRow[], id: string): LazyRow | undefined {
  for (const row of rows) {
    if (row.nodeId === id) {
      return row;
    }
    if (row.subRows) {
      const hit = findById(row.subRows, id);
      if (hit) {
        return hit;
      }
    }
  }
  return undefined;
}

function cloneWithChildAppended(roots: LazyRow[], parentId: string, child: LazyRow): LazyRow[] {
  return roots.map((row) => {
    if (row.nodeId === parentId) {
      return { ...row, subRows: [...(row.subRows ?? []), child] };
    }
    if (row.subRows) {
      return { ...row, subRows: cloneWithChildAppended(row.subRows, parentId, child) };
    }
    return row;
  });
}

export const LazyLoadTreeSubCompTestComp = () => {
  const [tree, setTree] = useState<LazyRow[]>(initialLazyRoots);
  const names = useRef([...lazyLoadNames]);

  const getChildren = useCallback((parentId: string) => {
    const child: LazyRow = {
      displayId: '1337',
      name: `${parentId}-${names.current[0]}`,
      nodeId: `${parentId}-${names.current[0]}`,
      parentId,
    };
    names.current.shift();
    setTree((prev) => cloneWithChildAppended(prev, parentId, child));
  }, []);

  const handleRowExpandChange = useCallback<NonNullable<AnalyticalTablePropTypes['onRowExpandChange']>>(
    (event) => {
      const row = event.detail.row;
      if (!row.isExpanded && row.canExpand && !row.original.subRows?.length) {
        getChildren(row.original.nodeId);
      }
    },
    [getChildren],
  );

  const renderLoadMore = useCallback(
    (row: RowType) => {
      const parentId = row.original.parentId;
      if (!parentId) {
        return null;
      }
      const parentNode = findById(tree, parentId);
      if (!parentNode) {
        return null;
      }
      const currentChildrenCount = parentNode.subRows?.length || 0;
      const currentRowIndex = parentNode.subRows?.findIndex((subRow) => subRow.nodeId === row.original.nodeId) ?? -1;
      if (currentRowIndex !== currentChildrenCount - 1) {
        return null;
      }
      const arrowWidth = 35;
      return (
        <div
          style={{
            paddingBottom: '0.25rem',
            paddingInlineStart: `calc(var(--_ui5wcr-AnalyticalTableTreePaddingLevel${row.depth}) + ${arrowWidth}px)`,
          }}
        >
          <Button
            design="Transparent"
            onClick={() => {
              getChildren(parentId);
            }}
          >
            Load more for {parentNode.name}
          </Button>
        </div>
      );
    },
    [tree, getChildren],
  );

  const customTableHook = useCallback((hooks: any) => {
    hooks.prepareRow.push((row: RowType) => {
      row.canExpand = true;
    });
  }, []);

  const tableHooks = useMemo(() => [customTableHook], [customTableHook]);

  return (
    <AnalyticalTable
      columns={lazyLoadColumns}
      data={tree}
      isTreeTable
      onRowExpandChange={handleRowExpandChange}
      reactTableOptions={{ autoResetExpanded: false }}
      renderRowSubComponent={renderLoadMore}
      subComponentsBehavior={AnalyticalTableSubComponentsBehavior.IncludeHeight}
      tableHooks={tableHooks}
      minRows={1}
    />
  );
};
