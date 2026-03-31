import{j as e}from"./iframe-GXp7lrSQ.js";import{u as i,M as a,C as m}from"./blocks-XkJ722q3.js";import{I as s}from"./CommandsAndQueries-CVcJVi5r.js";import"./Tag-CUfffkkD.js";import"./index-D9hIm448.js";import{C as p}from"./ControlsWithNote-CAVQlFWx.js";import"./copy-_WAqiJ1e.js";import{F as l}from"./Footer-uVHBRSQb.js";import"./PageNotFound-VnOdSsgo.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CCSynAfm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B8HUwSLv.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./index-CMKcbagv.js";import"./index-CmMI2aTL.js";import"./index-BXKqqHdE.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./index-TceWecEs.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-VX4Vhqj7.js";import"./delete-B8zG0JxE.js";import"./settings-DnQ-nfdc.js";import"./NoData-AnHrsfo0.js";import"./NoFilterResults--i8J2M-o.js";import"./index-CERoqhvX.js";import"./IllustratedMessage--eZuDK_7.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNbkdYFu.js";import"./Input-KO3l8Brk.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./ValueStateMessage.css-D80lJWSa.js";import"./Suggestions.css-Ahw1quaz.js";import"./ListBoxItemGroupTemplate-DZFQ85cg.js";import"./ComboBoxItemGroup-ChKegmig.js";import"./ListItemBaseTemplate-XA1LRcK1.js";import"./Token-DR2_YNLL.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3m1DJEV.js";import"./ToggleButton-DwOQOQFC.js";import"./multiselect-all-TGdLhybc.js";import"./SuggestionItem-DQ4y2WD-.js";import"./index-DvYiMBT8.js";import"./Option-Dny_IhR6.js";import"./index-D9qCtwZi.js";import"./SegmentedButton-eU4n5SAR.js";import"./index-BHKTmJbu.js";import"./Select-CBTMV-I6.js";import"./InvisibleMessage-B-Rt2GQk.js";import"./index-fq_8vrBy.js";import"./index-CCgw5w5e.js";import"./index-Dhtc0t_i.js";import"./index-IufG6BAY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DQv9rnJ_.js";import"./group-2-CF9rBu8z.js";import"./sort-descending-8sFhQ0eM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mb2VS-jK.js";import"./utils-DMvTp3cY.js";import"./index-17IJ72DP.js";import"./index-D6OX3dYP.js";import"./index-i-wVs0AQ.js";import"./navigation-down-arrow-C9-QFAwk.js";import"./navigation-right-arrow-dF8lHbv3.js";import"./navigation-right-arrow-yvrVO2q2.js";import"./useCurrentTheme-cF8gI2uX.js";import"./index-B9tnRND4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZHvydOv.js";import"./paper-plane-AB8Tri35.js";import"./index-Btq87WCk.js";import"./less-DUrSicmG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
