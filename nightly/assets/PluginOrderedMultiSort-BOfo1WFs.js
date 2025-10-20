import{j as e}from"./iframe-BFWc6ije.js";import{useMDXComponents as i}from"./index-DIwiR8-R.js";import{I as a,F as m}from"./CommandsAndQueries-RvyhHzLx.js";import{M as s,C as p}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import{C as l}from"./ControlsWithNote-qwvEwOvA.js";import"./copy-B0915CdE.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DMwZPbok.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2a6sZTKt.js";import"./delete-GLZPXNIt.js";import"./settings-Bl3VKOzY.js";import"./NoData-D1FNpf90.js";import"./IllustratedMessage-Col1197V.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BHuYeTyV.js";import"./index-DgCS7Nk3.js";import"./index-SZqCzEgh.js";import"./slim-arrow-down-Dv1ZFOOG.js";import"./Input-BTIWHmaN.js";import"./ResponsivePopoverCommon.css-c4jpBfVX.js";import"./ValueStateMessage.css-C8t0n2is.js";import"./Suggestions.css-Cj5eaUvh.js";import"./ListBoxItemGroupTemplate--RkL3eX-.js";import"./ComboBoxItemGroup-CvfuwnhX.js";import"./ListItemBaseTemplate-DWiE6hVW.js";import"./Token-RwPCKO7L.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3Dr6elZ5.js";import"./ToggleButton-NLglJiSM.js";import"./SuggestionItem-B18x_0Bw.js";import"./index-_nYMLiJq.js";import"./Option-BCCI7jGA.js";import"./index-DYvMbD0V.js";import"./SegmentedButton-2c88fWgR.js";import"./index-IKSBMBYh.js";import"./Select-DGk89UWd.js";import"./InvisibleMessage-gz9Baj7W.js";import"./slim-arrow-down-DbgE6iuN.js";import"./index-RsMAEwo8.js";import"./index-DNOnKtp6.js";import"./index-fezgehlA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTa28ct7.js";import"./group-2-1vH7OeUe.js";import"./sort-descending-6IaS3sEK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8A7JpsJT.js";import"./utils-_MgrmSbV.js";import"./index-CFTVOaaJ.js";import"./index-c-viX2G1.js";import"./index-Tigp63LJ.js";import"./navigation-down-arrow-C3oL93Ku.js";import"./navigation-right-arrow-D0tZtsPJ.js";import"./navigation-right-arrow-OUJD2N61.js";import"./useCurrentTheme-BdY6233y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bfz-LgXH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DrH-Pm0z.js";import"./paper-plane-CCOFurtH.js";import"./index-BqcaYpg7.js";import"./less-BXPL7yK5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
