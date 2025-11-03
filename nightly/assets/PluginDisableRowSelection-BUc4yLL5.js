import{j as e}from"./iframe-C6G8Gpme.js";import{useMDXComponents as n}from"./index-C4rJv3Nd.js";import{I as r,F as s}from"./CommandsAndQueries-CX4_ppDX.js";import{M as l,C as a}from"./blocks-C6ISP02G.js";import"./Tag-wYYkZAW5.js";import"./index-CLl--vXw.js";import"./copy-DG7SwgZt.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CFQTPpSi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./index-B7V2IaSq.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQrAE-yM.js";import"./delete-BePcinQ6.js";import"./settings-ZIGvnodt.js";import"./NoData-f-9aMUJ4.js";import"./IllustratedMessage-BnjPNDkK.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-R36zWZeY.js";import"./index-Bw2blU0C.js";import"./index-CC4rDnzA.js";import"./slim-arrow-down-DFQVjscf.js";import"./Input-B43vXzoo.js";import"./ResponsivePopoverCommon.css-BaW35ZlT.js";import"./ValueStateMessage.css-BPXwB0kU.js";import"./Suggestions.css-D8LM2L39.js";import"./ListBoxItemGroupTemplate-C7DYeyIb.js";import"./ComboBoxItemGroup-9TKINPGh.js";import"./ListItemBaseTemplate-py1Jss2-.js";import"./Token-BESOIpLC.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbgkjpUB.js";import"./ToggleButton-DIE2_eYU.js";import"./SuggestionItem-B37H0t8o.js";import"./index-hYGTc0Ki.js";import"./Option-Dpbc4fOS.js";import"./index-BHyn0uZc.js";import"./SegmentedButton-EzvQ1TiR.js";import"./index-Bw0lSxiT.js";import"./Select-CGLg-QOl.js";import"./InvisibleMessage-Co517J8T.js";import"./slim-arrow-down-BMl0PRZy.js";import"./index-BG83xDW8.js";import"./index-v-qZ03j1.js";import"./index-DT1QmIo9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bjv4k70o.js";import"./group-2-Cd_IntO7.js";import"./sort-descending-5ABVgqX7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BG8mzTO_.js";import"./utils-BR3sGIFW.js";import"./index-BzZR18Jl.js";import"./index-B44hRY22.js";import"./index-DbddQwCa.js";import"./navigation-down-arrow-ccA23Gon.js";import"./navigation-right-arrow-RKFZneuK.js";import"./navigation-right-arrow-UKoz8H0N.js";import"./useCurrentTheme-metPpI7t.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dw6v9mL5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cf5So1HI.js";import"./paper-plane-BSvLcMlt.js";import"./index-UbolVguk.js";import"./less-o5FG2Zi-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
