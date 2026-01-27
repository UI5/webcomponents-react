import{j as e}from"./iframe-mz-DPMfO.js";import{useMDXComponents as i}from"./index-BQe-Y6f4.js";import{I as a,F as m}from"./CommandsAndQueries-CNdgb_xD.js";import{M as s,C as p}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import{C as l}from"./ControlsWithNote-C6fhLtSi.js";import"./copy-40awRikg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B0z8hj4E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cm2BS3GA.js";import"./delete-G5EHOAnz.js";import"./settings-CsivxwAE.js";import"./NoData-BxE6Tv_8.js";import"./IllustratedMessage-DSE8qKy3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DxOlC27G.js";import"./index-DNTjClb-.js";import"./index-HIa2ArXa.js";import"./slim-arrow-down-D5GhCIze.js";import"./Input-DKhFBeXu.js";import"./ResponsivePopoverCommon.css-Dw0qvCvb.js";import"./ValueStateMessage.css-aIP2Mnhs.js";import"./Suggestions.css-fWWNrwHO.js";import"./ListBoxItemGroupTemplate-nanEm9hw.js";import"./ComboBoxItemGroup-Dvkzxw9l.js";import"./ListItemBaseTemplate-UDeydQID.js";import"./Token-zxfxV2UY.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8bDYcBG.js";import"./ToggleButton-BX6-NLYV.js";import"./SuggestionItem-D4XueI-M.js";import"./index-BT-CCgox.js";import"./Option-C3T5_tXM.js";import"./index-BfUyajly.js";import"./SegmentedButton-DllV5zlW.js";import"./index-DDRv_OXW.js";import"./Select-BdUDnM2I.js";import"./InvisibleMessage-BIbkbdCE.js";import"./slim-arrow-down-Bk0xFqDz.js";import"./index-DKMucjjn.js";import"./index-D6PoFlyg.js";import"./index-CNllsCPa.js";import"./index-CDMzJTvn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DA7T2Rl3.js";import"./group-2-Bwsdx7qx.js";import"./sort-descending-Btj6h9pS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5M6Mwa8.js";import"./utils-DCG9zNvg.js";import"./index-DIJKpGCJ.js";import"./index-DWu6poIj.js";import"./index-DiIoiFSd.js";import"./navigation-down-arrow-CBdPnBQr.js";import"./navigation-right-arrow-DIpgwEVw.js";import"./navigation-right-arrow-C1ncpOSj.js";import"./useCurrentTheme-BtI3wPUE.js";import"./index-Bi5Z9u5V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcIdQY8X.js";import"./paper-plane-DQSNVPXE.js";import"./index-Bv3BJuLo.js";import"./less-DD1AM41T.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
