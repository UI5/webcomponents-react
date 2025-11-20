import{j as e}from"./iframe-gC-jGD3g.js";import{useMDXComponents as i}from"./index-CnyMSsHR.js";import{I as a,F as m}from"./CommandsAndQueries-ChGbNwju.js";import{M as s,C as p}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import{C as l}from"./ControlsWithNote-FXWdfPVW.js";import"./copy-BSllcJzf.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-jS1llAg6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LQmtlLK5.js";import"./delete--nh-W3-Q.js";import"./settings-DUXq2pKC.js";import"./NoData-vVbLZZUt.js";import"./IllustratedMessage-aNBcoDsa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DRKx1zXM.js";import"./index-BHTZ4yDe.js";import"./index-AqAkx8om.js";import"./slim-arrow-down-DRMPXoxM.js";import"./Input-DCJKAbRS.js";import"./ResponsivePopoverCommon.css-B7TyWprV.js";import"./ValueStateMessage.css-CydKnI3y.js";import"./Suggestions.css-BrVVPmcm.js";import"./ListBoxItemGroupTemplate-CwzjGxkH.js";import"./ComboBoxItemGroup-DIhxkCFs.js";import"./ListItemBaseTemplate-Cvto1n-r.js";import"./Token-BrbWFJrM.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcVnTGUz.js";import"./ToggleButton-c15t9qo5.js";import"./SuggestionItem-Beu4eLam.js";import"./index-3g9KQFfJ.js";import"./Option-DZ1cZDPf.js";import"./index-DeaTVqXq.js";import"./SegmentedButton-BhdBmLvs.js";import"./index-Dfq-eLt0.js";import"./Select-hKzPoZWj.js";import"./InvisibleMessage-BJlc9Zmk.js";import"./slim-arrow-down-C9Z_Q9pC.js";import"./index-Dqb5plgn.js";import"./index-NBV4rwkS.js";import"./index-DoCANgze.js";import"./IconDesign-DXd8PPVF.js";import"./filter-f649f9Rh.js";import"./group-2-D7Gn0lkQ.js";import"./sort-descending-yfv3Cg_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CWZ9V4Ak.js";import"./utils-BMIaq7YY.js";import"./index-CQx6TRPA.js";import"./index-DVa76Ufg.js";import"./index-mydUACZk.js";import"./navigation-down-arrow-BYIZcEhQ.js";import"./navigation-right-arrow-D6ZdUzP9.js";import"./navigation-right-arrow-B-FehG3J.js";import"./useCurrentTheme-Bf3voSYI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYmzfp3l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPypzMSE.js";import"./paper-plane-CI4mRr-x.js";import"./index-KUzNPbfU.js";import"./less-Do7ux1rK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
