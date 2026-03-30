import{j as e}from"./iframe-DMCuegit.js";import{u as i,M as a,C as m}from"./blocks-_hT2CGz-.js";import{I as s}from"./CommandsAndQueries-C9E2MGX7.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import{C as p}from"./ControlsWithNote-CCfPh1IT.js";import"./copy-CPtUp5y0.js";import{F as l}from"./Footer-0Wa-LUTc.js";import"./PageNotFound-BG19bJbD.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D-i6P8d2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmPTNs7p.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./index-otx7j-A2.js";import"./index-Dzpyi8IH.js";import"./index-D62lIz3L.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-DEoJMyHo.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CPITllAz.js";import"./delete-90NTeC2G.js";import"./settings-BG5LV0dM.js";import"./NoData-DxVxgFNc.js";import"./NoFilterResults-DMxlrcRZ.js";import"./index-63F5wA8L.js";import"./IllustratedMessage-ChulAt0j.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-POlRPn.js";import"./Input-DirUDi6l.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./ListBoxItemGroupTemplate-DOKgNhxC.js";import"./ComboBoxItemGroup-2Q_3jSBR.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ToggleButton-CVG3irva.js";import"./multiselect-all-BNqAQuwc.js";import"./SuggestionItem-CyvdCOt4.js";import"./index-DxWvkwco.js";import"./Option-K8omM4DC.js";import"./index-OeONlChn.js";import"./SegmentedButton-Bb6xVT4r.js";import"./index-DCMtMQFC.js";import"./Select-47892hrl.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./index-Bl1X9PN5.js";import"./index-DBNpGVow.js";import"./index-BhAgdMmO.js";import"./index-CFS5q5jB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1hkl8V2.js";import"./group-2-CV4D2AOR.js";import"./sort-descending-BHZhyBvt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyUeQWg1.js";import"./utils-C6QaWlgq.js";import"./index-Cr983ZDU.js";import"./index-D4mlnoSI.js";import"./index-C773jyxg.js";import"./navigation-down-arrow-DVefUV5T.js";import"./navigation-right-arrow-DcZIB6we.js";import"./navigation-right-arrow-DoT4kgVk.js";import"./useCurrentTheme-D1A3ODx0.js";import"./index-E66unuDm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D9xi9QIt.js";import"./paper-plane-DLKkAQKF.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
