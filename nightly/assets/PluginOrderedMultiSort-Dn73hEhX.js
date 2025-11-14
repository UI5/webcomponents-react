import{j as e}from"./iframe-DytFdpZ5.js";import{useMDXComponents as i}from"./index-ClxT7adU.js";import{I as a,F as m}from"./CommandsAndQueries-LDofsUzK.js";import{M as s,C as p}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import{C as l}from"./ControlsWithNote-C2rpM6wx.js";import"./copy-HK9b5mhG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-dqn4eYUx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiOVrNXv.js";import"./delete-CwCMe2lJ.js";import"./settings-C02FaBVl.js";import"./NoData-CIyKXGIu.js";import"./IllustratedMessage-i3hYdgC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-2XRDHoHl.js";import"./index-DOVXgZrj.js";import"./index-CNbeNrTd.js";import"./slim-arrow-down-DwpoKzJW.js";import"./Input-OPlbUKfy.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./ValueStateMessage.css-NEtnmyc2.js";import"./Suggestions.css-BPTnvCTk.js";import"./ListBoxItemGroupTemplate-DcxSGtmt.js";import"./ComboBoxItemGroup-f58ZgURw.js";import"./ListItemBaseTemplate-C3JeiHkK.js";import"./Token-MZi7lvV8.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXFyw4BN.js";import"./ToggleButton-CpQHTAel.js";import"./SuggestionItem-ChyX7i02.js";import"./index-BCaEmiaT.js";import"./Option-DDqoKHKt.js";import"./index-RdLvHlSh.js";import"./SegmentedButton-B2HozEUv.js";import"./index-BjzJQlM-.js";import"./Select-D_v-B_Z3.js";import"./InvisibleMessage-D5JXdltE.js";import"./slim-arrow-down-DnRA-MRh.js";import"./index-YT8VK-Rh.js";import"./index-1y0Yb24g.js";import"./index-BXQwEVRd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DF8enc35.js";import"./group-2-BR7KJ0wq.js";import"./sort-descending-hDPKa1d_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Co3wqVTT.js";import"./utils-DRDvR6oY.js";import"./index-DgKfW966.js";import"./index-Br4jLSwx.js";import"./index-DzuzVEb4.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./navigation-right-arrow-BdEYw-wX.js";import"./navigation-right-arrow-mvPQojYT.js";import"./useCurrentTheme-Dvjx0PbE.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bva0tWVh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CZGC8T2o.js";import"./paper-plane-BkwdG78Z.js";import"./index-HanQhb0I.js";import"./less-DiFuB8zb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
