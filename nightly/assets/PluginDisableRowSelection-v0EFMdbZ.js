import{j as e}from"./iframe-BVmbmlmH.js";import{useMDXComponents as n}from"./index-BayNuhgZ.js";import{I as r}from"./CommandsAndQueries-HKIzYk5f.js";import{M as s,C as l}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import"./copy-GT2usG3-.js";import{F as a}from"./Footer-jyZDOgk8.js";import"./PageNotFound-Bx-Sm5Da.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D8OC8vxI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-mk6Fv6C7.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./index-B9kq_n6z.js";import"./index-hq6INLou.js";import"./index-BCEgOOyQ.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./index-CGmvxCgE.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bwe8i4C1.js";import"./delete-Cf2eCD6q.js";import"./settings-A4VPhZbf.js";import"./NoData-0i2pf3q4.js";import"./NoFilterResults-CH6rLyMe.js";import"./index-qGKOQq_Z.js";import"./IllustratedMessage-CE_fHqrV.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NhJPhk66.js";import"./Input-BkR7wprP.js";import"./ResponsivePopoverCommon.css-CxapldGD.js";import"./ValueStateMessage.css-B-Atw3u2.js";import"./Suggestions.css-BaRcEW8S.js";import"./ListBoxItemGroupTemplate-DkFqFIv-.js";import"./ComboBoxItemGroup-CId5vra8.js";import"./ListItemBaseTemplate-BJdRA9m9.js";import"./Token-B76AWz4_.js";import"./ScrollEnablement-yNv_w-S6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CD5pumRX.js";import"./ToggleButton-DMuM4WHg.js";import"./multiselect-all-ioniiqjx.js";import"./SuggestionItem-DvZGJLTk.js";import"./index-C6E_dfSH.js";import"./Option-CjVbj-vV.js";import"./index-DRVa_8i1.js";import"./SegmentedButton-DpKA1VVa.js";import"./index-C-VIxdSF.js";import"./Select-CTiG6N7Z.js";import"./InvisibleMessage-CFEC6mIV.js";import"./index-OS6XWPB1.js";import"./index-CTdTtt2e.js";import"./index-vcnJyRT4.js";import"./index-CNlu7VXT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDmAuvPv.js";import"./group-2-fyvVFRtM.js";import"./sort-descending-B1icyYsO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFtwu3lL.js";import"./utils-juR4U1ZI.js";import"./index-Gfu7Ktfz.js";import"./index-CAyHYrEC.js";import"./index-B3Eg-2Xl.js";import"./navigation-down-arrow-CRpQ5yDC.js";import"./navigation-right-arrow-VmHT47vc.js";import"./navigation-right-arrow-aqMR-wNy.js";import"./useCurrentTheme-DSO3zaUO.js";import"./index-D-UcUp0F.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtJvBTrm.js";import"./paper-plane-q0zDJ9Ps.js";import"./index-BplB5G32.js";import"./less-BUs157s7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
