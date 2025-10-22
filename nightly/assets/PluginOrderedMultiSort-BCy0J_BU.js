import{j as e}from"./iframe-BgUChC8z.js";import{useMDXComponents as i}from"./index-Bt3QSaL1.js";import{I as a,F as m}from"./CommandsAndQueries-BiCzXToa.js";import{M as s,C as p}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import{C as l}from"./ControlsWithNote-C0BpeSlm.js";import"./copy-BTfIxGSH.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CeX0Kyfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./index-DUpxdMFd.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CD6CHA-o.js";import"./delete-y5lJrBeW.js";import"./settings-Bcfleeh9.js";import"./NoData-D4-LWY5W.js";import"./IllustratedMessage-D98osn7I.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DSUueqrj.js";import"./index-BF4U7j9u.js";import"./index-CWO0kD1j.js";import"./slim-arrow-down-BZSodC91.js";import"./Input-BqX4tKYi.js";import"./ResponsivePopoverCommon.css-DQy2mY97.js";import"./ValueStateMessage.css-BQqInwWq.js";import"./Suggestions.css-CgWQiOZG.js";import"./ListBoxItemGroupTemplate-Bh0XK8An.js";import"./ComboBoxItemGroup-DBigtGMN.js";import"./ListItemBaseTemplate-Di7slU74.js";import"./Token-WW_TgQeI.js";import"./ScrollEnablement-4uXBpXRT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-J4gk5GHC.js";import"./ToggleButton-BNEU09Z3.js";import"./SuggestionItem-DWN4Mbly.js";import"./index-DUntWQ4O.js";import"./Option-Bz2fFbd9.js";import"./index-KkNhBHx0.js";import"./SegmentedButton-D_JrRdRj.js";import"./index-Db0tKTu3.js";import"./Select-DKO0kXu8.js";import"./InvisibleMessage-DzjrKdqv.js";import"./slim-arrow-down-CAVMB9Lc.js";import"./index-DUG4DuXd.js";import"./index-DybCOYZe.js";import"./index-DxWPnaPh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cf4OiQb-.js";import"./group-2-fkT5HhJb.js";import"./sort-descending-6nhlriZW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdXyFq69.js";import"./utils-aeblRDt6.js";import"./index-BpehBtsx.js";import"./index-CWGNCP4i.js";import"./index-BnZoUZkk.js";import"./navigation-down-arrow-szs85QnW.js";import"./navigation-right-arrow-Du_yn3gH.js";import"./navigation-right-arrow-B69KAuHS.js";import"./useCurrentTheme-B2EMPJa_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7MIdb0-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuukhyP7.js";import"./paper-plane-ChG2uJSU.js";import"./index-DMT0rPiM.js";import"./less-DhsR2zRd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
