import{j as e}from"./iframe-NmUBSsgx.js";import{useMDXComponents as n}from"./index-CRhoqEbg.js";import{I as r,F as s}from"./CommandsAndQueries-B283QW5b.js";import{M as l,C as a}from"./blocks-DTOICRIr.js";import"./Tag-CGvSEzjs.js";import"./index-_FB6i7Kc.js";import"./copy-GTpWjg4q.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BdmzuHYk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";import"./index-IPiTIICp.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qeG1AqO_.js";import"./delete-DEPhuuaq.js";import"./settings-Cyxdm0Nk.js";import"./NoData-B6KSYL-o.js";import"./IllustratedMessage-DdeNwNSw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BO34x6dj.js";import"./index-DLhNLDc6.js";import"./index-Cj3f3kF_.js";import"./slim-arrow-down-6dDUHNFI.js";import"./Input-B-iDErUf.js";import"./ResponsivePopoverCommon.css-Cz3_sdnA.js";import"./ValueStateMessage.css-CFZb-9jD.js";import"./Suggestions.css-BoCoDiBj.js";import"./ListBoxItemGroupTemplate-zQW6ZUC2.js";import"./ComboBoxItemGroup-7Pb99NR8.js";import"./ListItemBaseTemplate-0kmMAOxg.js";import"./Token-_-XdJX9B.js";import"./ScrollEnablement-CNH3zFIj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtmjKC48.js";import"./ToggleButton-DjuG-WXr.js";import"./SuggestionItem-Bm8Gxsfv.js";import"./index-B45H_HZU.js";import"./Option-Bq-Ya3TK.js";import"./index-zsH8KEa_.js";import"./SegmentedButton-CtPav5U1.js";import"./index-Dg4r5IiO.js";import"./Select-CrzmsTjg.js";import"./InvisibleMessage-Bl0X301U.js";import"./slim-arrow-down-GCIgds5j.js";import"./index-D0JAzluc.js";import"./index-BdEYK8wt.js";import"./index-CkD5VO3t.js";import"./index-BGInPIaQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DiAgXsrv.js";import"./group-2-Di7D7LKg.js";import"./sort-descending-DGz0Lxww.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cszax4UQ.js";import"./utils-d7PmwSd5.js";import"./index-BpyFAkXm.js";import"./index-Nf3kUZlV.js";import"./index-CgVcHaZU.js";import"./navigation-down-arrow-GcnwT5yG.js";import"./navigation-right-arrow-BlpzX477.js";import"./navigation-right-arrow-BaXIb8U5.js";import"./useCurrentTheme-BYUbt-G2.js";import"./index-Xiezqhcu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dn68J-Xi.js";import"./paper-plane-gnHIKl6s.js";import"./index-BCra3Ghw.js";import"./less-C0zqkFIi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
