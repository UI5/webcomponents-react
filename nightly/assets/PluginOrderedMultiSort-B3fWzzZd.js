import{j as e}from"./iframe-CaWUkniD.js";import{useMDXComponents as i}from"./index-DfLMUe36.js";import{I as a,F as m}from"./CommandsAndQueries-Bkeh__iN.js";import{M as s,C as p}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import{C as l}from"./ControlsWithNote-tn4IlKYb.js";import"./copy-CqMAivUp.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-GUBWaz4r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./index-DN8rN30Z.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNLMWyGP.js";import"./delete-DJycwJF9.js";import"./settings-D0DUxEmW.js";import"./NoData-BQxtA4T5.js";import"./IllustratedMessage-9XpGkzs2.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-V9izGDFT.js";import"./index-z-EgR5pV.js";import"./index-BPujMNjp.js";import"./slim-arrow-down-CB7ij7Kf.js";import"./Input-BN2yOYjz.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./ValueStateMessage.css-BIWamRUp.js";import"./Suggestions.css-DWWZcteF.js";import"./ListBoxItemGroupTemplate-BVaZKClQ.js";import"./ComboBoxItemGroup-Bqkr7cfP.js";import"./ListItemBaseTemplate-B3Kokzka.js";import"./Token-BnxjjGQW.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKc5fhLO.js";import"./ToggleButton-TkWtjD4U.js";import"./SuggestionItem-CptvwYkF.js";import"./index-MXkAGYYf.js";import"./Option-BNo4kTf7.js";import"./index-C9vxlEk3.js";import"./SegmentedButton-BEWmD6r8.js";import"./index-BgPgtd7C.js";import"./Select-BMQA0u2O.js";import"./InvisibleMessage-DosCuqjU.js";import"./slim-arrow-down-vFoZRNj4.js";import"./index-C_KCvI3u.js";import"./index-l4j-qO6K.js";import"./index-DVZys7-W.js";import"./index-NObIppjX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qhMCcofp.js";import"./group-2-CIA_20_o.js";import"./sort-descending-Cis9FyCm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlLi_Ygh.js";import"./utils--eOsPXAp.js";import"./index-B4567yCp.js";import"./index-h4R6a7CP.js";import"./index-D5Irx0vg.js";import"./navigation-down-arrow-C-jc4BDF.js";import"./navigation-right-arrow-BUkZPDn1.js";import"./navigation-right-arrow-C4gLCsO1.js";import"./useCurrentTheme-D0Vszlbo.js";import"./index-9DL7nPRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-dBQdTW19.js";import"./paper-plane-DIR6AIqV.js";import"./index-D0Vb1Rdi.js";import"./less-CmPnBj1b.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
