import{j as e}from"./iframe-C2wpKNYo.js";import{useMDXComponents as i}from"./index-C3bwhSaM.js";import{I as a,F as m}from"./CommandsAndQueries-BUx2QFuH.js";import{M as s,C as p}from"./blocks-CsqgEIu9.js";import"./Tag-BJVPlcpU.js";import"./index-6FDQ4ka_.js";import{C as l}from"./ControlsWithNote-CzvwMPMy.js";import"./copy-Mn7zeVlB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DhRYLq5b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./index-Cg3QTQNO.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DU-GfZPG.js";import"./delete-CJr3s0ad.js";import"./settings-Bj5Fdd9w.js";import"./NoData-DuKAvQZu.js";import"./IllustratedMessage-CYId384S.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CR0NaFlQ.js";import"./index-Djhs7oku.js";import"./index-2JhMnC8v.js";import"./slim-arrow-down-pc_gg9WS.js";import"./Input-Bm2Fv_Nn.js";import"./ResponsivePopoverCommon.css-DTvFG0Ht.js";import"./ValueStateMessage.css-BT11hGhW.js";import"./Suggestions.css-Ce7PGErr.js";import"./ListBoxItemGroupTemplate-Cv3EutgH.js";import"./ComboBoxItemGroup-DfSWs9AK.js";import"./ListItemBaseTemplate-rMtU7HPI.js";import"./Token-CzVmXjd4.js";import"./ScrollEnablement-C0IR7RhZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bw7MGSnH.js";import"./ToggleButton-Dzc9YnfK.js";import"./SuggestionItem-B1XccRHq.js";import"./index-IHtKMLsN.js";import"./Option-BIfQIQmg.js";import"./index-OLZkp24Z.js";import"./SegmentedButton-CTcZgze8.js";import"./index-BR5kr3iz.js";import"./Select-CEGqHj9u.js";import"./InvisibleMessage-CTodWVwF.js";import"./slim-arrow-down-Ay5kkJLT.js";import"./index-CHmVwapl.js";import"./index-CREgWYGw.js";import"./index-BUSyf8XI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NfY7u5GH.js";import"./group-2-CE7qb9Mt.js";import"./sort-descending-DivdGMhf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AKXoUFrm.js";import"./utils-8qtwE_MS.js";import"./index-2j3noFBG.js";import"./index-DJ6XZsCK.js";import"./index-CU-PdOlU.js";import"./navigation-down-arrow-BXxVj34O.js";import"./navigation-right-arrow-DlOFQv4h.js";import"./navigation-right-arrow-BnNhZIG8.js";import"./useCurrentTheme-Bs3WCC2j.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfjOYTOF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-awnJ-YFR.js";import"./paper-plane-CfXYFuln.js";import"./index-Dg27D0NM.js";import"./less-BRwpA6_1.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
