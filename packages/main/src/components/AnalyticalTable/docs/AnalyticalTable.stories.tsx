import dataLarge from '@sb/mockData/Friends500.json';
import dataTree from '@sb/mockData/FriendsTree.json';
import type { Meta, StoryObj } from '@storybook/react-vite';
import NoDataIllustration from '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import NoFilterResults from '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import navLeftIcon from '@ui5/webcomponents-icons/dist/navigation-left-arrow.js';
import navRightIcon from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnalyticalTablePopinDisplay,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  TextAlign,
  VerticalAlign,
} from '../../../enums/index.js';
import { Button } from '../../../webComponents/Button/index.js';
import { IllustratedMessage } from '../../../webComponents/IllustratedMessage/index.js';
import { Label } from '../../../webComponents/Label/index.js';
import { Menu } from '../../../webComponents/Menu/index.js';
import { MenuItem } from '../../../webComponents/MenuItem/index.js';
import { Option } from '../../../webComponents/Option/index.js';
import type { SegmentedButtonPropTypes } from '../../../webComponents/SegmentedButton/index.js';
import { SegmentedButton } from '../../../webComponents/SegmentedButton/index.js';
import { SegmentedButtonItem } from '../../../webComponents/SegmentedButtonItem/index.js';
import { Select } from '../../../webComponents/Select/index.js';
import { Text } from '../../../webComponents/Text/index.js';
import { Toast } from '../../../webComponents/Toast/index.js';
import type { ToggleButtonPropTypes } from '../../../webComponents/ToggleButton/index.js';
import { ToggleButton } from '../../../webComponents/ToggleButton/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import { ObjectStatus } from '../../ObjectStatus/index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes } from '../index.js';
import { AnalyticalTable } from '../index.js';

const kitchenSinkArgs: AnalyticalTablePropTypes = {
  data: dataLarge,
  columns: [
    {
      Header: 'Name',
      width: 500,
      headerTooltip: 'Full Name', // A more extensive description!
      accessor: 'name', // String-based value accessors!
      autoResizable: true, // Double clicking the resize bar auto resizes the column!
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 100,
      autoResizable: true,
      hAlign: TextAlign.End,
      disableGroupBy: true,
      disableSortBy: false,
      disableFilters: false,
      className: 'superCustomClass',
      sortDescFirst: true,
    },
    {
      Header: 'Friend Name',
      accessor: 'friend.name',
      width: 300,
      autoResizable: true,
      vAlign: VerticalAlign.Middle,
    },
    {
      Header: () => <span>Friend Age</span>,
      headerLabel: 'Custom Header Label',
      accessor: 'friend.age',
      autoResizable: true,
      hAlign: TextAlign.End,
      scaleWidthModeOptions: { headerString: 'Friend Age' },
      filter: (rows, accessor, filterValue) => {
        if (filterValue === 'all') {
          return rows;
        }
        if (filterValue === 'true') {
          return rows.filter((row) => row.values[accessor] >= 21);
        }
        return rows.filter((row) => row.values[accessor] < 21);
      },
      Filter: ({ column, popoverRef }) => {
        const handleChange = (event) => {
          // set filter
          column.setFilter(event.detail.selectedOption.getAttribute('value'));
          // close popover
          popoverRef.current.open = false;
        };
        return (
          <Select onChange={handleChange} style={{ width: '100%' }}>
            <Option value="all">Show All</Option>
            <Option value="true">Can Drink</Option>
            <Option value="false">Can't Drink</Option>
          </Select>
        );
      },
    },
    {
      Header: 'Status',
      id: 'os',
      Cell: (instance) => {
        const state = instance.row.index % 2 === 0 ? 'Positive' : 'Negative';
        return <ObjectStatus state={state}>{state}</ObjectStatus>;
      },
      scaleWidthModeOptions: { cellString: 'Negative' },
    },
    {
      id: 'actions',
      Header: 'Actions',
      accessor: '.',
      width: 100,
      minWidth: 100,
      disableResizing: true,
      disableGroupBy: true,
      disableFilters: true,
      disableSortBy: true,
      disableGlobalFilter: true,
      disableDragAndDrop: true,
      Cell: (instance) => {
        const { _cell, _row, webComponentsReactProperties } = instance;
        const { loading, showOverlay } = webComponentsReactProperties;
        // disable buttons if overlay is active or the table is loading, to prevent focus
        const disabled = loading || showOverlay;
        // console.log('This is your row data', row.original);
        return (
          <FlexBox>
            <Button icon={editIcon} disabled={disabled} accessibleName="Edit" tooltip="Edit" />
            <Button icon={deleteIcon} disabled={disabled} accessibleName="Delete" tooltip="Delete" />
          </FlexBox>
        );
      },
      cellLabel: ({ cell }) => {
        return `${cell.cellLabel} press TAB to focus active elements inside this cell`;
      },
    },
  ],
  filterable: true,
  alternateRowColor: true,
  columnOrder: ['friend.name', 'friend.age', 'name'],
  extension: (
    <FlexBox justifyContent={FlexBoxJustifyContent.End}>
      <Button icon={editIcon} accessibleName="edit" design="Transparent" tooltip="Edit" />
    </FlexBox>
  ),
  groupable: true,
  header: 'Table Title',
  headerRowHeight: 60,
  infiniteScroll: true,
  infiniteScrollThreshold: 20,
  isTreeTable: false,
  loadingDelay: 1000,
  minRows: 5,
  noDataText: "Custom 'noDataText' message",
  overscanCountHorizontal: 5,
  retainColumnWidth: true,
  scaleWidthMode: AnalyticalTableScaleWidthMode.Smart,
  selectedRowIds: { 3: true },
  selectionBehavior: AnalyticalTableSelectionBehavior.Row,
  selectionMode: AnalyticalTableSelectionMode.Single,
  sortable: true,
  subRowsKey: 'subRows',
  visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Interactive,
  visibleRows: 5,
  withNavigationHighlight: true,
  withRowHighlight: true,
  // sb actions has a huge impact on performance here.
  onTableScroll: undefined,
};

