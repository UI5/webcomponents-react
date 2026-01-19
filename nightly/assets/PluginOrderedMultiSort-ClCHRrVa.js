import{j as e}from"./iframe-CqyRxNKY.js";import{useMDXComponents as i}from"./index-CXuCYMlQ.js";import{I as a,F as m}from"./CommandsAndQueries-DLVKRV5D.js";import{M as s,C as p}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import{C as l}from"./ControlsWithNote-QwD0LoME.js";import"./copy-B4Tt60gX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CBm2X1QF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-BymRtllO.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuNqlAjt.js";import"./delete-BbGK1u87.js";import"./settings-DIlRpxvA.js";import"./NoData-BxK7Pf7G.js";import"./IllustratedMessage-DT058xfx.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-kuqPc1vX.js";import"./index-BM2t6dv5.js";import"./index-CorD3FCo.js";import"./slim-arrow-down-XrizyWJX.js";import"./Input-Btn3NqEP.js";import"./ResponsivePopoverCommon.css-BHPxlmcC.js";import"./ValueStateMessage.css-mCgjmZWa.js";import"./Suggestions.css-Ppn_4y7L.js";import"./ListBoxItemGroupTemplate-COFn4xTr.js";import"./ComboBoxItemGroup-BR6fMrLl.js";import"./ListItemBaseTemplate-DexxF4Wd.js";import"./Token-Dwa2qLYj.js";import"./ScrollEnablement-DWFfp1Ql.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDPTJ4VI.js";import"./ToggleButton-ChKD3yaL.js";import"./SuggestionItem-tcsJtTjM.js";import"./index-CLWuTNUb.js";import"./Option-CLygUspk.js";import"./index-BPBdqMTp.js";import"./SegmentedButton-DtCM4MtJ.js";import"./index-QLIu92PZ.js";import"./Select-CS7kvNev.js";import"./InvisibleMessage-fNBDK7S3.js";import"./slim-arrow-down-C6i4R0LO.js";import"./index-ByR0cNcw.js";import"./index-DGvdc7FV.js";import"./index-WMMIdr0v.js";import"./index-B3oIoIuT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CIu0BZu0.js";import"./group-2-iMc-Tv7m.js";import"./sort-descending-DV0fc1pJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KnanNVk9.js";import"./utils-D28-Pdwf.js";import"./index-DLnOQir-.js";import"./index-xFlZ9F3z.js";import"./index-C-6D1Wpo.js";import"./navigation-down-arrow-BcxM96MS.js";import"./navigation-right-arrow-rjgI-qTH.js";import"./navigation-right-arrow-CLMRBwo6.js";import"./useCurrentTheme-CtkLN-hF.js";import"./index-B2kdW0ae.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVxv5eSK.js";import"./paper-plane-DMN-jmcN.js";import"./index-TNQ5kc5_.js";import"./less-CvdXbD0I.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
