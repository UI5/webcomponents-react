import{j as e}from"./iframe-Bg2SD6vy.js";import{useMDXComponents as n}from"./index-CdwjPgWO.js";import{I as r,F as s}from"./CommandsAndQueries-D_Y2u3wJ.js";import{M as l,C as a}from"./blocks-CZL3kIpQ.js";import"./Tag-BBAYHNzq.js";import"./index-HB0ucYrA.js";import"./copy-UVBI9dME.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-jSjXb3wB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fylc8d1K.js";import"./index-BsOYAUed.js";import"./index-BpAxqFMX.js";import"./Link-B-zNx8Rm.js";import"./index-8T9qtuSw.js";import"./index-DO_6IPbq.js";import"./index-TtYx2H_8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9V3uoCq.js";import"./addCustomCSSWithScoping-CTL1rjLn.js";import"./index-DdlSV3iY.js";import"./information-CRabbQHz.js";import"./sys-enter-2-DqOp1oIr.js";import"./alert-BvLfxsiS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSAA7awN.js";import"./delete-5BOOHJBE.js";import"./settings-BsXo_RiZ.js";import"./NoData-Ccv5U2JJ.js";import"./IllustratedMessage-tmpUoTAd.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-2H4gT1-P.js";import"./index-Qd7vHrhH.js";import"./index-CuBcyOJk.js";import"./slim-arrow-down-D3U0-f5W.js";import"./Input-jdphY6CV.js";import"./ResponsivePopoverCommon.css-WFY0APq-.js";import"./ValueStateMessage.css-Bon94RZK.js";import"./Suggestions.css-Df10iCrd.js";import"./ListBoxItemGroupTemplate-B8fvrHHn.js";import"./ComboBoxItemGroup-BW3MSzp1.js";import"./ListItemBaseTemplate-B30GmwKn.js";import"./Token-CM436cdJ.js";import"./ScrollEnablement-BBWkbu9Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKzutTm5.js";import"./ToggleButton-99np1ddV.js";import"./SuggestionItem-DBO_3dkt.js";import"./index-w9ePVu2W.js";import"./Option-CWoqDgXU.js";import"./index-BViSevlR.js";import"./SegmentedButton-p_kUBRZN.js";import"./index-C2j6bZw5.js";import"./Select-DnJ2csMF.js";import"./InvisibleMessage-BOxQIJTv.js";import"./slim-arrow-down-DOg4xt37.js";import"./index-BFPm5TCJ.js";import"./index-BRp05jHt.js";import"./index-CFjFYMef.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMZNlytO.js";import"./group-2-BPq3_pcZ.js";import"./sort-descending-BpqNLAMP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B81Z82mq.js";import"./utils-D_EwR5ck.js";import"./index-DXKVxLaR.js";import"./index-B6a3zIdV.js";import"./index-BavWNaoH.js";import"./navigation-down-arrow-rBxK9kWS.js";import"./navigation-right-arrow--3JwYmng.js";import"./navigation-right-arrow-dYZMq4UC.js";import"./useCurrentTheme-BVGk2TTJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BgbPH2TB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPCZHmr9.js";import"./paper-plane-D-4FvCuR.js";import"./index-CFcdP4pc.js";import"./less-BU56_0XV.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
