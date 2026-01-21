import{j as e}from"./iframe-DYduXZhN.js";import{useMDXComponents as i}from"./index-Ci2-DdjO.js";import{I as a,F as m}from"./CommandsAndQueries-B9zetcQ0.js";import{M as s,C as p}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import{C as l}from"./ControlsWithNote-zRR9InYP.js";import"./copy-CkIF2sdc.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-74PDq_gz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-DKd7eJ-2.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-YqJDFM.js";import"./delete-BhUVbshM.js";import"./settings-DiEqNda9.js";import"./NoData-fSQ8QY6w.js";import"./IllustratedMessage-GpqfpasN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B4kU78En.js";import"./index-Dkmz5osx.js";import"./index-DNLW7KKj.js";import"./slim-arrow-down-H6l6KWk5.js";import"./Input-DiOUIPji.js";import"./ResponsivePopoverCommon.css-5MnX9a2f.js";import"./ValueStateMessage.css-CRVtIysz.js";import"./Suggestions.css-BpvHNpy2.js";import"./ListBoxItemGroupTemplate-oWfZlc9k.js";import"./ComboBoxItemGroup-DKe0CAMl.js";import"./ListItemBaseTemplate-CAPQp5OP.js";import"./Token-DUgpBRII.js";import"./ScrollEnablement-D2gDebhQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9qFWIUAt.js";import"./ToggleButton-DR-nlpgN.js";import"./SuggestionItem-CItgEz1T.js";import"./index-CGtEX1sV.js";import"./Option-Bong0I0_.js";import"./index-BCAebvTY.js";import"./SegmentedButton-BeGYrA28.js";import"./index-DHZh-84u.js";import"./Select-B59U1EMA.js";import"./InvisibleMessage-CT9yNbI0.js";import"./slim-arrow-down-BYh391LH.js";import"./index-DyOJGLZJ.js";import"./index-DrTZRfXS.js";import"./index-O9rzWAvd.js";import"./index-CbCDMDkJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rv_pgNJ1.js";import"./group-2-BHhMM04u.js";import"./sort-descending-CmaZ1coo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mONp3tq9.js";import"./utils-BL2UvDbB.js";import"./index-DDCVZ4U5.js";import"./index-B3nHK15S.js";import"./index-DqaC_Ony.js";import"./navigation-down-arrow-0eA3UtLx.js";import"./navigation-right-arrow-0ntcsXEn.js";import"./navigation-right-arrow-CliMCU6T.js";import"./useCurrentTheme-DjznpaYd.js";import"./index-D6qhpAxp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRb5-qWs.js";import"./paper-plane-DqQwF7l0.js";import"./index-5cPAQ8_K.js";import"./less-EjJ2vttw.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
