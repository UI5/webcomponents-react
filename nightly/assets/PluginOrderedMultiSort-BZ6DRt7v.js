import{j as e}from"./iframe-DT5KgGlD.js";import{useMDXComponents as i}from"./index-2sr9OpVj.js";import{I as a,F as m}from"./CommandsAndQueries-DUx0SL0h.js";import{M as s,C as p}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import{C as l}from"./ControlsWithNote-B7qXyXG8.js";import"./copy-Cn_--9_F.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CsveTDJU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./index-DyR_rB-Y.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWKoSmBW.js";import"./delete-CohcJEgP.js";import"./settings-BewuPKdX.js";import"./NoData-DltE47q7.js";import"./IllustratedMessage-BawN7Wqr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DgTqDT0D.js";import"./index-BJ6ykXKR.js";import"./index-B8f0YgKC.js";import"./slim-arrow-down-BCtN8SJB.js";import"./Input-I-AKHfs1.js";import"./ResponsivePopoverCommon.css-BPBhFUbf.js";import"./ValueStateMessage.css-BGYmnVw2.js";import"./Suggestions.css-DA2UVS5X.js";import"./ListBoxItemGroupTemplate-Cd3zTBbN.js";import"./ComboBoxItemGroup-BpsJm26p.js";import"./ListItemBaseTemplate-C16Cppj1.js";import"./Token-DlKQA3E2.js";import"./ScrollEnablement-CAbtfiLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-pC6bfYbG.js";import"./ToggleButton-BsvGKjKP.js";import"./SuggestionItem-Be5m2pdi.js";import"./index-BxTPhBvm.js";import"./Option-D0YYNVbE.js";import"./index-CK2Bq9ni.js";import"./SegmentedButton-CSjW8EsR.js";import"./index-JEQwvvE3.js";import"./Select-BWRVl5xO.js";import"./InvisibleMessage-Bxlb59Q-.js";import"./slim-arrow-down-CJxt2IBk.js";import"./index-BZK44fn8.js";import"./index-Cvxmvmd5.js";import"./index-1OsylIRz.js";import"./index-CyPn5paG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqCcIIbC.js";import"./group-2-k0-NGrpU.js";import"./sort-descending-CGv5TfNy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DIGppw86.js";import"./utils-D33GDmvH.js";import"./index-Cod7H4Q4.js";import"./index-DuzRGPxi.js";import"./index-CdxdX8AI.js";import"./navigation-down-arrow-CfkoPZ7s.js";import"./navigation-right-arrow-qrJ8C8QD.js";import"./navigation-right-arrow-D4lDQVr2.js";import"./useCurrentTheme-DaZyrile.js";import"./index-z1-YLvBX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ngYbJf9G.js";import"./paper-plane-K2_yiYx7.js";import"./index-_z6JI7Dv.js";import"./less-BJWr5WMr.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
