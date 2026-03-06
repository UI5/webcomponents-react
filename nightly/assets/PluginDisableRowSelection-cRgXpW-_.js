import{j as e}from"./iframe-BsLeblbZ.js";import{useMDXComponents as n}from"./index-SmDsT-ZV.js";import{I as r}from"./CommandsAndQueries-BIrmUykn.js";import{M as s,C as l}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import"./copy-D-f_NdBO.js";import{F as a}from"./Footer-Bbw4uFwB.js";import"./PageNotFound-DD-eOCZR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-0t2926fT.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CBQ0neVT.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./index-Xah-ddNA.js";import"./index-BxpRwQAU.js";import"./index-B-umVgsK.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./index-DOfJ-lzX.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QeeLFXcn.js";import"./delete-H1wy-dws.js";import"./settings-BRGEmTQw.js";import"./NoData-B8XN3MPs.js";import"./NoFilterResults-DI880b84.js";import"./index-CZvIeLL2.js";import"./IllustratedMessage-CH-k7_PO.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NHMxkGm6.js";import"./Input-DlcD5Uyx.js";import"./ResponsivePopoverCommon.css-BnR9PF5c.js";import"./ValueStateMessage.css-DaaMCoGD.js";import"./Suggestions.css-B26HkXef.js";import"./ListBoxItemGroupTemplate-sBYZNQZ5.js";import"./ComboBoxItemGroup-CuM1vEgu.js";import"./ListItemBaseTemplate-BujdvxYW.js";import"./Token-BR8sMvH4.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbebGmy4.js";import"./ToggleButton-Bl3lFzoi.js";import"./multiselect-all-BD4wic1E.js";import"./SuggestionItem-vuP3MGZZ.js";import"./index-BvwE5Rkd.js";import"./Option-DZ9JQFne.js";import"./index-CQYX8dtL.js";import"./SegmentedButton-BbLb6Y2D.js";import"./index-YCEkTVk1.js";import"./Select-ogMEAbmp.js";import"./InvisibleMessage-BLe6-QWs.js";import"./index-DGD-6Hrk.js";import"./index-BkVdLcoI.js";import"./index-DSLM2F3N.js";import"./index-dvi0XJ6b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Q5KFLZa5.js";import"./group-2-C_-z-OIk.js";import"./sort-descending-B6mPd9eW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B918Q3Uk.js";import"./utils-B5VYX2T8.js";import"./index-tW-oUBSO.js";import"./index-DyHDKnOu.js";import"./index-CRwwj1G-.js";import"./navigation-down-arrow-C2Qg1J8L.js";import"./navigation-right-arrow-Br3RPqB8.js";import"./navigation-right-arrow-CO2v9vy4.js";import"./useCurrentTheme-BggGoIM4.js";import"./index-D0RBnp-L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkunmVQ4.js";import"./paper-plane-iOffuwQ2.js";import"./index-CIjtFDg8.js";import"./less-e75wAmAF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
