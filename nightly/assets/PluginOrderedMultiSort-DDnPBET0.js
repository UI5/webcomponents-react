import{j as e}from"./iframe-C-IdMOTF.js";import{useMDXComponents as i}from"./index-8Reouw5a.js";import{I as a,F as m}from"./CommandsAndQueries-BrMhh7sy.js";import{M as s,C as p}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import{C as l}from"./ControlsWithNote-DUmHhhde.js";import"./copy-F55MzcCW.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CPyBJT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./index-D6nYdynl.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzqtQaIj.js";import"./delete-BvqZMFSA.js";import"./settings-CDRcyP6l.js";import"./NoData-Y4GENK1u.js";import"./IllustratedMessage-BQMS2CJC.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Dw3tAFYv.js";import"./index-DeBh3_Rd.js";import"./index-Cen1L1VX.js";import"./slim-arrow-down-Donmu_KW.js";import"./Input-DqXRiIGv.js";import"./ResponsivePopoverCommon.css-Cl4QpyHC.js";import"./ValueStateMessage.css-DgQ8yNuY.js";import"./Suggestions.css-dLfodOLN.js";import"./ListBoxItemGroupTemplate-BgP_QYGe.js";import"./ComboBoxItemGroup-Ba7YxW6U.js";import"./ListItemBaseTemplate-DbsIrYt0.js";import"./Token-DlOPFXjK.js";import"./ScrollEnablement-CkJPJ5oY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dyoPFSMG.js";import"./ToggleButton-DkzxOAA0.js";import"./SuggestionItem-C9UvamUl.js";import"./index-DXyFplVc.js";import"./Option-DeT0HpqA.js";import"./index-KS0YEPKv.js";import"./SegmentedButton-1Sl2D-kX.js";import"./index-C3msFDiq.js";import"./Select-Bu1uNe0q.js";import"./InvisibleMessage-URPy8ZMA.js";import"./slim-arrow-down-C6v2L-5e.js";import"./index-DAfp8Dyw.js";import"./index-B7JTHEbo.js";import"./index-C_F4uQ0w.js";import"./index-DqEr8g6K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGmXap7O.js";import"./group-2-CHtxxnqE.js";import"./sort-descending-DEFHMBn-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CN_v3WcV.js";import"./utils-BzZ9vAkg.js";import"./index-CpnMsTOO.js";import"./index-CY8tdRX9.js";import"./index-DTW5vHZS.js";import"./navigation-down-arrow-BC-mTUxY.js";import"./navigation-right-arrow-jxEKhTVI.js";import"./navigation-right-arrow-CYHgJ-zu.js";import"./useCurrentTheme-BRedc0uR.js";import"./index-f47Ux14f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFrls0z0.js";import"./paper-plane-Ch6Wl9PD.js";import"./index-Bij2cp4G.js";import"./less-9m4Z2tzD.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
