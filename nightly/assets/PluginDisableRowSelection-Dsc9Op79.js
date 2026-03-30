import{j as e}from"./iframe-QfBB5oxv.js";import{u as n,M as r,C as s}from"./blocks-BNoxk89Z.js";import{I as l}from"./CommandsAndQueries-CHXq-8GX.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import"./copy-Ddev0qyd.js";import{F as a}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B6o6xcm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNErvuHa.js";import"./delete-ChbxvCaX.js";import"./settings-BJf-PQsO.js";import"./NoData-DgG04WAC.js";import"./NoFilterResults-BU08mcFJ.js";import"./index-BW8anNwZ.js";import"./IllustratedMessage-B0tuKdc_.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CzounWiX.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./ListBoxItemGroupTemplate-KaiE3Akg.js";import"./ComboBoxItemGroup-BYlx2q4W.js";import"./ListItemBaseTemplate-Dh63WkMo.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ToggleButton-BzWglLQm.js";import"./multiselect-all-DvkYK6cA.js";import"./SuggestionItem-BX-RC-Ep.js";import"./index-DxqVVwu_.js";import"./Option-PTtFyRUo.js";import"./index-D6pqZsOu.js";import"./SegmentedButton-ChlAck0v.js";import"./index-Dvo2DlNr.js";import"./Select-DcyuEmeq.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-CNet7Rn8.js";import"./index-BhwDH-EY.js";import"./index-ChcMW--M.js";import"./index-CEP4QNMA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Duv1kUg0.js";import"./group-2-DOvkGS22.js";import"./sort-descending-ARK23MyZ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cpx9pvDO.js";import"./utils-Gg7Ythg5.js";import"./index-eHKj1k2p.js";import"./index-_er2dUIp.js";import"./index-COg9gy3g.js";import"./navigation-down-arrow-DINT9BlU.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./useCurrentTheme-CclwzgwB.js";import"./index-ClULG3sl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPTRgBT8.js";import"./paper-plane-BEUN1GKr.js";import"./index-CB8cZ3hf.js";import"./less-Bm7RlntL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
