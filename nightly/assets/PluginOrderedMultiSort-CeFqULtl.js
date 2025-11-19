import{j as e}from"./iframe-DNMTfzpK.js";import{useMDXComponents as i}from"./index-BN2xRXE4.js";import{I as a,F as m}from"./CommandsAndQueries-p_oo0qut.js";import{M as s,C as p}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import{C as l}from"./ControlsWithNote-Bm6pwLxQ.js";import"./copy-mCRNeeck.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-8GxD6bLE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./index-BVaTbyf5.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVxNklXG.js";import"./delete-Bs_1Tn7y.js";import"./settings-yHuNvmRk.js";import"./NoData-CJ4fcNDV.js";import"./IllustratedMessage-DfVKbqiE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DpgZmO3w.js";import"./index-BmyEQvU7.js";import"./index-C2f-DWtU.js";import"./slim-arrow-down-BeqBYoq7.js";import"./Input-D7FScK-r.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Suggestions.css-DVP1hS77.js";import"./ListBoxItemGroupTemplate-Ba2zWDfe.js";import"./ComboBoxItemGroup-BN1s9s3b.js";import"./ListItemBaseTemplate-mKi-cdJU.js";import"./Token-DJAtCUlu.js";import"./ScrollEnablement-eCP2Kegn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBFY19dC.js";import"./ToggleButton-DJDuyAgn.js";import"./SuggestionItem-Bgn_dqvA.js";import"./index-BYqQmGne.js";import"./Option-BWgO6mlW.js";import"./index-BwS7j3IJ.js";import"./SegmentedButton-tiebVN4C.js";import"./index-BcZz7Rtp.js";import"./Select-nYImCzGD.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./slim-arrow-down-BINXR2kD.js";import"./index-DZaQ5P9X.js";import"./index-HBZBsTho.js";import"./index-B_xleZYk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCGyTjP8.js";import"./group-2-Ds3ldsuu.js";import"./sort-descending-B9wZIYmD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrCxDrAT.js";import"./utils-PFbfoLst.js";import"./index-Cg0CgaE2.js";import"./index-Du0vGDLV.js";import"./index-B0pESpyZ.js";import"./navigation-down-arrow-B9yi9Vw4.js";import"./navigation-right-arrow-BuY4QW3G.js";import"./navigation-right-arrow-Do9NQWHs.js";import"./useCurrentTheme-CRXvomUG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChmvSx0O.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CveHlrIa.js";import"./paper-plane-BV9fKxBA.js";import"./index-CeaY2sRv.js";import"./less-DalUIm1-.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
