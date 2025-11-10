import{j as e}from"./iframe-hWo-wO7u.js";import{useMDXComponents as i}from"./index-B2u3atBN.js";import{I as a,F as m}from"./CommandsAndQueries-BtJ9G9OP.js";import{M as s,C as p}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import{C as l}from"./ControlsWithNote-BBUwaR31.js";import"./copy-BPT19kup.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C9Heuwuk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./index-qccq9h_o.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DA2kYysS.js";import"./delete-1cfM8Qxo.js";import"./settings-zuK18Bw0.js";import"./NoData-CkVGmtjH.js";import"./IllustratedMessage-D6ysM4C0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DA-MEoRX.js";import"./index-DmgQLslz.js";import"./index-eQIHm9QM.js";import"./slim-arrow-down-Bh_ekG-x.js";import"./Input-Bj15_VWu.js";import"./ResponsivePopoverCommon.css-CUXmBlOY.js";import"./ValueStateMessage.css-BGhJCY9Z.js";import"./Suggestions.css-lQlw-tAk.js";import"./ListBoxItemGroupTemplate-o-zwMfnD.js";import"./ComboBoxItemGroup-CftSPkvF.js";import"./ListItemBaseTemplate-g1dZt2_w.js";import"./Token-CcowhBYO.js";import"./ScrollEnablement-BHTzoQIK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRaWu8L3.js";import"./ToggleButton-B_IR3Cp0.js";import"./SuggestionItem-DSX2e-Mq.js";import"./index-BwiirZMa.js";import"./Option-DIbmc_PM.js";import"./index-BrYBpQqL.js";import"./SegmentedButton-B4_2if5t.js";import"./index-C9eBbgwm.js";import"./Select-DXUVZ4YD.js";import"./InvisibleMessage-D08-nSQa.js";import"./slim-arrow-down-DxxkkDHb.js";import"./index-DCZ4Ax5f.js";import"./index-Dy1oOrBB.js";import"./index-DiMvuXX8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-izyJHX72.js";import"./group-2-D53K53MV.js";import"./sort-descending-D6Z78OXl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dcm44O05.js";import"./utils-CjxRVdkU.js";import"./index-CfJPtgca.js";import"./index-DG-Dq2q4.js";import"./index-CYQ2RrlX.js";import"./navigation-down-arrow-BOFNhi8Y.js";import"./navigation-right-arrow-Bi5JkXbY.js";import"./navigation-right-arrow-DR5DT_Mp.js";import"./useCurrentTheme-DA70P9tJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdwri-eL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAQms381.js";import"./paper-plane-BCqoBBVx.js";import"./index-DDSY4mam.js";import"./less-DnIOHHkm.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
