import{j as e}from"./iframe-CdfVheEM.js";import{useMDXComponents as n}from"./index-Bn3z_2-D.js";import{I as r,F as s}from"./CommandsAndQueries-DnpuXHMh.js";import{M as l,C as a}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import"./copy-CQYljM5l.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CdHvl2gt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./index-BkqNBKqG.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MEyy_OdE.js";import"./delete-DQmyWOyY.js";import"./settings-COcXG8h3.js";import"./NoData-DcxAeqV1.js";import"./IllustratedMessage-B3a6NIT2.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BgUA9kLe.js";import"./index-Bh2r_4yQ.js";import"./index-CzcQkJTF.js";import"./slim-arrow-down-D4oCbCnX.js";import"./Input-Bdhewrt9.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./ValueStateMessage.css-CfDs1rEd.js";import"./Suggestions.css-BdX9EgDU.js";import"./ListBoxItemGroupTemplate-8UCIFoUO.js";import"./ComboBoxItemGroup-x2TGee-B.js";import"./ListItemBaseTemplate-oDeWAQcb.js";import"./Token-BXxrasGo.js";import"./ScrollEnablement-C6CUE2hY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x_g1yDzG.js";import"./ToggleButton-COVKMN5A.js";import"./SuggestionItem-MWxUSQN7.js";import"./index-PYawlrtB.js";import"./Option-BUhhlAsc.js";import"./index-BJLAYe_t.js";import"./SegmentedButton-BOjI_yef.js";import"./index-CmKIPpc4.js";import"./Select-CY0l6TMc.js";import"./InvisibleMessage-COMllSIK.js";import"./slim-arrow-down-C79oKx1O.js";import"./index-DBS5gnra.js";import"./index-KQBqeoLi.js";import"./index-BI6OpvzA.js";import"./index-DC3a-gmy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nZrai-M2.js";import"./group-2-CNZ0ZgLY.js";import"./sort-descending-CEKP_D9I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-d7HncG-i.js";import"./utils-Cd8HpNBh.js";import"./index-DNPX4N-_.js";import"./index-DmA_99Px.js";import"./index-CDWK5O7C.js";import"./navigation-down-arrow-DpnQsS0V.js";import"./navigation-right-arrow-Dxz9thKC.js";import"./navigation-right-arrow-DZkMVdUz.js";import"./useCurrentTheme-Cdk1W9u5.js";import"./index-BpQg-76X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPpwcO6G.js";import"./paper-plane-C7_1OrVj.js";import"./index-CUP3o2CN.js";import"./less-BzMFUFzl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
