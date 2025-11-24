import{j as e}from"./iframe-BsBPxA6U.js";import{useMDXComponents as i}from"./index-C_R4y4V0.js";import{I as a,F as m}from"./CommandsAndQueries-DGdgKo6k.js";import{M as s,C as p}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import{C as l}from"./ControlsWithNote-B9F0Q_Ut.js";import"./copy-CRGjVpRv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dz_KgCtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./index-CNyanKq8.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C4DK1I8l.js";import"./delete-C6tWuqNf.js";import"./settings-BUVkF3or.js";import"./NoData-DPwuC6Ww.js";import"./IllustratedMessage-It4mX3AQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DhRkh9dN.js";import"./index-BtadPSsW.js";import"./index-BfYOfOm3.js";import"./slim-arrow-down-BaJTeNEG.js";import"./Input-CZwakjm4.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./Suggestions.css-BqCzwqUI.js";import"./ListBoxItemGroupTemplate-IGzCyZVh.js";import"./ComboBoxItemGroup-SG-_g7dw.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./Token-4ELyI29f.js";import"./ScrollEnablement-B0j5N4_F.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-kYAT9Ja4.js";import"./ToggleButton-KhlEWnLT.js";import"./SuggestionItem-DsimlpEO.js";import"./index-B7yLONbc.js";import"./Option-MDNU8gos.js";import"./index-BkljQy5l.js";import"./SegmentedButton-Khrwb6vJ.js";import"./index-ClW9_Eny.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./index-VtRttBiA.js";import"./index-DXUdswCl.js";import"./index-CW8aTQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_shFmJq.js";import"./group-2-Da-lZ-6m.js";import"./sort-descending-CyfD2MR5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CrbezpGL.js";import"./utils-D0C3Iy2F.js";import"./index-BRI8OzSg.js";import"./index-IBVyyHs_.js";import"./index-CNoWV0dk.js";import"./navigation-down-arrow-BpmVanxM.js";import"./navigation-right-arrow-CWj3M1Tb.js";import"./navigation-right-arrow-BGWB-c0_.js";import"./useCurrentTheme-BPpHV_8o.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CrP7PNSA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1Y1l0w-.js";import"./paper-plane-cf9bL5y_.js";import"./index-BFI-nP8P.js";import"./less-DicCpNe9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
