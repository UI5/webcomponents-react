import{j as e}from"./iframe-DwrbX4RV.js";import{useMDXComponents as i}from"./index-DEV0fT-3.js";import{I as a,F as m}from"./CommandsAndQueries-33-9TCX1.js";import{M as s,C as p}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import{C as l}from"./ControlsWithNote-IYpGQfhJ.js";import"./copy-ZcGBB0nX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BPiexnty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-DLV46EWe.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHDvawwA.js";import"./delete-DcD4HBZQ.js";import"./settings-BXd4XT-i.js";import"./NoData-ByibTLi_.js";import"./IllustratedMessage-BP4eByRs.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-pczX_0-g.js";import"./index-CiWbQ0SX.js";import"./index-CaEHNGDh.js";import"./slim-arrow-down-D3ZsDLwh.js";import"./Input-DKlTLujy.js";import"./ResponsivePopoverCommon.css-C8r5-0tw.js";import"./ValueStateMessage.css-CdZTGBs2.js";import"./Suggestions.css-BXr49NFJ.js";import"./ListBoxItemGroupTemplate-Dzl2p6m5.js";import"./ComboBoxItemGroup-BSFvIoMS.js";import"./ListItemBaseTemplate-D7oB3m3T.js";import"./Token-Bx9MLKqg.js";import"./ScrollEnablement-CYy8a9iX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C7C_LUm1.js";import"./ToggleButton-BMmF2FMi.js";import"./SuggestionItem-DkdM06SJ.js";import"./index-BhGwaRmh.js";import"./Option-B-khv2Jb.js";import"./index-Bh6MarsA.js";import"./SegmentedButton-DJ9UBm4v.js";import"./index-DfbaGbYm.js";import"./Select-XgkwJ3ZO.js";import"./InvisibleMessage-bGcdvgGE.js";import"./slim-arrow-down-Bun6gyze.js";import"./index-CPtCfy3E.js";import"./index-KseHHLyP.js";import"./index-CooYNUmQ.js";import"./index-Djuxy3lm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DS1aWjfv.js";import"./group-2-CDQM5C56.js";import"./sort-descending-YAOaWHCt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DINgmDQf.js";import"./utils-Df-GzOhH.js";import"./index-BaDEpd7H.js";import"./index-B93zIJEs.js";import"./index-B99IvkHX.js";import"./navigation-down-arrow-Bf5qo7Su.js";import"./navigation-right-arrow-CK6e15pE.js";import"./navigation-right-arrow-WgjRwqCg.js";import"./useCurrentTheme-D7Gurzqj.js";import"./index-CSxQ_278.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBK1p3l_.js";import"./paper-plane-BgIVbC40.js";import"./index-DQlMDjQF.js";import"./less-DvuWw9NE.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
