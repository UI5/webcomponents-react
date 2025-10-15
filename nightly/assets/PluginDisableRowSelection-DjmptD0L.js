import{j as e}from"./iframe-Dpln3x91.js";import{useMDXComponents as n}from"./index-BwM4zX9M.js";import{I as r,F as s}from"./CommandsAndQueries-D8ZM_J5V.js";import{M as l,C as a}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import"./copy-BmZL0gFG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDrhhElJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dWrrqn7O.js";import"./delete-DKtOEY5u.js";import"./settings-DUogldWd.js";import"./NoData-B7KP2bRY.js";import"./IllustratedMessage-cTE9BIDm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CQHrGMje.js";import"./index-0uDK0Vdr.js";import"./index-wbSF3N_Y.js";import"./slim-arrow-down-BxpwhQs1.js";import"./Input-B7euzJoo.js";import"./ResponsivePopoverCommon.css--1dLLGms.js";import"./ValueStateMessage.css-DTWUtWcx.js";import"./Suggestions.css-InLHnYp-.js";import"./ListBoxItemGroupTemplate-DbOWOTtN.js";import"./ComboBoxItemGroup-DTREEyXz.js";import"./ListItemBaseTemplate-DfSRrZFo.js";import"./Token-DR7cqsJm.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHCpwb9_.js";import"./ToggleButton-Dyi4d8KV.js";import"./SuggestionItem-C9K1LEXa.js";import"./index-D4J4Dqol.js";import"./Option-CiInW1SY.js";import"./index-CKt8E8QC.js";import"./SegmentedButton-FfaROJ8w.js";import"./index-BIF6S8BW.js";import"./Select-D4hMiJvv.js";import"./InvisibleMessage-kDq0cqsN.js";import"./slim-arrow-down-DotGOMkD.js";import"./index-DNSCkbXG.js";import"./index-ORaq6zeN.js";import"./index-DZSYYhge.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYVdaO0E.js";import"./group-2-CKHkgp4p.js";import"./sort-descending-NRuJXw_U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEvmHykI.js";import"./utils-DqbrCZoJ.js";import"./index-CzSiOjHq.js";import"./index-CIHgB-fO.js";import"./index-vGs8Gvmn.js";import"./navigation-down-arrow-B-KwWelX.js";import"./navigation-right-arrow-BN6oWB-c.js";import"./navigation-right-arrow-auStrBJj.js";import"./useCurrentTheme-D2C-2146.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eBQ2Ght0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7wro6Bb.js";import"./paper-plane-BxXqHCwQ.js";import"./index-Bxt6ZcXW.js";import"./less-DKNEmMSk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
