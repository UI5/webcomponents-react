import{j as e}from"./iframe-wbWwESAy.js";import{useMDXComponents as i}from"./index-BOBJYedV.js";import{I as a,F as m}from"./CommandsAndQueries-C1vl6z57.js";import{M as s,C as p}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import{C as l}from"./ControlsWithNote-DvhTjaki.js";import"./copy-sux1w53_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ymB0dvzI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./index-DrYBsayo.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSCYBoid.js";import"./delete-CkbWcAQ8.js";import"./settings-DSjEV05c.js";import"./NoData-DSScVfbu.js";import"./IllustratedMessage-CixZtxVG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b7Wr6axn.js";import"./index-D5jEuy6P.js";import"./index-rxWa-PP3.js";import"./slim-arrow-down-Beir7aM1.js";import"./Input-Vu44DOAo.js";import"./ResponsivePopoverCommon.css-D988s0PK.js";import"./ValueStateMessage.css-CdnX5Q24.js";import"./Suggestions.css-DzjZuQlP.js";import"./ListBoxItemGroupTemplate-CeF3Gz87.js";import"./ComboBoxItemGroup-j5CzfWaH.js";import"./ListItemBaseTemplate-BQRJYW54.js";import"./Token-Co-splGb.js";import"./ScrollEnablement-DlXiJ1Ol.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BnhmLw4e.js";import"./ToggleButton-BWLlCYgP.js";import"./SuggestionItem-BL--DX9A.js";import"./index-BuN2F6Z9.js";import"./Option-BfBV6oRK.js";import"./index-BASr6ULO.js";import"./SegmentedButton-BMoLUOOT.js";import"./index-CyJ9rJpG.js";import"./Select-C4v57l5j.js";import"./InvisibleMessage-DiUlqqZw.js";import"./slim-arrow-down-DGcq_Pe_.js";import"./index-DRSwvrEw.js";import"./index-4LVdgCdo.js";import"./index-D7tI0R5X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS8HWzLV.js";import"./group-2-zJzmiyTG.js";import"./sort-descending-D-FdC3xQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtV9Msfp.js";import"./utils-CKST4OLl.js";import"./index-BZtqaS2C.js";import"./index-CxcyIJ4L.js";import"./index-DgwCbpUf.js";import"./navigation-down-arrow-Dp1eGb2c.js";import"./navigation-right-arrow-Cdr0GtsE.js";import"./navigation-right-arrow-Do0mt2Fs.js";import"./useCurrentTheme-oAkfJU9N.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoctPpsF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Co8lcZlm.js";import"./paper-plane-CumYDqaS.js";import"./index-DIEkrnVJ.js";import"./less-DKy2uX_G.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
