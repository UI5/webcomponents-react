import{j as e}from"./iframe-Cs5gvioi.js";import{useMDXComponents as n}from"./index-BtKDOpat.js";import{I as r,F as s}from"./CommandsAndQueries-BdMbFe6n.js";import{M as l,C as a}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import"./copy-DKGYESSv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bah13JbR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C55QbHYW.js";import"./delete-CsuXrnL4.js";import"./settings-3bL7AxSj.js";import"./NoData-gyUpjjzs.js";import"./IllustratedMessage-BceXQMeD.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BkmX49kP.js";import"./index-CrEnkyES.js";import"./index-DygCzEx2.js";import"./slim-arrow-down-DXUzQK41.js";import"./Input-DD--HJgU.js";import"./ResponsivePopoverCommon.css-DsMB5qWp.js";import"./ValueStateMessage.css-DQ3KvLVl.js";import"./Suggestions.css-CQKPof5S.js";import"./ListBoxItemGroupTemplate-D1OUhHLE.js";import"./ComboBoxItemGroup-mjT1FhTP.js";import"./ListItemBaseTemplate-pXS2uemi.js";import"./Token-Vd3_FFDP.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJ7R2iOM.js";import"./ToggleButton-DtqSYEtq.js";import"./SuggestionItem-Cy-toAYd.js";import"./index-Dn8IZjAy.js";import"./Option-CSEjJgZb.js";import"./index-B8E3208u.js";import"./SegmentedButton-BzfIjTCb.js";import"./index-CKPEe733.js";import"./Select-C34yPPyn.js";import"./InvisibleMessage-sIaY5jUe.js";import"./slim-arrow-down-Vs4ZtB-z.js";import"./index-BJpgtMTj.js";import"./index-BJuiI9q0.js";import"./index-D5YUVenJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nzG_jgzZ.js";import"./group-2-9Ba8pfXC.js";import"./sort-descending-Dk7bIx-V.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeDU4ks0.js";import"./utils-D1ZaWfd7.js";import"./index-CfxXWdHC.js";import"./index-wq4yb3YT.js";import"./index-DD1WbCut.js";import"./navigation-down-arrow-Dnzw4uYB.js";import"./navigation-right-arrow-CsjF2Nv1.js";import"./navigation-right-arrow-CfUUtfYq.js";import"./useCurrentTheme-Dcwokryc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dypxe4oE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqvqHW8h.js";import"./paper-plane-DfliGKzl.js";import"./index-DsaE3rZW.js";import"./less-C_A2DZHR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
