import{j as e}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as i}from"./index-D99mDNJl.js";import{I as a,F as m}from"./CommandsAndQueries-DoIIg28U.js";import{M as s,C as p}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import{C as l}from"./ControlsWithNote-DZwuVK-s.js";import"./copy-o8vYo4aG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-1KeWr361.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./index-CQkucwsg.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBfXQqOD.js";import"./delete-UPYhhS75.js";import"./settings-BQIQCw26.js";import"./NoData-B27ZHA1s.js";import"./IllustratedMessage-CXJqRBtz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CHoVY10U.js";import"./index-ZdNquEyn.js";import"./index-CG20QFYC.js";import"./slim-arrow-down-DNm_LgPO.js";import"./Input-BsSjRDM5.js";import"./ResponsivePopoverCommon.css-CYgfaUoK.js";import"./ValueStateMessage.css-CpqZ_gjF.js";import"./Suggestions.css-QPEItX3L.js";import"./ListBoxItemGroupTemplate-C6jRHMwF.js";import"./ComboBoxItemGroup-CCSovVR5.js";import"./ListItemBaseTemplate-u7wLHgK7.js";import"./Token-CTyid79H.js";import"./ScrollEnablement-W5Wf5RR3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7bHN0O3.js";import"./ToggleButton-DeV44AnW.js";import"./SuggestionItem-CSPEj_XQ.js";import"./index-G1G_Ul-v.js";import"./Option-BHttWL89.js";import"./index-D07NgyYx.js";import"./SegmentedButton-DhoFROJQ.js";import"./index-HJOD6t4r.js";import"./Select-BxgNjt9h.js";import"./InvisibleMessage-CugcSZE6.js";import"./slim-arrow-down-Df8hY_AN.js";import"./index-D0AP3dKj.js";import"./index-CqRYtRVu.js";import"./index-D1q_umKP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlHrl19O.js";import"./group-2-FzrtZoEx.js";import"./sort-descending-DZyRlpy5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHLokQSX.js";import"./utils-D23r6WGI.js";import"./index-DEf-xWsx.js";import"./index-D88YKGSw.js";import"./index-DsLljGL1.js";import"./navigation-down-arrow-BbdKFfmI.js";import"./navigation-right-arrow-Bw3RXKs8.js";import"./navigation-right-arrow-C6IZxjIu.js";import"./useCurrentTheme-CVvxYTRR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ZaQ1AkQI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H9_uEIIc.js";import"./paper-plane-DhjbkpKT.js";import"./index-Byl3jNPv.js";import"./less-D_TW91Ya.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
