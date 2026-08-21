import { useCallback, useMemo, useRef, useState } from 'react';
import { AnalyticalTablePopinDisplay } from '../../../enums/AnalyticalTablePopinDisplay.js';
import { AnalyticalTableScaleWidthMode } from '../../../enums/AnalyticalTableScaleWidthMode.js';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { Button } from '../../../webComponents/Button/index.js';
import { Text } from '../../../webComponents/Text/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes } from '../types/index.js';
import { columns, data, generateMoreData } from './test-utils/data.js';

/**
 * Stateful harness for the `autoResize` test. Lets a single Playwright `mount()` cycle
 * through every sub-scenario by clicking buttons that switch the underlying table configuration.
 * `key={mode}` remounts the table between modes. The running `onAutoResize` call count is recorded
 * into `resize-count` and reset to `0` on every mode switch, so each mode asserts only its own fires.
 */
type AutoResizeMode =
  | 'resizable-onAutoResizePrevented'
  | 'resizable-onAutoResize'
  | 'infinite-scroll'
  | 'not-resizable'
  | 'subcomponent'
  | 'tree';

const dataLongerName = data.map((el, i) => {
  if (i === 2) {
    return { ...el, name: 'Longer Name Too' };
  }
  return el;
});

const infiniteScrollData = generateMoreData(200).map((el, i) => {
  if (i === 2) {
    return { ...el, name: 'Much Longer Name To Resize Larger For Testing A Larger Auto Resize' };
  }
  if (i > 50) {
    return { ...el, name: 'Short Name' };
  }
  return el;
});

const treeAutoResizeData = [
  {
    name: 'Parent',
    age: 1,
    friend: { name: 'PF', age: 2 },
    subRows: [
      {
        name: 'Longer Name To Resize Here',
        age: 3,
        friend: { name: 'CF', age: 4 },
      },
    ],
  },
];

const renderSubComponent = () => <div title="subcomponent">SubComponent</div>;

export const AutoResizeHarness = () => {
  const [mode, setMode] = useState<AutoResizeMode>('resizable-onAutoResizePrevented');
  const [resizeCount, setResizeCount] = useState(0);
  const resizableCols = useMemo<AnalyticalTableColumnDefinition[]>(
    () => columns.map((el) => ({ ...el, autoResizable: true })),
    [],
  );
  const nonResizableCols = useMemo<AnalyticalTableColumnDefinition[]>(
    () => columns.map((el) => ({ ...el, autoResizable: false })),
    [],
  );

  const switchMode = (nextMode: AutoResizeMode) => {
    setResizeCount(0);
    setMode(nextMode);
  };
  const countResize = () => setResizeCount((c) => c + 1);

  const renderTable = () => {
    switch (mode) {
      case 'resizable-onAutoResizePrevented': {
        return (
          <AnalyticalTable
            data={dataLongerName}
            columns={resizableCols}
            onAutoResize={(e) => {
              countResize();
              e.preventDefault();
            }}
          />
        );
      }
      case 'resizable-onAutoResize': {
        return <AnalyticalTable data={dataLongerName} columns={resizableCols} onAutoResize={countResize} />;
      }
      case 'infinite-scroll': {
        return (
          <AnalyticalTable
            data={infiniteScrollData}
            columns={resizableCols}
            infiniteScroll
            infiniteScrollThreshold={0}
            onAutoResize={countResize}
          />
        );
      }
      case 'not-resizable': {
        return <AnalyticalTable data={infiniteScrollData} columns={nonResizableCols} />;
      }
      case 'subcomponent': {
        return (
          <AnalyticalTable
            data={dataLongerName}
            columns={resizableCols}
            renderRowSubComponent={renderSubComponent}
            onAutoResize={countResize}
          />
        );
      }
      case 'tree': {
        return (
          <AnalyticalTable columns={resizableCols} data={treeAutoResizeData} isTreeTable onAutoResize={countResize} />
        );
      }
    }
  };

  return (
    <>
      <Button data-testid="mode-resizable-prevented" onClick={() => switchMode('resizable-onAutoResizePrevented')}>
        resizable-prevented
      </Button>
      <Button data-testid="mode-resizable" onClick={() => switchMode('resizable-onAutoResize')}>
        resizable
      </Button>
      <Button data-testid="mode-infinite" onClick={() => switchMode('infinite-scroll')}>
        infinite
      </Button>
      <Button data-testid="mode-not-resizable" onClick={() => switchMode('not-resizable')}>
        not-resizable
      </Button>
      <Button data-testid="mode-subcomponent" onClick={() => switchMode('subcomponent')}>
        subcomponent
      </Button>
      <Button data-testid="mode-tree" onClick={() => switchMode('tree')}>
        tree
      </Button>
      <span data-testid="resize-count">{resizeCount}</span>
      <div key={mode}>{renderTable()}</div>
    </>
  );
};

