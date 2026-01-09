import{j as t}from"./iframe-DvHwewhR.js";import{useMDXComponents as a}from"./index-CLaogw5S.js";import{M as c,C as s}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import{C as l}from"./ControlsWithNote-B6M_GQJb.js";import{D as m}from"./DocsHeader-BH0B3pCH.js";import{F as p}from"./CommandsAndQueries-BNdncSiU.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-BFqtW2r8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./index-Dxi3lBUy.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./copy-CLgzmG1F.js";import"./copy-CCEG4Gow.js";import"./GitHub-Mark-BD4VRPkp.js";import"./TableOfContent-CqehIVhz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./ThemingParameters-pyhX3s39.js";import"./index-Cl1O2yFh.js";import"./index-BtAgcYwE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bp1zhNyd.js";import"./group-2-CzlS2QWU.js";import"./sort-descending-B3IM8fpN.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_C7dAq5.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./utils-D_wMeGo0.js";import"./index-CwfhL7TS.js";import"./index-DTHM9nkb.js";import"./index-uElYT7C3.js";import"./ListItemStandard-BRn_nQZN.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";import"./navigation-right-arrow-CCD3zipp.js";import"./useCurrentTheme-B8H1HpgT.js";import"./index-BOCVDdbZ.js";import"./InvisibleMessage-zD0IVsFW.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C4H1iq0n.js";import"./index-CiGcfxnJ.js";import"./query-CzSBusdE.js";import"./overflow-jcKIbPqM.js";import"./index-DrXnvVwa.js";import"./TableSelectionBase-CKm1X3Ai.js";import"./index-pKYM4Amv.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
