import{j as e}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as n}from"./index-p5hUqO5S.js";import{I as r}from"./CommandsAndQueries-CY2cNdhF.js";import{M as s,C as l}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import"./copy-COwmxVeQ.js";import{F as a}from"./Footer-CnbRw8mY.js";import"./PageNotFound-Dkn1r8pk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dbcrbwec.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BHPCDbiV.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./index-CZdI0ebk.js";import"./index-C9RG4ln6.js";import"./index-kq9zSbaq.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./index-DOs5kzts.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDcWf_Dk.js";import"./delete-Dy8TW_jf.js";import"./settings-CTDgJi7-.js";import"./NoData-ChgUFnhW.js";import"./NoFilterResults-Ti2WSWk7.js";import"./index-D1-WSJuG.js";import"./IllustratedMessage-sxhaShVk.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ce-x5iIp.js";import"./Input-BwdyLf-s.js";import"./ResponsivePopoverCommon.css-BB8NXUcU.js";import"./ValueStateMessage.css-BuevPY9h.js";import"./Suggestions.css-D3ddXDeO.js";import"./ListBoxItemGroupTemplate-DENNZn8k.js";import"./ComboBoxItemGroup-AlgVKKtk.js";import"./ListItemBaseTemplate-BnBz7YKK.js";import"./Token-Dy6xV80q.js";import"./ScrollEnablement-geO1o17m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6QBtN6x.js";import"./ToggleButton-B-QFrS5f.js";import"./multiselect-all-N4HaTKEt.js";import"./SuggestionItem-CxmDW4WJ.js";import"./index-BiLxpb9V.js";import"./Option-UA4r9OEN.js";import"./index-BZTFBXyH.js";import"./SegmentedButton-CFFdkNmV.js";import"./index-CyrFd1-2.js";import"./Select-4EhfYWf2.js";import"./InvisibleMessage-Bc2H5qZ0.js";import"./index-CuSCF_fM.js";import"./index-BFItwByU.js";import"./index-DCsPrgaQ.js";import"./index-Cp7SAe62.js";import"./IconDesign-DXd8PPVF.js";import"./filter-os8ZpS83.js";import"./group-2-YJ2lTcge.js";import"./sort-descending-Dse1md5D.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CvXqra-k.js";import"./utils-Dm1Xt3ii.js";import"./index-BuVPQ4y7.js";import"./index-Cf1IHbj9.js";import"./index-DPPca9iV.js";import"./navigation-down-arrow-CACI7wDg.js";import"./navigation-right-arrow-CNG3xMAM.js";import"./navigation-right-arrow-ya-aDXCF.js";import"./useCurrentTheme-DFXbScZb.js";import"./index-BGM9-IM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BdqZbY6W.js";import"./paper-plane-BP_sElBh.js";import"./index-EM9DFt2Q.js";import"./less-CnrtmDHy.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
