import{j as e}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as i}from"./index-tu9Knfll.js";import{I as a,F as m}from"./CommandsAndQueries-CbObYkDi.js";import{M as s,C as p}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import{C as l}from"./ControlsWithNote-w7aNvimh.js";import"./copy-CAppfZ8d.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CB5kiAXk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoKMtFET.js";import"./delete-DYVw-TY0.js";import"./settings-D9nwGkWC.js";import"./NoData-DdHsrTKm.js";import"./IllustratedMessage-D0_ymalv.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Be1vXVQP.js";import"./index-Cw8YfcTi.js";import"./index-CV7e3qnP.js";import"./slim-arrow-down-Bhl2nWte.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./ListBoxItemGroupTemplate-CDN4ALTG.js";import"./ComboBoxItemGroup-BH5B9cpG.js";import"./ListItemBaseTemplate-D1uFrlaA.js";import"./Token-D4TeWFku.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CshbuJzo.js";import"./ToggleButton-CwHG-y71.js";import"./SuggestionItem-DGN5b14S.js";import"./index-RBLRU_sl.js";import"./Option-BbQCz44h.js";import"./index-BOCJCl5X.js";import"./SegmentedButton-oliJxwDI.js";import"./index-ECWd-FKG.js";import"./Select-BLczAWPe.js";import"./InvisibleMessage-CNnUIwgG.js";import"./slim-arrow-down-yzUP4cof.js";import"./index-CAlOL0VM.js";import"./index-CQE4zKbm.js";import"./index-CZ2dIko2.js";import"./index-DzevBiS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkMKr1H-.js";import"./group-2-CaiuqVlS.js";import"./sort-descending-BRpdcvqz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSnTmES7.js";import"./utils-ZLpPM_1a.js";import"./index-DQM6KvvS.js";import"./index-CRmrR_Od.js";import"./index-CTOZYk49.js";import"./navigation-down-arrow-BTOOMHmS.js";import"./navigation-right-arrow-DEKgAHUd.js";import"./navigation-right-arrow-DZaHUhdt.js";import"./useCurrentTheme-DGG68oxl.js";import"./index-gcgg4h2j.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXblpA9j.js";import"./paper-plane-DDMey8sA.js";import"./index-D8AaX0Z0.js";import"./less-D2q1q7Ef.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
