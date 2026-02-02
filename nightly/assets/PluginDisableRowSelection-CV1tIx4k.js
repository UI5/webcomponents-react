import{j as e}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as n}from"./index-CBIpMKi2.js";import{I as r,F as s}from"./CommandsAndQueries-DF8E8wiu.js";import{M as l,C as a}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import"./copy-Bby_UTo9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-INQp-hT_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2ITYkkp.js";import"./delete-DQtRiTSG.js";import"./settings-Dk0A1K4B.js";import"./NoData-BOAn2TmF.js";import"./IllustratedMessage-BAzjlPuO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DADu6Yhz.js";import"./index-CAs4bF1N.js";import"./index-rA2Tcjvx.js";import"./slim-arrow-down-Bf6Fui7_.js";import"./Input-xGZQJYeP.js";import"./ResponsivePopoverCommon.css-Cw4xn9Xp.js";import"./ValueStateMessage.css-DE-funzq.js";import"./Suggestions.css-C80GUOWK.js";import"./ListBoxItemGroupTemplate-CQWOTPZ7.js";import"./ComboBoxItemGroup-BLdB-iSO.js";import"./ListItemBaseTemplate--vPa8nag.js";import"./Token-CwYpSxuy.js";import"./ScrollEnablement-v-_rsCFF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CTpk5hQL.js";import"./ToggleButton-B-VaW9fv.js";import"./SuggestionItem-C0Y5SJOc.js";import"./index-C5Q4zcFL.js";import"./Option-CSv6aS-H.js";import"./index-mZlz45Id.js";import"./SegmentedButton-pcsF7Uy5.js";import"./index-Drcf0CjP.js";import"./Select-ChvSMp55.js";import"./InvisibleMessage-BiO2cmNz.js";import"./slim-arrow-down-DDixet6I.js";import"./index-fR1ydeI4.js";import"./index-t4ibtP2x.js";import"./index-Frn2CwUI.js";import"./index-C00ZbNBs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMHUA17f.js";import"./group-2-DKFJVXPV.js";import"./sort-descending-BZ_eceG8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CONmEwPQ.js";import"./utils-ClsJZxE7.js";import"./index-CKCMkb7R.js";import"./index-DF3mQroB.js";import"./index-rBbRsWS-.js";import"./navigation-down-arrow-rnyvA5q9.js";import"./navigation-right-arrow-Cg2lGj65.js";import"./navigation-right-arrow-DfDNI7Vj.js";import"./useCurrentTheme-Dq6DmLkr.js";import"./index-D6CCWCEn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-mQ6_8rLF.js";import"./paper-plane-Dda63Mdm.js";import"./index-DYNvOxul.js";import"./less-mQVhCLsg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
