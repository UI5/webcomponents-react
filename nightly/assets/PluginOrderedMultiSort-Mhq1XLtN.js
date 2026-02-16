import{j as e}from"./iframe-DD3khz8t.js";import{useMDXComponents as i}from"./index-CHFjnrWX.js";import{I as a,F as m}from"./CommandsAndQueries-DsVeZAZ7.js";import{M as s,C as p}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import{C as l}from"./ControlsWithNote-C2jaHriB.js";import"./copy-BSvcS0vC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-5_I1cyxV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--alj2jOK.js";import"./delete-Ct8xiXlx.js";import"./settings-B1teuJ2R.js";import"./NoData-DvZhvA8J.js";import"./IllustratedMessage-CShEbWRz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-6kBWV_FC.js";import"./index-Cj2HP5zh.js";import"./index-BRxYB2Dw.js";import"./slim-arrow-down-5-78CQg2.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./ListBoxItemGroupTemplate-CQk5fTJS.js";import"./ComboBoxItemGroup-TwWewYqC.js";import"./ListItemBaseTemplate-Dy5bCQYp.js";import"./Token-a3MWAMbv.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcQmaiD_.js";import"./ToggleButton-CSRLBrRn.js";import"./SuggestionItem-CBBezjnP.js";import"./index-D3LDGHoT.js";import"./Option-i4_4pLmE.js";import"./index-D02z_BNZ.js";import"./SegmentedButton-BGocngUd.js";import"./index-DNXbXPty.js";import"./Select-NIA1LFcO.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./slim-arrow-down-D0mEITot.js";import"./index-BITmfB0x.js";import"./index-myUsI4jx.js";import"./index-DquhQeMg.js";import"./index-CM02EC77.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3GrU4Ss.js";import"./group-2-1rPdh5F3.js";import"./sort-descending-DgjPPaFB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbBNQQRY.js";import"./utils-DdRAkXpa.js";import"./index-B_XYOqNE.js";import"./index-BIIPEOn-.js";import"./index-CDwMQpv5.js";import"./navigation-down-arrow-YqNslUL9.js";import"./navigation-right-arrow-CxeAemfg.js";import"./navigation-right-arrow-Bq-pkXdO.js";import"./useCurrentTheme-C2JP9KVd.js";import"./index-CT5LP0kS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CAOBRXTB.js";import"./paper-plane-CrMU2hg6.js";import"./index-C3tzgyPK.js";import"./less-CSsjRXW_.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
