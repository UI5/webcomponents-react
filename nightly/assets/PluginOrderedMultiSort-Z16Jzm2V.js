import{j as e}from"./iframe-D_U86qCv.js";import{useMDXComponents as i}from"./index-Bg9tEBEE.js";import{I as a,F as m}from"./CommandsAndQueries-TugN8T6l.js";import{M as s,C as p}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import{C as l}from"./ControlsWithNote-D5S_Midd.js";import"./copy-Crjp4Ac1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DRRPD7pH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./index-WEtnzuU5.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXaLMGH1.js";import"./delete-C65oQeOP.js";import"./settings-DvNN523n.js";import"./NoData-Btj1TuE6.js";import"./IllustratedMessage-C4Y-hPy7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BCXv8K85.js";import"./index-BUDr-hLX.js";import"./index-Bf2DNKb6.js";import"./slim-arrow-down-B1jwB_te.js";import"./Input-CTjAUWZQ.js";import"./ResponsivePopoverCommon.css-C8oO5Lyh.js";import"./ValueStateMessage.css-D9qc5lXt.js";import"./Suggestions.css-DEpz1xYL.js";import"./ListBoxItemGroupTemplate-5NLZSPWt.js";import"./ComboBoxItemGroup--dcncB9c.js";import"./ListItemBaseTemplate-mePDBDU1.js";import"./Token-dW6lMRFw.js";import"./ScrollEnablement-Bn4R2vMs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BF_-X6-h.js";import"./ToggleButton-C4w5EmKQ.js";import"./SuggestionItem-BOJBp7v0.js";import"./index-CCRGNalr.js";import"./Option-CpNbPgV2.js";import"./index-C1qDCxNA.js";import"./SegmentedButton-Bsj8EgI0.js";import"./index-B88wz0zx.js";import"./Select-akqe93gn.js";import"./InvisibleMessage-9g7oEz5f.js";import"./slim-arrow-down-DuNkCtSe.js";import"./index-T9m1HJoc.js";import"./index-Bm-mIndo.js";import"./index-DR6xeV5u.js";import"./index-D3NSTpXZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dl4bKezQ.js";import"./group-2-CRRiEe8O.js";import"./sort-descending-BsGiYaME.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYjXc6T7.js";import"./utils-PdXjpojR.js";import"./index-D2qUqIHh.js";import"./index-MdW3w5l9.js";import"./index-BsoVNeMU.js";import"./navigation-down-arrow-044as9EH.js";import"./navigation-right-arrow-5uKL9NHQ.js";import"./navigation-right-arrow-yNY1bh5s.js";import"./useCurrentTheme-Bhf-1e6-.js";import"./index-DUww4q61.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sMcBz9Ie.js";import"./paper-plane-DE2vkKLc.js";import"./index-D-Hqwhy7.js";import"./less-CRStbIYd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
