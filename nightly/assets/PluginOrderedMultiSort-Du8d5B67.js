import{j as e}from"./iframe-CGHDmI6F.js";import{useMDXComponents as i}from"./index-vmg_VptB.js";import{I as a,F as m}from"./CommandsAndQueries-Xpj75dw6.js";import{M as s,C as p}from"./blocks-CLJ0TMRL.js";import"./Tag-CNB8wsWP.js";import"./index-weaEi3VY.js";import{C as l}from"./ControlsWithNote-CIisBnMm.js";import"./copy-_Dvyc5eh.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dv24tS2Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQzAmjvO.js";import"./index-B2jKXsJA.js";import"./index-DmbY-g5r.js";import"./Link-Cf4Rypri.js";import"./index-W3wBcX-G.js";import"./index-C2rF-vpI.js";import"./index-BCCC4ZMt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxMyXeCI.js";import"./addCustomCSSWithScoping-C1fbuE3M.js";import"./index-DikhnyC-.js";import"./information-CjscpLC3.js";import"./sys-enter-2-B9ZMSpbA.js";import"./alert-B6YshAIH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xGyGn9Oj.js";import"./delete-Dte8JniV.js";import"./settings-D8Q7G5ao.js";import"./NoData-BSir_879.js";import"./IllustratedMessage-Pr1F3g0w.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CcfxTZmK.js";import"./index-Df1W4o4n.js";import"./index-BHD7XqPx.js";import"./slim-arrow-down-BrkIMPBm.js";import"./Input-BfaIKd-_.js";import"./ResponsivePopoverCommon.css-BTXHr8qi.js";import"./ValueStateMessage.css-CzGkVYOI.js";import"./Suggestions.css-BllQy4_n.js";import"./ListBoxItemGroupTemplate-BNcYJ2hU.js";import"./ComboBoxItemGroup-o3SCM_eV.js";import"./ListItemBaseTemplate-Cx78cHSs.js";import"./Token-B2k1mgDr.js";import"./ScrollEnablement-CQbg5YPQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D40-YKTd.js";import"./ToggleButton-qMwCKZPr.js";import"./SuggestionItem-Call-j_q.js";import"./index-CIW-3Zsf.js";import"./Option-DDv7G9Ot.js";import"./index-L2YJQjiE.js";import"./SegmentedButton-C1vafHDU.js";import"./index-Bd1QPIE9.js";import"./Select-BP0JcAa4.js";import"./InvisibleMessage-cdKeCSvx.js";import"./slim-arrow-down-nSXWTf4e.js";import"./index-BIR_c1OV.js";import"./index-DLXj2zZ8.js";import"./index-B6w0uZ_P.js";import"./index-B0mnhl2M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BncDb-2Q.js";import"./group-2-ByxSiuJy.js";import"./sort-descending-CSgmZ9wj.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9B1NfiCS.js";import"./utils-DDVw8Ej7.js";import"./index-DlDUm1Gd.js";import"./index-CPSAwVgn.js";import"./index-Cjbf81BQ.js";import"./navigation-down-arrow-Cr9SgrB6.js";import"./navigation-right-arrow-DqAdlQN5.js";import"./navigation-right-arrow-DyqmD8NH.js";import"./useCurrentTheme-KBmY2HTm.js";import"./index-D5-qOhI3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cp-zKd6f.js";import"./paper-plane-BHOdso4m.js";import"./index-Cf0oRXr4.js";import"./less-Ctp0LmgJ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
