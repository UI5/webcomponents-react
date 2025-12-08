import{j as e}from"./iframe-D5yYeuyx.js";import{useMDXComponents as i}from"./index-OOr887th.js";import{I as a,F as m}from"./CommandsAndQueries-CJKRIq4o.js";import{M as s,C as p}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import{C as l}from"./ControlsWithNote-Dhu05JtX.js";import"./copy-BbBddowJ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-zKKdy0iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./index-pGOyFusy.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkUAlph4.js";import"./delete-CEb_JUXh.js";import"./settings-BPkYZfgY.js";import"./NoData-BiDCs0cr.js";import"./IllustratedMessage-D3a58_2V.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BgGEjG58.js";import"./index-CWuQ_FvE.js";import"./index-DDrT2lBD.js";import"./slim-arrow-down-DAbWlapP.js";import"./Input-CRG5JTiB.js";import"./ResponsivePopoverCommon.css-DosOvkrc.js";import"./ValueStateMessage.css-CmY2G9nX.js";import"./Suggestions.css-Cc7CIEcc.js";import"./ListBoxItemGroupTemplate-DfKADDdU.js";import"./ComboBoxItemGroup-Dtfv3_LL.js";import"./ListItemBaseTemplate-BYWJKvpu.js";import"./Token-KEywEoQK.js";import"./ScrollEnablement-9NyzND_c.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CXdrrYCn.js";import"./ToggleButton-ByrGi9fF.js";import"./SuggestionItem-DdDeQX3D.js";import"./index-DbKnZ7JU.js";import"./Option-CW9CutXR.js";import"./index-Cm_JNiA3.js";import"./SegmentedButton-DDilHdoL.js";import"./index-BpQt5OEf.js";import"./Select-DaSCiKmk.js";import"./InvisibleMessage-Cl3WTIpJ.js";import"./slim-arrow-down-BglCXS9Y.js";import"./index-BBvERRAI.js";import"./index-AQwE40sw.js";import"./index-Co3Z1GWi.js";import"./index-6QK4Io4Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6eoyLEr.js";import"./group-2-ATO8Q-wL.js";import"./sort-descending-BXHZWD30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdNe_oTn.js";import"./utils-CLQPrml8.js";import"./index-Dh_vIy7-.js";import"./index-QBbEu3vQ.js";import"./index-D4p2SSM5.js";import"./navigation-down-arrow-CLdsbi01.js";import"./navigation-right-arrow-CqvRZAjQ.js";import"./navigation-right-arrow-DgZ7r_GQ.js";import"./useCurrentTheme-Czjolaja.js";import"./index-BwEGatY_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0KPyHmS.js";import"./paper-plane-B3JfZYpI.js";import"./index-CBYgCKNh.js";import"./less-BnTb-LS4.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
