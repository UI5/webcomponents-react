import{j as e}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as i}from"./index-BURirfl-.js";import{I as a,F as m}from"./CommandsAndQueries-TIuZdWtI.js";import{M as s,C as p}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import{C as l}from"./ControlsWithNote-B7a3dgFK.js";import"./copy-CvLuzzlZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CyPVuxE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./index-Dnf0ia5k.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBxFCMLb.js";import"./delete-DTulYaAI.js";import"./settings-tx3CzgEQ.js";import"./NoData-Bshjt374.js";import"./IllustratedMessage-CCQBtLd9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DKIL7cga.js";import"./index-kDjDNPRR.js";import"./index-D7LIj5Um.js";import"./slim-arrow-down-BgIex6c4.js";import"./Input-Bn75OrvV.js";import"./ResponsivePopoverCommon.css-Bp0oDzHC.js";import"./ValueStateMessage.css-mxe_cMa3.js";import"./Suggestions.css-HrgLJez3.js";import"./ListBoxItemGroupTemplate-Blo7114h.js";import"./ComboBoxItemGroup-C4A4RTAb.js";import"./ListItemBaseTemplate-Crj91yI9.js";import"./Token-BzgB6gA9.js";import"./ScrollEnablement-DbCEb8PT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CelTCW5a.js";import"./ToggleButton-lFj29rfD.js";import"./SuggestionItem-D2y_todW.js";import"./index-DCwkTiB-.js";import"./Option-CXj69qWE.js";import"./index-l8ddpiaC.js";import"./SegmentedButton-rOSwY7SZ.js";import"./index-Dh8wCVOo.js";import"./Select-DifQlmAi.js";import"./InvisibleMessage-DKXtSvOz.js";import"./slim-arrow-down-CLA3TSxo.js";import"./index-DMla7rjx.js";import"./index-_lKZYWZe.js";import"./index-ob9pHg1a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B94VfVt_.js";import"./group-2-88JLzJKU.js";import"./sort-descending-BXFoHtVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-KroJlr.js";import"./utils-BzC6a3dT.js";import"./index-DgcTnc5w.js";import"./index-CHrJjqGe.js";import"./index-Bju32QxQ.js";import"./navigation-down-arrow-BuuDEqwu.js";import"./navigation-right-arrow-CghbZ4FB.js";import"./navigation-right-arrow-C3FyKz3D.js";import"./useCurrentTheme-BtlDZaCV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYbG7W8m.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Sw05o_Vs.js";import"./paper-plane-Iq18tC-e.js";import"./index-5gnscsEE.js";import"./less-BQGA1HOG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
