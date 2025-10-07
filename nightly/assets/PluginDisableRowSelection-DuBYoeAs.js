import{j as e}from"./iframe-DWPhu-XW.js";import{useMDXComponents as n}from"./index-CTKrG-Il.js";import{I as r,F as s}from"./CommandsAndQueries-CU5SVthr.js";import{M as l,C as a}from"./blocks-CEz7tllO.js";import"./Tag-Dba4-MU4.js";import"./index-Bdh_RTY9.js";import"./copy-DPKhld63.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DexyH83g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./index-BUa9lJQh.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYV0Oj8s.js";import"./delete-CzS-ZSFZ.js";import"./settings-DpHyPOwD.js";import"./NoData-Bp42RSLg.js";import"./IllustratedMessage-aBcENSKw.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b50AAtuz.js";import"./index-mxmVkI6u.js";import"./index-CApFPdYg.js";import"./slim-arrow-down-26auel0G.js";import"./Input-DtVBLl5-.js";import"./ResponsivePopoverCommon.css-BZjEG7BC.js";import"./ValueStateMessage.css-BE_F5FVP.js";import"./Suggestions.css-RB8NJCE4.js";import"./ListBoxItemGroupTemplate-8_yIlWF-.js";import"./ComboBoxItemGroup-CUl4YaKf.js";import"./ListItemBaseTemplate-DPKPnrYZ.js";import"./Token-eT67usC_.js";import"./ScrollEnablement-DEtsU5kO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DWrsBtMe.js";import"./ToggleButton-Cng5ptzF.js";import"./SuggestionItem-WNV3rxc_.js";import"./index-WkdE1BtC.js";import"./Option-TNrNAAqc.js";import"./index-DJmgSw2V.js";import"./SegmentedButton-Ce9IDtQc.js";import"./index-BD4QFnxI.js";import"./Select-ChhsY6q9.js";import"./InvisibleMessage-CFK-hdYz.js";import"./slim-arrow-down-CiD7J9GA.js";import"./index-Dby-IIR7.js";import"./index-CAL2eitQ.js";import"./index-Dyna8UIc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjrsfWur.js";import"./group-2-CdxZGZ4X.js";import"./sort-descending-z9fS02K2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-g8_M3OEL.js";import"./utils-D_sqNaHL.js";import"./index-CrC4ibqT.js";import"./index-CNj7YBXJ.js";import"./index-AKvgdamH.js";import"./navigation-down-arrow-aGekved_.js";import"./navigation-right-arrow-vDM-HvIf.js";import"./navigation-right-arrow-B6BrxANc.js";import"./useCurrentTheme-BEuzdf0x.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dlc1pnJH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DACTY-zP.js";import"./paper-plane-CaqllUEB.js";import"./index-B2DU1UW_.js";import"./less-DMoysLjA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
