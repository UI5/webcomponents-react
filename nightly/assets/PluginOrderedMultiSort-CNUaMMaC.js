import{j as e}from"./iframe-9L5DfdAL.js";import{useMDXComponents as i}from"./index-BFOQlGJl.js";import{I as a,F as m}from"./CommandsAndQueries-BK-K5RhD.js";import{M as s,C as p}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import{C as l}from"./ControlsWithNote-vZ9K-DEl.js";import"./copy-B4o5kCyp.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D3bL7dyl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XNM9FnGm.js";import"./delete-JR2MZRfb.js";import"./settings-DxBIqKBm.js";import"./NoData-3ZcUB5Ct.js";import"./IllustratedMessage-BEdS4qmU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C91Oik-m.js";import"./index-LeKCpS7q.js";import"./index-sAVTaYY-.js";import"./slim-arrow-down-DMCTeiC5.js";import"./Input-B_a4lk-J.js";import"./ResponsivePopoverCommon.css-DR2BAcH9.js";import"./ValueStateMessage.css-BbD6Vd04.js";import"./Suggestions.css-DgOg4FzN.js";import"./ListBoxItemGroupTemplate-QimfEu9Q.js";import"./ComboBoxItemGroup-D4VMzcBc.js";import"./ListItemBaseTemplate-CAeeqms4.js";import"./Token-sTVAKlsR.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-G_TCf98J.js";import"./ToggleButton-5xA1-SjB.js";import"./SuggestionItem-66Xrv75f.js";import"./index-DGOHxSTi.js";import"./Option-B5eqm6lt.js";import"./index-DD-YT-Yv.js";import"./SegmentedButton-C06xcamZ.js";import"./index-BSqaxHhQ.js";import"./Select-Bf3hq0iL.js";import"./InvisibleMessage-BFzkQW2o.js";import"./slim-arrow-down-CVQcjJXq.js";import"./index-BR-9eyJZ.js";import"./index-BNu0C3GX.js";import"./index-BHRZrxSX.js";import"./index-DFno4m6x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZHCNsIg.js";import"./group-2-BksPNJTz.js";import"./sort-descending-vwUdYYI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1B6dX5C.js";import"./utils--MAnWLXj.js";import"./index-DNleTpkO.js";import"./index-DiSDR8FZ.js";import"./index-8UpyXoAN.js";import"./navigation-down-arrow-DejdbZn2.js";import"./navigation-right-arrow-D8pf5Giz.js";import"./navigation-right-arrow-Dr_s8HRL.js";import"./useCurrentTheme-zSdIFJxn.js";import"./index-CjDsuZ3a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZKijWM3.js";import"./paper-plane-BmU2Eq9f.js";import"./index-OapWeUnp.js";import"./less-Coam-0fQ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
