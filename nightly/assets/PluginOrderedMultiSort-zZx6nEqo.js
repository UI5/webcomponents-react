import{j as e}from"./iframe-utVLPk6_.js";import{useMDXComponents as i}from"./index-_7Ivp6Lr.js";import{I as a,F as m}from"./CommandsAndQueries-BVodeffY.js";import{M as s,C as p}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import{C as l}from"./ControlsWithNote-CFk9VQAH.js";import"./copy-lkIY5Hce.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BDsnXMC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9p4z9Ic.js";import"./delete-DU934BZr.js";import"./settings-DNYW2Yi4.js";import"./NoData-DnrO3Jwz.js";import"./IllustratedMessage-DRvKcE8V.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DuJYHUBv.js";import"./index-DR6xJv6H.js";import"./index-C1CQn4Ke.js";import"./slim-arrow-down-CGFNdOyS.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./ListBoxItemGroupTemplate-Ck1u2roF.js";import"./ComboBoxItemGroup-C0T7EKNO.js";import"./ListItemBaseTemplate-C2vXW6Ud.js";import"./Token-DQU0dq_y.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjnDf0fW.js";import"./ToggleButton-C4-LaA2x.js";import"./SuggestionItem-DboqQoqi.js";import"./index-F4xTZLhy.js";import"./Option-sIfC3W_q.js";import"./index-BtNFNoxA.js";import"./SegmentedButton-vHAZ21UT.js";import"./index-SO2G2vA7.js";import"./Select-DZIQ9ThU.js";import"./InvisibleMessage-CxrOCkfz.js";import"./slim-arrow-down-BfxVVO5J.js";import"./index-B6DVqkRr.js";import"./index-DqzlYh_H.js";import"./index-DGUOU9Dg.js";import"./index-BIVITqPd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_SeQI6p.js";import"./group-2-DwYUID86.js";import"./sort-descending-s-9kbj_2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CReDoCO5.js";import"./utils-CKyuyf9p.js";import"./index-DIwmFcHk.js";import"./index-Bs3vKR02.js";import"./index-zHNwrOOb.js";import"./navigation-down-arrow-CSxEN5wN.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./useCurrentTheme-DctUO6zQ.js";import"./index-EZDuqYef.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DR6ovS2D.js";import"./paper-plane-BTVeyq21.js";import"./index-B60t1jRe.js";import"./less-Bc9CIIDh.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
