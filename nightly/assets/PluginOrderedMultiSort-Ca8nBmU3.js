import{j as e}from"./iframe-jlZ7haKH.js";import{useMDXComponents as i}from"./index-BDRke1Rk.js";import{I as m}from"./CommandsAndQueries-C62gP0Wv.js";import{M as a,C as s}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import{C as p}from"./ControlsWithNote-DFYrFrtH.js";import"./copy-BXrubwPI.js";import{F as l}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DeV4w8oQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CF1TeXpN.js";import"./delete-CXC_x1Wt.js";import"./settings-Cb2pk8-g.js";import"./NoData-DHSqpjwQ.js";import"./NoFilterResults-C1oKXwEb.js";import"./index-_9twBSC1.js";import"./IllustratedMessage-CAZPNMC9.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-dukZDfuG.js";import"./slim-arrow-down-CBNyDt1h.js";import"./Input-DEOLuuQ3.js";import"./ResponsivePopoverCommon.css-C-1sAsFZ.js";import"./ValueStateMessage.css-vjmAhNEW.js";import"./Suggestions.css-vYaR_fB3.js";import"./ListBoxItemGroupTemplate-u6isFPzQ.js";import"./ComboBoxItemGroup-CGtKHfXx.js";import"./ListItemBaseTemplate-BrqWXWhE.js";import"./Token-D3dxQxC_.js";import"./ScrollEnablement-BXzeOUzo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9UYn_auW.js";import"./ToggleButton-Bx4hMrn4.js";import"./SuggestionItem-CbZUBmQR.js";import"./index-C2sPI_0t.js";import"./Option-gWpmqGV0.js";import"./index-CBvlNyEh.js";import"./SegmentedButton-C0MY1V7R.js";import"./index-DoKQkSY9.js";import"./Select-T7Cbny-Q.js";import"./InvisibleMessage-DF9bJNX1.js";import"./slim-arrow-down-OBUhn7dW.js";import"./index-C5kwsDAy.js";import"./index-BJ9tFuf9.js";import"./index-DGcTw-tM.js";import"./index-BoJsfaPJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C6RdI72b.js";import"./group-2-B0xuaGVP.js";import"./sort-descending-B15HlQOL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4gr_cEr.js";import"./utils-Dg8OiBgJ.js";import"./index-B9iEuw5a.js";import"./index-CfgM1I13.js";import"./index-CsIoukbr.js";import"./navigation-down-arrow-CnCKx9b1.js";import"./navigation-right-arrow-C6AIXjk9.js";import"./navigation-right-arrow-BR4Lo9-V.js";import"./useCurrentTheme-Di1dsbRk.js";import"./index-DuIRYjXG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBECOKtB.js";import"./paper-plane-BvaLAYzQ.js";import"./index-vs6vsdhj.js";import"./less-Bo8veSqq.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Le(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Le as default};
