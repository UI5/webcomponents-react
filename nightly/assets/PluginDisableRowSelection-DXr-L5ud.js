import{j as e}from"./iframe-dY_MtB0H.js";import{useMDXComponents as n}from"./index-lTaYTAxK.js";import{I as r,F as s}from"./CommandsAndQueries-BmTyHFa7.js";import{M as l,C as a}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import"./copy-D63JhW9h.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DIrstwVo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaLQSA0E.js";import"./delete-g2CuJ_wb.js";import"./settings-DAd_6mYH.js";import"./NoData-Blv8I7YQ.js";import"./IllustratedMessage-BLDDWSdA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CaqiHixB.js";import"./index-qJBtItPV.js";import"./index-CWiSxvhn.js";import"./slim-arrow-down-CKBotrxy.js";import"./Input-DxE4TE5M.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./ValueStateMessage.css-CwzPbVeu.js";import"./Suggestions.css-BjOM4Zj7.js";import"./ListBoxItemGroupTemplate-DFxbQhuY.js";import"./ComboBoxItemGroup-DkBoYEbS.js";import"./ListItemBaseTemplate-Yzd_BkA_.js";import"./Token-BIFWvplK.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5edM-Bva.js";import"./ToggleButton-TjzAbPq5.js";import"./SuggestionItem-C57ebMKU.js";import"./index-CaPdWPLL.js";import"./Option-C1ySdqTY.js";import"./index-zXzmY2rb.js";import"./SegmentedButton-Jhgj92Ar.js";import"./index-DTHWpZOl.js";import"./Select-AWtqTVOK.js";import"./InvisibleMessage-B3-0tvhv.js";import"./slim-arrow-down-BOfgu5aU.js";import"./index-DYbah51H.js";import"./index-CP0kb2RZ.js";import"./index-CfFSy1iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmJLfmv.js";import"./group-2-1jf4JmlH.js";import"./sort-descending-Dm9j_ynP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-5V9EsP.js";import"./utils-BWRe96GN.js";import"./index-DEtQnl29.js";import"./index-DQ1x_Uk-.js";import"./index-CPn1OsK-.js";import"./navigation-down-arrow-Di7D0dyJ.js";import"./navigation-right-arrow-Ds1fXGh0.js";import"./navigation-right-arrow-BZlFav50.js";import"./useCurrentTheme-D3zL71pS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IWQOu6Ty.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5nyE8Ez.js";import"./paper-plane-CAK1tVhg.js";import"./index-Dp-bSeZB.js";import"./less-Djd8oRMN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
