import{j as e}from"./iframe-DpsLP052.js";import{useMDXComponents as n}from"./index-_rtImS1W.js";import{I as r,F as s}from"./CommandsAndQueries-B3V0wcrs.js";import{M as l,C as a}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import"./copy-LcJtQKoV.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BiiTXgeW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./index-BB8Wt2y3.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CGzrYtwa.js";import"./delete-Dbf_1wPE.js";import"./settings-zqDLAE3N.js";import"./NoData-DUuxZZ1C.js";import"./IllustratedMessage-kZjgaFOd.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dwkdf2hQ.js";import"./index-Bqb9AwRH.js";import"./slim-arrow-down-DDNi_5CI.js";import"./Input-CWGfSp5U.js";import"./ResponsivePopoverCommon.css-CLt9oG7E.js";import"./ValueStateMessage.css-D6BpVT04.js";import"./Suggestions.css-Bv-BnXKd.js";import"./ListBoxItemGroupTemplate-Bqw0C63O.js";import"./ComboBoxItemGroup-BMVuDglg.js";import"./ListItemBaseTemplate-D8JPghtX.js";import"./Token-CmgxmMQz.js";import"./ScrollEnablement-CM-OLTq5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Br3a0ITv.js";import"./ToggleButton-CrSFgh3U.js";import"./SuggestionItem-Xl-bnkLq.js";import"./index-Bc8BPd5w.js";import"./Option-mD3vqu1C.js";import"./index-C4sMv6EO.js";import"./SegmentedButton-dDZ3CxOs.js";import"./index-C5KfMTBY.js";import"./Select-YEgqnweu.js";import"./InvisibleMessage-5ZJM9qmO.js";import"./slim-arrow-down-DWqLlwo-.js";import"./useIsRTL-B3wzcp6-.js";import"./index-DFVo37t3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo3WWELa.js";import"./group-2-DbErn0S1.js";import"./sort-descending-BGRIvHpc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-yG3MGDtB.js";import"./utils-CGzSA5lO.js";import"./index-YJAd7IRL.js";import"./index-mOgpIW1K.js";import"./index-C0b-uTCQ.js";import"./navigation-down-arrow-DD5HAM7_.js";import"./navigation-right-arrow-CqGCK0sE.js";import"./navigation-right-arrow-DgJX-CjS.js";import"./useCurrentTheme-C3CBqbfX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2AHD0GI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-TCDO9g4Q.js";import"./index-CL9k8PLN.js";import"./less-DssSCfkW.js";import"./index-9Trclp5j.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
