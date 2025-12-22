import{j as e}from"./iframe-C4opeNuJ.js";import{useMDXComponents as n}from"./index-DlqCzQ5b.js";import{I as r,F as s}from"./CommandsAndQueries-C6QEnHzv.js";import{M as l,C as a}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import"./copy-DCgRf4_C.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Nz8y6icB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./index-CFNq6guK.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-v-9WoqwG.js";import"./delete-QGhxrN40.js";import"./settings-DGtfH4Im.js";import"./NoData-DuSf6XJU.js";import"./IllustratedMessage-nDYnaDL0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUZWuwZ7.js";import"./index-JEMmbgM0.js";import"./index-BGSWz__O.js";import"./slim-arrow-down-CzRtJRwu.js";import"./Input-BuKdEYP0.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./ValueStateMessage.css-BTsNvEj6.js";import"./Suggestions.css-BwrSUtIe.js";import"./ListBoxItemGroupTemplate-7_0b_kLn.js";import"./ComboBoxItemGroup-BACc2obz.js";import"./ListItemBaseTemplate-CJFIMUp3.js";import"./Token-OFa2wXAf.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C8MaLOVV.js";import"./ToggleButton-DDhGeKml.js";import"./SuggestionItem-VR2o08vH.js";import"./index-DncJbrUy.js";import"./Option-cu7I_PwM.js";import"./index-OrLpWDeE.js";import"./SegmentedButton-BrIUDJd7.js";import"./index-C9Pg2ysk.js";import"./Select-C0NKAdDD.js";import"./InvisibleMessage-Bb-Qg8L3.js";import"./slim-arrow-down-CGY7sv3D.js";import"./index-CGPONq3F.js";import"./index-Df3-dXHf.js";import"./index-7x9RJa0e.js";import"./index-CRe7MavO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3qO_evC.js";import"./group-2-BBh72Dqg.js";import"./sort-descending-B-gdnF4T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7K1j5fc.js";import"./utils-BjLLyiPs.js";import"./index-BdTJmYr_.js";import"./index-CmwWT0_d.js";import"./index-BUmNjy5e.js";import"./navigation-down-arrow-B9YSMk4b.js";import"./navigation-right-arrow-DaW_IFoa.js";import"./navigation-right-arrow-B0-22NBU.js";import"./useCurrentTheme-Cg4zlSnL.js";import"./index-A3HBWtsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Mna98_.js";import"./paper-plane-BFVcYSvi.js";import"./index-GwOdSSTD.js";import"./less-CAexx3Oq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
