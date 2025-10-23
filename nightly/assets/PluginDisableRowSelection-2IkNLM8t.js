import{j as e}from"./iframe-BS9g_hR0.js";import{useMDXComponents as n}from"./index-D6Sv7Jl_.js";import{I as r,F as s}from"./CommandsAndQueries-BG9-iBHT.js";import{M as l,C as a}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import"./copy-DO4k2zsN.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-UYSjv1UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bi6dAMxf.js";import"./delete-IIbsJHVn.js";import"./settings-DSTG7J_6.js";import"./NoData-BljPz3Ez.js";import"./IllustratedMessage-CiQm-njB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CW7qAaUp.js";import"./index-DQx4NIhG.js";import"./index-By4S6eBF.js";import"./slim-arrow-down-BrDUUgjS.js";import"./Input-B_EkSV5h.js";import"./ResponsivePopoverCommon.css-Nm_aoG18.js";import"./ValueStateMessage.css-DatFi3mM.js";import"./Suggestions.css-T59McTpP.js";import"./ListBoxItemGroupTemplate-DnRr1Fiq.js";import"./ComboBoxItemGroup-BIMHyF1K.js";import"./ListItemBaseTemplate-DnRIKRO-.js";import"./Token-BOw69ZP_.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba27rldr.js";import"./ToggleButton-EL98Z2LO.js";import"./SuggestionItem-C07z3z-f.js";import"./index-1owRGSxf.js";import"./Option-D-xwSxUZ.js";import"./index-CYokNx1T.js";import"./SegmentedButton-By8aV2cE.js";import"./index-nBcB45SO.js";import"./Select-CVg8WfRH.js";import"./InvisibleMessage-BhK3omrR.js";import"./slim-arrow-down-B_FxGKxS.js";import"./index-BPWtfQy0.js";import"./index-Bz6XqX9r.js";import"./index-BCrnZa0s.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdIbePGa.js";import"./group-2-KLHU0fg-.js";import"./sort-descending-DqFSPUni.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DiqZr5G5.js";import"./utils-CU6KAQZP.js";import"./index-DkMHvxEC.js";import"./index-BdY1vOzS.js";import"./index-DEBok3dO.js";import"./navigation-down-arrow-z8aFqrM1.js";import"./navigation-right-arrow-BedSm2Sl.js";import"./navigation-right-arrow-Btw4WHBr.js";import"./useCurrentTheme-jHl_ErAW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eY3AJp1y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DS89XhU_.js";import"./paper-plane-D-ciUbX6.js";import"./index-C6qv90tY.js";import"./less-BsRZbj7x.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
