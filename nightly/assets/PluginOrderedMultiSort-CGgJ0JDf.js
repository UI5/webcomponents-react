import{j as e}from"./iframe-CXDBwaXf.js";import{useMDXComponents as i}from"./index-Dq-vd5Ev.js";import{I as a,F as m}from"./CommandsAndQueries-EFbMjjAa.js";import{M as s,C as p}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import{C as l}from"./ControlsWithNote-D9v8NJR6.js";import"./copy-tKRdoNaC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D5wWkW-F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dr9tof3Q.js";import"./delete-BRjSytiH.js";import"./settings-DpX9wVto.js";import"./NoData-B9OjNVXe.js";import"./IllustratedMessage-C03S7hoW.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dto9QmBi.js";import"./index-C1hX-h2_.js";import"./index-C-8V3qWU.js";import"./slim-arrow-down-ziHFyrxY.js";import"./Input-D9M-oH0b.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./Suggestions.css-D9onRGXn.js";import"./ListBoxItemGroupTemplate-BApvrnZW.js";import"./ComboBoxItemGroup-DZ-S5_KR.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Token-gCiCxmW0.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcjimPYv.js";import"./ToggleButton-CIC6sJxV.js";import"./SuggestionItem-A-OV44pz.js";import"./index-Bmc90nAd.js";import"./Option-ChH-SgHF.js";import"./index-BtgHHz7L.js";import"./SegmentedButton-pcYoHon6.js";import"./index-BTA6DMIo.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./index-B8i-bBM2.js";import"./index-B3Pl9APG.js";import"./index-CeSJC3hT.js";import"./index-sCYpguPS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGg0p1p3.js";import"./group-2-Dmm7arx2.js";import"./sort-descending-BdhD77Zt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CB-rwWQs.js";import"./utils-BQINLptF.js";import"./index-XK9DUlZ3.js";import"./index-BJ0Euif2.js";import"./index-CHqwEflI.js";import"./navigation-down-arrow-sU3YCq6s.js";import"./navigation-right-arrow-DuC2PC04.js";import"./navigation-right-arrow-CglzNXCr.js";import"./useCurrentTheme-nPjRikBt.js";import"./index-FYzg_PtZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zoi03cJM.js";import"./paper-plane-DMagDmJq.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
