import{j as e}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as i}from"./index-RGZEkUe7.js";import{I as a,F as m}from"./CommandsAndQueries-edZwg3xm.js";import{M as s,C as p}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import{C as l}from"./ControlsWithNote-DfWkOMCN.js";import"./copy-ym3aYCLk.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DFr4kJK_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-DK4LsWgA.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuCk_hfi.js";import"./delete-DqEPR1Kk.js";import"./settings-BvE_RVs3.js";import"./NoData-BQN2z6DP.js";import"./IllustratedMessage-Bhm5_tWx.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DfQRIGVv.js";import"./index-DKZ-N2hR.js";import"./index-XPK1Pa3d.js";import"./slim-arrow-down-BBb3V39I.js";import"./Input-e95l3hLj.js";import"./ResponsivePopoverCommon.css-njDvm-N2.js";import"./ValueStateMessage.css-DOeSeMsA.js";import"./Suggestions.css-WQshat4v.js";import"./ListBoxItemGroupTemplate-CO9iiEMW.js";import"./ComboBoxItemGroup-Dnc717x5.js";import"./ListItemBaseTemplate-DtBXQ5ov.js";import"./Token-D2uvUdrZ.js";import"./ScrollEnablement-SOer0rOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BI0Ll8pv.js";import"./ToggleButton-RGCKdF71.js";import"./SuggestionItem-f7mMQ8dV.js";import"./index-DZi4le4v.js";import"./Option-BCCKGeE5.js";import"./index-D4-tQ_X-.js";import"./SegmentedButton-2j4XezgK.js";import"./index-kS8TEHfa.js";import"./Select-CWRM89JB.js";import"./InvisibleMessage-Y-gpMwBW.js";import"./slim-arrow-down-BYuclwN8.js";import"./index-D0BFf4OT.js";import"./index-CcS-nMSH.js";import"./index-CrYrIUjU.js";import"./index-DTqNuwcc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoT6c9V7.js";import"./group-2-B5f3D7wV.js";import"./sort-descending-DGeD_fPq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vmYkN8dN.js";import"./utils-DUEpvVwD.js";import"./index-D5HeUm9y.js";import"./index-OPBsLPCt.js";import"./index-Bep7VIpN.js";import"./navigation-down-arrow-DZGgjCfZ.js";import"./navigation-right-arrow-j6ezlh3e.js";import"./navigation-right-arrow-DmBjSJtS.js";import"./useCurrentTheme-DAm2pSwB.js";import"./index-B8H8C8Xn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xF7iXHP9.js";import"./paper-plane-CRn-ZhnF.js";import"./index-CO2hZTyW.js";import"./less-DBuv2uLm.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
