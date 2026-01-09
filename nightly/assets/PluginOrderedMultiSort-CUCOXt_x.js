import{j as e}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as i}from"./index-evhaF9WH.js";import{I as a,F as m}from"./CommandsAndQueries-DyaEp24s.js";import{M as s,C as p}from"./blocks-BuJgXu1r.js";import"./Tag-BQohtkMw.js";import"./index-C0N3ti0U.js";import{C as l}from"./ControlsWithNote-DR3nmE-h.js";import"./copy-CZb07l2e.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CNSO2-Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./index-1zaXUkR9.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHLyNJm_.js";import"./delete-Pbj3X59-.js";import"./settings-DaBUhecZ.js";import"./NoData-8f9QU6Au.js";import"./IllustratedMessage-DEbMLr2Z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DPPo2QH7.js";import"./index-lGIOGYW2.js";import"./index-dhnNfvqN.js";import"./slim-arrow-down-DRXwOi-S.js";import"./Input-Cdi1ONYj.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Suggestions.css-BnQBqKbG.js";import"./ListBoxItemGroupTemplate-BTBetl9N.js";import"./ComboBoxItemGroup-CF3RQPEz.js";import"./ListItemBaseTemplate-FGeazb6H.js";import"./Token-D3W6Bsly.js";import"./ScrollEnablement-C96PrwAf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQbeSHYY.js";import"./ToggleButton-BFkiT8DZ.js";import"./SuggestionItem-D8JUaK4y.js";import"./index-CsZ3MJDk.js";import"./Option-BERpoTxk.js";import"./index-CPNpM3Gi.js";import"./SegmentedButton-DDXJEdiY.js";import"./index-D88oWc7K.js";import"./Select-CcNl591L.js";import"./InvisibleMessage-thzwE5Eq.js";import"./slim-arrow-down-ZsLuCJkq.js";import"./index-D70zfhH1.js";import"./index-DMCKlwNV.js";import"./index-BzN4d7ds.js";import"./index-DZthy7eH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJexQfFb.js";import"./group-2-D4WjFEWb.js";import"./sort-descending-BRWVpkHW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdzFZllT.js";import"./utils-CrX1fJt7.js";import"./index-BhnnBVTO.js";import"./index-dB9wQJYj.js";import"./index-BxkOh5-O.js";import"./navigation-down-arrow-LQ6wC2gk.js";import"./navigation-right-arrow-Bc2pAact.js";import"./navigation-right-arrow-BKMtPJeS.js";import"./useCurrentTheme-C8QQj4mW.js";import"./index-C8SRQwYw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-V7dBuQmF.js";import"./paper-plane-B_bfz4Lw.js";import"./index-D-Sc7kHv.js";import"./less-oIZYDRMd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
