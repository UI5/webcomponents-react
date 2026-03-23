import{j as e}from"./iframe-a0uMhM0K.js";import{useMDXComponents as n}from"./index-BsqnGYZV.js";import{I as r}from"./CommandsAndQueries-Daj0tnDY.js";import{M as s,C as l}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import"./copy-Ba79n2H6.js";import{F as a}from"./Footer-UprvpWI8.js";import"./PageNotFound-C4t5kuHt.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-YpZ0GhC2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9XRs14a.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./index-BsmCDa7r.js";import"./index-CqObD5eZ.js";import"./index-C3E6FzVb.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./index-Dk4guAK8.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DI7as0nc.js";import"./delete-CHUFQ_Wx.js";import"./settings-0W4GYaRC.js";import"./NoData-C84zCcIQ.js";import"./NoFilterResults-CalnQnoH.js";import"./index-C3VG9dWs.js";import"./IllustratedMessage-6HZ5lnOp.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CQrOQkiM.js";import"./Input-cpApaPQM.js";import"./ResponsivePopoverCommon.css-CmTsDlHw.js";import"./ValueStateMessage.css-BRKXcIHj.js";import"./Suggestions.css-COVTnGJE.js";import"./ListBoxItemGroupTemplate-BmSBtRf2.js";import"./ComboBoxItemGroup-B5J72oZn.js";import"./ListItemBaseTemplate-Bvq28n1p.js";import"./Token-BTe6Dqe3.js";import"./ScrollEnablement-BVy3cq7b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1cxGoSI.js";import"./ToggleButton-CDAZTyeN.js";import"./multiselect-all-BBXS-Ub9.js";import"./SuggestionItem-_JxlPU60.js";import"./index-D9Od-yF4.js";import"./Option-BcWQble4.js";import"./index-CO9KWXos.js";import"./SegmentedButton-BBAnOIL_.js";import"./index-aqjhKmIi.js";import"./Select-Dh14rH5k.js";import"./InvisibleMessage-izuFC8Iy.js";import"./index-BLYN_WbG.js";import"./index-yNBIcJ04.js";import"./index-DELXSaBp.js";import"./index-CDAiDCq4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BceI_bVx.js";import"./group-2-Dc2Sp64W.js";import"./sort-descending-uLy3-9KR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DsvBCAhC.js";import"./utils-CPpPlE2x.js";import"./index-DsURjSQ9.js";import"./index-Cma-sbNZ.js";import"./index-C-nOKAHu.js";import"./navigation-down-arrow-KRMhOoWK.js";import"./navigation-right-arrow-DlOUO2TW.js";import"./navigation-right-arrow-DE4TJjHn.js";import"./useCurrentTheme-Bd3jJx1F.js";import"./index-BuPDweMG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9TsxZjtE.js";import"./paper-plane-B5upeV1m.js";import"./index-BD5Z38ff.js";import"./less-DeRh0NtQ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
