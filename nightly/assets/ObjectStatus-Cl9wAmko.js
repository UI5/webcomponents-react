import{j as t}from"./iframe-BDg7FSoj.js";import{useMDXComponents as a}from"./index-CfS6z3MT.js";import{M as c,C as s}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import{C as l}from"./ControlsWithNote-hta_rmOq.js";import{D as m}from"./DocsHeader-Br2gHYWL.js";import{F as p}from"./Footer-DcSScdvn.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./PageNotFound-Cz7A_GPz.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-C1sHS5Me.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-DKaIOimk.js";import"./index-CtXj8tW6.js";import"./Link-DweKFefr.js";import"./copy-Dwmjmk6r.js";import"./copy-LtMPx_h3.js";import"./GitHub-Mark-BXWTi3jp.js";import"./TableOfContent-LJE63-X7.js";import"./index-ClFnafIK.js";import"./index-Ca5wJMxN.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./ThemingParameters-pyhX3s39.js";import"./index-DLeoOT8k.js";import"./index-XZbO5RWz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pxS513Zf.js";import"./group-2-DQqG6IcW.js";import"./sort-descending-CoH2Moiz.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYaJ9Gcz.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./utils-Chkhn7io.js";import"./index-_v6E_SiW.js";import"./index-Do6_Z1_e.js";import"./index-CiGBzV4y.js";import"./ListItemStandard-C9BXoiP3.js";import"./navigation-down-arrow-DyYI-mnK.js";import"./navigation-right-arrow-_kG0lFZX.js";import"./navigation-right-arrow-ByngEGsa.js";import"./useCurrentTheme-CSxpKvX6.js";import"./index-B7uqwTBo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQKn5Zaa.js";import"./index-C2elmHr3.js";import"./query-CzSBusdE.js";import"./overflow-DYE-l-h9.js";import"./index-CvNTyD2Z.js";import"./TableSelectionBase-CgssYB4M.js";import"./index-D8AeP6Iz.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
`,t.jsx(p,{})]})}function Nt(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Nt as default};
