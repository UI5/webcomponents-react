import{j as e}from"./iframe-qw_wjtNl.js";import{useMDXComponents as i}from"./index-CvAhzckH.js";import{I as a,F as m}from"./CommandsAndQueries-DWIFRiex.js";import{M as s,C as p}from"./blocks-Cj0GGGP0.js";import"./Tag-DzwN3Rd_.js";import"./index-BxhW2KQn.js";import{C as l}from"./ControlsWithNote-4KruMgLa.js";import"./copy-6F9M-W0B.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CAfd5EST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkBb4DU7.js";import"./index-JDJrS9Ll.js";import"./index-BjZZqbZ8.js";import"./Link-D-ZYRyi4.js";import"./index-8ixRb_fG.js";import"./index-ClMjTnJ2.js";import"./index-CuOh1gGP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8mn_iQe.js";import"./addCustomCSSWithScoping-CztL__nC.js";import"./index-BdvjziP2.js";import"./information-GIBAMn_C.js";import"./sys-enter-2-Djyl2MPl.js";import"./alert-B6KZwVKr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6h30yd_.js";import"./delete-h0aT8AVb.js";import"./settings-DB2h-uz8.js";import"./NoData-BAGQwhIK.js";import"./IllustratedMessage-CNDFipk9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DVQQUXOf.js";import"./index-gQhHuDtz.js";import"./index--jeA-nPD.js";import"./slim-arrow-down-C7tvWC8C.js";import"./Input-BRIiCfgn.js";import"./ResponsivePopoverCommon.css-BJPXKYSd.js";import"./ValueStateMessage.css-CPuzDd78.js";import"./Suggestions.css-D0oXmqLX.js";import"./ListBoxItemGroupTemplate-COpsVFza.js";import"./ComboBoxItemGroup-CuHzLJ6_.js";import"./ListItemBaseTemplate-Dd1lTm6q.js";import"./Token-DzZ0_ysg.js";import"./ScrollEnablement-BjXact8U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCxLbPzf.js";import"./ToggleButton-CpsjIwWA.js";import"./SuggestionItem-dN69XrVf.js";import"./index-8HQvYLzF.js";import"./Option-CFeMc4Ab.js";import"./index-BrmJJ0nJ.js";import"./SegmentedButton-jZiliEy1.js";import"./index-Bm7nt3MU.js";import"./Select-DrpdgADy.js";import"./InvisibleMessage-BeRSLPnc.js";import"./slim-arrow-down-BSh7m90B.js";import"./index-CraAWzST.js";import"./index-BaRBa3SP.js";import"./index-Ds2AFYTa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzCjRTbW.js";import"./group-2-ZVRD52bo.js";import"./sort-descending-KiWNCiTs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UuMtVOVu.js";import"./utils-6d5OHNfa.js";import"./index-OZfm5yOC.js";import"./index-C9QdKJZX.js";import"./index-DKsk6U_B.js";import"./navigation-down-arrow-BXwF2ivk.js";import"./navigation-right-arrow-Bt4GUYcC.js";import"./navigation-right-arrow-DDTiNM5w.js";import"./useCurrentTheme-BkU3ks1S.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C9Bu16Dr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cnj3p2ky.js";import"./paper-plane-UcJDeTb8.js";import"./index-DUYAr_8G.js";import"./less-D0rWAHm3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
