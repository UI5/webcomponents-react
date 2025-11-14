import{j as e}from"./iframe-C7IxwDmR.js";import{useMDXComponents as n}from"./index-CbSg1oVF.js";import{I as r,F as s}from"./CommandsAndQueries-D3KUBOYC.js";import{M as l,C as a}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import"./copy-D-VhlFxG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bd0C7vts.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChqHr5wK.js";import"./delete-BSl3wy38.js";import"./settings-DGhtyKkS.js";import"./NoData-ZmM9tZ25.js";import"./IllustratedMessage-D-WEWynv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1-g84_aS.js";import"./index-CscJ0cw_.js";import"./index-CwLFHpug.js";import"./slim-arrow-down-BNmOcvZN.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./ListBoxItemGroupTemplate-ic-gllq_.js";import"./ComboBoxItemGroup-BgqJcjSC.js";import"./ListItemBaseTemplate-CcnlE6Sk.js";import"./Token-_905z17c.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQaqKR0d.js";import"./ToggleButton-BufLqCEs.js";import"./SuggestionItem-CtttL5Nk.js";import"./index-7SdjD4wD.js";import"./Option-BM1N9G0j.js";import"./index-nWfCkMQS.js";import"./SegmentedButton-A3oHgqen.js";import"./index-DI3HfrFm.js";import"./Select-D4uOkSLO.js";import"./InvisibleMessage-3o-oW7oq.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./index-Bc14vZWb.js";import"./index-DOS93QAh.js";import"./index-CR6Z_Rhf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AZHZA8cU.js";import"./group-2-ZZFScIlf.js";import"./sort-descending-TOMxzf0j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CJRUeV6T.js";import"./utils-YyqGWE78.js";import"./index-DYQpLwRl.js";import"./index-RXV3LSnp.js";import"./index-CQqHvQDP.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./navigation-right-arrow-D52cg3R3.js";import"./navigation-right-arrow-WwNAbjqy.js";import"./useCurrentTheme-3HGEU4AP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4AmYoSs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDhHKcDh.js";import"./paper-plane-zbAKlJWW.js";import"./index-CSaUThvG.js";import"./less-GzasUkSp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
