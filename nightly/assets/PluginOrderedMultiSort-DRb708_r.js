import{j as e}from"./iframe-dY_MtB0H.js";import{useMDXComponents as i}from"./index-lTaYTAxK.js";import{I as a,F as m}from"./CommandsAndQueries-BmTyHFa7.js";import{M as s,C as p}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import{C as l}from"./ControlsWithNote-BvBWP6qn.js";import"./copy-D63JhW9h.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DIrstwVo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaLQSA0E.js";import"./delete-g2CuJ_wb.js";import"./settings-DAd_6mYH.js";import"./NoData-Blv8I7YQ.js";import"./IllustratedMessage-BLDDWSdA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CaqiHixB.js";import"./index-qJBtItPV.js";import"./index-CWiSxvhn.js";import"./slim-arrow-down-CKBotrxy.js";import"./Input-DxE4TE5M.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./ValueStateMessage.css-CwzPbVeu.js";import"./Suggestions.css-BjOM4Zj7.js";import"./ListBoxItemGroupTemplate-DFxbQhuY.js";import"./ComboBoxItemGroup-DkBoYEbS.js";import"./ListItemBaseTemplate-Yzd_BkA_.js";import"./Token-BIFWvplK.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5edM-Bva.js";import"./ToggleButton-TjzAbPq5.js";import"./SuggestionItem-C57ebMKU.js";import"./index-CaPdWPLL.js";import"./Option-C1ySdqTY.js";import"./index-zXzmY2rb.js";import"./SegmentedButton-Jhgj92Ar.js";import"./index-DTHWpZOl.js";import"./Select-AWtqTVOK.js";import"./InvisibleMessage-B3-0tvhv.js";import"./slim-arrow-down-BOfgu5aU.js";import"./index-DYbah51H.js";import"./index-CP0kb2RZ.js";import"./index-CfFSy1iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmJLfmv.js";import"./group-2-1jf4JmlH.js";import"./sort-descending-Dm9j_ynP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-5V9EsP.js";import"./utils-BWRe96GN.js";import"./index-DEtQnl29.js";import"./index-DQ1x_Uk-.js";import"./index-CPn1OsK-.js";import"./navigation-down-arrow-Di7D0dyJ.js";import"./navigation-right-arrow-Ds1fXGh0.js";import"./navigation-right-arrow-BZlFav50.js";import"./useCurrentTheme-D3zL71pS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IWQOu6Ty.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5nyE8Ez.js";import"./paper-plane-CAK1tVhg.js";import"./index-Dp-bSeZB.js";import"./less-Djd8oRMN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
