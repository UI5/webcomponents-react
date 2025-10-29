import{j as e}from"./iframe-BY1BFtoq.js";import{useMDXComponents as i}from"./index-BJX8o_PY.js";import{I as a,F as m}from"./CommandsAndQueries-LexJCY9y.js";import{M as s,C as p}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import{C as l}from"./ControlsWithNote-ab9tW4FC.js";import"./copy-BobpDbK0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BJgxOLZH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCCC4ur2.js";import"./delete-D8zrN_sA.js";import"./settings-Bdr665rb.js";import"./NoData-BRqgG7K8.js";import"./IllustratedMessage-DPqumtU-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cyq1-ihj.js";import"./index-_HCPSvgc.js";import"./index-CRmM9ezH.js";import"./slim-arrow-down-DtYB0pd9.js";import"./Input-bf8JCO1U.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./ValueStateMessage.css-Dg1p_wIG.js";import"./Suggestions.css-S4z4vAmo.js";import"./ListBoxItemGroupTemplate-BHHW-U5N.js";import"./ComboBoxItemGroup-CWH9BsDg.js";import"./ListItemBaseTemplate-CTqAs3uy.js";import"./Token-q-g5A3-L.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlebLaAt.js";import"./ToggleButton-CmeP7kkP.js";import"./SuggestionItem-C1WN_sCo.js";import"./index-DLBeBpmo.js";import"./Option-BbXwN-l4.js";import"./index-CfVsgWHp.js";import"./SegmentedButton-C2wGr84m.js";import"./index-Dqcyxmrt.js";import"./Select-CQ6YhMiH.js";import"./InvisibleMessage-Cm96dHRB.js";import"./slim-arrow-down-C6xEaE6E.js";import"./index-OWO7rarX.js";import"./index-Bv46zhG_.js";import"./index-BS9ow689.js";import"./IconDesign-DXd8PPVF.js";import"./filter-GHJB05Hr.js";import"./group-2-BSwplwhU.js";import"./sort-descending-DzpsEe-A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dj0e6j8A.js";import"./utils-BVTfHtc_.js";import"./index-DQ68OsPL.js";import"./index-BrYWbXY_.js";import"./index-Cji0Ug7a.js";import"./navigation-down-arrow-DoOrewxd.js";import"./navigation-right-arrow-D-L2cheh.js";import"./navigation-right-arrow-CaZt-wfz.js";import"./useCurrentTheme-3PuwnM7C.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oc63bMUJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxCqakm.js";import"./paper-plane-BTYyQoCV.js";import"./index-DwP49iU-.js";import"./less-mTodNhHV.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
