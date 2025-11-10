import{j as e}from"./iframe-DwaN3YOb.js";import{useMDXComponents as i}from"./index-DJkPMHl0.js";import{I as a,F as m}from"./CommandsAndQueries-celHgEKj.js";import{M as s,C as p}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import{C as l}from"./ControlsWithNote-D9Mkz8kQ.js";import"./copy-CKG1fqk8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D8qv-qyc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./index-DTu_z_3g.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BvknPgOG.js";import"./delete-oCNE_JQh.js";import"./settings-DEs1Fc49.js";import"./NoData-DAYfBbqK.js";import"./IllustratedMessage-wzKYdU_-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cb_5cmEk.js";import"./index-BcPBHQ-Q.js";import"./index-Bke4YviU.js";import"./slim-arrow-down-CRaneK80.js";import"./Input-CLIZhDum.js";import"./ResponsivePopoverCommon.css-CJC70dmu.js";import"./ValueStateMessage.css-DJT3AHT7.js";import"./Suggestions.css-CeDH46KQ.js";import"./ListBoxItemGroupTemplate-BQ-rC9oN.js";import"./ComboBoxItemGroup-mMihpAIY.js";import"./ListItemBaseTemplate-CRnzAUDY.js";import"./Token-Bw2wQhOZ.js";import"./ScrollEnablement-lcRjFW01.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2rgfoOK.js";import"./ToggleButton-Cp7FiFLg.js";import"./SuggestionItem-CXEUnxx9.js";import"./index-BeETY4Un.js";import"./Option-DpzRHCg2.js";import"./index-BaS94csF.js";import"./SegmentedButton-Bs4JK4vg.js";import"./index-CdGoTqGJ.js";import"./Select-DP-woAt8.js";import"./InvisibleMessage-C38-tOeF.js";import"./slim-arrow-down-CCRASHHL.js";import"./index-YBse5kfL.js";import"./index-CB8IrRkr.js";import"./index-xilM6z0g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPVva38y.js";import"./group-2-CSHzsICd.js";import"./sort-descending-CWc_CsJd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KwF5pWQ5.js";import"./utils-CwcFpu02.js";import"./index-De37CZAE.js";import"./index-CjVizb-b.js";import"./index-ClYWh6yw.js";import"./navigation-down-arrow-DKN53QTj.js";import"./navigation-right-arrow-z9S6-sIY.js";import"./navigation-right-arrow-DD3mtqXo.js";import"./useCurrentTheme-Wde8txbg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D_nGAcEA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjGMBWnz.js";import"./paper-plane-Dc6cZlTV.js";import"./index-D10CmlMt.js";import"./less-BhgjPFtm.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
