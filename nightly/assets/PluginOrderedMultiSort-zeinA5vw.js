import{j as e}from"./iframe-DQwRYUbX.js";import{useMDXComponents as i}from"./index-vjXmNDkF.js";import{I as a,F as m}from"./CommandsAndQueries-R5zgQe7_.js";import{M as s,C as p}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import{C as l}from"./ControlsWithNote-BGvoVuZj.js";import"./copy-f1OrbY2r.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DxmrzwBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-Brhb0SYT.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-uKpDdS3L.js";import"./delete-rnQJPOPy.js";import"./settings-BplO8nVC.js";import"./NoData-BudcZjcL.js";import"./IllustratedMessage-BDrkWOIJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DMOQHPac.js";import"./index-BkwLtZth.js";import"./index-8rYUN_F9.js";import"./slim-arrow-down-C3zmYEnY.js";import"./Input-SpzJURTk.js";import"./ResponsivePopoverCommon.css-CkBrsDgT.js";import"./ValueStateMessage.css-PgRMx7qS.js";import"./Suggestions.css-CcojFhMW.js";import"./ListBoxItemGroupTemplate-BpQl_a-R.js";import"./ComboBoxItemGroup-CteEcdR1.js";import"./ListItemBaseTemplate-DPU_YRkw.js";import"./Token-Re46_rx8.js";import"./ScrollEnablement-DpgIweVK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cgm9Qe--.js";import"./ToggleButton-BaSVpxBV.js";import"./SuggestionItem-BX6mvv5E.js";import"./index-B1FFgBKL.js";import"./Option-DvL6van7.js";import"./index-BFXuzaYf.js";import"./SegmentedButton-BhmyYIax.js";import"./index-B0KukDf_.js";import"./Select-DsMXMd52.js";import"./InvisibleMessage-BxtAo5W7.js";import"./slim-arrow-down-DBZCUMdq.js";import"./index-CDIvwhbT.js";import"./index-DerlPBZF.js";import"./index-Ct1qWrRW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wsvm96Md.js";import"./group-2-smWhv9vQ.js";import"./sort-descending-C26Eugr8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cgy9ImwA.js";import"./utils-CmLJbiVg.js";import"./index-C84cRBie.js";import"./index-C8IvOXFf.js";import"./index-BnWSur9b.js";import"./navigation-down-arrow-B5IuEH7K.js";import"./navigation-right-arrow-ClmouZCW.js";import"./navigation-right-arrow-DbNWGTXI.js";import"./useCurrentTheme-B0aKCv4_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdDfKFMR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-19H7psJ7.js";import"./paper-plane-z49PxhFi.js";import"./index-B7Ag24YK.js";import"./less-BbgNbxOE.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
