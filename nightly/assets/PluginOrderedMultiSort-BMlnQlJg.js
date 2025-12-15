import{j as e}from"./iframe-BVsLYlhe.js";import{useMDXComponents as i}from"./index-DavU5a3Y.js";import{I as a,F as m}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as s,C as p}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import{C as l}from"./ControlsWithNote-CGEaDRv0.js";import"./copy-hvSX-Foh.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DCSA0DE3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be_omCvA.js";import"./delete-wM7iGzUT.js";import"./settings-DUTgYsHz.js";import"./NoData-BP3lBXbm.js";import"./IllustratedMessage-DOGBzg3t.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dg1Tep4f.js";import"./index-C1WMOxlR.js";import"./index-CVk9SmTz.js";import"./slim-arrow-down-DhCWTPrz.js";import"./Input-B1h80Qke.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Suggestions.css-BC296_76.js";import"./ListBoxItemGroupTemplate-C4BIIOjO.js";import"./ComboBoxItemGroup-CL94Ym8W.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ToggleButton-CfDtgg4F.js";import"./SuggestionItem-B4pYo2Xh.js";import"./index-DtvHgBUt.js";import"./Option-BmneA1aN.js";import"./index-MoN8cciG.js";import"./SegmentedButton-CZ9H8jJT.js";import"./index-CPMcUc-n.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./index-ytFospDP.js";import"./index-MqiJoXt5.js";import"./index-CeMerd7K.js";import"./index-BSHqwN58.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpwTCgMq.js";import"./group-2-BQbBlrd5.js";import"./sort-descending-ABbRNgKt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHnVQWJI.js";import"./utils-DKALz9nY.js";import"./index-c_PF86vB.js";import"./index-BG1NckKa.js";import"./index-JsVdJQMp.js";import"./navigation-down-arrow-BBbnWEl3.js";import"./navigation-right-arrow-Dv-Qzlpb.js";import"./navigation-right-arrow-DLSHU6Nw.js";import"./useCurrentTheme-DSoyNXre.js";import"./index-Cufgt29f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzejkbSx.js";import"./paper-plane-CXb4AHwo.js";import"./index-DZtB4CEv.js";import"./less-8xYh8vLI.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
