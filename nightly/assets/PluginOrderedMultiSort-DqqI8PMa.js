import{j as e}from"./iframe-cBdQNv77.js";import{useMDXComponents as i}from"./index-cOSrw8iI.js";import{I as a,F as m}from"./CommandsAndQueries-DjEzsLYR.js";import{M as s,C as p}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import{C as l}from"./ControlsWithNote-BtzrHLWv.js";import"./copy-IvR5q6ZX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B03Ac-Pt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CU_WQTkg.js";import"./delete-CMb-Nvkm.js";import"./settings-DWEgpEUz.js";import"./NoData-Qem4b_MW.js";import"./IllustratedMessage-Cyt9gDIc.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BysguWIF.js";import"./index-CblII6GP.js";import"./index-DSUYipo-.js";import"./slim-arrow-down-BPt5DgGA.js";import"./Input-CcjXMm62.js";import"./ResponsivePopoverCommon.css-RgOMGv0T.js";import"./ValueStateMessage.css-CowmmmLr.js";import"./Suggestions.css-yUQ9aL_d.js";import"./ListBoxItemGroupTemplate-BvX5NWPm.js";import"./ComboBoxItemGroup-CDbozHq9.js";import"./ListItemBaseTemplate-DrlAet-U.js";import"./Token-KJpiYxq1.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bac0lpbe.js";import"./ToggleButton-DekIcBfY.js";import"./SuggestionItem-Dbu-VOoh.js";import"./index-CroY5feV.js";import"./Option-Di0zJemp.js";import"./index-BdZWaw9K.js";import"./SegmentedButton-BVkeOtZe.js";import"./index-CMPXrz_r.js";import"./Select-glz-euWX.js";import"./InvisibleMessage-BXAme1GY.js";import"./slim-arrow-down-D3dx3V9G.js";import"./index-PK4cuCqC.js";import"./index-nXXgIqFV.js";import"./index-BY097R_L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWqjbJR2.js";import"./group-2-CF-v31Zl.js";import"./sort-descending-CyayMEsE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHmbUZOq.js";import"./utils-CEIcbUd3.js";import"./index-BIFjpkti.js";import"./index-DO50Tpnb.js";import"./index-Ct7T3oxa.js";import"./navigation-down-arrow-_-kVQMhy.js";import"./navigation-right-arrow-D_4YqzP5.js";import"./navigation-right-arrow-BcXKj59E.js";import"./useCurrentTheme-DjP3JZ5R.js";import"./IndicationColor-DVw-fSM_.js";import"./index-TOh3uh25.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B47DQxdv.js";import"./paper-plane-lzt2I4eu.js";import"./index-DqnLY2Ua.js";import"./less-D_OVhTJA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
