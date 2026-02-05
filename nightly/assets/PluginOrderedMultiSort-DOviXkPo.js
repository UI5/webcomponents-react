import{j as e}from"./iframe-jDeV-G8S.js";import{useMDXComponents as i}from"./index-Da3DrjVc.js";import{I as a,F as m}from"./CommandsAndQueries-S46eotFY.js";import{M as s,C as p}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import{C as l}from"./ControlsWithNote-C35I74bz.js";import"./copy-DEHDDsgd.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B7xLL4Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BaSB_xVI.js";import"./delete-C6VclcYK.js";import"./settings-C7QaHLBi.js";import"./NoData-B5IMrlNi.js";import"./IllustratedMessage-DYUp67Ci.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BraCc1Gf.js";import"./index-D8qN7Hry.js";import"./index-CnvfagGK.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./Input-oPDKy1ol.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./ValueStateMessage.css-uRbauoI5.js";import"./Suggestions.css-DiV-Lfrn.js";import"./ListBoxItemGroupTemplate-C5UVYOIE.js";import"./ComboBoxItemGroup-DdLskjQz.js";import"./ListItemBaseTemplate-DG9IXdA-.js";import"./Token--hjAUxWq.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BiM6YtfZ.js";import"./ToggleButton-cMq8je7X.js";import"./SuggestionItem-e6KTrnLc.js";import"./index-CECiZ_Xv.js";import"./Option-CReekOMZ.js";import"./index-DgdfTx4u.js";import"./SegmentedButton-BUR6TsSQ.js";import"./index-BchHiesQ.js";import"./Select-CMirSOvH.js";import"./InvisibleMessage-CSYFI2hH.js";import"./slim-arrow-down-BnGG1iQc.js";import"./index-3NCdG4IQ.js";import"./index-CBPksq_0.js";import"./index-dvlsjgN4.js";import"./index-B7d4NHtR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CabphWI6.js";import"./group-2-YQpUAD-P.js";import"./sort-descending-DyAgXLO6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSO1X3Eq.js";import"./utils-DijlQhLT.js";import"./index-CTR4qlZZ.js";import"./index-BGQ0DLLD.js";import"./index-CU2qxjFI.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./navigation-right-arrow-BoiqaSPb.js";import"./navigation-right-arrow-Bc8erDMC.js";import"./useCurrentTheme-df9ByhFB.js";import"./index-CGu9uvTR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxwMa2U.js";import"./paper-plane-C0TXry-l.js";import"./index-BhxN8tHb.js";import"./less-CBiR1zC0.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
