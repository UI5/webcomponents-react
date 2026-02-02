import{j as t}from"./iframe-DxaU3ukP.js";import{useMDXComponents as a}from"./index-Bu64E7xz.js";import{M as c,C as s}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import{C as l}from"./ControlsWithNote-DwYfY6pK.js";import{D as m}from"./DocsHeader-BYBoG-Cx.js";import{F as p}from"./CommandsAndQueries-CWzmGACf.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-tqf9ap1T.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./index-DBN874s0.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./copy-gx1Q1rO4.js";import"./copy-iAtgzS7e.js";import"./GitHub-Mark-DowLaeaz.js";import"./TableOfContent-DRQ4kDdO.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./ThemingParameters-pyhX3s39.js";import"./index-rAT2WEiI.js";import"./index-C3UD1Hqj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DB4Xqkcu.js";import"./group-2-JYhBavgn.js";import"./sort-descending-BWym6GfS.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hJi7DpYf.js";import"./Input-D_YVohIg.js";import"./ResponsivePopoverCommon.css-DNS4oV3Y.js";import"./ValueStateMessage.css-DpHhcDZf.js";import"./Suggestions.css-CaY-hH4G.js";import"./utils-rEWueUxT.js";import"./index-DPFDbPpv.js";import"./index-C4sy8ZPw.js";import"./index-0BAFT4SC.js";import"./ListItemStandard-FvkwmzYL.js";import"./navigation-down-arrow-Bb0q6ooJ.js";import"./navigation-right-arrow-agwdLGP0.js";import"./navigation-right-arrow-DxjP7dnY.js";import"./useCurrentTheme-bdMlbWTW.js";import"./index-Dd-sbQ45.js";import"./InvisibleMessage-Vimf6Y5N.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TKZ3-owy.js";import"./index-B8P7Tc14.js";import"./query-CzSBusdE.js";import"./overflow-C5yvdegD.js";import"./index-CvU9zEo-.js";import"./TableSelectionBase-BB85zbUu.js";import"./index-B8fGZl2t.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
