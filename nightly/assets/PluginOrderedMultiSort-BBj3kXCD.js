import{j as e}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as i}from"./index-kR0XEGhk.js";import{I as a,F as m}from"./CommandsAndQueries-C1TIWg_l.js";import{M as s,C as p}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import{C as l}from"./ControlsWithNote-DR8yiqR3.js";import"./copy-Bxjpqlrz.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CvNR8_-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./index-Dn-It_jb.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrNrrQBn.js";import"./delete-Bgpt9UL9.js";import"./settings-B6qHIMc_.js";import"./NoData-DvirCjMy.js";import"./IllustratedMessage-NOwzz5-E.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1RZxKut.js";import"./index-DymmdOGk.js";import"./index-BrNhwdfa.js";import"./slim-arrow-down-BfDEZlhi.js";import"./Input-C0RQAQ_K.js";import"./ResponsivePopoverCommon.css-Bb2CDDwj.js";import"./ValueStateMessage.css-A-AQ78Le.js";import"./Suggestions.css-DQpTb0pt.js";import"./ListBoxItemGroupTemplate-DmRiL6u4.js";import"./ComboBoxItemGroup-TUyXkEDW.js";import"./ListItemBaseTemplate-D6x618bx.js";import"./Token-3IndTOm3.js";import"./ScrollEnablement-ZXEMw5No.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZLNiFs4r.js";import"./ToggleButton-hyvWFxwf.js";import"./SuggestionItem-Yq1R2rBr.js";import"./index-BvRfALoj.js";import"./Option-BYnx9qqz.js";import"./index-CvMS_bDE.js";import"./SegmentedButton-CXxD3ML7.js";import"./index-DWwQPCDK.js";import"./Select-GO81chS2.js";import"./InvisibleMessage-CAjaGHoP.js";import"./slim-arrow-down-DL7OQOka.js";import"./index-BuooPs5O.js";import"./index-Df3zkpR1.js";import"./index-h9khwDpH.js";import"./index-B6z1BRDU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BAP8GeEZ.js";import"./group-2-SSe9KuRV.js";import"./sort-descending-C38OTzhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FUSiAWga.js";import"./utils-Dh_E7hqa.js";import"./index-CwAKKYUu.js";import"./index-DyPtDivo.js";import"./index-D1RAxoJs.js";import"./navigation-down-arrow-CSBNkbSa.js";import"./navigation-right-arrow-ZQL6lSfa.js";import"./navigation-right-arrow-BTS_mzJX.js";import"./useCurrentTheme-D5tplJAn.js";import"./index-Ys9BGoGM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCtUW8tC.js";import"./paper-plane-Dj0V2el6.js";import"./index-CKSnoblL.js";import"./less-CVIXlP33.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
