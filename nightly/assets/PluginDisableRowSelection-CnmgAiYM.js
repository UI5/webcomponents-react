import{j as e}from"./iframe-BHRyWWCK.js";import{useMDXComponents as n}from"./index-vmzMr3GX.js";import{I as r,F as s}from"./CommandsAndQueries-BrUcvXA7.js";import{M as l,C as a}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import"./copy-rEHIQTke.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dn7VAWka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./index-CBZ8EfYd.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1M8nkNX0.js";import"./delete-CTFibazR.js";import"./settings-pDITWEjw.js";import"./NoData-JLZTrtOP.js";import"./IllustratedMessage-Cu6GWfHR.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DwQvGPpm.js";import"./index-DJiwBl3_.js";import"./index-DgAZ2xF_.js";import"./slim-arrow-down-CRkJhUFV.js";import"./Input-BhCBHTib.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./ValueStateMessage.css-BKyDhgmA.js";import"./Suggestions.css-C7i9nEw7.js";import"./ListBoxItemGroupTemplate-DjmSj5Ii.js";import"./ComboBoxItemGroup-BvHhbI-q.js";import"./ListItemBaseTemplate-CS4PXitH.js";import"./Token-BTLeMA0R.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8svZRnYC.js";import"./ToggleButton-Dbbqw8NC.js";import"./SuggestionItem-Dl2JpPy1.js";import"./index-DCuRMYTu.js";import"./Option-D23nggyx.js";import"./index-kofx5hev.js";import"./SegmentedButton-CgEID4bj.js";import"./index-BZ0xl2ay.js";import"./Select-BbotqLf_.js";import"./InvisibleMessage-Coe0Io3Y.js";import"./slim-arrow-down-4vXxtfSR.js";import"./index-DyS5aeY8.js";import"./index-8j0U0p6k.js";import"./index-CgNK1KA-.js";import"./index-BDlnLxSo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDR77_RK.js";import"./group-2-X3Rnt8GU.js";import"./sort-descending-mIkhhQAV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYPEZsB4.js";import"./utils-CkDRuQDp.js";import"./index-B2U7uG2L.js";import"./index-DD47so0i.js";import"./index-CAq1dCAC.js";import"./navigation-down-arrow-Ct6f73lC.js";import"./navigation-right-arrow-gjH-5iV-.js";import"./navigation-right-arrow-Da29Og35.js";import"./useCurrentTheme-B-94HWui.js";import"./index-CiAXoTzx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTNxBqyX.js";import"./paper-plane-Dw8DE4LY.js";import"./index-BrVWHGQ1.js";import"./less-Cida6587.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
