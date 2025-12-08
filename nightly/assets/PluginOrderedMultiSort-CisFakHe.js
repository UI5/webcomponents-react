import{j as e}from"./iframe-CISvTVNI.js";import{useMDXComponents as i}from"./index-bSkbOjqc.js";import{I as a,F as m}from"./CommandsAndQueries-CBtnfpxG.js";import{M as s,C as p}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import{C as l}from"./ControlsWithNote-DYexAoru.js";import"./copy-DUVHDUg7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CSObzMGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DV4j1UI6.js";import"./delete-7JFBm1Tm.js";import"./settings-kgiPQv_V.js";import"./NoData-DUEfNRQo.js";import"./IllustratedMessage-BlLIGWpl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-ByS1wDeQ.js";import"./index-Bq6YA1OZ.js";import"./index-BWvn97oh.js";import"./slim-arrow-down-D3jugRKw.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./ListBoxItemGroupTemplate-Cq7WxQEJ.js";import"./ComboBoxItemGroup-Dt8qMQbh.js";import"./ListItemBaseTemplate-C6SuP-30.js";import"./Token-DTyOAcLh.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dtqu1SWh.js";import"./ToggleButton-DkGlogzG.js";import"./SuggestionItem-3yI78rM6.js";import"./index-C-QW4iFF.js";import"./Option--Q44HJGH.js";import"./index-BGo3CCkY.js";import"./SegmentedButton-G6ESX7bA.js";import"./index-DYcBIjee.js";import"./Select-BUoOKAbj.js";import"./InvisibleMessage-D74Q5wYE.js";import"./slim-arrow-down-BCtidmgu.js";import"./index-C__maydq.js";import"./index-DdNorZl8.js";import"./index-TfXtv-kl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IUv5q-Nd.js";import"./group-2-pZ5u8b6c.js";import"./sort-descending-DeiY6LR9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DwAWNqSH.js";import"./utils-BVswc758.js";import"./index-DmEszc9N.js";import"./index-CTSNUJ9h.js";import"./index-CP1wr9dJ.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./navigation-right-arrow-CpRUuEp7.js";import"./navigation-right-arrow-BJIZXTFA.js";import"./useCurrentTheme-B4X-989J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMsN1t2K.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTE_y8fW.js";import"./paper-plane-BzsW306U.js";import"./index-DsfN-T3H.js";import"./less-CH3mR01q.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
