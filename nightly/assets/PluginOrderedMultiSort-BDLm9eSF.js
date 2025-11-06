import{j as e}from"./iframe-DVlTfEM-.js";import{useMDXComponents as i}from"./index-k_8IF_2O.js";import{I as a,F as m}from"./CommandsAndQueries-BkPdYDds.js";import{M as s,C as p}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import{C as l}from"./ControlsWithNote-CYH0qfSp.js";import"./copy-Do4831X0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dc4CzVRx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkCO8Xag.js";import"./delete-D8PsoqYs.js";import"./settings-BvZiD-4L.js";import"./NoData-CSkDH6ij.js";import"./IllustratedMessage-UOdpDpe-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cr9VJd-6.js";import"./index-zssJOUHP.js";import"./index-DjSKLUSQ.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./Input-BGJxuKnZ.js";import"./ResponsivePopoverCommon.css-oNmL3crK.js";import"./ValueStateMessage.css-CtUL6j0K.js";import"./Suggestions.css-CM1R5dIm.js";import"./ListBoxItemGroupTemplate-BP2e86jZ.js";import"./ComboBoxItemGroup-BqFAfTuf.js";import"./ListItemBaseTemplate-C_4eP7YO.js";import"./Token-DvVKUdOw.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3KQCuJV.js";import"./ToggleButton-fm8RXqSV.js";import"./SuggestionItem-CRJSj9d9.js";import"./index-DL3kJ6Ys.js";import"./Option-bA3BQjg2.js";import"./index-Chk0CywK.js";import"./SegmentedButton-CHFmZDT5.js";import"./index-B43_nY2G.js";import"./Select-D18nbPyu.js";import"./InvisibleMessage-CRYSMjmC.js";import"./slim-arrow-down-CiXqYYHt.js";import"./index-iqm3GyJh.js";import"./index-CkVXAiTR.js";import"./index-Dyam-MVy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-scTLOOoX.js";import"./group-2-dWyvSvql.js";import"./sort-descending-B0NwIWrn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmrYW8iD.js";import"./utils-Cr5WVsBR.js";import"./index-BFCC2aiM.js";import"./index-CMeIuUOs.js";import"./index-BL4PIRcT.js";import"./navigation-down-arrow-BUDUl4ig.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./useCurrentTheme--PrL2jjb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D3bUPVNG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EPGyQxGy.js";import"./paper-plane-Bmo31A5w.js";import"./index-B4QIzuUd.js";import"./less-DHSI_jam.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
