import{j as e}from"./iframe-DXIHBwMx.js";import{useMDXComponents as n}from"./index-DxplZHhB.js";import{I as r,F as s}from"./CommandsAndQueries-Bq7v73lL.js";import{M as l,C as a}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import"./copy-yrZW5TrM.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dl31wauj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8OeK81d.js";import"./delete-C-OqTYsp.js";import"./settings-VW8oUHKP.js";import"./NoData-BFUXMVZV.js";import"./IllustratedMessage-CWu0Y4jx.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bp86e7JW.js";import"./index-CtFtlX5A.js";import"./index-DIbDvrTC.js";import"./slim-arrow-down-CMiqRMch.js";import"./Input-DKRggLIE.js";import"./ResponsivePopoverCommon.css-IT2s9x-e.js";import"./ValueStateMessage.css-BSBeeufO.js";import"./Suggestions.css-0mCo8ev-.js";import"./ListBoxItemGroupTemplate-CqnuO2NN.js";import"./ComboBoxItemGroup-DdSoCWpT.js";import"./ListItemBaseTemplate-BNMak7oT.js";import"./Token-DjZ5IwOr.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BA8y93oi.js";import"./ToggleButton-CctemxJS.js";import"./SuggestionItem-BgT2Te5p.js";import"./index-CGQFU_4D.js";import"./Option-CvKMeDMq.js";import"./index-qj4c4wBb.js";import"./SegmentedButton-D-tRNffC.js";import"./index-DcWs1wPd.js";import"./Select-CGo-0QVC.js";import"./InvisibleMessage-Baq9lBY3.js";import"./slim-arrow-down-CTJD6opM.js";import"./index-wL-q4Fof.js";import"./index-kVbMjwdW.js";import"./index-ztofxTu6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqeorvhQ.js";import"./group-2-CbYCsJdZ.js";import"./sort-descending-Du_3xiim.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-uQRkwGba.js";import"./utils-CpTj5Wev.js";import"./index-Ltqvt3ql.js";import"./index-Bp-ixfoG.js";import"./index-DeY_iIAn.js";import"./navigation-down-arrow-tTyMgTsU.js";import"./navigation-right-arrow-3RPrvjsM.js";import"./navigation-right-arrow-Cp4Bs5Ws.js";import"./useCurrentTheme-DTBV76rd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-MOF2JPzV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B3qUjlQu.js";import"./paper-plane-CySSYvuC.js";import"./index-Cz8FWMC8.js";import"./less-CtdFYUXb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
