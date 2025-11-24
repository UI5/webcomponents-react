import{j as e}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as i}from"./index-itFp6RcL.js";import{I as a,F as m}from"./CommandsAndQueries-DU6Rn88_.js";import{M as s,C as p}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import{C as l}from"./ControlsWithNote-DlcUKPFN.js";import"./copy-uYDkz2OX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cu78AcrT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-D0vFHCq5.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByRe-Pr9.js";import"./delete-GZgGCRu5.js";import"./settings-C5tCT27d.js";import"./NoData-BhTX_TQK.js";import"./IllustratedMessage-CKdzeJEN.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C007fInA.js";import"./index-CVRnarRU.js";import"./index-Cwu6OG7i.js";import"./slim-arrow-down-C_CcIh7F.js";import"./Input-UTXGmmfd.js";import"./ResponsivePopoverCommon.css-DpRk3tRF.js";import"./ValueStateMessage.css-Br1luTux.js";import"./Suggestions.css-IywVbVu3.js";import"./ListBoxItemGroupTemplate-D-Qfwc-O.js";import"./ComboBoxItemGroup-DBZRijA_.js";import"./ListItemBaseTemplate-DHW-flPt.js";import"./Token-AKwzEfcp.js";import"./ScrollEnablement-CzBIaYtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Q4pfieza.js";import"./ToggleButton-DSylEXGK.js";import"./SuggestionItem-CDslL1Zi.js";import"./index-CU5opL-S.js";import"./Option-DqKLKc7N.js";import"./index-C4qT761X.js";import"./SegmentedButton-CaLUUleO.js";import"./index-DLa-IKPk.js";import"./Select-pcxnTQd1.js";import"./InvisibleMessage-oFo1Gh6Z.js";import"./slim-arrow-down-CvRj7da0.js";import"./index-JVo02ZVr.js";import"./index-GtlTqLaY.js";import"./index-AWueUsQI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJwBvwXw.js";import"./group-2-CQWF_2lh.js";import"./sort-descending-DdwgSP0m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv3rwh9l.js";import"./utils-CSrsxa_x.js";import"./index-ByHyVxRG.js";import"./index-K1LoBgk-.js";import"./index-BnzSR-dI.js";import"./navigation-down-arrow-BIunLDBw.js";import"./navigation-right-arrow-_UKX_FlU.js";import"./navigation-right-arrow-B-0frPyv.js";import"./useCurrentTheme-CQ57EUtO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HUtZK3H1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Tj0-8HEj.js";import"./paper-plane-HaunRPAT.js";import"./index-CgbtStQa.js";import"./less-BpW4qLUX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
