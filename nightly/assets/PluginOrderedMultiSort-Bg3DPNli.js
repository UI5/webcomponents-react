import{j as e}from"./iframe-BH4bVelf.js";import{useMDXComponents as i}from"./index-BZqT0YF1.js";import{I as a,F as m}from"./CommandsAndQueries-D9wpOiDr.js";import{M as s,C as p}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import{C as l}from"./ControlsWithNote-DQQ69lO5.js";import"./copy-Dqlw1cCi.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CU79LRwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5b86cogR.js";import"./delete-D4wiFYB9.js";import"./settings-CWwIQT_C.js";import"./NoData-BFhg-GG6.js";import"./IllustratedMessage-34DEvqfA.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BZAg4ngt.js";import"./index-BZGTGu9E.js";import"./index-BvDC2UXj.js";import"./slim-arrow-down-BYwdEN3E.js";import"./Input-B0gYbYgt.js";import"./ResponsivePopoverCommon.css-CkobxXTu.js";import"./ValueStateMessage.css-C6Kv6bre.js";import"./Suggestions.css-BLG2o1V5.js";import"./ListBoxItemGroupTemplate-prNPVmNr.js";import"./ComboBoxItemGroup-C29Z681b.js";import"./ListItemBaseTemplate-CxzuukWL.js";import"./Token-Ct7p5V6Z.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dk4MirOU.js";import"./ToggleButton-CKPPi0F4.js";import"./SuggestionItem-DTaZ3jXG.js";import"./index-B5H40sXS.js";import"./Option-D8eBTNON.js";import"./index-BqP_tsIy.js";import"./SegmentedButton-D16K0baA.js";import"./index-_nPQLI_b.js";import"./Select-5ewiLwL1.js";import"./InvisibleMessage-IGW-rAUo.js";import"./slim-arrow-down-9BYKuyUs.js";import"./index-7MRTM3HB.js";import"./index-DVGATJ5a.js";import"./index-DznWkkCi.js";import"./index-DldxGphJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXWEU5fn.js";import"./group-2-DRzez2hn.js";import"./sort-descending-C_q3rv9b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSpNMFp0.js";import"./utils-C0YjVaw1.js";import"./index-CAeOO4wN.js";import"./index-B5eeZss-.js";import"./index-CBsiXwh_.js";import"./navigation-down-arrow-_ZsRec2W.js";import"./navigation-right-arrow-49__25dM.js";import"./navigation-right-arrow-dg6jTT0c.js";import"./useCurrentTheme-DAO2rCbm.js";import"./index-BsJLWcly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsU26iOF.js";import"./paper-plane-CAa_-spX.js";import"./index-CROEbkYy.js";import"./less-B3ilKLXN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
