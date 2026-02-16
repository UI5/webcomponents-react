import{j as e}from"./iframe-JQDqhQTc.js";import{useMDXComponents as i}from"./index-SjG54pW2.js";import{I as a,F as m}from"./CommandsAndQueries-Crv-3Mfa.js";import{M as s,C as p}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import{C as l}from"./ControlsWithNote-gPJQaIcm.js";import"./copy-t9TmEwA0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-HEUlY7W4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fCo2PB5C.js";import"./delete-CLRGeIuZ.js";import"./settings-H07MeRfs.js";import"./NoData-DPeONLDW.js";import"./IllustratedMessage-DAIw2KHQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-1p37yV.js";import"./index-DirchfVR.js";import"./index-D6Ko23ug.js";import"./slim-arrow-down-DtGaajwt.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./ListBoxItemGroupTemplate-DEm09n7m.js";import"./ComboBoxItemGroup-DMLXAAki.js";import"./ListItemBaseTemplate-Dxaw3pkc.js";import"./Token-C9iKSxX5.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DASuqUXG.js";import"./ToggleButton--p8Szuzt.js";import"./SuggestionItem-BAKzXr6j.js";import"./index-DvnAgan1.js";import"./Option-CEDBR-Bt.js";import"./index-eBAbrGNN.js";import"./SegmentedButton-Rqs6WWYK.js";import"./index-Y1J8yyR5.js";import"./Select-DfABSeaX.js";import"./InvisibleMessage-CFQZBAEm.js";import"./slim-arrow-down-CnNq3tWC.js";import"./index-D31LJD9X.js";import"./index-8ECVBj85.js";import"./index-BbzV54Ib.js";import"./index-CV-nf5lU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdWNEJu_.js";import"./group-2-BZUFZ_mF.js";import"./sort-descending-BXUKtHbT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fI0mUgfo.js";import"./utils-BBO9bjZR.js";import"./index-BaCIHOce.js";import"./index-mdq0FRsA.js";import"./index-Bz-Pghpc.js";import"./navigation-down-arrow-B-pSqjVl.js";import"./navigation-right-arrow-C9hFnSZf.js";import"./navigation-right-arrow-D5ZYuJjY.js";import"./useCurrentTheme-dEMZXqrK.js";import"./index-yCViCBv9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzjLx_qb.js";import"./paper-plane-CNtGouJp.js";import"./index-C5yyMQAi.js";import"./less-CNnQlmUL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
