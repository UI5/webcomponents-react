import{j as t}from"./iframe-COKmt9GX.js";import{useMDXComponents as a}from"./index-CzY2e8So.js";import{M as c,C as s}from"./blocks-BC1CQ7iN.js";import"./Tag-DloN_KbF.js";import"./index-C27X2XUm.js";import{C as l}from"./ControlsWithNote-GGi7HBIW.js";import{D as m}from"./DocsHeader-Cr0putdn.js";import{F as p}from"./CommandsAndQueries-DSaWGMGq.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-DuK1g5-G.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./index-WnbZc56M.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./copy-aXFxWRJ8.js";import"./copy-CyMKHNyy.js";import"./GitHub-Mark-CWHMnGQ2.js";import"./TableOfContent-BJyZaqmf.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./ThemingParameters-pyhX3s39.js";import"./index-DwH7fqA2.js";import"./index-DhVmRSsQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHypl9jb.js";import"./group-2-DEGE6ykx.js";import"./sort-descending-CT2T5JwK.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2iRiHRU.js";import"./Input-BceWkqxg.js";import"./ResponsivePopoverCommon.css-CcjK_Jcr.js";import"./ValueStateMessage.css-DaEL7h-V.js";import"./Suggestions.css-9PKvquaD.js";import"./utils-Dy6UBNOH.js";import"./index-qVJXdvv_.js";import"./index-DGpRIpiu.js";import"./index-DBlqkpsO.js";import"./ListItemStandard-BPKpO2-G.js";import"./navigation-down-arrow-RRwxkr-f.js";import"./navigation-right-arrow-BoUWLgXr.js";import"./navigation-right-arrow-CZWnArrm.js";import"./useCurrentTheme-Bp534Rms.js";import"./index-ByNYUvQ0.js";import"./InvisibleMessage-DmmsUdM7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--2n9yHX1.js";import"./index-C9jZpCHU.js";import"./query-CzSBusdE.js";import"./overflow-CWkLeE-v.js";import"./index-7Kla8gPN.js";import"./TableSelectionBase-ChyzBibD.js";import"./index-qF8GZWDg.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
