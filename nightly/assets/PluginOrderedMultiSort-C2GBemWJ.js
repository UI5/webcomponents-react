import{j as e}from"./iframe-BMswfRdZ.js";import{useMDXComponents as i}from"./index-MaqCtoEe.js";import{I as a,F as m}from"./CommandsAndQueries-B0EQ2-2W.js";import{M as s,C as p}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import{C as l}from"./ControlsWithNote-C5w7tvs5.js";import"./copy-Cy5PMYPR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-mPff0P6m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./index-mp2uLi6B.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DxHk6N33.js";import"./delete-CXm_E0-Y.js";import"./settings-CqqCKJRE.js";import"./NoData-DB0UkPLE.js";import"./IllustratedMessage-xRJ_clt5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1oaGXmTl.js";import"./index-Da_vExI8.js";import"./index-gGS5oICH.js";import"./slim-arrow-down-DZiL5RY8.js";import"./Input--pdg4UEC.js";import"./ResponsivePopoverCommon.css-Cys9VWui.js";import"./ValueStateMessage.css-CqCvpxGR.js";import"./Suggestions.css-BsUzn6Ma.js";import"./ListBoxItemGroupTemplate-Oz7T7rjX.js";import"./ComboBoxItemGroup-HGIu0yJL.js";import"./ListItemBaseTemplate-vEHYPQIG.js";import"./Token-D6rP3KDc.js";import"./ScrollEnablement-BFkwZ-6k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgY-3qr3.js";import"./ToggleButton-BYaWptBI.js";import"./SuggestionItem-C9jZ74yI.js";import"./index-BD8Cd281.js";import"./Option-BoFss70v.js";import"./index-B6iScKv-.js";import"./SegmentedButton-BHHnez93.js";import"./index-CLHUyLON.js";import"./Select-2IbUasvX.js";import"./InvisibleMessage-DWiN-Q82.js";import"./slim-arrow-down-DVB6jdIA.js";import"./index-Cs0GPsK7.js";import"./index-BWDqCRuT.js";import"./index-IUj7GUsp.js";import"./index-Db9h7yxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DXLSMFHk.js";import"./group-2-CJwVVc0i.js";import"./sort-descending-Bado19O_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlkbPsyK.js";import"./utils-CiZ3szIk.js";import"./index-D0owrTnz.js";import"./index-IdbciERE.js";import"./index-DwKn05TT.js";import"./navigation-down-arrow-CWAFdQMV.js";import"./navigation-right-arrow-DFMNvzTi.js";import"./navigation-right-arrow-DhhhdeU2.js";import"./useCurrentTheme-UlPApG1C.js";import"./index-CmchLnb5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTbpKmVn.js";import"./paper-plane-CcsgPjnp.js";import"./index-Fa-JpXF4.js";import"./less-B6Uo9h2u.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
