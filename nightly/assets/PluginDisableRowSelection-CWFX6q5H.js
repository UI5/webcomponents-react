import{j as e}from"./iframe-CJRlzZgA.js";import{useMDXComponents as n}from"./index-CbUzkcD0.js";import{I as r,F as s}from"./CommandsAndQueries-BJK9fmCd.js";import{M as l,C as a}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import"./copy-Dm16cUhk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DW5PTlme.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-CEi9QmXA.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3AIhspr.js";import"./delete-ydvJCLPE.js";import"./settings-CwGuwL1v.js";import"./NoData-fDkpn7tb.js";import"./IllustratedMessage-QOrTuGKl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BDYYJsa3.js";import"./index-BRkvunxZ.js";import"./index-ekmQbjwp.js";import"./slim-arrow-down-DiV8d_6M.js";import"./Input-C30iTws-.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./ValueStateMessage.css-C9MjG1UC.js";import"./Suggestions.css-BN5UKDJ_.js";import"./ListBoxItemGroupTemplate-gk9whGYw.js";import"./ComboBoxItemGroup-C468Z6Iw.js";import"./ListItemBaseTemplate-DnIFmn4i.js";import"./Token-BD4i_ui4.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-e2XpTMq4.js";import"./ToggleButton-B58O1JBR.js";import"./SuggestionItem-BhyM5wBT.js";import"./index-DMNOa0He.js";import"./Option-Bpa9ANqG.js";import"./index-D1wEGHKD.js";import"./SegmentedButton-SYhHQ9Ej.js";import"./index-Bxs6OwGY.js";import"./Select-OuFKxvFI.js";import"./InvisibleMessage-CDDqZbGd.js";import"./slim-arrow-down-BXVf3KJB.js";import"./index-Bb37Af0B.js";import"./index-CJGz6QVU.js";import"./index-C5HXwY5m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOoWNgu.js";import"./group-2-MVpHsjQq.js";import"./sort-descending-nGGv56wH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DICMjLbX.js";import"./utils-7UT6I4G8.js";import"./index-FDtWMB9q.js";import"./index-qQGf4ufv.js";import"./index-Dw_yibZ5.js";import"./navigation-down-arrow-DkHsoxHK.js";import"./navigation-right-arrow-Qe6XxWFz.js";import"./navigation-right-arrow-SD2DKsNp.js";import"./useCurrentTheme-DEkoUSWw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cbymz11o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7Tcv1Md.js";import"./paper-plane-Bz4OZEc2.js";import"./index-D0vK_QOP.js";import"./less-Dd1e4dTk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
