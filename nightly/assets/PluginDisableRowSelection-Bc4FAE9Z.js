import{j as e}from"./iframe-BB6QsCcm.js";import{useMDXComponents as n}from"./index-CpyLbSYP.js";import{I as r}from"./CommandsAndQueries-BiWITRaD.js";import{M as s,C as l}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import"./copy-CCxPB9Eo.js";import{F as a}from"./Footer-BhEsQKJ6.js";import"./PageNotFound-CzkzQoiL.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C2ZNW2s5.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nh3gGr7J.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./index-ZlEQADjM.js";import"./index-BiTQ1Tdz.js";import"./index-Cg4sRA-Y.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-DsUvzGkS.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-jMOYBYRN.js";import"./delete-C8ILg1tk.js";import"./settings-Dr6LJqAx.js";import"./NoData-BDy79agX.js";import"./NoFilterResults-BmBQ0hmP.js";import"./index-CWuD9QeE.js";import"./IllustratedMessage-BWy_xvBP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-HSHxMqNr.js";import"./Input-JioLFYJJ.js";import"./ResponsivePopoverCommon.css-6GP8Lm0R.js";import"./ValueStateMessage.css-l1uIo9PL.js";import"./Suggestions.css-D2YmrWJk.js";import"./ListBoxItemGroupTemplate-CRgv91LV.js";import"./ComboBoxItemGroup-CRHjR_uc.js";import"./ListItemBaseTemplate-LKNuMPHR.js";import"./Token-CGH1x_5F.js";import"./ScrollEnablement-C9jw74Ub.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4b6lCaO.js";import"./ToggleButton-YqJTBHCJ.js";import"./multiselect-all-DVOpmePw.js";import"./SuggestionItem-BPY8t2Ca.js";import"./index-CxKbBauK.js";import"./Option-CLM8LjbY.js";import"./index-CG3ETCdV.js";import"./SegmentedButton-ZShhsJ6z.js";import"./index-Dunx1SzC.js";import"./Select-D3_73qVV.js";import"./InvisibleMessage-B_1ltxKh.js";import"./index-CRTb_SI_.js";import"./index-cQQL1sta.js";import"./index-E6gjuC88.js";import"./index-Du-fLjuZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuyIDAv5.js";import"./group-2-B5iSe4vK.js";import"./sort-descending-3s865Vlf.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdS8cG8s.js";import"./utils-DBM40PGg.js";import"./index-Dz7ZRshb.js";import"./index-GaSTmw-Y.js";import"./index-CV533GXR.js";import"./navigation-down-arrow-DNSZQduQ.js";import"./navigation-right-arrow-D15FSzk1.js";import"./navigation-right-arrow-D6fBPfwP.js";import"./useCurrentTheme-DxOa0FRn.js";import"./index-EkHUYTPl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zpMPSAkb.js";import"./paper-plane-BQP8ObaP.js";import"./index-C9U4bo4t.js";import"./less-b7RFHQTo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
