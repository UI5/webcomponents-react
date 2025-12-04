import{j as e}from"./iframe-DMN4M7xk.js";import{useMDXComponents as i}from"./index-CILjehOn.js";import{I as a,F as m}from"./CommandsAndQueries-WBNIPpbv.js";import{M as s,C as p}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import{C as l}from"./ControlsWithNote-tXM9Snha.js";import"./copy-DfWrS8Wl.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bwh82CG4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./index-DC1f3cIv.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-72B-FfI5.js";import"./delete-BXcfeAkW.js";import"./settings-BMDPPYXO.js";import"./NoData-DpL9B_tB.js";import"./IllustratedMessage-mQG8NQdQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DfpnzG1x.js";import"./index-DEnaRZHs.js";import"./index-DdLV16yZ.js";import"./slim-arrow-down-BMYaUctI.js";import"./Input-kyaMbtwm.js";import"./ResponsivePopoverCommon.css-DoVie0vW.js";import"./ValueStateMessage.css-C3TIUP8t.js";import"./Suggestions.css-CBNkZ6eC.js";import"./ListBoxItemGroupTemplate-DCFa39XX.js";import"./ComboBoxItemGroup-B-BVlY4D.js";import"./ListItemBaseTemplate-Daft9BoV.js";import"./Token-Z8h45JU6.js";import"./ScrollEnablement-DdRp-vrJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-t6-iH22V.js";import"./ToggleButton--FmypGgi.js";import"./SuggestionItem-Bl1gf1ZL.js";import"./index-D9Z4d1ny.js";import"./Option-C1p55_wy.js";import"./index-DnVGk-28.js";import"./SegmentedButton-DSbC53rX.js";import"./index-BpVvcCHt.js";import"./Select-DvRwS8Np.js";import"./InvisibleMessage-CgRkoQY3.js";import"./slim-arrow-down-Blx7Bq27.js";import"./index-C1jqhprP.js";import"./index-hWsfyVsS.js";import"./index-DRqK0cBV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbXkmi4n.js";import"./group-2-DsWqo2_5.js";import"./sort-descending-CTHBPK2U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BI8mE9zy.js";import"./utils-BB4PbXwM.js";import"./index-ouNpfsue.js";import"./index-DdbWS-FF.js";import"./index-CpkaOZjF.js";import"./navigation-down-arrow-CcMgeJLo.js";import"./navigation-right-arrow-g9yG16Y1.js";import"./navigation-right-arrow-CpLRbIv1.js";import"./useCurrentTheme-CGUqiswm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CCQV-_Jh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYrYoRZ6.js";import"./paper-plane-B0PE-HLg.js";import"./index-E42MgdkT.js";import"./less-Bk9ZhphN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
