import{j as e}from"./iframe-BOeFyVYO.js";import{useMDXComponents as i}from"./index-CHR9lzRO.js";import{I as a,F as m}from"./CommandsAndQueries-B3uiYPSD.js";import{M as s,C as p}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import{C as l}from"./ControlsWithNote-CSbCHJ4U.js";import"./copy-BJhtqyDJ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BNASTJ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjAUfTN5.js";import"./delete-CWJoMoJg.js";import"./settings-Bfit3oG9.js";import"./NoData-BscmLJLH.js";import"./IllustratedMessage-Dd93Yl2Q.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D3nzv2ZG.js";import"./index-DzkoDE5b.js";import"./index-DeACGhE8.js";import"./slim-arrow-down-CWRIGuGt.js";import"./Input-Df8o9ujM.js";import"./ResponsivePopoverCommon.css-CrPsreP2.js";import"./ValueStateMessage.css-D0I7pT5V.js";import"./Suggestions.css-CJA5EYur.js";import"./ListBoxItemGroupTemplate-DnOVXK1l.js";import"./ComboBoxItemGroup-CPuvIbWZ.js";import"./ListItemBaseTemplate-Cj1nOoXc.js";import"./Token-BAqMUyIJ.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvObX3eg.js";import"./ToggleButton-DprkIF_5.js";import"./SuggestionItem-CKRLTHHj.js";import"./index-D5TJuk4k.js";import"./Option-BLl2Q7AB.js";import"./index-BtvD0QZf.js";import"./SegmentedButton-BeE07OxI.js";import"./index-BrMZtkt6.js";import"./Select-DqU5okXE.js";import"./InvisibleMessage-tWO1LuD6.js";import"./slim-arrow-down-XGqqmupf.js";import"./index-C1FVPsyk.js";import"./index-DBDN__0v.js";import"./index-C3vfrSiy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrlNUypU.js";import"./group-2-BA5x23BP.js";import"./sort-descending-BCAq_Q0J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ikPuGIDZ.js";import"./utils-C8gBHpV1.js";import"./index-Sk78W01U.js";import"./index-DES0lnez.js";import"./index-BpGUb5zM.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./navigation-right-arrow-Bjlzjx0_.js";import"./navigation-right-arrow-Dm_S70wW.js";import"./useCurrentTheme-Uxgw71xd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtzTOU32.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVnkc0v4.js";import"./paper-plane-C_JViswO.js";import"./index-B7oLkWTs.js";import"./less-Cb2GPmNz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
