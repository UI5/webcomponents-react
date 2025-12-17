import{j as e}from"./iframe-bzWujj58.js";import{useMDXComponents as i}from"./index-BCWfYBG3.js";import{I as a,F as m}from"./CommandsAndQueries-CSnnb9h_.js";import{M as s,C as p}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import{C as l}from"./ControlsWithNote-COjTHVw-.js";import"./copy-GDuXt_K5.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BfTucdcR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CUs-JjpA.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAnRP-h9.js";import"./delete-BQOkFj_7.js";import"./settings-xB4h6gy4.js";import"./NoData-DhYFwryF.js";import"./IllustratedMessage-Bj3RsISn.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-GOhmEK2P.js";import"./index-Bn16gfaT.js";import"./index-M_9IBZFV.js";import"./slim-arrow-down-DOFohywN.js";import"./Input-DsykwZcZ.js";import"./ResponsivePopoverCommon.css-Byd21R2h.js";import"./ValueStateMessage.css-BiINGXZV.js";import"./Suggestions.css-CWqYjdPw.js";import"./ListBoxItemGroupTemplate-_-jQCq9E.js";import"./ComboBoxItemGroup-Bl3kAabF.js";import"./ListItemBaseTemplate-DgszZIVa.js";import"./Token-Bo9P9XfT.js";import"./ScrollEnablement-DfIaDKp3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BUi3BAXQ.js";import"./ToggleButton-aItTBqg8.js";import"./SuggestionItem-BLHyZke7.js";import"./index-ocf09ezY.js";import"./Option-DIIl0zvY.js";import"./index-BltXzpxB.js";import"./SegmentedButton-CWgqCnl8.js";import"./index-BzH7jua9.js";import"./Select-DNFr47Ml.js";import"./InvisibleMessage-iKbGUbcD.js";import"./slim-arrow-down-D8yDs4Me.js";import"./index-BuV7Z7c1.js";import"./index-F3CZ5PU2.js";import"./index-BZhgR-Dt.js";import"./index-CF7Db4CN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlaD8IIA.js";import"./group-2-CpHThkVo.js";import"./sort-descending-oyA5Y4oF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hoVIfdZR.js";import"./utils-C_PlS108.js";import"./index-CYeZBUNC.js";import"./index-CQ8mgB0i.js";import"./index-DOuzQIbm.js";import"./navigation-down-arrow-3ULw9zrh.js";import"./navigation-right-arrow-CWBx1_6S.js";import"./navigation-right-arrow-C1871DiJ.js";import"./useCurrentTheme-BP7bNUlF.js";import"./index-Bp-G7IVz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BsMnXzoo.js";import"./paper-plane-DWH-h_Xo.js";import"./index-ILVay_S5.js";import"./less-BhqQM8jv.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
