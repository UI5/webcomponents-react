import{j as e}from"./iframe-mz-DPMfO.js";import{useMDXComponents as n}from"./index-BQe-Y6f4.js";import{I as r,F as s}from"./CommandsAndQueries-CNdgb_xD.js";import{M as l,C as a}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import"./copy-40awRikg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B0z8hj4E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cm2BS3GA.js";import"./delete-G5EHOAnz.js";import"./settings-CsivxwAE.js";import"./NoData-BxE6Tv_8.js";import"./IllustratedMessage-DSE8qKy3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DxOlC27G.js";import"./index-DNTjClb-.js";import"./index-HIa2ArXa.js";import"./slim-arrow-down-D5GhCIze.js";import"./Input-DKhFBeXu.js";import"./ResponsivePopoverCommon.css-Dw0qvCvb.js";import"./ValueStateMessage.css-aIP2Mnhs.js";import"./Suggestions.css-fWWNrwHO.js";import"./ListBoxItemGroupTemplate-nanEm9hw.js";import"./ComboBoxItemGroup-Dvkzxw9l.js";import"./ListItemBaseTemplate-UDeydQID.js";import"./Token-zxfxV2UY.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8bDYcBG.js";import"./ToggleButton-BX6-NLYV.js";import"./SuggestionItem-D4XueI-M.js";import"./index-BT-CCgox.js";import"./Option-C3T5_tXM.js";import"./index-BfUyajly.js";import"./SegmentedButton-DllV5zlW.js";import"./index-DDRv_OXW.js";import"./Select-BdUDnM2I.js";import"./InvisibleMessage-BIbkbdCE.js";import"./slim-arrow-down-Bk0xFqDz.js";import"./index-DKMucjjn.js";import"./index-D6PoFlyg.js";import"./index-CNllsCPa.js";import"./index-CDMzJTvn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DA7T2Rl3.js";import"./group-2-Bwsdx7qx.js";import"./sort-descending-Btj6h9pS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5M6Mwa8.js";import"./utils-DCG9zNvg.js";import"./index-DIJKpGCJ.js";import"./index-DWu6poIj.js";import"./index-DiIoiFSd.js";import"./navigation-down-arrow-CBdPnBQr.js";import"./navigation-right-arrow-DIpgwEVw.js";import"./navigation-right-arrow-C1ncpOSj.js";import"./useCurrentTheme-BtI3wPUE.js";import"./index-Bi5Z9u5V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcIdQY8X.js";import"./paper-plane-DQSNVPXE.js";import"./index-Bv3BJuLo.js";import"./less-DD1AM41T.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
