import{j as e}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as n}from"./index-CiFONtpN.js";import{I as r,F as s}from"./CommandsAndQueries-3p6jyLf7.js";import{M as l,C as a}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import"./copy-ButtKxyE.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CsIPtkrn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQJSAvK6.js";import"./delete-B6O2JaIS.js";import"./settings-SpDQw2Vq.js";import"./NoData-bysabFUy.js";import"./IllustratedMessage-CUeEBz-a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-8dbC-gN_.js";import"./index-ot_Vs5SX.js";import"./index-DdRBnYSU.js";import"./slim-arrow-down-KrTHML7Y.js";import"./Input-3AAsME8j.js";import"./ResponsivePopoverCommon.css-4GPhK6Ks.js";import"./ValueStateMessage.css-y9BzQC21.js";import"./Suggestions.css-E_zTpNLY.js";import"./ListBoxItemGroupTemplate-CWaB1uAI.js";import"./ComboBoxItemGroup-CvF6QpNn.js";import"./ListItemBaseTemplate-BrUrTP7s.js";import"./Token-B_03GxpZ.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DnUU-rKN.js";import"./ToggleButton-B0JQSluf.js";import"./SuggestionItem-7QP2JsqC.js";import"./index-D2O8IK0Y.js";import"./Option-C-i06TU1.js";import"./index-D-wDCcJv.js";import"./SegmentedButton-Cj4a5li5.js";import"./index-BpQt2xX8.js";import"./Select-xEHU_Jve.js";import"./InvisibleMessage-Cry_VVZD.js";import"./slim-arrow-down-BVAuIuoE.js";import"./index-CVglYbsF.js";import"./index-C9CUNSTS.js";import"./index-DdDzQOK5.js";import"./index-DrrvpZW3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTW5WVB_.js";import"./group-2-r-nrfnRe.js";import"./sort-descending-klOkrTUA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De8BjJaL.js";import"./utils-fPRKtnar.js";import"./index-DLgRUgqV.js";import"./index-D7n88VO3.js";import"./index-Dzq4A1VN.js";import"./navigation-down-arrow-C_PatvXC.js";import"./navigation-right-arrow-BWvpLWqD.js";import"./navigation-right-arrow-8E2izI9D.js";import"./useCurrentTheme-DWIF38NU.js";import"./index-Dk1eqQ67.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQbatNcW.js";import"./paper-plane-J4zNAVa6.js";import"./index-CpwJUAOc.js";import"./less-D6dTBaBl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
