import{j as e}from"./iframe-DmoM9f-3.js";import{useMDXComponents as i}from"./index-B20arXE0.js";import{I as a,F as m}from"./CommandsAndQueries-D46yw8vq.js";import{M as s,C as p}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import{C as l}from"./ControlsWithNote-r_kaA0NY.js";import"./copy-CLLjPrKq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BA-x-C0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxmd5KNC.js";import"./delete-BafmMaQL.js";import"./settings-DABExvul.js";import"./NoData-BgI5Fxj4.js";import"./IllustratedMessage-jY-A97pw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-fU_rFE.js";import"./index-DKnHiKv6.js";import"./index-C5zCfksZ.js";import"./slim-arrow-down-D9YsUWAc.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./ListBoxItemGroupTemplate-CO5gMWQe.js";import"./ComboBoxItemGroup-CUCxyYDG.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./Token-ERY8FHBV.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJDVbUng.js";import"./ToggleButton-DEiEgDU3.js";import"./SuggestionItem-B2lniP2C.js";import"./index-CVEhOAGU.js";import"./Option-Bl_cRkCF.js";import"./index-D_A_mIMd.js";import"./SegmentedButton-BJxy3Jl0.js";import"./index-Bc77BXWZ.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./index-CmHMrHW6.js";import"./index-lVw2qlav.js";import"./index-C3g1EMi_.js";import"./index-hwt2sM8N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm4NGm5T.js";import"./group-2-BKpf1dk-.js";import"./sort-descending-BLlJfs1C.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CfmXpjSG.js";import"./utils-CX26tpMm.js";import"./index-C5hbXSHM.js";import"./index-4PnBH_j5.js";import"./index-CCKJVryI.js";import"./navigation-down-arrow-raxqbgPM.js";import"./navigation-right-arrow-j_ofrPu8.js";import"./navigation-right-arrow-Bc7TH_0C.js";import"./useCurrentTheme-xHMJsLTO.js";import"./index-CQscq9AO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bl9d5JMP.js";import"./paper-plane-D5XrZk42.js";import"./index-CF4Usvtu.js";import"./less-BemCrw5W.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
