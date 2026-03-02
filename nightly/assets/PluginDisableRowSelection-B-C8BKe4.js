import{j as e}from"./iframe-CqFnJp-S.js";import{useMDXComponents as n}from"./index-CynYu3xa.js";import{I as r,F as s}from"./CommandsAndQueries-D_WKy8dN.js";import{M as l,C as a}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import"./copy-B3ylxRux.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BPifQ1Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./index-CA0UVsfH.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-GQqzYq73.js";import"./delete-DVGnJKaP.js";import"./settings-C86YGrfc.js";import"./NoData-CPLwwlHF.js";import"./IllustratedMessage-D9IfNlHf.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Cf9HMdQx.js";import"./index-DsLMVCKf.js";import"./index-D5uq3pGm.js";import"./slim-arrow-down-BKovBuLa.js";import"./Input-CQNiUAP7.js";import"./ResponsivePopoverCommon.css-B_6-LLQR.js";import"./ValueStateMessage.css-BBGnGBu9.js";import"./Suggestions.css-DzKfp-Xw.js";import"./ListBoxItemGroupTemplate-B53iLlHx.js";import"./ComboBoxItemGroup-Wbjga0AQ.js";import"./ListItemBaseTemplate-BGEwTL5Q.js";import"./Token-CDAtcjpf.js";import"./ScrollEnablement-BUHldyEa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1rHJjnW.js";import"./ToggleButton-BOg-qA3G.js";import"./SuggestionItem-xIpc8qFg.js";import"./index--ZiExa_2.js";import"./Option-DIgNMlnn.js";import"./index-TPfNhAGX.js";import"./SegmentedButton-sebu1UW5.js";import"./index-eNZtFDGv.js";import"./Select-CZVbWsMp.js";import"./InvisibleMessage-CgZaFHu8.js";import"./slim-arrow-down-D6HaHOTp.js";import"./index-2-mJG5vY.js";import"./index-Dghj_1B1.js";import"./index-Mhz05_do.js";import"./index-Bau1_Q7b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwYWP051.js";import"./group-2-DlIEyGbO.js";import"./sort-descending-C24nnD91.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ril5FfjQ.js";import"./utils-D1IBIU3s.js";import"./index-4ty_Ok3T.js";import"./index-CPy012dy.js";import"./index-Dc9tpclD.js";import"./navigation-down-arrow-D8TiYLu5.js";import"./navigation-right-arrow-P2di7b2W.js";import"./navigation-right-arrow-HH0z6MpN.js";import"./useCurrentTheme-oeVWKNpy.js";import"./index-CMtyblMd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ChZZThs6.js";import"./paper-plane-Rb1O3_rk.js";import"./index-RQySdApX.js";import"./less-Dkh_-EuF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
