import{j as e}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as i}from"./index-BPvgxWCZ.js";import{I as a,F as m}from"./CommandsAndQueries-Q6uRMqWv.js";import{M as s,C as p}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import{C as l}from"./ControlsWithNote-DgPjGzi5.js";import"./copy-C1tv-pSG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DXu8cpTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CDBgji9G.js";import"./delete-B3tuR7-p.js";import"./settings-D5gHcoOg.js";import"./NoData-D9ka5VCC.js";import"./IllustratedMessage-BJKH4F_T.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DEpwK6Ta.js";import"./index-DTKzGQ6P.js";import"./index-CsB4ym8b.js";import"./slim-arrow-down-BzVC3qLM.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./ListBoxItemGroupTemplate-i04jvwvt.js";import"./ComboBoxItemGroup-35_A61aK.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./Token-DavucC3B.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOEa2jCy.js";import"./ToggleButton-DUnpLraq.js";import"./SuggestionItem-cFLHLZrB.js";import"./index-CqtNJPl5.js";import"./Option-KMv42Mqm.js";import"./index-Ca9erLwf.js";import"./SegmentedButton-BR2WkUo4.js";import"./index-Dq1tb5Fi.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./index-DeNJuL6H.js";import"./index-Jqh8kZ4Z.js";import"./index-SAfhucJr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mXBC9qtL.js";import"./group-2-C1w6MKqp.js";import"./sort-descending-D7Gnpxkd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-e_OfuZeF.js";import"./utils-B0P9OHGE.js";import"./index-ntbAsQ4L.js";import"./index-DYX22vMe.js";import"./index-BH2TLEnM.js";import"./navigation-down-arrow-BNouF3FU.js";import"./navigation-right-arrow-CwzVtkMG.js";import"./navigation-right-arrow-BWpP7Omt.js";import"./useCurrentTheme-C1kqmVty.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BtJSqTjG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRx_4vwg.js";import"./paper-plane-B06jmj5a.js";import"./index-Ch7LJGDA.js";import"./less-Dzjv4OdC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
