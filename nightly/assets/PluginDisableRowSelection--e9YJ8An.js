import{j as e}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as n}from"./index-BURirfl-.js";import{I as r,F as s}from"./CommandsAndQueries-TIuZdWtI.js";import{M as l,C as a}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import"./copy-CvLuzzlZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CyPVuxE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./index-Dnf0ia5k.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBxFCMLb.js";import"./delete-DTulYaAI.js";import"./settings-tx3CzgEQ.js";import"./NoData-Bshjt374.js";import"./IllustratedMessage-CCQBtLd9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DKIL7cga.js";import"./index-kDjDNPRR.js";import"./index-D7LIj5Um.js";import"./slim-arrow-down-BgIex6c4.js";import"./Input-Bn75OrvV.js";import"./ResponsivePopoverCommon.css-Bp0oDzHC.js";import"./ValueStateMessage.css-mxe_cMa3.js";import"./Suggestions.css-HrgLJez3.js";import"./ListBoxItemGroupTemplate-Blo7114h.js";import"./ComboBoxItemGroup-C4A4RTAb.js";import"./ListItemBaseTemplate-Crj91yI9.js";import"./Token-BzgB6gA9.js";import"./ScrollEnablement-DbCEb8PT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CelTCW5a.js";import"./ToggleButton-lFj29rfD.js";import"./SuggestionItem-D2y_todW.js";import"./index-DCwkTiB-.js";import"./Option-CXj69qWE.js";import"./index-l8ddpiaC.js";import"./SegmentedButton-rOSwY7SZ.js";import"./index-Dh8wCVOo.js";import"./Select-DifQlmAi.js";import"./InvisibleMessage-DKXtSvOz.js";import"./slim-arrow-down-CLA3TSxo.js";import"./index-DMla7rjx.js";import"./index-_lKZYWZe.js";import"./index-ob9pHg1a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B94VfVt_.js";import"./group-2-88JLzJKU.js";import"./sort-descending-BXFoHtVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-KroJlr.js";import"./utils-BzC6a3dT.js";import"./index-DgcTnc5w.js";import"./index-CHrJjqGe.js";import"./index-Bju32QxQ.js";import"./navigation-down-arrow-BuuDEqwu.js";import"./navigation-right-arrow-CghbZ4FB.js";import"./navigation-right-arrow-C3FyKz3D.js";import"./useCurrentTheme-BtlDZaCV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYbG7W8m.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Sw05o_Vs.js";import"./paper-plane-Iq18tC-e.js";import"./index-5gnscsEE.js";import"./less-BQGA1HOG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
