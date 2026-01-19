import{j as e}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as i}from"./index-CiFONtpN.js";import{I as a,F as m}from"./CommandsAndQueries-3p6jyLf7.js";import{M as s,C as p}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import{C as l}from"./ControlsWithNote-BsUrkrIt.js";import"./copy-ButtKxyE.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CsIPtkrn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQJSAvK6.js";import"./delete-B6O2JaIS.js";import"./settings-SpDQw2Vq.js";import"./NoData-bysabFUy.js";import"./IllustratedMessage-CUeEBz-a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-8dbC-gN_.js";import"./index-ot_Vs5SX.js";import"./index-DdRBnYSU.js";import"./slim-arrow-down-KrTHML7Y.js";import"./Input-3AAsME8j.js";import"./ResponsivePopoverCommon.css-4GPhK6Ks.js";import"./ValueStateMessage.css-y9BzQC21.js";import"./Suggestions.css-E_zTpNLY.js";import"./ListBoxItemGroupTemplate-CWaB1uAI.js";import"./ComboBoxItemGroup-CvF6QpNn.js";import"./ListItemBaseTemplate-BrUrTP7s.js";import"./Token-B_03GxpZ.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DnUU-rKN.js";import"./ToggleButton-B0JQSluf.js";import"./SuggestionItem-7QP2JsqC.js";import"./index-D2O8IK0Y.js";import"./Option-C-i06TU1.js";import"./index-D-wDCcJv.js";import"./SegmentedButton-Cj4a5li5.js";import"./index-BpQt2xX8.js";import"./Select-xEHU_Jve.js";import"./InvisibleMessage-Cry_VVZD.js";import"./slim-arrow-down-BVAuIuoE.js";import"./index-CVglYbsF.js";import"./index-C9CUNSTS.js";import"./index-DdDzQOK5.js";import"./index-DrrvpZW3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTW5WVB_.js";import"./group-2-r-nrfnRe.js";import"./sort-descending-klOkrTUA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De8BjJaL.js";import"./utils-fPRKtnar.js";import"./index-DLgRUgqV.js";import"./index-D7n88VO3.js";import"./index-Dzq4A1VN.js";import"./navigation-down-arrow-C_PatvXC.js";import"./navigation-right-arrow-BWvpLWqD.js";import"./navigation-right-arrow-8E2izI9D.js";import"./useCurrentTheme-DWIF38NU.js";import"./index-Dk1eqQ67.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQbatNcW.js";import"./paper-plane-J4zNAVa6.js";import"./index-CpwJUAOc.js";import"./less-D6dTBaBl.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
