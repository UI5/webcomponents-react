import{j as t}from"./iframe-CdfVheEM.js";import{useMDXComponents as a}from"./index-Bn3z_2-D.js";import{M as c,C as s}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import{C as l}from"./ControlsWithNote-ymOcXJzc.js";import{D as m}from"./DocsHeader-D-n3nLR0.js";import{F as p}from"./CommandsAndQueries-DnpuXHMh.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-KYpDy3HZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./index-BkqNBKqG.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./copy-D1qMC6Gw.js";import"./copy-CQYljM5l.js";import"./GitHub-Mark-D2-w_B2G.js";import"./TableOfContent-3FLTfRIs.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./ThemingParameters-pyhX3s39.js";import"./index-BI6OpvzA.js";import"./index-DC3a-gmy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nZrai-M2.js";import"./group-2-CNZ0ZgLY.js";import"./sort-descending-CEKP_D9I.js";import"./stopPropagation-CsBxLuUS.js";import"./index-d7HncG-i.js";import"./Input-Bdhewrt9.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./ValueStateMessage.css-CfDs1rEd.js";import"./Suggestions.css-BdX9EgDU.js";import"./utils-Cd8HpNBh.js";import"./index-DNPX4N-_.js";import"./index-DmA_99Px.js";import"./index-CDWK5O7C.js";import"./ListItemStandard-x_g1yDzG.js";import"./navigation-down-arrow-DpnQsS0V.js";import"./navigation-right-arrow-Dxz9thKC.js";import"./navigation-right-arrow-DZkMVdUz.js";import"./useCurrentTheme-Cdk1W9u5.js";import"./index-BpQg-76X.js";import"./InvisibleMessage-COMllSIK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPpwcO6G.js";import"./index-D0demdQa.js";import"./query-CzSBusdE.js";import"./overflow-MyeZtZfX.js";import"./index-1OmiX1B_.js";import"./TableSelectionBase-D6IzrnBv.js";import"./index-KQBqeoLi.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
