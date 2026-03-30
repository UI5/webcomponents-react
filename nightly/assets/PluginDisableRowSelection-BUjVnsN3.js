import{j as e}from"./iframe-C-8CikNF.js";import{useMDXComponents as n}from"./index-Cw4SbHnF.js";import{I as r}from"./CommandsAndQueries-CurTw3Lj.js";import{M as s,C as l}from"./blocks-BmssVOG3.js";import"./Tag-MEJh1Ko9.js";import"./index-hi0bZbmw.js";import"./copy-CzzG0WN_.js";import{F as a}from"./Footer-DRQAPrhO.js";import"./PageNotFound-5CESdk48.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-nZEoohGM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-xVMMn3oU.js";import"./index-H3f20a9K.js";import"./index-BGM8gXjK.js";import"./index-02sMf1JQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEjyiyGF.js";import"./addCustomCSSWithScoping-iAIUxvTa.js";import"./index-DH3Cr8HB.js";import"./index-C39Oe1_-.js";import"./index-CaBNGx_8.js";import"./information-0aMtiy50.js";import"./sys-enter-2-grGMmfr8.js";import"./alert-sWw94Nn1.js";import"./index-knQkJN_L.js";import"./Illustrations-2Vhs9c3z.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeZRXVtI.js";import"./delete-B0CQH0j2.js";import"./settings-BNA1mWt_.js";import"./NoData-DMCS5Vz4.js";import"./NoFilterResults-Bt4mVsHw.js";import"./index-DNtZAHXL.js";import"./IllustratedMessage-3NhY3KHW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BxgPMGl5.js";import"./Input-CjfkHsNs.js";import"./ResponsivePopoverCommon.css-DmWEYKaX.js";import"./ValueStateMessage.css-1Br4XeI3.js";import"./Suggestions.css-C3zAGvC_.js";import"./ListBoxItemGroupTemplate-BTrvVHjp.js";import"./ComboBoxItemGroup-Bpj0Uiax.js";import"./ListItemBaseTemplate-D-6s2YQ8.js";import"./Token-Bhsr7kcp.js";import"./ScrollEnablement-CUpc0mcF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3jDGq2u.js";import"./ToggleButton-D5zExb4V.js";import"./multiselect-all-C59dWexR.js";import"./SuggestionItem-C1Ega4dM.js";import"./index-BTuv7LqQ.js";import"./Option-COlVveIk.js";import"./index-CNSy6tjm.js";import"./SegmentedButton-DGDitfbf.js";import"./index-C4LEWr2J.js";import"./Select-v-QOwdxL.js";import"./InvisibleMessage-B79dV3sk.js";import"./index-CWsH9Itz.js";import"./index-BR9SVpEM.js";import"./index-D5wXhC2X.js";import"./index-DcOtFncG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYWin5du.js";import"./group-2-CaV5CvR6.js";import"./sort-descending-DGpVCv8O.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGWYkQPr.js";import"./utils-DpuRRaMs.js";import"./index-CCC96T7R.js";import"./index-DB7mThPO.js";import"./index-uevVwIJI.js";import"./navigation-down-arrow-BhJhAQY_.js";import"./navigation-right-arrow-BQ-rP2XP.js";import"./navigation-right-arrow-UOcapVb1.js";import"./useCurrentTheme-DNZb_fAn.js";import"./index-s1hOd9kk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sTzpNQ4b.js";import"./paper-plane-C9ax1T8B.js";import"./index-2SjK2Mh1.js";import"./less-CIKLJJJe.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
