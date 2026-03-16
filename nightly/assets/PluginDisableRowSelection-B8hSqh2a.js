import{j as e}from"./iframe-BDg7FSoj.js";import{useMDXComponents as n}from"./index-CfS6z3MT.js";import{I as r}from"./CommandsAndQueries-BgLg0c2t.js";import{M as s,C as l}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import"./copy-LtMPx_h3.js";import{F as a}from"./Footer-DcSScdvn.js";import"./PageNotFound-Cz7A_GPz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CgLPWJdv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DweKFefr.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./index-CtXj8tW6.js";import"./index-Ca5wJMxN.js";import"./index-DKaIOimk.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-ClFnafIK.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CVFEN-wi.js";import"./delete-Djyzt4EC.js";import"./settings-CjYJ2CHk.js";import"./NoData-C5_l_MOE.js";import"./NoFilterResults-HqlK2bIf.js";import"./index-CHhs1TdG.js";import"./IllustratedMessage-BgCoMSTD.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CavH8dni.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./ListBoxItemGroupTemplate-DVkdxE4m.js";import"./ComboBoxItemGroup-B7lumk6S.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./Token-CyYhzpuK.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9BXoiP3.js";import"./ToggleButton-C756d9Qn.js";import"./multiselect-all-B_axlRDi.js";import"./SuggestionItem-DeimWAUM.js";import"./index-Cdhi9950.js";import"./Option-Dz3WWHcz.js";import"./index-BwSNURHE.js";import"./SegmentedButton-DZh5fXjg.js";import"./index-C9V-0iTY.js";import"./Select-Br85qeyo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./index-lWGkx38J.js";import"./index-D8AeP6Iz.js";import"./index-DLeoOT8k.js";import"./index-XZbO5RWz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pxS513Zf.js";import"./group-2-DQqG6IcW.js";import"./sort-descending-CoH2Moiz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYaJ9Gcz.js";import"./utils-Chkhn7io.js";import"./index-_v6E_SiW.js";import"./index-Do6_Z1_e.js";import"./index-CiGBzV4y.js";import"./navigation-down-arrow-DyYI-mnK.js";import"./navigation-right-arrow-_kG0lFZX.js";import"./navigation-right-arrow-ByngEGsa.js";import"./useCurrentTheme-CSxpKvX6.js";import"./index-B7uqwTBo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQKn5Zaa.js";import"./paper-plane-DLTGccM2.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
