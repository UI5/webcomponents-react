import{j as e}from"./iframe-CXQAdbiu.js";import{useMDXComponents as i}from"./index-B53u5pzW.js";import{I as a,F as m}from"./CommandsAndQueries-aoDJK_rZ.js";import{M as s,C as p}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import{C as l}from"./ControlsWithNote-CiJ6qJGs.js";import"./copy-DcVZp789.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BRSknd15.js";import"./preload-helper-PPVm8Dsz.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1bs8kF-.js";import"./delete-DowHx4wk.js";import"./settings-CVVvFOe0.js";import"./NoData-q7wNzTiS.js";import"./IllustratedMessage-DKb8AtT2.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B1CzrmOX.js";import"./index-bP1_QBvP.js";import"./index-DY3B7_kM.js";import"./slim-arrow-down-hLmi3DGr.js";import"./Input-CYD0qtkC.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./Suggestions.css-BBvTA_r8.js";import"./ListBoxItemGroupTemplate-D-dkO2pM.js";import"./ComboBoxItemGroup-DHkKBduU.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Token-BIdC5wJi.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfwHGGPG.js";import"./ToggleButton-BmbPwfk7.js";import"./SuggestionItem-gfvdLHYr.js";import"./index-BuXBJAJ4.js";import"./Option-giAR4PyV.js";import"./index-V5sVuIkU.js";import"./SegmentedButton-BPwflYvL.js";import"./index-CTuyF3LD.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./index-Bl8oHxhy.js";import"./index-CBZrs3cq.js";import"./index-C7FokFlZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrdHcgRL.js";import"./group-2-C3eZD9xi.js";import"./sort-descending-bTZCRpky.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaHCE1NB.js";import"./utils-Ds3TVJbz.js";import"./index-DyB1YbCe.js";import"./index-DAvw1qwV.js";import"./index-D4Ka0onQ.js";import"./navigation-down-arrow-Ba-PmlVo.js";import"./navigation-right-arrow-COX7_ak2.js";import"./navigation-right-arrow-DRoaRB41.js";import"./useCurrentTheme-Drr0Li3b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoLqpInx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-FsmN4cF6.js";import"./paper-plane-BcVanBNt.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