const meta = {
  title: 'Data Display / AnalyticalTable',
  component: AnalyticalTable,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    onRowContextMenu: console.log,
    data: dataLarge,
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
        hAlign: 'End',
      },
      {
        Header: 'Friend Name',
        accessor: 'friend.name',
      },
      {
        Header: 'Friend Age',
        accessor: 'friend.age',
        hAlign: 'End',
      },
    ],
    highlightField: 'status',
    subRowsKey: 'subRows',
    visibleRows: 5,
    // sb actions has a huge impact on performance here.
    onTableScroll: undefined,
  },
  argTypes: {
    data: { control: { disable: true } },
    columns: {
      control: { disable: true },
      description:
        'Defines the columns array where you can define the configuration for each column.<br />Please refer to the [AnalyticalTableColumnDefinition interface](#column-properties) for a full list of options.<br /><br /><b>Must be memoized!</b>',
    },
    tableHooks: { control: { disable: true } },
    NoDataComponent: { control: { disable: true } },
    extension: { control: { disable: true } },
    tableInstance: { control: { disable: true } },
    header: { control: { disable: true } },
    highlightField: {
      control: { type: 'text' },
    },
    groupBy: { control: { disable: true } },
    columnOrder: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof AnalyticalTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TreeTable: Story = {
  args: {
    data: dataTree,
    isTreeTable: true,
  },
};

export const InfiniteScrolling: Story = {
  args: {
    infiniteScroll: true,
    infiniteScrollThreshold: 10,
    loadingDelay: 500,
    header: 'Scroll to load more data',
    reactTableOptions: { autoResetSelectedRows: false },
  },
  render: (args) => {
    const [data, setData] = useState(args.data.slice(0, 50));
    const [loading, setLoading] = useState(false);
    const offset = useRef(50);
    const onLoadMore = (e) => {
      args.onLoadMore(e);
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setData((prev) => [...prev, ...args.data.slice(offset.current, offset.current + 50)]);
          setLoading(false);
          offset.current += 50;
        }, 2000);
      }
    }, [loading, args.data, offset.current]);
    return <AnalyticalTable {...args} data={data} onLoadMore={onLoadMore} loading={loading} />;
  },
};

