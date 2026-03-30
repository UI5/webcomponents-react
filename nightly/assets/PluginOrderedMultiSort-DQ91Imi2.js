import{j as e}from"./iframe-vcfuMEkL.js";import{u as i,M as a,C as m}from"./blocks-CzMAxM7Q.js";import{I as s}from"./CommandsAndQueries-BLcCgFEg.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import{C as p}from"./ControlsWithNote-CJBdoKN4.js";import"./copy-CTlr8Wzd.js";import{F as l}from"./Footer-B8luth97.js";import"./PageNotFound-DOCrqF52.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D0S5SWUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DAzSfgZb.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./index-CY4n9r1V.js";import"./index-BgY_pwT7.js";import"./index-C5MkOTN8.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./index-CPCjGKn0.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Crgbirl0.js";import"./delete-t-nTD-y0.js";import"./settings-C-AYaNdM.js";import"./NoData-D-VJSSvm.js";import"./NoFilterResults-BxHjy-Ir.js";import"./index-CG-qXqs_.js";import"./IllustratedMessage-BqYMJYO9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNNC3MB3.js";import"./Input-UOdVCXoq.js";import"./ResponsivePopoverCommon.css-BZx4EG62.js";import"./ValueStateMessage.css-BUiJkg_v.js";import"./Suggestions.css-C6VxQjoH.js";import"./ListBoxItemGroupTemplate-DKqiYFMZ.js";import"./ComboBoxItemGroup-DxGiZDD1.js";import"./ListItemBaseTemplate-Z0Vtvnm9.js";import"./Token-BipXjjpW.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ajyl_xA3.js";import"./ToggleButton-BvHVimm5.js";import"./multiselect-all-DMS-FMXo.js";import"./SuggestionItem-DM0Sr0MT.js";import"./index-BNjcqTu2.js";import"./Option-DFlIuwHE.js";import"./index-DXuj7n31.js";import"./SegmentedButton-BiCKQqFx.js";import"./index-CdVEJ8Xn.js";import"./Select-BRdHt1j2.js";import"./InvisibleMessage-OqmRbPaJ.js";import"./index-CA51ReO5.js";import"./index-D9lECCtr.js";import"./index-BGMDCEAA.js";import"./index-B95IPvM7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QMg4ltp-.js";import"./group-2-D1uLpEFP.js";import"./sort-descending-CSNhAS-7.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAB5UG.js";import"./utils-3Fin_E3c.js";import"./index-iVoXYErW.js";import"./index-CK-AKsKY.js";import"./index-ByXi5BjK.js";import"./navigation-down-arrow-VFZsVw9Y.js";import"./navigation-right-arrow-CyNJ1Cu6.js";import"./navigation-right-arrow-jHLkNE9I.js";import"./useCurrentTheme-C76bbDUR.js";import"./index-BopKc_Rk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D4Wf5-Pu.js";import"./paper-plane-DfuC-T1-.js";import"./index-Bz-Lpaym.js";import"./less-DUR6pMX9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
