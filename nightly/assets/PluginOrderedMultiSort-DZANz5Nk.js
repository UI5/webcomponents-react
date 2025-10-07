import{j as e}from"./iframe-DWPhu-XW.js";import{useMDXComponents as i}from"./index-CTKrG-Il.js";import{I as a,F as m}from"./CommandsAndQueries-CU5SVthr.js";import{M as s,C as p}from"./blocks-CEz7tllO.js";import"./Tag-Dba4-MU4.js";import"./index-Bdh_RTY9.js";import{C as l}from"./ControlsWithNote-DKx3CuYi.js";import"./copy-DPKhld63.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DexyH83g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./index-BUa9lJQh.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYV0Oj8s.js";import"./delete-CzS-ZSFZ.js";import"./settings-DpHyPOwD.js";import"./NoData-Bp42RSLg.js";import"./IllustratedMessage-aBcENSKw.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b50AAtuz.js";import"./index-mxmVkI6u.js";import"./index-CApFPdYg.js";import"./slim-arrow-down-26auel0G.js";import"./Input-DtVBLl5-.js";import"./ResponsivePopoverCommon.css-BZjEG7BC.js";import"./ValueStateMessage.css-BE_F5FVP.js";import"./Suggestions.css-RB8NJCE4.js";import"./ListBoxItemGroupTemplate-8_yIlWF-.js";import"./ComboBoxItemGroup-CUl4YaKf.js";import"./ListItemBaseTemplate-DPKPnrYZ.js";import"./Token-eT67usC_.js";import"./ScrollEnablement-DEtsU5kO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DWrsBtMe.js";import"./ToggleButton-Cng5ptzF.js";import"./SuggestionItem-WNV3rxc_.js";import"./index-WkdE1BtC.js";import"./Option-TNrNAAqc.js";import"./index-DJmgSw2V.js";import"./SegmentedButton-Ce9IDtQc.js";import"./index-BD4QFnxI.js";import"./Select-ChhsY6q9.js";import"./InvisibleMessage-CFK-hdYz.js";import"./slim-arrow-down-CiD7J9GA.js";import"./index-Dby-IIR7.js";import"./index-CAL2eitQ.js";import"./index-Dyna8UIc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjrsfWur.js";import"./group-2-CdxZGZ4X.js";import"./sort-descending-z9fS02K2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-g8_M3OEL.js";import"./utils-D_sqNaHL.js";import"./index-CrC4ibqT.js";import"./index-CNj7YBXJ.js";import"./index-AKvgdamH.js";import"./navigation-down-arrow-aGekved_.js";import"./navigation-right-arrow-vDM-HvIf.js";import"./navigation-right-arrow-B6BrxANc.js";import"./useCurrentTheme-BEuzdf0x.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dlc1pnJH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DACTY-zP.js";import"./paper-plane-CaqllUEB.js";import"./index-B2DU1UW_.js";import"./less-DMoysLjA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
