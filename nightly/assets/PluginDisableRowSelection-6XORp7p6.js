import{j as e}from"./iframe-DLeMGAs6.js";import{useMDXComponents as n}from"./index-BeTNnGed.js";import{I as r,F as s}from"./CommandsAndQueries-Do6MeMuW.js";import{M as l,C as a}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import"./copy-ClThfN15.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-zkAPVIrI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./index-BelAbkZz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZLT9ilq.js";import"./delete-DC-_Y22L.js";import"./settings-C8YgnEjD.js";import"./NoData-DIe6lTz9.js";import"./IllustratedMessage-C0T15_Cz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DSla0Ypj.js";import"./index-DKaTYi7Y.js";import"./index-dlJAYtv8.js";import"./slim-arrow-down-CXh7VlFz.js";import"./Input-BvEbFIGf.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./ValueStateMessage.css-CYGxQFIT.js";import"./Suggestions.css-CnL5XvB_.js";import"./ListBoxItemGroupTemplate-TBm3jGfQ.js";import"./ComboBoxItemGroup-v9blSsnm.js";import"./ListItemBaseTemplate-B0VtVoTY.js";import"./Token-DXa6gniM.js";import"./ScrollEnablement-LGuvxbbP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CVpJPqGn.js";import"./ToggleButton-DdR_U0J3.js";import"./SuggestionItem-Bytxfkg7.js";import"./index-DWJIi1Cu.js";import"./Option-BABDhVgD.js";import"./index-BOHoyyXI.js";import"./SegmentedButton-BPn908Zb.js";import"./index-DLP1sSSh.js";import"./Select-D3bJlSEY.js";import"./InvisibleMessage-CjnlHtO4.js";import"./slim-arrow-down-DMmSjQ_W.js";import"./index-DRwQgmSC.js";import"./index-C6b9i92g.js";import"./index-CsHvU1n4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-P5Bwzq42.js";import"./group-2-CC5jzuvS.js";import"./sort-descending-BzCp0kGA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDs2ZQJs.js";import"./utils-DPe1wMqz.js";import"./index-Bg78CFbQ.js";import"./index-Bf4uxavh.js";import"./index-BiS7rtJ9.js";import"./navigation-down-arrow-B6cj3Ilp.js";import"./navigation-right-arrow-GrjOYVc0.js";import"./navigation-right-arrow-DkYagu5m.js";import"./useCurrentTheme-Xs1NZ5mm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-7Psn0Vsh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Doon_hgW.js";import"./paper-plane-BrBAfH5S.js";import"./index-Bred2sqK.js";import"./less-B08nub1h.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
