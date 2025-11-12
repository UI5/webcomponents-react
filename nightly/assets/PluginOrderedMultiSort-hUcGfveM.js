import{j as e}from"./iframe-DEgT_E8s.js";import{useMDXComponents as i}from"./index-BZRAiVGZ.js";import{I as a,F as m}from"./CommandsAndQueries-BnsxTdlD.js";import{M as s,C as p}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import{C as l}from"./ControlsWithNote-D4xdDKZF.js";import"./copy-CnDYhLIP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bb_fYyk9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CQIZa4KW.js";import"./delete-CqK8g_HQ.js";import"./settings-jSVHcypQ.js";import"./NoData-Dgjgajwh.js";import"./IllustratedMessage-WFxvN6sI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-j_yzxESa.js";import"./index-C4ZbRrOu.js";import"./index-EzHa5_P2.js";import"./slim-arrow-down-B0naEDbF.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./ListBoxItemGroupTemplate-BmVR1VlV.js";import"./ComboBoxItemGroup-Eimfv27_.js";import"./ListItemBaseTemplate-HfAqkZ3H.js";import"./Token-C5MRXtTV.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FLiQ-oOI.js";import"./ToggleButton-DMd9fH0Q.js";import"./SuggestionItem-DXBRTfNG.js";import"./index-BXlMwFJS.js";import"./Option-r28MJ-v0.js";import"./index-DAh5-UwY.js";import"./SegmentedButton-DuKNalzH.js";import"./index-7n2e9xhl.js";import"./Select-lIlAJjO9.js";import"./InvisibleMessage-DtVtDVKI.js";import"./slim-arrow-down-BCbYdXvq.js";import"./index-BekFaNX1.js";import"./index-C-dEXwCg.js";import"./index-PbfneB6M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtNLDG1k.js";import"./group-2-TWAMSjz_.js";import"./sort-descending-gRLN52yg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5tA4rVe.js";import"./utils-XKst6eGz.js";import"./index-DEM0qvBE.js";import"./index-BHegFaBf.js";import"./index-D1vU14fq.js";import"./navigation-down-arrow-CH6c6eW9.js";import"./navigation-right-arrow-QbezwENh.js";import"./navigation-right-arrow-fC4XWoU4.js";import"./useCurrentTheme-Z5PW4JFt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFb2J3Hx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CnhilVJw.js";import"./paper-plane-CwF1OIzX.js";import"./index-w9pnBzXO.js";import"./less-C43TjDId.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
