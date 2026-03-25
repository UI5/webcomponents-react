import{j as e}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as i}from"./index-BxeVDhrM.js";import{I as m}from"./CommandsAndQueries-BfziQu2M.js";import{M as a,C as s}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import{C as p}from"./ControlsWithNote-Bu936WH_.js";import"./copy-WJgdbAvd.js";import{F as l}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dbp5t2xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BoihuItE.js";import"./delete-Bhzd3ed8.js";import"./settings-D9jXjAvQ.js";import"./NoData-B5lI_Sae.js";import"./NoFilterResults-93txLrZv.js";import"./index-BrFjI7RY.js";import"./IllustratedMessage-AZ7xK1kI.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-1_stmY84.js";import"./Input-DMXWEknM.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./ValueStateMessage.css-yHzBSpV4.js";import"./Suggestions.css-MgO-ysCw.js";import"./ListBoxItemGroupTemplate-D2YpWlf4.js";import"./ComboBoxItemGroup-CaiNesJa.js";import"./ListItemBaseTemplate-D4Q6p7GN.js";import"./Token-B3caBydG.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BOysNTzL.js";import"./ToggleButton-oEmebjQG.js";import"./multiselect-all-CLqAkhmq.js";import"./SuggestionItem-DSX8SwVI.js";import"./index-Dwckrray.js";import"./Option-C2UhMZDs.js";import"./index-Cv9nYKsA.js";import"./SegmentedButton-SSHoZn7s.js";import"./index-DBk_motw.js";import"./Select-DPhTn-YG.js";import"./InvisibleMessage-dc5EYpz-.js";import"./index-CATxM_c8.js";import"./index-DDx0pcjW.js";import"./index-Bz8OEacs.js";import"./index-BZDIEYti.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSQMhsPH.js";import"./group-2-5PvLHLNv.js";import"./sort-descending-BEfEPQGH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmpjBeDB.js";import"./utils-CLsYPiKt.js";import"./index-MCFemGTY.js";import"./index-CC_WR0o2.js";import"./index-wXOo97ET.js";import"./navigation-down-arrow-lQMnprhK.js";import"./navigation-right-arrow-CgEvW-xF.js";import"./navigation-right-arrow-Cuz2dorW.js";import"./useCurrentTheme-5CUir0cJ.js";import"./index-DEW9r0dY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2FLcBfN.js";import"./paper-plane-p0ZMvhfl.js";import"./index-CMj2nAyN.js";import"./less-CUviCfrH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{sourceState:"none",of:o}),`
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
`,e.jsx(l,{})]})}function Ee(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ee as default};
