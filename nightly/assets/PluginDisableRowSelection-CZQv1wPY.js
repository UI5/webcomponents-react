import{j as e}from"./iframe-DKMkKoYy.js";import{useMDXComponents as n}from"./index-DwgZfgb7.js";import{I as r,F as s}from"./CommandsAndQueries-BeeR2K5X.js";import{M as l,C as a}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import"./copy-CVTfErei.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DTS4v1Wt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dhra6kfr.js";import"./delete-DUix6sNt.js";import"./settings-C5OEoL5X.js";import"./NoData-Cri307Dq.js";import"./IllustratedMessage-pa4ChjKu.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BkjD5jXB.js";import"./index-CGWtwsBT.js";import"./index-BHNOKsS3.js";import"./slim-arrow-down-DFO10dQK.js";import"./Input-Bywnd_wZ.js";import"./ResponsivePopoverCommon.css-Zw-71pun.js";import"./ValueStateMessage.css-BFEz-K6y.js";import"./Suggestions.css-BCRtc5sQ.js";import"./ListBoxItemGroupTemplate-ByysvU84.js";import"./ComboBoxItemGroup-rRFO05Df.js";import"./ListItemBaseTemplate-BwdOKIzC.js";import"./Token-DUFe1ufu.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIizhTTb.js";import"./ToggleButton-CpmK1M0o.js";import"./SuggestionItem-Djy8vKSb.js";import"./index-DFZofdAc.js";import"./Option-Dn0hRlAU.js";import"./index-C-serayw.js";import"./SegmentedButton-DcdMXKYR.js";import"./index-CUSU-sZ-.js";import"./Select-DcPG7akN.js";import"./InvisibleMessage-C330TfFr.js";import"./slim-arrow-down-CvM-d2Kg.js";import"./index-CpZAh2cz.js";import"./index-CflFfJ9L.js";import"./index-C4umghHT.js";import"./index-Cuh8Cott.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYz7ywwo.js";import"./group-2-HkaDgQ8q.js";import"./sort-descending-BkrTSQR1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-iPtp8h.js";import"./utils-LZ65B1HV.js";import"./index-arX-DEe4.js";import"./index-BEbANkX4.js";import"./index-J40sace8.js";import"./navigation-down-arrow-Dw2JTRKK.js";import"./navigation-right-arrow-DcK3gcB5.js";import"./navigation-right-arrow-Da_vKVqp.js";import"./useCurrentTheme-BoX5heyU.js";import"./index-BI1bMXh-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CE4g7ZKT.js";import"./paper-plane-DZlRHob0.js";import"./index-ae933fWZ.js";import"./less-DpSPHuZK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
