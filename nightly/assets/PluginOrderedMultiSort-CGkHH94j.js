import{j as e}from"./iframe-BBfeQq2L.js";import{useMDXComponents as i}from"./index-D1XkxxyM.js";import{I as a,F as m}from"./CommandsAndQueries-Buygq3eA.js";import{M as s,C as p}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import{C as l}from"./ControlsWithNote-CYbnvQ9W.js";import"./copy-2iUWozfp.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BWy92f_G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du-GvtWn.js";import"./delete-Bvqg6jRy.js";import"./settings-CoYY_8Uh.js";import"./NoData-Bx94Sh8i.js";import"./IllustratedMessage-D9IVoDdQ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkIkTlkv.js";import"./index-DJJ3Mees.js";import"./index-BxeXPALZ.js";import"./slim-arrow-down-CZafjPQk.js";import"./Input-CXTPtpQ2.js";import"./ResponsivePopoverCommon.css-DWkfvrPv.js";import"./ValueStateMessage.css-tsSH4zXZ.js";import"./Suggestions.css-DDtKdDf5.js";import"./ListBoxItemGroupTemplate-BpOyUqn0.js";import"./ComboBoxItemGroup-CIzD3AVu.js";import"./ListItemBaseTemplate-TueecYK6.js";import"./Token-D2mMU1OG.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DyAEHiEu.js";import"./ToggleButton-D1DyhgK8.js";import"./SuggestionItem-BSBNfTEA.js";import"./index-Dj7DMCO5.js";import"./Option-CxAkegRU.js";import"./index-CWaD9nCK.js";import"./SegmentedButton--qutgauv.js";import"./index-Br3gWTFO.js";import"./Select-sqbuPb4m.js";import"./InvisibleMessage-CbEE0DqC.js";import"./slim-arrow-down-CZnzPpuX.js";import"./index-BEyFh1jo.js";import"./index-WkSHIfIf.js";import"./index-CU_KTR9v.js";import"./index-BHxHZDh8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3ZbZrr0.js";import"./group-2-D8MWVKUe.js";import"./sort-descending-No_uql7a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BPqEcmGG.js";import"./utils-CH402oqk.js";import"./index-e3s8xMkM.js";import"./index-DVRLVrIq.js";import"./index-C6Czb7vs.js";import"./navigation-down-arrow-DVtVCKgG.js";import"./navigation-right-arrow-BMpAHwE7.js";import"./navigation-right-arrow-BdeAmP2r.js";import"./useCurrentTheme-UAcQ55vR.js";import"./index-Cvb15Oog.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T4YkLvpZ.js";import"./paper-plane-CuWPWZ2a.js";import"./index-BsfHMYWW.js";import"./less-Y04PrZ-G.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
