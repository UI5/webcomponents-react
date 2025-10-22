import{j as e}from"./iframe-CWbL8jxG.js";import{useMDXComponents as i}from"./index-B1hucxFe.js";import{I as a,F as m}from"./CommandsAndQueries-DC5-wnNc.js";import{M as s,C as p}from"./blocks-DWgVki-D.js";import"./Tag-BqrM3bJU.js";import"./index-Ln4MrNxF.js";import{C as l}from"./ControlsWithNote-ymSYjaAM.js";import"./copy-DC7dXRiF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BChSusTc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./index-DX9sPfcP.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BltmIOdS.js";import"./delete-1HyL_4Wk.js";import"./settings-JMrRPAnE.js";import"./NoData-CJxxc7CR.js";import"./IllustratedMessage-D8gWuNpm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-57Ksm_r5.js";import"./index-DZTHkwTR.js";import"./index-DS3apI4i.js";import"./slim-arrow-down-BMbGkBGP.js";import"./Input-Ca-gNTp_.js";import"./ResponsivePopoverCommon.css-BbHsPd6N.js";import"./ValueStateMessage.css-CzUlmLb3.js";import"./Suggestions.css-Ba_dx_L-.js";import"./ListBoxItemGroupTemplate-Lawh3eGL.js";import"./ComboBoxItemGroup-BeC8_XKS.js";import"./ListItemBaseTemplate-bdxNsDyn.js";import"./Token-GRKHuzuD.js";import"./ScrollEnablement-q8IAhmkU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DjxNPHqP.js";import"./ToggleButton-aEr0I1kH.js";import"./SuggestionItem-BfEsa41d.js";import"./index-Df-CHSkY.js";import"./Option-CH8gpRhi.js";import"./index-Cys1hxfX.js";import"./SegmentedButton-De9lTVKW.js";import"./index-zNKdvYCA.js";import"./Select-C9jPwNxl.js";import"./InvisibleMessage-5emN_lGe.js";import"./slim-arrow-down-BO45akNa.js";import"./index-B5w8aw2j.js";import"./index-CR6_4xj1.js";import"./index-BgtkjQtp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BD_8tTtH.js";import"./group-2-v2JGlzXZ.js";import"./sort-descending-dLMPKXS7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AQfbGd8K.js";import"./utils-BxGUFKrM.js";import"./index-uL29v2Ta.js";import"./index-BqP4EQLr.js";import"./index-gLLwXRq2.js";import"./navigation-down-arrow-ozVSHRNs.js";import"./navigation-right-arrow-DtnRZ1GH.js";import"./navigation-right-arrow-DzlvXQo4.js";import"./useCurrentTheme-CWwMlTtm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BQnesWWg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nDtVDEC_.js";import"./paper-plane-C0WWo1sA.js";import"./index-BJvkaa91.js";import"./less-C5liRph3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
