import{j as e}from"./iframe-BqzC-8C4.js";import{useMDXComponents as n}from"./index-YQ6GhEX5.js";import{I as r,F as s}from"./CommandsAndQueries-BJ93mlRM.js";import{M as l,C as a}from"./blocks-ayIIZ8Ez.js";import"./Tag-DMbvGyPZ.js";import"./index-DLI_KJ4q.js";import"./copy-BAa7Mkrf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B9bW7cYn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI7TE3Ph.js";import"./index-Bf-2mOJM.js";import"./index-CBL7x3cU.js";import"./Link-Cyx9O9I9.js";import"./index--RDSdd8J.js";import"./index-M-RJ-Kd6.js";import"./index-DFZxjAeq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjpHjoiw.js";import"./addCustomCSSWithScoping-BlPp9zh6.js";import"./index-yh1yAWiF.js";import"./information-CL-xPlFc.js";import"./sys-enter-2-mfMn16B5.js";import"./alert-DcIxt5mX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKOcL5_O.js";import"./delete-B0_Rw7kP.js";import"./settings-DwtumLBN.js";import"./NoData-CazGrZXU.js";import"./IllustratedMessage-zK5H3JPd.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Cw1Eja2C.js";import"./index-DYmdGGhX.js";import"./index-B4ILPk1v.js";import"./slim-arrow-down-BgPxvwnX.js";import"./Input-BIzIH4FC.js";import"./ResponsivePopoverCommon.css-DWPMpekW.js";import"./ValueStateMessage.css-B5whAX6s.js";import"./Suggestions.css-H-37CGAi.js";import"./ListBoxItemGroupTemplate-C3idOVig.js";import"./ComboBoxItemGroup-DIUMSAuM.js";import"./ListItemBaseTemplate-CsRnbDmP.js";import"./Token-CdnPMBnu.js";import"./ScrollEnablement-gBya7LIS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-lWm8UF3n.js";import"./ToggleButton-D5J62tyd.js";import"./SuggestionItem-B8nawxFb.js";import"./index-DSWs_DV-.js";import"./Option-BNC4WdOq.js";import"./index-B9_kEjlX.js";import"./SegmentedButton-YbvP5bMv.js";import"./index-BtugCD05.js";import"./Select-DX2So7Kf.js";import"./InvisibleMessage-k93LnoOV.js";import"./slim-arrow-down-BldRuQp0.js";import"./index-ClKg_r_t.js";import"./index-CIWagj-s.js";import"./index-CnvRzieE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLmmxjak.js";import"./group-2-CYyQt0dS.js";import"./sort-descending-HehUk6xl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCtsywZE.js";import"./utils-BEgTsQ3i.js";import"./index-KdHNkHqX.js";import"./index-DuFahMhv.js";import"./index-DPhALhpO.js";import"./navigation-down-arrow-BIBuNkWg.js";import"./navigation-right-arrow-G5P_762s.js";import"./navigation-right-arrow-DjnGNXSH.js";import"./useCurrentTheme-B2hbGZxz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_o2MQlb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CG1Q2uL4.js";import"./paper-plane-BNxrdXoX.js";import"./index-B11o6AUS.js";import"./less-DVg8rSGY.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
