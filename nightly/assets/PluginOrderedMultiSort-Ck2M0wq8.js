import{j as e}from"./iframe-D_72XrxV.js";import{useMDXComponents as i}from"./index-66RF5jzG.js";import{I as a,F as m}from"./CommandsAndQueries-B5MqblA3.js";import{M as s,C as p}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import{C as l}from"./ControlsWithNote-DDWhTJKA.js";import"./copy-jn1S9mhy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CDy71CRU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-DkMaspDs.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Csj2HO8L.js";import"./delete-CeOcUIER.js";import"./settings-Cn5wwyPF.js";import"./NoData-PopUoBYo.js";import"./IllustratedMessage-DZ41JI5v.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTXQ89WT.js";import"./index-Bu9F4FMc.js";import"./index-BXLU2QyI.js";import"./slim-arrow-down-4pwOw1KN.js";import"./Input-ctWP6EpA.js";import"./ResponsivePopoverCommon.css-CXO0egQQ.js";import"./ValueStateMessage.css-BtHvb9Z3.js";import"./Suggestions.css-Dcnh6jB1.js";import"./ListBoxItemGroupTemplate-DHFu76gC.js";import"./ComboBoxItemGroup-CZO-aXf1.js";import"./ListItemBaseTemplate-DCTXILqJ.js";import"./Token-CAt0kzvm.js";import"./ScrollEnablement-yQTiHpLV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DNgCtY9E.js";import"./ToggleButton-BNhJm5oM.js";import"./SuggestionItem-B4SVsFoO.js";import"./index-BXyhN-98.js";import"./Option-BNEZgQiG.js";import"./index-CQ46V3BB.js";import"./SegmentedButton-BDhAyQvz.js";import"./index-Cz4hAL11.js";import"./Select-CdrF46G-.js";import"./InvisibleMessage-DtML4eYo.js";import"./slim-arrow-down-CwKrWZlT.js";import"./index-CGCbfSVl.js";import"./index-rD0q-lzh.js";import"./index-CeS7n61h.js";import"./index-DGCvl-Xm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BH8RStDa.js";import"./group-2-ep49yjAi.js";import"./sort-descending-DxUdn13J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZ2gbzTy.js";import"./utils-BWLKg-TT.js";import"./index-BHGBSUlQ.js";import"./index-GvIpKsjG.js";import"./index-5Qz0hHSk.js";import"./navigation-down-arrow-B9jvvqZn.js";import"./navigation-right-arrow-BfmQEaOh.js";import"./navigation-right-arrow-IOAC3A0T.js";import"./useCurrentTheme-B97NpVFX.js";import"./index-BUtpH4Q1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwZ1F38u.js";import"./paper-plane-Dv362znJ.js";import"./index-DPiIKAxE.js";import"./less-C7rJWOWo.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
