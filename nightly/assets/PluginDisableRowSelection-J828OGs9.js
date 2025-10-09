import{j as e}from"./iframe-D7FikSiu.js";import{useMDXComponents as n}from"./index-BenG4a-h.js";import{I as r,F as s}from"./CommandsAndQueries-DD_YKX8j.js";import{M as l,C as a}from"./blocks-Yxlvk0d_.js";import"./Tag-CPn9c9wp.js";import"./index-C7R8Sd2K.js";import"./copy-BeTo-Yk5.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Uzzik8A7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./index--O96gYhw.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cjeu2iUC.js";import"./delete-BXFFeGva.js";import"./settings-Bhg9hIqQ.js";import"./NoData-8lo0EfIA.js";import"./IllustratedMessage-B5ILd7Ma.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D2FL1NIC.js";import"./index-D5KmdhfP.js";import"./index-BHdGppro.js";import"./slim-arrow-down-BjtIk1Vi.js";import"./Input-C3GQwp16.js";import"./ResponsivePopoverCommon.css-B-7xEFrO.js";import"./ValueStateMessage.css-Bp6Kzpn5.js";import"./Suggestions.css-C4deLYKC.js";import"./ListBoxItemGroupTemplate-CulA1MXP.js";import"./ComboBoxItemGroup-Ybx5jZca.js";import"./ListItemBaseTemplate-CbRHzmQ9.js";import"./Token-lKzfIqgl.js";import"./ScrollEnablement-Bra0pK8m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSDUnyyJ.js";import"./ToggleButton-Kp4VbK29.js";import"./SuggestionItem-CDgnoOkn.js";import"./index-BAC7wPZF.js";import"./Option-DjNP2NBe.js";import"./index-g5ankLTt.js";import"./SegmentedButton-DsD65c1s.js";import"./index-BLAF6B_L.js";import"./Select-DFH78pAA.js";import"./InvisibleMessage-CE6DvnfR.js";import"./slim-arrow-down-Cck_1u4G.js";import"./index-DPXWYJb-.js";import"./index-BS9hfto9.js";import"./index-BzlJw7GH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJs2hvRJ.js";import"./group-2-B__7xwg1.js";import"./sort-descending-Bt7-iKHQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5trjv0F.js";import"./utils-D4gyi2F6.js";import"./index-DUVjrMwJ.js";import"./index-Bp47sPZA.js";import"./index-C0B2CC00.js";import"./navigation-down-arrow-CBaTncM0.js";import"./navigation-right-arrow-r_WuPSCR.js";import"./navigation-right-arrow-BiAQ_euc.js";import"./useCurrentTheme-gi6l8GiI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_vb2NYJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C49MPlLC.js";import"./paper-plane-DDXSGztm.js";import"./index-7ywSorqo.js";import"./less-Bg7OXZ8n.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
