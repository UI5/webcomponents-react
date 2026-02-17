import{j as e}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as i}from"./index-4_wYEVSM.js";import{I as a,F as m}from"./CommandsAndQueries-pWQonQL4.js";import{M as s,C as p}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import{C as l}from"./ControlsWithNote-DkHNPNjQ.js";import"./copy-DN4ABQ_i.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DLd06CvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CS-8nJYw.js";import"./delete-CLlnG484.js";import"./settings-envYxgNe.js";import"./NoData-MpM1Hboz.js";import"./IllustratedMessage-XiOi_O98.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CjSiJYQm.js";import"./index-Dkiu8AdL.js";import"./index-C0ZKe89Q.js";import"./slim-arrow-down-BP1y9etM.js";import"./Input-1lNxvEmx.js";import"./ResponsivePopoverCommon.css-Dby6EGP2.js";import"./ValueStateMessage.css-CRvqrXXK.js";import"./Suggestions.css-BOY3IfAD.js";import"./ListBoxItemGroupTemplate-r8OAnwHN.js";import"./ComboBoxItemGroup-B3ytlzdg.js";import"./ListItemBaseTemplate-D4Nb1LoU.js";import"./Token-DcgVtbgs.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxclopY-.js";import"./ToggleButton-QtBZvedq.js";import"./SuggestionItem-D5nxLtbB.js";import"./index-Tx9ELn6M.js";import"./Option-CoAxKOIy.js";import"./index-y6qVrFsN.js";import"./SegmentedButton-xuXIvZlA.js";import"./index-BIsBvoOA.js";import"./Select-BEsYKhUS.js";import"./InvisibleMessage-CFCay4kG.js";import"./slim-arrow-down-Bbv1i9W9.js";import"./index-T4Qk8jiD.js";import"./index-plyixF0d.js";import"./index-DsJZZm7i.js";import"./index-h8anB-3B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-TDf9rbaD.js";import"./group-2-BvoDnCtF.js";import"./sort-descending-FS751uDv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D06_Ki1H.js";import"./utils-C4L1GQet.js";import"./index-DuIEmgl0.js";import"./index-DD9TQMUS.js";import"./index-D8PWKVzq.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./useCurrentTheme-Db8jJ0JU.js";import"./index-DPB7aPUP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzZietn_.js";import"./paper-plane-CXGOFY1-.js";import"./index-C53XJ8_2.js";import"./less-bilrATQD.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
