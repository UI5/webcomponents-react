import{j as e}from"./iframe-B5_Arj0w.js";import{useMDXComponents as i}from"./index-C5nExjBH.js";import{I as a,F as m}from"./CommandsAndQueries-DVJBDd6t.js";import{M as s,C as p}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import{C as l}from"./ControlsWithNote-RC0KwfIN.js";import"./copy-C_i6TFMR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B6zTvUBL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-lFnbjF6s.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BfZJKBBk.js";import"./delete-B0k5SoPa.js";import"./settings-CEZkvwiT.js";import"./NoData-TnmYPaTe.js";import"./IllustratedMessage-Pyyhq7i4.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Crtjw6Ie.js";import"./index-DL_kEw3q.js";import"./index-BJO60ncP.js";import"./slim-arrow-down-B_ZZxhZi.js";import"./Input-dtfIQ9En.js";import"./ResponsivePopoverCommon.css-BaIUyRPn.js";import"./ValueStateMessage.css-FKtIDJ6e.js";import"./Suggestions.css-CvyngWyE.js";import"./ListBoxItemGroupTemplate-DX1d3MVt.js";import"./ComboBoxItemGroup-DUNfQCSb.js";import"./ListItemBaseTemplate-DnikLjhF.js";import"./Token-CLtAw8SN.js";import"./ScrollEnablement-B0UmA8Q7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DptIuS1G.js";import"./ToggleButton-Dk6-JMzR.js";import"./SuggestionItem-BoLnIMah.js";import"./index-JVP23Nt2.js";import"./Option-jQ3brhrk.js";import"./index-bDRO2Yo2.js";import"./SegmentedButton-vIkq0NWc.js";import"./index-B3V8m3Ru.js";import"./Select-BR3ay0RO.js";import"./InvisibleMessage-sZXGuSEY.js";import"./slim-arrow-down-DW1b3FK1.js";import"./index-CisKw1tN.js";import"./index-BxnGFP9n.js";import"./index-Swjw5_n1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fQ0HnAda.js";import"./group-2-CbrtzKL6.js";import"./sort-descending-DHn8DLBR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQwoKVw1.js";import"./utils-DUxK_zar.js";import"./index-QxbrwzJE.js";import"./index-C2-WeBJA.js";import"./index-w_d8t2Pc.js";import"./navigation-down-arrow-DVKMSsJc.js";import"./navigation-right-arrow-DtDmCQPg.js";import"./navigation-right-arrow-gdBHzM4T.js";import"./useCurrentTheme-xB5_C0Ve.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oO4NGnOE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DJ1G2XQE.js";import"./paper-plane-B5hJlgX3.js";import"./index-E1h56ucZ.js";import"./less-DvXH47xF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
