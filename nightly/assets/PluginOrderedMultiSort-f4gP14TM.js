import{j as e}from"./iframe-sSOxzerW.js";import{useMDXComponents as i}from"./index-C4N772Ec.js";import{I as a,F as m}from"./CommandsAndQueries-DN1a2yy9.js";import{M as s,C as p}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import{C as l}from"./ControlsWithNote-DWfqd7qS.js";import"./copy-VA4auTr6.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CSavsqtu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./index-KAoDxHkF.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CUlM0idS.js";import"./delete-YKZAYgfq.js";import"./settings-DfMZh29Y.js";import"./NoData-DhoGmJUV.js";import"./IllustratedMessage-C8ByZfCk.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Dmrub52O.js";import"./index-CWucdukJ.js";import"./index-Cp8EfoGt.js";import"./slim-arrow-down-D_dl0lVn.js";import"./Input-CWyqJw20.js";import"./ResponsivePopoverCommon.css-ujCiRX3T.js";import"./ValueStateMessage.css-Bf_f1VXt.js";import"./Suggestions.css-CsTtHaeM.js";import"./ListBoxItemGroupTemplate-tmSOvkkU.js";import"./ComboBoxItemGroup-as0GmnEu.js";import"./ListItemBaseTemplate-CyPqs4mv.js";import"./Token-BninTSpu.js";import"./ScrollEnablement-CK3trYvC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGX3xged.js";import"./ToggleButton-BAuFiK85.js";import"./SuggestionItem-DZ-ZtbNH.js";import"./index-DJO1nKvm.js";import"./Option-BL1oRM-m.js";import"./index-BaNQZPFZ.js";import"./SegmentedButton-rLQS_Rwl.js";import"./index-DS5md5gp.js";import"./Select-r6zN4deI.js";import"./InvisibleMessage-DEsSOQlO.js";import"./slim-arrow-down-UfGNSj6J.js";import"./index-BFDbo67H.js";import"./index-CWrxZq5Q.js";import"./index-BsaHFzm2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DkoNqmaM.js";import"./group-2-78TljRjA.js";import"./sort-descending-BOmTXKtu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-By0nFfgd.js";import"./utils-FXZnoG2v.js";import"./index-lQVojLXN.js";import"./index-Ck2xITAb.js";import"./index-7jNUNffH.js";import"./navigation-down-arrow-B_wbscXY.js";import"./navigation-right-arrow-BxVQWDb7.js";import"./navigation-right-arrow-BMvhxWkw.js";import"./useCurrentTheme-DLF3uFVh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVIm7mZc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BVd8EzLl.js";import"./paper-plane-DAN7XnSr.js";import"./index-DjeZ_rHZ.js";import"./less-CpyHKjX7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
