import{j as e}from"./iframe-Dn-CEP49.js";import{useMDXComponents as i}from"./index-CkYweSLX.js";import{I as a,F as m}from"./CommandsAndQueries-CJE7oJQ6.js";import{M as s,C as p}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import{C as l}from"./ControlsWithNote-Cw7ThXzW.js";import"./copy-ZbpB2fNv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ztfx2-Is.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./index-6NbWjJvY.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Diqxij9B.js";import"./delete-d6bn_JDV.js";import"./settings-BIg8VPcO.js";import"./NoData-rbt8DPTL.js";import"./IllustratedMessage-B6qON00u.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B41MixxM.js";import"./index-CbLC2T1-.js";import"./index-BEgrxcfq.js";import"./slim-arrow-down-Bj4DlPa3.js";import"./Input-CxXPc-Hx.js";import"./ResponsivePopoverCommon.css-Do9Vgr3v.js";import"./ValueStateMessage.css-D9t9_AMW.js";import"./Suggestions.css-CbUz-ZGI.js";import"./ListBoxItemGroupTemplate-46_Zh3wN.js";import"./ComboBoxItemGroup-RbdF7hhc.js";import"./ListItemBaseTemplate-O3CDUooj.js";import"./Token-BLH25HvY.js";import"./ScrollEnablement-zAaUIY5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-VFffhFve.js";import"./ToggleButton-mwmAbve5.js";import"./SuggestionItem-DOpNFTCA.js";import"./index-ClXgM0QD.js";import"./Option-BYlN-tpp.js";import"./index-BkRcZeSq.js";import"./SegmentedButton-BqQxCudY.js";import"./index-DYVv1ok6.js";import"./Select-BJT8n4vX.js";import"./InvisibleMessage-XUjgdwX9.js";import"./slim-arrow-down-C5fdvPae.js";import"./index-DL2C3Cwm.js";import"./index-D4a7uqpb.js";import"./index-BzTARrg3.js";import"./index-Ct561GKj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CH-P7ycI.js";import"./group-2-CrDDPtXD.js";import"./sort-descending-r8NGiDn9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-haQKghSk.js";import"./utils-DfQ09pUz.js";import"./index--NtLvyBH.js";import"./index-DdFdl9JW.js";import"./index-BazkfAzC.js";import"./navigation-down-arrow-CCvVF4OT.js";import"./navigation-right-arrow-BpL2A1bg.js";import"./navigation-right-arrow-jdXIwt_e.js";import"./useCurrentTheme-CTBlfWfu.js";import"./index-CTuKnf34.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C3EIIsQq.js";import"./paper-plane-6--7LTtA.js";import"./index-CbqLR4ce.js";import"./less-5cy1nyok.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
