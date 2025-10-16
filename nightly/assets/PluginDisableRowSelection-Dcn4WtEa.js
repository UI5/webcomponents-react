import{j as e}from"./iframe-CXQAdbiu.js";import{useMDXComponents as n}from"./index-B53u5pzW.js";import{I as r,F as s}from"./CommandsAndQueries-aoDJK_rZ.js";import{M as l,C as a}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import"./copy-DcVZp789.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BRSknd15.js";import"./preload-helper-PPVm8Dsz.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1bs8kF-.js";import"./delete-DowHx4wk.js";import"./settings-CVVvFOe0.js";import"./NoData-q7wNzTiS.js";import"./IllustratedMessage-DKb8AtT2.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B1CzrmOX.js";import"./index-bP1_QBvP.js";import"./index-DY3B7_kM.js";import"./slim-arrow-down-hLmi3DGr.js";import"./Input-CYD0qtkC.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./Suggestions.css-BBvTA_r8.js";import"./ListBoxItemGroupTemplate-D-dkO2pM.js";import"./ComboBoxItemGroup-DHkKBduU.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Token-BIdC5wJi.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfwHGGPG.js";import"./ToggleButton-BmbPwfk7.js";import"./SuggestionItem-gfvdLHYr.js";import"./index-BuXBJAJ4.js";import"./Option-giAR4PyV.js";import"./index-V5sVuIkU.js";import"./SegmentedButton-BPwflYvL.js";import"./index-CTuyF3LD.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./index-Bl8oHxhy.js";import"./index-CBZrs3cq.js";import"./index-C7FokFlZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrdHcgRL.js";import"./group-2-C3eZD9xi.js";import"./sort-descending-bTZCRpky.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaHCE1NB.js";import"./utils-Ds3TVJbz.js";import"./index-DyB1YbCe.js";import"./index-DAvw1qwV.js";import"./index-D4Ka0onQ.js";import"./navigation-down-arrow-Ba-PmlVo.js";import"./navigation-right-arrow-COX7_ak2.js";import"./navigation-right-arrow-DRoaRB41.js";import"./useCurrentTheme-Drr0Li3b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoLqpInx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-FsmN4cF6.js";import"./paper-plane-BcVanBNt.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
