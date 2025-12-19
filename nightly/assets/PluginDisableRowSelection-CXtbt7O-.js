import{j as e}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as n}from"./index-Cae9Voso.js";import{I as r,F as s}from"./CommandsAndQueries-Clw2dQJN.js";import{M as l,C as a}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import"./copy-B13EJS-v.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ls20Jl9_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc7jR-KD.js";import"./delete-CYGBhC6b.js";import"./settings-BfR_EbIn.js";import"./NoData-BJEIeC_Z.js";import"./IllustratedMessage-UAYFerO5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-I-0GEqqm.js";import"./index-DjiXt-x0.js";import"./index-55nh7KaD.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./Input-0cqUaW6-.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";import"./Suggestions.css-BIrO0gc4.js";import"./ListBoxItemGroupTemplate-oKbzZNII.js";import"./ComboBoxItemGroup-Bci5GWY6.js";import"./ListItemBaseTemplate-BzqS2Fl5.js";import"./Token-DbjQuNPp.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1yh_JDGs.js";import"./ToggleButton-BvTjNdfc.js";import"./SuggestionItem-gIvgc1mY.js";import"./index-CBicJKGb.js";import"./Option-MqiGXaOA.js";import"./index-CLXzz8MM.js";import"./SegmentedButton-BnAh5N-e.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./index-wmdfvP4Q.js";import"./index-Cfof4SU3.js";import"./index-CXYWUxgw.js";import"./index-Cad5KvVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DwZ3A5h1.js";import"./group-2-j3759jZ3.js";import"./sort-descending-BxAlrwUx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHHNw0uv.js";import"./utils-egnNt3B-.js";import"./index-DPc2cZ4_.js";import"./index-CzPfd54r.js";import"./index-fo8z4Qvq.js";import"./navigation-down-arrow-Bp3L9AX_.js";import"./navigation-right-arrow-DgSJmfeF.js";import"./navigation-right-arrow-DHp8bcl8.js";import"./useCurrentTheme-B_bh5PZa.js";import"./index-DrAUXulF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CdRMpk74.js";import"./paper-plane-Db0yyKlT.js";import"./index-crTpvm9q.js";import"./less-_a0dbQtg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
