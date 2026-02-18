import{j as e}from"./iframe-C125K5pw.js";import{useMDXComponents as n}from"./index-Bjpa6FGV.js";import{I as r,F as s}from"./CommandsAndQueries-ldqvUWJl.js";import{M as l,C as a}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import"./copy-CAIaKhcd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B5V7Jgia.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRi7r004.js";import"./delete-VcR_hMk7.js";import"./settings-CWzRvdF8.js";import"./NoData-KB6el7H0.js";import"./IllustratedMessage-CXh3bWR-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DU_FutSt.js";import"./index-DjvH2VLk.js";import"./index-qC8gqSc4.js";import"./slim-arrow-down-DjzmFdkh.js";import"./Input-DjEzLRgz.js";import"./ResponsivePopoverCommon.css-CBDbaQoK.js";import"./ValueStateMessage.css-HbxeHEGm.js";import"./Suggestions.css-Ip_-2ncf.js";import"./ListBoxItemGroupTemplate-CrA4icN9.js";import"./ComboBoxItemGroup-CqfU9sll.js";import"./ListItemBaseTemplate-DDC3KDiX.js";import"./Token-DqIEO0pH.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYRsCa9G.js";import"./ToggleButton-Civ_g9Ey.js";import"./SuggestionItem-HWID_xuJ.js";import"./index-mutglJDe.js";import"./Option-C4a1sy2E.js";import"./index-D-2SIQ7j.js";import"./SegmentedButton-CBAEd1y_.js";import"./index-Ddxh1zbZ.js";import"./Select-3j4-u7qz.js";import"./InvisibleMessage-ZuAMUP0A.js";import"./slim-arrow-down-DWd9421G.js";import"./index-DDVJF59Y.js";import"./index-BpfByow1.js";import"./index-DYXHSW4J.js";import"./index-CeMB97VO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BslYw4vv.js";import"./group-2-xdb4cINx.js";import"./sort-descending-CbDESvm8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CymctnkS.js";import"./utils-BP0nLIbG.js";import"./index-UdJktvhD.js";import"./index-DZ6xLZXa.js";import"./index-Bapg1jlH.js";import"./navigation-down-arrow-DdfI5AYL.js";import"./navigation-right-arrow-CIultdti.js";import"./navigation-right-arrow-jfn-V-8v.js";import"./useCurrentTheme-D0ZROOM1.js";import"./index-DJvLtzE7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-071s-nZz.js";import"./paper-plane-CGcqiSQu.js";import"./index-DlizPG_T.js";import"./less-BvWBky-G.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
