import{j as e}from"./iframe-BKYtcRXv.js";import{useMDXComponents as n}from"./index-D1nSvVZo.js";import{I as r}from"./CommandsAndQueries-CUyuiRf6.js";import{M as s,C as l}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import"./copy-Dd5cryj7.js";import{F as a}from"./Footer-CV4xu3yB.js";import"./PageNotFound-vT0hMOra.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BgWH2hpK.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DoqDiayo.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./index-ewdSxNga.js";import"./index-CruiZV6T.js";import"./index-qZc2Xmmm.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-BVN1tX5Y.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DyjJHKas.js";import"./delete-COc--zMh.js";import"./settings-DvU655Lf.js";import"./NoData-CBJjONw5.js";import"./NoFilterResults-B1-N34A5.js";import"./index-CYseC7kl.js";import"./IllustratedMessage-Ckmzjd0E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BgykwmTu.js";import"./Input-CO_xJZXP.js";import"./ResponsivePopoverCommon.css-BtDqVxq7.js";import"./ValueStateMessage.css-DyHSljmr.js";import"./Suggestions.css-RWTniQDi.js";import"./ListBoxItemGroupTemplate-DntWjXW-.js";import"./ComboBoxItemGroup-v3M_n_k-.js";import"./ListItemBaseTemplate-C6YXo6zR.js";import"./Token-C7dfemIx.js";import"./ScrollEnablement-DIukE-Oq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy0XTO8n.js";import"./ToggleButton-Xk26D8Qm.js";import"./multiselect-all-DOeifjrx.js";import"./SuggestionItem-DYVKlvCS.js";import"./index-BuNPx4RW.js";import"./Option-CmPkNzZb.js";import"./index-DuMd-yrT.js";import"./SegmentedButton-sNyJwfhT.js";import"./index-C62hrUfU.js";import"./Select-DUx7KFlD.js";import"./InvisibleMessage-Rg77mpqg.js";import"./index-CNnSMZ2h.js";import"./index-DOAAzZ1m.js";import"./index-D5IYfVsF.js";import"./index-QLH2EeXs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-5ce7U-Q1.js";import"./group-2-BfFYcn7i.js";import"./sort-descending-H5QlCV5Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DT4jNOO9.js";import"./utils-B2f4QDq0.js";import"./index-_Eo-G0Gk.js";import"./index-CaD4IA15.js";import"./index-BNMj4fDr.js";import"./navigation-down-arrow-DeuSM8u7.js";import"./navigation-right-arrow-BMpDZDnD.js";import"./navigation-right-arrow-DHm48mV8.js";import"./useCurrentTheme-CUsmZadi.js";import"./index-FDSeTwbN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DvpK_1n5.js";import"./paper-plane-BWnAq03I.js";import"./index-atWeeP0l.js";import"./less-CROdRzuR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
