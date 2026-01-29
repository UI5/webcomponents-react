import{j as e}from"./iframe-_dkm4-lx.js";import{useMDXComponents as n}from"./index-DAI4KLq-.js";import{I as r,F as s}from"./CommandsAndQueries-BqJjwTMw.js";import{M as l,C as a}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import"./copy-CdpHOxV4.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories--cyb8K2N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8I7EMud0.js";import"./delete-BFlU4n88.js";import"./settings-DKHpvx8J.js";import"./NoData-C-NDq2fS.js";import"./IllustratedMessage-dVg4D6z8.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C43Z122v.js";import"./index-mDQ8kmFF.js";import"./index-fE5L-wmg.js";import"./slim-arrow-down-YnD0B6qq.js";import"./Input-CQoBJCT1.js";import"./ResponsivePopoverCommon.css-BWtbIU1l.js";import"./ValueStateMessage.css-D3oaOmzE.js";import"./Suggestions.css-DqTbturi.js";import"./ListBoxItemGroupTemplate-CxBSymlc.js";import"./ComboBoxItemGroup-BMTZSRsg.js";import"./ListItemBaseTemplate-C3bTchJi.js";import"./Token-B8wGSQWQ.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BATgW0iD.js";import"./ToggleButton-CXXLlraY.js";import"./SuggestionItem-Cz-SyCva.js";import"./index-BYeZEBFK.js";import"./Option-DDmpArcW.js";import"./index-BvjAbd4X.js";import"./SegmentedButton-CI86rvUG.js";import"./index-DiofpmJR.js";import"./Select-B68-6Rcp.js";import"./InvisibleMessage-Cuby5-08.js";import"./slim-arrow-down-Ds2hHePS.js";import"./index-DCZEipB7.js";import"./index-Da0p86mA.js";import"./index-BZMYVf63.js";import"./index-B0FAyyCx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCgM0xcn.js";import"./group-2-_TbX78jG.js";import"./sort-descending-BrpD4Gn1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzuvpoLd.js";import"./utils-CQKL6wZL.js";import"./index-Fh8qLzQn.js";import"./index-CfwLt2JK.js";import"./index-DmEe1OQb.js";import"./navigation-down-arrow-DiwCzOiQ.js";import"./navigation-right-arrow-aREcauxn.js";import"./navigation-right-arrow-BNytRyk2.js";import"./useCurrentTheme-CvQCpiy2.js";import"./index-ClgSKDC6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFHyUMry.js";import"./paper-plane-C9QCx50u.js";import"./index-NxLhfNzK.js";import"./less-DqBn0nny.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
