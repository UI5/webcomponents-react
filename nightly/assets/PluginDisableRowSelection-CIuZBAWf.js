import{j as e}from"./iframe-DBihyX6B.js";import{useMDXComponents as n}from"./index-7EvsRGh_.js";import{I as r,F as s}from"./CommandsAndQueries-CFIgGEta.js";import{M as l,C as a}from"./blocks-4x6sD7LX.js";import"./Tag-DcWV-u9n.js";import"./index-DLEor5QI.js";import"./copy-Bf9mIKpj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CtylBLYb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./index-d0ALq1QU.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX0skYPv.js";import"./delete-DsRezzSz.js";import"./settings-D8ApvCwK.js";import"./NoData-DJ6OgM6J.js";import"./IllustratedMessage-BKJHSB3f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CfMSskMz.js";import"./index-7dKgR_TP.js";import"./slim-arrow-down-I06sys84.js";import"./Input-DqlEAtbU.js";import"./ResponsivePopoverCommon.css-B4oI3h8B.js";import"./ValueStateMessage.css-Bl16JEdv.js";import"./Suggestions.css-HfDO3kbS.js";import"./ListBoxItemGroupTemplate-B_lc-IJo.js";import"./ComboBoxItemGroup-Cicxp6Dh.js";import"./ListItemBaseTemplate-BxUwYA2D.js";import"./Token-DDOzZdpj.js";import"./ScrollEnablement-DqE26vCK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-lLD0mBZ9.js";import"./ToggleButton-BwluPjoK.js";import"./SuggestionItem-CAvBP0b3.js";import"./index-pqVhDtQo.js";import"./Option-CueS9-6_.js";import"./index-Bm5_dFpv.js";import"./SegmentedButton-BDTfR_EV.js";import"./index-CVUkzR7r.js";import"./Select-D-a_LaKc.js";import"./InvisibleMessage-C5i35pcX.js";import"./slim-arrow-down-CzguZyVL.js";import"./useIsRTL-CjbK0HRk.js";import"./index-fzBRU-3G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Mxr7aXyx.js";import"./group-2-Ch_CtqUP.js";import"./sort-descending-wLco-Wqm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-keJto8.js";import"./utils-BMRbKUpN.js";import"./index-jkXxogzq.js";import"./index-BO-2Cayf.js";import"./index-CFigK24s.js";import"./navigation-down-arrow-B0A4GYRi.js";import"./navigation-right-arrow-DghbmXJJ.js";import"./navigation-right-arrow-CfUGm-OO.js";import"./useCurrentTheme-DTyBVBjr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cq7nPF5O.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DLPVgadY.js";import"./index-DxZ2QBIC.js";import"./less-B09o0oEH.js";import"./index-Bx1E4_BP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
