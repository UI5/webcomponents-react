import{j as e}from"./iframe-DJVbwX9i.js";import{useMDXComponents as n}from"./index-BFT6aOv2.js";import{I as r}from"./CommandsAndQueries-B-krYIfz.js";import{M as s,C as l}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import"./copy-CPWU3JMS.js";import{F as a}from"./Footer-DBSBdmEP.js";import"./PageNotFound-BtEXsBVj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-8DY-ZMyw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg00UQRP.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./index-BWAGkxsQ.js";import"./index-CZorzsLp.js";import"./index-B61X8BMU.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./index-CRrLaMaU.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQGtqyIJ.js";import"./delete-tMrGx_eS.js";import"./settings-B6Cvrc7u.js";import"./NoData-Cj5YMQK8.js";import"./NoFilterResults-CCEmQCy8.js";import"./index-ByT2zG_4.js";import"./IllustratedMessage-B2SOs3LU.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CxOtw0E1.js";import"./Input-C6tRsMHY.js";import"./ResponsivePopoverCommon.css-DMESD_7X.js";import"./ValueStateMessage.css-B32Fgepl.js";import"./Suggestions.css-DPjsY_xJ.js";import"./ListBoxItemGroupTemplate-CzzKHF5M.js";import"./ComboBoxItemGroup-JobMoG47.js";import"./ListItemBaseTemplate-pZJWsuAW.js";import"./Token-gbAcy8Rw.js";import"./ScrollEnablement-CooUtaVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Nks0FEPD.js";import"./ToggleButton-DYxPFD5Z.js";import"./multiselect-all-DP7ssmA2.js";import"./SuggestionItem-Cuax2lQ0.js";import"./index-BIBwvzel.js";import"./Option-BmaMsH-E.js";import"./index-a2eC0PlC.js";import"./SegmentedButton-1seDyEXD.js";import"./index-CFknfRnD.js";import"./Select-DSt7ZpIf.js";import"./InvisibleMessage-CqYmaIC8.js";import"./index-Bcxa0S6V.js";import"./index-DO8-DS6K.js";import"./index-uuyZWzts.js";import"./index-D9T3Iy8W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9QXFmXZL.js";import"./group-2-gHK-0O3-.js";import"./sort-descending-DIz0ouCx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyE6LhaQ.js";import"./utils-DaqdMko9.js";import"./index-_WjPnhUA.js";import"./index-6kSlfcqu.js";import"./index-CAyyWJ5s.js";import"./navigation-down-arrow-bto-rTSq.js";import"./navigation-right-arrow-DOd378v6.js";import"./navigation-right-arrow-qA5U1c9K.js";import"./useCurrentTheme-C6yijx3q.js";import"./index-BY6rd6fw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL2sk3kX.js";import"./paper-plane-WokCt9TE.js";import"./index-Dzbbd-4U.js";import"./less-DQGRAL1V.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
