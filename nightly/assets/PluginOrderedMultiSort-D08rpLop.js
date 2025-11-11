import{j as e}from"./iframe-Djuy8UzU.js";import{useMDXComponents as i}from"./index-CgJpCImo.js";import{I as a,F as m}from"./CommandsAndQueries-DtRiB_cH.js";import{M as s,C as p}from"./blocks-Phup9Acl.js";import"./Tag-B73vgZIB.js";import"./index-Da0VpmUz.js";import{C as l}from"./ControlsWithNote-D01OONhh.js";import"./copy-YJEoppKk.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-pXNMhsUR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./index-DedsmHJ0.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tm5sN1Cz.js";import"./delete-D5ga1RS3.js";import"./settings-OocRSNxu.js";import"./NoData-BJvGJO6C.js";import"./IllustratedMessage-DT3sEaH3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CS7LznOo.js";import"./index-Bg9deP-k.js";import"./index-BZ9EzmYc.js";import"./slim-arrow-down-CLg0Y-Da.js";import"./Input-DFpAAFjs.js";import"./ResponsivePopoverCommon.css-DOPzCxi3.js";import"./ValueStateMessage.css-BY9H75Zk.js";import"./Suggestions.css-DHOGHYV0.js";import"./ListBoxItemGroupTemplate-Bgj9qNs1.js";import"./ComboBoxItemGroup-Hz1udBKa.js";import"./ListItemBaseTemplate-YNfLoN64.js";import"./Token-CUzjxjIL.js";import"./ScrollEnablement-Bx2z7UGn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zVS7M5ZO.js";import"./ToggleButton-cXtGqYVJ.js";import"./SuggestionItem-lRSTXW-R.js";import"./index-CYksY84A.js";import"./Option-BHogyT1E.js";import"./index-C7Gh1DFG.js";import"./SegmentedButton-DHr4aC0S.js";import"./index-Crtuxpn7.js";import"./Select-BCrzSCH2.js";import"./InvisibleMessage-DlMsZ0UK.js";import"./slim-arrow-down-DfwEriIC.js";import"./index-Bn5IRh8r.js";import"./index-BvL5iwzQ.js";import"./index-Cv13D_Xn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Hbu-1YdU.js";import"./group-2-zKTXtqcT.js";import"./sort-descending-DrmqyO1p.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk5C2Trt.js";import"./utils-Ds_Qdonj.js";import"./index-Bkm_aMWw.js";import"./index-Cn1i3TVp.js";import"./index-C0EeSQjI.js";import"./navigation-down-arrow-B0vTzU2n.js";import"./navigation-right-arrow-BxQGxPzo.js";import"./navigation-right-arrow-Ce-NM_S4.js";import"./useCurrentTheme-CPdf3rwy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-tatqfUOn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqdL_3q4.js";import"./paper-plane-CJJNV6_c.js";import"./index-D-SZa65e.js";import"./less-CCZmshD0.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
