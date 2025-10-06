import{j as e}from"./iframe-DFBm-DSq.js";import{useMDXComponents as n}from"./index-DN1lWEds.js";import{I as r,F as s}from"./CommandsAndQueries-Dwesrog0.js";import{M as l,C as a}from"./blocks-B7zGvzyh.js";import"./Tag-CMC3yhYK.js";import"./index-i9Tuo-S4.js";import"./copy-BOgwG0pC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CUJGcFCn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./index-BYzkCeld.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bl9mqRZp.js";import"./delete-DxCiKEE4.js";import"./settings-DzhyxtkM.js";import"./NoData-DgE1Sh_E.js";import"./IllustratedMessage-BVbLtyE0.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-JnTxKdea.js";import"./index-jn-3vf8a.js";import"./slim-arrow-down-DRJmqDnV.js";import"./Input-DSVZUACP.js";import"./ResponsivePopoverCommon.css-CnMcrjsQ.js";import"./ValueStateMessage.css-BbtbR7Of.js";import"./Suggestions.css-DijJF9RT.js";import"./ListBoxItemGroupTemplate-uBeRRDby.js";import"./ComboBoxItemGroup-By5YcNLI.js";import"./ListItemBaseTemplate-DA8m0mUv.js";import"./Token-CNQzMPAi.js";import"./ScrollEnablement-BdJYzqT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGWJdbo7.js";import"./ToggleButton-VEbquAnE.js";import"./SuggestionItem-CfA6oYQG.js";import"./index-BTI_jG21.js";import"./Option-CzTdab4u.js";import"./index-ggGTc7ky.js";import"./SegmentedButton-Ddd1pMGI.js";import"./index-z1KVOKvO.js";import"./Select-9KEamWxt.js";import"./InvisibleMessage-CWFUnfEF.js";import"./slim-arrow-down-B6t_l0xN.js";import"./index-Cz-izgT1.js";import"./index-CjzbCvai.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4iI4qOF.js";import"./group-2-C_4wDfjC.js";import"./sort-descending-s1eyoV1T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DEepbVcE.js";import"./utils-B1rOOgKS.js";import"./index-BvAYHJB3.js";import"./index-Bw_MCDBq.js";import"./index-BdL1x6lY.js";import"./navigation-down-arrow-CIjk2tcP.js";import"./navigation-right-arrow-q3_6ucGP.js";import"./navigation-right-arrow-kSqlvs_O.js";import"./useCurrentTheme-C2XPwL-I.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C1Lxv1Jm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UMzUL51_.js";import"./paper-plane-Douct2lq.js";import"./index-Z3ts_iK1.js";import"./less-BMO93kr6.js";import"./index-BTeNJtiF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
