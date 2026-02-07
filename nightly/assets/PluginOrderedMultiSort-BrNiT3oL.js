import{j as e}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as i}from"./index-CTifqAle.js";import{I as a,F as m}from"./CommandsAndQueries-Bmwjvcx6.js";import{M as s,C as p}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import{C as l}from"./ControlsWithNote-CBZw3-Gn.js";import"./copy-CDQOzwpW.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ByBJ9ZH-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./index-DbUh3jFl.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ml1YjSwo.js";import"./delete-Bmuh7N5L.js";import"./settings-3-EWs3iX.js";import"./NoData-BeeL7oJD.js";import"./IllustratedMessage-DDDiGsCm.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DOM4bvJY.js";import"./index-BUNmVAeL.js";import"./index-Ce9_H2mo.js";import"./slim-arrow-down-C4Zv-sp4.js";import"./Input-B6TJfZNr.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./ValueStateMessage.css-taduqeY7.js";import"./Suggestions.css-B-HnuI29.js";import"./ListBoxItemGroupTemplate-Cw8tkkDC.js";import"./ComboBoxItemGroup-D4GwkaDp.js";import"./ListItemBaseTemplate-4zjGS_SN.js";import"./Token-87PIswjb.js";import"./ScrollEnablement-BkGsl_bk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwmvV3ez.js";import"./ToggleButton-CHD9qof2.js";import"./SuggestionItem-CiNaD7wa.js";import"./index-O9Iaeyjv.js";import"./Option-yTMBTxoW.js";import"./index-CacjXjcP.js";import"./SegmentedButton-CDIHDaC9.js";import"./index-C8bJpO0W.js";import"./Select-BplUcK6s.js";import"./InvisibleMessage-DMo6sLGx.js";import"./slim-arrow-down-BeH-Dgqc.js";import"./index-DNcyh1s3.js";import"./index-NyngYkNy.js";import"./index-Dbog1EiU.js";import"./index-Bs_4T8nn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRwGeHAq.js";import"./group-2-CpCeXAY5.js";import"./sort-descending-DJ5_tlNx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-RpjumSju.js";import"./utils-xumaylSf.js";import"./index-KighuX2F.js";import"./index-gniM_8IR.js";import"./index-DOlMH_3T.js";import"./navigation-down-arrow-qe1kaUvs.js";import"./navigation-right-arrow-SwkIH0vW.js";import"./navigation-right-arrow-CFFeqYEg.js";import"./useCurrentTheme-CbzIKp_1.js";import"./index-BhhaNHVG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cye1bIBc.js";import"./paper-plane-Bc39tSYe.js";import"./index-CKkhBjhg.js";import"./less-BsWMeBSw.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
