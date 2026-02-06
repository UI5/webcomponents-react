import{j as e}from"./iframe-CptD6jcI.js";import{useMDXComponents as i}from"./index-fCXI9bYA.js";import{I as a,F as m}from"./CommandsAndQueries-DdKyoCdZ.js";import{M as s,C as p}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import{C as l}from"./ControlsWithNote-e4fYtvzI.js";import"./copy-B9_rc4hl.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-v-kHc7hB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./index-DF7XtlGw.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_nfci7qO.js";import"./delete-CqONTPqs.js";import"./settings-DF-HP63C.js";import"./NoData-BQSzbPps.js";import"./IllustratedMessage-CgDjDEGv.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-hamlRjSE.js";import"./index-BD9r_une.js";import"./index-B60KVWKq.js";import"./slim-arrow-down-CjyrJWSM.js";import"./Input-uZgu1ujO.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./Suggestions.css-B1EVfhUM.js";import"./ListBoxItemGroupTemplate-BdVPyN1a.js";import"./ComboBoxItemGroup-DQ9b49px.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./Token-DpzwIFjG.js";import"./ScrollEnablement-DsrN78gg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYou9xin.js";import"./ToggleButton-BYYpa0_F.js";import"./SuggestionItem-C3L5PqbA.js";import"./index-Dah3OHlr.js";import"./Option-B6yV-Jjr.js";import"./index-C08PuBfi.js";import"./SegmentedButton-DLbXClyD.js";import"./index-BXswR0kA.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./index-Ci5kiTSu.js";import"./index-DbSLMhUs.js";import"./index-CTEd5I50.js";import"./index-BEEcV9zs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIq8q0V6.js";import"./group-2-CTSXlyDl.js";import"./sort-descending-D9jCbvYd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B0X8RYMV.js";import"./utils-gfG7vEZf.js";import"./index-CQoZ2SPB.js";import"./index-C5BgkxDg.js";import"./index-WVMq7O5Z.js";import"./navigation-down-arrow-DIeKF41M.js";import"./navigation-right-arrow-De_U2AQE.js";import"./navigation-right-arrow-DmOKdOeg.js";import"./useCurrentTheme-57gAgJUu.js";import"./index-uc7d53g3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TxWHwyVI.js";import"./paper-plane-DAA1Wpfz.js";import"./index-O4n5RQLI.js";import"./less-C9e-TmeG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
