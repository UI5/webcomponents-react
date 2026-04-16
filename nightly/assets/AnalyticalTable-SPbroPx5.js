import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{r as n}from"./react-BZibOG70.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-Da28yRWl.js";import{_ as c,d as l,r as u,u as d}from"./blocks-D9k7TVdi.js";import{c as f,d as p,f as m,i as h,l as g,m as _,n as v,o as y,r as b,s as x,t as S,u as C}from"./AnalyticalTable.stories-CjYWBccv.js";var w,T=e((()=>{w="# AnalyticalTable Column Properties\n\nEach object in the `columns` array configures one column. Do not set `width` unless you need specific sizing — by default the table distributes space evenly.\n\n## Required\n\n| Property   | Type                                                                | Description                                                                                           |\n| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |\n| `accessor` | `string` or `(originalRow, rowIndex, row, parentRows, data) => any` | Builds the data model for the column. Supports nested paths like `info.hobby` or `address[0].street`. |\n| `id`       | `string`                                                            | Unique column ID. Mandatory if `accessor` is not set or is a function.                                |\n\n## Optional\n\n| Property                | Type                                                 | Default          | Description                                                                                                                                 |\n| ----------------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |\n| `Header`                | `string` or `ComponentType`                          |                  | Column header text or component.                                                                                                            |\n| `headerLabel`           | `string`                                             |                  | `aria-label` for the column header (screen readers).                                                                                        |\n| `headerTooltip`         | `string`                                             |                  | Tooltip for the column header. Defaults to `Header` if it is a string.                                                                      |\n| `Cell`                  | `string` or `ComponentType<CellInstance>`            |                  | Custom cell renderer. Receives cell value as `props.value`. **Must be memoized** for performance.                                           |\n| `cellLabel`             | `({cell, instance}) => string`                       |                  | `aria-label` for individual cells (screen readers).                                                                                         |\n| `width`                 | `number`                                             |                  | Column width in pixels. If not set, the table distributes all columns without a width evenly. Cannot be less than `minWidth`.               |\n| `minWidth`              | `number`                                             | `60`             | Minimum column width.                                                                                                                       |\n| `maxWidth`              | `number`                                             |                  | Maximum column width.                                                                                                                       |\n| `hAlign`                | `TextAlign`                                          |                  | Horizontal cell alignment.                                                                                                                  |\n| `vAlign`                | `VerticalAlign`                                      |                  | Vertical cell alignment.                                                                                                                    |\n| `Popover`               | `ComponentType` or `(instance) => ReactNode`         |                  | Custom header popover renderer. Replaces the internal header popover. Receives table instance with `popoverProps` (`openerRef`, `setOpen`). |\n| `Filter`                | `ComponentType`                                      |                  | Filter component rendered in the header.                                                                                                    |\n| `disableFilters`        | `boolean`                                            |                  | Disable filtering for this column.                                                                                                          |\n| `disableGlobalFilter`   | `boolean`                                            |                  | Exclude this column from global filter.                                                                                                     |\n| `defaultCanFilter`      | `boolean`                                            |                  | Make column filterable even without a valid `accessor`.                                                                                     |\n| `filter`                | `string` or `Function`                               |                  | Filter function. Built-in: `text`, `exactText`, `exactTextCase`, `equals`.                                                                  |\n| `disableSortBy`         | `boolean`                                            |                  | Disable sorting for this column.                                                                                                            |\n| `defaultCanSort`        | `boolean`                                            |                  | Make column sortable even without a valid `accessor`.                                                                                       |\n| `sortDescFirst`         | `boolean`                                            |                  | First sort direction is descending instead of ascending.                                                                                    |\n| `sortInverted`          | `boolean`                                            |                  | Invert underlying sort direction without changing the UI indicator.                                                                         |\n| `sortType`              | `string` or `(rowA, rowB, columnId, desc) => number` | `'alphanumeric'` | Sort function. Built-in: `basic`, `datetime`, `alphanumeric`. **Must be memoized** if a function.                                           |\n| `enableMultiSort`       | `boolean`                                            |                  | Allow multi-sort for this column.                                                                                                           |\n| `disableGroupBy`        | `boolean`                                            |                  | Disable grouping for this column.                                                                                                           |\n| `Aggregated`            | `string` or `ComponentType`                          |                  | Component to render for aggregated cells.                                                                                                   |\n| `aggregate`             | `string` or `(leafValues, aggregatedValues) => any`  |                  | Aggregation function. Built-in: `sum`, `min`, `max`, `minMax`, `average`, `median`, `unique`, `uniqueCount`, `count`.                       |\n| `aggregateValue`        | `string` or `(values, row, column) => any`           |                  | Resolve a primitive value for aggregation from non-primitive cell values.                                                                   |\n| `disableResizing`       | `boolean`                                            |                  | Disable column resizing.                                                                                                                    |\n| `autoResizable`         | `boolean`                                            |                  | Double-click resizer to auto-fit column width to content. Works best with default text content.                                             |\n| `disableDragAndDrop`    | `boolean`                                            |                  | Disable column reordering via drag and drop.                                                                                                |\n| `scaleWidthModeOptions` | `ScaleWidthModeOptions`                              |                  | Custom string for internal width calculation with `scaleWidthMode` `Grow` or `Smart`.                                                       |\n| `responsivePopIn`       | `boolean`                                            |                  | Move column content to the first cell when table width falls below `responsiveMinWidth`. At least one column must remain visible.           |\n| `responsiveMinWidth`    | `number`                                             |                  | Table width threshold for pop-in or hiding. If `responsivePopIn` is true, content moves; otherwise column hides.                            |\n| `PopInHeader`           | `string` or `ComponentType`                          |                  | Custom header for popped-in columns.                                                                                                        |\n| `popinDisplay`          | `AnalyticalTablePopinDisplay`                        | `Block`          | Display style for pop-in content.                                                                                                           |\n"}));function E(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l,{of:S}),`
`,(0,O.jsx)(o,{of:S}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(u,{of:b}),`
`,(0,O.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show shortened Code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name'
  },
  {
    Header: 'Friend Age',
    accessor: 'friend.age'
  }
];

