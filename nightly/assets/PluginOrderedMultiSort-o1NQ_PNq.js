import{j as e}from"./iframe-BqzC-8C4.js";import{useMDXComponents as i}from"./index-YQ6GhEX5.js";import{I as a,F as m}from"./CommandsAndQueries-BJ93mlRM.js";import{M as s,C as p}from"./blocks-ayIIZ8Ez.js";import"./Tag-DMbvGyPZ.js";import"./index-DLI_KJ4q.js";import{C as l}from"./ControlsWithNote-De9wn04W.js";import"./copy-BAa7Mkrf.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B9bW7cYn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI7TE3Ph.js";import"./index-Bf-2mOJM.js";import"./index-CBL7x3cU.js";import"./Link-Cyx9O9I9.js";import"./index--RDSdd8J.js";import"./index-M-RJ-Kd6.js";import"./index-DFZxjAeq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjpHjoiw.js";import"./addCustomCSSWithScoping-BlPp9zh6.js";import"./index-yh1yAWiF.js";import"./information-CL-xPlFc.js";import"./sys-enter-2-mfMn16B5.js";import"./alert-DcIxt5mX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKOcL5_O.js";import"./delete-B0_Rw7kP.js";import"./settings-DwtumLBN.js";import"./NoData-CazGrZXU.js";import"./IllustratedMessage-zK5H3JPd.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Cw1Eja2C.js";import"./index-DYmdGGhX.js";import"./index-B4ILPk1v.js";import"./slim-arrow-down-BgPxvwnX.js";import"./Input-BIzIH4FC.js";import"./ResponsivePopoverCommon.css-DWPMpekW.js";import"./ValueStateMessage.css-B5whAX6s.js";import"./Suggestions.css-H-37CGAi.js";import"./ListBoxItemGroupTemplate-C3idOVig.js";import"./ComboBoxItemGroup-DIUMSAuM.js";import"./ListItemBaseTemplate-CsRnbDmP.js";import"./Token-CdnPMBnu.js";import"./ScrollEnablement-gBya7LIS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-lWm8UF3n.js";import"./ToggleButton-D5J62tyd.js";import"./SuggestionItem-B8nawxFb.js";import"./index-DSWs_DV-.js";import"./Option-BNC4WdOq.js";import"./index-B9_kEjlX.js";import"./SegmentedButton-YbvP5bMv.js";import"./index-BtugCD05.js";import"./Select-DX2So7Kf.js";import"./InvisibleMessage-k93LnoOV.js";import"./slim-arrow-down-BldRuQp0.js";import"./index-ClKg_r_t.js";import"./index-CIWagj-s.js";import"./index-CnvRzieE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLmmxjak.js";import"./group-2-CYyQt0dS.js";import"./sort-descending-HehUk6xl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCtsywZE.js";import"./utils-BEgTsQ3i.js";import"./index-KdHNkHqX.js";import"./index-DuFahMhv.js";import"./index-DPhALhpO.js";import"./navigation-down-arrow-BIBuNkWg.js";import"./navigation-right-arrow-G5P_762s.js";import"./navigation-right-arrow-DjnGNXSH.js";import"./useCurrentTheme-B2hbGZxz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_o2MQlb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CG1Q2uL4.js";import"./paper-plane-BNxrdXoX.js";import"./index-B11o6AUS.js";import"./less-DVg8rSGY.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