/**
 * Harness for `Column Scaling: programatically change cols`. Adds buttons to swap the column array
 * between "both", "name only" and "age only" so column-width recalculation can be asserted across
 * selection / highlight prop combinations. The selection / highlight prop flags are mutable via
 * buttons because a single mount cycles through what were previously back-to-back mounts.
 */
type ScalingMode = 'plain' | 'multiple-selection' | 'row-highlight' | 'nav-highlight' | 'single-with-both-highlights';

const scalingPropsFor = (mode: ScalingMode): Partial<AnalyticalTablePropTypes> => {
  switch (mode) {
    case 'plain': {
      return {};
    }
    case 'multiple-selection': {
      return { selectionMode: AnalyticalTableSelectionMode.Multiple };
    }
    case 'row-highlight': {
      return { withRowHighlight: true };
    }
    case 'nav-highlight': {
      return { withNavigationHighlight: true };
    }
    case 'single-with-both-highlights': {
      return {
        withNavigationHighlight: true,
        withRowHighlight: true,
        selectionMode: AnalyticalTableSelectionMode.Single,
      };
    }
  }
};

export const ColumnScalingHarness = () => {
  const [cols, setCols] = useState<AnalyticalTableColumnDefinition[]>([]);
  const [mode, setMode] = useState<ScalingMode>('plain');
  return (
    <>
      <Button data-testid="mode-plain" onClick={() => setMode('plain')}>
        plain
      </Button>
      <Button data-testid="mode-multiple-selection" onClick={() => setMode('multiple-selection')}>
        multiple-selection
      </Button>
      <Button data-testid="mode-row-highlight" onClick={() => setMode('row-highlight')}>
        row-highlight
      </Button>
      <Button data-testid="mode-nav-highlight" onClick={() => setMode('nav-highlight')}>
        nav-highlight
      </Button>
      <Button data-testid="mode-single-with-both-highlights" onClick={() => setMode('single-with-both-highlights')}>
        single-with-both-highlights
      </Button>
      <Button
        data-testid="cols-both"
        onClick={() =>
          setCols([
            { accessor: 'name', Header: 'Name' },
            { accessor: 'age', Header: 'Age' },
          ])
        }
      >
        Both
      </Button>
      <Button data-testid="cols-name" onClick={() => setCols([{ accessor: 'name', Header: 'Name' }])}>
        NameCol
      </Button>
      <Button data-testid="cols-age" onClick={() => setCols([{ accessor: 'age', Header: 'Age' }])}>
        AgeCol
      </Button>
      <AnalyticalTable key={mode} data={data} columns={cols} {...(scalingPropsFor(mode) as AnalyticalTablePropTypes)} />
    </>
  );
};

/**
 * Harness for `tableInstance: change state & hide cols`. Exposes two buttons — one dispatches
 * `TABLE_RESIZE` directly via `tableInstance.dispatch`, the other calls
 * `tableInstance.toggleHideColumn('age', true)`.
 */
export const TableInstanceHarness = () => {
  const tableInstanceRef = useRef<any>(null);
  return (
    <>
      <Button
        data-testid="set-clientWidth"
        onClick={() => {
          tableInstanceRef.current.dispatch({
            type: 'TABLE_RESIZE',
            payload: { tableClientWidth: 1200 },
          });
        }}
      >
        set clientWidth
      </Button>
      <Button
        data-testid="hide-age"
        onClick={() => {
          tableInstanceRef.current.toggleHideColumn('age', true);
        }}
      >
        hide age col
      </Button>
      <AnalyticalTable
        data={data}
        columns={columns}
        data-testid="at"
        tableInstance={tableInstanceRef}
        reactTableOptions={{ autoResetHiddenColumns: false }}
      />
    </>
  );
};

