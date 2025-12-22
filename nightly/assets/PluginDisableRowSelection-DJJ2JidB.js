import{j as e}from"./iframe-CMOSZBev.js";import{useMDXComponents as n}from"./index-BTwv99x0.js";import{I as r,F as s}from"./CommandsAndQueries-BBxM4nbH.js";import{M as l,C as a}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import"./copy-CxpwRqG0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BGGuuGm3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./index-B2Bp115n.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWm8Pdnv.js";import"./delete-jqJpTe2L.js";import"./settings-1zMM0TTB.js";import"./NoData-DBuwgpdA.js";import"./IllustratedMessage-BofcQBlB.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DWqRVxEj.js";import"./index-CKirJzli.js";import"./index-DF53ugeV.js";import"./slim-arrow-down-DAnkwZ8z.js";import"./Input-BmUNjham.js";import"./ResponsivePopoverCommon.css-BCnF-C9t.js";import"./ValueStateMessage.css-3iIUq-Eq.js";import"./Suggestions.css-BiChEPXm.js";import"./ListBoxItemGroupTemplate-CCd_4VBx.js";import"./ComboBoxItemGroup-BTATmQjz.js";import"./ListItemBaseTemplate-CCj-4nFf.js";import"./Token-Bw95vKiC.js";import"./ScrollEnablement-CZWkeAzp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ToggleButton-PO6AUubZ.js";import"./SuggestionItem-DGmpPMHq.js";import"./index-DErYtSvu.js";import"./Option-BASIIjCE.js";import"./index-D_1ao0HG.js";import"./SegmentedButton-Ck1jyoaW.js";import"./index-DN0A1xHB.js";import"./Select-Dl8hzlud.js";import"./InvisibleMessage-CxtLELZ9.js";import"./slim-arrow-down-D_esAgSu.js";import"./index-DXnWcts-.js";import"./index-BVDh7HGR.js";import"./index-CCryildS.js";import"./index-Cb1OiNpu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B2Cmbs5j.js";import"./group-2-CW05y1Vx.js";import"./sort-descending-BJlygo9d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTplp2oj.js";import"./utils-CJbFgKgb.js";import"./index-CVcS8amw.js";import"./index-CKyJB_mr.js";import"./index-BqkbFWdI.js";import"./navigation-down-arrow-ehohWkFC.js";import"./navigation-right-arrow-BbmuEJCf.js";import"./navigation-right-arrow-5URvnLbD.js";import"./useCurrentTheme-B0G4hFaD.js";import"./index-CZhfcpCP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cu0Jio6B.js";import"./paper-plane-CwtFbMNe.js";import"./index-D1fdw4IU.js";import"./less-CzDyuHok.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
