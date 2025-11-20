import{j as e}from"./iframe-CwFVqG2B.js";import{useMDXComponents as n}from"./index-DLCucreN.js";import{I as r,F as s}from"./CommandsAndQueries-CPEglOxS.js";import{M as l,C as a}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import"./copy-BGYvKTCJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-IPFHSsND.js";import"./preload-helper-PPVm8Dsz.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./index-CCtj0faG.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRrGwzL9.js";import"./delete-BAWpcIUW.js";import"./settings-BVk1IXbs.js";import"./NoData-Bj5ycwAL.js";import"./IllustratedMessage-BHtBrEyE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C9ToWu0p.js";import"./index-CcsAx6VM.js";import"./index-DBALDDZY.js";import"./slim-arrow-down-CSjJ9Oz6.js";import"./Input-BRFISGyi.js";import"./ResponsivePopoverCommon.css-55yd8Lsl.js";import"./ValueStateMessage.css-BXXM_drL.js";import"./Suggestions.css-D3s2RFDk.js";import"./ListBoxItemGroupTemplate-CdPhkglx.js";import"./ComboBoxItemGroup-D7oZE5pz.js";import"./ListItemBaseTemplate-CDbPPmc-.js";import"./Token-EaAKc4df.js";import"./ScrollEnablement-BCwkkkko.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DP9SjAAJ.js";import"./ToggleButton-Cc0QHwqT.js";import"./SuggestionItem-Cbtk-40h.js";import"./index-iyeSfRj5.js";import"./Option-Cb-NFj1X.js";import"./index-ypKCmrok.js";import"./SegmentedButton-DYr7Bui3.js";import"./index-CSUbFIFX.js";import"./Select-sAAnT16U.js";import"./InvisibleMessage-LF_vPXeD.js";import"./slim-arrow-down-B8qjkohF.js";import"./index-XwinXGWy.js";import"./index-DYJmk3l7.js";import"./index-C0EOMgqx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuEY5R3f.js";import"./group-2-D-tXx0Dv.js";import"./sort-descending-DvurIphr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BjIQh5tS.js";import"./utils-C6ONr1Lb.js";import"./index-Bw9EaheS.js";import"./index-COV0sCE8.js";import"./index-DTIplfIq.js";import"./navigation-down-arrow-CKNuRE7w.js";import"./navigation-right-arrow-CUpkPzT9.js";import"./navigation-right-arrow-B5fnZfYe.js";import"./useCurrentTheme-Cq5UXjbe.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CzUp6nof.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Kk-MVMWt.js";import"./paper-plane-r-lsifVq.js";import"./index-Iapdt60L.js";import"./less-aP6DHpwq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
