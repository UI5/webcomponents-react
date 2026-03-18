import{j as e}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as n}from"./index-CxvvrXjD.js";import{I as r}from"./CommandsAndQueries-DwKUywP6.js";import{M as s,C as l}from"./blocks-HNp4GQzu.js";import"./Tag-Br4lHrdC.js";import"./index-CrEz3lFQ.js";import"./copy-CzvsuiXE.js";import{F as a}from"./Footer-BemjN3C9.js";import"./PageNotFound-CBU2IUWB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DX9fjdm3.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C6y8N-8D.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./index-DzsGzp3s.js";import"./index-Bdq6p_tF.js";import"./index-B7JluNCD.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./index-CVU3jLpA.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ch_l4A71.js";import"./delete-BKIa5Inl.js";import"./settings-BcO7jpsd.js";import"./NoData-ddeZ4ZzU.js";import"./NoFilterResults-CLt_pcJr.js";import"./index-D4zEeQxJ.js";import"./IllustratedMessage-C-jaf42F.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C6zym0cc.js";import"./Input-BUGKz_Lc.js";import"./ResponsivePopoverCommon.css-BNW7Lf7K.js";import"./ValueStateMessage.css-CsVqWCnq.js";import"./Suggestions.css-CiLhqI_s.js";import"./ListBoxItemGroupTemplate-DuN5V80J.js";import"./ComboBoxItemGroup-BDZf4X_E.js";import"./ListItemBaseTemplate-C-EP-_9g.js";import"./Token-C7sAHdda.js";import"./ScrollEnablement-CooVjliK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ukU4a9WM.js";import"./ToggleButton-B8x_Ly1G.js";import"./multiselect-all-D-0oG0IX.js";import"./SuggestionItem-DVm2dPtw.js";import"./index-DcLk1pTn.js";import"./Option-Bszoi-kz.js";import"./index-AdZo8yaG.js";import"./SegmentedButton-DEpOrwoF.js";import"./index-DQXdXHie.js";import"./Select-B3y19PJu.js";import"./InvisibleMessage-CYdYwTWM.js";import"./index-C7F5crtR.js";import"./index-CPDkMcuG.js";import"./index-D0ugXmVP.js";import"./index-BvAWjuf0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdQ7f2b4.js";import"./group-2-DuaaGf8G.js";import"./sort-descending-C7lARj89.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-IBNXnUtg.js";import"./utils-D_ECpqQL.js";import"./index-DPRhzH27.js";import"./index-BgWJyTu-.js";import"./index-BpMYt18L.js";import"./navigation-down-arrow-BuFUK5Hw.js";import"./navigation-right-arrow-BH82ZZ1S.js";import"./navigation-right-arrow-B2TA0-_n.js";import"./useCurrentTheme-ChdRBpiw.js";import"./index-CIBb-yD5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B54Bx3mH.js";import"./paper-plane-B0LEVO2L.js";import"./index-CemenA4y.js";import"./less-B-s43OsD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
