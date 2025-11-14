import{j as e}from"./iframe-4qrVzB25.js";import{useMDXComponents as n}from"./index-C23NGFAV.js";import{I as r,F as s}from"./CommandsAndQueries-C8f_O47Z.js";import{M as l,C as a}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import"./copy-BwZFHKgv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BGtl3UB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dpm6wpGO.js";import"./delete-DFB2rKcT.js";import"./settings-P1Tu1UA2.js";import"./NoData-CAyhgKIF.js";import"./IllustratedMessage-MSluXbw5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C7v7m6d5.js";import"./index-D7O6U1BC.js";import"./index-D-c-emv0.js";import"./slim-arrow-down-CXefVYMG.js";import"./Input-DCZqkJuY.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./Suggestions.css-DkwtHK1N.js";import"./ListBoxItemGroupTemplate-Dx7ZVMwg.js";import"./ComboBoxItemGroup-CTcw46H9.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Token-CIWwMwgE.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ToggleButton-CVx_cCdy.js";import"./SuggestionItem-CjsbBv9j.js";import"./index-8zB2ZRqP.js";import"./Option-C10NqIPh.js";import"./index-CueD1sBZ.js";import"./SegmentedButton-D30KObWP.js";import"./index-3QlNC4k-.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./index-DkDmb4j6.js";import"./index-q8cedDhq.js";import"./index-CC5rZlHP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dr0RP3gS.js";import"./group-2-CpBQCdfq.js";import"./sort-descending-BuPBBBgN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BxTTaJg9.js";import"./utils-B9_JuoKt.js";import"./index-uGUHJIW2.js";import"./index-DPoSKLzi.js";import"./index-DuUIqk7w.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./useCurrentTheme-7TOMGYM8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DDFYNMIL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0uHFjA1.js";import"./paper-plane-ylHW1ldh.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