export const AutoRowCount = {
  args: { visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Auto, containerHeight: 250 } as unknown,
  argTypes: {
    containerHeight: {
      options: [250, 500, 750, 1000],
      control: {
        type: 'radio',
      },
      description:
        'Select an option to change the height of the surrounding container of the table (in `px`). <br /> __Note__: This is not an actual prop of the table.',
    },
  },
  render: (args) => {
    const [data, setData] = useState(args.data);
    const handleClick = () => {
      setData((prev) => {
        if (prev.length > 4) {
          return args.data.slice(0, 4);
        } else {
          return args.data;
        }
      });
    };
    return (
      <>
        <Button onClick={handleClick}>Toggle Number of Rows</Button>
        <br />
        <Text>Number of visible rows: {data.length}</Text>
        <hr />
        <div style={{ height: `${args.containerHeight}px` }}>
          <AnalyticalTable
            {...args}
            data={data}
            visibleRowCountMode={args.visibleRowCountMode}
            header={`Current height: ${args.containerHeight}px - Change the height in the table above`}
          />
        </div>
      </>
    );
  },
};

export const ResponsiveColumnsPopIn: Story = {
  args: {
    visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed,
    // @ts-expect-error: custom prop for the controls table
    containerWidth: 'auto',
    data: dataLarge,
    adjustTableHeightOnPopIn: true,
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 601,
        PopInHeader: 'Custom Header Text (age)',
        Header: 'Age',
        accessor: 'age',
      },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 401,
        Header: 'Friend Name',
        PopInHeader: (instance) => {
          return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
        },
        accessor: 'friend.name',
      },
      { disableSortBy: true, responsiveMinWidth: 401, Header: 'Friend Age', accessor: 'friend.age' },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 801,
        id: 'actions',
        Header: 'Actions',
        width: 100,
        disableResizing: true,
        Cell: (instance) => {
          return (
            <FlexBox>
              <Button icon={editIcon} accessibleName="Edit" tooltip="Edit" />
              <Button icon={deleteIcon} accessibleName="Delete" tooltip="Delete" />
            </FlexBox>
          );
        },
      },
      {
        id: 'popinDisplay',
        Header: 'PopinDisplay Modes',
        responsivePopIn: true,
        responsiveMinWidth: 801,
        popinDisplay: AnalyticalTablePopinDisplay.Block,
        Cell: () => {
          return <Text maxLines={1}>Using popinDisplay: 'Block'</Text>;
        },
      },
    ],
  },
  argTypes: {
    // @ts-expect-error: custom prop for the controls table
    containerWidth: {
      options: [400, 600, 800, 'auto'],
      control: {
        type: 'radio',
      },
      description:
        'Select an option to change the width of the surrounding container of the table (in `px`). <br /> __Note__: This is not a prop of the table.',
    },
  },
  render: (args) => {
    const [columns, setColumns] = useState(args.columns);
    const [popinDisplay, setPopinDisplay] = useState<AnalyticalTableColumnDefinition['popinDisplay']>(
      AnalyticalTablePopinDisplay.Block,
    );
    const { containerWidth: _0, ...tableArgs } = args;

    useEffect(() => {
      setColumns((prev) => {
        return [
          ...prev.slice(0, -1),
          {
            id: 'popinDisplay',
            Header: 'PopinDisplay Modes',
            responsivePopIn: true,
            responsiveMinWidth: 801,
            popinDisplay: popinDisplay,
            Cell: () => {
              return <Text maxLines={1}>Using popinDisplay: {popinDisplay}</Text>;
            },
          },
        ];
      });
    }, [popinDisplay]);

    return (
      <div
        style={{
          width: args.containerWidth && typeof args.containerWidth === 'number' ? `${args.containerWidth}px` : 'auto',
        }}
      >
        <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
          Change <code>popinDisplay</code> of last column
        </Label>
        <Select
          onChange={(e) => {
            setPopinDisplay(e.detail.selectedOption.textContent as AnalyticalTableColumnDefinition['popinDisplay']);
          }}
        >
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.Block}>Block</Option>
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.Inline}>Inline</Option>
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.WithoutHeader}>WithoutHeader</Option>
        </Select>
        <AnalyticalTable
          {...tableArgs}
          columns={columns}
          adjustTableHeightOnPopIn={args.adjustTableHeightOnPopIn}
          header={`Current width: ${args.containerWidth}`}
        />
      </div>
    );
  },
};

