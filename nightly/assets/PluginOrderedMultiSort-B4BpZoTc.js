import{j as e}from"./iframe-B1ai2N1H.js";import{useMDXComponents as i}from"./index-QfN2DAp7.js";import{I as a,F as m}from"./CommandsAndQueries-DatNYL2t.js";import{M as s,C as p}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import{C as l}from"./ControlsWithNote-l4CFIpst.js";import"./copy-BJY5YA9D.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BAh5Qb7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Xy6kKlpD.js";import"./delete-CKMfo4Xk.js";import"./settings-CsC-4hiH.js";import"./NoData-BVmLwkSE.js";import"./IllustratedMessage-Nr6Didoc.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-4ep3HbjN.js";import"./index-DCqGCf08.js";import"./index-TntUiIag.js";import"./slim-arrow-down-DYHZJ5LG.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./ListBoxItemGroupTemplate-CC17eT-H.js";import"./ComboBoxItemGroup-BvdFX-vq.js";import"./ListItemBaseTemplate-GHiTWt4_.js";import"./Token-DWQMxVAt.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1Y3dmb5L.js";import"./ToggleButton-C38IUONv.js";import"./SuggestionItem-BbC6S69Q.js";import"./index-B2SJJBw5.js";import"./Option-CMzgQwF2.js";import"./index-DOw9MRWj.js";import"./SegmentedButton-DzQuajPs.js";import"./index-DxT3UJLK.js";import"./Select-CLe5Ufw3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./slim-arrow-down-xtIJDA6K.js";import"./index-BKQwlKuo.js";import"./index-AEFVkwvL.js";import"./index-CIaszeCC.js";import"./index-CEbRZ6tf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CO5NKowA.js";import"./group-2-DPXkxppB.js";import"./sort-descending-r_07bhB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bs-IgX_t.js";import"./utils-COwwDed4.js";import"./index-sS2AOrHh.js";import"./index-D59qyDlq.js";import"./index-CyY2pIYt.js";import"./navigation-down-arrow-BVW_sj_7.js";import"./navigation-right-arrow-C1avA-LC.js";import"./navigation-right-arrow-H_C30T42.js";import"./useCurrentTheme-Ckxn_kwO.js";import"./index-DJ2gVxdV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlOSzz73.js";import"./paper-plane-C_dmmjbE.js";import"./index-C6bXNW4U.js";import"./less-DT3uITo0.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
