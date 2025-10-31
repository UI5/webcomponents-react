import{j as e}from"./iframe-Do6vb0_F.js";import{useMDXComponents as i}from"./index-CjAG28Zi.js";import{I as a,F as m}from"./CommandsAndQueries-DNVLBibD.js";import{M as s,C as p}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import{C as l}from"./ControlsWithNote-Yo9YxzeI.js";import"./copy-CtSFAv-a.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-9e-ZuUVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-CziNROS9.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5e1o-EBG.js";import"./delete-EOOd17FY.js";import"./settings-ChvCVI1H.js";import"./NoData-x4jRmZPJ.js";import"./IllustratedMessage-BpFZWdgz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BSP9fDKJ.js";import"./index-TJOhQ-wF.js";import"./index-D-PQMfR1.js";import"./slim-arrow-down-BFUSO5fa.js";import"./Input-CV4am0mg.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./ValueStateMessage.css-CBDkTR1J.js";import"./Suggestions.css-C6WB3Qk2.js";import"./ListBoxItemGroupTemplate-lrzGyG5S.js";import"./ComboBoxItemGroup-13V5PpfS.js";import"./ListItemBaseTemplate-9NOhdDod.js";import"./Token-DU3vF1l0.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz67dIqH.js";import"./ToggleButton-BRQRWz_K.js";import"./SuggestionItem-VOxlPlC0.js";import"./index-CRXuNHmI.js";import"./Option-CnEC2BV1.js";import"./index-DVIhR92p.js";import"./SegmentedButton-BQrBf1Xa.js";import"./index-U1Yn6qoO.js";import"./Select-CSgqeQI7.js";import"./InvisibleMessage-BMJss_kZ.js";import"./slim-arrow-down-DdXU4zZn.js";import"./index-ChvQYVHX.js";import"./index-D9aj3XtS.js";import"./index-0fgUCGZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DAByxNhp.js";import"./group-2-V4ylj1S-.js";import"./sort-descending-CJeT2CSo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bgdpa9Y6.js";import"./utils-CurRq_4A.js";import"./index-iowTYD53.js";import"./index-D7kd4dZQ.js";import"./index-DvB6BGuZ.js";import"./navigation-down-arrow-DUd4G2g_.js";import"./navigation-right-arrow-DMiO4jal.js";import"./navigation-right-arrow-B2BIXtfp.js";import"./useCurrentTheme-BKmE0cN8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-QvDENoWT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQccTeWy.js";import"./paper-plane-BnCgZ8Rr.js";import"./index-DmyLDLIV.js";import"./less-DarnrJ7s.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
