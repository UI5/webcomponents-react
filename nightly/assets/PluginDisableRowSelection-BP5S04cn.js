import{j as e}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as n}from"./index-Du5TrOvB.js";import{I as r,F as s}from"./CommandsAndQueries-DJ070Qmg.js";import{M as l,C as a}from"./blocks-9I7fLsXi.js";import"./Tag-CUzUjb7h.js";import"./index-CMhb9NSF.js";import"./copy-Cwbx5yBu.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-sLLLanu-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";import"./index-Bd_n1-5X.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NdNm120N.js";import"./delete-Bh6rvYu4.js";import"./settings-BoxUkedg.js";import"./NoData-Itj-m_z4.js";import"./IllustratedMessage-BahKmhi1.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DtzRcyJr.js";import"./index-B1pI2LnF.js";import"./index-DXAZ5IQ3.js";import"./slim-arrow-down-Db3k0_l-.js";import"./Input-CwGD6kGS.js";import"./ResponsivePopoverCommon.css-CaIT07ea.js";import"./ValueStateMessage.css-ClqfbOtD.js";import"./Suggestions.css-iZx1rci3.js";import"./ListBoxItemGroupTemplate-DqtZVPPy.js";import"./ComboBoxItemGroup-DcXy2ln2.js";import"./ListItemBaseTemplate-Cqyd2hFY.js";import"./Token-j5u3Id6h.js";import"./ScrollEnablement-B4xK1oWi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHAirMKT.js";import"./ToggleButton-C8du3p8o.js";import"./SuggestionItem-DDXTi4_0.js";import"./index-CuctUWCD.js";import"./Option-Bkd_KNAu.js";import"./index-b5AWgmO0.js";import"./SegmentedButton-opFUZ7Oe.js";import"./index-BwGg5_P1.js";import"./Select-C8rdNxEb.js";import"./InvisibleMessage-B1fTihab.js";import"./slim-arrow-down-Cwp2cLQO.js";import"./index-NJhcgYyi.js";import"./index-C2a0yj7L.js";import"./index-BAn4ZmzK.js";import"./index--SxJFkMv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4ZmdR7v.js";import"./group-2-CCWcXYfi.js";import"./sort-descending-0Nd9Y8Ip.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D3ZD76ok.js";import"./utils-CVEijiie.js";import"./index-DjJtZJzk.js";import"./index-Bau-szwl.js";import"./index-KEvUu7xL.js";import"./navigation-down-arrow-w1mb7uJq.js";import"./navigation-right-arrow-DqPNc_S_.js";import"./navigation-right-arrow-CghgLFo5.js";import"./useCurrentTheme-Ded0Sk7M.js";import"./index-8yXidvv8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6qg-InN.js";import"./paper-plane-Bi4wahXw.js";import"./index-BCS14kV5.js";import"./less-Dz6W6Mq4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
