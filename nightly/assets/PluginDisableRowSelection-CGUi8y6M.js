import{j as e}from"./iframe-DW8uOQp0.js";import{useMDXComponents as n}from"./index-DjfSR8mu.js";import{I as r,F as s}from"./CommandsAndQueries-CfxeF-Et.js";import{M as l,C as a}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import"./copy-BPjUZJw9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cjfv9lZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ccy1h0ZZ.js";import"./delete-CAh52cIa.js";import"./settings-Bq4r6lp7.js";import"./NoData-Wb2Eh2l8.js";import"./IllustratedMessage-59yIC32s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BanPL-9P.js";import"./index-BM97U_Id.js";import"./index-95RptXAb.js";import"./slim-arrow-down-DUDQ1G7d.js";import"./Input-BtplTNuz.js";import"./ResponsivePopoverCommon.css-BwZTAXmn.js";import"./ValueStateMessage.css-2teNoYXT.js";import"./Suggestions.css-GVLxyP7E.js";import"./ListBoxItemGroupTemplate-xi9Dai9-.js";import"./ComboBoxItemGroup-CYvZfMur.js";import"./ListItemBaseTemplate-jJed8ANY.js";import"./Token-CXlJ8X_s.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BakyJ71F.js";import"./ToggleButton-Dmg-mtR4.js";import"./SuggestionItem-JYWpCC6O.js";import"./index-O4brpd7h.js";import"./Option-lTsEHPaz.js";import"./index-DM3wbu2J.js";import"./SegmentedButton-dnl0_LO7.js";import"./index-BW8wCqLg.js";import"./Select-B-GQjth7.js";import"./InvisibleMessage-BCjehSQX.js";import"./slim-arrow-down-Nj2WlNU_.js";import"./index-DA7mVkNb.js";import"./index-CUWHnjz1.js";import"./index-2WqQUSOe.js";import"./index-7R16Plue.js";import"./IconDesign-DXd8PPVF.js";import"./filter-xApDoQhv.js";import"./group-2-D9KCRiYo.js";import"./sort-descending-sPt6c51s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BS_N9hv6.js";import"./utils-DCPEwa5n.js";import"./index-CX98XYz1.js";import"./index-Ci1baq6U.js";import"./index-BKui1p5j.js";import"./navigation-down-arrow-kptVdaed.js";import"./navigation-right-arrow-CDK-kpp0.js";import"./navigation-right-arrow-BRtJ_VL9.js";import"./useCurrentTheme-CXTKA9u6.js";import"./index-D4VjyumX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--X6IcLkp.js";import"./paper-plane-a-F37SE4.js";import"./index-CSdQr0-4.js";import"./less-C3jyfe8r.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
