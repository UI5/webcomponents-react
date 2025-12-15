import{j as e}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as n}from"./index-DeQCSiR4.js";import{I as r,F as s}from"./CommandsAndQueries-Cf1MLqXD.js";import{M as l,C as a}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import"./copy-Be-lNgbc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bt31hbU3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChrpHlfC.js";import"./delete-BSkNZk9a.js";import"./settings-BZAstzzV.js";import"./NoData-B7Xju4kG.js";import"./IllustratedMessage-DukG7yhw.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BbeE78Q0.js";import"./index-x_xy1BHi.js";import"./index-H8rccFLG.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./ListBoxItemGroupTemplate-Br9ejLAN.js";import"./ComboBoxItemGroup-CUEsofUs.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./Token-D5BZ8KYH.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZE_TKuw.js";import"./ToggleButton-gKHZK2VB.js";import"./SuggestionItem-DbqPCxiF.js";import"./index-NVwWghin.js";import"./Option-CxVq6N4O.js";import"./index-BYQIMVDt.js";import"./SegmentedButton-BKvVXXll.js";import"./index-C-F46hMK.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./index-z2bdi1aG.js";import"./index-BrTp8toc.js";import"./index-D5hGOmgy.js";import"./index-DXiNIq2l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVRvHvKO.js";import"./group-2-CUJNm4aZ.js";import"./sort-descending-pwGpDMpi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQLAXfyy.js";import"./utils-CrwBT7wM.js";import"./index-CksZPEzU.js";import"./index-DWNu3BWC.js";import"./index-DVt-pam0.js";import"./navigation-down-arrow-DfpRpy8j.js";import"./navigation-right-arrow-B83gJnhp.js";import"./navigation-right-arrow-BXtSSW1B.js";import"./useCurrentTheme-B1tmSyF5.js";import"./index-CwLMJfdZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-eqRVZ4IM.js";import"./paper-plane-CA-wmpkx.js";import"./index-vSaJtfoQ.js";import"./less-BVu6NBS-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
