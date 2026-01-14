import{j as e}from"./iframe-DsoLxTrs.js";import{useMDXComponents as n}from"./index-BYp40d_0.js";import{I as r,F as s}from"./CommandsAndQueries-CnpygbQ5.js";import{M as l,C as a}from"./blocks-BdFCA8eW.js";import"./Tag-CTTSF-tU.js";import"./index-DgqU0bHc.js";import"./copy-BFj7VYi7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Iyd7zZv9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./index-CNxSz0Hc.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Rs6p4UaS.js";import"./delete-CrMdIFDN.js";import"./settings-B-r3hKjY.js";import"./NoData-DSQeZXJt.js";import"./IllustratedMessage-C_polCAW.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BEkl_rEK.js";import"./index-BFkyaubq.js";import"./index-BX_gSHjC.js";import"./slim-arrow-down-CMk67T2s.js";import"./Input-Dk2NFph3.js";import"./ResponsivePopoverCommon.css-DQ_Sc_46.js";import"./ValueStateMessage.css-DnTQjXaN.js";import"./Suggestions.css-BdMDw5En.js";import"./ListBoxItemGroupTemplate-iQcJyyOU.js";import"./ComboBoxItemGroup-Be6pRmko.js";import"./ListItemBaseTemplate-CKQQ-jkb.js";import"./Token-zMAsq7gF.js";import"./ScrollEnablement-DmTjTt1h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CR5T5AOq.js";import"./ToggleButton-BO_VH3L2.js";import"./SuggestionItem-DgNMmhut.js";import"./index-DuMwI-OD.js";import"./Option-CeFMwTVm.js";import"./index-DYhrmhyV.js";import"./SegmentedButton-DJG8Ffa8.js";import"./index-B6jXq1u6.js";import"./Select-ChYmXvgz.js";import"./InvisibleMessage-C5xYCLxY.js";import"./slim-arrow-down-DCGoLBPd.js";import"./index-CnIPWkV8.js";import"./index-DUlHHXex.js";import"./index-CroKASKd.js";import"./index-CBWozBn3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMjwBPHh.js";import"./group-2-_4bewaxg.js";import"./sort-descending-Dcet9Hq8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrAz6JL2.js";import"./utils-DzaJNGLM.js";import"./index-C5Vq8szC.js";import"./index-CGJIVMir.js";import"./index-DXnPEmIf.js";import"./navigation-down-arrow-CfyMbTT9.js";import"./navigation-right-arrow-CFibnujH.js";import"./navigation-right-arrow--m1ezy9Z.js";import"./useCurrentTheme-CnQCPTuN.js";import"./index-ftQv3YgX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-gvYB5pwp.js";import"./paper-plane-DRJ7V1ZN.js";import"./index-B_8dxKRD.js";import"./less-BNhNO2Qi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
