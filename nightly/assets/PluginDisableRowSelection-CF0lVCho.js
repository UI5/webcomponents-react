import{j as e}from"./iframe-JQDqhQTc.js";import{useMDXComponents as n}from"./index-SjG54pW2.js";import{I as r,F as s}from"./CommandsAndQueries-Crv-3Mfa.js";import{M as l,C as a}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import"./copy-t9TmEwA0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-HEUlY7W4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fCo2PB5C.js";import"./delete-CLRGeIuZ.js";import"./settings-H07MeRfs.js";import"./NoData-DPeONLDW.js";import"./IllustratedMessage-DAIw2KHQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-1p37yV.js";import"./index-DirchfVR.js";import"./index-D6Ko23ug.js";import"./slim-arrow-down-DtGaajwt.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./ListBoxItemGroupTemplate-DEm09n7m.js";import"./ComboBoxItemGroup-DMLXAAki.js";import"./ListItemBaseTemplate-Dxaw3pkc.js";import"./Token-C9iKSxX5.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DASuqUXG.js";import"./ToggleButton--p8Szuzt.js";import"./SuggestionItem-BAKzXr6j.js";import"./index-DvnAgan1.js";import"./Option-CEDBR-Bt.js";import"./index-eBAbrGNN.js";import"./SegmentedButton-Rqs6WWYK.js";import"./index-Y1J8yyR5.js";import"./Select-DfABSeaX.js";import"./InvisibleMessage-CFQZBAEm.js";import"./slim-arrow-down-CnNq3tWC.js";import"./index-D31LJD9X.js";import"./index-8ECVBj85.js";import"./index-BbzV54Ib.js";import"./index-CV-nf5lU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdWNEJu_.js";import"./group-2-BZUFZ_mF.js";import"./sort-descending-BXUKtHbT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fI0mUgfo.js";import"./utils-BBO9bjZR.js";import"./index-BaCIHOce.js";import"./index-mdq0FRsA.js";import"./index-Bz-Pghpc.js";import"./navigation-down-arrow-B-pSqjVl.js";import"./navigation-right-arrow-C9hFnSZf.js";import"./navigation-right-arrow-D5ZYuJjY.js";import"./useCurrentTheme-dEMZXqrK.js";import"./index-yCViCBv9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzjLx_qb.js";import"./paper-plane-CNtGouJp.js";import"./index-C5yyMQAi.js";import"./less-CNnQlmUL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
