import{j as e}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as i}from"./index-Dunz3Qkg.js";import{I as a,F as m}from"./CommandsAndQueries-DcyHQWO5.js";import{M as s,C as p}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import{C as l}from"./ControlsWithNote-BKBVRwue.js";import"./copy-BhfJfLSX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BP0LJa49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBsgvEJ8.js";import"./delete-DGhfhmvk.js";import"./settings-CCzCjc89.js";import"./NoData-DT7qf48U.js";import"./IllustratedMessage-CVhrLvam.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPMHFkT9.js";import"./index-BJ5kqzUP.js";import"./index-BM2p53hS.js";import"./slim-arrow-down-WKx_RP1p.js";import"./Input-CPjqrIGm.js";import"./ResponsivePopoverCommon.css-BqUqASX7.js";import"./ValueStateMessage.css-BGdDzFrr.js";import"./Suggestions.css-u0KnI28S.js";import"./ListBoxItemGroupTemplate-BNIvrjxP.js";import"./ComboBoxItemGroup-BW8olXBy.js";import"./ListItemBaseTemplate-B4z_JR0H.js";import"./Token-B6us6uKB.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cdf08mTY.js";import"./ToggleButton-thsHvfvo.js";import"./SuggestionItem-DTQvckjF.js";import"./index-ELus8qX5.js";import"./Option-DXP4vaIt.js";import"./index-CFE2kaqi.js";import"./SegmentedButton-D06YwmLr.js";import"./index-DWgfJtdr.js";import"./Select-De2if4z3.js";import"./InvisibleMessage-o07I0X4N.js";import"./slim-arrow-down-0jmMhJdt.js";import"./index-CozhcB3v.js";import"./index-BZ0o2qqh.js";import"./index-CXra9vNC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dls4AF5y.js";import"./group-2-Ma5EVCia.js";import"./sort-descending-BF50DcYy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KIunXsJC.js";import"./utils-SZqKSCgS.js";import"./index-BZsvxOnv.js";import"./index-Ny09u-cK.js";import"./index-DN3Jh2GN.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./useCurrentTheme-O1jykDcm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrYqG4yl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-a4IOgjsv.js";import"./paper-plane-C8TajgYr.js";import"./index-BGtGU4dE.js";import"./less-CbCfyPoa.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
