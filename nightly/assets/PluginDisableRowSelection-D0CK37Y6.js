import{j as e}from"./iframe-BH4bVelf.js";import{useMDXComponents as n}from"./index-BZqT0YF1.js";import{I as r,F as s}from"./CommandsAndQueries-D9wpOiDr.js";import{M as l,C as a}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import"./copy-Dqlw1cCi.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CU79LRwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5b86cogR.js";import"./delete-D4wiFYB9.js";import"./settings-CWwIQT_C.js";import"./NoData-BFhg-GG6.js";import"./IllustratedMessage-34DEvqfA.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BZAg4ngt.js";import"./index-BZGTGu9E.js";import"./index-BvDC2UXj.js";import"./slim-arrow-down-BYwdEN3E.js";import"./Input-B0gYbYgt.js";import"./ResponsivePopoverCommon.css-CkobxXTu.js";import"./ValueStateMessage.css-C6Kv6bre.js";import"./Suggestions.css-BLG2o1V5.js";import"./ListBoxItemGroupTemplate-prNPVmNr.js";import"./ComboBoxItemGroup-C29Z681b.js";import"./ListItemBaseTemplate-CxzuukWL.js";import"./Token-Ct7p5V6Z.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dk4MirOU.js";import"./ToggleButton-CKPPi0F4.js";import"./SuggestionItem-DTaZ3jXG.js";import"./index-B5H40sXS.js";import"./Option-D8eBTNON.js";import"./index-BqP_tsIy.js";import"./SegmentedButton-D16K0baA.js";import"./index-_nPQLI_b.js";import"./Select-5ewiLwL1.js";import"./InvisibleMessage-IGW-rAUo.js";import"./slim-arrow-down-9BYKuyUs.js";import"./index-7MRTM3HB.js";import"./index-DVGATJ5a.js";import"./index-DznWkkCi.js";import"./index-DldxGphJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXWEU5fn.js";import"./group-2-DRzez2hn.js";import"./sort-descending-C_q3rv9b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSpNMFp0.js";import"./utils-C0YjVaw1.js";import"./index-CAeOO4wN.js";import"./index-B5eeZss-.js";import"./index-CBsiXwh_.js";import"./navigation-down-arrow-_ZsRec2W.js";import"./navigation-right-arrow-49__25dM.js";import"./navigation-right-arrow-dg6jTT0c.js";import"./useCurrentTheme-DAO2rCbm.js";import"./index-BsJLWcly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsU26iOF.js";import"./paper-plane-CAa_-spX.js";import"./index-CROEbkYy.js";import"./less-B3ilKLXN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
