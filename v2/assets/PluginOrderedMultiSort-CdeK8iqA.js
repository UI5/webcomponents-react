import{j as e}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as i}from"./index-Jmw_4WZV.js";import{I as a,F as m}from"./CommandsAndQueries--8Ahr2u6.js";import{M as s,C as p}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import{C as l}from"./ControlsWithNote-DsI0yJ_c.js";import"./copy-ClXhTaxL.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Ht4knFBz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChpzPnnO.js";import"./delete-Beu8r6My.js";import"./settings-Dn0qBLrS.js";import"./NoData-BwUfHrNt.js";import"./IllustratedMessage-C-QtCxtL.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BUAL9oDt.js";import"./index-BSpwtDKe.js";import"./index-BuvC0M-2.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./Input-JgLWPqs-.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Suggestions.css-Bo7BTCq0.js";import"./ListBoxItemGroupTemplate-DYBBvmjW.js";import"./ComboBoxItemGroup-GSLjChX5.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ToggleButton-BoN4zM_f.js";import"./SuggestionItem-Q9aDeKXU.js";import"./index-BiABfjFg.js";import"./Option-DuXsqB-8.js";import"./index-BkLLS0et.js";import"./SegmentedButton-DG8OWpoN.js";import"./index-BMYFXn7k.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./index-9dO3MOwO.js";import"./index-gTiCTT3s.js";import"./index-B3Nrx_1A.js";import"./index-DPn7F17k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2YL6UwO.js";import"./group-2-Cc5epAxT.js";import"./sort-descending-D2YRXcwA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-T6nX1J1_.js";import"./utils-bX0sVF0D.js";import"./index-C4Nrf8Fs.js";import"./index-DCa9DW1g.js";import"./index-BNd5VGZF.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./navigation-right-arrow-BTmzxXYG.js";import"./navigation-right-arrow-tS4kh4In.js";import"./useCurrentTheme-tZZyzKNX.js";import"./index-Dp40BlFP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7MijIiv.js";import"./paper-plane-CxysScsd.js";import"./index-CDd3hI5e.js";import"./less-zKOuQtTY.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
