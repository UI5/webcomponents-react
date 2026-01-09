import{j as e}from"./iframe-Cofg3NYG.js";import{useMDXComponents as n}from"./index-IvWpiXeJ.js";import{I as r,F as s}from"./CommandsAndQueries-84NNvrTK.js";import{M as l,C as a}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import"./copy-CvrT2nje.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CkrLKY20.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DMD_db3q.js";import"./delete-TL4LRMCi.js";import"./settings-C1P4No8J.js";import"./NoData-CgchvHoE.js";import"./IllustratedMessage-CMCdUK9z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-a2MoTWEq.js";import"./index-BonMBjS3.js";import"./index--6KC0JCG.js";import"./slim-arrow-down-Df9CY41D.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./ListBoxItemGroupTemplate-CJbarH5R.js";import"./ComboBoxItemGroup-CgHhWkM2.js";import"./ListItemBaseTemplate-C6tlxy6i.js";import"./Token-D4V_lrT9.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMSXl_i-.js";import"./ToggleButton-DGX7LzLH.js";import"./SuggestionItem-BxKCWjfv.js";import"./index-ByINFavX.js";import"./Option-BcJSYqub.js";import"./index-97091ejm.js";import"./SegmentedButton-B2GitR0l.js";import"./index-B-yS9GRZ.js";import"./Select-Dl-KXknk.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./slim-arrow-down-B4mJ9D12.js";import"./index-DeuDVa4c.js";import"./index-CqFtG3xH.js";import"./index-B8BWpeh3.js";import"./index-eAFdqwk5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnPweenN.js";import"./group-2-ByJcrAU6.js";import"./sort-descending-CEF1xmWI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CW-WMzJS.js";import"./utils-wxGQZEOP.js";import"./index-ChbRKq5D.js";import"./index-nmwZf_ft.js";import"./index-NtXsw5yB.js";import"./navigation-down-arrow-z6IAtkEY.js";import"./navigation-right-arrow-jTHlmXwB.js";import"./navigation-right-arrow-E61PVxSn.js";import"./useCurrentTheme-Bn9zud42.js";import"./index-BdF0tCbe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBrJUf6F.js";import"./paper-plane-y9qmaI4M.js";import"./index-DmRfqt3l.js";import"./less-D1DlvNUe.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
