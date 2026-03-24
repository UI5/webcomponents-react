import{j as e}from"./iframe-D3LJsbiF.js";import{useMDXComponents as n}from"./index-CyzPa2YT.js";import{I as r}from"./CommandsAndQueries-ZyWBFV72.js";import{M as s,C as l}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import"./copy-CVdXx4M8.js";import{F as a}from"./Footer-BXlDlrd5.js";import"./PageNotFound-BgagSqcc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-cQu6qAck.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcTIU4K2.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./index-GY8piuJS.js";import"./index-Do3YGvBX.js";import"./index-CukaHHo2.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./index-Bs-GzB5h.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAB0X6cx.js";import"./delete-Cpf3YRTH.js";import"./settings-lg9V2mku.js";import"./NoData-DvxUgMOg.js";import"./NoFilterResults-CC3r0rI0.js";import"./index-C8hyEamZ.js";import"./IllustratedMessage-DksfyZ_X.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C8XemuHR.js";import"./Input-B1OANMVL.js";import"./ResponsivePopoverCommon.css-Qeab4xYL.js";import"./ValueStateMessage.css-D70pJEyG.js";import"./Suggestions.css-Cmes9Jc-.js";import"./ListBoxItemGroupTemplate-DVrCYXQC.js";import"./ComboBoxItemGroup-zlmutFOl.js";import"./ListItemBaseTemplate-CcljlKh6.js";import"./Token-CaO8U0-1.js";import"./ScrollEnablement-B33zvDKT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2Jwg-e3.js";import"./ToggleButton-D0CBxY4k.js";import"./multiselect-all-C06PVQU1.js";import"./SuggestionItem-DE4exilg.js";import"./index-_QaCRpys.js";import"./Option-Cvor7pOw.js";import"./index-Dxm8KCWK.js";import"./SegmentedButton-DC_KjHbJ.js";import"./index-ljAkd_sM.js";import"./Select-B5-sFuNB.js";import"./InvisibleMessage-DC6HuNZv.js";import"./index-YzRzwEXC.js";import"./index-dHcELO_g.js";import"./index-BEv2rjMA.js";import"./index-Z6SBhAE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTFabBVw.js";import"./group-2-ByNcReFF.js";import"./sort-descending-CLKt-Lxc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BB12PM0T.js";import"./utils-CJzxWqZp.js";import"./index-tyc9vWGE.js";import"./index-GLEKcSdk.js";import"./index-Btil1byA.js";import"./navigation-down-arrow-DArhHMwd.js";import"./navigation-right-arrow-OIapqFf7.js";import"./navigation-right-arrow-DyYqnXMq.js";import"./useCurrentTheme-C5F3jg4u.js";import"./index-DwfXPZsw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjwt-38Z.js";import"./paper-plane-Ce8u-ijT.js";import"./index-C_UElvqa.js";import"./less-CDY1RD56.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
