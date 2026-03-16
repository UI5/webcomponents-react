import{j as e}from"./iframe-D8qIAX_f.js";import{useMDXComponents as n}from"./index-DiTh5Uxf.js";import{I as r}from"./CommandsAndQueries-KW_TEdhO.js";import{M as s,C as l}from"./blocks-CdiMt6d7.js";import"./Tag-DNk7gwKS.js";import"./index-CUBI-ScP.js";import"./copy-B-3EcH3S.js";import{F as a}from"./Footer-CDmCmrx9.js";import"./PageNotFound-DinCfZiZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DWxML14G.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sqVv97Mp.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./index-BWh6tnxq.js";import"./index-isyxk5XI.js";import"./index-D_VELT5i.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./index-CaB62qmL.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bnfme1CR.js";import"./delete-DKzsPxV3.js";import"./settings-Co-dt12h.js";import"./NoData-CnuitWCi.js";import"./NoFilterResults-B0VftMR5.js";import"./index-BZjfN2bH.js";import"./IllustratedMessage-D4OKg0ld.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BycYSYli.js";import"./Input-D0_UTDDL.js";import"./ResponsivePopoverCommon.css-BtulJSvz.js";import"./ValueStateMessage.css-BIixIGY4.js";import"./Suggestions.css-BhNcBbmQ.js";import"./ListBoxItemGroupTemplate-BJn4gBeU.js";import"./ComboBoxItemGroup-ezj5F7ji.js";import"./ListItemBaseTemplate-riJMQTas.js";import"./Token-BcYmw9w_.js";import"./ScrollEnablement-BgCuAdCA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DALcwdap.js";import"./ToggleButton-C3jU9kII.js";import"./multiselect-all-CaYmyguO.js";import"./SuggestionItem-_h5nzTSK.js";import"./index-0yjrcroP.js";import"./Option-DpFSS1nL.js";import"./index-SMtvyjeP.js";import"./SegmentedButton-D8_R1Jby.js";import"./index-BPpdvqUC.js";import"./Select-1OmCgp3X.js";import"./InvisibleMessage-B7bFjCnk.js";import"./index-IudE1LKk.js";import"./index-BGEKXSC0.js";import"./index-CT5M-svC.js";import"./index-DjTGYXxN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3JrpZ6b.js";import"./group-2-WoDpIjlk.js";import"./sort-descending-B4RgaCGU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-p_9aB8wm.js";import"./utils-BRwctz-8.js";import"./index-DW0jnqVx.js";import"./index-BSeapbsT.js";import"./index-Dm1qzLAZ.js";import"./navigation-down-arrow-BKjF3iRZ.js";import"./navigation-right-arrow-HHGkA-Ie.js";import"./navigation-right-arrow-BMk4pdcr.js";import"./useCurrentTheme-DWdXkjvV.js";import"./index-D-H2QYf3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NNdXKXQ8.js";import"./paper-plane-D1mqNsgN.js";import"./index-Brr52Ff4.js";import"./less-DV5NSC93.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
