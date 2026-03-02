import{j as e}from"./iframe-BYdzMGmT.js";import{useMDXComponents as n}from"./index-Cj6hKPa8.js";import{I as r,F as s}from"./CommandsAndQueries-B5lWQhG8.js";import{M as l,C as a}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import"./copy-CWbk9K2V.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-cVssna8z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-DonwXZ8V.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-o_uZzUjH.js";import"./delete-CRpTyT7P.js";import"./settings-DeL5SdbF.js";import"./NoData-mwJ1Waqg.js";import"./IllustratedMessage-493kKCGH.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BFX4KQZG.js";import"./index-b49JVpuf.js";import"./index-BI-zpLc6.js";import"./slim-arrow-down-EzV-h7vN.js";import"./Input-gzz4D9_r.js";import"./ResponsivePopoverCommon.css-laFt-eqF.js";import"./ValueStateMessage.css-G31DxWEi.js";import"./Suggestions.css-D0qbNHCU.js";import"./ListBoxItemGroupTemplate-fMWQr5Wn.js";import"./ComboBoxItemGroup-CNETnNZ3.js";import"./ListItemBaseTemplate-CZN1ifJG.js";import"./Token-CelvgPLW.js";import"./ScrollEnablement-C12b1B5M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4TcI1um.js";import"./ToggleButton-muSO_ArA.js";import"./SuggestionItem-Ck_600Dg.js";import"./index-BzSXKO6G.js";import"./Option-ikxQWrXS.js";import"./index-DOxN2q1f.js";import"./SegmentedButton-D7IYgi5S.js";import"./index-Dpb_P6_i.js";import"./Select-BsZRQHw0.js";import"./InvisibleMessage-C_pu6iRf.js";import"./slim-arrow-down-ZQK8hEoe.js";import"./index-B9IEbrlj.js";import"./index-B0MOGWPf.js";import"./index-BeEOOMQe.js";import"./index-Bd3_gVkF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3B0bMDQR.js";import"./group-2-D9EY0eAa.js";import"./sort-descending-CQfXaiJr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4vmYggie.js";import"./utils-CQvHdMQU.js";import"./index-CVdG3Tpp.js";import"./index-7KL5Sw8P.js";import"./index-W__nbP8_.js";import"./navigation-down-arrow-CgevP1zB.js";import"./navigation-right-arrow-BljO3jRm.js";import"./navigation-right-arrow-DI1UPgvk.js";import"./useCurrentTheme-D-EAbyTm.js";import"./index-BL0I7ePE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BM3Vsr1m.js";import"./paper-plane-DrlzT1LA.js";import"./index-BltXWBpk.js";import"./less-DjQ8DtUG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
