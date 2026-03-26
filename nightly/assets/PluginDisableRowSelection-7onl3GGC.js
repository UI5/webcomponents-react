import{j as e}from"./iframe-EDZrvS0_.js";import{useMDXComponents as n}from"./index-D_Zuzn6o.js";import{I as r}from"./CommandsAndQueries-DeBGirNK.js";import{M as s,C as l}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import"./copy-Duyva9GD.js";import{F as a}from"./Footer-BqU25DvW.js";import"./PageNotFound-BnvHWpv6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dx5TKmet.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B5fvjtF5.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./index-CZdLboFr.js";import"./index-cZywnC0F.js";import"./index-DezAYIwY.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-D6CBwRDo.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-utPuCR04.js";import"./delete-DR6LH38W.js";import"./settings-CN-5jPNW.js";import"./NoData-Unsc7yGW.js";import"./NoFilterResults-D4Tfubhx.js";import"./index-Bd_ty2tr.js";import"./IllustratedMessage-CLWlkvw9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BsNqwfYk.js";import"./Input-zEsdeYDW.js";import"./ResponsivePopoverCommon.css-DBFPees2.js";import"./ValueStateMessage.css-DuJxwYcD.js";import"./Suggestions.css-DnDRJwob.js";import"./ListBoxItemGroupTemplate-BZbITfG7.js";import"./ComboBoxItemGroup-DieEz9f8.js";import"./ListItemBaseTemplate-Bof6NJS5.js";import"./Token-Sn-IGO0n.js";import"./ScrollEnablement-K7_frRGH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnWB-RIw.js";import"./ToggleButton-CVlcvDQY.js";import"./multiselect-all-evCQ6L4Y.js";import"./SuggestionItem-RdjvKtEt.js";import"./index-2B_xiOGC.js";import"./Option-HV-kXJJc.js";import"./index-BbWj_bg9.js";import"./SegmentedButton-z2Z5RFk1.js";import"./index-CA1Jh7mM.js";import"./Select-DfMov8Eu.js";import"./InvisibleMessage-Bzs3a3mB.js";import"./index-C6dZwhpH.js";import"./index-Bp2r4Kh2.js";import"./index-DEf8EDQ-.js";import"./index-jH6Hh22w.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3l8IQP2.js";import"./group-2-u8UewRr6.js";import"./sort-descending-3j3Q1XNY.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUNI2Fe2.js";import"./utils-_j2VpmWA.js";import"./index-BUog9t61.js";import"./index-BEQsTep_.js";import"./index-Bvx781mh.js";import"./navigation-down-arrow-DFC2-NJZ.js";import"./navigation-right-arrow-CG4JKzco.js";import"./navigation-right-arrow-CUEAwi3f.js";import"./useCurrentTheme-BCAEg60Z.js";import"./index-BQba1xDF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXcDMPx8.js";import"./paper-plane-B0VM4cXi.js";import"./index-BO_w0Yy3.js";import"./less-DjhcNxVm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
