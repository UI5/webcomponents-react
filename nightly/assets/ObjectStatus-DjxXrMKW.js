import{j as t}from"./iframe-DMsBkhV6.js";import{useMDXComponents as a}from"./index-DRmP5vAG.js";import{M as c,C as s}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import{C as l}from"./ControlsWithNote-F7SPLu7s.js";import{D as m}from"./DocsHeader-3lHDey1z.js";import{F as p}from"./Footer-BOw4Z5DY.js";import"./CommandsAndQueries-DpukJ1Hp.js";import"./PageNotFound-DjLaegFZ.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-BlXq3kFe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./index-CsdED7a8.js";import"./index-DsnyfM-a.js";import"./Link-CSEVwGcN.js";import"./copy-DzHuePNf.js";import"./copy-CD95AZM0.js";import"./GitHub-Mark-CtaoVdU6.js";import"./TableOfContent-YryckjTo.js";import"./index-BzYJTbyT.js";import"./index-D8IUoaKA.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./ThemingParameters-BvhwmbYD.js";import"./index-BNhRrdmr.js";import"./index-BYW_tyTv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CM4efI86.js";import"./group-2-BPP57I-Z.js";import"./sort-descending-DmVlxwNX.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAZhX22Y.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./utils-DLVR_ZqH.js";import"./index-BhKQSOJa.js";import"./index-DLPYNRsQ.js";import"./index-BVEb-vDJ.js";import"./ListItemStandard-DrpX4RCW.js";import"./navigation-down-arrow-B5mwPXMM.js";import"./navigation-right-arrow-DD2gNJ11.js";import"./navigation-right-arrow-X6oG7L7N.js";import"./useCurrentTheme-BVLXkGO3.js";import"./index-I52ieGsq.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_v8Eyxn.js";import"./index-BMO9XQZA.js";import"./query-CzSBusdE.js";import"./overflow-tEp_b04-.js";import"./index-rEepCX5O.js";import"./TableSelectionBase-BNjrSqn1.js";import"./index-DLUlNmzM.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
