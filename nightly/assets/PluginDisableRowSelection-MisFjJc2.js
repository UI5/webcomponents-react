import{j as e}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as n}from"./index-dcVclcbT.js";import{I as r,F as s}from"./CommandsAndQueries-DUfglqKp.js";import{M as l,C as a}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import"./copy-BI62_cw9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-s17Movl1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DLxqbR-j.js";import"./delete-C69cbyF3.js";import"./settings-BWzqlj0G.js";import"./NoData-D5fncAkO.js";import"./IllustratedMessage-BzTSJxO9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YgmQ2tQR.js";import"./index-Ci7qfekx.js";import"./index-DNsUAKiX.js";import"./slim-arrow-down-CyGdej7d.js";import"./Input-z0U91vlG.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./ValueStateMessage.css-DF0Hyzh1.js";import"./Suggestions.css-wt4aZj0f.js";import"./ListBoxItemGroupTemplate-Q-KeUcY6.js";import"./ComboBoxItemGroup-BSGTLThu.js";import"./ListItemBaseTemplate-DqtKzpsG.js";import"./Token-vLDA2-Jp.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-hNMIOZMd.js";import"./ToggleButton-7eyAjys6.js";import"./SuggestionItem-Qf_7uMPc.js";import"./index-7cA-ux1h.js";import"./Option-DZeZ5p_t.js";import"./index-B7ZIHFQx.js";import"./SegmentedButton-BmWRNH_m.js";import"./index-Dff-sv4X.js";import"./Select-DhzR4NaB.js";import"./InvisibleMessage-DisTLAk4.js";import"./slim-arrow-down-Dqq2dwC4.js";import"./index-DVvxtB8e.js";import"./index-DCksASwl.js";import"./index-OEGwklO3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cix59-jT.js";import"./group-2-Bhc8bd2M.js";import"./sort-descending-DgOmEU3h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHOGLY_P.js";import"./utils-DUcBANkt.js";import"./index-C3qN_Aew.js";import"./index-CBCSR7an.js";import"./index-CVsRwsda.js";import"./navigation-down-arrow-_9IZkA0g.js";import"./navigation-right-arrow-p28ybD6y.js";import"./navigation-right-arrow-Bm5goftX.js";import"./useCurrentTheme-f2z_yH-b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXZ8CjJT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zeVN43iZ.js";import"./paper-plane-7o4eJ6hV.js";import"./index-BYRBgKjV.js";import"./less-hBB1SYwL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
