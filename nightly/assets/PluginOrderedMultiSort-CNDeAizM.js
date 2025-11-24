import{j as e}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as i}from"./index-CdriUjbp.js";import{I as a,F as m}from"./CommandsAndQueries-CxvYWHkR.js";import{M as s,C as p}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import{C as l}from"./ControlsWithNote-BAfS_2Z4.js";import"./copy-CFwp5FgG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cy3cyHhy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWywr3TW.js";import"./delete-CCzy9s8b.js";import"./settings-D42fuJuX.js";import"./NoData-Bup5hrqa.js";import"./IllustratedMessage-CHTeCatA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-ZuFlFv1T.js";import"./index-Dc9B5nZG.js";import"./index-JF5_76ci.js";import"./slim-arrow-down-ySZlwq-q.js";import"./Input-D4ca9rAR.js";import"./ResponsivePopoverCommon.css-BRrcd20a.js";import"./ValueStateMessage.css-Bk812_Kf.js";import"./Suggestions.css-BjM9wydn.js";import"./ListBoxItemGroupTemplate-AWhndfnj.js";import"./ComboBoxItemGroup-DoFoxDi9.js";import"./ListItemBaseTemplate-CpLLHa4Z.js";import"./Token-MTCn4enU.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-vQZi_1g2.js";import"./ToggleButton-DDwhnOd_.js";import"./SuggestionItem-DsV9yF55.js";import"./index-sE10V8UB.js";import"./Option-B-1m3Lan.js";import"./index-Cb21HCJZ.js";import"./SegmentedButton-DsUwene6.js";import"./index-CL538puJ.js";import"./Select-eKqLtCSY.js";import"./InvisibleMessage-B_prVgph.js";import"./slim-arrow-down-CMbdHuJl.js";import"./index-xGnKXygx.js";import"./index-CRmylG0z.js";import"./index-u1rNC7Bo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMM6dyNf.js";import"./group-2-B4FdXRJU.js";import"./sort-descending-DvUEcM1R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jICxCRW9.js";import"./utils-P9HcUQzN.js";import"./index-DDWpxtlc.js";import"./index-Wbk_vv3N.js";import"./index-AlbH3iGp.js";import"./navigation-down-arrow-IShY2WyB.js";import"./navigation-right-arrow-DzbnPaXu.js";import"./navigation-right-arrow-BxL2ijuh.js";import"./useCurrentTheme-DHVnEAWK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4pyhN2Y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PfY8la.js";import"./paper-plane-BZiyZUyR.js";import"./index-CXSg-hiw.js";import"./less-DNufAwmk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
