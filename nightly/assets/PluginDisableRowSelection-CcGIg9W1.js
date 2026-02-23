import{j as e}from"./iframe-ERwSzs3g.js";import{useMDXComponents as n}from"./index-C_Wbk-9f.js";import{I as r,F as s}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{M as l,C as a}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import"./copy-CudSiVH8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dzpuhj_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./index-BcvsAi-y.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dqn-jABc.js";import"./delete-Bu7VmTYp.js";import"./settings-CQ_5VNNI.js";import"./NoData-D2Tt32Od.js";import"./IllustratedMessage-B_rNMhob.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-7XsDJsR0.js";import"./index-CKj1ghFb.js";import"./index-VEHANs_d.js";import"./slim-arrow-down-2J31Ucf0.js";import"./Input-DSupStK3.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Suggestions.css-BIz0Zv49.js";import"./ListBoxItemGroupTemplate-DUimE2BY.js";import"./ComboBoxItemGroup-B_cfzOqG.js";import"./ListItemBaseTemplate-BQH3JJKy.js";import"./Token-DX8SqOz4.js";import"./ScrollEnablement-BD4VIdDp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck-G_e39.js";import"./ToggleButton-6e7zC1X-.js";import"./SuggestionItem-BmiMZKr8.js";import"./index-BIALcVNb.js";import"./Option-Br2Csiuj.js";import"./index-BJrpf7k8.js";import"./SegmentedButton-BjzAZg81.js";import"./index-CqF2GYF8.js";import"./Select-Uz-gzee2.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./slim-arrow-down-BdCansBN.js";import"./index-CA_zt6zs.js";import"./index-DvXXaKIh.js";import"./index-f2S0or9y.js";import"./index-HN2JJ6Qh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wg2A7PH5.js";import"./group-2-t0uZVGoA.js";import"./sort-descending-DTK9LhKi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YnPiPISE.js";import"./utils-DWJXL1ej.js";import"./index-BrPS-6K1.js";import"./index-BYHL4ln3.js";import"./index-Dq6Fu5U-.js";import"./navigation-down-arrow-vpfptFd4.js";import"./navigation-right-arrow-DiQFcMBc.js";import"./navigation-right-arrow-CzKfQRKc.js";import"./useCurrentTheme-DRl35Uzu.js";import"./index-BDQR7c08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDBjPcau.js";import"./paper-plane-D1nv_q0M.js";import"./index-CaV8_vUx.js";import"./less-Dmpu7iye.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
