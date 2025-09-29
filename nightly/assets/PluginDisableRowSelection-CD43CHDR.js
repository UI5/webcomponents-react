import{j as e}from"./iframe-Cg7074Vs.js";import{useMDXComponents as n}from"./index-B5B2jkkb.js";import{I as r,F as s}from"./CommandsAndQueries-DSm4BCv_.js";import{M as l,C as a}from"./blocks-BJCse0Pu.js";import"./Tag-8TeQfEXQ.js";import"./index-BdM5BPiw.js";import"./copy-elFt8Bkr.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DB7bOgxj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./index-mLpQh_nH.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2Ug-I5GK.js";import"./delete--5HWma0M.js";import"./settings-0SSM_tTW.js";import"./NoData-MAiINvvS.js";import"./IllustratedMessage-CibW_qhD.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CxBnrX7K.js";import"./index-jJgsyHr_.js";import"./slim-arrow-down-D-JY4uAS.js";import"./Input-BD7L5txf.js";import"./ResponsivePopoverCommon.css-B9VO2EzZ.js";import"./ValueStateMessage.css-BaLqYwfA.js";import"./Suggestions.css-Dh3K_-nA.js";import"./ListBoxItemGroupTemplate-DNrp4lOn.js";import"./ComboBoxItemGroup-SLBX6ua1.js";import"./ListItemBaseTemplate-5yA7A_oj.js";import"./Token-BenxG4sL.js";import"./ScrollEnablement-Dvz9XJ8X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcC-VMWt.js";import"./ToggleButton-r-kl1SYq.js";import"./SuggestionItem-BYcjaliO.js";import"./index-DMh-3Scq.js";import"./Option-BSZEIO4X.js";import"./index-VfW2tHBs.js";import"./SegmentedButton-By1ReAJr.js";import"./index-DAhqLvsW.js";import"./Select-NMsxQzOK.js";import"./InvisibleMessage-_ZJ38xGN.js";import"./slim-arrow-down-B1zfSySI.js";import"./index-DjuwfncQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGEQdFQj.js";import"./group-2-DvxIcRzE.js";import"./sort-descending-BX6MO7zF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fGLyeaeN.js";import"./utils-cn5t3TkC.js";import"./index-Bs1zlC6y.js";import"./index-BXF0zUM9.js";import"./index-B1IDkjTW.js";import"./navigation-down-arrow-S78-tx2_.js";import"./navigation-right-arrow-C7Vi-bEV.js";import"./navigation-right-arrow-BTMb-YMq.js";import"./useCurrentTheme-ULT6chda.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbJ0m2qX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFLUuD9e.js";import"./paper-plane-CUrslyrM.js";import"./index-DAFr-zZ2.js";import"./less-2sbOJ1tj.js";import"./index-BBUpAwBe.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
