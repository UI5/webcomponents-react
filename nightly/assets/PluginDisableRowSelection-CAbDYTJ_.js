import{j as e}from"./iframe-CWbL8jxG.js";import{useMDXComponents as n}from"./index-B1hucxFe.js";import{I as r,F as s}from"./CommandsAndQueries-DC5-wnNc.js";import{M as l,C as a}from"./blocks-DWgVki-D.js";import"./Tag-BqrM3bJU.js";import"./index-Ln4MrNxF.js";import"./copy-DC7dXRiF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BChSusTc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./index-DX9sPfcP.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BltmIOdS.js";import"./delete-1HyL_4Wk.js";import"./settings-JMrRPAnE.js";import"./NoData-CJxxc7CR.js";import"./IllustratedMessage-D8gWuNpm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-57Ksm_r5.js";import"./index-DZTHkwTR.js";import"./index-DS3apI4i.js";import"./slim-arrow-down-BMbGkBGP.js";import"./Input-Ca-gNTp_.js";import"./ResponsivePopoverCommon.css-BbHsPd6N.js";import"./ValueStateMessage.css-CzUlmLb3.js";import"./Suggestions.css-Ba_dx_L-.js";import"./ListBoxItemGroupTemplate-Lawh3eGL.js";import"./ComboBoxItemGroup-BeC8_XKS.js";import"./ListItemBaseTemplate-bdxNsDyn.js";import"./Token-GRKHuzuD.js";import"./ScrollEnablement-q8IAhmkU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DjxNPHqP.js";import"./ToggleButton-aEr0I1kH.js";import"./SuggestionItem-BfEsa41d.js";import"./index-Df-CHSkY.js";import"./Option-CH8gpRhi.js";import"./index-Cys1hxfX.js";import"./SegmentedButton-De9lTVKW.js";import"./index-zNKdvYCA.js";import"./Select-C9jPwNxl.js";import"./InvisibleMessage-5emN_lGe.js";import"./slim-arrow-down-BO45akNa.js";import"./index-B5w8aw2j.js";import"./index-CR6_4xj1.js";import"./index-BgtkjQtp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BD_8tTtH.js";import"./group-2-v2JGlzXZ.js";import"./sort-descending-dLMPKXS7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AQfbGd8K.js";import"./utils-BxGUFKrM.js";import"./index-uL29v2Ta.js";import"./index-BqP4EQLr.js";import"./index-gLLwXRq2.js";import"./navigation-down-arrow-ozVSHRNs.js";import"./navigation-right-arrow-DtnRZ1GH.js";import"./navigation-right-arrow-DzlvXQo4.js";import"./useCurrentTheme-CWwMlTtm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BQnesWWg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nDtVDEC_.js";import"./paper-plane-C0WWo1sA.js";import"./index-BJvkaa91.js";import"./less-C5liRph3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
