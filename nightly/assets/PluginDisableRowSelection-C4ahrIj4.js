import{j as e}from"./iframe-DxjY9BFy.js";import{useMDXComponents as n}from"./index-Bk5eT7re.js";import{I as r}from"./CommandsAndQueries-GjRh9gzH.js";import{M as s,C as l}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import"./copy-B5NkvAEv.js";import{F as a}from"./Footer-CWL8JIjr.js";import"./PageNotFound-CM4Hmt0N.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CTmJ_dOy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B0lBzBIQ.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./index-qULy9Htf.js";import"./index-DimdoC19.js";import"./index-BwDYaeY0.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-CzEttlwi.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuTEVJNK.js";import"./delete-DFSCL2JA.js";import"./settings-DhIcwIe_.js";import"./NoData-Donj0yxv.js";import"./NoFilterResults-BZVSZppq.js";import"./index-BuiD5R_e.js";import"./IllustratedMessage-XRfryFQC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-hPf547eC.js";import"./Input-BIIEETsw.js";import"./ResponsivePopoverCommon.css-BiuITAHl.js";import"./ValueStateMessage.css-DdvZKdw2.js";import"./Suggestions.css-CHxoHGWG.js";import"./ListBoxItemGroupTemplate-DUFNX5av.js";import"./ComboBoxItemGroup-CGeDQV0I.js";import"./ListItemBaseTemplate-BXA8e_9h.js";import"./Token-DulJYhXY.js";import"./ScrollEnablement-BXQj5TVC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PNi6yEzS.js";import"./ToggleButton-LDuVzkig.js";import"./multiselect-all-D_ss6ETt.js";import"./SuggestionItem-CGZO5oaE.js";import"./index-jwCY8hZH.js";import"./Option-BUjGedUb.js";import"./index-D7YjEcwV.js";import"./SegmentedButton-Dx2BOHdU.js";import"./index-BJKdWmq0.js";import"./Select-BxhNv8xD.js";import"./InvisibleMessage-DGUog9ZJ.js";import"./index-CzZpSYYg.js";import"./index-D2McGUFG.js";import"./index-DgvvT9HE.js";import"./index-W308MxFb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wNh9kY6V.js";import"./group-2-BzaDRO82.js";import"./sort-descending-Ciqqmb4X.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHVwRm4g.js";import"./utils-DLONvGm2.js";import"./index-DejqImO7.js";import"./index-qos3M3D6.js";import"./index-D1Ld-CDS.js";import"./navigation-down-arrow-m-tVBNuD.js";import"./navigation-right-arrow-DtEmtAkJ.js";import"./navigation-right-arrow-B93ODAzr.js";import"./useCurrentTheme-BqTnBAKc.js";import"./index-CnqD3RTV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxRoew2L.js";import"./paper-plane-B9Zip65j.js";import"./index-dJrbjC3g.js";import"./less-ipJgqOPX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
