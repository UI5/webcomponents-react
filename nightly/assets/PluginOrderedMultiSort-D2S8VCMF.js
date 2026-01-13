import{j as e}from"./iframe-BiIJdVyr.js";import{useMDXComponents as i}from"./index--rLY9036.js";import{I as a,F as m}from"./CommandsAndQueries-D08-AnOE.js";import{M as s,C as p}from"./blocks-BFHpLm1y.js";import"./Tag-Bq1oXArm.js";import"./index-e3YpZRrx.js";import{C as l}from"./ControlsWithNote-BjTqfsnP.js";import"./copy-BPqkJYr8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BcEQ8L2G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./index-Dh7QOf24.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BKcuFWs0.js";import"./delete-DU5JPvil.js";import"./settings-CAMQwqmo.js";import"./NoData-CS9d_T0F.js";import"./IllustratedMessage-DUoAl3Os.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dhw3wtOK.js";import"./index-BrXkRr4R.js";import"./index-B_5Bk2gc.js";import"./slim-arrow-down-SFAyp675.js";import"./Input-DGQILfbB.js";import"./ResponsivePopoverCommon.css-DHGIMiJp.js";import"./ValueStateMessage.css-BxEbM0ZH.js";import"./Suggestions.css-BMP_MqwS.js";import"./ListBoxItemGroupTemplate-DIeTn5uD.js";import"./ComboBoxItemGroup-zJxojY-y.js";import"./ListItemBaseTemplate-BNaOpv56.js";import"./Token-B7UTvzfg.js";import"./ScrollEnablement-elkrwhQK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ch3b8ATr.js";import"./ToggleButton-C3ZCJHYy.js";import"./SuggestionItem-S-IdKs5T.js";import"./index-BzcV6bM9.js";import"./Option-Cz8g5WWG.js";import"./index-CMaWI52k.js";import"./SegmentedButton-B381Bdph.js";import"./index-Ckl4FRii.js";import"./Select-C-GaGD0T.js";import"./InvisibleMessage-B6Ycx_Pm.js";import"./slim-arrow-down-BYajRtDR.js";import"./index-BfmQkxfZ.js";import"./index-CpUxheOc.js";import"./index-CMdYQA8p.js";import"./index-BzF6Y4F3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPTMokL8.js";import"./group-2-04jHDyvg.js";import"./sort-descending-Og-hQ95c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gpTxbnHr.js";import"./utils-DhSRaKWy.js";import"./index-jP1C0Meo.js";import"./index-DQqc6G4F.js";import"./index-DQIER8Qr.js";import"./navigation-down-arrow-CM77MDkP.js";import"./navigation-right-arrow-DuT2Agvz.js";import"./navigation-right-arrow-FD0mFBSd.js";import"./useCurrentTheme-DHGbHcPn.js";import"./index-BTuni5mo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-J8i0PIKg.js";import"./paper-plane-SEQuxJaq.js";import"./index-BRiU5eaI.js";import"./less-CwBaSYHB.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
