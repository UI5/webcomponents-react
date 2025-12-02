import{j as e}from"./iframe-BN0GWVQe.js";import{useMDXComponents as i}from"./index-BLbTpX55.js";import{I as a,F as m}from"./CommandsAndQueries-C4w7BIRn.js";import{M as s,C as p}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import{C as l}from"./ControlsWithNote-DAjPJGUJ.js";import"./copy-B0NSZ-1k.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-7de-hSrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-BtNJyH.js";import"./delete-B-dRIfah.js";import"./settings-O_gAmrE7.js";import"./NoData-B6r5wtfr.js";import"./IllustratedMessage-CHylU20L.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BD6ty48g.js";import"./index-D6WGsm7x.js";import"./index-CS6KO8cx.js";import"./slim-arrow-down-xoHclsMi.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./ListBoxItemGroupTemplate-Dzhkqyak.js";import"./ComboBoxItemGroup-KbV6i136.js";import"./ListItemBaseTemplate-BfCP6G70.js";import"./Token-C1ZTtDz_.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6-433jt.js";import"./ToggleButton-ybF8gCpz.js";import"./SuggestionItem-Bgm-HNu4.js";import"./index-DW2XUEdT.js";import"./Option-B9k-7Ahv.js";import"./index-D8K4Qq5D.js";import"./SegmentedButton-C7VWunBd.js";import"./index-DNhI0FWS.js";import"./Select-CJ0wONEr.js";import"./InvisibleMessage-CRMlkkCP.js";import"./slim-arrow-down-B5np2n8S.js";import"./index-C4H-ZzEe.js";import"./index-92cS-QUv.js";import"./index-D6tqan70.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEM9HxMz.js";import"./group-2-BMZwrYYd.js";import"./sort-descending-BlHz6r-B.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CsK0f-Ik.js";import"./utils-ChyEe21I.js";import"./index-Lp9IxDFm.js";import"./index-CojJHUo4.js";import"./index-DUZ2D5ri.js";import"./navigation-down-arrow-2gSQh0oE.js";import"./navigation-right-arrow-BLvXVY5g.js";import"./navigation-right-arrow-X8mU-9lc.js";import"./useCurrentTheme-BB3WFm2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-As2m_wDV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgYFYmB4.js";import"./paper-plane-vPmlwkwT.js";import"./index-B4Hn3DKa.js";import"./less-rqU1UIrN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
