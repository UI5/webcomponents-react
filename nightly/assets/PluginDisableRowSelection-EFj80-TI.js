import{j as e}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as n}from"./index-D0O3WS9u.js";import{I as r,F as s}from"./CommandsAndQueries-BbCratpG.js";import{M as l,C as a}from"./blocks-DQpqsYLC.js";import"./Tag-DXMLJOuX.js";import"./index-nlWOetEC.js";import"./copy-BxlHwQsP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CYHoBY8v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./index-DLHjFZTm.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dkAXnipr.js";import"./delete-BYhpf2jF.js";import"./settings-BZhNQSdh.js";import"./NoData-BOK9z97z.js";import"./IllustratedMessage-BJD0KkWB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-lmbuGEH-.js";import"./index-DzrRbZFE.js";import"./index-De6Jkvg9.js";import"./slim-arrow-down-KQetxSCA.js";import"./Input-DUm1g3II.js";import"./ResponsivePopoverCommon.css-0gtwTwlc.js";import"./ValueStateMessage.css-CqzpiX8G.js";import"./Suggestions.css-C-TebQWZ.js";import"./ListBoxItemGroupTemplate-Bao4syhQ.js";import"./ComboBoxItemGroup-sVlirqx1.js";import"./ListItemBaseTemplate-BQNNSgaC.js";import"./Token-DRKQmCcw.js";import"./ScrollEnablement-Ba4Wf0S8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QXpolB0M.js";import"./ToggleButton-wPcmOR8q.js";import"./SuggestionItem-u0isYGwD.js";import"./index-BE5XNI17.js";import"./Option-DURHFvsu.js";import"./index-Dn60_PGH.js";import"./SegmentedButton--YNa3vua.js";import"./index-D3ZVC3jU.js";import"./Select-DjzM7l1z.js";import"./InvisibleMessage-DOS3eHIH.js";import"./slim-arrow-down-tdJshJ_8.js";import"./index-B6XxYOg-.js";import"./index-DihO4jCR.js";import"./index-zvcZ-4bx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6frFTFpf.js";import"./group-2-Yb8lcurx.js";import"./sort-descending-B0xSjoj0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UQjpo2rY.js";import"./utils-_2mEl_F_.js";import"./index-XYGDqR0-.js";import"./index-B8bpeD_U.js";import"./index-DA4_n7ku.js";import"./navigation-down-arrow-C202Rycb.js";import"./navigation-right-arrow-CK8BM-ml.js";import"./navigation-right-arrow-DGzC3PDm.js";import"./useCurrentTheme-ljABpVn3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DfUhPIiB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-GvvBhc-H.js";import"./paper-plane-DxCnK-Wp.js";import"./index-DyLYJM1Y.js";import"./less-L4Koo52C.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
