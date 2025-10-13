import{j as e}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as i}from"./index-BZBPPnAC.js";import{I as a,F as m}from"./CommandsAndQueries-7VHsHP9e.js";import{M as s,C as p}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import{C as l}from"./ControlsWithNote-DLxdb_Ww.js";import"./copy-BvEBs4Jb.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BwmUzmXm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";import"./index-CPxVkHe3.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C_7eAMan.js";import"./delete-DDdmSxun.js";import"./settings-SZZk_fFu.js";import"./NoData-sRhZ3zTv.js";import"./IllustratedMessage-Dclr8PL4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lU7Py_iI.js";import"./index-Cc9iVAAu.js";import"./index-Dbt7IMfg.js";import"./slim-arrow-down-_qPAbD3Y.js";import"./Input-Dq0nzydJ.js";import"./ResponsivePopoverCommon.css--4EV00T0.js";import"./ValueStateMessage.css-DJXR6UPS.js";import"./Suggestions.css-BrKJqgD-.js";import"./ListBoxItemGroupTemplate-Ccn1SJ4V.js";import"./ComboBoxItemGroup-D6HtalKw.js";import"./ListItemBaseTemplate-D-MpoK89.js";import"./Token-Da7jb-N1.js";import"./ScrollEnablement-Bbyn3w51.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwznxLrh.js";import"./ToggleButton-VCd_4PFZ.js";import"./SuggestionItem-BV-QE3WD.js";import"./index-BK1jTw4z.js";import"./Option-lMtOBoWg.js";import"./index-BGTKMO1o.js";import"./SegmentedButton-COLPjqPS.js";import"./index-E-tB_7Ri.js";import"./Select-DU8OXIZo.js";import"./InvisibleMessage-BXeuCBKE.js";import"./slim-arrow-down-KmQfRro9.js";import"./index-BPWx4Zk_.js";import"./index-D9Lx7ID0.js";import"./index-sic5m1Pa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1tBCcb1.js";import"./group-2-D2ei6fTk.js";import"./sort-descending-BuC5Tk_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lXLyT-Wl.js";import"./utils-ChSuOYmL.js";import"./index-vJTHVjlR.js";import"./index-DZKaCGNa.js";import"./index-paGBJspo.js";import"./navigation-down-arrow-B9jXhU-w.js";import"./navigation-right-arrow-DN8qzGzf.js";import"./navigation-right-arrow-Arpyz__T.js";import"./useCurrentTheme-D9ht3LOk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-s2pXv8Lk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgH4TYcR.js";import"./paper-plane-CfdFJpRG.js";import"./index-Dx8GcT9W.js";import"./less-klToe0UP.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
