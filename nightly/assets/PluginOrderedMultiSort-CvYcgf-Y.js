import{j as e}from"./iframe-DMaNIVf0.js";import{useMDXComponents as i}from"./index-BdK8Evs-.js";import{I as a,F as m}from"./CommandsAndQueries-BFOyQZVK.js";import{M as s,C as p}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import{C as l}from"./ControlsWithNote-DNtLzp66.js";import"./copy-CnV7FmZR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-giuHKaPD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-DVWNlONk.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DL_HHA5w.js";import"./delete-UGJs4_V3.js";import"./settings-S1nrqURM.js";import"./NoData-BLW3WdAc.js";import"./IllustratedMessage-B4Aro-vw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WCFpOywi.js";import"./index-Bwx3EN3f.js";import"./index-D6T6Dl-c.js";import"./slim-arrow-down-B7sjAyNA.js";import"./Input-DKkkpn3d.js";import"./ResponsivePopoverCommon.css-D74rDr_U.js";import"./ValueStateMessage.css-fkyFStPA.js";import"./Suggestions.css-0HZ10WLs.js";import"./ListBoxItemGroupTemplate-DZ9eXffT.js";import"./ComboBoxItemGroup-BR69p7yg.js";import"./ListItemBaseTemplate-Bf7uY7ZQ.js";import"./Token-CjC8nPvp.js";import"./ScrollEnablement-8_TnQxf5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8-OXolT.js";import"./ToggleButton--teKc-ne.js";import"./SuggestionItem-BnwBWzmm.js";import"./index-BoQ0qsWE.js";import"./Option-sH8FtQNh.js";import"./index-D8b8tj0j.js";import"./SegmentedButton-BTVYA_sE.js";import"./index-BXxloo5d.js";import"./Select-B0oytRV7.js";import"./InvisibleMessage-VIwqV5hq.js";import"./slim-arrow-down-CHc2IDnL.js";import"./index-Cn4MmIEZ.js";import"./index-lWv6OELN.js";import"./index-B2RA2zCC.js";import"./index-muEq_JKA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMomJqZY.js";import"./group-2-BHcp_Qz3.js";import"./sort-descending-Bq9hP7hO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BlGrjF5y.js";import"./utils-pBFYHr6i.js";import"./index-ERfIUViA.js";import"./index-JwRt4jqM.js";import"./index-DOnDyXS8.js";import"./navigation-down-arrow-D0RqXh7N.js";import"./navigation-right-arrow-CLAxjwwI.js";import"./navigation-right-arrow-CLLyA8n3.js";import"./useCurrentTheme-C69-McZX.js";import"./index-CKSN0DqT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQGRkAtk.js";import"./paper-plane-DVH2n_JI.js";import"./index-C9qNzj0Y.js";import"./less-BXBsPGl8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
