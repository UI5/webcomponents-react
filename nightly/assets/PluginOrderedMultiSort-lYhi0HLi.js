import{j as e}from"./iframe-DYmejECO.js";import{useMDXComponents as i}from"./index-9gDZjqLB.js";import{I as a,F as m}from"./CommandsAndQueries-BUFKZ5oS.js";import{M as s,C as p}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import{C as l}from"./ControlsWithNote-DKcmz9Y6.js";import"./copy-Za-_Z-Tq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dqndnsq3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./index-E0O-rqDf.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBUOFfUF.js";import"./delete-CTZTKHWL.js";import"./settings-WjdBxW6C.js";import"./NoData-BJ0nX3_H.js";import"./IllustratedMessage-7-uYQkyZ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CI6WTuUW.js";import"./index-B-CyWBp1.js";import"./index-CS6sH5Sy.js";import"./slim-arrow-down-BbgvtXR1.js";import"./Input-D3eSQpEN.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./ValueStateMessage.css-CUuHv4id.js";import"./Suggestions.css-CuvdJ8X6.js";import"./ListBoxItemGroupTemplate-4YjvPL6O.js";import"./ComboBoxItemGroup-CFEGhyle.js";import"./ListItemBaseTemplate-Fr0aNkev.js";import"./Token-B3KLY-_e.js";import"./ScrollEnablement-Dr9XQj7e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_Mx3JoTx.js";import"./ToggleButton-CXlL9fKv.js";import"./SuggestionItem-C7BSUng4.js";import"./index-B76y_UKV.js";import"./Option-Bea2riBZ.js";import"./index-DlTkKaiO.js";import"./SegmentedButton-CV7f3Z1-.js";import"./index-BZOk0oAR.js";import"./Select-B_CaPd95.js";import"./InvisibleMessage-goreZJqY.js";import"./slim-arrow-down-Ce0kb6v-.js";import"./index-DKdmNSnc.js";import"./index-D5TJ92nf.js";import"./index-cYgTFA9L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D7jAZBjp.js";import"./group-2-COqIM_cV.js";import"./sort-descending-CoPut5E-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUdvcpQW.js";import"./utils-g0fn1CkI.js";import"./index-CRr32CDK.js";import"./index-CDV5VZBY.js";import"./index-H9t-i14p.js";import"./navigation-down-arrow-C1ddotBT.js";import"./navigation-right-arrow-Ca-BUU1v.js";import"./navigation-right-arrow-D7Z03VwH.js";import"./useCurrentTheme-BGTNx-Lj.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DI1P8mhv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BWt4ksXr.js";import"./paper-plane-DMt5qfQg.js";import"./index-B8Foa8Pz.js";import"./less-D_PUL5W3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
