import{j as e}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as i}from"./index-dcVclcbT.js";import{I as a,F as m}from"./CommandsAndQueries-DUfglqKp.js";import{M as s,C as p}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import{C as l}from"./ControlsWithNote-ByDrkwNV.js";import"./copy-BI62_cw9.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-s17Movl1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DLxqbR-j.js";import"./delete-C69cbyF3.js";import"./settings-BWzqlj0G.js";import"./NoData-D5fncAkO.js";import"./IllustratedMessage-BzTSJxO9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YgmQ2tQR.js";import"./index-Ci7qfekx.js";import"./index-DNsUAKiX.js";import"./slim-arrow-down-CyGdej7d.js";import"./Input-z0U91vlG.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./ValueStateMessage.css-DF0Hyzh1.js";import"./Suggestions.css-wt4aZj0f.js";import"./ListBoxItemGroupTemplate-Q-KeUcY6.js";import"./ComboBoxItemGroup-BSGTLThu.js";import"./ListItemBaseTemplate-DqtKzpsG.js";import"./Token-vLDA2-Jp.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-hNMIOZMd.js";import"./ToggleButton-7eyAjys6.js";import"./SuggestionItem-Qf_7uMPc.js";import"./index-7cA-ux1h.js";import"./Option-DZeZ5p_t.js";import"./index-B7ZIHFQx.js";import"./SegmentedButton-BmWRNH_m.js";import"./index-Dff-sv4X.js";import"./Select-DhzR4NaB.js";import"./InvisibleMessage-DisTLAk4.js";import"./slim-arrow-down-Dqq2dwC4.js";import"./index-DVvxtB8e.js";import"./index-DCksASwl.js";import"./index-OEGwklO3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cix59-jT.js";import"./group-2-Bhc8bd2M.js";import"./sort-descending-DgOmEU3h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHOGLY_P.js";import"./utils-DUcBANkt.js";import"./index-C3qN_Aew.js";import"./index-CBCSR7an.js";import"./index-CVsRwsda.js";import"./navigation-down-arrow-_9IZkA0g.js";import"./navigation-right-arrow-p28ybD6y.js";import"./navigation-right-arrow-Bm5goftX.js";import"./useCurrentTheme-f2z_yH-b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXZ8CjJT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zeVN43iZ.js";import"./paper-plane-7o4eJ6hV.js";import"./index-BYRBgKjV.js";import"./less-hBB1SYwL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
