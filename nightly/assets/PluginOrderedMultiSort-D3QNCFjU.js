import{j as e}from"./iframe-DLeMGAs6.js";import{useMDXComponents as i}from"./index-BeTNnGed.js";import{I as a,F as m}from"./CommandsAndQueries-Do6MeMuW.js";import{M as s,C as p}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import{C as l}from"./ControlsWithNote-QYSrl-UI.js";import"./copy-ClThfN15.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-zkAPVIrI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./index-BelAbkZz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZLT9ilq.js";import"./delete-DC-_Y22L.js";import"./settings-C8YgnEjD.js";import"./NoData-DIe6lTz9.js";import"./IllustratedMessage-C0T15_Cz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DSla0Ypj.js";import"./index-DKaTYi7Y.js";import"./index-dlJAYtv8.js";import"./slim-arrow-down-CXh7VlFz.js";import"./Input-BvEbFIGf.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./ValueStateMessage.css-CYGxQFIT.js";import"./Suggestions.css-CnL5XvB_.js";import"./ListBoxItemGroupTemplate-TBm3jGfQ.js";import"./ComboBoxItemGroup-v9blSsnm.js";import"./ListItemBaseTemplate-B0VtVoTY.js";import"./Token-DXa6gniM.js";import"./ScrollEnablement-LGuvxbbP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CVpJPqGn.js";import"./ToggleButton-DdR_U0J3.js";import"./SuggestionItem-Bytxfkg7.js";import"./index-DWJIi1Cu.js";import"./Option-BABDhVgD.js";import"./index-BOHoyyXI.js";import"./SegmentedButton-BPn908Zb.js";import"./index-DLP1sSSh.js";import"./Select-D3bJlSEY.js";import"./InvisibleMessage-CjnlHtO4.js";import"./slim-arrow-down-DMmSjQ_W.js";import"./index-DRwQgmSC.js";import"./index-C6b9i92g.js";import"./index-CsHvU1n4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-P5Bwzq42.js";import"./group-2-CC5jzuvS.js";import"./sort-descending-BzCp0kGA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDs2ZQJs.js";import"./utils-DPe1wMqz.js";import"./index-Bg78CFbQ.js";import"./index-Bf4uxavh.js";import"./index-BiS7rtJ9.js";import"./navigation-down-arrow-B6cj3Ilp.js";import"./navigation-right-arrow-GrjOYVc0.js";import"./navigation-right-arrow-DkYagu5m.js";import"./useCurrentTheme-Xs1NZ5mm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-7Psn0Vsh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Doon_hgW.js";import"./paper-plane-BrBAfH5S.js";import"./index-Bred2sqK.js";import"./less-B08nub1h.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
