import{j as e}from"./iframe-BV6MX4jP.js";import{useMDXComponents as i}from"./index-BBPLoQd2.js";import{I as a,F as m}from"./CommandsAndQueries-B_NVK97H.js";import{M as s,C as p}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import{C as l}from"./ControlsWithNote-Br1yzSE3.js";import"./copy-BuKjNY_z.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-T_cM7jH3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DluWfdk1.js";import"./delete-D-tF1QFK.js";import"./settings-nj9vexJs.js";import"./NoData-DatsDwUA.js";import"./IllustratedMessage-wCVUZOEy.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DlJ2uOES.js";import"./index-W67I1HN2.js";import"./index-DzPicj6D.js";import"./slim-arrow-down-CsSTo7HV.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./ListBoxItemGroupTemplate-CRxGMHEE.js";import"./ComboBoxItemGroup-Crq8AFMp.js";import"./ListItemBaseTemplate-BgQ118Dh.js";import"./Token-DBSnoolZ.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C95WGA7x.js";import"./ToggleButton-DZW5zV-q.js";import"./SuggestionItem-D06YVUYK.js";import"./index-stG37gxE.js";import"./Option-CLVxZm0T.js";import"./index-CPiHE6HM.js";import"./SegmentedButton-w_O6Zr0R.js";import"./index-DpOA1UAF.js";import"./Select-8EQsIG3h.js";import"./InvisibleMessage-DDCSdyz6.js";import"./slim-arrow-down-m4nfpNWT.js";import"./index-ConqiMdG.js";import"./index-Teu4gKwB.js";import"./index-Cel48Hnh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YqAR--zG.js";import"./group-2-sFLuQe_k.js";import"./sort-descending-D51ek0j-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bAeuC6z7.js";import"./utils-DdwGETq3.js";import"./index-CZ32PpE2.js";import"./index-Btqqk8wD.js";import"./index-CcZrpUmm.js";import"./navigation-down-arrow-e2PgOWNG.js";import"./navigation-right-arrow-Bh7h-vAT.js";import"./navigation-right-arrow-Dd5t9QGM.js";import"./useCurrentTheme-CNfb1pjw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0G7QBXN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTyFJzVy.js";import"./paper-plane-BI7RDtZg.js";import"./index-De8-qQne.js";import"./less-DfVJl5W-.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
