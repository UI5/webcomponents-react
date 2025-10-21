import{j as e}from"./iframe-pfqRYewB.js";import{useMDXComponents as i}from"./index-DxYcUkXM.js";import{I as a,F as m}from"./CommandsAndQueries-CBK4GytM.js";import{M as s,C as p}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import{C as l}from"./ControlsWithNote-1jH7cerp.js";import"./copy-0Cu3Y4If.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DVQ3i1IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCldNniw.js";import"./delete-HmTQ_vFj.js";import"./settings-mukY2-9u.js";import"./NoData-DDeHK4Wf.js";import"./IllustratedMessage-KYMTpTyO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-ChEYzt-h.js";import"./index-CqmZ5mGT.js";import"./index-pwjz_r8O.js";import"./slim-arrow-down-C7FQVzqZ.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./ListBoxItemGroupTemplate-6BxZnxDU.js";import"./ComboBoxItemGroup-BsUPI3Ww.js";import"./ListItemBaseTemplate-HUrGMPNt.js";import"./Token-B8pfMnds.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cohus5KX.js";import"./ToggleButton-ZQLSnveS.js";import"./SuggestionItem-Dmy_a1VU.js";import"./index-CwRuKaLk.js";import"./Option-CFDOWY6L.js";import"./index-DCK0KPlT.js";import"./SegmentedButton-B6i3WymD.js";import"./index-DevUfoIh.js";import"./Select-m-b0pWIF.js";import"./InvisibleMessage-DwveyP79.js";import"./slim-arrow-down-bCF3a_Rt.js";import"./index-Dgi4QmO9.js";import"./index-BQzry0n4.js";import"./index-DPBow1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-15Rm-0v2.js";import"./group-2-B1-jLB8-.js";import"./sort-descending-uWzFdjhI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWkHdUbT.js";import"./utils-DDcIz5H6.js";import"./index-D2MBzVUF.js";import"./index-8gw3xkKH.js";import"./index-DwWEOzU8.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./useCurrentTheme-VDt91aLT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cp87tOSX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTunfDpQ.js";import"./paper-plane-s_bnmj1H.js";import"./index-BUgZbWmJ.js";import"./less-Db2oPJEr.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