/**
 * Mirror of the `columns drag & drop: reorder then add/remove column` test. Lets the spec toggle
 * between a 3-column and a 4-column shape so drag/drop can be exercised before/after a structure
 * change. Records the running `onColumnsReorder` call count into `reorder-count`.
 */
const baseDragCols: AnalyticalTableColumnDefinition[] = [
  { accessor: 'name', Header: 'Name' },
  { accessor: 'age', Header: 'Age' },
  { accessor: 'friend.name', Header: 'Friend Name' },
];
const extraDragCol: AnalyticalTableColumnDefinition = { accessor: 'friend.age', Header: 'Friend Age' };

export const DragAndDropStructureHarness = () => {
  const [cols, setCols] = useState<AnalyticalTableColumnDefinition[]>(baseDragCols);
  const [reorderCount, setReorderCount] = useState(0);
  return (
    <>
      <Button
        data-testid="toggle-cols"
        onClick={() => {
          setCols((prev) => (prev.length === 3 ? [...prev, extraDragCol] : prev.slice(0, 3)));
        }}
      >
        Toggle Column
      </Button>
      <AnalyticalTable data={data} columns={cols} onColumnsReorder={() => setReorderCount((c) => c + 1)} />
      <span data-testid="reorder-count">{reorderCount}</span>
    </>
  );
};

/**
 * Mirror of the `retainColumnWidth: recalculates widths after columns change` test. Toggles the
 * table between two completely different column/data shapes.
 */
const retainColsA: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];
const retainColsB: AnalyticalTableColumnDefinition[] = [
  { Header: 'Product', accessor: 'product' },
  { Header: 'Price', accessor: 'price' },
  { Header: 'Qty', accessor: 'qty' },
];
const retainDataA = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
const retainDataB = [
  { product: 'Widget', price: '$10', qty: 5 },
  { product: 'Gadget', price: '$20', qty: 3 },
];

export const RetainColumnWidthHarness = () => {
  const [useB, setUseB] = useState(false);
  return (
    <>
      <Button data-testid="switch" onClick={() => setUseB((prev) => !prev)}>
        Switch
      </Button>
      <AnalyticalTable
        columns={useB ? retainColsB : retainColsA}
        data={useB ? retainDataB : retainDataA}
        retainColumnWidth
        scaleWidthMode={AnalyticalTableScaleWidthMode.Default}
      />
    </>
  );
};

/**
 * Pop-in column setup mirroring the `columnsWithPopIn` constant. Used by the
 * `adjustTableHeightOnPopIn` test. The last column is parameterised so the spec can swap the
 * `popinDisplay` value (`Block` → `Inline` → `WithoutHeader`) for each mode.
 */
const buildPopInColumns = (popinDisplay: AnalyticalTablePopinDisplay): AnalyticalTableColumnDefinition[] => [
  { Header: 'Name', headerTooltip: 'Full Name', accessor: 'name' },
  { responsiveMinWidth: 601, Header: 'Age', accessor: 'age' },
  { responsivePopIn: true, responsiveMinWidth: 801, Header: 'Friend Name', accessor: 'friend.name' },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header1</span>,
    PopInHeader: 'Custom Header 1',
    accessor: 'friend.age',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header2</span>,
    PopInHeader: () => 'Custom Header 2',
    id: 'custom1',
    Cell: 'Custom Cell 2',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => 'Custom Header',
    id: 'custom2',
    Cell: ({ isPopIn }) => {
      if (isPopIn) {
        return 'pop-in content';
      }
      return 'original content';
    },
  },
  {
    id: 'popinDisplay',
    Header: 'PopinDisplay Modes',
    responsivePopIn: true,
    responsiveMinWidth: 801,
    popinDisplay,
    Cell: () => (
      <Text data-testid="popinCell" maxLines={1}>
        Popin Cell
      </Text>
    ),
  },
];

