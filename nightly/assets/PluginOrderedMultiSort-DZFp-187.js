import{j as e}from"./iframe-kJfrPaD1.js";import{useMDXComponents as i}from"./index-BKWPRaiV.js";import{I as a,F as m}from"./CommandsAndQueries-D7WkRU72.js";import{M as s,C as p}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import{C as l}from"./ControlsWithNote-HJLNE5EK.js";import"./copy-yyYbNeMi.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DxPZYTqE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-CmBVI-17.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjEWHoPI.js";import"./delete-B8AkKUGe.js";import"./settings-DFQp6TpX.js";import"./NoData-D0Y_eZMR.js";import"./IllustratedMessage-C-bbdW0n.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DNobnLuo.js";import"./index-D4931-O4.js";import"./index-RE4LKkGr.js";import"./slim-arrow-down-CPVGY8Iq.js";import"./Input-BgSomOX4.js";import"./ResponsivePopoverCommon.css-BjX77BWF.js";import"./ValueStateMessage.css-ClrIRLgY.js";import"./Suggestions.css-DMwhx4yY.js";import"./ListBoxItemGroupTemplate-BKa_M5Lx.js";import"./ComboBoxItemGroup-UT2r-Dd2.js";import"./ListItemBaseTemplate-DW1MLGCC.js";import"./Token-DKZ6n4xd.js";import"./ScrollEnablement-DxFtCIlG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmvDkQUO.js";import"./ToggleButton-CNQqAKOh.js";import"./SuggestionItem-4Vshqset.js";import"./index-B8IotaSE.js";import"./Option-DE3CbLxG.js";import"./index-hpLgy0UK.js";import"./SegmentedButton-DQjk1YVY.js";import"./index-BuQpOWSs.js";import"./Select-Dd1CrZ-1.js";import"./InvisibleMessage-CIztzzyo.js";import"./slim-arrow-down-6heX8X2x.js";import"./index-C9yFq3ow.js";import"./index-ZOfLRVnY.js";import"./index-BihC8B6K.js";import"./index-CewkkqmN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMlWiKR7.js";import"./group-2-D5N4yOqU.js";import"./sort-descending-BKM4goFg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cq09Xc-r.js";import"./utils-hSvJEbvk.js";import"./index-DI_BJW84.js";import"./index-DbuJnxWY.js";import"./index-DuEmXK1Q.js";import"./navigation-down-arrow-Td4O0pAQ.js";import"./navigation-right-arrow-DconCGaA.js";import"./navigation-right-arrow-DnMrHUAK.js";import"./useCurrentTheme-B07ClayR.js";import"./index-D2aYauVx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClW0lnYp.js";import"./paper-plane-fozhEJ_Q.js";import"./index-B96fduB-.js";import"./less-BdeGY2H5.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
