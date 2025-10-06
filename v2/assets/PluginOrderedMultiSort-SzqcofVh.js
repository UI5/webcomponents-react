import{j as e}from"./iframe-CIFZFrG2.js";import{useMDXComponents as i}from"./index-CzlgAQtr.js";import{I as a,F as m}from"./CommandsAndQueries-BlZNZtUo.js";import{M as s,C as p}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import{C as l}from"./ControlsWithNote-Cqnimieu.js";import"./copy-CVO7dQ0j.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CgEPUpLL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./index-Ddm49m6x.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYyXPrOv.js";import"./delete-BA6UzrB5.js";import"./settings-DIaelliX.js";import"./NoData-B1FuXvEI.js";import"./IllustratedMessage-21oYVbbQ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DPJreZ8p.js";import"./index-cGU9T9rn.js";import"./index-DkhbK58W.js";import"./slim-arrow-down-2FoyFrsV.js";import"./Input-DlFlJtjB.js";import"./ResponsivePopoverCommon.css-cwzG2gc0.js";import"./ValueStateMessage.css-ikIAfSqI.js";import"./Suggestions.css-Cmt6_gCv.js";import"./ListBoxItemGroupTemplate-c0BR_adj.js";import"./ComboBoxItemGroup-jwje7hSK.js";import"./ListItemBaseTemplate-WTKsn73S.js";import"./Token-BaR6rmNc.js";import"./ScrollEnablement-BkzfVfom.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zd36OJtU.js";import"./ToggleButton-CKdRk_TU.js";import"./SuggestionItem-i1kLLZMq.js";import"./index-DiirMTfI.js";import"./Option-DiunOkpg.js";import"./index-C1tXGYmS.js";import"./SegmentedButton-DnLPeF-z.js";import"./index-BU8EJGfi.js";import"./Select-Il0Dpto4.js";import"./InvisibleMessage-SsPOIlta.js";import"./slim-arrow-down-CuXz1j7I.js";import"./index-DsLGmJL5.js";import"./index-Cp4nBRod.js";import"./index-DlBqic0j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzaibK8v.js";import"./group-2-BvqITDwo.js";import"./sort-descending-DNmo5GvA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-W-uq8jIV.js";import"./utils-7Audpv7t.js";import"./index-dUb3oqow.js";import"./index-DkmXSgWz.js";import"./index-DtGC_2bD.js";import"./navigation-down-arrow-DNMDmuFC.js";import"./navigation-right-arrow-D_akLMwW.js";import"./navigation-right-arrow-n0EeNTkG.js";import"./useCurrentTheme-C9k3MOJ-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HSQA-4PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCLO5KRo.js";import"./paper-plane-Df4G7ZiX.js";import"./index-B3X4PJbz.js";import"./less-PsQqjzYZ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
