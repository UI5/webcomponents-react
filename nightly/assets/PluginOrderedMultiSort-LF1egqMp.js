import{j as e}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as i}from"./index-BTtluBKc.js";import{I as a,F as m}from"./CommandsAndQueries-4irgK4g8.js";import{M as s,C as p}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import{C as l}from"./ControlsWithNote-Dz8xEges.js";import"./copy-BR2g9NKm.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BtKyMCwH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./index-BPXqXslV.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AybIUtZQ.js";import"./delete-C18fTeGA.js";import"./settings-DOb4jD36.js";import"./NoData-Dzqqxzcq.js";import"./IllustratedMessage-XT-qOyRh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-RUBH0lOK.js";import"./index-cf0CgG6G.js";import"./index-CnMsIOMu.js";import"./slim-arrow-down-DPxeYNIS.js";import"./Input-RaRxEcJv.js";import"./ResponsivePopoverCommon.css-BnKNuLK_.js";import"./ValueStateMessage.css-D2xuJszB.js";import"./Suggestions.css-C-SIx5Gu.js";import"./ListBoxItemGroupTemplate-CkqhRzfm.js";import"./ComboBoxItemGroup-BGauKTTc.js";import"./ListItemBaseTemplate-CCNKkYk5.js";import"./Token-FJAepxqH.js";import"./ScrollEnablement-e6-Wl8Ct.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cd6yodnz.js";import"./ToggleButton-CKU3XZkp.js";import"./SuggestionItem-1xa7THEm.js";import"./index-D2rLPQ18.js";import"./Option-CtvAXvoh.js";import"./index-CCkYF5EZ.js";import"./SegmentedButton-BMw95QgJ.js";import"./index-mj1iThEp.js";import"./Select-DK_4ZOyC.js";import"./InvisibleMessage-PSe-IXvc.js";import"./slim-arrow-down-BIyrlIQV.js";import"./index-Dnit8d_5.js";import"./index-BVN7UCZF.js";import"./index-mJSdXP-Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CknUQnqi.js";import"./group-2-BYSUkX7I.js";import"./sort-descending-BGvYR9pA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De9vUNgF.js";import"./utils--AtpiRwX.js";import"./index-wOoILpmg.js";import"./index-CcNWTncD.js";import"./index-BPKkC6Cq.js";import"./navigation-down-arrow-CE59kIds.js";import"./navigation-right-arrow-5K5Bx0O1.js";import"./navigation-right-arrow-CrmWEXO3.js";import"./useCurrentTheme-CT2jPT6F.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DwlQ-CyJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DFX8rm6i.js";import"./paper-plane-DMs4w7xh.js";import"./index-dsSG16Z8.js";import"./less-4xUDvpDF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
