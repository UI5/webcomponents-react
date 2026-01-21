import{j as e}from"./iframe-f3iLPpTx.js";import{useMDXComponents as i}from"./index-Cg-5LGOy.js";import{I as a,F as m}from"./CommandsAndQueries-ANshK3xd.js";import{M as s,C as p}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import{C as l}from"./ControlsWithNote-Bu0kyXyv.js";import"./copy-BPmTOQZZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CeGiqy_9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./index-C81LpEbs.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9bzh1Z6.js";import"./delete-3k9ewCfi.js";import"./settings-C4qTrATZ.js";import"./NoData-DTrdJtGp.js";import"./IllustratedMessage-BSTzW0Sn.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BXAl_aeC.js";import"./index-D_kEJBb-.js";import"./index-Cyem6Ef9.js";import"./slim-arrow-down-BhjskzRk.js";import"./Input-BA2q8K-i.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./ValueStateMessage.css-seFb1qKi.js";import"./Suggestions.css-C81am98X.js";import"./ListBoxItemGroupTemplate-CI1tVLOZ.js";import"./ComboBoxItemGroup-BCkjIVdO.js";import"./ListItemBaseTemplate-BBr_9wKC.js";import"./Token-BzdV5wLi.js";import"./ScrollEnablement-BgAU8fOn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Czpv5A2n.js";import"./ToggleButton-CPD4HgrF.js";import"./SuggestionItem-ClSr8F10.js";import"./index-T7MLs8hf.js";import"./Option-CWKJzO5N.js";import"./index-_dyjDy1m.js";import"./SegmentedButton-BYRHNZSD.js";import"./index-8OcAdlHO.js";import"./Select-BnSQqeni.js";import"./InvisibleMessage-C0oVP_sH.js";import"./slim-arrow-down-6WKrBuBW.js";import"./index-cjK9zly0.js";import"./index-DXgYFRlO.js";import"./index-CRy0gMjM.js";import"./index-x-l5-c_J.js";import"./IconDesign-DXd8PPVF.js";import"./filter-XptaN1lH.js";import"./group-2-CObAZZZr.js";import"./sort-descending-D6cr4_48.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CFnD-yF-.js";import"./utils-BubI_VCY.js";import"./index-BUKlkCYI.js";import"./index-nGDSIC6S.js";import"./index-BRFWofe_.js";import"./navigation-down-arrow-HRklLRvN.js";import"./navigation-right-arrow-DnSqIm0M.js";import"./navigation-right-arrow-BU9xMcPj.js";import"./useCurrentTheme-CEll4Kb2.js";import"./index-u-NkBXly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzIFx5-R.js";import"./paper-plane-ByFPrxB1.js";import"./index-DOXdSdDM.js";import"./less-Dz3GjE58.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
