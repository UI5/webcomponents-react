import{j as e}from"./iframe-DvHwewhR.js";import{useMDXComponents as i}from"./index-CLaogw5S.js";import{I as a,F as m}from"./CommandsAndQueries-BNdncSiU.js";import{M as s,C as p}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import{C as l}from"./ControlsWithNote-B6M_GQJb.js";import"./copy-CCEG4Gow.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dd_rnw90.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./index-Dxi3lBUy.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiieVpdk.js";import"./delete-C50WcJDY.js";import"./settings-DvTsYRr7.js";import"./NoData-iB_8MDPa.js";import"./IllustratedMessage-oVo54I0H.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-cHrD6kwg.js";import"./index-CEYEmD8k.js";import"./index-8-MFD30_.js";import"./slim-arrow-down-BCqe8rnW.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./ListBoxItemGroupTemplate-CJ4lliK3.js";import"./ComboBoxItemGroup-4ruschY4.js";import"./ListItemBaseTemplate-T-VZoBk6.js";import"./Token-Z5rUiF0C.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRn_nQZN.js";import"./ToggleButton-CNBbGQUy.js";import"./SuggestionItem-D9PSkBzC.js";import"./index-B_6zM4N5.js";import"./Option-B4P7V8L-.js";import"./index-D86-Sydy.js";import"./SegmentedButton-Drzzk-Ka.js";import"./index-CzCKZDhR.js";import"./Select-CiA18WXr.js";import"./InvisibleMessage-zD0IVsFW.js";import"./slim-arrow-down-DzbDBKGu.js";import"./index-BZCe37Rq.js";import"./index-pKYM4Amv.js";import"./index-Cl1O2yFh.js";import"./index-BtAgcYwE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bp1zhNyd.js";import"./group-2-CzlS2QWU.js";import"./sort-descending-B3IM8fpN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_C7dAq5.js";import"./utils-D_wMeGo0.js";import"./index-CwfhL7TS.js";import"./index-DTHM9nkb.js";import"./index-uElYT7C3.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";import"./navigation-right-arrow-CCD3zipp.js";import"./useCurrentTheme-B8H1HpgT.js";import"./index-BOCVDdbZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C4H1iq0n.js";import"./paper-plane-DmQ3DckA.js";import"./index-DegyXyKA.js";import"./less-CIWKEBFR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
