import{j as e}from"./iframe-BFGaT_FV.js";import{useMDXComponents as i}from"./index-CnhfjtvF.js";import{I as a,F as m}from"./CommandsAndQueries-B8JKM3km.js";import{M as s,C as p}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import{C as l}from"./ControlsWithNote-DwpSieUl.js";import"./copy-AGelM_Ll.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BerL1zlH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTmyScv0.js";import"./delete-v-dXAAIl.js";import"./settings-BOscvD9f.js";import"./NoData-gDQFgR3G.js";import"./IllustratedMessage-CDHVVzlP.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DA9fHCLR.js";import"./index-vKbE8tbN.js";import"./index-D7iYQuDO.js";import"./slim-arrow-down-Dd8YkBw-.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./ListBoxItemGroupTemplate-undkDWdm.js";import"./ComboBoxItemGroup-OfkHN57U.js";import"./ListItemBaseTemplate-SnpzLXKW.js";import"./Token-CMJi_Rys.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccu5KVL2.js";import"./ToggleButton-CRoHXs7m.js";import"./SuggestionItem-DGnZQlbw.js";import"./index-Du7xx1dp.js";import"./Option-CdFGI1PC.js";import"./index-B0eNO-0P.js";import"./SegmentedButton-DCEuTMnH.js";import"./index-DKtUZxqJ.js";import"./Select-c6jnMs-7.js";import"./InvisibleMessage-CbPZDP3-.js";import"./slim-arrow-down-BdvQ_s0T.js";import"./index-jrrMCwgY.js";import"./index-Dl1PX_Mb.js";import"./index-Bs16yVYB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7e9On5N.js";import"./group-2-Dl113zhQ.js";import"./sort-descending-qVZJ1324.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DJcIUy6q.js";import"./utils-B6_SaaJR.js";import"./index-DMziRRZN.js";import"./index-DyXpRQb6.js";import"./index-BH-J8zHs.js";import"./navigation-down-arrow-DItIrMRs.js";import"./navigation-right-arrow-CKSHLqK6.js";import"./navigation-right-arrow-C4wfpKAx.js";import"./useCurrentTheme-C8SqHROD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bn2vXSX1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hb1ZDPhU.js";import"./paper-plane-DJjUVXFe.js";import"./index-DlH340EZ.js";import"./less-CUu-6yGw.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
