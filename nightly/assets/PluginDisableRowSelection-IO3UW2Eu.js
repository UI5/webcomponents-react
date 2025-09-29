import{j as e}from"./iframe-CfR5iN1B.js";import{useMDXComponents as n}from"./index-WDvIe_cH.js";import{I as r,F as s}from"./CommandsAndQueries-Cn01gt7T.js";import{M as l,C as a}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import"./copy-CaX7ddbO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dn_MoNch.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./index-DImzYd9b.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuLKvtHE.js";import"./delete-BbXKnRMD.js";import"./settings-BxehJt3x.js";import"./NoData-Ae1W9ndY.js";import"./IllustratedMessage-DErPlOIi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-jjf-0K_T.js";import"./index-EUemHXmT.js";import"./slim-arrow-down-BHM8V5zI.js";import"./Input-He0T25IE.js";import"./ResponsivePopoverCommon.css-BviY2BN2.js";import"./ValueStateMessage.css-CnczpN40.js";import"./Suggestions.css-CQmh9058.js";import"./ListBoxItemGroupTemplate-BCj8Kfs3.js";import"./ComboBoxItemGroup-DkcG6b3D.js";import"./ListItemBaseTemplate-Blzwt2Im.js";import"./Token-N60Enl17.js";import"./ScrollEnablement-BjfNoSEh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-T7lCWKjJ.js";import"./ToggleButton-Cs4gjIfQ.js";import"./SuggestionItem-CK0Sz5p3.js";import"./index-D4yvNCEL.js";import"./Option-BU02mXmi.js";import"./index-3qdtC1nN.js";import"./SegmentedButton-Pf9-Y7FP.js";import"./index-CDsq0Nt0.js";import"./Select-UYNHdaxp.js";import"./InvisibleMessage-DezLmlSH.js";import"./slim-arrow-down-C2iRJmdC.js";import"./index-DVRgjs5B.js";import"./index-D1nK-6X7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYAzIxHV.js";import"./group-2--stM7jmm.js";import"./sort-descending-BSd0dKpy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgyEmt0S.js";import"./utils-NjcLVKqO.js";import"./index-zfHAJ78h.js";import"./index-5qf6VRKh.js";import"./index-DTS5qD7C.js";import"./navigation-down-arrow-_LdOzUHF.js";import"./navigation-right-arrow-B91yu81w.js";import"./navigation-right-arrow-D40jgVaK.js";import"./useCurrentTheme-4u8xBb4K.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BMJqj1Ya.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dlms__fq.js";import"./paper-plane-CUQizYzd.js";import"./index-Dj3TXnfq.js";import"./less-DL9fv9Kz.js";import"./index-D8rErjIk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
