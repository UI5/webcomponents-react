import{j as e}from"./iframe-D1Ed_P25.js";import{useMDXComponents as i}from"./index-BFLewEmr.js";import{I as a,F as m}from"./CommandsAndQueries-DkK8PXt_.js";import{M as s,C as p}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import{C as l}from"./ControlsWithNote-eCZFyRAL.js";import"./copy-D1Lui3xc.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DMCM_6uC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./index-RMrg5o5S.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EBNozTnx.js";import"./delete-Dk0J6CEz.js";import"./settings-D_OQdQr8.js";import"./NoData-BPkK9WTx.js";import"./IllustratedMessage-C8_Tcp5E.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-tEUMgFSt.js";import"./index-CtDslHHK.js";import"./index-CApBczn9.js";import"./slim-arrow-down-TNdCGHP4.js";import"./Input-5rI7b6hj.js";import"./ResponsivePopoverCommon.css-DU4YlHAZ.js";import"./ValueStateMessage.css-CpZa25G1.js";import"./Suggestions.css-3H0-Mr0d.js";import"./ListBoxItemGroupTemplate-CLzBP0c4.js";import"./ComboBoxItemGroup-ApNNq_Wu.js";import"./ListItemBaseTemplate-BkyyzXaB.js";import"./Token-GhjVhKgK.js";import"./ScrollEnablement-DPfv31gz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNwMXV6a.js";import"./ToggleButton-BS5T7rCY.js";import"./SuggestionItem-DoeL3bWo.js";import"./index-BNdfddNi.js";import"./Option-CyUNWJFn.js";import"./index-CldnWdDQ.js";import"./SegmentedButton-DC3FvJhw.js";import"./index-BUEI2z_e.js";import"./Select-BMILMPUT.js";import"./InvisibleMessage-p9R4CYhZ.js";import"./slim-arrow-down-BaGZSBDW.js";import"./index-bV7fjiFL.js";import"./index-D2IOf4UP.js";import"./index-Df7H6xNj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYgtls1N.js";import"./group-2-B_pp8cML.js";import"./sort-descending-CW9bvIgk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrqVegQT.js";import"./utils-DLeru89e.js";import"./index-BGXOG_IF.js";import"./index-B31uJoco.js";import"./index-gdwBT8aW.js";import"./navigation-down-arrow-DZXVk8IE.js";import"./navigation-right-arrow-C_fhDzfE.js";import"./navigation-right-arrow-Dqne7Ju2.js";import"./useCurrentTheme-BqKoaCVT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DOrMKtSR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSdrd2Bt.js";import"./paper-plane-C6yqeebk.js";import"./index-DyNYfJ6H.js";import"./less-wxSG9IpH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
