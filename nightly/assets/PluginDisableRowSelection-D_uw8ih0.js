import{j as e}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as n}from"./index-RGZEkUe7.js";import{I as r,F as s}from"./CommandsAndQueries-edZwg3xm.js";import{M as l,C as a}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import"./copy-ym3aYCLk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DFr4kJK_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-DK4LsWgA.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuCk_hfi.js";import"./delete-DqEPR1Kk.js";import"./settings-BvE_RVs3.js";import"./NoData-BQN2z6DP.js";import"./IllustratedMessage-Bhm5_tWx.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DfQRIGVv.js";import"./index-DKZ-N2hR.js";import"./index-XPK1Pa3d.js";import"./slim-arrow-down-BBb3V39I.js";import"./Input-e95l3hLj.js";import"./ResponsivePopoverCommon.css-njDvm-N2.js";import"./ValueStateMessage.css-DOeSeMsA.js";import"./Suggestions.css-WQshat4v.js";import"./ListBoxItemGroupTemplate-CO9iiEMW.js";import"./ComboBoxItemGroup-Dnc717x5.js";import"./ListItemBaseTemplate-DtBXQ5ov.js";import"./Token-D2uvUdrZ.js";import"./ScrollEnablement-SOer0rOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BI0Ll8pv.js";import"./ToggleButton-RGCKdF71.js";import"./SuggestionItem-f7mMQ8dV.js";import"./index-DZi4le4v.js";import"./Option-BCCKGeE5.js";import"./index-D4-tQ_X-.js";import"./SegmentedButton-2j4XezgK.js";import"./index-kS8TEHfa.js";import"./Select-CWRM89JB.js";import"./InvisibleMessage-Y-gpMwBW.js";import"./slim-arrow-down-BYuclwN8.js";import"./index-D0BFf4OT.js";import"./index-CcS-nMSH.js";import"./index-CrYrIUjU.js";import"./index-DTqNuwcc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoT6c9V7.js";import"./group-2-B5f3D7wV.js";import"./sort-descending-DGeD_fPq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vmYkN8dN.js";import"./utils-DUEpvVwD.js";import"./index-D5HeUm9y.js";import"./index-OPBsLPCt.js";import"./index-Bep7VIpN.js";import"./navigation-down-arrow-DZGgjCfZ.js";import"./navigation-right-arrow-j6ezlh3e.js";import"./navigation-right-arrow-DmBjSJtS.js";import"./useCurrentTheme-DAm2pSwB.js";import"./index-B8H8C8Xn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xF7iXHP9.js";import"./paper-plane-CRn-ZhnF.js";import"./index-CO2hZTyW.js";import"./less-DBuv2uLm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
