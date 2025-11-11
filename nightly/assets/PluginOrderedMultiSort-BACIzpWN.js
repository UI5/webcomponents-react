import{j as e}from"./iframe-dcfOuKvt.js";import{useMDXComponents as i}from"./index-s6pmBJrF.js";import{I as a,F as m}from"./CommandsAndQueries-XLh3rfRK.js";import{M as s,C as p}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import{C as l}from"./ControlsWithNote-K-6vc354.js";import"./copy-CjQxEWgu.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D-8gJKdE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./index-BFv8_OJi.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC_o51Ui.js";import"./delete-BAzyGK0e.js";import"./settings-FAg3x57M.js";import"./NoData-D9utlD0G.js";import"./IllustratedMessage-aIAJlFbs.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B7nT3HYa.js";import"./index-Dy2F28Z_.js";import"./index-ov6Hqgi9.js";import"./slim-arrow-down-7ZYbfLfd.js";import"./Input-DZep6tUc.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./Suggestions.css-DvjeYE6w.js";import"./ListBoxItemGroupTemplate-ChRrtpqA.js";import"./ComboBoxItemGroup-CvAEveDk.js";import"./ListItemBaseTemplate-DNtdtyka.js";import"./Token-DQ8uLAYx.js";import"./ScrollEnablement-BhFMnfiL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3mcYXoD.js";import"./ToggleButton-HVoH_wGW.js";import"./SuggestionItem-DwMAv3Y5.js";import"./index-DKSwXKRo.js";import"./Option-DN_OxtE5.js";import"./index-B_kjn4LY.js";import"./SegmentedButton-DfxvXFe5.js";import"./index-BAbKpGMN.js";import"./Select-1hbOCPXG.js";import"./InvisibleMessage-yVfs4fqn.js";import"./slim-arrow-down-C5wzux3l.js";import"./index-B4P16y8A.js";import"./index-lCvDytw_.js";import"./index-BJoDmJyK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BKkgL7hV.js";import"./group-2-D_6f7wuD.js";import"./sort-descending-80LCu02o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bj_K8y3K.js";import"./utils-BCDlv38x.js";import"./index-NMCoUNxC.js";import"./index-DN8kdina.js";import"./index-Bfk5X2Wo.js";import"./navigation-down-arrow-BFC7OekD.js";import"./navigation-right-arrow-Ce3qhbEe.js";import"./navigation-right-arrow-qu2k__M4.js";import"./useCurrentTheme-CsIfI9uM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D86utbHM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsbxojB9.js";import"./paper-plane-taVkukQ2.js";import"./index-ZliIzRiZ.js";import"./less-BB1GhJj9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
