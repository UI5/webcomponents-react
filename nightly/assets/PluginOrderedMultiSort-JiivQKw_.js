import{j as e}from"./iframe-pGkg1yhx.js";import{useMDXComponents as i}from"./index-zZGraQiW.js";import{I as a,F as m}from"./CommandsAndQueries-0d0cMNfY.js";import{M as s,C as p}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import{C as l}from"./ControlsWithNote-B93C_YVi.js";import"./copy-DnSu0Tnk.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Oube-80K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./index-Bw9Ab4ZS.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWlEWsVg.js";import"./delete-BJZVN444.js";import"./settings-RddDjvC_.js";import"./NoData-Bvkk8sHR.js";import"./IllustratedMessage-88xSDsjF.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CmeVb1jc.js";import"./index-CWA3Y_l5.js";import"./index-CNQndJGS.js";import"./slim-arrow-down-BJgntAOe.js";import"./Input-CyCFJ6Vu.js";import"./ResponsivePopoverCommon.css-B50dxgEH.js";import"./ValueStateMessage.css-DMDkPBvl.js";import"./Suggestions.css-CtaaBT2N.js";import"./ListBoxItemGroupTemplate-CJy-Y4BI.js";import"./ComboBoxItemGroup-Qn1YbaR3.js";import"./ListItemBaseTemplate-CH22A-Ku.js";import"./Token-rXecMhab.js";import"./ScrollEnablement-Bs7uevyz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdpPPBzO.js";import"./ToggleButton-ClU9taqo.js";import"./SuggestionItem-By4CvLXk.js";import"./index-C2E1bJm1.js";import"./Option-BLkO3chh.js";import"./index-D5tpw6HZ.js";import"./SegmentedButton-CkL5eMMe.js";import"./index-DHTghqxe.js";import"./Select-C2Bt6674.js";import"./InvisibleMessage-C46p7Cuq.js";import"./slim-arrow-down-vuddRe6v.js";import"./index-FG2xjpzy.js";import"./index-DsBDhpqc.js";import"./index-Byr0e0RY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzemDtcW.js";import"./group-2-C3xp8NlG.js";import"./sort-descending-D_cNFQo4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOGeczJA.js";import"./utils-5Au9oy8N.js";import"./index-Dy6BbuYA.js";import"./index-hUJ8i6CB.js";import"./index-D6kseXdp.js";import"./navigation-down-arrow-B7e8SP0b.js";import"./navigation-right-arrow-DdUm1UUs.js";import"./navigation-right-arrow-B7-X8v5o.js";import"./useCurrentTheme-CY0w9NPc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-iIn9LAKY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMMVd0W8.js";import"./paper-plane-Dh94bFtb.js";import"./index-DBNCJ5jk.js";import"./less-oxl3lbVo.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
