import{j as e}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as n}from"./index-4_wYEVSM.js";import{I as r,F as s}from"./CommandsAndQueries-pWQonQL4.js";import{M as l,C as a}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import"./copy-DN4ABQ_i.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DLd06CvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CS-8nJYw.js";import"./delete-CLlnG484.js";import"./settings-envYxgNe.js";import"./NoData-MpM1Hboz.js";import"./IllustratedMessage-XiOi_O98.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CjSiJYQm.js";import"./index-Dkiu8AdL.js";import"./index-C0ZKe89Q.js";import"./slim-arrow-down-BP1y9etM.js";import"./Input-1lNxvEmx.js";import"./ResponsivePopoverCommon.css-Dby6EGP2.js";import"./ValueStateMessage.css-CRvqrXXK.js";import"./Suggestions.css-BOY3IfAD.js";import"./ListBoxItemGroupTemplate-r8OAnwHN.js";import"./ComboBoxItemGroup-B3ytlzdg.js";import"./ListItemBaseTemplate-D4Nb1LoU.js";import"./Token-DcgVtbgs.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxclopY-.js";import"./ToggleButton-QtBZvedq.js";import"./SuggestionItem-D5nxLtbB.js";import"./index-Tx9ELn6M.js";import"./Option-CoAxKOIy.js";import"./index-y6qVrFsN.js";import"./SegmentedButton-xuXIvZlA.js";import"./index-BIsBvoOA.js";import"./Select-BEsYKhUS.js";import"./InvisibleMessage-CFCay4kG.js";import"./slim-arrow-down-Bbv1i9W9.js";import"./index-T4Qk8jiD.js";import"./index-plyixF0d.js";import"./index-DsJZZm7i.js";import"./index-h8anB-3B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-TDf9rbaD.js";import"./group-2-BvoDnCtF.js";import"./sort-descending-FS751uDv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D06_Ki1H.js";import"./utils-C4L1GQet.js";import"./index-DuIEmgl0.js";import"./index-DD9TQMUS.js";import"./index-D8PWKVzq.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./useCurrentTheme-Db8jJ0JU.js";import"./index-DPB7aPUP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzZietn_.js";import"./paper-plane-CXGOFY1-.js";import"./index-C53XJ8_2.js";import"./less-bilrATQD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
