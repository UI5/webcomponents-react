import{j as e}from"./iframe-DLRMrfR_.js";import{useMDXComponents as n}from"./index-7UnH5ZCU.js";import{I as r,F as s}from"./CommandsAndQueries-D6NirpIC.js";import{M as l,C as a}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import"./copy-Loq6ZFpK.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DXpJF9zq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-BPd73hWD.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du6F5iDJ.js";import"./delete-BwPLte86.js";import"./settings-DTgx2sz4.js";import"./NoData-D0S9YqWQ.js";import"./IllustratedMessage-Kd9xQwRs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-sBTvjUoE.js";import"./index--m2P8UtU.js";import"./index-BotVherK.js";import"./slim-arrow-down-DNog2_xn.js";import"./Input-CcN4YVMF.js";import"./ResponsivePopoverCommon.css-h4F5UI1l.js";import"./ValueStateMessage.css-BSnO8zIp.js";import"./Suggestions.css-Cp_HsrZq.js";import"./ListBoxItemGroupTemplate-BJumqT4i.js";import"./ComboBoxItemGroup-CbKVr_4I.js";import"./ListItemBaseTemplate-Da4x_292.js";import"./Token-CW6mgtq8.js";import"./ScrollEnablement-Bz5iwlCG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Df0gJlCx.js";import"./ToggleButton-BOkY-G3n.js";import"./SuggestionItem-DaZJKeIe.js";import"./index-BErLdPcq.js";import"./Option-vNfFuRF2.js";import"./index-BBnywNed.js";import"./SegmentedButton-BaBICXYr.js";import"./index-BB-WV-go.js";import"./Select-CVNbNvaC.js";import"./InvisibleMessage-6vcGDyDm.js";import"./slim-arrow-down-B4rbpJOP.js";import"./index-FoBVlpGj.js";import"./index-CLJ5W-kZ.js";import"./index-DZE8mdic.js";import"./index-1oIhOKBZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrpZAc5e.js";import"./group-2-DOYg5UtM.js";import"./sort-descending-DC1HxPJi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BpRoThxi.js";import"./utils-CKmkWZ04.js";import"./index-OyOMojac.js";import"./index-6gZLQIzr.js";import"./index-WnnzYQ2a.js";import"./navigation-down-arrow-D-m4CbH4.js";import"./navigation-right-arrow-DHewavL_.js";import"./navigation-right-arrow-CTPwzPlI.js";import"./useCurrentTheme-BL04Ku5N.js";import"./index-Dmpy7ykn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-OpbkKVuD.js";import"./paper-plane-B2UAJbES.js";import"./index-DRoHFPpy.js";import"./less-K3WvuTue.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
