import{j as e}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as i}from"./index-7yLcmjFP.js";import{I as a,F as m}from"./CommandsAndQueries-B5y1yjIv.js";import{M as s,C as p}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import{C as l}from"./ControlsWithNote-Xba4zRPV.js";import"./copy-CcXkheL2.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CAle5qj4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./index-BCADQjVB.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vDDRYwk3.js";import"./delete-BHPiQy8C.js";import"./settings-BeJNJe9f.js";import"./NoData-DumUXixA.js";import"./IllustratedMessage-DDYbAdFt.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C4A8f3WL.js";import"./index-BY7QBrHg.js";import"./index-DPlPssjD.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./Input-YHM25DhV.js";import"./ResponsivePopoverCommon.css-LID13WBa.js";import"./ValueStateMessage.css-DQQ-VE9Z.js";import"./Suggestions.css-eTzTaAph.js";import"./ListBoxItemGroupTemplate-lxd0hXbv.js";import"./ComboBoxItemGroup-BghMlL1f.js";import"./ListItemBaseTemplate-DUdMr_EH.js";import"./Token-OLXA8lD0.js";import"./ScrollEnablement-SGqJH1Lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdNdTe1m.js";import"./ToggleButton-DYz4NtFX.js";import"./SuggestionItem-BddQBPYx.js";import"./index-D1d04w3W.js";import"./Option-v8zhZtfK.js";import"./index-DhKFm58k.js";import"./SegmentedButton-s1zIuXD0.js";import"./index-COE4TykW.js";import"./Select-CuF6Vj0b.js";import"./InvisibleMessage-LTfrv4dT.js";import"./slim-arrow-down-DYL641WE.js";import"./index-DGw9cILd.js";import"./index-CnNCBOjb.js";import"./index-CjnSo5ff.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_rO-u-6A.js";import"./group-2-Bc7XIkR-.js";import"./sort-descending-CkdP0ki-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DvL1DyYS.js";import"./utils-D_GsNQst.js";import"./index-BE-7xLBy.js";import"./index-CtMXypae.js";import"./index-tzbUIwBJ.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./navigation-right-arrow-BVMX59iQ.js";import"./navigation-right-arrow-jw1yzYIV.js";import"./useCurrentTheme-Bd8z3rm-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGCN7ekK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DASzHde-.js";import"./paper-plane-DvYo8HUm.js";import"./index-D-YebQdo.js";import"./less-BFgfWxB6.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
