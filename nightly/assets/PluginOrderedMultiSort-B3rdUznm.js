import{j as e}from"./iframe-DVaoJynC.js";import{useMDXComponents as i}from"./index-D8trWAUj.js";import{I as a,F as m}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as s,C as p}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import{C as l}from"./ControlsWithNote-Dec-XbEd.js";import"./copy-DE_2j5FQ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DOBjcAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByjmV8TX.js";import"./delete-C5YMqpOL.js";import"./settings-d6RTuHxS.js";import"./NoData-BrDVqhYl.js";import"./IllustratedMessage-DSeDOabw.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B1sGl9VQ.js";import"./index-DIUkg0Bi.js";import"./index-DlYrVi7e.js";import"./slim-arrow-down-DblcDTH-.js";import"./Input-DJnlitcX.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./Suggestions.css-gCSTg-U6.js";import"./ListBoxItemGroupTemplate-DjbBkz5B.js";import"./ComboBoxItemGroup-BgJNW9a2.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ToggleButton-DtAyHkvM.js";import"./SuggestionItem-VJ7PiMQr.js";import"./index-Dv6upnSV.js";import"./Option-CxhLxOlt.js";import"./index-DXNRk6WZ.js";import"./SegmentedButton-CwKnK_Zk.js";import"./index-DUJ3en-c.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./index-CF3T_Rux.js";import"./index-BO8JvDII.js";import"./index-A1tOTDKa.js";import"./index-D0XhROSl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-v-o7NIgL.js";import"./group-2-DFNtb2FF.js";import"./sort-descending-D8RrH-Tr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dyt-PFJH.js";import"./utils-Bi-_D6jF.js";import"./index-flUwuEIb.js";import"./index-BPU2VOiy.js";import"./index-CeHR8ypK.js";import"./navigation-down-arrow-CwSnvoD7.js";import"./navigation-right-arrow-DqGIwB48.js";import"./navigation-right-arrow-DGKZ_ZhO.js";import"./useCurrentTheme-DsBFWJ7L.js";import"./index-B3rGDK-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYo7ps0s.js";import"./paper-plane-Dn8GiRfM.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
