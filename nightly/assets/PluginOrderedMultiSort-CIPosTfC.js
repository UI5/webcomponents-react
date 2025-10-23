import{j as e}from"./iframe-Caxtdkba.js";import{useMDXComponents as i}from"./index-DHHkTN_-.js";import{I as a,F as m}from"./CommandsAndQueries-BOspo6oR.js";import{M as s,C as p}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import{C as l}from"./ControlsWithNote-mHYe6I8P.js";import"./copy-Cm-UF3e8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C2Zc33aG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJfJ5RYR.js";import"./delete-DOCQmW93.js";import"./settings-DpGsKXDA.js";import"./NoData-d0MQisZ4.js";import"./IllustratedMessage-BBsMwhuB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DUeNSHji.js";import"./index-JXLLmO3L.js";import"./index-BYb3crn-.js";import"./slim-arrow-down-BkDq8Vwz.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./ListBoxItemGroupTemplate-BW85OpbI.js";import"./ComboBoxItemGroup-BQ3_Q8de.js";import"./ListItemBaseTemplate-BQxOqWbZ.js";import"./Token-5HJMpSXf.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqNCSywV.js";import"./ToggleButton-C6WMbDLb.js";import"./SuggestionItem-DUIHP02k.js";import"./index-CHZgJlEv.js";import"./Option-C3rQLOa9.js";import"./index-feJ7vEoL.js";import"./SegmentedButton-vU2qNGQ4.js";import"./index-P9r5CdKp.js";import"./Select-mLNSxhym.js";import"./InvisibleMessage-cd3uS02O.js";import"./slim-arrow-down-C8iSa2f2.js";import"./index-NXjyPYYS.js";import"./index-Duo5A0v-.js";import"./index-DulQB3X1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B7qF2DKQ.js";import"./group-2-Bj0PGwVo.js";import"./sort-descending-Cot-3-zz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeI_-Pkx.js";import"./utils-D5L0CqRc.js";import"./index-CAxK_BaB.js";import"./index-BDr19BLg.js";import"./index-BcL5_vtY.js";import"./navigation-down-arrow-rxWIaO6B.js";import"./navigation-right-arrow-BFr-7gTd.js";import"./navigation-right-arrow-bvuYFyRE.js";import"./useCurrentTheme-CfsQm3Rx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfKve24a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./paper-plane-F06gAmny.js";import"./index-BcF_Hj2S.js";import"./less-BdZt1fch.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
