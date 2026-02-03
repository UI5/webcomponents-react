import{j as e}from"./iframe-D8-BDgf_.js";import{useMDXComponents as n}from"./index-C9C5bcry.js";import{I as r,F as s}from"./CommandsAndQueries-DdekYtZs.js";import{M as l,C as a}from"./blocks-BAPiaHIf.js";import"./Tag-94uJ1S6F.js";import"./index-Bpoq7VNX.js";import"./copy-D8ENGf86.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B7FBwI18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./index-CkF5m5P2.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BozETG9q.js";import"./delete-CGuxUIRO.js";import"./settings-CuToJbU1.js";import"./NoData-D5TRA1yr.js";import"./IllustratedMessage-EI-iyKnx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmaA6uVZ.js";import"./index-AvdY3uSx.js";import"./index-9ZsF7KxK.js";import"./slim-arrow-down-p7BE2Hmw.js";import"./Input-D_T5qhyo.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./ValueStateMessage.css-tSbLyNmJ.js";import"./Suggestions.css-CCFYMh7W.js";import"./ListBoxItemGroupTemplate-BrwhGVvC.js";import"./ComboBoxItemGroup-CjkRFxCX.js";import"./ListItemBaseTemplate-AGmUOsl7.js";import"./Token-Dz00xiyc.js";import"./ScrollEnablement-C7ow4jI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWDqgljt.js";import"./ToggleButton-DzetVeI0.js";import"./SuggestionItem-rfQMdI2X.js";import"./index-Ce8fTDv-.js";import"./Option-CpzuJS-B.js";import"./index-B8VDamox.js";import"./SegmentedButton-D6lmAoRT.js";import"./index-D7R2LnC5.js";import"./Select-_Bmu2vih.js";import"./InvisibleMessage-T6cHYe91.js";import"./slim-arrow-down-BhY_0Ri7.js";import"./index-BSkcr-Mn.js";import"./index-KuLG5MtP.js";import"./index-BCja9vcE.js";import"./index-D-3bVUSA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ebwsLBYv.js";import"./group-2-u3I6G4vD.js";import"./sort-descending-23WgyaPw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QOahos4e.js";import"./utils-BQuRkdbJ.js";import"./index-zsRPmIQK.js";import"./index-DmXBAxhG.js";import"./index-CCDJeSeX.js";import"./navigation-down-arrow-sKnsIYlJ.js";import"./navigation-right-arrow-dBgLFMal.js";import"./navigation-right-arrow-CxjBdfVG.js";import"./useCurrentTheme-BSsb-VWY.js";import"./index-DfDYC92c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C0KpyHf-.js";import"./paper-plane-DJ7-IFy3.js";import"./index-BvqiMI89.js";import"./less-0nIOA2m3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
