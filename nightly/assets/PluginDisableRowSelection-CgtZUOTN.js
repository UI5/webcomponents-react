import{j as e}from"./iframe-0eQE2YFm.js";import{useMDXComponents as n}from"./index-CrzDrume.js";import{I as r,F as s}from"./CommandsAndQueries-vs4Uf2fG.js";import{M as l,C as a}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import"./copy-BusSvtxV.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BFUnxggX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYg0i2eY.js";import"./delete-CoYQXplb.js";import"./settings-VZnwFT1a.js";import"./NoData-BQniyW5-.js";import"./IllustratedMessage-B0A1-0ks.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-teAEBMAS.js";import"./index-DB3CcisP.js";import"./index-D-LeeP8b.js";import"./slim-arrow-down-CkX7thXh.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./ListBoxItemGroupTemplate-H0m4nnsY.js";import"./ComboBoxItemGroup-rbI26ojW.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./Token-CIFLWQCf.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9gf_cfX.js";import"./ToggleButton-CRw4HV0q.js";import"./SuggestionItem-CGZYm_I2.js";import"./index-DYuYdSg5.js";import"./Option-CJ-Q9Osb.js";import"./index-DbU22zDM.js";import"./SegmentedButton-C0dzqyrm.js";import"./index-BuNlLbX6.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./index-CjCjG_de.js";import"./index-B6adVHqs.js";import"./index-CCMgeDTf.js";import"./index-YR2Vv4g_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqc3-cj.js";import"./group-2-LwVDXe1y.js";import"./sort-descending-DLo-C6x1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBbdY5LP.js";import"./utils-kn_XFzdZ.js";import"./index-BynfEZ9N.js";import"./index-IPEBGIZt.js";import"./index-Drp4RYe3.js";import"./navigation-down-arrow-BlUbHMqy.js";import"./navigation-right-arrow-BiBjVNSK.js";import"./navigation-right-arrow-BWLrQnKx.js";import"./useCurrentTheme-EU1exHdB.js";import"./index-CgfgYE9g.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bhd782rf.js";import"./paper-plane-DxvI1Ia-.js";import"./index-xSCZdNeR.js";import"./less-COfx4Qkm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
