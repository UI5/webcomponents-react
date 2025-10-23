import{j as e}from"./iframe-BS9g_hR0.js";import{useMDXComponents as i}from"./index-D6Sv7Jl_.js";import{I as a,F as m}from"./CommandsAndQueries-BG9-iBHT.js";import{M as s,C as p}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import{C as l}from"./ControlsWithNote-C2dHGmos.js";import"./copy-DO4k2zsN.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-UYSjv1UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bi6dAMxf.js";import"./delete-IIbsJHVn.js";import"./settings-DSTG7J_6.js";import"./NoData-BljPz3Ez.js";import"./IllustratedMessage-CiQm-njB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CW7qAaUp.js";import"./index-DQx4NIhG.js";import"./index-By4S6eBF.js";import"./slim-arrow-down-BrDUUgjS.js";import"./Input-B_EkSV5h.js";import"./ResponsivePopoverCommon.css-Nm_aoG18.js";import"./ValueStateMessage.css-DatFi3mM.js";import"./Suggestions.css-T59McTpP.js";import"./ListBoxItemGroupTemplate-DnRr1Fiq.js";import"./ComboBoxItemGroup-BIMHyF1K.js";import"./ListItemBaseTemplate-DnRIKRO-.js";import"./Token-BOw69ZP_.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba27rldr.js";import"./ToggleButton-EL98Z2LO.js";import"./SuggestionItem-C07z3z-f.js";import"./index-1owRGSxf.js";import"./Option-D-xwSxUZ.js";import"./index-CYokNx1T.js";import"./SegmentedButton-By8aV2cE.js";import"./index-nBcB45SO.js";import"./Select-CVg8WfRH.js";import"./InvisibleMessage-BhK3omrR.js";import"./slim-arrow-down-B_FxGKxS.js";import"./index-BPWtfQy0.js";import"./index-Bz6XqX9r.js";import"./index-BCrnZa0s.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdIbePGa.js";import"./group-2-KLHU0fg-.js";import"./sort-descending-DqFSPUni.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DiqZr5G5.js";import"./utils-CU6KAQZP.js";import"./index-DkMHvxEC.js";import"./index-BdY1vOzS.js";import"./index-DEBok3dO.js";import"./navigation-down-arrow-z8aFqrM1.js";import"./navigation-right-arrow-BedSm2Sl.js";import"./navigation-right-arrow-Btw4WHBr.js";import"./useCurrentTheme-jHl_ErAW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eY3AJp1y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DS89XhU_.js";import"./paper-plane-D-ciUbX6.js";import"./index-C6qv90tY.js";import"./less-BsRZbj7x.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
