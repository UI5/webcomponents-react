import{j as e}from"./iframe-jlZ7haKH.js";import{useMDXComponents as n}from"./index-BDRke1Rk.js";import{I as r}from"./CommandsAndQueries-C62gP0Wv.js";import{M as s,C as l}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import"./copy-BXrubwPI.js";import{F as a}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DeV4w8oQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CF1TeXpN.js";import"./delete-CXC_x1Wt.js";import"./settings-Cb2pk8-g.js";import"./NoData-DHSqpjwQ.js";import"./NoFilterResults-C1oKXwEb.js";import"./index-_9twBSC1.js";import"./IllustratedMessage-CAZPNMC9.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-dukZDfuG.js";import"./slim-arrow-down-CBNyDt1h.js";import"./Input-DEOLuuQ3.js";import"./ResponsivePopoverCommon.css-C-1sAsFZ.js";import"./ValueStateMessage.css-vjmAhNEW.js";import"./Suggestions.css-vYaR_fB3.js";import"./ListBoxItemGroupTemplate-u6isFPzQ.js";import"./ComboBoxItemGroup-CGtKHfXx.js";import"./ListItemBaseTemplate-BrqWXWhE.js";import"./Token-D3dxQxC_.js";import"./ScrollEnablement-BXzeOUzo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9UYn_auW.js";import"./ToggleButton-Bx4hMrn4.js";import"./SuggestionItem-CbZUBmQR.js";import"./index-C2sPI_0t.js";import"./Option-gWpmqGV0.js";import"./index-CBvlNyEh.js";import"./SegmentedButton-C0MY1V7R.js";import"./index-DoKQkSY9.js";import"./Select-T7Cbny-Q.js";import"./InvisibleMessage-DF9bJNX1.js";import"./slim-arrow-down-OBUhn7dW.js";import"./index-C5kwsDAy.js";import"./index-BJ9tFuf9.js";import"./index-DGcTw-tM.js";import"./index-BoJsfaPJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C6RdI72b.js";import"./group-2-B0xuaGVP.js";import"./sort-descending-B15HlQOL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4gr_cEr.js";import"./utils-Dg8OiBgJ.js";import"./index-B9iEuw5a.js";import"./index-CfgM1I13.js";import"./index-CsIoukbr.js";import"./navigation-down-arrow-CnCKx9b1.js";import"./navigation-right-arrow-C6AIXjk9.js";import"./navigation-right-arrow-BR4Lo9-V.js";import"./useCurrentTheme-Di1dsbRk.js";import"./index-DuIRYjXG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBECOKtB.js";import"./paper-plane-BvaLAYzQ.js";import"./index-vs6vsdhj.js";import"./less-Bo8veSqq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
