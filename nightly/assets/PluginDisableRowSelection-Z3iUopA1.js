import{j as e}from"./iframe-D9fHiNXF.js";import{useMDXComponents as n}from"./index-DRx499Oz.js";import{I as r,F as s}from"./CommandsAndQueries-CDyFXIce.js";import{M as l,C as a}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import"./copy-FG9bHXhV.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Qm_vQfsf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPAjTpyE.js";import"./delete-kRoeeufp.js";import"./settings-BjOnEk3Y.js";import"./NoData-DS929yuO.js";import"./IllustratedMessage-D7rcrpEV.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-By9GXzdr.js";import"./index-BIpQKVrj.js";import"./index-uvfEns-9.js";import"./slim-arrow-down-COoxlr3U.js";import"./Input-CCJrpN8k.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./Suggestions.css-s007qcu9.js";import"./ListBoxItemGroupTemplate-fS2c8S8u.js";import"./ComboBoxItemGroup-w20Oyw65.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Token-CvyNfotg.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BBXUErcD.js";import"./ToggleButton-CVAyR1od.js";import"./SuggestionItem-BbBOeYnY.js";import"./index-BvApMHkq.js";import"./Option-55orDd_d.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";import"./index-Cw3jzX1x.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./index-Bnwbq-C5.js";import"./index-56WZLY9b.js";import"./index-BrYCVZew.js";import"./index-C-gG0abr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTaVzY2z.js";import"./group-2-ByHTkrwd.js";import"./sort-descending-CnESAHVK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DK0_Jxfh.js";import"./utils-4XJByc2K.js";import"./index-Mf30Azwl.js";import"./index-DWP_RQMm.js";import"./index-PLRKK6I8.js";import"./navigation-down-arrow-UUvc_8Lg.js";import"./navigation-right-arrow-Uxxzktt1.js";import"./navigation-right-arrow-bK8_sR2Z.js";import"./useCurrentTheme-DlC_INVQ.js";import"./index-uBbepzyZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByZPFV9T.js";import"./paper-plane-oz9CuSrg.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
