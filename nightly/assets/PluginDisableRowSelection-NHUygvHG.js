import{j as e}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as n}from"./index-DmyZ7oDn.js";import{I as r,F as s}from"./CommandsAndQueries--XH3UvBD.js";import{M as l,C as a}from"./blocks-B3YWg1xO.js";import"./Tag-BvWs66nb.js";import"./index-BQvFUkOP.js";import"./copy-DLqEfzA0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-mcIkmlOc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./index-DuOzvotb.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoYaF1dP.js";import"./delete-CsD0pt1u.js";import"./settings-Cy0GWgCZ.js";import"./NoData-CMKGsDFP.js";import"./IllustratedMessage-DQknMDe-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dz3NOO0O.js";import"./index-CcTeAWDa.js";import"./slim-arrow-down-DW1bb7Yi.js";import"./Input-DLv0_pwH.js";import"./ResponsivePopoverCommon.css-Ce2_DLGD.js";import"./ValueStateMessage.css-DNcxHwSS.js";import"./Suggestions.css-5bToJR4X.js";import"./ListBoxItemGroupTemplate-DcN5U3H5.js";import"./ComboBoxItemGroup-CzoRyeO7.js";import"./ListItemBaseTemplate-SBDokyJS.js";import"./Token-bqiPRfEa.js";import"./ScrollEnablement-8GN9BE9k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DfnsK1Kh.js";import"./ToggleButton-BilcMZKx.js";import"./SuggestionItem-CpI1i8qK.js";import"./index-mOpeWcnG.js";import"./Option-X5MvP6Ez.js";import"./index-Lxr2utNH.js";import"./SegmentedButton-DaKVnc87.js";import"./index-yYitgPgC.js";import"./Select-DFDzYy_c.js";import"./InvisibleMessage-BbXAREzN.js";import"./slim-arrow-down-CmTuLlvX.js";import"./useIsRTL-TNKtGqcG.js";import"./index-CgaQ0ztb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbnAHyQW.js";import"./group-2-DRCf6JID.js";import"./sort-descending-C1zU_0_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5daVLzH.js";import"./utils-Dw1swK2v.js";import"./index-C4JZANr3.js";import"./index-CQlrF-yO.js";import"./index-CEje_66r.js";import"./navigation-down-arrow-BqiSx__M.js";import"./navigation-right-arrow-bAsVms0n.js";import"./navigation-right-arrow-TGhfCMRD.js";import"./useCurrentTheme-2htwq5Wd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BjE4yXnU.js";import"./debounce-D7W5PopO.js";import"./paper-plane-4_dk95Mh.js";import"./index-CyNfhGJe.js";import"./less-DNXIrkgN.js";import"./index-CkHcdUia.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
