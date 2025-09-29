import{j as e}from"./iframe-DHodyxHg.js";import{useMDXComponents as n}from"./index-BN78HojQ.js";import{I as r,F as s}from"./CommandsAndQueries-BJoNcE_T.js";import{M as l,C as a}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import"./copy-HtbMTlWB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CjRnrZ5o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";import"./index-Cbt6pGSR.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tg2_K8Hr.js";import"./delete-Zcb2vEJ9.js";import"./settings-BD-RgLuV.js";import"./NoData-ZyVsLGlx.js";import"./IllustratedMessage-DWYc-Nj8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C-nNTrYT.js";import"./index-B9OIuk5u.js";import"./slim-arrow-down-RUw4_20M.js";import"./Input-CPLuf8pl.js";import"./ResponsivePopoverCommon.css-acGEx8eA.js";import"./ValueStateMessage.css-DdKqUqjJ.js";import"./Suggestions.css-B9GwOVjc.js";import"./ListBoxItemGroupTemplate-DbSMHwWh.js";import"./ComboBoxItemGroup-BpKRweKF.js";import"./ListItemBaseTemplate-DgUnC3lw.js";import"./Token-CbMshDZu.js";import"./ScrollEnablement-QqZ8MTp1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ob80DdRY.js";import"./ToggleButton-BKWW76vP.js";import"./SuggestionItem-C9bc-o4q.js";import"./index-S-wdO51Z.js";import"./Option-Dgeh_gWY.js";import"./index-BtsPFHyJ.js";import"./SegmentedButton-Dgc_oaRw.js";import"./index-B1iSRk56.js";import"./Select-DZKbaPCr.js";import"./InvisibleMessage-k0Gva9XM.js";import"./slim-arrow-down-cqA_BTp3.js";import"./index-Bq3O3R5l.js";import"./index-H_BorQOy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYwltf-g.js";import"./group-2-C2sMZn1f.js";import"./sort-descending-DrgkNws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bo9NW1qj.js";import"./utils-BwVDplvj.js";import"./index-ja_VFHYZ.js";import"./index-BzHA07QR.js";import"./index-V-s4kElR.js";import"./navigation-down-arrow-BKyAuWCW.js";import"./navigation-right-arrow-DRM4c8S8.js";import"./navigation-right-arrow-DbKnsnOZ.js";import"./useCurrentTheme-CxvZJkfq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUmA-QY0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2F7gVSb.js";import"./paper-plane-UC5z0UMH.js";import"./index-DRtfFjjT.js";import"./less-D8BZSXoC.js";import"./index-CurBf1wH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
