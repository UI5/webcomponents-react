import{j as e}from"./iframe-BH1OFp8w.js";import{useMDXComponents as n}from"./index-clbF6OIG.js";import{I as r,F as s}from"./CommandsAndQueries-DhtC5bjI.js";import{M as l,C as a}from"./blocks-DYnbeidp.js";import"./Tag-21FIv1do.js";import"./index-4Vj58SYs.js";import"./copy-DLKkxH-i.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-bFb8I2oP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-85PSu2U7.js";import"./index-C1e9PFDr.js";import"./index-DWfP0uFj.js";import"./Link-CVh0krje.js";import"./index-DIrfyEUY.js";import"./index-D4MGenX5.js";import"./index-scCH-mdd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vxfHPu95.js";import"./addCustomCSSWithScoping-CO8v9lg_.js";import"./index-Bi6BF3Uk.js";import"./information-IaTUuI6Q.js";import"./sys-enter-2-CEI4onME.js";import"./alert-BmWcWx5H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXrLIm28.js";import"./delete-BQOwqvtQ.js";import"./settings-CLTeFM-0.js";import"./NoData-BP_iQedv.js";import"./IllustratedMessage-BMqDKwh-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-6H51KJbV.js";import"./index-rpiOj1sz.js";import"./slim-arrow-down-CzpD64FA.js";import"./Input-BSfjzvfl.js";import"./ResponsivePopoverCommon.css-DllK01Rq.js";import"./ValueStateMessage.css-BrYTvo9q.js";import"./Suggestions.css-CcMxM2i5.js";import"./ListBoxItemGroupTemplate-DPC15YRC.js";import"./ComboBoxItemGroup-CfJ5zYWu.js";import"./ListItemBaseTemplate-CCRCazqr.js";import"./Token-CZjiX32Z.js";import"./ScrollEnablement-CFyU8Uno.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJmcQ_PK.js";import"./ToggleButton-BMXza2Jq.js";import"./SuggestionItem-DxWrHJGI.js";import"./index-zIfHFTcK.js";import"./Option-CukHBpnA.js";import"./index-D3scHIfq.js";import"./SegmentedButton-CqReU-2R.js";import"./index-B0M_ZK7f.js";import"./Select-DW8ta__u.js";import"./InvisibleMessage-DBYtbN9V.js";import"./slim-arrow-down-m7FIYFg0.js";import"./index-DTehykCe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpfHhzM9.js";import"./group-2-_-FJm1cs.js";import"./sort-descending-Dy8Q8QRn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5udeEHl.js";import"./utils-C9tRDhAa.js";import"./index-yk44xtLD.js";import"./index-n4NheVd0.js";import"./index-Bj3494xK.js";import"./navigation-down-arrow-L8ihvSR8.js";import"./navigation-right-arrow-B27p-tiy.js";import"./navigation-right-arrow-B9F4Om5K.js";import"./useCurrentTheme-CtmysqKg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C-vusZiK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BfFzk8Md.js";import"./paper-plane-D1WmgMA8.js";import"./index-CFSl9CuC.js";import"./less-BYrF-EPS.js";import"./index-BA3PbQUJ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
