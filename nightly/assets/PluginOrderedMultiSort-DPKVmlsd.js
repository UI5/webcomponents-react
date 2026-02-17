import{j as e}from"./iframe-XvyKyqpc.js";import{useMDXComponents as i}from"./index-CE_ul58K.js";import{I as a,F as m}from"./CommandsAndQueries-D-JkQMzp.js";import{M as s,C as p}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import{C as l}from"./ControlsWithNote-Clas6Dv3.js";import"./copy-CAC71KE2.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CWBCe2d6.js";import"./preload-helper-PPVm8Dsz.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-Du72Y0zD.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSc3e4Q2.js";import"./delete-B5OLgZyK.js";import"./settings-Dqag1I3v.js";import"./NoData-CyBr3teM.js";import"./IllustratedMessage-D_Z1qlsF.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-4b1G3hWQ.js";import"./index-BNAr3QqM.js";import"./index-DK_rKyLX.js";import"./slim-arrow-down-DK-zw0Wg.js";import"./Input-CXTsJDH8.js";import"./ResponsivePopoverCommon.css-DpCrglir.js";import"./ValueStateMessage.css-XAEG8ST6.js";import"./Suggestions.css-CIiHbc7N.js";import"./ListBoxItemGroupTemplate-BI-DM9uZ.js";import"./ComboBoxItemGroup-KzkX9_HX.js";import"./ListItemBaseTemplate-2fjL8Mbh.js";import"./Token-CnTsgTtT.js";import"./ScrollEnablement-DpQ29N-3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7uEHLD7.js";import"./ToggleButton-dSfF2CYI.js";import"./SuggestionItem-B8GSZHbf.js";import"./index-C9J1kaOU.js";import"./Option-CL9pckzb.js";import"./index-DLARPJs2.js";import"./SegmentedButton-CghOcyRS.js";import"./index-BjgTYctV.js";import"./Select-CTQ5bkNP.js";import"./InvisibleMessage-frxXXEWO.js";import"./slim-arrow-down-B4bsCSMm.js";import"./index-Cll0lnqL.js";import"./index-ZsJCbCIz.js";import"./index-DcsaMtsM.js";import"./index-DnbbOK4Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvBdwHZ9.js";import"./group-2-DAa-UPnl.js";import"./sort-descending-ByDZzzA_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXZXJSvV.js";import"./utils-eccEj8iF.js";import"./index-DTu7S7gE.js";import"./index-DnFcC2fY.js";import"./index-CjcCVkct.js";import"./navigation-down-arrow-CsgziDSU.js";import"./navigation-right-arrow-C0qs9ZTI.js";import"./navigation-right-arrow-B2VygeOe.js";import"./useCurrentTheme-09jbhVQN.js";import"./index-BUhgT8PM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BeXIHH0L.js";import"./paper-plane-D6Z_VCoj.js";import"./index-Bpq5Pj7e.js";import"./less-By6v1WfY.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
