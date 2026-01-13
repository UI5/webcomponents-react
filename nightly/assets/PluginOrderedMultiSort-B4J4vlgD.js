import{j as e}from"./iframe-DjyPEesV.js";import{useMDXComponents as i}from"./index-Pyz_59sj.js";import{I as a,F as m}from"./CommandsAndQueries-CflBmGXr.js";import{M as s,C as p}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import{C as l}from"./ControlsWithNote-DO2z4iOP.js";import"./copy-E37vjZto.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-5g3jIKu6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PtrV3Mx2.js";import"./delete-DZYRig-7.js";import"./settings-DC1EpgcZ.js";import"./NoData-DdiSsGzY.js";import"./IllustratedMessage-CKlnOgb7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-U4i8XfCe.js";import"./index-CNsBuXgW.js";import"./index-DY2Rai9n.js";import"./slim-arrow-down-CaFw53zN.js";import"./Input-BZdy6LBO.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./ValueStateMessage.css-BmKDb-GX.js";import"./Suggestions.css-C5GlUmJa.js";import"./ListBoxItemGroupTemplate-B_X2fUlx.js";import"./ComboBoxItemGroup-BfNx4b9Y.js";import"./ListItemBaseTemplate-CGBpHG4N.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ToggleButton-sq5iQT6D.js";import"./SuggestionItem-BjJ5fzBJ.js";import"./index-DKn-wdwl.js";import"./Option-BQ6ou2d_.js";import"./index-D4m9Bgxm.js";import"./SegmentedButton-D2TYrx6h.js";import"./index-DPf5ZEwJ.js";import"./Select-CwPYCNeP.js";import"./InvisibleMessage-BV-YL2wk.js";import"./slim-arrow-down-CxX1-7RK.js";import"./index--b5YbzYZ.js";import"./index-BUOYq7SN.js";import"./index-CrmY2ZO8.js";import"./index-Bgg2l2DV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClODWfE8.js";import"./group-2-DPcrYzkY.js";import"./sort-descending-CTRvyWvg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-VEN8hAU2.js";import"./utils-D-4bFYd0.js";import"./index-DuTvknKW.js";import"./index-BCddFEwR.js";import"./index-Kss5k088.js";import"./navigation-down-arrow--9pMM64P.js";import"./navigation-right-arrow-B4wTEztn.js";import"./navigation-right-arrow-DNYuNDO1.js";import"./useCurrentTheme-BSBgMXT1.js";import"./index-lcNTjYV-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_YfBcCD_.js";import"./paper-plane-CUdav5bq.js";import"./index-7fWe1uut.js";import"./less-B9Odq6DG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
