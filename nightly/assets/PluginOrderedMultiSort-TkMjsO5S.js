import{j as e}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as i}from"./index-D0JiuHQ4.js";import{I as a,F as m}from"./CommandsAndQueries-DJtqUE3T.js";import{M as s,C as p}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import{C as l}from"./ControlsWithNote-AZb4CeHf.js";import"./copy-BYLHU9Z4.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D7tDF3LC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-BryeGZHH.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6X-Ca7e.js";import"./delete-CetONo-j.js";import"./settings-ue12HTO0.js";import"./NoData-CWzySvQc.js";import"./IllustratedMessage-D0tB0cmi.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BPl5eSyH.js";import"./index-kY9ogU97.js";import"./index-D_3vZ1qW.js";import"./slim-arrow-down-BIYWTMM9.js";import"./Input-CpYyucC6.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./ValueStateMessage.css-B2kFKHCy.js";import"./Suggestions.css-BixA8_8b.js";import"./ListBoxItemGroupTemplate-DQIXrV5Z.js";import"./ComboBoxItemGroup-Dvg2tB_d.js";import"./ListItemBaseTemplate-B7R8y6E8.js";import"./Token-DhrdJ1Sg.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlHk0Rap.js";import"./ToggleButton-B5bHIjtc.js";import"./SuggestionItem-IqbCPKbs.js";import"./index-CL7xnthF.js";import"./Option-BkGTUapV.js";import"./index-Dc1nuJIz.js";import"./SegmentedButton-Bp7GzNGY.js";import"./index-CYkhTtIe.js";import"./Select-DFfAQ4b9.js";import"./InvisibleMessage-CRnN6wGW.js";import"./slim-arrow-down-ESf62i2o.js";import"./index-Bgu519fZ.js";import"./index-XZB3isdK.js";import"./index-Bo9OnBPA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqChTor.js";import"./group-2-BSQvkUDM.js";import"./sort-descending-Dpcy382o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2pRBdY7.js";import"./utils-KyGbIlyC.js";import"./index-D_tUOp4t.js";import"./index-exVXgT8C.js";import"./index-CmB-uMll.js";import"./navigation-down-arrow-CwSBl4bt.js";import"./navigation-right-arrow-F8wuOD05.js";import"./navigation-right-arrow-lRMX6PjY.js";import"./useCurrentTheme-C35ceZMU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B3w1bjpQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CO6iPAax.js";import"./paper-plane-BAOIGT1i.js";import"./index-D4uoRC6c.js";import"./less-B5N43rAu.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
