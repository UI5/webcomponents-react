import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as i}from"./index-h_8BIj8E.js";import{I as a,F as m}from"./CommandsAndQueries-DAf-gTsq.js";import{M as s,C as p}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import{C as l}from"./ControlsWithNote-DOHOEzX8.js";import"./copy-DS8F9wTV.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-p9nnaNLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFff7xit.js";import"./delete-DbGDhc3E.js";import"./settings-BDyusSsU.js";import"./NoData-XqdFgBoh.js";import"./IllustratedMessage-Bp6_xgPq.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CHKD9vVt.js";import"./index-BkJQaYIU.js";import"./index-PApUnrQh.js";import"./slim-arrow-down-DOx_O52b.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./ListBoxItemGroupTemplate-CKUg1mHM.js";import"./ComboBoxItemGroup-DaYPy346.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./Token-BIrB-fXe.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DHZqKCWt.js";import"./ToggleButton-BXfnrvIj.js";import"./SuggestionItem-PiaokgXw.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./index-O9Cki_UE.js";import"./SegmentedButton-CsbFykOo.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./index-DK-JaRrB.js";import"./index-LLkC_BTv.js";import"./index-B10fvOaR.js";import"./index-Bm6hAg8x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTq-0MlA.js";import"./group-2-dlAvKLPk.js";import"./sort-descending-DS-dcpyJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_vvkfygM.js";import"./utils-BF_zpjgJ.js";import"./index-B-11WzHg.js";import"./index-Dd31BDFj.js";import"./index-D_srWwSh.js";import"./navigation-down-arrow-HO4UVtgk.js";import"./navigation-right-arrow-BINfOxqh.js";import"./navigation-right-arrow-DRlFirFz.js";import"./useCurrentTheme-C2GdyHiC.js";import"./index-CBxPLiTj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ca2uhQ15.js";import"./paper-plane-D7cPCcgX.js";import"./index-DocLDr0y.js";import"./less-CqbE9adU.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
