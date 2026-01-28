import{j as e}from"./iframe-DjjZnZd-.js";import{useMDXComponents as i}from"./index-CHlimz1C.js";import{I as a,F as m}from"./CommandsAndQueries-WOCJDSHC.js";import{M as s,C as p}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import{C as l}from"./ControlsWithNote-B7_TuRmB.js";import"./copy-ZK04gjjU.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bifb3c2A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vqAtxyOw.js";import"./delete-Bebt7tCf.js";import"./settings-uRQQ-qnc.js";import"./NoData-DF1OdlTc.js";import"./IllustratedMessage-D_G1HSBE.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BmB2bMcc.js";import"./index-CM7JCb8T.js";import"./index-DvsJxwXk.js";import"./slim-arrow-down-CxXp2snF.js";import"./Input-B-umR_e1.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Suggestions.css-Ci8_31Vi.js";import"./ListBoxItemGroupTemplate-GVKfLp8U.js";import"./ComboBoxItemGroup-CQl8BqG8.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./Token-CKE3PZz5.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRQF6RVv.js";import"./ToggleButton-B90-JE9y.js";import"./SuggestionItem-DW58jthD.js";import"./index-DmUR5SWR.js";import"./Option-DqRKlcDR.js";import"./index-CH77s4oW.js";import"./SegmentedButton-ChMyKVb2.js";import"./index-BkRDr5FS.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./index-Cl5F4XUs.js";import"./index-CbGzdtcY.js";import"./index-BRl60Xfr.js";import"./index-Beu0nm3Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMkv1rya.js";import"./group-2-CoGriti5.js";import"./sort-descending-DD-b124P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8m0ILQH8.js";import"./utils-BXT1KgTI.js";import"./index-Dra2atL0.js";import"./index-BZLP_aSQ.js";import"./index-ntFKxsdS.js";import"./navigation-down-arrow-augm2Glo.js";import"./navigation-right-arrow-CJ9-VHOj.js";import"./navigation-right-arrow-CXx-Foq7.js";import"./useCurrentTheme-BtKqULF1.js";import"./index-C9h2pwj1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sDVY4Y6h.js";import"./paper-plane-BKN_YByQ.js";import"./index-B7Qlr8h8.js";import"./less-wFiAvfcX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
