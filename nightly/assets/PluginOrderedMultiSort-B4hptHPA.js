import{j as e}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as i}from"./index-BOUZeiU3.js";import{I as a,F as m}from"./CommandsAndQueries-CJXOedaX.js";import{M as s,C as p}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import{C as l}from"./ControlsWithNote-sP9I0HR5.js";import"./copy-D0b8WOcv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C3j7y0Ft.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./index-D2hl9olI.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Kyr9bwxl.js";import"./delete-7kEH9zFU.js";import"./settings-CPOuKNF_.js";import"./NoData-D8FNeakc.js";import"./IllustratedMessage-B77VIY0P.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DbJPpgwn.js";import"./index-CsMoMDOx.js";import"./index-DPXPqi6L.js";import"./slim-arrow-down-DZTc9bRP.js";import"./Input-B594VYIN.js";import"./ResponsivePopoverCommon.css-wzLcNDkL.js";import"./ValueStateMessage.css-Cspg1vkt.js";import"./Suggestions.css-BJhE_NNC.js";import"./ListBoxItemGroupTemplate-DMGEwk8N.js";import"./ComboBoxItemGroup-CGtI3Meb.js";import"./ListItemBaseTemplate-DgHiFsEB.js";import"./Token-7NJT_TyT.js";import"./ScrollEnablement-DHqnHvnh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dh3kIvJd.js";import"./ToggleButton-BULIjCh6.js";import"./SuggestionItem-D54ydvSC.js";import"./index-CEivT01K.js";import"./Option-CB3qwa7U.js";import"./index-8Oxx1U00.js";import"./SegmentedButton-Djmbus1g.js";import"./index-Bo8mGM12.js";import"./Select-DFkj0A5Y.js";import"./InvisibleMessage-Dqs72f3d.js";import"./slim-arrow-down-BHhWiK1Y.js";import"./index-DGkRDeyQ.js";import"./index-D_wk7CKO.js";import"./index-CEyjDTxm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-kor-VHIc.js";import"./group-2-Dv1jTfz7.js";import"./sort-descending-BEY_9WPQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DcIo-1Oj.js";import"./utils-Z_eUiVi_.js";import"./index-CGCQMYH4.js";import"./index-C_WCWx9F.js";import"./index-BAurpHKw.js";import"./navigation-down-arrow-BCDTP6Pm.js";import"./navigation-right-arrow-B1u1SCxi.js";import"./navigation-right-arrow-DvU1W2Rx.js";import"./useCurrentTheme-BytYqbwR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D0rSGhJQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BhPu4d3o.js";import"./paper-plane-BX09Tgvg.js";import"./index-6ykrLfuk.js";import"./less-CsWhpeDW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
