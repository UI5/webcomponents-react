import{j as e}from"./iframe-DM8isA9c.js";import{useMDXComponents as n}from"./index-Do0cpSGj.js";import{I as r,F as s}from"./CommandsAndQueries-DM-8oq2s.js";import{M as l,C as a}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import"./copy-DYIgCYkz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BU0X1VDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";import"./index-CNSbSmbI.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2oOM7FJV.js";import"./delete-DcA4Uhw4.js";import"./settings-BA2hgRK4.js";import"./NoData-ARVnaWFR.js";import"./IllustratedMessage-vNT1f4yz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BGQgzr7m.js";import"./index-Dy3LU6ky.js";import"./index-DHTTyH85.js";import"./slim-arrow-down-hG7sSDos.js";import"./Input-CVhk_ZAS.js";import"./ResponsivePopoverCommon.css-puXN3fh5.js";import"./ValueStateMessage.css-C0V4czBQ.js";import"./Suggestions.css-BYf_LmQ1.js";import"./ListBoxItemGroupTemplate-5cmjEtes.js";import"./ComboBoxItemGroup-Bv2u3bQ7.js";import"./ListItemBaseTemplate-TRbY2fc8.js";import"./Token-BPCkJQrI.js";import"./ScrollEnablement-UWaMLi5d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-I6nsPbjR.js";import"./ToggleButton-Vr7STsGZ.js";import"./SuggestionItem-BbXDukLp.js";import"./index-NSnuf4-P.js";import"./Option-CQJiT04F.js";import"./index-BX4ZAVg2.js";import"./SegmentedButton-B4cfzXrG.js";import"./index-BQBBMnNM.js";import"./Select-NIzcg6U7.js";import"./InvisibleMessage-BSV5Kw4P.js";import"./slim-arrow-down-C4n1wmA7.js";import"./index-C87A-yQY.js";import"./index-DQMuxlK5.js";import"./index-DoaqSk9p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ieaXo1Jb.js";import"./group-2-CSOTY4tP.js";import"./sort-descending-DzANS_Yh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLiaJqlG.js";import"./utils-BnZETQEG.js";import"./index-C--tGAzN.js";import"./index-D5piz367.js";import"./index-BrgcTCqT.js";import"./navigation-down-arrow-CbZ1RQpJ.js";import"./navigation-right-arrow-C5TkdaxP.js";import"./navigation-right-arrow-DJCwyzqc.js";import"./useCurrentTheme-goNF4eXV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWyu-On_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBtcGSGo.js";import"./paper-plane-DPYcr-IO.js";import"./index-l9sIIys5.js";import"./less-BmrMRYds.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
