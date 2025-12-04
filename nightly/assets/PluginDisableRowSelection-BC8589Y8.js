import{j as e}from"./iframe-DMN4M7xk.js";import{useMDXComponents as n}from"./index-CILjehOn.js";import{I as r,F as s}from"./CommandsAndQueries-WBNIPpbv.js";import{M as l,C as a}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import"./copy-DfWrS8Wl.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bwh82CG4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./index-DC1f3cIv.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-72B-FfI5.js";import"./delete-BXcfeAkW.js";import"./settings-BMDPPYXO.js";import"./NoData-DpL9B_tB.js";import"./IllustratedMessage-mQG8NQdQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DfpnzG1x.js";import"./index-DEnaRZHs.js";import"./index-DdLV16yZ.js";import"./slim-arrow-down-BMYaUctI.js";import"./Input-kyaMbtwm.js";import"./ResponsivePopoverCommon.css-DoVie0vW.js";import"./ValueStateMessage.css-C3TIUP8t.js";import"./Suggestions.css-CBNkZ6eC.js";import"./ListBoxItemGroupTemplate-DCFa39XX.js";import"./ComboBoxItemGroup-B-BVlY4D.js";import"./ListItemBaseTemplate-Daft9BoV.js";import"./Token-Z8h45JU6.js";import"./ScrollEnablement-DdRp-vrJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-t6-iH22V.js";import"./ToggleButton--FmypGgi.js";import"./SuggestionItem-Bl1gf1ZL.js";import"./index-D9Z4d1ny.js";import"./Option-C1p55_wy.js";import"./index-DnVGk-28.js";import"./SegmentedButton-DSbC53rX.js";import"./index-BpVvcCHt.js";import"./Select-DvRwS8Np.js";import"./InvisibleMessage-CgRkoQY3.js";import"./slim-arrow-down-Blx7Bq27.js";import"./index-C1jqhprP.js";import"./index-hWsfyVsS.js";import"./index-DRqK0cBV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbXkmi4n.js";import"./group-2-DsWqo2_5.js";import"./sort-descending-CTHBPK2U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BI8mE9zy.js";import"./utils-BB4PbXwM.js";import"./index-ouNpfsue.js";import"./index-DdbWS-FF.js";import"./index-CpkaOZjF.js";import"./navigation-down-arrow-CcMgeJLo.js";import"./navigation-right-arrow-g9yG16Y1.js";import"./navigation-right-arrow-CpLRbIv1.js";import"./useCurrentTheme-CGUqiswm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CCQV-_Jh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYrYoRZ6.js";import"./paper-plane-B0PE-HLg.js";import"./index-E42MgdkT.js";import"./less-Bk9ZhphN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
