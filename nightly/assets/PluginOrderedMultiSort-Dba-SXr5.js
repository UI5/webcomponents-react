import{j as e}from"./iframe-DVF3HgbA.js";import{useMDXComponents as i}from"./index-BJ4ye1FV.js";import{I as a,F as m}from"./CommandsAndQueries-CjmWYk4A.js";import{M as s,C as p}from"./blocks-Clg7-MX4.js";import"./Tag-BOlrR2xo.js";import"./index-CZ6TSDWm.js";import{C as l}from"./ControlsWithNote-xi0GFkCn.js";import"./copy-CUrqt0F6.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B6VyKVO1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B68cSDRH.js";import"./index-C50SsvCT.js";import"./index-DNsjAdVj.js";import"./Link-Cu0t9g59.js";import"./index-C1QuQKuw.js";import"./index-RU5NPQiF.js";import"./index-Dpj0MxBe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNtJiI2A.js";import"./addCustomCSSWithScoping-YxO5kK4q.js";import"./index-BBb33Sco.js";import"./information-DRqH7HSA.js";import"./sys-enter-2-DpmhEpBm.js";import"./alert-C-z3K1uA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNuNpwJw.js";import"./delete-FIqmbs-F.js";import"./settings-ChaYvwof.js";import"./NoData-DAbRUSvi.js";import"./IllustratedMessage-Pj2qYyM1.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DWUQ4SCR.js";import"./index-C12QIudN.js";import"./index-BsuGpbOi.js";import"./slim-arrow-down-1px9VTz1.js";import"./Input-DhcX8gKW.js";import"./ResponsivePopoverCommon.css-B2o2246I.js";import"./ValueStateMessage.css-BcHvujGU.js";import"./Suggestions.css-Cp2lTwMm.js";import"./ListBoxItemGroupTemplate-Clh9M37l.js";import"./ComboBoxItemGroup-b_H895ft.js";import"./ListItemBaseTemplate-C8LHvDfc.js";import"./Token-xZkgnrp8.js";import"./ScrollEnablement-DSkvTOUi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-O-Eog0hj.js";import"./ToggleButton-GSuBcNaj.js";import"./SuggestionItem-DxCxM0yk.js";import"./index-tdNrQRr2.js";import"./Option-BMHvFChu.js";import"./index-BRpwxpNh.js";import"./SegmentedButton-BjPYlasD.js";import"./index-CMza5W0F.js";import"./Select-CiwMWeFC.js";import"./InvisibleMessage-CLNRDajy.js";import"./slim-arrow-down-BOcb4gKN.js";import"./index-U13CnHGN.js";import"./index-D_i0LdjL.js";import"./index-CB7VLmJD.js";import"./index-DXl3BA50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DPVFS_rG.js";import"./group-2-Ds-80Bay.js";import"./sort-descending-DvN65zAq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpTQubC.js";import"./utils-Dx_qzbNR.js";import"./index-CCv-VfNm.js";import"./index-BUFZhFxd.js";import"./index-BtJIcsH4.js";import"./navigation-down-arrow-CjSaxrf5.js";import"./navigation-right-arrow-BKG1O43Q.js";import"./navigation-right-arrow-Bh3wYE_f.js";import"./useCurrentTheme-V16yvvqz.js";import"./index-BM9_mjKd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bjbd4LnE.js";import"./paper-plane-OMmS-SvW.js";import"./index-D0P4-p7Y.js";import"./less-BIkfAwBi.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
