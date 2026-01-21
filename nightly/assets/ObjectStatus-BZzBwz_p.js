import{j as t}from"./iframe-f3iLPpTx.js";import{useMDXComponents as a}from"./index-Cg-5LGOy.js";import{M as c,C as s}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import{C as l}from"./ControlsWithNote-Bu0kyXyv.js";import{D as m}from"./DocsHeader-B-7a3kS4.js";import{F as p}from"./CommandsAndQueries-ANshK3xd.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-Mg_mXT74.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./index-C81LpEbs.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./copy-DoG1WmGJ.js";import"./copy-BPmTOQZZ.js";import"./GitHub-Mark-Bin-zAIE.js";import"./TableOfContent-D-qzXXkG.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./ThemingParameters-pyhX3s39.js";import"./index-CRy0gMjM.js";import"./index-x-l5-c_J.js";import"./IconDesign-DXd8PPVF.js";import"./filter-XptaN1lH.js";import"./group-2-CObAZZZr.js";import"./sort-descending-D6cr4_48.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFnD-yF-.js";import"./Input-BA2q8K-i.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./ValueStateMessage.css-seFb1qKi.js";import"./Suggestions.css-C81am98X.js";import"./utils-BubI_VCY.js";import"./index-BUKlkCYI.js";import"./index-nGDSIC6S.js";import"./index-BRFWofe_.js";import"./ListItemStandard-Czpv5A2n.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./useCurrentTheme-CEll4Kb2.js";import"./index-u-NkBXly.js";import"./InvisibleMessage-C0oVP_sH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzIFx5-R.js";import"./index-oLu0T5ZZ.js";import"./query-CzSBusdE.js";import"./overflow-uwhKmK5A.js";import"./index-BElhwb7n.js";import"./TableSelectionBase-D9LrqZsW.js";import"./index-DXgYFRlO.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
`,t.jsx(m,{of:n}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"objectstatus-with-default-icons",children:"ObjectStatus With Default Icons"}),`
`,t.jsx(s,{of:d}),`
`,t.jsx(e.h2,{id:"objectstatus-with-custom-icon",children:"ObjectStatus With Custom Icon"}),`
`,t.jsx(s,{of:j}),`
`,t.jsx(e.h2,{id:"objectstatus-with-icon-only",children:"ObjectStatus With Icon Only"}),`
`,t.jsx(s,{of:b}),`
`,t.jsx(e.h2,{id:"all-objectstatus-states",children:"All ObjectStatus States"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," Only the ",t.jsx(e.code,{children:"inverted"})," ",t.jsx(e.code,{children:"ObjectStatus"})," supports ",t.jsx(e.code,{children:"IndicationColor"}),"s 11-20. For non-inverted ",t.jsx(e.code,{children:"ObjectStatus"}),", these colors default to the ",t.jsx(e.code,{children:'"None"'})," ",t.jsx(e.code,{children:"state"})," color and should ",t.jsx(e.strong,{children:"not"})," be used."]}),`
`,t.jsx(s,{of:u}),`
`,t.jsx(e.h2,{id:"objectstatus-in-interactive-lists-or-tables",children:"ObjectStatus in Interactive Lists or Tables"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Applicable since v2.17.0"})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"AnalyticalTable"})," component includes active state styling for ",t.jsx(e.code,{children:"ObjectStatus"}),` out of the box, as it is developed within project and can be styled accordingly.
For lists or tables from `,t.jsx(e.code,{children:"@ui5/webcomponents(-fiori/-ai/-compat)"})," (e.g., ",t.jsx(e.code,{children:"List"}),", ",t.jsx(e.code,{children:"Table"}),"), custom CSS is required to override the text and icon ",t.jsx(e.code,{children:"color"})," and ",t.jsx(e.code,{children:"text-shadow"})," to ensure proper styling when rows are in active state:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),`
`,t.jsx(s,{of:h}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show Static Code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.interactive-table-row:active .object-status,
.interactive-li[active] .object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function ObjectStatusInListOrTable(objectStatusProps: Omit<ObjectStatusPropTypes, 'inverted'>) {
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
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(p,{})]})}function Ot(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Ot as default};
