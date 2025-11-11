import{j as e}from"./iframe-dcfOuKvt.js";import{useMDXComponents as n}from"./index-s6pmBJrF.js";import{I as r,F as s}from"./CommandsAndQueries-XLh3rfRK.js";import{M as l,C as a}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import"./copy-CjQxEWgu.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D-8gJKdE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./index-BFv8_OJi.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC_o51Ui.js";import"./delete-BAzyGK0e.js";import"./settings-FAg3x57M.js";import"./NoData-D9utlD0G.js";import"./IllustratedMessage-aIAJlFbs.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B7nT3HYa.js";import"./index-Dy2F28Z_.js";import"./index-ov6Hqgi9.js";import"./slim-arrow-down-7ZYbfLfd.js";import"./Input-DZep6tUc.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./Suggestions.css-DvjeYE6w.js";import"./ListBoxItemGroupTemplate-ChRrtpqA.js";import"./ComboBoxItemGroup-CvAEveDk.js";import"./ListItemBaseTemplate-DNtdtyka.js";import"./Token-DQ8uLAYx.js";import"./ScrollEnablement-BhFMnfiL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3mcYXoD.js";import"./ToggleButton-HVoH_wGW.js";import"./SuggestionItem-DwMAv3Y5.js";import"./index-DKSwXKRo.js";import"./Option-DN_OxtE5.js";import"./index-B_kjn4LY.js";import"./SegmentedButton-DfxvXFe5.js";import"./index-BAbKpGMN.js";import"./Select-1hbOCPXG.js";import"./InvisibleMessage-yVfs4fqn.js";import"./slim-arrow-down-C5wzux3l.js";import"./index-B4P16y8A.js";import"./index-lCvDytw_.js";import"./index-BJoDmJyK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BKkgL7hV.js";import"./group-2-D_6f7wuD.js";import"./sort-descending-80LCu02o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bj_K8y3K.js";import"./utils-BCDlv38x.js";import"./index-NMCoUNxC.js";import"./index-DN8kdina.js";import"./index-Bfk5X2Wo.js";import"./navigation-down-arrow-BFC7OekD.js";import"./navigation-right-arrow-Ce3qhbEe.js";import"./navigation-right-arrow-qu2k__M4.js";import"./useCurrentTheme-CsIfI9uM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D86utbHM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsbxojB9.js";import"./paper-plane-taVkukQ2.js";import"./index-ZliIzRiZ.js";import"./less-BB1GhJj9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
