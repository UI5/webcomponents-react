import{j as e}from"./iframe-DUkvwiCH.js";import{useMDXComponents as i}from"./index-CmOOmEq_.js";import{I as m,F as a}from"./CommandsAndQueries-PDY51fAI.js";import{M as s,C as p}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import{C as l}from"./ControlsWithNote-h_Zfec4u.js";import"./copy-B0dtT-T1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-7JKM5En5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./index-DhtGVRhj.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gqR0P-Wx.js";import"./delete-BdCzKGxL.js";import"./settings-2PbqmORg.js";import"./NoData-Ca0oG_JL.js";import"./IllustratedMessage-DqN1c1Zq.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B0xFtsqI.js";import"./index-CXzHH1Z3.js";import"./slim-arrow-down-xGo2jOIY.js";import"./Input-DQ5p6nKI.js";import"./ResponsivePopoverCommon.css-BoQVIvNi.js";import"./ValueStateMessage.css-Bsq6Il4y.js";import"./Suggestions.css-i3s5CWMS.js";import"./ListBoxItemGroupTemplate-DP2vsF3T.js";import"./ComboBoxItemGroup-Bt2s2r-m.js";import"./ListItemBaseTemplate-Nc_kgJrp.js";import"./Token-B0XPP79K.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYtQ6rBD.js";import"./ToggleButton-CFoIabfN.js";import"./SuggestionItem-CKzR1LPx.js";import"./index-CdyYI52I.js";import"./Option-CDGlp-cu.js";import"./index-DoRSQu9o.js";import"./SegmentedButton-D2lnd9RP.js";import"./index-MgIz5-1O.js";import"./Select-C5SGLZaQ.js";import"./InvisibleMessage-CxWJNd19.js";import"./slim-arrow-down-CYI811l3.js";import"./useIsRTL-CJjpUbvq.js";import"./index-CfgMfPc4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DxjtuVZF.js";import"./group-2-IpJOfuC0.js";import"./sort-descending-ci6Trp1X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmG0lqi8.js";import"./utils-BhHqIEZ6.js";import"./index-DOXiwBZC.js";import"./index-B5JDV88H.js";import"./index-veuLTP7t.js";import"./navigation-down-arrow-CI6f4P1V.js";import"./navigation-right-arrow-ChwAEYXe.js";import"./navigation-right-arrow-SID4lvJa.js";import"./useCurrentTheme-k-t9Vjzd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-RYQDkhJm.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CB6ae7Yb.js";import"./index-Csbl6rAf.js";import"./less-GaIuzsTP.js";import"./index-C1SgQ07A.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(a,{})]})}function Ee(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ee as default};
