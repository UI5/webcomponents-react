import{j as e}from"./iframe-COnm-5Wq.js";import{useMDXComponents as i}from"./index-BScb0EKa.js";import{I as a,F as m}from"./CommandsAndQueries-fIm6tI_s.js";import{M as s,C as p}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import{C as l}from"./ControlsWithNote-CLwYkghc.js";import"./copy-qxwrkOPO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BPXkUY3a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./index-CEwTdt5x.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZIK-Rls1.js";import"./delete-CstNP39o.js";import"./settings-B6aW8T1K.js";import"./NoData-C_Tt_a6V.js";import"./IllustratedMessage-D5qW_4Mw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BjMAgFLJ.js";import"./index-CZs2DsiV.js";import"./index-D0dk6VOY.js";import"./slim-arrow-down-3pnIuBHq.js";import"./Input-IFtsbt_3.js";import"./ResponsivePopoverCommon.css-CcP_WrIC.js";import"./ValueStateMessage.css-BFPsrOD8.js";import"./Suggestions.css-DD-tyscS.js";import"./ListBoxItemGroupTemplate-s02oSqvp.js";import"./ComboBoxItemGroup-BRC6L9Sm.js";import"./ListItemBaseTemplate-9M8GkXzY.js";import"./Token-DosFgNlL.js";import"./ScrollEnablement-DxmmW8DX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhUgq0GU.js";import"./ToggleButton-Dgsm-QJP.js";import"./SuggestionItem-CJz2OlH9.js";import"./index-v8SH84Mn.js";import"./Option-C0Ypih71.js";import"./index-BNluZkA_.js";import"./SegmentedButton-Cl6x6Obn.js";import"./index-BpjRrguz.js";import"./Select-YsyZoFbn.js";import"./InvisibleMessage-B1Y0A4_S.js";import"./slim-arrow-down-DL9BpCuU.js";import"./index-CEB-ApWT.js";import"./index-D25d4E5j.js";import"./index-BBBvNHMK.js";import"./index-DZ_u1ZQX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8SXkPNK.js";import"./group-2-CmBZ8zLm.js";import"./sort-descending-DqYeqtsl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Du1BrkM7.js";import"./utils-CotoRCsU.js";import"./index-Db5QhTIJ.js";import"./index-CDNkck04.js";import"./index-B5Rbqc3j.js";import"./navigation-down-arrow-BZPJPqDn.js";import"./navigation-right-arrow-BHQhwyzy.js";import"./navigation-right-arrow-B18OD9Dt.js";import"./useCurrentTheme-BcF7vgZS.js";import"./index-BmHYBzvc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CKV0TO4b.js";import"./paper-plane-B9f3FIfR.js";import"./index-BDppF75s.js";import"./less-DNrWl_5o.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
