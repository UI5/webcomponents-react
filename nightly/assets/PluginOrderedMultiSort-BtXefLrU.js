import{j as e}from"./iframe-cRRiQYmf.js";import{useMDXComponents as i}from"./index-Bs0WiH3G.js";import{I as a,F as m}from"./CommandsAndQueries-6fQDSTza.js";import{M as s,C as p}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import{C as l}from"./ControlsWithNote-R2smzZje.js";import"./copy-B18ZHZAg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-SnDQDGkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BK8mUCRL.js";import"./delete-Bd7yIIZR.js";import"./settings-CkxhKC3j.js";import"./NoData-BehLBpti.js";import"./IllustratedMessage-DqABzVpa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-VL3fZtOd.js";import"./index-Bx4iySkn.js";import"./index-CY4bohbd.js";import"./slim-arrow-down-DZLbO_TY.js";import"./Input-O88X3mcn.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./ValueStateMessage.css-C-lEZ5fy.js";import"./Suggestions.css-BtMgvrZ_.js";import"./ListBoxItemGroupTemplate-BLsE5HOe.js";import"./ComboBoxItemGroup-BaeQpQAH.js";import"./ListItemBaseTemplate-DdTsTPm6.js";import"./Token-DF7-FLbj.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S4OY1eRO.js";import"./ToggleButton-CviqyRwB.js";import"./SuggestionItem-CjLVovyh.js";import"./index-CoDhBCO9.js";import"./Option-GMye3bh3.js";import"./index-D4jzIrzX.js";import"./SegmentedButton-uhejKh0q.js";import"./index-DeMEMDE-.js";import"./Select-CkiWgRnV.js";import"./InvisibleMessage-BlcyWLwi.js";import"./slim-arrow-down-C0fV2X2u.js";import"./index-Ks8eZ4TE.js";import"./index-Bo-pJJ92.js";import"./index-BoMEYoEg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcVMbh74.js";import"./group-2-BGmIa860.js";import"./sort-descending-Ce8AiZNs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWIjNCzP.js";import"./utils-CZLAE_2R.js";import"./index-DrKrZdYX.js";import"./index-BVEPWHWu.js";import"./index-CXNthmCr.js";import"./navigation-down-arrow-BxseiaEF.js";import"./navigation-right-arrow-DQ_EAbwb.js";import"./navigation-right-arrow-CpRhiy_v.js";import"./useCurrentTheme-Dho7lVR9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-GZDFVWPb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CENrkM0D.js";import"./paper-plane-BQ0EpgoV.js";import"./index-wG1F1-kD.js";import"./less-DiFkS5DT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
