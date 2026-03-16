import{j as e}from"./iframe-CLRwe_KU.js";import{useMDXComponents as n}from"./index-zMDfw_hp.js";import{I as r}from"./CommandsAndQueries-Qa8JAgCb.js";import{M as s,C as l}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import"./copy-C_QN3LWn.js";import{F as a}from"./Footer-CY1WkGvT.js";import"./PageNotFound-Et84DOUJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CImvmFCc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQgjpXoE.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./index-DhQiji0Y.js";import"./index-9xLRD1c-.js";import"./index-rGV23ifs.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./index-BqJblJml.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlTtlId.js";import"./delete-CzIaiG6f.js";import"./settings-DNWeAtuY.js";import"./NoData-y3OBi2YA.js";import"./NoFilterResults-DMybirIN.js";import"./index-e0pSm-iu.js";import"./IllustratedMessage-CfFP86At.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFRB3vNn.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./ListBoxItemGroupTemplate-RwrRGF0Y.js";import"./ComboBoxItemGroup-Bd5_N2YI.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./Token-BfX6rrBK.js";import"./ScrollEnablement-Bh4ROjF7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeeWpw49.js";import"./ToggleButton-C0X3Nukc.js";import"./multiselect-all-DNY9iLOO.js";import"./SuggestionItem-CCS96mKL.js";import"./index-CNxxt-Ya.js";import"./Option-rvwi6Sh1.js";import"./index-BVppQ-lw.js";import"./SegmentedButton-CR_FICCj.js";import"./index-a2MjnGAR.js";import"./Select-BRr99ja4.js";import"./InvisibleMessage-D7m3pcV6.js";import"./index-BHYssSYC.js";import"./index-kcaVuine.js";import"./index-BU1oNBi0.js";import"./index-CWV1r8Rz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Lon8PjAF.js";import"./group-2-BZgi4TVU.js";import"./sort-descending-QJbOskyY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-5oCNyE.js";import"./utils-DGnkkiyK.js";import"./index-DML8dj0q.js";import"./index-lA_hjyPS.js";import"./index-FRr66Ky1.js";import"./navigation-down-arrow-jRSiZ6yO.js";import"./navigation-right-arrow-C-ZNhxUq.js";import"./navigation-right-arrow-BF4xw2D4.js";import"./useCurrentTheme-Cegr51cF.js";import"./index-C2Ec73XG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPDPb-rh.js";import"./paper-plane-CfvaYcji.js";import"./index-DiSuVJLn.js";import"./less-DG4BSQsl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
