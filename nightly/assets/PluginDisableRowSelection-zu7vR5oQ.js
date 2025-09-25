import{j as e}from"./iframe-DncksSc9.js";import{useMDXComponents as n}from"./index-DHwy2cP9.js";import{I as r,F as s}from"./CommandsAndQueries-CDnFth_H.js";import{M as l,C as a}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import"./copy-DLEpwWX6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-onwCzFR9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./index-Bbgh-_Am.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CtelhZjf.js";import"./delete-C8B1Co0i.js";import"./settings-B4D9jFyf.js";import"./NoData-0pXCNlwj.js";import"./IllustratedMessage-Biu-Y2PO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DLX-UAid.js";import"./index-Cl9Lgdz7.js";import"./slim-arrow-down-Dw4qZkUc.js";import"./Input-HjE4MzLi.js";import"./ResponsivePopoverCommon.css-D7l99RH0.js";import"./ValueStateMessage.css-CDVm0-OH.js";import"./Suggestions.css-Di4bJ4Mv.js";import"./ListBoxItemGroupTemplate-BwHMeEo2.js";import"./ComboBoxItemGroup-CoTRrzsz.js";import"./ListItemBaseTemplate-DgydtAbW.js";import"./Token-Cmmtifzz.js";import"./ScrollEnablement-P--ZLWUn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-OppmVys6.js";import"./ToggleButton-DKYgle8i.js";import"./SuggestionItem-DgjKJ3SY.js";import"./index-DeJkkzWj.js";import"./Option-DDPjWDk1.js";import"./index-JrTo95Fm.js";import"./SegmentedButton-CLC_XxdM.js";import"./index-B_8t13HI.js";import"./Select-D1ki5xZv.js";import"./InvisibleMessage-B0PSwWLP.js";import"./slim-arrow-down-BB45oQEO.js";import"./index-83abA5iC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaZDbBT4.js";import"./group-2-B5P3PhAn.js";import"./sort-descending-VXAY9Zz-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B70SChhh.js";import"./utils-Qp_0Ohai.js";import"./index-CKQ5y9RK.js";import"./index-DcM8rOK1.js";import"./index-Bn_XXlzK.js";import"./navigation-down-arrow-DE2B6sGV.js";import"./navigation-right-arrow-zAMyMa8Q.js";import"./navigation-right-arrow-CzaD2I1v.js";import"./useCurrentTheme-DwePz3I6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-zrcSGE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SpXXo_HP.js";import"./paper-plane-CXqmWy3W.js";import"./index-CIKjtRh_.js";import"./less-CeDgCnwC.js";import"./index-CqDygOHO.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
