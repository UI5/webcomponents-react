import{j as e}from"./iframe-5IjhfTrO.js";import{useMDXComponents as i}from"./index-DX6MuGUF.js";import{I as a,F as m}from"./CommandsAndQueries-Cp1HBFGN.js";import{M as s,C as p}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import{C as l}from"./ControlsWithNote-Cm-Ncf6S.js";import"./copy-BcUsFLyb.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CNWtG6P5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-DXwYC06A.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GE08y6_n.js";import"./delete-TDZixyFf.js";import"./settings-Bh7T3Aa4.js";import"./NoData-Bt-daU8p.js";import"./IllustratedMessage-Si1uDDrI.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-bdIH5t39.js";import"./index-o-VfODOS.js";import"./index-NaVgwK4T.js";import"./slim-arrow-down-BxfuL-xs.js";import"./Input-BjA9iDS-.js";import"./ResponsivePopoverCommon.css-EJi8Nc2N.js";import"./ValueStateMessage.css-DkQrLy80.js";import"./Suggestions.css-N3zEGQC3.js";import"./ListBoxItemGroupTemplate-Bgeu1wE-.js";import"./ComboBoxItemGroup-CVa1qtfW.js";import"./ListItemBaseTemplate-DhbOBe-8.js";import"./Token-BHuXs6MO.js";import"./ScrollEnablement-CWoktJAU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bqb-MqKL.js";import"./ToggleButton-CYehuNUj.js";import"./SuggestionItem-CF5WoXJt.js";import"./index-BxhVAhSv.js";import"./Option-owItQ9u6.js";import"./index-B_MsBPhq.js";import"./SegmentedButton-CMfQs4cN.js";import"./index-Dp3YThp5.js";import"./Select-CquxZ4Yo.js";import"./InvisibleMessage-B4iVYYKg.js";import"./slim-arrow-down-DyuT9wxt.js";import"./index-DgMIVDzd.js";import"./index-0aeZ3IYW.js";import"./index-CMqt-nBZ.js";import"./index--WdbnVMu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZqboP92g.js";import"./group-2-CwAhtfHQ.js";import"./sort-descending-Z5P70oJL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1_zmeRhs.js";import"./utils-BwxVe_F4.js";import"./index-CpQToSwa.js";import"./index-CHozFaoZ.js";import"./index-B4R63qeo.js";import"./navigation-down-arrow-uPQicAfY.js";import"./navigation-right-arrow-DcPCFKfd.js";import"./navigation-right-arrow-C41To8WY.js";import"./useCurrentTheme-DOrA3ijw.js";import"./index-DRFZPeLn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zhcrMbzG.js";import"./paper-plane-BsliF2P0.js";import"./index-BVmETlAW.js";import"./less-CYPzWn_X.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
