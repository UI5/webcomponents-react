import{j as e}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as i}from"./index-Du5TrOvB.js";import{I as a,F as m}from"./CommandsAndQueries-DJ070Qmg.js";import{M as s,C as p}from"./blocks-9I7fLsXi.js";import"./Tag-CUzUjb7h.js";import"./index-CMhb9NSF.js";import{C as l}from"./ControlsWithNote-crRgwoV8.js";import"./copy-Cwbx5yBu.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-sLLLanu-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";import"./index-Bd_n1-5X.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NdNm120N.js";import"./delete-Bh6rvYu4.js";import"./settings-BoxUkedg.js";import"./NoData-Itj-m_z4.js";import"./IllustratedMessage-BahKmhi1.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DtzRcyJr.js";import"./index-B1pI2LnF.js";import"./index-DXAZ5IQ3.js";import"./slim-arrow-down-Db3k0_l-.js";import"./Input-CwGD6kGS.js";import"./ResponsivePopoverCommon.css-CaIT07ea.js";import"./ValueStateMessage.css-ClqfbOtD.js";import"./Suggestions.css-iZx1rci3.js";import"./ListBoxItemGroupTemplate-DqtZVPPy.js";import"./ComboBoxItemGroup-DcXy2ln2.js";import"./ListItemBaseTemplate-Cqyd2hFY.js";import"./Token-j5u3Id6h.js";import"./ScrollEnablement-B4xK1oWi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHAirMKT.js";import"./ToggleButton-C8du3p8o.js";import"./SuggestionItem-DDXTi4_0.js";import"./index-CuctUWCD.js";import"./Option-Bkd_KNAu.js";import"./index-b5AWgmO0.js";import"./SegmentedButton-opFUZ7Oe.js";import"./index-BwGg5_P1.js";import"./Select-C8rdNxEb.js";import"./InvisibleMessage-B1fTihab.js";import"./slim-arrow-down-Cwp2cLQO.js";import"./index-NJhcgYyi.js";import"./index-C2a0yj7L.js";import"./index-BAn4ZmzK.js";import"./index--SxJFkMv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4ZmdR7v.js";import"./group-2-CCWcXYfi.js";import"./sort-descending-0Nd9Y8Ip.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D3ZD76ok.js";import"./utils-CVEijiie.js";import"./index-DjJtZJzk.js";import"./index-Bau-szwl.js";import"./index-KEvUu7xL.js";import"./navigation-down-arrow-w1mb7uJq.js";import"./navigation-right-arrow-DqPNc_S_.js";import"./navigation-right-arrow-CghgLFo5.js";import"./useCurrentTheme-Ded0Sk7M.js";import"./index-8yXidvv8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6qg-InN.js";import"./paper-plane-Bi4wahXw.js";import"./index-BCS14kV5.js";import"./less-Dz6W6Mq4.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
