import{j as e}from"./iframe-CLKwUGEX.js";import{useMDXComponents as i}from"./index-DCuwspND.js";import{I as a,F as m}from"./CommandsAndQueries-dz6NHoyr.js";import{M as s,C as p}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import{C as l}from"./ControlsWithNote-gpbOfeMG.js";import"./copy-BrK10eH_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DdSElbyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cq8bkL-u.js";import"./delete-zgSUoyOg.js";import"./settings-CBLLXz6N.js";import"./NoData-DSW01fss.js";import"./IllustratedMessage-DAmuZ2UN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BA9ELEvi.js";import"./index-ka-ToCm_.js";import"./index-BHjhclkw.js";import"./slim-arrow-down-fLJI98pt.js";import"./Input-gdpdxYMJ.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./ValueStateMessage.css-B4kKha1P.js";import"./Suggestions.css-BCv_xKxV.js";import"./ListBoxItemGroupTemplate-9TRbrDJ2.js";import"./ComboBoxItemGroup-P9iDEYGv.js";import"./ListItemBaseTemplate-CXA-fGl_.js";import"./Token-BM0X9bQT.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYUOfpyN.js";import"./ToggleButton-rcmCnfHw.js";import"./SuggestionItem-IrwYDQ3Z.js";import"./index--P7kWLvm.js";import"./Option-CAO0eJwC.js";import"./index-BgqJi3Py.js";import"./SegmentedButton-Du7zSbut.js";import"./index-DcGyQm7o.js";import"./Select-Cy1yC1om.js";import"./InvisibleMessage-DsuuJ4si.js";import"./slim-arrow-down-NfxAXgq9.js";import"./index-7v9TUzFY.js";import"./index-u6yZ5lZT.js";import"./index-D_cyz0Cs.js";import"./index-FsTUQbBQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcOrZlNJ.js";import"./group-2-Cx0jhwyi.js";import"./sort-descending-BL8Dl8a2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D85Rx8La.js";import"./utils-Bfz42nTV.js";import"./index-Z-BdczqP.js";import"./index-Dq44XCib.js";import"./index-B31IT1af.js";import"./navigation-down-arrow-Dx9epi_Y.js";import"./navigation-right-arrow-Dk1AH9Ft.js";import"./navigation-right-arrow-BcI6851b.js";import"./useCurrentTheme-BkslSs8D.js";import"./index-BvhjsuIG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YHsws3VW.js";import"./paper-plane-C2yCzXa-.js";import"./index-CPp6j0v_.js";import"./less-BUl18ff9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
