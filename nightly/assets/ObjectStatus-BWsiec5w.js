import{j as t}from"./iframe-CSs3GcCz.js";import{useMDXComponents as a}from"./index-1VYUEsB4.js";import{M as c,C as s}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import{C as l}from"./ControlsWithNote-Cd98Jtki.js";import{D as m}from"./DocsHeader-uVl9v1iI.js";import{F as p}from"./CommandsAndQueries-Dzepq0rT.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-YRibiiiT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./index-IS643aT1.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./copy-QZM6pPxE.js";import"./copy-A0b4Giju.js";import"./GitHub-Mark-C9p6OhuO.js";import"./TableOfContent-D_6sZ66R.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./ThemingParameters-pyhX3s39.js";import"./index-BIWIZz99.js";import"./index-D21M5qi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CldNOsRY.js";import"./group-2-BlKb3z6k.js";import"./sort-descending-D9zZt52A.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6Gtit63.js";import"./Input-DdGahQ8p.js";import"./ResponsivePopoverCommon.css-B6aP4EWz.js";import"./ValueStateMessage.css-rStVzh3o.js";import"./Suggestions.css-DVjfbfM-.js";import"./utils-D-NrFFbe.js";import"./index-BiChlU0_.js";import"./index-DjZAsHPB.js";import"./index-GjEC5C4h.js";import"./ListItemStandard-0uLaXWUR.js";import"./navigation-down-arrow-B5OEHJzH.js";import"./navigation-right-arrow-COj-HSTI.js";import"./navigation-right-arrow-DuUHDn6z.js";import"./useCurrentTheme-CbFE_1cS.js";import"./index-BsKxNe-0.js";import"./InvisibleMessage-BcP-U2lm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5q-dcwP.js";import"./index-D4MOrDXc.js";import"./query-CzSBusdE.js";import"./overflow-DjrIlQae.js";import"./index-WGCmUYx2.js";import"./TableSelectionBase-CztU-RMn.js";import"./index-CWMZCKYl.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
