import{j as e}from"./iframe-CJRlzZgA.js";import{useMDXComponents as i}from"./index-CbUzkcD0.js";import{I as a,F as m}from"./CommandsAndQueries-BJK9fmCd.js";import{M as s,C as p}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import{C as l}from"./ControlsWithNote-m4NXE0Lk.js";import"./copy-Dm16cUhk.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DW5PTlme.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-CEi9QmXA.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3AIhspr.js";import"./delete-ydvJCLPE.js";import"./settings-CwGuwL1v.js";import"./NoData-fDkpn7tb.js";import"./IllustratedMessage-QOrTuGKl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BDYYJsa3.js";import"./index-BRkvunxZ.js";import"./index-ekmQbjwp.js";import"./slim-arrow-down-DiV8d_6M.js";import"./Input-C30iTws-.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./ValueStateMessage.css-C9MjG1UC.js";import"./Suggestions.css-BN5UKDJ_.js";import"./ListBoxItemGroupTemplate-gk9whGYw.js";import"./ComboBoxItemGroup-C468Z6Iw.js";import"./ListItemBaseTemplate-DnIFmn4i.js";import"./Token-BD4i_ui4.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-e2XpTMq4.js";import"./ToggleButton-B58O1JBR.js";import"./SuggestionItem-BhyM5wBT.js";import"./index-DMNOa0He.js";import"./Option-Bpa9ANqG.js";import"./index-D1wEGHKD.js";import"./SegmentedButton-SYhHQ9Ej.js";import"./index-Bxs6OwGY.js";import"./Select-OuFKxvFI.js";import"./InvisibleMessage-CDDqZbGd.js";import"./slim-arrow-down-BXVf3KJB.js";import"./index-Bb37Af0B.js";import"./index-CJGz6QVU.js";import"./index-C5HXwY5m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOoWNgu.js";import"./group-2-MVpHsjQq.js";import"./sort-descending-nGGv56wH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DICMjLbX.js";import"./utils-7UT6I4G8.js";import"./index-FDtWMB9q.js";import"./index-qQGf4ufv.js";import"./index-Dw_yibZ5.js";import"./navigation-down-arrow-DkHsoxHK.js";import"./navigation-right-arrow-Qe6XxWFz.js";import"./navigation-right-arrow-SD2DKsNp.js";import"./useCurrentTheme-DEkoUSWw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cbymz11o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7Tcv1Md.js";import"./paper-plane-Bz4OZEc2.js";import"./index-D0vK_QOP.js";import"./less-Dd1e4dTk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
