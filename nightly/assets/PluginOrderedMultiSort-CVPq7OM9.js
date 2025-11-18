import{j as e}from"./iframe-CmCInUUM.js";import{useMDXComponents as i}from"./index-NXwP46VZ.js";import{I as a,F as m}from"./CommandsAndQueries-5W0lVTAB.js";import{M as s,C as p}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import{C as l}from"./ControlsWithNote-CE-dBef4.js";import"./copy-DcIDD3Wq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B998ocgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./index-DUfO3zu2.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWSnjBxa.js";import"./delete-ByaVoT0C.js";import"./settings-2tepRQZU.js";import"./NoData-D9vcDpv1.js";import"./IllustratedMessage-xrcgtvwK.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DeEwKae1.js";import"./index-C2-u_t4E.js";import"./index-B3GkoGRb.js";import"./slim-arrow-down-CMV2GNC8.js";import"./Input-BGKIH-Ic.js";import"./ResponsivePopoverCommon.css-CbiWaSFv.js";import"./ValueStateMessage.css-CnRjV3lN.js";import"./Suggestions.css-C2VGKGgK.js";import"./ListBoxItemGroupTemplate-k-S-fkpm.js";import"./ComboBoxItemGroup-BP14axHQ.js";import"./ListItemBaseTemplate-Qr8U-I-g.js";import"./Token-DPa-8Kib.js";import"./ScrollEnablement-D5S2g6lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1o7Rq9a2.js";import"./ToggleButton-BXsjca7D.js";import"./SuggestionItem-B2pt1HBo.js";import"./index-B1jimoj1.js";import"./Option-CFasqXc0.js";import"./index-3jN65nsN.js";import"./SegmentedButton-BKbX-QXu.js";import"./index-EW1SbgQq.js";import"./Select-55Dn_LDE.js";import"./InvisibleMessage-UG9NOdi8.js";import"./slim-arrow-down-DzHwR3gT.js";import"./index-bfIcPC0t.js";import"./index-BcE1ulij.js";import"./index-BqyE9dt2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CeCfP_kP.js";import"./group-2-oswyoZGa.js";import"./sort-descending-CGLEskGp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQOE7bFF.js";import"./utils-CKWqgB9c.js";import"./index-lw26byMY.js";import"./index-Dfo16rW6.js";import"./index-C7mwynkt.js";import"./navigation-down-arrow-DGAK0MlQ.js";import"./navigation-right-arrow-BNormXIu.js";import"./navigation-right-arrow-BskILAgl.js";import"./useCurrentTheme-Dnx3Zrry.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWEnIavS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQYLjazp.js";import"./paper-plane-CcL3Dpnl.js";import"./index-Dru_zBSF.js";import"./less-CMdTuNim.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
