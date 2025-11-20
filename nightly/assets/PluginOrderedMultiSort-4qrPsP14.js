import{j as e}from"./iframe-DXIHBwMx.js";import{useMDXComponents as i}from"./index-DxplZHhB.js";import{I as a,F as m}from"./CommandsAndQueries-Bq7v73lL.js";import{M as s,C as p}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import{C as l}from"./ControlsWithNote-C_Gk4SYm.js";import"./copy-yrZW5TrM.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dl31wauj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8OeK81d.js";import"./delete-C-OqTYsp.js";import"./settings-VW8oUHKP.js";import"./NoData-BFUXMVZV.js";import"./IllustratedMessage-CWu0Y4jx.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bp86e7JW.js";import"./index-CtFtlX5A.js";import"./index-DIbDvrTC.js";import"./slim-arrow-down-CMiqRMch.js";import"./Input-DKRggLIE.js";import"./ResponsivePopoverCommon.css-IT2s9x-e.js";import"./ValueStateMessage.css-BSBeeufO.js";import"./Suggestions.css-0mCo8ev-.js";import"./ListBoxItemGroupTemplate-CqnuO2NN.js";import"./ComboBoxItemGroup-DdSoCWpT.js";import"./ListItemBaseTemplate-BNMak7oT.js";import"./Token-DjZ5IwOr.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BA8y93oi.js";import"./ToggleButton-CctemxJS.js";import"./SuggestionItem-BgT2Te5p.js";import"./index-CGQFU_4D.js";import"./Option-CvKMeDMq.js";import"./index-qj4c4wBb.js";import"./SegmentedButton-D-tRNffC.js";import"./index-DcWs1wPd.js";import"./Select-CGo-0QVC.js";import"./InvisibleMessage-Baq9lBY3.js";import"./slim-arrow-down-CTJD6opM.js";import"./index-wL-q4Fof.js";import"./index-kVbMjwdW.js";import"./index-ztofxTu6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqeorvhQ.js";import"./group-2-CbYCsJdZ.js";import"./sort-descending-Du_3xiim.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-uQRkwGba.js";import"./utils-CpTj5Wev.js";import"./index-Ltqvt3ql.js";import"./index-Bp-ixfoG.js";import"./index-DeY_iIAn.js";import"./navigation-down-arrow-tTyMgTsU.js";import"./navigation-right-arrow-3RPrvjsM.js";import"./navigation-right-arrow-Cp4Bs5Ws.js";import"./useCurrentTheme-DTBV76rd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-MOF2JPzV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B3qUjlQu.js";import"./paper-plane-CySSYvuC.js";import"./index-Cz8FWMC8.js";import"./less-CtdFYUXb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
