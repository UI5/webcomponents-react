import{j as e}from"./iframe-BbmPNBZw.js";import{useMDXComponents as i}from"./index-D87-8-cY.js";import{I as a,F as m}from"./CommandsAndQueries-C-B3vcHW.js";import{M as s,C as p}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import{C as l}from"./ControlsWithNote-D8-T1xFb.js";import"./copy-BgTszgJK.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D4eIu_Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./index-CoFaLD2a.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX-2aVfx.js";import"./delete-DJaqBI2v.js";import"./settings-suPn1Nnm.js";import"./NoData-k8ylWlWP.js";import"./IllustratedMessage-QtkSWE--.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DotGN4Y7.js";import"./index-D_AKAMYV.js";import"./index-DeEkJt1e.js";import"./slim-arrow-down-BiuCGCjT.js";import"./Input-BHUHhOmz.js";import"./ResponsivePopoverCommon.css-BxaDEsUM.js";import"./ValueStateMessage.css-BYDbDg0Q.js";import"./Suggestions.css-DZfh_4W3.js";import"./ListBoxItemGroupTemplate-Ce53u2a5.js";import"./ComboBoxItemGroup-DBihqRGm.js";import"./ListItemBaseTemplate-BM3kFwkG.js";import"./Token-DflvgBUB.js";import"./ScrollEnablement-CnRiCY6V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaqjNEkx.js";import"./ToggleButton-C3LSC9pu.js";import"./SuggestionItem-eiisW8R3.js";import"./index-DOUHh_Yk.js";import"./Option-CUrZDe04.js";import"./index-BETUsKMg.js";import"./SegmentedButton-Cux8zQoJ.js";import"./index-D3JCLYGZ.js";import"./Select-DW_EjdMU.js";import"./InvisibleMessage-C1GU6Z5A.js";import"./slim-arrow-down-DJqqQ7Uz.js";import"./index-g1hielSz.js";import"./index-BdZUY68T.js";import"./index-BhkJT34d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdhG93W-.js";import"./group-2-zFNxt9gh.js";import"./sort-descending-ByihN0-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEU0a68q.js";import"./utils-DWSip9Hp.js";import"./index-BYutBOs4.js";import"./index-Di2jtcE5.js";import"./index-CZcSTKvj.js";import"./navigation-down-arrow-DkGOKBV1.js";import"./navigation-right-arrow-BCm7Xenc.js";import"./navigation-right-arrow-C9_CN0LR.js";import"./useCurrentTheme-uuFazV9G.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bj0B-A9p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWRMKF8W.js";import"./paper-plane-uFKcpEyA.js";import"./index-BDhMGars.js";import"./less-BjbU_0bC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
