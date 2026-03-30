import{j as e}from"./iframe-QfBB5oxv.js";import{u as i,M as a,C as m}from"./blocks-BNoxk89Z.js";import{I as s}from"./CommandsAndQueries-CHXq-8GX.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import{C as p}from"./ControlsWithNote-CpNK55OJ.js";import"./copy-Ddev0qyd.js";import{F as l}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B6o6xcm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNErvuHa.js";import"./delete-ChbxvCaX.js";import"./settings-BJf-PQsO.js";import"./NoData-DgG04WAC.js";import"./NoFilterResults-BU08mcFJ.js";import"./index-BW8anNwZ.js";import"./IllustratedMessage-B0tuKdc_.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CzounWiX.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./ListBoxItemGroupTemplate-KaiE3Akg.js";import"./ComboBoxItemGroup-BYlx2q4W.js";import"./ListItemBaseTemplate-Dh63WkMo.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ToggleButton-BzWglLQm.js";import"./multiselect-all-DvkYK6cA.js";import"./SuggestionItem-BX-RC-Ep.js";import"./index-DxqVVwu_.js";import"./Option-PTtFyRUo.js";import"./index-D6pqZsOu.js";import"./SegmentedButton-ChlAck0v.js";import"./index-Dvo2DlNr.js";import"./Select-DcyuEmeq.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-CNet7Rn8.js";import"./index-BhwDH-EY.js";import"./index-ChcMW--M.js";import"./index-CEP4QNMA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Duv1kUg0.js";import"./group-2-DOvkGS22.js";import"./sort-descending-ARK23MyZ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cpx9pvDO.js";import"./utils-Gg7Ythg5.js";import"./index-eHKj1k2p.js";import"./index-_er2dUIp.js";import"./index-COg9gy3g.js";import"./navigation-down-arrow-DINT9BlU.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./useCurrentTheme-CclwzgwB.js";import"./index-ClULG3sl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPTRgBT8.js";import"./paper-plane-BEUN1GKr.js";import"./index-CB8cZ3hf.js";import"./less-Bm7RlntL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
