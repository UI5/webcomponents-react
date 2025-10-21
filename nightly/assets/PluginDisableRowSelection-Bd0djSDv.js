import{j as e}from"./iframe-RbfDHgLf.js";import{useMDXComponents as n}from"./index-DqV7dpjg.js";import{I as r,F as s}from"./CommandsAndQueries-zsQY2vaX.js";import{M as l,C as a}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import"./copy-DMiueq1X.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-dNx3iOmq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeOX064v.js";import"./delete-DcwaPxBU.js";import"./settings-D6tudNLA.js";import"./NoData-Cl4Qbgty.js";import"./IllustratedMessage-DexV73H4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-C3FPWFSN.js";import"./index-Cof-wcXi.js";import"./index-DTmXjenP.js";import"./slim-arrow-down-C6-37eiK.js";import"./Input-C6IaGQuM.js";import"./ResponsivePopoverCommon.css-BazxGA3A.js";import"./ValueStateMessage.css-DlSYdh2h.js";import"./Suggestions.css-BiueOOBD.js";import"./ListBoxItemGroupTemplate-CTGhd4B4.js";import"./ComboBoxItemGroup-nRyFLP8z.js";import"./ListItemBaseTemplate-C5ft9Md7.js";import"./Token-CnNyhnHs.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LHwr1u0j.js";import"./ToggleButton-Ck80PIY6.js";import"./SuggestionItem-ydkFeLIs.js";import"./index-C97MBkt1.js";import"./Option-Br7hY4me.js";import"./index-H6IWsr_r.js";import"./SegmentedButton-CZ-yOp_Q.js";import"./index-CWlsW_rN.js";import"./Select-Bvdl5zc6.js";import"./InvisibleMessage-DajdZnZt.js";import"./slim-arrow-down-DNyYURKC.js";import"./index-BHXvhFiH.js";import"./index-DzCgTQEv.js";import"./index-Bf3cZXmJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C8wkfIGx.js";import"./group-2-DF-sgjHz.js";import"./sort-descending-CZjeMqQF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zFlUhoit.js";import"./utils-IhqywFcl.js";import"./index-CtCdIWLz.js";import"./index-C5SUxDyi.js";import"./index-nwkxsEd-.js";import"./navigation-down-arrow-BLAyWJF_.js";import"./navigation-right-arrow-DkJ4m7Up.js";import"./navigation-right-arrow-DkhAVYbD.js";import"./useCurrentTheme-Cl67aZzc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qW62GUHL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkQwBtqx.js";import"./paper-plane-B3UbNLhn.js";import"./index-B5lPdsla.js";import"./less-lHgyge0z.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
