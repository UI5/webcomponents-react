import{j as e}from"./iframe-gbBUxptC.js";import{useMDXComponents as i}from"./index-BaGM4qgt.js";import{I as a,F as m}from"./CommandsAndQueries-BmjJVETk.js";import{M as s,C as p}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import{C as l}from"./ControlsWithNote-fzSXxYPC.js";import"./copy-CmUJgJe8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BZWTu7v3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./index-DTWmKJf_.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be0U_ft-.js";import"./delete-CHhVsLyE.js";import"./settings-CRXB_GUB.js";import"./NoData-BEbrRJin.js";import"./IllustratedMessage-DPIq6GRo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DYND8aIN.js";import"./index-BUjtWPUe.js";import"./index-BdMYduaB.js";import"./slim-arrow-down-PxErebVm.js";import"./Input-DpRW8R60.js";import"./ResponsivePopoverCommon.css-CB1aGVFH.js";import"./ValueStateMessage.css-0cpHNy9C.js";import"./Suggestions.css-CH_OcyZq.js";import"./ListBoxItemGroupTemplate-ZlrFvfdZ.js";import"./ComboBoxItemGroup-CbX9SgdN.js";import"./ListItemBaseTemplate-dFMho5BM.js";import"./Token-Dbj0dySX.js";import"./ScrollEnablement-Bwz9Nt66.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwkyZiZH.js";import"./ToggleButton-xGavKy1U.js";import"./SuggestionItem-BhYYhTT2.js";import"./index-DV9Zxj4n.js";import"./Option-RAQpRMCb.js";import"./index-_6AuRaIf.js";import"./SegmentedButton-5Ar7ByFu.js";import"./index-CjC8hPeS.js";import"./Select-D_YlJdGW.js";import"./InvisibleMessage-1DPtlwXM.js";import"./slim-arrow-down-DtVtSqjI.js";import"./index-EULlufCD.js";import"./index-VaOwe_sd.js";import"./index-C9agJ7zC.js";import"./index-CT_MWQmw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuWpi9Yb.js";import"./group-2-DjzUyU8Y.js";import"./sort-descending-DrynzVZQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbnIJMNo.js";import"./utils-DQjxHGDo.js";import"./index-8tidi2SL.js";import"./index-BkJL-s5e.js";import"./index-BKNwKDSV.js";import"./navigation-down-arrow-C8MDIXaq.js";import"./navigation-right-arrow-BL-KUoKn.js";import"./navigation-right-arrow-CDbw-fpV.js";import"./useCurrentTheme-CuNgw21V.js";import"./index-DIjWH5C3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6wyqJl0.js";import"./paper-plane-D3CWJS4i.js";import"./index-D1kpHmeu.js";import"./less-C3KbgZVL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
