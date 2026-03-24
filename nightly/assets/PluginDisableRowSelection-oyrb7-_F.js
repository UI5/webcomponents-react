import{j as e}from"./iframe-D9xLC1tL.js";import{useMDXComponents as n}from"./index-DbpRZxa8.js";import{I as r}from"./CommandsAndQueries-Bb-ZfGVO.js";import{M as s,C as l}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import"./copy-D8VIdABk.js";import{F as a}from"./Footer-C6v4bY5-.js";import"./PageNotFound-DoCPcVkS.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CcH9eEq-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nPbeq8Ca.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./index-DNd0s4Kc.js";import"./index-DAKihXgB.js";import"./index-BDQMqb7U.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./index-Dursa8QF.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlhRgZm.js";import"./delete-z9tfxYsM.js";import"./settings-u6G-xS72.js";import"./NoData-iFn0kwSC.js";import"./NoFilterResults-C-Tq5PPM.js";import"./index-DCBWbYTm.js";import"./IllustratedMessage-Duwn4FcJ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BttjqPRx.js";import"./Input-DxzMz-_-.js";import"./ResponsivePopoverCommon.css-PL-SXD-8.js";import"./ValueStateMessage.css-DPUcso-C.js";import"./Suggestions.css-Cy8FStCL.js";import"./ListBoxItemGroupTemplate-DNpwMoIM.js";import"./ComboBoxItemGroup-TUxg8lm8.js";import"./ListItemBaseTemplate-DByAGMN-.js";import"./Token-BdgPQmcu.js";import"./ScrollEnablement-CzOU9q0b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DeipcKCC.js";import"./ToggleButton-CvMZWFKF.js";import"./multiselect-all-CE46sock.js";import"./SuggestionItem-DNt3kuCB.js";import"./index-DPec4j3o.js";import"./Option-be2q_1d1.js";import"./index-B7vuJ-iL.js";import"./SegmentedButton-CTkUtfOS.js";import"./index-CEBN14-L.js";import"./Select-C_MyYDPb.js";import"./InvisibleMessage-uL2Nn7st.js";import"./index-DvoCoNJi.js";import"./index-BbcqIyzm.js";import"./index-CSp88prM.js";import"./index-C5uwD5iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bKIjhF8F.js";import"./group-2-EWjgYNtS.js";import"./sort-descending-C_0FMKzH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpIPK8sg.js";import"./utils-DOCuh_Xw.js";import"./index-BFZOBrHJ.js";import"./index-CN1sWRh8.js";import"./index-CzQc_Cim.js";import"./navigation-down-arrow-C-xgZR_F.js";import"./navigation-right-arrow-ChyfPkbT.js";import"./navigation-right-arrow-DBwa9qHY.js";import"./useCurrentTheme-BGs9iYKG.js";import"./index-BnsjrB_W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl0qmS-.js";import"./paper-plane-PLOUunSl.js";import"./index-D1mCxT3B.js";import"./less-S94TrLny.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
