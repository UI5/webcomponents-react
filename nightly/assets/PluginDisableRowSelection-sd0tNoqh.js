import{j as e}from"./iframe-iYU5spAk.js";import{useMDXComponents as n}from"./index-BzD2IrSQ.js";import{I as r}from"./CommandsAndQueries-BRXiW4dn.js";import{M as s,C as l}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import"./copy-DCVJQWNc.js";import{F as a}from"./Footer-BTHx_eA0.js";import"./PageNotFound-C8n2TUKE.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BqAo2gsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DNrZNopF.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./index-DqeVDsPv.js";import"./index-BWMAVmh3.js";import"./index-DUNXsDMC.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-B2lbw_UO.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Txjlor_N.js";import"./delete-zxvfSezM.js";import"./settings-DOd8m396.js";import"./NoData-CS38cQi8.js";import"./NoFilterResults-Dx8cQ-OW.js";import"./index-BIo60fMs.js";import"./IllustratedMessage-DcLV6jZH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-iEqBAI.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./ListBoxItemGroupTemplate-ClX62AQ5.js";import"./ComboBoxItemGroup-KbtZd36F.js";import"./ListItemBaseTemplate-D-bV5LoH.js";import"./Token-DllBa28z.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cf92RqQJ.js";import"./ToggleButton-XRDOJStY.js";import"./multiselect-all-B_UBRtV6.js";import"./SuggestionItem-D5XWHwVx.js";import"./index-COsKSNFh.js";import"./Option-WemDvLcT.js";import"./index-DhEuHp6p.js";import"./SegmentedButton-CoSscdvL.js";import"./index-Duk2RCOb.js";import"./Select-DotgCPCG.js";import"./InvisibleMessage-BqlPeigB.js";import"./index-CXcrzFui.js";import"./index-Djsl4Kkv.js";import"./index-QmgoYX5D.js";import"./index-BO0iryfq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VYJ9nzZL.js";import"./group-2-B54BU3OI.js";import"./sort-descending-C1fJgBpm.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdYyxTLQ.js";import"./utils-BaGgi4t6.js";import"./index-DyWQ4Yet.js";import"./index-WwMXFCkN.js";import"./index-CjSo2Ws_.js";import"./navigation-down-arrow-CaKxhXWN.js";import"./navigation-right-arrow-D1Pf3y64.js";import"./navigation-right-arrow-L_9IiXO-.js";import"./useCurrentTheme-B6gq1VrI.js";import"./index-CQs_LxQY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CmURE4St.js";import"./paper-plane-BkJk1PQY.js";import"./index-CdP1nluN.js";import"./less-CMvrZdAD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
