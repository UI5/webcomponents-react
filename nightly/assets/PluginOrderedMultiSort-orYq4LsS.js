import{j as e}from"./iframe-CqFnJp-S.js";import{useMDXComponents as i}from"./index-CynYu3xa.js";import{I as a,F as m}from"./CommandsAndQueries-D_WKy8dN.js";import{M as s,C as p}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import{C as l}from"./ControlsWithNote-Bb4mcuQO.js";import"./copy-B3ylxRux.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BPifQ1Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./index-CA0UVsfH.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GQqzYq73.js";import"./delete-DVGnJKaP.js";import"./settings-C86YGrfc.js";import"./NoData-CPLwwlHF.js";import"./IllustratedMessage-D9IfNlHf.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Cf9HMdQx.js";import"./index-DsLMVCKf.js";import"./index-D5uq3pGm.js";import"./slim-arrow-down-BKovBuLa.js";import"./Input-CQNiUAP7.js";import"./ResponsivePopoverCommon.css-B_6-LLQR.js";import"./ValueStateMessage.css-BBGnGBu9.js";import"./Suggestions.css-DzKfp-Xw.js";import"./ListBoxItemGroupTemplate-B53iLlHx.js";import"./ComboBoxItemGroup-Wbjga0AQ.js";import"./ListItemBaseTemplate-BGEwTL5Q.js";import"./Token-CDAtcjpf.js";import"./ScrollEnablement-BUHldyEa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1rHJjnW.js";import"./ToggleButton-BOg-qA3G.js";import"./SuggestionItem-xIpc8qFg.js";import"./index--ZiExa_2.js";import"./Option-DIgNMlnn.js";import"./index-TPfNhAGX.js";import"./SegmentedButton-sebu1UW5.js";import"./index-eNZtFDGv.js";import"./Select-CZVbWsMp.js";import"./InvisibleMessage-CgZaFHu8.js";import"./slim-arrow-down-D6HaHOTp.js";import"./index-2-mJG5vY.js";import"./index-Dghj_1B1.js";import"./index-Mhz05_do.js";import"./index-Bau1_Q7b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwYWP051.js";import"./group-2-DlIEyGbO.js";import"./sort-descending-C24nnD91.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ril5FfjQ.js";import"./utils-D1IBIU3s.js";import"./index-4ty_Ok3T.js";import"./index-CPy012dy.js";import"./index-Dc9tpclD.js";import"./navigation-down-arrow-D8TiYLu5.js";import"./navigation-right-arrow-P2di7b2W.js";import"./navigation-right-arrow-HH0z6MpN.js";import"./useCurrentTheme-oeVWKNpy.js";import"./index-CMtyblMd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ChZZThs6.js";import"./paper-plane-Rb1O3_rk.js";import"./index-RQySdApX.js";import"./less-Dkh_-EuF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
