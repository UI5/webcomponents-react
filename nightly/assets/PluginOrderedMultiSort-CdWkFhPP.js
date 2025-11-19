import{j as e}from"./iframe-BdLp08tI.js";import{useMDXComponents as i}from"./index-L7M025bj.js";import{I as a,F as m}from"./CommandsAndQueries-A8ohCY01.js";import{M as s,C as p}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import{C as l}from"./ControlsWithNote-BfK2jDz_.js";import"./copy-CAz8pLUN.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-yn0tvp-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cc5ACQhd.js";import"./delete-C129Vo-j.js";import"./settings-CU9DNY2V.js";import"./NoData-CdpbHVsl.js";import"./IllustratedMessage-aNFXY5tv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6AfN2ty.js";import"./index-BwfJRUg8.js";import"./index-DbJZSO19.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./Input-BkxHEOLf.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./ValueStateMessage.css-KNUuhM7R.js";import"./Suggestions.css-DRL4VnmY.js";import"./ListBoxItemGroupTemplate-BswdqGi0.js";import"./ComboBoxItemGroup-DmWoR2D3.js";import"./ListItemBaseTemplate-q7lVjUmU.js";import"./Token-BUZ_-lS4.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NrFCjmp4.js";import"./ToggleButton-0L16aZ13.js";import"./SuggestionItem-CvJl4nQX.js";import"./index-a4Q7iOV6.js";import"./Option-CI2Yw2KP.js";import"./index-BesWFMlT.js";import"./SegmentedButton-DezAXtzP.js";import"./index-DEdHEHwC.js";import"./Select-CgTdKzom.js";import"./InvisibleMessage-CU9pQYDF.js";import"./slim-arrow-down-VvEv069w.js";import"./index-c-nauNND.js";import"./index-B7YCk-Wu.js";import"./index-BJsU8vuH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyqZ_FcD.js";import"./group-2-DPCLN9ms.js";import"./sort-descending-B-2HsOeS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv6NUcfX.js";import"./utils-CB796yal.js";import"./index-DVTrGvWQ.js";import"./index-C7WwmQky.js";import"./index-Dug3C8oV.js";import"./navigation-down-arrow-BWuNqmxj.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./useCurrentTheme-DUR02Wpt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-vE2t2Hyd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_VbuiKz.js";import"./paper-plane-CeqIEAvx.js";import"./index-mr-I5ZbO.js";import"./less-D5n1Rht5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
