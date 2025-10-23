import{j as e}from"./iframe-Caxtdkba.js";import{useMDXComponents as n}from"./index-DHHkTN_-.js";import{I as r,F as s}from"./CommandsAndQueries-BOspo6oR.js";import{M as l,C as a}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import"./copy-Cm-UF3e8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C2Zc33aG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJfJ5RYR.js";import"./delete-DOCQmW93.js";import"./settings-DpGsKXDA.js";import"./NoData-d0MQisZ4.js";import"./IllustratedMessage-BBsMwhuB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DUeNSHji.js";import"./index-JXLLmO3L.js";import"./index-BYb3crn-.js";import"./slim-arrow-down-BkDq8Vwz.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./ListBoxItemGroupTemplate-BW85OpbI.js";import"./ComboBoxItemGroup-BQ3_Q8de.js";import"./ListItemBaseTemplate-BQxOqWbZ.js";import"./Token-5HJMpSXf.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqNCSywV.js";import"./ToggleButton-C6WMbDLb.js";import"./SuggestionItem-DUIHP02k.js";import"./index-CHZgJlEv.js";import"./Option-C3rQLOa9.js";import"./index-feJ7vEoL.js";import"./SegmentedButton-vU2qNGQ4.js";import"./index-P9r5CdKp.js";import"./Select-mLNSxhym.js";import"./InvisibleMessage-cd3uS02O.js";import"./slim-arrow-down-C8iSa2f2.js";import"./index-NXjyPYYS.js";import"./index-Duo5A0v-.js";import"./index-DulQB3X1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B7qF2DKQ.js";import"./group-2-Bj0PGwVo.js";import"./sort-descending-Cot-3-zz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeI_-Pkx.js";import"./utils-D5L0CqRc.js";import"./index-CAxK_BaB.js";import"./index-BDr19BLg.js";import"./index-BcL5_vtY.js";import"./navigation-down-arrow-rxWIaO6B.js";import"./navigation-right-arrow-BFr-7gTd.js";import"./navigation-right-arrow-bvuYFyRE.js";import"./useCurrentTheme-CfsQm3Rx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfKve24a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./paper-plane-F06gAmny.js";import"./index-BcF_Hj2S.js";import"./less-BdZt1fch.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
