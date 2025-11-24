import{j as e}from"./iframe-ChLklOsd.js";import{useMDXComponents as i}from"./index-C8O_9vrB.js";import{I as a,F as m}from"./CommandsAndQueries-BJfqhrRX.js";import{M as s,C as p}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import{C as l}from"./ControlsWithNote-BKZjeS7U.js";import"./copy-e7lZwdk_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cni3-C_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qH1qKYII.js";import"./delete-h7eVr2Vw.js";import"./settings-BKcM-wPp.js";import"./NoData-J1K7Ymhn.js";import"./IllustratedMessage-CtqAhvd3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-XMbTNtDO.js";import"./index-TSkw3SF1.js";import"./index-BzOBut2T.js";import"./slim-arrow-down-C0sKTfFd.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./ListBoxItemGroupTemplate-CzUkEy5V.js";import"./ComboBoxItemGroup-DjZHBMDi.js";import"./ListItemBaseTemplate-fY_VN0oy.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ToggleButton-Cg7Ob5xf.js";import"./SuggestionItem-0lQp_3Fi.js";import"./index-AGwizfQV.js";import"./Option-Fwlb6Z4G.js";import"./index-B9caYodE.js";import"./SegmentedButton-BbW03Ci4.js";import"./index-Ogz2SBUe.js";import"./Select-DOXy8bYp.js";import"./InvisibleMessage-BNlluPzS.js";import"./slim-arrow-down-3G2_d1HL.js";import"./index-B1ESy-y5.js";import"./index-B0rGjn3A.js";import"./index-r7SyDcBw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CkATdhv-.js";import"./group-2-DsXa8NWz.js";import"./sort-descending-Dp-Q-OnD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ANjhBQcR.js";import"./utils-DUOn4GqP.js";import"./index--7ojLxPu.js";import"./index-YOMQ5zOo.js";import"./index-BqvABamv.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./navigation-right-arrow-GRefa7J7.js";import"./navigation-right-arrow-CvUkn4up.js";import"./useCurrentTheme-BJro2kG-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2jErdQp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RlsHBs8r.js";import"./paper-plane-C-4qo-fh.js";import"./index-BXWtnQNN.js";import"./less-CCt5DJvB.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
