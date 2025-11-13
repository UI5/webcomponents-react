import{j as e}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as n}from"./index-BOUZeiU3.js";import{I as r,F as s}from"./CommandsAndQueries-CJXOedaX.js";import{M as l,C as a}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import"./copy-D0b8WOcv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C3j7y0Ft.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./index-D2hl9olI.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Kyr9bwxl.js";import"./delete-7kEH9zFU.js";import"./settings-CPOuKNF_.js";import"./NoData-D8FNeakc.js";import"./IllustratedMessage-B77VIY0P.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DbJPpgwn.js";import"./index-CsMoMDOx.js";import"./index-DPXPqi6L.js";import"./slim-arrow-down-DZTc9bRP.js";import"./Input-B594VYIN.js";import"./ResponsivePopoverCommon.css-wzLcNDkL.js";import"./ValueStateMessage.css-Cspg1vkt.js";import"./Suggestions.css-BJhE_NNC.js";import"./ListBoxItemGroupTemplate-DMGEwk8N.js";import"./ComboBoxItemGroup-CGtI3Meb.js";import"./ListItemBaseTemplate-DgHiFsEB.js";import"./Token-7NJT_TyT.js";import"./ScrollEnablement-DHqnHvnh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dh3kIvJd.js";import"./ToggleButton-BULIjCh6.js";import"./SuggestionItem-D54ydvSC.js";import"./index-CEivT01K.js";import"./Option-CB3qwa7U.js";import"./index-8Oxx1U00.js";import"./SegmentedButton-Djmbus1g.js";import"./index-Bo8mGM12.js";import"./Select-DFkj0A5Y.js";import"./InvisibleMessage-Dqs72f3d.js";import"./slim-arrow-down-BHhWiK1Y.js";import"./index-DGkRDeyQ.js";import"./index-D_wk7CKO.js";import"./index-CEyjDTxm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-kor-VHIc.js";import"./group-2-Dv1jTfz7.js";import"./sort-descending-BEY_9WPQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DcIo-1Oj.js";import"./utils-Z_eUiVi_.js";import"./index-CGCQMYH4.js";import"./index-C_WCWx9F.js";import"./index-BAurpHKw.js";import"./navigation-down-arrow-BCDTP6Pm.js";import"./navigation-right-arrow-B1u1SCxi.js";import"./navigation-right-arrow-DvU1W2Rx.js";import"./useCurrentTheme-BytYqbwR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D0rSGhJQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BhPu4d3o.js";import"./paper-plane-BX09Tgvg.js";import"./index-6ykrLfuk.js";import"./less-CsWhpeDW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
