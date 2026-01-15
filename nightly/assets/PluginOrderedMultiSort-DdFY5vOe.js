import{j as e}from"./iframe-DzsY3-MS.js";import{useMDXComponents as i}from"./index-DFSYB4hO.js";import{I as a,F as m}from"./CommandsAndQueries-DBuYeihv.js";import{M as s,C as p}from"./blocks-DS0Y1BZg.js";import"./Tag-L2pUIWpP.js";import"./index-DdAKftEE.js";import{C as l}from"./ControlsWithNote-xp0YhEc5.js";import"./copy-BminF4Iy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-hG0Mq3Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./index-C5c1rTpg.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l5aoi9KM.js";import"./delete-B3ryUQBB.js";import"./settings-C00RCGye.js";import"./NoData-yJgd8XnX.js";import"./IllustratedMessage-DNQ-CWR9.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CRpMHBpW.js";import"./index-DwW6N8AQ.js";import"./index-i1IFNKnh.js";import"./slim-arrow-down-CkH4Whvo.js";import"./Input-Dq6-REg9.js";import"./ResponsivePopoverCommon.css-CLPuLjYm.js";import"./ValueStateMessage.css-Di8Y_FaV.js";import"./Suggestions.css-B9qKiT0u.js";import"./ListBoxItemGroupTemplate-DDMKAAAG.js";import"./ComboBoxItemGroup-0Q9ga48v.js";import"./ListItemBaseTemplate-C_vIHZba.js";import"./Token-EUneMihA.js";import"./ScrollEnablement-CkDB7Jzl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bem0jaOu.js";import"./ToggleButton-DX5JCL6_.js";import"./SuggestionItem-BarzL3HZ.js";import"./index-v5BZERv9.js";import"./Option-B5iYKL3-.js";import"./index-Cdxm6Zw8.js";import"./SegmentedButton-jOnxCPv8.js";import"./index-BdSOKqSc.js";import"./Select-BGW-2fE4.js";import"./InvisibleMessage-Cb7HEOO2.js";import"./slim-arrow-down-DMe2ZC5d.js";import"./index-DOhw8rBk.js";import"./index-B-owJPr5.js";import"./index-BetNagWU.js";import"./index-lb1RbLlp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2pnkmk3s.js";import"./group-2-D2bVnNyU.js";import"./sort-descending-xEWSnLJM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlOYjGGn.js";import"./utils-CyyFPTY5.js";import"./index-BL0l7ykh.js";import"./index-fQZNWHJl.js";import"./index-CSRjycPW.js";import"./navigation-down-arrow-DFDWFqht.js";import"./navigation-right-arrow-D6uPQJor.js";import"./navigation-right-arrow-DNx7PXWq.js";import"./useCurrentTheme-CDEziUwa.js";import"./index-B_BoFXOZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGi63fh0.js";import"./paper-plane-D_Zbwyw2.js";import"./index-E_1UjDh5.js";import"./less-RjX5NJTD.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
