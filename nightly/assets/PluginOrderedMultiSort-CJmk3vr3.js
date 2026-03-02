import{j as e}from"./iframe-CajBfwIr.js";import{useMDXComponents as i}from"./index-C7bmLKAS.js";import{I as a,F as m}from"./CommandsAndQueries-BsF9_wDx.js";import{M as s,C as p}from"./blocks-DZo8LX6f.js";import"./Tag-BvqWkn4s.js";import"./index-EXDQ2t-0.js";import{C as l}from"./ControlsWithNote-kIW7NW5u.js";import"./copy-n5aHnb96.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BX-Qb4Eb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./index-Bn2EsG13.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYQNfvQa.js";import"./delete-CCuVV0JW.js";import"./settings-VA6JmB84.js";import"./NoData-iT2o0x8b.js";import"./IllustratedMessage-CiDyguLB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C5LtRG52.js";import"./index-DC_WMaBG.js";import"./index-BPddPJMw.js";import"./slim-arrow-down-BshNdOqW.js";import"./Input-dSa06VPG.js";import"./ResponsivePopoverCommon.css-C3cJZdrp.js";import"./ValueStateMessage.css-CGvtMuKA.js";import"./Suggestions.css-BFVZkioL.js";import"./ListBoxItemGroupTemplate-DTiKs43B.js";import"./ComboBoxItemGroup-yVlezM04.js";import"./ListItemBaseTemplate-CBK-GT0A.js";import"./Token-Bm3GR7k3.js";import"./ScrollEnablement-DdM6D9rL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-imw798Pk.js";import"./ToggleButton-CxavjS9K.js";import"./SuggestionItem-C7YoTGLy.js";import"./index-OCdqEgk9.js";import"./Option-DahgSlps.js";import"./index-rD753xq2.js";import"./SegmentedButton-BVRS-zKD.js";import"./index-B2fDwDbY.js";import"./Select-BZ8C6uzA.js";import"./InvisibleMessage-DpVgh8EW.js";import"./slim-arrow-down-mNMzuL2_.js";import"./index-D2eo9c2Y.js";import"./index-BZf8tZXo.js";import"./index-DJJlm084.js";import"./index-CAXhGnio.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZU39gPI.js";import"./group-2-DjP3uRq3.js";import"./sort-descending-Blrb7yMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DL5AZoqB.js";import"./utils-ycTXtqIu.js";import"./index-Cp7syuca.js";import"./index-BQlFLyzK.js";import"./index-DJeNmhDh.js";import"./navigation-down-arrow-D2HQUBIe.js";import"./navigation-right-arrow-BCdzHFKq.js";import"./navigation-right-arrow-6Ga1AUU-.js";import"./useCurrentTheme-c1_0W5Iy.js";import"./index-C-m1BXWQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJg_JlUg.js";import"./paper-plane-D3vk--cn.js";import"./index-Bgp5-0LC.js";import"./less-XlNrQzlF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
