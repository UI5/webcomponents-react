import{j as e}from"./iframe-CGHDmI6F.js";import{useMDXComponents as n}from"./index-vmg_VptB.js";import{I as r,F as s}from"./CommandsAndQueries-Xpj75dw6.js";import{M as l,C as a}from"./blocks-CLJ0TMRL.js";import"./Tag-CNB8wsWP.js";import"./index-weaEi3VY.js";import"./copy-_Dvyc5eh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dv24tS2Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQzAmjvO.js";import"./index-B2jKXsJA.js";import"./index-DmbY-g5r.js";import"./Link-Cf4Rypri.js";import"./index-W3wBcX-G.js";import"./index-C2rF-vpI.js";import"./index-BCCC4ZMt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxMyXeCI.js";import"./addCustomCSSWithScoping-C1fbuE3M.js";import"./index-DikhnyC-.js";import"./information-CjscpLC3.js";import"./sys-enter-2-B9ZMSpbA.js";import"./alert-B6YshAIH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xGyGn9Oj.js";import"./delete-Dte8JniV.js";import"./settings-D8Q7G5ao.js";import"./NoData-BSir_879.js";import"./IllustratedMessage-Pr1F3g0w.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CcfxTZmK.js";import"./index-Df1W4o4n.js";import"./index-BHD7XqPx.js";import"./slim-arrow-down-BrkIMPBm.js";import"./Input-BfaIKd-_.js";import"./ResponsivePopoverCommon.css-BTXHr8qi.js";import"./ValueStateMessage.css-CzGkVYOI.js";import"./Suggestions.css-BllQy4_n.js";import"./ListBoxItemGroupTemplate-BNcYJ2hU.js";import"./ComboBoxItemGroup-o3SCM_eV.js";import"./ListItemBaseTemplate-Cx78cHSs.js";import"./Token-B2k1mgDr.js";import"./ScrollEnablement-CQbg5YPQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D40-YKTd.js";import"./ToggleButton-qMwCKZPr.js";import"./SuggestionItem-Call-j_q.js";import"./index-CIW-3Zsf.js";import"./Option-DDv7G9Ot.js";import"./index-L2YJQjiE.js";import"./SegmentedButton-C1vafHDU.js";import"./index-Bd1QPIE9.js";import"./Select-BP0JcAa4.js";import"./InvisibleMessage-cdKeCSvx.js";import"./slim-arrow-down-nSXWTf4e.js";import"./index-BIR_c1OV.js";import"./index-DLXj2zZ8.js";import"./index-B6w0uZ_P.js";import"./index-B0mnhl2M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BncDb-2Q.js";import"./group-2-ByxSiuJy.js";import"./sort-descending-CSgmZ9wj.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9B1NfiCS.js";import"./utils-DDVw8Ej7.js";import"./index-DlDUm1Gd.js";import"./index-CPSAwVgn.js";import"./index-Cjbf81BQ.js";import"./navigation-down-arrow-Cr9SgrB6.js";import"./navigation-right-arrow-DqAdlQN5.js";import"./navigation-right-arrow-DyqmD8NH.js";import"./useCurrentTheme-KBmY2HTm.js";import"./index-D5-qOhI3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cp-zKd6f.js";import"./paper-plane-BHOdso4m.js";import"./index-Cf0oRXr4.js";import"./less-Ctp0LmgJ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
