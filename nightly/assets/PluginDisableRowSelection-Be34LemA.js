import{j as e}from"./iframe-COKmt9GX.js";import{useMDXComponents as n}from"./index-CzY2e8So.js";import{I as r,F as s}from"./CommandsAndQueries-DSaWGMGq.js";import{M as l,C as a}from"./blocks-BC1CQ7iN.js";import"./Tag-DloN_KbF.js";import"./index-C27X2XUm.js";import"./copy-CyMKHNyy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Jogl8FYp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./index-WnbZc56M.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6_PiP7Z.js";import"./delete-CoicSmVL.js";import"./settings-C_m_IFT1.js";import"./NoData-DTXeTJ5s.js";import"./IllustratedMessage-fTHXJSJn.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dd1xDcBR.js";import"./index-DF25Qnlr.js";import"./index-BhMCzWcn.js";import"./slim-arrow-down-B87n6-mS.js";import"./Input-BceWkqxg.js";import"./ResponsivePopoverCommon.css-CcjK_Jcr.js";import"./ValueStateMessage.css-DaEL7h-V.js";import"./Suggestions.css-9PKvquaD.js";import"./ListBoxItemGroupTemplate-DW5Ywa3P.js";import"./ComboBoxItemGroup-D-NsDMkE.js";import"./ListItemBaseTemplate-CgxVQe7-.js";import"./Token-CKythk2p.js";import"./ScrollEnablement-D7MLciOS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPKpO2-G.js";import"./ToggleButton-9gCC_TTJ.js";import"./SuggestionItem-DR-cU1_Q.js";import"./index-FkMp5OCm.js";import"./Option-Ch8TBZkA.js";import"./index-Dn9GktW2.js";import"./SegmentedButton-_N8TVKLb.js";import"./index-5p0Gpf8D.js";import"./Select-BFd8ury_.js";import"./InvisibleMessage-DmmsUdM7.js";import"./slim-arrow-down-5YiILlYo.js";import"./index-2YlEmuXv.js";import"./index-qF8GZWDg.js";import"./index-DwH7fqA2.js";import"./index-DhVmRSsQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHypl9jb.js";import"./group-2-DEGE6ykx.js";import"./sort-descending-CT2T5JwK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2iRiHRU.js";import"./utils-Dy6UBNOH.js";import"./index-qVJXdvv_.js";import"./index-DGpRIpiu.js";import"./index-DBlqkpsO.js";import"./navigation-down-arrow-RRwxkr-f.js";import"./navigation-right-arrow-BoUWLgXr.js";import"./navigation-right-arrow-CZWnArrm.js";import"./useCurrentTheme-Bp534Rms.js";import"./index-ByNYUvQ0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--2n9yHX1.js";import"./paper-plane-MxlRUPJs.js";import"./index-DP2Iyis7.js";import"./less-DrZK_gXX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
