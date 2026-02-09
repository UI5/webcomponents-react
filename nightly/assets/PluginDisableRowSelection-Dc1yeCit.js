import{j as e}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as n}from"./index-BiuvjkCM.js";import{I as r,F as s}from"./CommandsAndQueries-ytOuH94-.js";import{M as l,C as a}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import"./copy-BjvlOXfT.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BnbIzEo_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./index-Byqgf8K2.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDRO25a3.js";import"./delete-DkVxgj5N.js";import"./settings-B8j3pPLA.js";import"./NoData-Du8GcV6i.js";import"./IllustratedMessage-BCiJ057a.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D6qm1nzI.js";import"./index-BujEWK6T.js";import"./index-DYG2Vdb4.js";import"./slim-arrow-down-j9pUzMGy.js";import"./Input-aWxLYUOH.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./Suggestions.css-CYbXagSM.js";import"./ListBoxItemGroupTemplate-CAvECdcE.js";import"./ComboBoxItemGroup-BqcdpAL3.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./Token-sB_rM26o.js";import"./ScrollEnablement-B1RfGkn3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKFwa_4E.js";import"./ToggleButton-DKEo7U1V.js";import"./SuggestionItem-zI-P11G7.js";import"./index-ogcyTCWN.js";import"./Option-DXRWtWSV.js";import"./index-C9V8CTKB.js";import"./SegmentedButton-DYA5jfhl.js";import"./index-evKF2db_.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./index-CmIpi4Rb.js";import"./index-Bp86dvN4.js";import"./index-Pmf_BpVu.js";import"./index-B5ZwNjp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-l9YCafK6.js";import"./group-2-znhZwlOC.js";import"./sort-descending-BcNVNZRA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZS5vz4t.js";import"./utils-KxVQ4L7v.js";import"./index-DDKkq_Id.js";import"./index-DR-CaoyZ.js";import"./index-BOghOFF-.js";import"./navigation-down-arrow-BVesL-Rd.js";import"./navigation-right-arrow-CoaCyhr_.js";import"./navigation-right-arrow-CG1gauat.js";import"./useCurrentTheme-B6Ee2Jvq.js";import"./index-Do2i3zOr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H0EZaAzq.js";import"./paper-plane-DuZ0ORth.js";import"./index-XGPworLT.js";import"./less-Cbt4luUN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
