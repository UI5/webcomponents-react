import{j as e}from"./iframe-DGliVLqx.js";import{useMDXComponents as i}from"./index-BKdQ_dPP.js";import{I as a,F as m}from"./CommandsAndQueries-DhC-K5aV.js";import{M as s,C as p}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import{C as l}from"./ControlsWithNote-D0TOtvLO.js";import"./copy-BXMLotg5.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Di1JYyty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPXdiIGy.js";import"./delete-VNiEmKzB.js";import"./settings-Bn4IMpxs.js";import"./NoData-CrO-Ojbp.js";import"./IllustratedMessage-CQ-pThL8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-zmPXMY8f.js";import"./index-BPpKon_v.js";import"./index-ZlqYo9cE.js";import"./slim-arrow-down-BPCmfgSQ.js";import"./Input-B1uSH_6j.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./ValueStateMessage.css-Dg_RR3hb.js";import"./Suggestions.css-OrfoYcSp.js";import"./ListBoxItemGroupTemplate-B1B8Njil.js";import"./ComboBoxItemGroup-CFqLv33P.js";import"./ListItemBaseTemplate-BLL1fYXv.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ToggleButton-gLJIOvzQ.js";import"./SuggestionItem-B0HnLZ2a.js";import"./index-JZkeV-N1.js";import"./Option-BLZmkEGm.js";import"./index-DgRC1GtG.js";import"./SegmentedButton-BgAef3sS.js";import"./index-CDBfsg8A.js";import"./Select-DlS9_dRk.js";import"./InvisibleMessage-CRsDkV-1.js";import"./slim-arrow-down-DPwEh6bg.js";import"./index-DW5AkRqQ.js";import"./index-4N3HClhe.js";import"./index-B9jV6fm0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-iCWrcMv0.js";import"./group-2-BiBRlmiZ.js";import"./sort-descending-CwrGqsAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuqEh9jI.js";import"./utils-VIsRdQMv.js";import"./index-DN3oVk97.js";import"./index-mOI0MCrO.js";import"./index-DGwcjkeH.js";import"./navigation-down-arrow-Bi_8NERP.js";import"./navigation-right-arrow-CAlrOhev.js";import"./navigation-right-arrow-Cb1EEugd.js";import"./useCurrentTheme-CcMg6oDL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUCpswoL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbsPXVbG.js";import"./paper-plane-Czf94RLw.js";import"./index-Bl0RftRs.js";import"./less-DTZLBQaX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
