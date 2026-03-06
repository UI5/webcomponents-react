import{j as e}from"./iframe-BoiPRijN.js";import{useMDXComponents as i}from"./index-BRummw3t.js";import{I as m}from"./CommandsAndQueries-BnJUOm3t.js";import{M as a,C as s}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import{C as p}from"./ControlsWithNote-Bq-Ivohs.js";import"./copy-Dvt_rD-U.js";import{F as l}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DejHcveP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-K5LglML7.js";import"./delete-Dla_cBMd.js";import"./settings--JyTse2K.js";import"./NoData-CEvC9SOK.js";import"./NoFilterResults-DGK3vz5s.js";import"./index-CUqI6XWZ.js";import"./IllustratedMessage-CUsnh6ic.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DTx62md9.js";import"./Input-BAuxatca.js";import"./ResponsivePopoverCommon.css-ujru0ghE.js";import"./ValueStateMessage.css-DEzEaU54.js";import"./Suggestions.css-xOjhYq7i.js";import"./ListBoxItemGroupTemplate-CaVscpMh.js";import"./ComboBoxItemGroup-qmXelGMa.js";import"./ListItemBaseTemplate-C5eauqC9.js";import"./Token-BjoEP2YG.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChcK6bsg.js";import"./ToggleButton-BGrpVUlG.js";import"./multiselect-all-M_uaembb.js";import"./SuggestionItem-CSav1c2B.js";import"./index-SHA1M5Y_.js";import"./Option-ViXAl4Kq.js";import"./index-x26HLP5K.js";import"./SegmentedButton-BSG--Us7.js";import"./index-D0HvuG0E.js";import"./Select-1bH1ueYZ.js";import"./InvisibleMessage-CXpqfns1.js";import"./index-CUzGhvMq.js";import"./index-CJrY5ywd.js";import"./index-CFdQXySd.js";import"./index-CGSreYF0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGDbGBAq.js";import"./group-2-pBllKI8s.js";import"./sort-descending-LT_QT5Pk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfWkv8FN.js";import"./utils-Dyu_RtUB.js";import"./index-DCXSZGzE.js";import"./index-Cx95m7EI.js";import"./index-C2zlICN6.js";import"./navigation-down-arrow-BwpxFzct.js";import"./navigation-right-arrow-BOhWzFQj.js";import"./navigation-right-arrow-DU9-hztn.js";import"./useCurrentTheme-C3dnJtDI.js";import"./index-U_qmoDgq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DETi-hVj.js";import"./paper-plane-CuIzSdKp.js";import"./index-BbjXtlM4.js";import"./less-3QagZ96S.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{sourceState:"none",of:o}),`
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
`,e.jsx(l,{})]})}function Ee(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ee as default};
