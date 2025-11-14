import{j as e}from"./iframe-4qrVzB25.js";import{useMDXComponents as i}from"./index-C23NGFAV.js";import{I as a,F as m}from"./CommandsAndQueries-C8f_O47Z.js";import{M as s,C as p}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import{C as l}from"./ControlsWithNote-BYEE2MCW.js";import"./copy-BwZFHKgv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BGtl3UB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dpm6wpGO.js";import"./delete-DFB2rKcT.js";import"./settings-P1Tu1UA2.js";import"./NoData-CAyhgKIF.js";import"./IllustratedMessage-MSluXbw5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C7v7m6d5.js";import"./index-D7O6U1BC.js";import"./index-D-c-emv0.js";import"./slim-arrow-down-CXefVYMG.js";import"./Input-DCZqkJuY.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./Suggestions.css-DkwtHK1N.js";import"./ListBoxItemGroupTemplate-Dx7ZVMwg.js";import"./ComboBoxItemGroup-CTcw46H9.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Token-CIWwMwgE.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ToggleButton-CVx_cCdy.js";import"./SuggestionItem-CjsbBv9j.js";import"./index-8zB2ZRqP.js";import"./Option-C10NqIPh.js";import"./index-CueD1sBZ.js";import"./SegmentedButton-D30KObWP.js";import"./index-3QlNC4k-.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./index-DkDmb4j6.js";import"./index-q8cedDhq.js";import"./index-CC5rZlHP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dr0RP3gS.js";import"./group-2-CpBQCdfq.js";import"./sort-descending-BuPBBBgN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BxTTaJg9.js";import"./utils-B9_JuoKt.js";import"./index-uGUHJIW2.js";import"./index-DPoSKLzi.js";import"./index-DuUIqk7w.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./useCurrentTheme-7TOMGYM8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DDFYNMIL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0uHFjA1.js";import"./paper-plane-ylHW1ldh.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
