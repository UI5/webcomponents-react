import{j as e}from"./iframe-BcULqSVx.js";import{useMDXComponents as n}from"./index-DimjqcOY.js";import{I as r,F as s}from"./CommandsAndQueries-Bjxahy8c.js";import{M as l,C as a}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import"./copy-DrZjSCYt.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CwfhnBHr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./index-D0A2Ruup.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjsLDXTt.js";import"./delete-D4gojdJ3.js";import"./settings-DQ2ylyfP.js";import"./NoData-BqgAG3sz.js";import"./IllustratedMessage-9FLylkPF.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BL1qCewm.js";import"./index-i0HUbk-Q.js";import"./index-BeV7o16d.js";import"./slim-arrow-down-hE2EqBiC.js";import"./Input-DbwFVhoi.js";import"./ResponsivePopoverCommon.css-Cwh624CK.js";import"./ValueStateMessage.css-d2Jp-8qc.js";import"./Suggestions.css-DvUhQ2oV.js";import"./ListBoxItemGroupTemplate-CPRrFJXE.js";import"./ComboBoxItemGroup-wocKQbDo.js";import"./ListItemBaseTemplate-C9iGViqU.js";import"./Token-BmuMUgzL.js";import"./ScrollEnablement-Bz7jmoT9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtQP2CZp.js";import"./ToggleButton-l4zYl7a2.js";import"./SuggestionItem-BvM1s-Ep.js";import"./index-BKB4sp5j.js";import"./Option-CnCNxHHl.js";import"./index-6IYiZanH.js";import"./SegmentedButton-CsKBwiEG.js";import"./index-DiH1WLgS.js";import"./Select-Kk-2dMK4.js";import"./InvisibleMessage-DxnWWDzY.js";import"./slim-arrow-down-2dLbZhMa.js";import"./index-DN80B9hU.js";import"./index-ClrkJCXk.js";import"./index-D0znPBId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6gmJJpm.js";import"./group-2-kiGo_aBB.js";import"./sort-descending-DO-3UGP3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CyfGHOa1.js";import"./utils-B0S858C0.js";import"./index-ANJkbmQy.js";import"./index-Dp7rxzF-.js";import"./index-DbHuW_um.js";import"./navigation-down-arrow-0PRVlgRF.js";import"./navigation-right-arrow-OtK-3m38.js";import"./navigation-right-arrow-BxINGnO8.js";import"./useCurrentTheme-C4hYD1x7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BzQU3Sud.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B93fOd8S.js";import"./paper-plane-rcdV2FrJ.js";import"./index-RdWEGO-1.js";import"./less-DFYHTHFm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
