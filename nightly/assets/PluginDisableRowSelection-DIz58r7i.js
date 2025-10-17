import{j as e}from"./iframe-CYi73OmP.js";import{useMDXComponents as n}from"./index-Dt90fsaF.js";import{I as r,F as s}from"./CommandsAndQueries-BrIX07He.js";import{M as l,C as a}from"./blocks-vDcvm_c-.js";import"./Tag-CriFgWmH.js";import"./index-BBMPc3L0.js";import"./copy-LPsKpGQA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CnnPd9hw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HYZOU_1D.js";import"./index-CZYlbhmv.js";import"./index-C4wC4Ofz.js";import"./Link-CjT6BL8J.js";import"./index-BbTynw39.js";import"./index-KAzf1qB6.js";import"./index-BaDKwi6p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWMkLVHm.js";import"./addCustomCSSWithScoping-COZN1IbI.js";import"./index-BTCXnKhc.js";import"./information-C2FlC8X_.js";import"./sys-enter-2-DuV3U0aL.js";import"./alert-CP7qxv0u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxYW60hZ.js";import"./delete-xFbi_-wC.js";import"./settings-0opYo2Jr.js";import"./NoData-sI1XyAen.js";import"./IllustratedMessage-CHhSpY83.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-4sLj_wxI.js";import"./index-E4itPGQP.js";import"./index-C10zcdB8.js";import"./slim-arrow-down-D0SdHrd1.js";import"./Input-CkTLFzaW.js";import"./ResponsivePopoverCommon.css-B7aCnJ_6.js";import"./ValueStateMessage.css-Kd5nnHFH.js";import"./Suggestions.css-eFUrfSNb.js";import"./ListBoxItemGroupTemplate-BSgwyZvo.js";import"./ComboBoxItemGroup-DSrVKCES.js";import"./ListItemBaseTemplate-iYm3fW7D.js";import"./Token-fT8TuGWc.js";import"./ScrollEnablement-CMSiyGPr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DvFHooIN.js";import"./ToggleButton-M9DFkWHO.js";import"./SuggestionItem-XxFpxKzR.js";import"./index-CJYGPrkA.js";import"./Option-RzwHVxqI.js";import"./index-C4WCFPR-.js";import"./SegmentedButton-BUOZ4yCF.js";import"./index-DHGFCFdp.js";import"./Select-DjRpqOSl.js";import"./InvisibleMessage-k37olEit.js";import"./slim-arrow-down-B-WSvZWG.js";import"./index-D0BFqai2.js";import"./index-BquyjLBw.js";import"./index-DzRfQBko.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6hcRg8y.js";import"./group-2-9hVkaIla.js";import"./sort-descending-BOaZ_83J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bbj4khLj.js";import"./utils-DFJ-XhsT.js";import"./index-CmHQyBLd.js";import"./index-DwCYZdGU.js";import"./index-CYe6Ma7u.js";import"./navigation-down-arrow-D9GAp0iJ.js";import"./navigation-right-arrow-BXBiRuUx.js";import"./navigation-right-arrow-BQc2k2m7.js";import"./useCurrentTheme-B3JSS_WV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COBLEdDa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CF7dzU0W.js";import"./paper-plane-Bv6M5PcU.js";import"./index-CtRWkyeb.js";import"./less-D2zQaX4u.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
