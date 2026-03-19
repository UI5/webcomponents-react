import{j as e}from"./iframe-D9XQThMB.js";import{useMDXComponents as n}from"./index-BFkPJIs4.js";import{I as r}from"./CommandsAndQueries-BBuqlp9J.js";import{M as s,C as l}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import"./copy-CyvuSNR_.js";import{F as a}from"./Footer-8Yr8m1IV.js";import"./PageNotFound-DktVNoBl.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B7SriO4F.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CJ7-xxSX.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./index-CjxO355V.js";import"./index-CxgWM8Dp.js";import"./index-BlKrBUMf.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./index-BtpxSXz8.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6l-lvwE.js";import"./delete-SLkYfI9p.js";import"./settings-By34T56u.js";import"./NoData-sY8uzsrT.js";import"./NoFilterResults-VWGA7F_B.js";import"./index-4RD7ReOC.js";import"./IllustratedMessage-B9-pF2sP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-yyA8QoJL.js";import"./Input-Dd8V6pYN.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./ValueStateMessage.css-C61ZdvXC.js";import"./Suggestions.css-DNN4WTtE.js";import"./ListBoxItemGroupTemplate-UMOtcqUV.js";import"./ComboBoxItemGroup-DyN_O1AM.js";import"./ListItemBaseTemplate-XMqPEKMa.js";import"./Token-CQTdwpxJ.js";import"./ScrollEnablement-D_xuZieI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-WRJ_4D.js";import"./ToggleButton-Cr7hkNto.js";import"./multiselect-all-BVy6T6bO.js";import"./SuggestionItem-Br9jPSr7.js";import"./index-BVuuRkkJ.js";import"./Option-EaORebIw.js";import"./index-B3m-2CpX.js";import"./SegmentedButton-DiE2PIs7.js";import"./index-K3c-KgVe.js";import"./Select-Ddna0J1l.js";import"./InvisibleMessage-tD1-WheS.js";import"./index-DdNzr3cY.js";import"./index-Ciqs7IaJ.js";import"./index-_tEk2Ep5.js";import"./index-B3U-GzKE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_937pQu.js";import"./group-2-Bnl5n-o-.js";import"./sort-descending-B6wckQ-f.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-i_OA1AiM.js";import"./utils-Bacr1bLf.js";import"./index-BMvMDeNG.js";import"./index-LL-cJ3gy.js";import"./index-DkfMYjPP.js";import"./navigation-down-arrow-CkUpvPU_.js";import"./navigation-right-arrow-BaP6uFWY.js";import"./navigation-right-arrow-BF8po_8E.js";import"./useCurrentTheme-DdIh3E30.js";import"./index-DzSim1oI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRqaQsDk.js";import"./paper-plane-nkcuGxCV.js";import"./index-gSABYD5Y.js";import"./less-Dq6KoCJo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