export const NoData: Story = {
  render(args) {
    const [selected, setSelected] = useState('noData');
    const [filtered, setFiltered] = useState(false);
    const handleChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
      const { key } = e.detail.selectedItems[0].dataset;
      setSelected(key);
      if (key === 'data') {
        setFiltered(false);
      }
    };
    const handleClick: ToggleButtonPropTypes['onClick'] = (e) => {
      setFiltered(!!e.target.pressed);
    };

    const NoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] =
      selected === 'noData'
        ? undefined
        : (props) => {
            return filtered ? (
              <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
            ) : (
              <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
            );
          };

    const tableProps = {
      ...args,
      data: selected === 'data' ? args.data : [],
      globalFilterValue: filtered ? 'Non-existing text' : undefined,
      NoDataComponent: NoDataComponent,
    };

    const isAutoRowCount = args.visibleRowCountMode?.startsWith('Auto');

    return (
      <>
        <SegmentedButton onSelectionChange={handleChange} accessibleName="Select data view mode">
          <SegmentedButtonItem selected={selected === 'noData'} data-key="noData">
            Default NoData Component
          </SegmentedButtonItem>
          <SegmentedButtonItem selected={selected === 'illustratedMessage'} data-key="illustratedMessage">
            IllustratedMessage NoData Component
          </SegmentedButtonItem>
          <SegmentedButtonItem selected={selected === 'data'} data-key="data">
            With Data
          </SegmentedButtonItem>
        </SegmentedButton>{' '}
        |{' '}
        <ToggleButton onClick={handleClick} pressed={filtered} disabled={selected === 'data'}>
          Table filtered
        </ToggleButton>
        <div style={{ height: isAutoRowCount ? '300px' : 'auto' }}>
          <AnalyticalTable {...tableProps} />
        </div>
      </>
    );
  },
};

const productData = [
  { id: '1', product: 'Laptop Pro 15', category: 'Electronics', price: 1299 },
  { id: '2', product: 'Wireless Mouse', category: 'Accessories', price: 49 },
  { id: '3', product: 'USB-C Hub', category: 'Accessories', price: 79 },
  { id: '4', product: 'Mechanical Keyboard', category: 'Accessories', price: 159 },
  { id: '5', product: 'Monitor 27"', category: 'Electronics', price: 599 },
  { id: '6', product: 'Webcam HD', category: 'Electronics', price: 89 },
  { id: '7', product: 'Desk Lamp', category: 'Office', price: 45 },
  { id: '8', product: 'Standing Desk', category: 'Office', price: 899 },
];

const productColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Product', accessor: 'product' },
  { Header: 'Category', accessor: 'category' },
  { Header: 'Price', accessor: 'price', hAlign: TextAlign.End },
];

type Product = (typeof productData)[number];

