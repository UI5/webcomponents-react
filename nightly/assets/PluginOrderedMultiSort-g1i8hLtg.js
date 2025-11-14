import{j as e}from"./iframe-C7IxwDmR.js";import{useMDXComponents as i}from"./index-CbSg1oVF.js";import{I as a,F as m}from"./CommandsAndQueries-D3KUBOYC.js";import{M as s,C as p}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import{C as l}from"./ControlsWithNote-C41TO-UY.js";import"./copy-D-VhlFxG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bd0C7vts.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChqHr5wK.js";import"./delete-BSl3wy38.js";import"./settings-DGhtyKkS.js";import"./NoData-ZmM9tZ25.js";import"./IllustratedMessage-D-WEWynv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1-g84_aS.js";import"./index-CscJ0cw_.js";import"./index-CwLFHpug.js";import"./slim-arrow-down-BNmOcvZN.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./ListBoxItemGroupTemplate-ic-gllq_.js";import"./ComboBoxItemGroup-BgqJcjSC.js";import"./ListItemBaseTemplate-CcnlE6Sk.js";import"./Token-_905z17c.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQaqKR0d.js";import"./ToggleButton-BufLqCEs.js";import"./SuggestionItem-CtttL5Nk.js";import"./index-7SdjD4wD.js";import"./Option-BM1N9G0j.js";import"./index-nWfCkMQS.js";import"./SegmentedButton-A3oHgqen.js";import"./index-DI3HfrFm.js";import"./Select-D4uOkSLO.js";import"./InvisibleMessage-3o-oW7oq.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./index-Bc14vZWb.js";import"./index-DOS93QAh.js";import"./index-CR6Z_Rhf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AZHZA8cU.js";import"./group-2-ZZFScIlf.js";import"./sort-descending-TOMxzf0j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CJRUeV6T.js";import"./utils-YyqGWE78.js";import"./index-DYQpLwRl.js";import"./index-RXV3LSnp.js";import"./index-CQqHvQDP.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./navigation-right-arrow-D52cg3R3.js";import"./navigation-right-arrow-WwNAbjqy.js";import"./useCurrentTheme-3HGEU4AP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4AmYoSs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDhHKcDh.js";import"./paper-plane-zbAKlJWW.js";import"./index-CSaUThvG.js";import"./less-GzasUkSp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
