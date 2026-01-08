import{j as e}from"./iframe-DKMkKoYy.js";import{useMDXComponents as i}from"./index-DwgZfgb7.js";import{I as a,F as m}from"./CommandsAndQueries-BeeR2K5X.js";import{M as s,C as p}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import{C as l}from"./ControlsWithNote-BURMcDeb.js";import"./copy-CVTfErei.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DTS4v1Wt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dhra6kfr.js";import"./delete-DUix6sNt.js";import"./settings-C5OEoL5X.js";import"./NoData-Cri307Dq.js";import"./IllustratedMessage-pa4ChjKu.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BkjD5jXB.js";import"./index-CGWtwsBT.js";import"./index-BHNOKsS3.js";import"./slim-arrow-down-DFO10dQK.js";import"./Input-Bywnd_wZ.js";import"./ResponsivePopoverCommon.css-Zw-71pun.js";import"./ValueStateMessage.css-BFEz-K6y.js";import"./Suggestions.css-BCRtc5sQ.js";import"./ListBoxItemGroupTemplate-ByysvU84.js";import"./ComboBoxItemGroup-rRFO05Df.js";import"./ListItemBaseTemplate-BwdOKIzC.js";import"./Token-DUFe1ufu.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIizhTTb.js";import"./ToggleButton-CpmK1M0o.js";import"./SuggestionItem-Djy8vKSb.js";import"./index-DFZofdAc.js";import"./Option-Dn0hRlAU.js";import"./index-C-serayw.js";import"./SegmentedButton-DcdMXKYR.js";import"./index-CUSU-sZ-.js";import"./Select-DcPG7akN.js";import"./InvisibleMessage-C330TfFr.js";import"./slim-arrow-down-CvM-d2Kg.js";import"./index-CpZAh2cz.js";import"./index-CflFfJ9L.js";import"./index-C4umghHT.js";import"./index-Cuh8Cott.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYz7ywwo.js";import"./group-2-HkaDgQ8q.js";import"./sort-descending-BkrTSQR1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-iPtp8h.js";import"./utils-LZ65B1HV.js";import"./index-arX-DEe4.js";import"./index-BEbANkX4.js";import"./index-J40sace8.js";import"./navigation-down-arrow-Dw2JTRKK.js";import"./navigation-right-arrow-DcK3gcB5.js";import"./navigation-right-arrow-Da_vKVqp.js";import"./useCurrentTheme-BoX5heyU.js";import"./index-BI1bMXh-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CE4g7ZKT.js";import"./paper-plane-DZlRHob0.js";import"./index-ae933fWZ.js";import"./less-DpSPHuZK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
