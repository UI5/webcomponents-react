import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{S as n,a as r,c as i,m as a,n as o,o as s,p as c,s as l,t as u,x as d}from"./TableSelectionSingle-DBQbirFj.js";import{_ as f,g as p,v as m,y as h}from"./webComponents-DJ0lJxiZ.js";import{a as g,c as _,d as v,f as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./TableVirtualizer-BEiShqus.js";import{r as E}from"./react-BZibOG70.js";import{_ as D,o as O,p as k,s as A,t as j}from"./components-Bwe5mHIV.js";import{_ as M,d as N,n as P,o as F,r as I,u as L}from"./blocks-D9k7TVdi.js";import{n as R,t as z}from"./SubcomponentsSection-BZUidqqR.js";import{Default as B,GrowingTable as V,VirtualizedTableRows as H,WithSelection as U,dragAndDropRows as W,n as G,t as K,withRowActions as q}from"./Table.stories-BjkExqPF.js";function J(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...E(),...e.components};return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(N,{of:K}),`
`,(0,X.jsx)(A,{of:K}),`
`,(0,X.jsx)(`br`,{}),`
`,(0,X.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,X.jsx)(I,{of:B}),`
`,(0,X.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,X.jsx)(k,{of:B}),`
`,(0,X.jsx)(`br`,{}),`
`,(0,X.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,X.jsx)(`br`,{}),`
`,(0,X.jsx)(t.h2,{id:`growing-table`,children:`Growing Table`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`Table`}),` with growing feature (`,(0,X.jsx)(t.code,{children:`<TableGrowing onLoadMore={onLoadMore} mode={TableGrowingMode.Scroll} />`}),`):`]}),`
`,(0,X.jsx)(I,{of:V}),`
`,(0,X.jsxs)(`details`,{children:[(0,X.jsx)(`summary`,{children:`Show static code`}),(0,X.jsx)(t.pre,{children:(0,X.jsx)(t.code,{className:`language-tsx`,children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset}-row\`}>
      <TableCell>
        <span>{index + indexOffset}</span>
      </TableCell>
      <TableCell>
        <span>Placeholder</span>
      </TableCell>
      <TableCell>
        <span>Placeholder 2</span>
      </TableCell>
      <TableCell>
        <span>Placeholder 3</span>
      </TableCell>
      <TableCell>
        <span>Placeholder 4</span>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = (props) => {
  const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <>
      <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
        Growing <code>mode</code>
      </Label>
      <SegmentedButton
        style={{ marginBlockEnd: '0.5rem' }}
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
        }}
      >
        <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
        <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
      </SegmentedButton>
      <div style={{ height: '250px', overflow: 'auto' }}>
        <Table {...props} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
          {rows}
        </Table>
      </div>
    </>
  );
};
`})})]}),`
`,(0,X.jsx)(t.h2,{id:`table-with-row-selection`,children:`Table with row selection`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`Table`}),` with selection features (`,(0,X.jsx)(t.code,{children:`<TableSelectionSingle />`}),` & `,(0,X.jsx)(t.code,{children:`<TableSelectionMulti />`}),`)`]}),`
`,(0,X.jsx)(I,{of:U}),`
`,(0,X.jsxs)(`details`,{children:[(0,X.jsx)(`summary`,{children:`Show static code`}),(0,X.jsx)(t.pre,{children:(0,X.jsx)(t.code,{className:`language-tsx`,children:`function TableWithRowSelection(props) {
  const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
  return (
    <>
      <SegmentedButton
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
        }}
      >
        <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
      </SegmentedButton>
      <Table
        {...props}
        features={
          <>
            {'Single' === mode && <TableSelectionSingle />}
            {'Multi' === mode && <TableSelectionMulti />}
          </>
        }
      >
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
}
`})})]}),`
`,(0,X.jsx)(t.h2,{id:`table-with-virtualized-rows`,children:`Table with virtualized rows`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`Table`}),` with virtualization feature (`,(0,X.jsx)(t.code,{children:`<TableVirtualizer {...props) />`}),`):`]}),`
`,(0,X.jsx)(I,{of:H}),`
`,(0,X.jsxs)(`details`,{children:[(0,X.jsx)(`summary`,{children:`Show static code`}),(0,X.jsx)(t.pre,{children:(0,X.jsx)(t.code,{className:`language-tsx`,children:`// enrich data with \`position\` (if not already available)
const dataLargeWithPosition = dataLarge.map((item, index) => ({
  ...item,
  position: index
}));

function VirtualizedTable(props) {
  const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));

  const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = (e) => {
    const { first, last } = e.detail;

    // render two rows before and after the visible area of the table body container
    const overscanCountStart = Math.max(first - 2, 0);
    const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
    setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
  };
  return (
    <Table
      {...props}
      // headerRow + 8 visible rows:
      // 9 * 44px = 396px (content-density: Cozy)
      // 9 * 32px = 288px (content-density: Compact)
      style={{ height: '396px' }}
      headerRow={
        <TableHeaderRow sticky>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Friend Name</TableHeaderCell>
          <TableHeaderCell>Friend Age</TableHeaderCell>
        </TableHeaderRow>
      }
      features={<TableVirtualizer rowCount={500} rowHeight={44} onRangeChange={handleRangeChange} />}
    >
      {data.map((row) => (
        <TableRow key={row.position} position={row.position}>
          <TableCell>
            <span>{row.name}</span>
          </TableCell>
          <TableCell>
            <span>{row.age}</span>
          </TableCell>
          <TableCell>
            <span>{row.friend.name}</span>
          </TableCell>
          <TableCell>
            <span>{row.friend.age}</span>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,(0,X.jsx)(t.h2,{id:`table-with-row-actions`,children:`Table with row actions`}),`
`,(0,X.jsxs)(t.p,{children:[`The `,(0,X.jsx)(t.code,{children:`TableRowAction`}),` & `,(0,X.jsx)(t.code,{children:`TableRowActionNavigation`}),` component lets you incorporate interactive elements into table rows, enabling users to take actions directly related to each row.
The `,(0,X.jsx)(t.code,{children:`rowActionCount`}),` prop of the `,(0,X.jsx)(t.code,{children:`Table`}),` component determines the width of the row action column. A maximum value of 3 is recommended, as exceeding this limit may take up too much space on smaller screens. If the number of row actions exceeds the `,(0,X.jsx)(t.code,{children:`rowActionCount`}),`, an overflow button will appear, providing access to the additional actions.`]}),`
`,(0,X.jsxs)(t.p,{children:[`The `,(0,X.jsx)(t.code,{children:`invisible`}),` prop of row actions allows you to hide specific row actions while preserving their space. This can be useful for consistent alignment of row actions across several rows.`]}),`
`,(0,X.jsx)(I,{of:q}),`
`,(0,X.jsx)(t.h2,{id:`drag-and-rop-table-rows`,children:`Drag and rop table rows`}),`
`,(0,X.jsxs)(t.p,{children:[`Enable drag-and-drop by using the `,(0,X.jsx)(t.code,{children:`onMoveOver`}),` and `,(0,X.jsx)(t.code,{children:`onMove`}),` event in combination with the `,(0,X.jsx)(t.code,{children:`movable`}),` prop on the `,(0,X.jsx)(t.code,{children:`TableRow`}),`.`]}),`
`,(0,X.jsx)(I,{of:W}),`
`,(0,X.jsxs)(`details`,{children:[(0,X.jsx)(`summary`,{children:`Show static code`}),(0,X.jsx)(t.pre,{children:(0,X.jsx)(t.code,{className:`language-tsx`,children:`function DragAndDropTableRows(props) {
  const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));

  const handleMove: TablePropTypes["onMove"] = (e) => {
    const { source, destination } = e.detail;

    setRows((prevRows) => {
      const sourceIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === source.element.dataset.id,
      );
      const destinationIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === destination.element.dataset.id,
      );

      if (sourceIndex === -1 || destinationIndex === -1) {
        return prevRows;
      }

      const updatedRows = [...prevRows];
      const [movedRow] = updatedRows.splice(sourceIndex, 1);

      if (destination.placement === "Before") {
        updatedRows.splice(destinationIndex, 0, movedRow);
      } else if (destination.placement === "After") {
        updatedRows.splice(destinationIndex + 1, 0, movedRow);
      }

      return updatedRows;
    });
  };

  const handleMoveOver: TablePropTypes["onMoveOver"] = (e) => {
    const { source, destination } = e.detail;

    if (
      source.element.hasAttribute("ui5-table-row") &&
      destination.element.hasAttribute("ui5-table-row") &&
      destination.placement !== "On"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Table {...props} onMove={handleMove} onMoveOver={handleMoveOver}>
      {rows.map((row) => (
        <TableRow key={row.position} movable data-id={row.position}>
          <TableCell>
            <span>{row.name}</span>
          </TableCell>
          <TableCell>
            <span>{row.age}</span>
          </TableCell>
          <TableCell>
            <span>{row.friend.name}</span>
          </TableCell>
          <TableCell>
            <span>{row.friend.age}</span>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,(0,X.jsx)(L,{children:z}),`
`,(0,X.jsx)(t.h2,{id:`tableheaderrow`,children:`TableHeaderRow`}),`
`,(0,X.jsx)(F,{of:r}),`
`,(0,X.jsx)(P,{of:r}),`
`,(0,X.jsx)(t.h2,{id:`tableheadercell`,children:`TableHeaderCell`}),`
`,(0,X.jsx)(F,{of:l}),`
`,(0,X.jsx)(P,{of:l}),`
`,(0,X.jsx)(t.h2,{id:`tableheadercellactionai`,children:`TableHeaderCellActionAI`}),`
`,(0,X.jsx)(F,{of:m}),`
`,(0,X.jsx)(P,{of:m}),`
`,(0,X.jsx)(t.h2,{id:`tablerow`,children:`TableRow`}),`
`,(0,X.jsx)(F,{of:c}),`
`,(0,X.jsx)(P,{of:c}),`
`,(0,X.jsx)(t.h2,{id:`tablecell`,children:`TableCell`}),`
`,(0,X.jsx)(F,{of:d}),`
`,(0,X.jsx)(P,{of:d}),`
`,(0,X.jsx)(t.h2,{id:`tablerowaction`,children:`TableRowAction`}),`
`,(0,X.jsx)(F,{of:g}),`
`,(0,X.jsx)(P,{of:g}),`
`,(0,X.jsx)(t.h2,{id:`tablerowactionnavigation`,children:`TableRowActionNavigation`}),`
`,(0,X.jsx)(F,{of:C}),`
`,(0,X.jsx)(P,{of:C}),`
`,(0,X.jsx)(t.h2,{id:`tablegrowing`,children:`TableGrowing`}),`
`,(0,X.jsx)(F,{of:w}),`
`,(0,X.jsx)(P,{of:w}),`
`,(0,X.jsx)(t.h2,{id:`tableselectionmulti`,children:`TableSelectionMulti`}),`
`,(0,X.jsx)(F,{of:v}),`
`,(0,X.jsx)(P,{of:v}),`
`,(0,X.jsx)(t.h2,{id:`tableselectionsingle`,children:`TableSelectionSingle`}),`
`,(0,X.jsx)(F,{of:u}),`
`,(0,X.jsx)(P,{of:u}),`
`,(0,X.jsx)(t.h2,{id:`tablevirtualizer-experimental`,children:`TableVirtualizer (experimental)`}),`
`,(0,X.jsx)(F,{of:T}),`
`,(0,X.jsx)(P,{of:T}),`
`,(0,X.jsx)(t.h2,{id:`tableselection-deprecated`,children:`TableSelection (deprecated)`}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.strong,{children:`Deprecated!`})}),`
`,(0,X.jsx)(F,{of:p}),`
`,(0,X.jsx)(P,{of:p}),`
`,(0,X.jsx)(O,{})]})}function Y(e={}){let{wrapper:t}={...E(),...e.components};return t?(0,X.jsx)(t,{...e,children:(0,X.jsx)(J,{...e})}):J(e)}var X;e((()=>{X=t(),D(),j(),R(),M(),n(),s(),i(),a(),_(),f(),x(),b(),S(),h(),y(),o(),G()}))();export{Y as default};