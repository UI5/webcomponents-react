import{j as e}from"./iframe-datodc_T.js";import{useMDXComponents as n}from"./index-c_OJYfdv.js";import{I as r,F as s}from"./CommandsAndQueries-9K4be_0B.js";import{M as l,C as a}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import"./copy-fv_X0Lju.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BaM2_rwk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./index-CjE0y9ul.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAzHk7rR.js";import"./delete-DXGxUBFJ.js";import"./settings-CnIM11gG.js";import"./NoData-Bg_nN4Ms.js";import"./IllustratedMessage-FAiLLqQm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_Ze1Ot5.js";import"./index-DL49zsqR.js";import"./index-Dm0QMFQr.js";import"./slim-arrow-down-BpOTE9Sk.js";import"./Input-CDJ2DRSv.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./ValueStateMessage.css-CEIz9T_f.js";import"./Suggestions.css-ChFuC62o.js";import"./ListBoxItemGroupTemplate-xCqQRAqq.js";import"./ComboBoxItemGroup-BQPgaauk.js";import"./ListItemBaseTemplate-BzV0IEmk.js";import"./Token-CJyx5jqh.js";import"./ScrollEnablement-D4RYTcKh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6D8woMn.js";import"./ToggleButton-BVZwG_x-.js";import"./SuggestionItem-CqDeh5_U.js";import"./index-CbCR8boR.js";import"./Option-CVMzB-n9.js";import"./index-D9bgmN4m.js";import"./SegmentedButton-CtnCASEY.js";import"./index-DZXo1Lf-.js";import"./Select-K4JlHpwq.js";import"./InvisibleMessage-DefiGhym.js";import"./slim-arrow-down-CHOtDAsV.js";import"./index-DREcmMyl.js";import"./index-CeAFf5ct.js";import"./index-BcGlK5zk.js";import"./index-C_9-hdCb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BPHKdgmP.js";import"./group-2-BVTcmh9u.js";import"./sort-descending-COPXAaLI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FSQedhzd.js";import"./utils-CpZ624O0.js";import"./index-Bxul-iwv.js";import"./index-aiYgqcNK.js";import"./index-BN9iyOuA.js";import"./navigation-down-arrow-BZsH8zxo.js";import"./navigation-right-arrow-S8XLmecj.js";import"./navigation-right-arrow-9AFNUP8t.js";import"./useCurrentTheme-D5sOw72D.js";import"./index-nqz7Kjs0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csf7JH7H.js";import"./paper-plane-Dsk0svE7.js";import"./index-DLlxXcZX.js";import"./less-DpRUb2Cv.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
