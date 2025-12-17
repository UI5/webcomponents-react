import{j as t}from"./iframe-BHL3KP3B.js";import{useMDXComponents as a}from"./index-CV9KcB1M.js";import{M as c,C as s}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import{C as l}from"./ControlsWithNote-DAxpK-CA.js";import{D as m}from"./DocsHeader-BP3M1Dwd.js";import{F as p}from"./CommandsAndQueries-D7saeET0.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-CeYVJ8fm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./index-JDEJOPjW.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./copy-BPDPnsXG.js";import"./copy-Cx_IXaYw.js";import"./GitHub-Mark-DnhrR-7I.js";import"./TableOfContent-WAW6dFW2.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./ThemingParameters-pyhX3s39.js";import"./index-BF8LBvPs.js";import"./index-Dvhp9tec.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLs9MXxX.js";import"./group-2-C9nYhH-K.js";import"./sort-descending-B_h7sVML.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf8R0xRs.js";import"./Input-BbifX6GM.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./ValueStateMessage.css-BeeYtMkq.js";import"./Suggestions.css-DRhiS2Sl.js";import"./utils-DvyWIthn.js";import"./index-BvVS_2DG.js";import"./index-Bnk6-Kur.js";import"./index-BGVW-O6b.js";import"./ListItemStandard-CWGtaCZo.js";import"./navigation-down-arrow-B5ni_-5b.js";import"./navigation-right-arrow-D9N8Vo-q.js";import"./navigation-right-arrow-fl9ibqyt.js";import"./useCurrentTheme-B4bYUvCO.js";import"./index-DD7xwy8l.js";import"./InvisibleMessage-C_y6XL_X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbHzpQG_.js";import"./index-DuuZQSer.js";import"./query-CzSBusdE.js";import"./overflow-B47ZnBWm.js";import"./index-BolJ0fz1.js";import"./TableSelectionBase-Q6zx4eAM.js";import"./index-BxtwwsD_.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
