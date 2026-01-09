import{j as e}from"./iframe-DfIU3iRi.js";import{useMDXComponents as i}from"./index-BAUWkqwx.js";import{I as a,F as m}from"./CommandsAndQueries-CCvlfqZe.js";import{M as s,C as p}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import{C as l}from"./ControlsWithNote-D4Nv_2bn.js";import"./copy-C8IsFnQF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ByNHvu_e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./index-DeDDTWfB.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-KGpbhBBx.js";import"./delete-8D9Xq0f6.js";import"./settings-BAe5CL2m.js";import"./NoData-CxWdAvqb.js";import"./IllustratedMessage-Bd_r2vYm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-m6ySQsFp.js";import"./index-BG5NLI_b.js";import"./index-B19xXjjm.js";import"./slim-arrow-down-Bb-YtPMU.js";import"./Input-CqjsZhK9.js";import"./ResponsivePopoverCommon.css-Cy1wPIS3.js";import"./ValueStateMessage.css-BAxRfhDW.js";import"./Suggestions.css-DueDNo8O.js";import"./ListBoxItemGroupTemplate-BTtpw6gO.js";import"./ComboBoxItemGroup-DWq0dbqq.js";import"./ListItemBaseTemplate-DI00QP8t.js";import"./Token-Nuc1IURe.js";import"./ScrollEnablement-aPqXwvy5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhaZK_FW.js";import"./ToggleButton-Ch3-84nC.js";import"./SuggestionItem-BSPqvPH_.js";import"./index-CBK8lcqF.js";import"./Option-FqdINU15.js";import"./index-Dn2WB7u1.js";import"./SegmentedButton-1X7EzAS8.js";import"./index-jyVCXScg.js";import"./Select-CiT-nASS.js";import"./InvisibleMessage-7vjgfI66.js";import"./slim-arrow-down-DX1xgdpR.js";import"./index-l4yRj4An.js";import"./index-Cx3lK-My.js";import"./index-CGx2oPX9.js";import"./index-DOZNbDJp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2G-MzG.js";import"./group-2-fP7CGRh_.js";import"./sort-descending-pMOdjws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5yWugzz.js";import"./utils-CLitdEJM.js";import"./index-D2jxXTUw.js";import"./index-Be52d92g.js";import"./index-CZUYrYNt.js";import"./navigation-down-arrow-CENkI8Ff.js";import"./navigation-right-arrow-Dmj1kZCH.js";import"./navigation-right-arrow-CxtfgXb_.js";import"./useCurrentTheme-Ci0pxYcB.js";import"./index-CGK5XLKa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiwRRP9a.js";import"./paper-plane-CAQIfZrW.js";import"./index-C_6378zF.js";import"./less-DoffisFq.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
