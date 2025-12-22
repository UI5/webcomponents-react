import{j as e}from"./iframe-C4opeNuJ.js";import{useMDXComponents as i}from"./index-DlqCzQ5b.js";import{I as a,F as m}from"./CommandsAndQueries-C6QEnHzv.js";import{M as s,C as p}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import{C as l}from"./ControlsWithNote-LjA8IyZm.js";import"./copy-DCgRf4_C.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Nz8y6icB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./index-CFNq6guK.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-v-9WoqwG.js";import"./delete-QGhxrN40.js";import"./settings-DGtfH4Im.js";import"./NoData-DuSf6XJU.js";import"./IllustratedMessage-nDYnaDL0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUZWuwZ7.js";import"./index-JEMmbgM0.js";import"./index-BGSWz__O.js";import"./slim-arrow-down-CzRtJRwu.js";import"./Input-BuKdEYP0.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./ValueStateMessage.css-BTsNvEj6.js";import"./Suggestions.css-BwrSUtIe.js";import"./ListBoxItemGroupTemplate-7_0b_kLn.js";import"./ComboBoxItemGroup-BACc2obz.js";import"./ListItemBaseTemplate-CJFIMUp3.js";import"./Token-OFa2wXAf.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C8MaLOVV.js";import"./ToggleButton-DDhGeKml.js";import"./SuggestionItem-VR2o08vH.js";import"./index-DncJbrUy.js";import"./Option-cu7I_PwM.js";import"./index-OrLpWDeE.js";import"./SegmentedButton-BrIUDJd7.js";import"./index-C9Pg2ysk.js";import"./Select-C0NKAdDD.js";import"./InvisibleMessage-Bb-Qg8L3.js";import"./slim-arrow-down-CGY7sv3D.js";import"./index-CGPONq3F.js";import"./index-Df3-dXHf.js";import"./index-7x9RJa0e.js";import"./index-CRe7MavO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3qO_evC.js";import"./group-2-BBh72Dqg.js";import"./sort-descending-B-gdnF4T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7K1j5fc.js";import"./utils-BjLLyiPs.js";import"./index-BdTJmYr_.js";import"./index-CmwWT0_d.js";import"./index-BUmNjy5e.js";import"./navigation-down-arrow-B9YSMk4b.js";import"./navigation-right-arrow-DaW_IFoa.js";import"./navigation-right-arrow-B0-22NBU.js";import"./useCurrentTheme-Cg4zlSnL.js";import"./index-A3HBWtsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Mna98_.js";import"./paper-plane-BFVcYSvi.js";import"./index-GwOdSSTD.js";import"./less-CAexx3Oq.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
