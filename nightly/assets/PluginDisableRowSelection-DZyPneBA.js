import{j as e}from"./iframe-D_OBvCft.js";import{useMDXComponents as n}from"./index-B_S0g7ME.js";import{I as r,F as s}from"./CommandsAndQueries-BZ-3zH0-.js";import{M as l,C as a}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import"./copy-DQgNVeWA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-zK04HXJH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqurhSOy.js";import"./delete-Ctn0kSBL.js";import"./settings-z7-rjv9j.js";import"./NoData-C5ntZU5O.js";import"./IllustratedMessage-id6nb7wX.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BKoG-d3a.js";import"./index-B_K9wBMY.js";import"./index-DP-FcseT.js";import"./slim-arrow-down-CHulNvxE.js";import"./Input-i8SqafG1.js";import"./ResponsivePopoverCommon.css-0qhZ8h5z.js";import"./ValueStateMessage.css-LMTZLgJb.js";import"./Suggestions.css-C2T_AAKW.js";import"./ListBoxItemGroupTemplate-CcplzrLE.js";import"./ComboBoxItemGroup-3PYa3s30.js";import"./ListItemBaseTemplate-BHxGfkuD.js";import"./Token-a1Z2dlMc.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_4_wWWa.js";import"./ToggleButton-BqO_3v_4.js";import"./SuggestionItem-CG8vQS4D.js";import"./index--Gn4VUxm.js";import"./Option-D0b-vRt9.js";import"./index-cCJWZwrT.js";import"./SegmentedButton-Dhi24GCC.js";import"./index-BR4X8nJj.js";import"./Select-BLV-PVqf.js";import"./InvisibleMessage-C_0GSe_o.js";import"./slim-arrow-down-CAFzZJk4.js";import"./index-Dk3pumqB.js";import"./index-xeY4HnPc.js";import"./index-CAb0cCCw.js";import"./index-DtrCS052.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdUi0j8b.js";import"./group-2-B-T-Csy_.js";import"./sort-descending-DEst_JzS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMORGjeP.js";import"./utils-GHixDqEj.js";import"./index-BYrxTP19.js";import"./index-CqnoKVS3.js";import"./index-BqnBaVKU.js";import"./navigation-down-arrow-DTEGx91w.js";import"./navigation-right-arrow-D2dYA2Ao.js";import"./navigation-right-arrow-cH8Y4Elf.js";import"./useCurrentTheme-CxGXlk1H.js";import"./index-Clf9WQAr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-113p4z.js";import"./paper-plane-78D-pvJG.js";import"./index-xk-p1hJ3.js";import"./less-oocybHBg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
