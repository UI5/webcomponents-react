import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{r as n}from"./react-BZibOG70.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-DymCpMBB.js";import{_ as c,d as l,r as u}from"./blocks-Crdq0CXF.js";import{Default as d,InListOrTable as f,InvertedObjectStatus as p,WithCustomIcon as m,WithDefaultIcons as h,WithIconOnly as g,n as _,t as v}from"./ObjectStatus.stories-AnymH-Qg.js";function y(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l,{of:v}),`
`,(0,x.jsx)(o,{of:v}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,x.jsx)(u,{of:d}),`
`,(0,x.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,x.jsx)(a,{of:d}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(t.h2,{id:`objectstatus-with-default-icons`,children:`ObjectStatus With Default Icons`}),`
`,(0,x.jsx)(u,{of:h}),`
`,(0,x.jsx)(t.h2,{id:`objectstatus-with-custom-icon`,children:`ObjectStatus With Custom Icon`}),`
`,(0,x.jsx)(u,{of:m}),`
`,(0,x.jsx)(t.h2,{id:`objectstatus-with-icon-only`,children:`ObjectStatus With Icon Only`}),`
`,(0,x.jsx)(u,{of:g}),`
`,(0,x.jsx)(t.h2,{id:`all-objectstatus-states`,children:`All ObjectStatus States`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Note:`}),` Only the `,(0,x.jsx)(t.code,{children:`inverted`}),` `,(0,x.jsx)(t.code,{children:`ObjectStatus`}),` supports `,(0,x.jsx)(t.code,{children:`IndicationColor`}),`s 11-20. For non-inverted `,(0,x.jsx)(t.code,{children:`ObjectStatus`}),`, these colors default to the `,(0,x.jsx)(t.code,{children:`"None"`}),` `,(0,x.jsx)(t.code,{children:`state`}),` color and should `,(0,x.jsx)(t.strong,{children:`not`}),` be used.`]}),`
`,(0,x.jsx)(u,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`objectstatus-in-interactive-lists-or-tables`,children:`ObjectStatus in Interactive Lists or Tables`}),`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`Applicable since v2.17.0`})}),`
`,(0,x.jsxs)(t.p,{children:[`The `,(0,x.jsx)(t.code,{children:`AnalyticalTable`}),` component includes active state styling for `,(0,x.jsx)(t.code,{children:`ObjectStatus`}),` out of the box, as it is developed within project and can be styled accordingly.
For lists or tables from `,(0,x.jsx)(t.code,{children:`@ui5/webcomponents(-fiori/-ai/-compat)`}),` (e.g., `,(0,x.jsx)(t.code,{children:`List`}),`, `,(0,x.jsx)(t.code,{children:`Table`}),`), custom CSS is required to override the text and icon `,(0,x.jsx)(t.code,{children:`color`}),` and `,(0,x.jsx)(t.code,{children:`text-shadow`}),` to ensure proper styling when rows are in active state:`]}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-css`,children:`.object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),`
`,(0,x.jsx)(u,{of:f}),`
`,(0,x.jsxs)(`details`,{children:[(0,x.jsx)(`summary`,{children:`Show Static Code`}),(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-css`,children:`.interactive-table-row:active .object-status,
.interactive-li[active] .object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`function ObjectStatusInListOrTable(objectStatusProps: Omit<ObjectStatusPropTypes, 'inverted'>) {
  const atCols: AnalyticalTableColumnDefinition[] = useMemo(
    () => [
      {
        accessor: 'os1',
        Header: 'ObjectStatus (controllable)',
        Cell: () => <ObjectStatus {...objectStatusProps} />,
      },
      {
        accessor: 'os2',
        Header: 'ObjectStatus ("Negative")',
        Cell: () => <ObjectStatus {...objectStatusProps} state={'Negative'} />,
      },
    ],
    [objectStatusProps],
  );
  return (
    <>
      Table
      <Table
        headerRow={
          <TableHeaderRow>
            <TableHeaderCell>ObjectStatus (controllable)</TableHeaderCell>
            <TableHeaderCell>ObjectStatus (&#34;Negative&#34;)</TableHeaderCell>
          </TableHeaderRow>
        }
        features={<TableSelectionSingle behavior={'RowOnly'} />}
      >
        <TableRow rowKey={'0'} className={'interactive-table-row'}>
          <TableCell>
            <ObjectStatus {...objectStatusProps} className={'object-status'} />
          </TableCell>
          <TableCell>
            <ObjectStatus {...objectStatusProps} className={'object-status'} state={'Negative'} />
          </TableCell>
        </TableRow>
      </Table>
      <hr />
      List
      <List selectionMode="Single">
        <ListItemCustom className={'interactive-li'}>
          <ObjectStatus {...objectStatusProps} className={'object-status'} />
        </ListItemCustom>
      </List>
      <hr />
      AnalyticalTable
      <AnalyticalTable
        data={atData}
        columns={atCols}
        minRows={1}
        selectionMode={'Single'}
        selectionBehavior={'RowOnly'}
      />
    </>
  );
}
`})})]}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(i,{})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),r(),s(),c(),_()}))();export{b as default};