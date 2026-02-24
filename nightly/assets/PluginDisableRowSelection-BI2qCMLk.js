import{j as e}from"./iframe-DT5KgGlD.js";import{useMDXComponents as n}from"./index-2sr9OpVj.js";import{I as r,F as s}from"./CommandsAndQueries-DUx0SL0h.js";import{M as l,C as a}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import"./copy-Cn_--9_F.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CsveTDJU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./index-DyR_rB-Y.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWKoSmBW.js";import"./delete-CohcJEgP.js";import"./settings-BewuPKdX.js";import"./NoData-DltE47q7.js";import"./IllustratedMessage-BawN7Wqr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DgTqDT0D.js";import"./index-BJ6ykXKR.js";import"./index-B8f0YgKC.js";import"./slim-arrow-down-BCtN8SJB.js";import"./Input-I-AKHfs1.js";import"./ResponsivePopoverCommon.css-BPBhFUbf.js";import"./ValueStateMessage.css-BGYmnVw2.js";import"./Suggestions.css-DA2UVS5X.js";import"./ListBoxItemGroupTemplate-Cd3zTBbN.js";import"./ComboBoxItemGroup-BpsJm26p.js";import"./ListItemBaseTemplate-C16Cppj1.js";import"./Token-DlKQA3E2.js";import"./ScrollEnablement-CAbtfiLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-pC6bfYbG.js";import"./ToggleButton-BsvGKjKP.js";import"./SuggestionItem-Be5m2pdi.js";import"./index-BxTPhBvm.js";import"./Option-D0YYNVbE.js";import"./index-CK2Bq9ni.js";import"./SegmentedButton-CSjW8EsR.js";import"./index-JEQwvvE3.js";import"./Select-BWRVl5xO.js";import"./InvisibleMessage-Bxlb59Q-.js";import"./slim-arrow-down-CJxt2IBk.js";import"./index-BZK44fn8.js";import"./index-Cvxmvmd5.js";import"./index-1OsylIRz.js";import"./index-CyPn5paG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqCcIIbC.js";import"./group-2-k0-NGrpU.js";import"./sort-descending-CGv5TfNy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DIGppw86.js";import"./utils-D33GDmvH.js";import"./index-Cod7H4Q4.js";import"./index-DuzRGPxi.js";import"./index-CdxdX8AI.js";import"./navigation-down-arrow-CfkoPZ7s.js";import"./navigation-right-arrow-qrJ8C8QD.js";import"./navigation-right-arrow-D4lDQVr2.js";import"./useCurrentTheme-DaZyrile.js";import"./index-z1-YLvBX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ngYbJf9G.js";import"./paper-plane-K2_yiYx7.js";import"./index-_z6JI7Dv.js";import"./less-BJWr5WMr.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
