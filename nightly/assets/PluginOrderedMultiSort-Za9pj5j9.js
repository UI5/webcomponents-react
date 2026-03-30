import{j as e}from"./iframe-Dr24b1_2.js";import{u as i,M as a,C as m}from"./blocks-DOkdIKLK.js";import{I as s}from"./CommandsAndQueries-D2RSxAeU.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import{C as p}from"./ControlsWithNote-BXcQcfnL.js";import"./copy-D1SgAW06.js";import{F as l}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CIs8KZqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSeDtOFY.js";import"./delete-CTuwvNwN.js";import"./settings-D2zSFUQS.js";import"./NoData-BNUq2LAg.js";import"./NoFilterResults-C3EjDsD0.js";import"./index-DMGfqErw.js";import"./IllustratedMessage-DWcP1w35.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BBfVJLgm.js";import"./Input-irtd9wft.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./ValueStateMessage.css-BS498yF4.js";import"./Suggestions.css-DByIneIP.js";import"./ListBoxItemGroupTemplate-CrWVeqtk.js";import"./ComboBoxItemGroup-DfdSfqaL.js";import"./ListItemBaseTemplate-DeSJkaWA.js";import"./Token-DUD3s9-0.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4U2FtO3.js";import"./ToggleButton-BV0O-OUE.js";import"./multiselect-all-BFWwGBPs.js";import"./SuggestionItem-CjMIYdHg.js";import"./index-Be2SnvPr.js";import"./Option-BNc07i1m.js";import"./index-Dhr0uby_.js";import"./SegmentedButton-DIgm-PGW.js";import"./index-AylfCAiE.js";import"./Select-DUnUQvU_.js";import"./InvisibleMessage-gZ-HYpyf.js";import"./index-CbTWmPo9.js";import"./index-BAyOZzch.js";import"./index-DCFLXB0o.js";import"./index-CJOj_130.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRhxLA-E.js";import"./group-2-eYTtZ8kH.js";import"./sort-descending-BQ3YJIaz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BY-GjMmR.js";import"./utils-BXYFGvnm.js";import"./index-BiTc-6U3.js";import"./index-Bm6fGbEK.js";import"./index-CvsFmqac.js";import"./navigation-down-arrow-D1eVdFYB.js";import"./navigation-right-arrow-C_zepO0v.js";import"./navigation-right-arrow-BA43J9Vq.js";import"./useCurrentTheme-DxjT-4Tb.js";import"./index-DCaFjUpe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BcSpX-QV.js";import"./paper-plane-BEsK-8Qt.js";import"./index-BjDM9IYP.js";import"./less-DrUcv7lt.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
