import{j as e}from"./iframe-DCGZQC_C.js";import{useMDXComponents as n}from"./index-B27pjG1H.js";import{I as r,F as s}from"./CommandsAndQueries-uRcRdUvd.js";import{M as l,C as a}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import"./copy-Dgi6mZSs.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-bNwjwoKI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJGP320l.js";import"./delete-D-YXkhYz.js";import"./settings-EzBVvhXz.js";import"./NoData-d8zem7tn.js";import"./IllustratedMessage-CnKX9Tk1.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BW9Ke9jf.js";import"./index-CDOC7J2z.js";import"./index-D9AJchIM.js";import"./slim-arrow-down-_wzxHbkz.js";import"./Input-CapffHTa.js";import"./ResponsivePopoverCommon.css-BzrCML3m.js";import"./ValueStateMessage.css-6-sNBRhm.js";import"./Suggestions.css-D-dnhNOf.js";import"./ListBoxItemGroupTemplate-D5dJg0Md.js";import"./ComboBoxItemGroup-DE6F-qf6.js";import"./ListItemBaseTemplate-YV074207.js";import"./Token-DFZIaINO.js";import"./ScrollEnablement-CyCwp6Jo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C870crTF.js";import"./ToggleButton-KP9Vp9HZ.js";import"./SuggestionItem-Cg4fIDOL.js";import"./index-DGZcKhxL.js";import"./Option-DRy9pd0C.js";import"./index-CZPGpqu0.js";import"./SegmentedButton-C6NTSQG1.js";import"./index-D-t5rWMX.js";import"./Select-CUh8OEwf.js";import"./InvisibleMessage-DhB_OnV_.js";import"./slim-arrow-down-CU9tdlgh.js";import"./index-BF-MYKhN.js";import"./index-BAw1abYZ.js";import"./index-AZB0cmnA.js";import"./index-DxcbSsdx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhdveqUE.js";import"./group-2-Bp8JlR3f.js";import"./sort-descending-dnuNk35a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DY9Skaqg.js";import"./utils-DSLZDD_H.js";import"./index-oHN5vii2.js";import"./index-BAnN4Y-3.js";import"./index-BIvqPmoD.js";import"./navigation-down-arrow-CV-2l1CK.js";import"./navigation-right-arrow-ZUNaJnHK.js";import"./navigation-right-arrow-CnOc_T30.js";import"./useCurrentTheme-GWaqzv3s.js";import"./index-BVvo881U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8FzRNE_C.js";import"./paper-plane-BS26Bbh6.js";import"./index-CIEm01bw.js";import"./less-b5IeAnHp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
