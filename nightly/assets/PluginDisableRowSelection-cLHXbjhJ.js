import{j as e}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as n}from"./index-D99mDNJl.js";import{I as r,F as s}from"./CommandsAndQueries-DoIIg28U.js";import{M as l,C as a}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import"./copy-o8vYo4aG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-1KeWr361.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./index-CQkucwsg.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBfXQqOD.js";import"./delete-UPYhhS75.js";import"./settings-BQIQCw26.js";import"./NoData-B27ZHA1s.js";import"./IllustratedMessage-CXJqRBtz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CHoVY10U.js";import"./index-ZdNquEyn.js";import"./index-CG20QFYC.js";import"./slim-arrow-down-DNm_LgPO.js";import"./Input-BsSjRDM5.js";import"./ResponsivePopoverCommon.css-CYgfaUoK.js";import"./ValueStateMessage.css-CpqZ_gjF.js";import"./Suggestions.css-QPEItX3L.js";import"./ListBoxItemGroupTemplate-C6jRHMwF.js";import"./ComboBoxItemGroup-CCSovVR5.js";import"./ListItemBaseTemplate-u7wLHgK7.js";import"./Token-CTyid79H.js";import"./ScrollEnablement-W5Wf5RR3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7bHN0O3.js";import"./ToggleButton-DeV44AnW.js";import"./SuggestionItem-CSPEj_XQ.js";import"./index-G1G_Ul-v.js";import"./Option-BHttWL89.js";import"./index-D07NgyYx.js";import"./SegmentedButton-DhoFROJQ.js";import"./index-HJOD6t4r.js";import"./Select-BxgNjt9h.js";import"./InvisibleMessage-CugcSZE6.js";import"./slim-arrow-down-Df8hY_AN.js";import"./index-D0AP3dKj.js";import"./index-CqRYtRVu.js";import"./index-D1q_umKP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlHrl19O.js";import"./group-2-FzrtZoEx.js";import"./sort-descending-DZyRlpy5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHLokQSX.js";import"./utils-D23r6WGI.js";import"./index-DEf-xWsx.js";import"./index-D88YKGSw.js";import"./index-DsLljGL1.js";import"./navigation-down-arrow-BbdKFfmI.js";import"./navigation-right-arrow-Bw3RXKs8.js";import"./navigation-right-arrow-C6IZxjIu.js";import"./useCurrentTheme-CVvxYTRR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ZaQ1AkQI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H9_uEIIc.js";import"./paper-plane-DhjbkpKT.js";import"./index-Byl3jNPv.js";import"./less-D_TW91Ya.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