export const PopInDisplayHarness = () => {
  const [mode, setMode] = useState<AnalyticalTablePopinDisplay>(AnalyticalTablePopinDisplay.Block);
  return (
    <>
      <Button data-testid="popin-block" onClick={() => setMode(AnalyticalTablePopinDisplay.Block)}>
        Block
      </Button>
      <Button data-testid="popin-inline" onClick={() => setMode(AnalyticalTablePopinDisplay.Inline)}>
        Inline
      </Button>
      <Button data-testid="popin-without-header" onClick={() => setMode(AnalyticalTablePopinDisplay.WithoutHeader)}>
        WithoutHeader
      </Button>
      <AnalyticalTable
        key={mode}
        data={data}
        columns={buildPopInColumns(mode)}
        data-testid="table"
        adjustTableHeightOnPopIn
      />
    </>
  );
};

/**
 * Mirror of the `w/o selection column` test. Toggles between three selection configurations —
 * Single/RowOnly, Multiple/RowOnly and the implicit None mode — so the spec can assert that the
 * synthetic `[data-selection-cell]` column is never rendered.
 */
type SelectionMode = 'single-row-only' | 'multiple-row-only' | 'none';

export const NoSelectionColumnHarness = () => {
  const [mode, setMode] = useState<SelectionMode>('single-row-only');
  const props: Partial<AnalyticalTablePropTypes> = (() => {
    switch (mode) {
      case 'single-row-only': {
        return {
          selectionMode: AnalyticalTableSelectionMode.Single,
          selectionBehavior: AnalyticalTableSelectionBehavior.RowOnly,
        };
      }
      case 'multiple-row-only': {
        return {
          selectionMode: AnalyticalTableSelectionMode.Multiple,
          selectionBehavior: AnalyticalTableSelectionBehavior.RowOnly,
        };
      }
      case 'none': {
        return {};
      }
    }
  })();
  return (
    <>
      <Button data-testid="mode-single-row-only" onClick={() => setMode('single-row-only')}>
        Single/RowOnly
      </Button>
      <Button data-testid="mode-multiple-row-only" onClick={() => setMode('multiple-row-only')}>
        Multiple/RowOnly
      </Button>
      <Button data-testid="mode-none" onClick={() => setMode('none')}>
        None
      </Button>
      <AnalyticalTable key={mode} data={data} columns={columns} {...(props as AnalyticalTablePropTypes)} />
    </>
  );
};

/**
 * Mirror of the `initial column order` test. Renders `<AnalyticalTable>` with a fixed `columnOrder`.
 */
const initialColumnOrderColumnOrder = ['age', 'friend.age', 'friend.name', 'name'];

export const InitialColumnOrderTestComp = () => {
  const memoColumns = useMemo(() => columns, []);
  const memoData = useMemo(() => data, []);
  return <AnalyticalTable data={memoData} columns={memoColumns} columnOrder={initialColumnOrderColumnOrder} />;
};

/**
 * Mirror of the `columns drag & drop` test. Hosts the 4-column table with the last column marked
 * `disableDragAndDrop`. Records the running `onColumnsReorder` call count into `reorder-count`.
 */
const dragAndDropReorderColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', headerTooltip: 'Full Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Friend Name', accessor: 'friend.name' },
  { Header: 'Friend Age', accessor: 'friend.age', disableDragAndDrop: true },
];

export const DragAndDropReorderTestComp = () => {
  const [reorderCount, setReorderCount] = useState(0);
  const memoData = useMemo(() => data, []);
  const memoColumns = useMemo(() => dragAndDropReorderColumns, []);
  const memoOnColumnsReorder = useCallback<NonNullable<AnalyticalTablePropTypes['onColumnsReorder']>>(() => {
    setReorderCount((c) => c + 1);
  }, []);
  return (
    <>
      <AnalyticalTable data={memoData} columns={memoColumns} onColumnsReorder={memoOnColumnsReorder} />
      <span data-testid="reorder-count">{reorderCount}</span>
    </>
  );
};
