import{j as e}from"./iframe-CMOSZBev.js";import{useMDXComponents as i}from"./index-BTwv99x0.js";import{I as a,F as m}from"./CommandsAndQueries-BBxM4nbH.js";import{M as s,C as p}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import{C as l}from"./ControlsWithNote-BpW64yfj.js";import"./copy-CxpwRqG0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BGGuuGm3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./index-B2Bp115n.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWm8Pdnv.js";import"./delete-jqJpTe2L.js";import"./settings-1zMM0TTB.js";import"./NoData-DBuwgpdA.js";import"./IllustratedMessage-BofcQBlB.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DWqRVxEj.js";import"./index-CKirJzli.js";import"./index-DF53ugeV.js";import"./slim-arrow-down-DAnkwZ8z.js";import"./Input-BmUNjham.js";import"./ResponsivePopoverCommon.css-BCnF-C9t.js";import"./ValueStateMessage.css-3iIUq-Eq.js";import"./Suggestions.css-BiChEPXm.js";import"./ListBoxItemGroupTemplate-CCd_4VBx.js";import"./ComboBoxItemGroup-BTATmQjz.js";import"./ListItemBaseTemplate-CCj-4nFf.js";import"./Token-Bw95vKiC.js";import"./ScrollEnablement-CZWkeAzp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ToggleButton-PO6AUubZ.js";import"./SuggestionItem-DGmpPMHq.js";import"./index-DErYtSvu.js";import"./Option-BASIIjCE.js";import"./index-D_1ao0HG.js";import"./SegmentedButton-Ck1jyoaW.js";import"./index-DN0A1xHB.js";import"./Select-Dl8hzlud.js";import"./InvisibleMessage-CxtLELZ9.js";import"./slim-arrow-down-D_esAgSu.js";import"./index-DXnWcts-.js";import"./index-BVDh7HGR.js";import"./index-CCryildS.js";import"./index-Cb1OiNpu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B2Cmbs5j.js";import"./group-2-CW05y1Vx.js";import"./sort-descending-BJlygo9d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTplp2oj.js";import"./utils-CJbFgKgb.js";import"./index-CVcS8amw.js";import"./index-CKyJB_mr.js";import"./index-BqkbFWdI.js";import"./navigation-down-arrow-ehohWkFC.js";import"./navigation-right-arrow-BbmuEJCf.js";import"./navigation-right-arrow-5URvnLbD.js";import"./useCurrentTheme-B0G4hFaD.js";import"./index-CZhfcpCP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cu0Jio6B.js";import"./paper-plane-CwtFbMNe.js";import"./index-D1fdw4IU.js";import"./less-CzDyuHok.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
