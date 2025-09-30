import{j as e}from"./iframe-B4y_-iU1.js";import{useMDXComponents as n}from"./index-Dmi6nQVe.js";import{I as r,F as s}from"./CommandsAndQueries-CcSeU6ue.js";import{M as l,C as a}from"./blocks-sxqAtQzk.js";import"./Tag-DlHRwvSs.js";import"./index-Dllizol6.js";import"./copy-DoYKp7vI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DU8_U4hv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./index-BM-ZpZwJ.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFl00F28.js";import"./delete-BdgAa7IT.js";import"./settings-ltoOfpnx.js";import"./NoData-BJ8H7p15.js";import"./IllustratedMessage-CRi5X6Hl.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WsY88i2i.js";import"./index-Bsvhu9YC.js";import"./slim-arrow-down-Cic8v9YB.js";import"./Input-XpSBxwxq.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./ValueStateMessage.css-C6qx3eDB.js";import"./Suggestions.css-BVl5WNmq.js";import"./ListBoxItemGroupTemplate-CZlYWtN3.js";import"./ComboBoxItemGroup-dSVK-GrP.js";import"./ListItemBaseTemplate-BejSvRNG.js";import"./Token-Cw5uKiHz.js";import"./ScrollEnablement-D-ijl2E6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C_E-KHlV.js";import"./ToggleButton-5M-n5tkv.js";import"./SuggestionItem-M84D7oJF.js";import"./index-Bg7lGMvz.js";import"./Option-PNrPnZNL.js";import"./index-6pImetbD.js";import"./SegmentedButton-2LOsQkf5.js";import"./index-DvcI1fSE.js";import"./Select-B0cOOa_z.js";import"./InvisibleMessage-Cys8KAyT.js";import"./slim-arrow-down-DfvaHgtM.js";import"./index-BJc6WN0K.js";import"./index-CVLYvjV6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Buk7-JyN.js";import"./group-2-Dw1BqplP.js";import"./sort-descending-CyAGymLL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEnt0uUY.js";import"./utils-C87OY1Pr.js";import"./index-D9yVLeiz.js";import"./index-W0AxIMnu.js";import"./index-DWX4uZHR.js";import"./navigation-down-arrow-BRrWGW8j.js";import"./navigation-right-arrow-C4VgjZ90.js";import"./navigation-right-arrow-DfdYJymZ.js";import"./useCurrentTheme-Cd3Dd4gq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Doi2sOOu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lEOPI8BW.js";import"./paper-plane-Bd-SY9K2.js";import"./index-D43uRIcM.js";import"./less-DeoJiXSy.js";import"./index-DPmqrGlx.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
