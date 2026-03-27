import{j as e}from"./iframe-DNoxABv1.js";import{useMDXComponents as n}from"./index-DQAMMhq5.js";import{I as r}from"./CommandsAndQueries-DUw_qZ-D.js";import{M as s,C as l}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import"./copy-BoMvLlry.js";import{F as a}from"./Footer-CRUbKNtZ.js";import"./PageNotFound-DExHfP7X.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BooCYcav.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-4KtEWIlR.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./index-DAoAOn92.js";import"./index-BfoP-fai.js";import"./index-Kl-B_MHz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-B0My9-lL.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuQN5VCp.js";import"./delete-B_HGMo5o.js";import"./settings-BVsnDJhd.js";import"./NoData-BDxdgXKC.js";import"./NoFilterResults-B4fzW4Bb.js";import"./index-uo-jBSXF.js";import"./IllustratedMessage--JR8YmB3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Crw8GZKM.js";import"./Input-DodynmuQ.js";import"./ResponsivePopoverCommon.css-DNwar9Nr.js";import"./ValueStateMessage.css-C9tLT3FD.js";import"./Suggestions.css-j42Uy4I4.js";import"./ListBoxItemGroupTemplate-CaBpClID.js";import"./ComboBoxItemGroup-D9NPBzFd.js";import"./ListItemBaseTemplate-D2CXTOkT.js";import"./Token-B_icrH04.js";import"./ScrollEnablement-DC8Xkk42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyfYcvu_.js";import"./ToggleButton-BFMYqKc3.js";import"./multiselect-all-DhBlC6xq.js";import"./SuggestionItem-DoJAxpnk.js";import"./index-BhKgk6Th.js";import"./Option-i3C7vusI.js";import"./index-BJH5L08b.js";import"./SegmentedButton-2tS_gLdU.js";import"./index-Syrnzfof.js";import"./Select-C3Bj0U0O.js";import"./InvisibleMessage-Dg53Ylmh.js";import"./index-B9ganokt.js";import"./index-39LBFfZg.js";import"./index-zLrKzjmr.js";import"./index-bQ5qgXmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BI3J0iq7.js";import"./group-2-CxloLV0V.js";import"./sort-descending-BmcZdk1d.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5nwUFBQ.js";import"./utils-R3d4ZCnY.js";import"./index-CrXubLA8.js";import"./index-DY-INShE.js";import"./index-Bv7nOmmV.js";import"./navigation-down-arrow-D0ahPAv-.js";import"./navigation-right-arrow-CfNNKs_J.js";import"./navigation-right-arrow-DDYfThNP.js";import"./useCurrentTheme-C87angth.js";import"./index-CwMCTdJZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcuZOG76.js";import"./paper-plane-LU-kIQ7l.js";import"./index-C-ToTZn7.js";import"./less-DlcEGwfo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
