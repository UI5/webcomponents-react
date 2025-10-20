import{j as e}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as i}from"./index-Bm__WzDY.js";import{I as a,F as m}from"./CommandsAndQueries-BBfDJted.js";import{M as s,C as p}from"./blocks-TfJF1wSB.js";import"./Tag-A7CWsIQR.js";import"./index-cCDc2RK7.js";import{C as l}from"./ControlsWithNote-DZZmzkQV.js";import"./copy-CIEB0M7W.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DSsuzZnr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./index-D2CGZc8Q.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-nDPSzVIl.js";import"./delete-BJacbrPT.js";import"./settings-AWsPUNGG.js";import"./NoData-Be4XzJOz.js";import"./IllustratedMessage-DYcCQrXb.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-oFDVAAPo.js";import"./index-DBsJuuDB.js";import"./index-gLPF6SWi.js";import"./slim-arrow-down-DxVwfy5r.js";import"./Input-CDRJXkCD.js";import"./ResponsivePopoverCommon.css-CX_5uYsf.js";import"./ValueStateMessage.css--pnBJkXc.js";import"./Suggestions.css-BU_P2C6y.js";import"./ListBoxItemGroupTemplate-DSBmxLfg.js";import"./ComboBoxItemGroup-DXvJ7bIP.js";import"./ListItemBaseTemplate-DsQq_j4Z.js";import"./Token-CJJk4a0-.js";import"./ScrollEnablement-DpkPz9em.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck6WotIf.js";import"./ToggleButton-DHGAaV5Z.js";import"./SuggestionItem-EYr04vfH.js";import"./index-DsWUYnd2.js";import"./Option-SezZz24A.js";import"./index-DqXpBA3m.js";import"./SegmentedButton-B1ja-BgV.js";import"./index-XxV9_aNw.js";import"./Select-CyU6KfcW.js";import"./InvisibleMessage-DEubzVGS.js";import"./slim-arrow-down-D9grr6Uu.js";import"./index-SNU-XIU1.js";import"./index-lwm1gao-.js";import"./index-CNy7gkcO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VA_uH9v7.js";import"./group-2-YpekFQLH.js";import"./sort-descending-DFI-P2gY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQ6xEtJo.js";import"./utils-CH7XdL15.js";import"./index-DJxbqdeK.js";import"./index-Chl98GIc.js";import"./index-CWMloBdV.js";import"./navigation-down-arrow-BshNj7dt.js";import"./navigation-right-arrow-CyYVo4V2.js";import"./navigation-right-arrow-B-U5Q9E4.js";import"./useCurrentTheme-Bhk6HLgU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dayvn7j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C53Cl9QB.js";import"./paper-plane-CnJUsrSx.js";import"./index-COarheIH.js";import"./less-CD0L_VR0.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
