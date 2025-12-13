import{j as e}from"./iframe-vf7s2VGb.js";import{useMDXComponents as n}from"./index-DKJSAVnl.js";import{I as r,F as s}from"./CommandsAndQueries-DWofsexW.js";import{M as l,C as a}from"./blocks-B4oFLz5c.js";import"./Tag-P1WqKFay.js";import"./index-DHeHce3N.js";import"./copy-CaZ5zeDJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CLTTeei_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./index-Bt_xSHJX.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B-8tjvZC.js";import"./delete-td61WACm.js";import"./settings-rT0-s-87.js";import"./NoData-Bhx-qegg.js";import"./IllustratedMessage-ClZPZ5oN.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D4sQFxvp.js";import"./index-f22oyNzG.js";import"./index-Cd4y_kbv.js";import"./slim-arrow-down-Z0YsYWn6.js";import"./Input-oUUbwe-u.js";import"./ResponsivePopoverCommon.css-MEOrQBt2.js";import"./ValueStateMessage.css-FedWBEIr.js";import"./Suggestions.css-ASubEaNq.js";import"./ListBoxItemGroupTemplate-DguSAue8.js";import"./ComboBoxItemGroup-Bu6Gjtr4.js";import"./ListItemBaseTemplate-Bf0mYL7i.js";import"./Token-CO9kT2ca.js";import"./ScrollEnablement-tuQmtrl2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9Uuxqqd.js";import"./ToggleButton-CVCfufSA.js";import"./SuggestionItem-Dpk_8NtW.js";import"./index-DvFvrrAA.js";import"./Option-DqgY0VMS.js";import"./index-DzFWBLE8.js";import"./SegmentedButton-CM0Yb-1y.js";import"./index-BprsUe_K.js";import"./Select-Cz_Z1gqj.js";import"./InvisibleMessage-sUWFyigV.js";import"./slim-arrow-down-B-lEbC2Q.js";import"./index-xmAfK3wq.js";import"./index-CungOEjJ.js";import"./index-HFjg-7HY.js";import"./index-DG420_LU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-De8iMo6C.js";import"./group-2-B8ZPoUgn.js";import"./sort-descending-Bv4rtnl5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4vfF5a4.js";import"./utils-CTkxpdDy.js";import"./index-BW0BnQBL.js";import"./index-BG66puBV.js";import"./index-UtBszVEk.js";import"./navigation-down-arrow-ywnaOS8H.js";import"./navigation-right-arrow-C8gBdEec.js";import"./navigation-right-arrow-wCDGslCm.js";import"./useCurrentTheme-CWvOl3sc.js";import"./index-BQ9kB6Rj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNQTmpVY.js";import"./paper-plane-CoF7IV9r.js";import"./index-BnswFZxm.js";import"./less-BnYtZ8Xc.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
