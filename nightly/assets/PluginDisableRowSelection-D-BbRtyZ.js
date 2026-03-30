import{j as e}from"./iframe-vcfuMEkL.js";import{u as n,M as r,C as s}from"./blocks-CzMAxM7Q.js";import{I as l}from"./CommandsAndQueries-BLcCgFEg.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import"./copy-CTlr8Wzd.js";import{F as a}from"./Footer-B8luth97.js";import"./PageNotFound-DOCrqF52.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D0S5SWUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DAzSfgZb.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./index-CY4n9r1V.js";import"./index-BgY_pwT7.js";import"./index-C5MkOTN8.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./index-CPCjGKn0.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Crgbirl0.js";import"./delete-t-nTD-y0.js";import"./settings-C-AYaNdM.js";import"./NoData-D-VJSSvm.js";import"./NoFilterResults-BxHjy-Ir.js";import"./index-CG-qXqs_.js";import"./IllustratedMessage-BqYMJYO9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNNC3MB3.js";import"./Input-UOdVCXoq.js";import"./ResponsivePopoverCommon.css-BZx4EG62.js";import"./ValueStateMessage.css-BUiJkg_v.js";import"./Suggestions.css-C6VxQjoH.js";import"./ListBoxItemGroupTemplate-DKqiYFMZ.js";import"./ComboBoxItemGroup-DxGiZDD1.js";import"./ListItemBaseTemplate-Z0Vtvnm9.js";import"./Token-BipXjjpW.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ajyl_xA3.js";import"./ToggleButton-BvHVimm5.js";import"./multiselect-all-DMS-FMXo.js";import"./SuggestionItem-DM0Sr0MT.js";import"./index-BNjcqTu2.js";import"./Option-DFlIuwHE.js";import"./index-DXuj7n31.js";import"./SegmentedButton-BiCKQqFx.js";import"./index-CdVEJ8Xn.js";import"./Select-BRdHt1j2.js";import"./InvisibleMessage-OqmRbPaJ.js";import"./index-CA51ReO5.js";import"./index-D9lECCtr.js";import"./index-BGMDCEAA.js";import"./index-B95IPvM7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QMg4ltp-.js";import"./group-2-D1uLpEFP.js";import"./sort-descending-CSNhAS-7.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAB5UG.js";import"./utils-3Fin_E3c.js";import"./index-iVoXYErW.js";import"./index-CK-AKsKY.js";import"./index-ByXi5BjK.js";import"./navigation-down-arrow-VFZsVw9Y.js";import"./navigation-right-arrow-CyNJ1Cu6.js";import"./navigation-right-arrow-jHLkNE9I.js";import"./useCurrentTheme-C76bbDUR.js";import"./index-BopKc_Rk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D4Wf5-Pu.js";import"./paper-plane-DfuC-T1-.js";import"./index-Bz-Lpaym.js";import"./less-DUR6pMX9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