export const ContextMenu: Story = {
  render() {
    const [availableProducts, setAvailableProducts] = useState(productData);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuTarget, setMenuTarget] = useState<'available' | 'selected'>('available');
    const [contextRow, setContextRow] = useState<Product | null>(null);
    const [checkedAvailable, setCheckedAvailable] = useState<Product[]>([]);
    const [checkedSelected, setCheckedSelected] = useState<Product[]>([]);
    const anchorRef = useRef<HTMLDivElement>(null);
    const rafId = useRef(0);
    const [toastOpen, setToastOpen] = useState(false);

    useEffect(() => {
      return () => {
        cancelAnimationFrame(rafId.current);
      };
    }, []);

    const columns = useMemo(() => productColumns, []);

    const moveToSelected = (rows: Product[]) => {
      const ids = new Set(rows.map((r) => r.id));
      setAvailableProducts((prev) => prev.filter((p) => !ids.has(p.id)));
      setSelectedProducts((prev) => [...prev, ...rows.filter((r) => !prev.some((p) => p.id === r.id))]);
      setCheckedAvailable([]);
    };

    const moveToAvailable = (rows: Product[]) => {
      const ids = new Set(rows.map((r) => r.id));
      setSelectedProducts((prev) => prev.filter((p) => !ids.has(p.id)));
      setAvailableProducts((prev) => [...prev, ...rows.filter((r) => !prev.some((p) => p.id === r.id))]);
      setCheckedSelected([]);
    };

    const handleMoveRight = () => {
      if (checkedAvailable.length) {
        moveToSelected(checkedAvailable);
      } else {
        setToastOpen(true);
      }
    };

    const handleMoveLeft = () => {
      if (checkedSelected.length) {
        moveToAvailable(checkedSelected);
      } else {
        setToastOpen(true);
      }
    };

    const handleRowSelect: (setter: typeof setCheckedAvailable) => AnalyticalTablePropTypes['onRowSelect'] =
      (setter) => (e) => {
        const rows = Object.values(e.detail.rowsById)
          .filter((r) => e.detail.selectedRowIds[r.id])
          .map((r) => r.original as Product);
        setter(rows);
      };

    const handleContextMenu: (target: 'available' | 'selected') => AnalyticalTablePropTypes['onRowContextMenu'] =
      (target) => (e) => {
        e.preventDefault();
        setContextRow(e.detail.row.original as Product);
        setMenuTarget(target);
        if (anchorRef.current) {
          anchorRef.current.style.left = `${e.clientX}px`;
          anchorRef.current.style.top = `${e.clientY}px`;
        }
        // Defer open so it runs after the menu's onClose from the previous right-click.
        setMenuOpen(false);
        rafId.current = requestAnimationFrame(() => {
          setMenuOpen(true);
        });
      };

    const handleMenuItemClick = () => {
      if (!contextRow) {
        return;
      }
      if (menuTarget === 'available') {
        moveToSelected([contextRow]);
      } else {
        moveToAvailable([contextRow]);
      }
      setMenuOpen(false);
      setContextRow(null);
    };

    return (
      <>
        <FlexBox alignItems={FlexBoxAlignItems.Start} style={{ gap: '0.5rem' }}>
          <AnalyticalTable
            header="Available Products"
            columns={columns}
            data={availableProducts}
            selectionMode={AnalyticalTableSelectionMode.Multiple}
            onRowContextMenu={handleContextMenu('available')}
            onRowSelect={handleRowSelect(setCheckedAvailable)}
            noDataText="All products have been moved to the selected table."
            visibleRows={8}
            minRows={8}
            style={{ flex: 1 }}
          />
          <FlexBox
            direction={FlexBoxDirection.Column}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            style={{ gap: '0.25rem', alignSelf: 'center' }}
          >
            <Button
              icon={navRightIcon}
              onClick={handleMoveRight}
              tooltip="Move selected to Selected Products"
              accessibleName="Move selected to Selected Products"
            />
            <Button
              icon={navLeftIcon}
              onClick={handleMoveLeft}
              tooltip="Move selected to Available Products"
              accessibleName="Move selected to Available Products"
            />
          </FlexBox>
          <AnalyticalTable
            header="Selected Products"
            columns={columns}
            data={selectedProducts}
            selectionMode={AnalyticalTableSelectionMode.Multiple}
            onRowContextMenu={handleContextMenu('selected')}
            onRowSelect={handleRowSelect(setCheckedSelected)}
            noDataText="No products selected yet. Use the buttons or right-click a row to move products here."
            visibleRows={8}
            minRows={8}
            style={{ flex: 1 }}
          />
        </FlexBox>
        <div
          ref={anchorRef}
          aria-hidden="true"
          style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}
        />
        {menuOpen && (
          <Menu
            open
            opener={anchorRef.current}
            onClose={() => {
              setMenuOpen(false);
            }}
            onItemClick={handleMenuItemClick}
          >
            <MenuItem
              text={`Move to ${menuTarget === 'available' ? 'Selected Products' : 'Available Products'}`}
              icon={menuTarget === 'available' ? navRightIcon : navLeftIcon}
            />
          </Menu>
        )}
        {toastOpen && (
          <Toast open onClose={() => setToastOpen(false)}>
            Please select a row
          </Toast>
        )}
      </>
    );
  },
};

export const KitchenSink: Story = {
  args: kitchenSinkArgs,
};

// ===================== Not displayed in sidebar =====================

export const EllipsisExamples: Story = {
  tags: ['excludeFromSidebar'],
  args: {
    data: dataLarge.slice(0, 5),
    columns: [
      {
        Header: 'Plain String (Automatic Ellipsis)',
        accessor: 'name',
        width: 60,
        Cell: ({ value }) => value,
      },
      {
        Header: 'With textEllipsis Class',
        accessor: 'friend.name',
        width: 60,
        Cell: ({ value, webComponentsReactProperties }) => (
          <div className={webComponentsReactProperties.classes.textEllipsis} title={value}>
            {value}
          </div>
        ),
      },
      {
        Header: 'With Text Component',
        id: 'description',
        width: 60,
        Cell: () => (
          <Text maxLines={1} title="This is a very long text that demonstrates how the Text component handles ellipsis">
            This is a very long text that demonstrates how the Text component handles ellipsis
          </Text>
        ),
      },
    ],
    visibleRows: 5,
    style: { width: 'min(100%, 300px)' },
  },
};
