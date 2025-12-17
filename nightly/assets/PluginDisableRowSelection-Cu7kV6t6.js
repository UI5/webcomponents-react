import{j as e}from"./iframe-CGBVIl7z.js";import{useMDXComponents as n}from"./index-BD_J3XGh.js";import{I as r,F as s}from"./CommandsAndQueries-C4N9Si-I.js";import{M as l,C as a}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import"./copy-C7UfB3Pq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-93nu5OR0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./index-DBko667H.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BbZZNUsr.js";import"./delete-C3rYTSL-.js";import"./settings-CKuItMTt.js";import"./NoData-Dm6kMAy2.js";import"./IllustratedMessage-CTltc4_9.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CpKRdgwe.js";import"./index-BZjO0-60.js";import"./index-5iKNMBkt.js";import"./slim-arrow-down-DSmgoUyO.js";import"./Input-Cur_CxV7.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./ValueStateMessage.css-ZMC4oIfX.js";import"./Suggestions.css-Dz1M5Owd.js";import"./ListBoxItemGroupTemplate-dm5g8U8i.js";import"./ComboBoxItemGroup-BIxiJRMG.js";import"./ListItemBaseTemplate-BaXxQQnP.js";import"./Token-CE1htzEf.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DiNPNXGG.js";import"./ToggleButton-CVtQcDrs.js";import"./SuggestionItem-Df3g5KQn.js";import"./index-DpM-2fz6.js";import"./Option-CvdkhOTv.js";import"./index-DV-PpZP-.js";import"./SegmentedButton-DBCXGQvu.js";import"./index-TJX9m1a2.js";import"./Select-D5t1jG8r.js";import"./InvisibleMessage-DctrIzSe.js";import"./slim-arrow-down-BaoK7UDp.js";import"./index-BSrWHRA1.js";import"./index-emiTK6If.js";import"./index-CSp7PIo2.js";import"./index-DMJbwVLL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BSZDY7W6.js";import"./group-2-D1Tb-82k.js";import"./sort-descending-Cm59fUND.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lmEdkW8S.js";import"./utils-B949wPYJ.js";import"./index-CitGks-I.js";import"./index-Dij-55P_.js";import"./index-CMkS8dBX.js";import"./navigation-down-arrow-Bb7YkKYC.js";import"./navigation-right-arrow-D7n-L5RI.js";import"./navigation-right-arrow-DwW5Vw29.js";import"./useCurrentTheme-Dy8jCwh1.js";import"./index-CVZ8d7gP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuSadHsH.js";import"./paper-plane-DGK7y6EI.js";import"./index-UFJ9xqAU.js";import"./less-VoFt1pb9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
