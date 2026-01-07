import{j as e}from"./iframe-vPuL6nrR.js";import{useMDXComponents as i}from"./index-SqnB7SsH.js";import{I as a,F as m}from"./CommandsAndQueries-BhV0DcZ1.js";import{M as s,C as p}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import{C as l}from"./ControlsWithNote-a1UinLEk.js";import"./copy-DGJagZ4x.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CEd-U3Y9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-CfldzWz8.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDEYRsk7.js";import"./delete-CqW8NqGe.js";import"./settings-Cj4F-sn-.js";import"./NoData-B6dEymhk.js";import"./IllustratedMessage-fNVt6nDT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-C4Fi4xib.js";import"./index-DXIxpdsF.js";import"./index-Bdmog3xs.js";import"./slim-arrow-down-B1T99V5w.js";import"./Input-CChiahoF.js";import"./ResponsivePopoverCommon.css-C2d2sUac.js";import"./ValueStateMessage.css-BuG0YrNm.js";import"./Suggestions.css-J9EImHe6.js";import"./ListBoxItemGroupTemplate-CJsm3Ul2.js";import"./ComboBoxItemGroup-BjhHmu1_.js";import"./ListItemBaseTemplate-DzoOxgIE.js";import"./Token-B6W6V4bM.js";import"./ScrollEnablement-DWmM35W4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CImLKtWb.js";import"./ToggleButton-DzxCPDPZ.js";import"./SuggestionItem-BEJvr8r8.js";import"./index-Bl3X3auW.js";import"./Option-BzrTRgaF.js";import"./index-ZVMZGAva.js";import"./SegmentedButton-Cbml1Wlq.js";import"./index-BHx5eP0s.js";import"./Select-CLf6VczP.js";import"./InvisibleMessage-CuC6Puks.js";import"./slim-arrow-down-C84_eyIp.js";import"./index-D6hE3GQN.js";import"./index-CbspbvB6.js";import"./index-Ct0Aq-bZ.js";import"./index-DcvU_XKJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dk9irKV0.js";import"./group-2-CzEO-tAI.js";import"./sort-descending-qZUVN4UZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UEPJgIKA.js";import"./utils-C6_g_wtf.js";import"./index-DkBbhQP-.js";import"./index-B9ZqcJIb.js";import"./index-C6AbtUGW.js";import"./navigation-down-arrow-zIYYcACt.js";import"./navigation-right-arrow-DIDO5vFl.js";import"./navigation-right-arrow-BR8wObxR.js";import"./useCurrentTheme-DG8GYF18.js";import"./index-pO-94DCY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BSPpJGW2.js";import"./paper-plane-B4zBBoau.js";import"./index-DXkaAWnQ.js";import"./less-CsKXQq_W.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
