import{j as e}from"./iframe-BTfUB26H.js";import{useMDXComponents as n}from"./index-D3NtTefK.js";import{I as r,F as s}from"./CommandsAndQueries-BWcq9mTF.js";import{M as l,C as a}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import"./copy-D6Vht5qr.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BDMm55id.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdxJ9ktW.js";import"./delete-CosJh4Wr.js";import"./settings-CrkRTssd.js";import"./NoData-CrPB3Etw.js";import"./IllustratedMessage-Dp_vq7kO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DAE0PvWS.js";import"./index-G7JGBkSp.js";import"./index-Pc-tL94R.js";import"./slim-arrow-down-CkCy067l.js";import"./Input-CWdJBATj.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./ValueStateMessage.css-Bm4czFd-.js";import"./Suggestions.css-jfF4NP-_.js";import"./ListBoxItemGroupTemplate-Cxw4j-yj.js";import"./ComboBoxItemGroup-DsBDLMFu.js";import"./ListItemBaseTemplate-rG4H0Nai.js";import"./Token-peOfkrul.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeqJjBCf.js";import"./ToggleButton-CSUeQtqf.js";import"./SuggestionItem-DzkIs1mi.js";import"./index-0LZOa3fr.js";import"./Option-BzMwM8BQ.js";import"./index-BhAUVSXr.js";import"./SegmentedButton-8xKdGXJZ.js";import"./index-B3gpN7Aw.js";import"./Select-wjPPEddq.js";import"./InvisibleMessage-D6rgIzPo.js";import"./slim-arrow-down-COQfF4eP.js";import"./index-C0hZMZOj.js";import"./index-DSWytDHX.js";import"./index-BV2bpcIG.js";import"./index-kc3KkV9f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r6JXO5z-.js";import"./group-2-Cie4H57f.js";import"./sort-descending-bkkz2k_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b_pilGpL.js";import"./utils-DHZMQwFC.js";import"./index-Bx4wP1U8.js";import"./index-Cy-22xtZ.js";import"./index-CcPafi79.js";import"./navigation-down-arrow-DMFBeJkE.js";import"./navigation-right-arrow-B_x4oAAg.js";import"./navigation-right-arrow-ycb02zKK.js";import"./useCurrentTheme-CD8arqKb.js";import"./index-CwyI01PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-b3M525lM.js";import"./paper-plane-BssdKFPE.js";import"./index-CsvZqpSl.js";import"./less-CyWGcd4R.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
