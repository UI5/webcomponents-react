import{j as e}from"./iframe-CeYK60h5.js";import{useMDXComponents as i}from"./index-CyuETzTv.js";import{I as a,F as m}from"./CommandsAndQueries-CFbtJHwM.js";import{M as s,C as p}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import{C as l}from"./ControlsWithNote-BC1HLgT2.js";import"./copy-CiRkqTCy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-e4dPoyh1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Brue9bZM.js";import"./delete-BcvtETcy.js";import"./settings-5BacSR94.js";import"./NoData-DxohvE4z.js";import"./IllustratedMessage-C5nGizD-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DCAxNV9P.js";import"./index-BQ2ppCag.js";import"./index-DvXTSSIA.js";import"./slim-arrow-down-CVGDx6dI.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./ListBoxItemGroupTemplate-CUULFd46.js";import"./ComboBoxItemGroup-3qNTHREe.js";import"./ListItemBaseTemplate-IHDN_xws.js";import"./Token-DIiTPAFv.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DChf4TnK.js";import"./ToggleButton-HnifA80u.js";import"./SuggestionItem-D3x38-wF.js";import"./index-1UGQ1AHt.js";import"./Option-DheRIPLY.js";import"./index-BoIm-xs6.js";import"./SegmentedButton-C-FghxIk.js";import"./index-eQnZgMgj.js";import"./Select-EZ5UJa2T.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-down-B3EB9Tld.js";import"./index-DGapjW98.js";import"./index-ZeQWpjUk.js";import"./index-BGapk1v_.js";import"./index-Bo5Q1SBc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DABH-sQq.js";import"./group-2-DEn7mrnO.js";import"./sort-descending-aDuCK_fE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxmDL6TA.js";import"./utils-Dlyy7SNs.js";import"./index-BO4Or_uB.js";import"./index-rmJF3f6R.js";import"./index-DsmxMPC1.js";import"./navigation-down-arrow-DKptDBWM.js";import"./navigation-right-arrow-CSc3hBqU.js";import"./navigation-right-arrow-CXkdEEUV.js";import"./useCurrentTheme-Bfgyh39P.js";import"./index-C9a6OsiH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1HgTxzEu.js";import"./paper-plane-B0eqfuay.js";import"./index-Dg2lsmGL.js";import"./less-BaBvLqfW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
