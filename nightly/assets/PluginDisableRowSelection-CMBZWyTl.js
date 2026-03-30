import{j as e}from"./iframe-DoasxszC.js";import{u as n,M as r,C as s}from"./blocks-DBX_G92C.js";import{I as l}from"./CommandsAndQueries-Bg5oLjv_.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import"./copy-Bp1X0rrX.js";import{F as a}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CwBfsyPl.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-FUb71t84.js";import"./delete-BNsJIylK.js";import"./settings-DIZQIGHO.js";import"./NoData-CPifF9dk.js";import"./NoFilterResults-pjvoSbdT.js";import"./index-CS1yMP3E.js";import"./IllustratedMessage-D0QVBew0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B7aSEDJ1.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./ListBoxItemGroupTemplate-CnyFVUQh.js";import"./ComboBoxItemGroup-C6J1oEbB.js";import"./ListItemBaseTemplate-56RYrvsT.js";import"./Token-Cy2nK-8H.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-f5cQaHwh.js";import"./ToggleButton-4lEDIg8i.js";import"./multiselect-all-CrwvgfDL.js";import"./SuggestionItem-BUm69vbz.js";import"./index-DujjVqPC.js";import"./Option-qr-0CuEo.js";import"./index-DKO_VCMs.js";import"./SegmentedButton-C_BxO-nh.js";import"./index-Bfc0n9xu.js";import"./Select-DyTpHhQN.js";import"./InvisibleMessage-CpFdH-Af.js";import"./index-Dodkzra4.js";import"./index-B5xDE1PM.js";import"./index-B3gSZvjn.js";import"./index-DXinWdIe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXOaaD8X.js";import"./group-2-DOt9casX.js";import"./sort-descending-CSa9QeUi.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLz5gwPO.js";import"./utils-CI2Ukgk8.js";import"./index-CpTTgPof.js";import"./index-C7-ObCq_.js";import"./index-DfjuUSBw.js";import"./navigation-down-arrow-BAtAokVf.js";import"./navigation-right-arrow-BiRIP0c6.js";import"./navigation-right-arrow-CIOXuOhx.js";import"./useCurrentTheme-CsrucE5U.js";import"./index-D8ci1hZC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BFJsr9kq.js";import"./paper-plane-CktOgF6u.js";import"./index-KS5Bmaht.js";import"./less-CflKdUlr.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
