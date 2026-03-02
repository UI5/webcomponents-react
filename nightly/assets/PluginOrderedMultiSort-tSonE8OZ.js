import{j as e}from"./iframe-BYdzMGmT.js";import{useMDXComponents as i}from"./index-Cj6hKPa8.js";import{I as a,F as m}from"./CommandsAndQueries-B5lWQhG8.js";import{M as s,C as p}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import{C as l}from"./ControlsWithNote-BPNG-KVJ.js";import"./copy-CWbk9K2V.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-cVssna8z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-DonwXZ8V.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-o_uZzUjH.js";import"./delete-CRpTyT7P.js";import"./settings-DeL5SdbF.js";import"./NoData-mwJ1Waqg.js";import"./IllustratedMessage-493kKCGH.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BFX4KQZG.js";import"./index-b49JVpuf.js";import"./index-BI-zpLc6.js";import"./slim-arrow-down-EzV-h7vN.js";import"./Input-gzz4D9_r.js";import"./ResponsivePopoverCommon.css-laFt-eqF.js";import"./ValueStateMessage.css-G31DxWEi.js";import"./Suggestions.css-D0qbNHCU.js";import"./ListBoxItemGroupTemplate-fMWQr5Wn.js";import"./ComboBoxItemGroup-CNETnNZ3.js";import"./ListItemBaseTemplate-CZN1ifJG.js";import"./Token-CelvgPLW.js";import"./ScrollEnablement-C12b1B5M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4TcI1um.js";import"./ToggleButton-muSO_ArA.js";import"./SuggestionItem-Ck_600Dg.js";import"./index-BzSXKO6G.js";import"./Option-ikxQWrXS.js";import"./index-DOxN2q1f.js";import"./SegmentedButton-D7IYgi5S.js";import"./index-Dpb_P6_i.js";import"./Select-BsZRQHw0.js";import"./InvisibleMessage-C_pu6iRf.js";import"./slim-arrow-down-ZQK8hEoe.js";import"./index-B9IEbrlj.js";import"./index-B0MOGWPf.js";import"./index-BeEOOMQe.js";import"./index-Bd3_gVkF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3B0bMDQR.js";import"./group-2-D9EY0eAa.js";import"./sort-descending-CQfXaiJr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4vmYggie.js";import"./utils-CQvHdMQU.js";import"./index-CVdG3Tpp.js";import"./index-7KL5Sw8P.js";import"./index-W__nbP8_.js";import"./navigation-down-arrow-CgevP1zB.js";import"./navigation-right-arrow-BljO3jRm.js";import"./navigation-right-arrow-DI1UPgvk.js";import"./useCurrentTheme-D-EAbyTm.js";import"./index-BL0I7ePE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BM3Vsr1m.js";import"./paper-plane-DrlzT1LA.js";import"./index-BltXWBpk.js";import"./less-DjQ8DtUG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
