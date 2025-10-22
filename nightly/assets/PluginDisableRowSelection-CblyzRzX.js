import{j as e}from"./iframe-Cq4aPHLo.js";import{useMDXComponents as n}from"./index-DtjXbTDz.js";import{I as r,F as s}from"./CommandsAndQueries-CXjPz3Rk.js";import{M as l,C as a}from"./blocks-DS_hC92x.js";import"./Tag-C40beB3s.js";import"./index-CmKxyzHV.js";import"./copy-D9etBJkT.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D0IPW50b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkXTOe1d.js";import"./index-Dc8fq3Wn.js";import"./index-AjPpxwQf.js";import"./Link-BfHdWWup.js";import"./index-CCLlvQbb.js";import"./index-BEk2R1hN.js";import"./index-Bj4AjQ7z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Crxlx4bK.js";import"./addCustomCSSWithScoping-CwGFzfIe.js";import"./index-BRBHL30E.js";import"./information-DhBkhQvI.js";import"./sys-enter-2-CiSpLSDz.js";import"./alert-2iAYPloM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cxs3bmao.js";import"./delete-DuKV644D.js";import"./settings-Bx7P5Rsi.js";import"./NoData-DPfPzF9p.js";import"./IllustratedMessage-BpFqwb-K.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lnnemqJe.js";import"./index-D6pT8vft.js";import"./index-Bh8RO2Zu.js";import"./slim-arrow-down-C0mxaQDT.js";import"./Input-Ccd7dYO4.js";import"./ResponsivePopoverCommon.css-1bQc-N4g.js";import"./ValueStateMessage.css-DmjkXWTx.js";import"./Suggestions.css-Dv9Ubz9b.js";import"./ListBoxItemGroupTemplate-Cb3ILXPe.js";import"./ComboBoxItemGroup-Dwg0E3j4.js";import"./ListItemBaseTemplate-CKaO6iQB.js";import"./Token-BbSC7JN1.js";import"./ScrollEnablement-aZYLZB-E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuP7QTbV.js";import"./ToggleButton-CnIysQwb.js";import"./SuggestionItem-C_HyWpKH.js";import"./index-BpQnZ4ry.js";import"./Option-gCXiIbtJ.js";import"./index-BwQ0JjIK.js";import"./SegmentedButton-Cxs_SXe9.js";import"./index-DSgunCqA.js";import"./Select-B_k5KaS4.js";import"./InvisibleMessage-CMcGtz6a.js";import"./slim-arrow-down-C0_o1aXe.js";import"./index-S6fOLFIs.js";import"./index-qCktYvmT.js";import"./index-B_YXqDWP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8NFCAB_.js";import"./group-2-Cx2aNRof.js";import"./sort-descending-BAx3CRhx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHDDLv5p.js";import"./utils-CJdUm82l.js";import"./index-UrX3mLF3.js";import"./index-JwWqV5vE.js";import"./index-Cd8h9PX8.js";import"./navigation-down-arrow-E4rpsFHM.js";import"./navigation-right-arrow-BO9UmjB0.js";import"./navigation-right-arrow-uogtFvqw.js";import"./useCurrentTheme-DcPQzSup.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bz5_tICb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xz9tTNk8.js";import"./paper-plane-BZ21gZCD.js";import"./index-nJoJBiEe.js";import"./less-OGBOJDtp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
