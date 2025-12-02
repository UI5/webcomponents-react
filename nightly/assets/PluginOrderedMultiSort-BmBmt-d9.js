import{j as e}from"./iframe-D-W-mmRj.js";import{useMDXComponents as i}from"./index-D8IyotA-.js";import{I as a,F as m}from"./CommandsAndQueries-G8bd-Dz2.js";import{M as s,C as p}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import{C as l}from"./ControlsWithNote-B4akadk-.js";import"./copy-Bs2vU0sH.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CnR2Z8F0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./index-DkLrn4qm.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhdCO6dM.js";import"./delete-CWhMuDL5.js";import"./settings-CyNEgs3g.js";import"./NoData-BLggi9n_.js";import"./IllustratedMessage-BlAMe72Z.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DzdY_mBy.js";import"./index-CNJHK3W8.js";import"./index-Bxxpx37Q.js";import"./slim-arrow-down-x9Gru0Ec.js";import"./Input-BqMyI7ca.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./ValueStateMessage.css-DadsVUgD.js";import"./Suggestions.css-DSmmsEoA.js";import"./ListBoxItemGroupTemplate-DFUskKCh.js";import"./ComboBoxItemGroup-Df0XnL08.js";import"./ListItemBaseTemplate-BAnGYykD.js";import"./Token-C2_dZ0mi.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C80k9rxB.js";import"./ToggleButton-52j1Cimw.js";import"./SuggestionItem-CfdrIOvX.js";import"./index-CUrDlzTH.js";import"./Option-au42OKVK.js";import"./index-CumMtctX.js";import"./SegmentedButton-CsAys2s9.js";import"./index-YylBegPs.js";import"./Select-Bj00LLbV.js";import"./InvisibleMessage-XQ1BeoOK.js";import"./slim-arrow-down-DWuhkxhY.js";import"./index-Buv1R8Le.js";import"./index-DIb00-kV.js";import"./index-C7KJciiD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRhGvWSX.js";import"./group-2-x8bbk4t5.js";import"./sort-descending-DeN8U9ms.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVu5YbFT.js";import"./utils-ES71sGqA.js";import"./index-JcPgMdxN.js";import"./index-C7o60qk_.js";import"./index-BBVgoxy_.js";import"./navigation-down-arrow-D6uzIO8i.js";import"./navigation-right-arrow-JPz4-m_e.js";import"./navigation-right-arrow-B0n9GdxK.js";import"./useCurrentTheme-C612kq_O.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DtsxIlNB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5QWPvoz.js";import"./paper-plane-BdmbwH0l.js";import"./index-BxEZlMiK.js";import"./less-B61wiooM.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
