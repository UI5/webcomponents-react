import{j as e}from"./iframe-C7GsLKpM.js";import{useMDXComponents as n}from"./index-fgJud-zp.js";import{I as r,F as s}from"./CommandsAndQueries-zRxhXSXv.js";import{M as l,C as a}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import"./copy-DEZSjQMA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B2fKbP8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./index-Bitbggm1.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAgadqAL.js";import"./delete-bz-6EPJB.js";import"./settings-DBygnMxF.js";import"./NoData-CTrYoSgm.js";import"./IllustratedMessage-BGIM0Nd-.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DaD8OOim.js";import"./index-CKlIVxrI.js";import"./index-ijI2PEj_.js";import"./slim-arrow-down-C4n298oD.js";import"./Input-9fOmwmcP.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./ValueStateMessage.css-DNVmRxxJ.js";import"./Suggestions.css-UxMCDVF9.js";import"./ListBoxItemGroupTemplate-JmLdb2e2.js";import"./ComboBoxItemGroup-jcs7SEnT.js";import"./ListItemBaseTemplate-Zu8EKxdQ.js";import"./Token-CetmLQwP.js";import"./ScrollEnablement-CT_L3ouW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvfqPVMA.js";import"./ToggleButton-Sfk0hOkH.js";import"./SuggestionItem-DS4QbjGm.js";import"./index-MQHeIURy.js";import"./Option-BRgoDucR.js";import"./index-Df1cP14l.js";import"./SegmentedButton-CX6DYaOW.js";import"./index-Dkt3Rj2j.js";import"./Select-CacmHiKo.js";import"./InvisibleMessage-pKkBY45z.js";import"./slim-arrow-down-D1IgipIY.js";import"./index-BIzmAJhJ.js";import"./index-DAFFpok7.js";import"./index-Carv-kxu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbLf7ryM.js";import"./group-2-Cahp2hEa.js";import"./sort-descending-DDu_wB3P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-eDA8HHQT.js";import"./utils-5pKaz8Dq.js";import"./index-C_uQe8JR.js";import"./index-C3OJ4ssE.js";import"./index-L3JtXj-B.js";import"./navigation-down-arrow-B4J5Ds5O.js";import"./navigation-right-arrow-Cqg0RIxe.js";import"./navigation-right-arrow-C0UEuokw.js";import"./useCurrentTheme-yYLHFo3n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BiZwHfQ9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xGcqCfh3.js";import"./paper-plane-DVE1JtVi.js";import"./index-uv_n3kbk.js";import"./less-BSXzHnZn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
