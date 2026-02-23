import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as i}from"./index-CAoJF-Ee.js";import{I as a,F as m}from"./CommandsAndQueries-BpKCXtjf.js";import{M as s,C as p}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import{C as l}from"./ControlsWithNote-Cd4-1WaE.js";import"./copy-DmlYE796.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B4PZ95my.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Qu9aPK.js";import"./delete-GyZuHggU.js";import"./settings-CSNf6lLD.js";import"./NoData-GWb7D9P8.js";import"./IllustratedMessage-CqKcL014.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zZOIcPI-.js";import"./index-CfSZL8D6.js";import"./index-CrX_lNBL.js";import"./slim-arrow-down-Qo8He1bF.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./ListBoxItemGroupTemplate-DzwM921Z.js";import"./ComboBoxItemGroup-DqY3uMDf.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./Token-hIQX68Hd.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn9vQdt7.js";import"./ToggleButton-WHvzyU1L.js";import"./SuggestionItem-CMelAZK6.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./index-zW6HzqIh.js";import"./SegmentedButton-DSaVLZ2J.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./index-vK1nVN_c.js";import"./index-DNDxQV0p.js";import"./index-B8XaOmg3.js";import"./index-DgbNo39p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CcBdfap_.js";import"./group-2-M9iAyJ2B.js";import"./sort-descending-DvSTXRI3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFadE48.js";import"./utils-B8eWjpJ0.js";import"./index-DYmw3Rfl.js";import"./index-kUdamL05.js";import"./index-DCI2wHY-.js";import"./navigation-down-arrow-CoZWd3Be.js";import"./navigation-right-arrow-DQBdB4vT.js";import"./navigation-right-arrow-CLYge1Io.js";import"./useCurrentTheme-ByIUAEMi.js";import"./index-CWW0jJXt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wyLkWFxP.js";import"./paper-plane-CIyPt1UE.js";import"./index-Dm0jkMUI.js";import"./less-q2GCtAl4.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
