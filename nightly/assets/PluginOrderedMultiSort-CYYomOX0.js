import{j as e}from"./iframe-C6G8Gpme.js";import{useMDXComponents as i}from"./index-C4rJv3Nd.js";import{I as a,F as m}from"./CommandsAndQueries-CX4_ppDX.js";import{M as s,C as p}from"./blocks-C6ISP02G.js";import"./Tag-wYYkZAW5.js";import"./index-CLl--vXw.js";import{C as l}from"./ControlsWithNote-LUh1InXg.js";import"./copy-DG7SwgZt.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CFQTPpSi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./index-B7V2IaSq.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQrAE-yM.js";import"./delete-BePcinQ6.js";import"./settings-ZIGvnodt.js";import"./NoData-f-9aMUJ4.js";import"./IllustratedMessage-BnjPNDkK.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-R36zWZeY.js";import"./index-Bw2blU0C.js";import"./index-CC4rDnzA.js";import"./slim-arrow-down-DFQVjscf.js";import"./Input-B43vXzoo.js";import"./ResponsivePopoverCommon.css-BaW35ZlT.js";import"./ValueStateMessage.css-BPXwB0kU.js";import"./Suggestions.css-D8LM2L39.js";import"./ListBoxItemGroupTemplate-C7DYeyIb.js";import"./ComboBoxItemGroup-9TKINPGh.js";import"./ListItemBaseTemplate-py1Jss2-.js";import"./Token-BESOIpLC.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbgkjpUB.js";import"./ToggleButton-DIE2_eYU.js";import"./SuggestionItem-B37H0t8o.js";import"./index-hYGTc0Ki.js";import"./Option-Dpbc4fOS.js";import"./index-BHyn0uZc.js";import"./SegmentedButton-EzvQ1TiR.js";import"./index-Bw0lSxiT.js";import"./Select-CGLg-QOl.js";import"./InvisibleMessage-Co517J8T.js";import"./slim-arrow-down-BMl0PRZy.js";import"./index-BG83xDW8.js";import"./index-v-qZ03j1.js";import"./index-DT1QmIo9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bjv4k70o.js";import"./group-2-Cd_IntO7.js";import"./sort-descending-5ABVgqX7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BG8mzTO_.js";import"./utils-BR3sGIFW.js";import"./index-BzZR18Jl.js";import"./index-B44hRY22.js";import"./index-DbddQwCa.js";import"./navigation-down-arrow-ccA23Gon.js";import"./navigation-right-arrow-RKFZneuK.js";import"./navigation-right-arrow-UKoz8H0N.js";import"./useCurrentTheme-metPpI7t.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dw6v9mL5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cf5So1HI.js";import"./paper-plane-BSvLcMlt.js";import"./index-UbolVguk.js";import"./less-o5FG2Zi-.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