const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const TableComp = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      visibleRows={5}
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,O.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(a,{of:b}),`
`,(0,O.jsx)(t.h2,{id:`column-properties`,children:`Column Properties`}),`
`,(0,O.jsx)(d,{children:w}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsx)(t.h2,{id:`tree-table`,children:`Tree Table`}),`
`,(0,O.jsx)(u,{of:m,sourceState:`none`}),`
`,(0,O.jsxs)(t.p,{children:[`The `,(0,O.jsx)(t.code,{children:`data`}),` structure of the tree table is as follows:`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-js`,children:`const data = {
    name: "Greg Miller",
    age: 35,
    friend: {
        name: "Rose Franco",
        age: 32,
    },
    status: "None",
    subRows: [
        {
            name: "Rick DeAngelo",
            age: 25,
            friend: {
                name: "Susanne Franco",
                age: 37,
            },
            status: "None",
            subRows: [...],
        },
    ],
    ...
};
`})}),`
`,(0,O.jsxs)(t.p,{children:[`In this example the default key for sub row detection is used (`,(0,O.jsx)(t.code,{children:`subRows`}),`), you can use any key you like by setting the `,(0,O.jsx)(t.code,{children:`subRowsKey`}),` prop.`]}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsx)(t.h2,{id:`infinite-scrolling`,children:`Infinite Scrolling`}),`
`,(0,O.jsx)(t.p,{children:`The table initially contains 50 rows, when the last 10 rows are reached the table will load more data.`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.strong,{children:`Note:`}),` To prevent the table state from resetting when the data is updated, please see `,(0,O.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-recipes--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`this recipe`}),`.`]}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:y}),`
`,(0,O.jsx)(t.h3,{id:`code-1`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show Code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const InfiniteScrollTable = (props) => {
  const [data, setData] = useState(props.data.slice(0, 50));
  const [loading, setLoading] = useState(false);
  const offset = useRef(50);
  const onLoadMore = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setData((prev) => [...prev, ...props.data.slice(offset.current, offset.current + 50)]);
        setLoading(false);
        offset.current += 50;
      }, 2000);
    }
  }, [loading, props.data, offset.current]);
  return (
    <AnalyticalTable
      data={data}
      columns={props.columns}
      infiniteScroll={true}
      infiniteScrollThreshold={10}
      header="Scroll to load more data"
      onLoadMore={onLoadMore}
      loading={loading}
      reactTableOptions: {{ autoResetSelectedRows: false }}
    />
  );
};
`})})]}),`
`,(0,O.jsx)(t.h2,{id:`analyticaltable-with-subcomponents`,children:`AnalyticalTable with subcomponents`}),`
`,(0,O.jsxs)(t.p,{children:[`Adding custom subcomponents below table rows can be achieved by setting the `,(0,O.jsx)(t.code,{children:`renderRowSubComponent`}),` prop.
The prop expects a function with an optional parameter containing the `,(0,O.jsx)(t.code,{children:`row`}),` instance, there you can control which row should display subcomponents. If you want to display the subcomponent at the bottom of the row without an expandable container, you can set `,(0,O.jsx)(t.code,{children:`subComponentsBehavior`}),` prop to `,(0,O.jsx)(t.code,{children:`"Visible"`}),` or to `,(0,O.jsx)(t.code,{children:`"IncludeHeight"`}),`. "Visible" simply adds the subcomponent to the row without including its height in the initial calculation of the table body, whereas "IncludeHeight" does.`]}),`
`,(0,O.jsx)(t.h3,{id:`notes`,children:`Notes`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`When `,(0,O.jsx)(t.code,{children:`renderRowSubComponent`}),` is set, `,(0,O.jsx)(t.code,{children:`grouping`}),` is disabled.`]}),`
`,(0,O.jsx)(t.li,{children:"When rendering active elements inside the subcomponent, make sure to add the `data-subcomponent-active-element' attribute, otherwise focus behavior won't be consistent."}),`
`,(0,O.jsxs)(t.li,{children:[`When `,(0,O.jsx)(t.code,{children:`AnalyticalTableSubComponentsBehavior.IncludeHeight`}),` or `,(0,O.jsx)(t.code,{children:`AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable`}),` is used, `,(0,O.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.Interactive`}),` is not supported.`]}),`
`]}),`
`,(0,O.jsx)(a,{of:p,include:[`renderRowSubComponent`,`subComponentsBehavior`]}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:p}),`
`,(0,O.jsx)(t.h3,{id:`code-2`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show Code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const TableWithSubcomponents = (props) => {
  const renderRowSubComponent = (row) => {
    if (row.id === '0') {
      return (
        <FlexBox
          style={{ backgroundColor: 'lightblue', height: '300px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 300px</Tag>
          <Text>This subcomponent will only be displayed below the first row.</Text>
          <hr />
          <Text>
            The button below is rendered with \`data-subcomponent-active-element\` attribute to ensure consistent focus
            behavior
          </Text>
          <Button data-subcomponent-active-element>Click</Button>
        </FlexBox>
      );
    }
    if (row.id === '1') {
      return (
        <FlexBox
          style={{ backgroundColor: 'lightyellow', height: '100px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 100px</Tag>
          <Text>This subcomponent will only be displayed below the second row.</Text>
        </FlexBox>
      );
    }
    if (row.id === '2') {
      return null;
    }
    return (
      <FlexBox
        style={{ backgroundColor: 'lightgrey', height: '50px' }}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        direction={FlexBoxDirection.Column}
      >
        <Tag>height: 50px</Tag>
        <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
      </FlexBox>
    );
  };
  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      renderRowSubComponent={renderRowSubComponent}
      subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Expandable} //default value
    />
  );
};
`})})]}),`
`,(0,O.jsx)(t.h2,{id:`adjust-the-number-of-rows-to-the-container-height`,children:`Adjust the number of rows to the container height`}),`
`,(0,O.jsxs)(t.p,{children:[`By adding the `,(0,O.jsx)(t.code,{children:`visibleRowCountMode`}),` prop and setting it to `,(0,O.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.Auto`}),` the table automatically fills the surrounding container with rows and when setting it to `,(0,O.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows`}),`, empty rows fill the container as well, if not enough visible rows are available.`]}),`
`,(0,O.jsx)(a,{of:h,include:[`containerHeight`,`visibleRowCountMode`],hideHTMLPropsNote:!0}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:h}),`
`,(0,O.jsx)(t.h3,{id:`code-3`,children:`Code`}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const TableComponent = (props) => {
  return (
    <div style={{ height: \`\${props.containerHeight}px\` }}>
      <AnalyticalTable
        data={props.data}
        columns={props.columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
        // visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
        header={\`Current height: \${props.containerHeight}px - Change the height in the table above\`}
      />
    </div>
  );
};
`})}),`
`,(0,O.jsx)(t.h2,{id:`responsively-display-columns-on-small-devices-pop-in`,children:`Responsively display columns on small devices (Pop-In)`}),`
`,(0,O.jsx)(a,{of:C,hideHTMLPropsNote:!0,include:[`adjustTableHeightOnPopIn`,`containerWidth`]}),`
`,(0,O.jsxs)(t.p,{children:[`To responsively hide columns or move content to the first column, you can add the `,(0,O.jsx)(t.code,{children:`responsiveMinWidth`}),` column option. If
you want the column to "pop-in" the `,(0,O.jsx)(t.code,{children:`responsivePopIn`}),` has to be set to `,(0,O.jsx)(t.code,{children:`true`}),`, otherwise the column will be hidden when the
`,(0,O.jsx)(t.code,{children:`responsiveMinWidth`}),` exceeds the table width. It's also possible to change the header of the pop-in column by setting the
`,(0,O.jsx)(t.code,{children:`PopInHeader`}),` option.`]}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.strong,{children:`Note:`}),` It is recommended to offer column options such as filtering, sorting and grouping only for columns that are always displayed.`]}),`
`,(0,O.jsx)(t.p,{children:`In the example below you can have a look at this behavior:`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`800`}),`: The content of the "Action" column is moved to the first column (`,(0,O.jsx)(t.code,{children:`responsiveMinWidth: 801`}),`)`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`600`}),`: The content of the "Age" column is moved to the first column (`,(0,O.jsx)(t.code,{children:`responsiveMinWidth: 601`}),`) and receives a custom header.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`400`}),`: The content of the "Friend Name" column is moved to the first column and the "Friend Age" column is hidden (`,(0,O.jsx)(t.code,{children:`responsiveMinWidth: 401`}),`). The "Friend Name" column also receives a custom header.`]}),`
`]}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:C}),`
`,(0,O.jsx)(t.h3,{id:`columns-config`,children:`Columns Config`}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 601,
    PopInHeader: 'Custom Header Text (age)',
    Header: 'Age',
    accessor: 'age'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 401,
    Header: 'Friend Name',
    PopInHeader: (instance) => {
      return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
    },
    accessor: 'friend.name'
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
          <Button icon="edit" />
          <Button icon="delete" />
        </FlexBox>
      );
    }
  },
  {
    id: 'popinDisplay',
    Header: 'PopinDisplay Modes',
    responsivePopIn: true,
    responsiveMinWidth: 801,
    popinDisplay: popinDisplay, // possible values: "Block", "Inline", "WithoutHeader"
    Cell: () => {
      return <Text maxLines={1}>Using popinDisplay: {popinDisplay}</Text>;
    }
  }
];
`})}),`
`,(0,O.jsx)(t.h3,{id:`how-to-change-the-content-of-the-pop-in-cell`,children:`How to change the content of the pop-in cell?`}),`
`,(0,O.jsxs)(t.p,{children:[`You can change the content of the pop-in cell without mutating the original cell by using the `,(0,O.jsx)(t.code,{children:`isPopIn`}),` prop of the table instance returned by the `,(0,O.jsx)(t.code,{children:`Cell`}),` column option.`]}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.strong,{children:`Note:`}),` The `,(0,O.jsx)(t.code,{children:`cell`}),` property of the custom `,(0,O.jsx)(t.code,{children:`Cell`}),` renderer, always returns the properties and values of the cell the "popin" cell is rendered into.`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-js`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 600,
    id: 'col',
    Header: 'Column',
    Cell: ({ isPopIn, cell, value }) => {
      if (isPopIn) {
        // this will log the properties of the \`name\` cell (e.g. \`cell.value\` is the value of the \`name\` cell)
        console.log(cell);
        // this will always log the value of this cell (\`col\` cell)
        console.log(value);
        return 'pop-in content';
      }
      // this will log the properties of this cell (e.g. \`cell.value\` is the value of the \`col\` cell)
      console.log(cell);
      // this will always log the value of this cell (\`col\` cell)
      console.log(value);
      return 'original content';
    }
  }
  // ...
];
`})}),`
`,(0,O.jsx)(t.h2,{id:`display-indicator-for-navigated-rows`,children:`Display indicator for navigated rows`}),`
`,(0,O.jsxs)(t.p,{children:[`To display show the navigation column you need to set `,(0,O.jsx)(t.code,{children:`withNavigationHighlight`}),` to `,(0,O.jsx)(t.code,{children:`true`}),` and to mark a row as "navigated" the `,(0,O.jsx)(t.code,{children:`markNavigatedRow`}),` prop is required.
With the `,(0,O.jsx)(t.code,{children:`markNavigatedRow`}),` callback it is possible to define when and how many navigation indicators should be shown.`]}),`
`,(0,O.jsx)(t.p,{children:`Click on any of the rows in the example below to display the "navigated" indicator in the navigation-column.`}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:f}),`
`,(0,O.jsx)(t.h3,{id:`code-4`,children:`Code`}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`export const TableWithNavigationIndicators = () => {
  const [selectedRow, setSelectedRow] = useState();
  const onRowSelect = (e) => {
    setSelectedRow(e.detail.row);
  };
  const markNavigatedRow = useCallback(
    (row) => {
      return selectedRow?.id === row.id;
    },
    [selectedRow]
  );
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      withNavigationHighlight
      selectionMode={selectionMode}
      markNavigatedRow={markNavigatedRow}
      onRowSelect={onRowSelect}
    />
  );
};
`})}),`
`,(0,O.jsx)(t.h2,{id:`custom-column-filtering`,children:`Custom column filtering`}),`
`,(0,O.jsxs)(t.p,{children:[`It is possible to define your own filter function and filter component on each column. For this you need to customize the column option `,(0,O.jsx)(t.code,{children:`filter`}),` or add a custom filter type to the `,(0,O.jsx)(t.code,{children:`reactTableOptions.filterTypes`}),` object (for a custom filter function) and the column option `,(0,O.jsx)(t.code,{children:`Filter`}),` (for a custom filter component).`]}),`
`,(0,O.jsxs)(t.p,{children:[`Here you can find an example using a `,(0,O.jsx)(t.code,{children:`MultiComboBox`}),` with multiple values as filter.`]}),`
`,(0,O.jsx)(u,{sourceState:`none`,of:v}),`
`,(0,O.jsx)(t.h3,{id:`code-5`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show static code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const filterFn = (rows, accessor, filterValue) => {
  if (filterValue.length > 0) {
    return rows.filter((row) => {
      const rowVal = row.values[accessor];
      if (filterValue.some((item) => rowVal.includes(item))) {
        return true;
      }
      return false;
    });
  }
  return rows;
};
const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    // either define your filter function here or set is as \`reactTableOption\` and pass the key as string here (see below)
    filter: filterFn,
    Filter: ({ column }) => {
      const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
      return (
        <MultiComboBox
          onSelectionChange={(e) => {
            column.setFilter(e.detail.items.map((item) => item.getAttribute('text')));
          }}
        >
          {firstNames.map((item) => {
            const isSelected = column?.filterValue?.some((filterVal) => filterVal.includes(item));
            return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
          })}
        </MultiComboBox>
      );
    }
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
];
const TableComponent = () => {
  return (
    <ThemeProvider>
      <AnalyticalTable
        columns={COLUMNS}
        data={DATA}
        filterable
        // you can also define your function here, then you can just pass the key as string to the \`filter\` column option
        // reactTableOptions={{
        //   filterTypes: {
        //     multiValueFilter: filterFn
        //   }
        // }}
      />
    </ThemeProvider>
  );
};
`})})]}),`
`,(0,O.jsx)(t.h2,{id:`table-without-data`,children:`Table Without Data`}),`
`,(0,O.jsx)(u,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`code-6`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show static code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-tsx`,children:`function NoDataTable(props) {
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
      <AnalyticalTable
        {...props}
        data={selected === 'data' ? props.data : []}
        globalFilterValue={filtered ? 'Non-existing text' : undefined}
        NoDataComponent={NoDataComponent}
      />
    </>
  );
}
`})})]}),`
`,(0,O.jsx)(t.h2,{id:`kitchen-sink`,children:`Kitchen Sink`}),`
`,(0,O.jsx)(u,{of:x}),`
`,(0,O.jsx)(t.h3,{id:`code-7`,children:`Code`}),`
`,(0,O.jsxs)(`details`,{children:[(0,O.jsx)(`summary`,{children:`Show shortened Code`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    autoResizable: true,
    headerTooltip: 'Full Name'
  },
  {
    Header: 'Age',
    accessor: 'age',
    autoResizable: true,
    className: 'superCustomClass',
    disableFilters: false,
    disableGroupBy: true,
    disableSortBy: false,
    hAlign: 'End'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name',
    autoResizable: true
  },
  {
    Filter: () => {},
    Header: () => {},
    accessor: 'friend.age',
    autoResizable: true,
    filter: () => {},
    hAlign: 'End',
    headerLabel: 'Friend Age'
  },
  {
    Cell: () => {},
    Header: 'Actions',
    accessor: '.',
    cellLabel: () => {},
    disableFilters: true,
    disableGroupBy: true,
    disableResizing: true,
    disableSortBy: true,
    id: 'actions',
    minWidth: 100,
    width: 100
  }
];

const TestComp2 = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      alternateRowColor
      columnOrder={['friend.name', 'friend.age', 'name']}
      extension={
        <FlexBox justifyContent="End">
          <Button accessibleName="edit" design="Transparent" icon="edit" />
        </FlexBox>
      }
      filterable
      groupable
      header="Table Title"
      headerRowHeight={60}
      highlightField="status"
      infiniteScroll
      infiniteScrollThreshold={20}
      loadingDelay={1000}
      minRows={5}
      noDataText="Custom 'noDataText' message"
      overscanCountHorizontal={5}
      scaleWidthMode="Smart"
      selectedRowIds={{
        3: true
      }}
      selectionBehavior="Row"
      selectionMode="Single"
      sortable
      subRowsKey="subRows"
      visibleRowCountMode="Interactive"
      visibleRows={5}
      withRowHighlight
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,O.jsx)(i,{})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),r(),s(),c(),_(),T()}))();export{D as default};